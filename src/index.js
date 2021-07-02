const { Client, Intents } = require('discord.js');
const fs = require('fs');
require('dotenv').config();

const client = new Client({ ws: { intents: Intents.ALL } });

fs.readdir(`${__dirname}/events`, (err, events) => {
  if (err) console.error(err);

  events.map((event) => {
    if (!event.endsWith('.js')) return;
    const eventName = event.replace('.js', '');
    const eventClass = require(`${__dirname}/events/${event}`);

    client.on(eventName, (...args) => (new eventClass).run(...args, client));
  });
});

// L'exécution de cet event doit obligatoirement être ici car, dans un fichier, pour une raison étrange, `client` est
// égal à 0.
client.ws.on('INTERACTION_CREATE', (interaction) => {
  const command = interaction.data.name.toLowerCase();
  const args = interaction.data.options;

  fs.readdir(`${__dirname}/commands`, (error, files) => {
    if (error) throw error;

    files.map((file) => {
      if (!file.endsWith('.js')) return;
      const commandName = file.replace('.js', '');
      const commandClass = require(`${__dirname}/commands/${file}`);

      client.api.applications(client.user.id).guilds('853738781541924894').commands.post({
        data: (new commandClass).getHelp()
      });

      if (command === commandName) {
        client.api.interactions(interaction.id, interaction.token).callback.post({
          data: {
            type: 4,
            data: (new commandClass).run(interaction, client, args)
          }
        });
      }
    });
  });
});

client.login(process.env.DISCORD_BOT_TOKEN);