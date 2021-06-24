const { Client, Intents, Collection } = require('discord.js');
const fs = require('fs');
require('dotenv').config();

const client = new Client({ ws: { intents: Intents.ALL } });
client.commands = new Collection();

client.login(process.env.DISCORD_BOT_TOKEN);