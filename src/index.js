const { Client, Intents, Collection } = require('discord.js');
const fs = require('fs');
require('dotenv').config();

const client = new Client({ ws: { intents: Intents.ALL } });
client.commands = new Collection();

fs.readdir(`${__dirname}/commands`, (err, commands) => {
  if (err) console.error(err);

  commands.map((command) => {
    if (!command.endsWith('.js')) return;
    const commandName = command.replace('.js', '');
    const commandClass = new require(`${__dirname}/commands/${command}`);

    client.commands.set(commandName, commandClass);
  });
});

fs.readdir(`${__dirname}/events`, (err, events) => {
  if (err) console.error(err);

  events.map((event) => {
    if (!event.endsWith('.js')) return;
    const eventName = event.replace('.js', '');
    const eventClass = require(`${__dirname}/events/${event}`);

    client.on(eventName, (...args) => (new eventClass).run(...args, client));
  });
});

client.login(process.env.DISCORD_BOT_TOKEN);