require('dotenv').config();

const twitch = {
  clientId: 'zv0sw5ed79ztqbgzup53c6x9lxhgyo',
  clientSecret: process.env.TWITCH_SECRET
};

module.exports = {
  twitch
};