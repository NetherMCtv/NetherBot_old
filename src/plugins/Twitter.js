const fetch = require('node-fetch');
const { twitter } = require('../helpers/Constants');
const Twit = require('twit');

class TwitchPlugin {

  constructor() {
    this.twit = new Twit({
      consumer_key: twitter.apiKey,
      consumer_secret: twitter.apiKeySecret,
      access_token: twitter.accessToken,
      access_token_secret: twitter.accessTokenSecret,
      timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
      strictSSL: true        // optional - requires SSL certificates to be valid.
    });

    console.log(this.getFollowersCount());
  }

  getFollowersCount() {
    return this.twit.get('tweets', { ids: '1410262887415824390', 'tweet.fields': 'created_at', expansions: 'author_id', 'user.fields': 'created_at' }, (err, data, res) => {
      if (err) throw err;
      console.log(data);
      console.log(res);
    });
  }

}

module.exports = TwitchPlugin;