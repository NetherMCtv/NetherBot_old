require('dotenv').config();

const twitch = {
  clientId: 'zv0sw5ed79ztqbgzup53c6x9lxhgyo',
  clientSecret: process.env.TWITCH_SECRET
};

const twitter = {
  apiKey: 'MkRmNsiJpN6pg3gMZcBvCuau4',
  apiKeySecret: process.env.TWITCH_API_KEY_SECRET,
  accessToken: '1192081506577113088-c2bA6EYDCCCWORKdWS3NN3rHss29ZR',
  accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};

module.exports = {
  twitch, twitter
};