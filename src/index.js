const { Client, Intents } = require('discord.js');
require('dotenv').config();

const client = new Client({ ws: { intents: Intents.ALL } });

client.login(process.env.DISCORD_BOT_TOKEN);