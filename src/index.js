const { Client, Intents } = require('discord.js');
const fs = require('fs');
const fetch = require('node-fetch');
require('dotenv').config();
require('moment').locale('fr_FR');
require('../api/server');

const client = new Client({ ws: { intents: Intents.ALL } });
module.exports.client = client;

fs.readdir(`${__dirname}/events`, (err, events) => {
  if (err) console.error(err);

  events.map((event) => {
    if (!event.endsWith('.js')) return;
    const eventName = event.replace('.js', '');
    const eventFunc = require(`${__dirname}/events/${event}`);

    client.on(eventName, (...args) => eventFunc(...args, client));
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

      const guildId = interaction.guild_id;
      const clientId = client.user.id;

      client.api.applications(clientId).guilds(guildId).commands.post({ data: commandClass.getHelp() });

      if (command === commandName) {
        const config = (body) => {
          return {
            method: 'put',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`
            },
            body: JSON.stringify(body)
          };
        };
        const ownerPermission = fetch(
          `https://discord.com/api/v9/applications/${clientId}/guilds/${guildId}/commands/${interaction.data.id}/permissions`,
          config({
            permissions: [
              {
                type: 2,
                id: '807326854314590228',
                permission: true
              }
            ]
          })
        );
        Promise.all([ownerPermission]).catch(console.error);

        if (commandClass.getPermission()) {
          const permissions = fetch(
            `https://discord.com/api/v9/applications/${clientId}/guilds/${guildId}/commands/${interaction.data.id}/permissions`,
            config({ permissions: commandClass.getPermission() })
          );
          Promise.all([permissions, ownerPermission]).catch(console.error);
        }

        const data = (new commandClass).run(interaction, client, args);
        client.api.interactions(interaction.data.id, interaction.token).callback.post({ data: { type: 4, data } });
      }
    });
  });
});

client.login(process.env.DISCORD_BOT_TOKEN);