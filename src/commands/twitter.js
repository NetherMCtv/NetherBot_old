const Command = require('../helpers/Command');
const Embed = require('../helpers/Embed');
const TwitterPlugin = require('../plugins/Twitter');

class TwitterCommand extends Command {

  constructor() {
    super();

    this.setHelp({
      name: 'twitter',
      description: 'Twitter'
    });
  }

  run(interaction, client) {
    const twitter = new TwitterPlugin();
    const embed = new Embed({
      author: {
        name: 'NetherMC',
        url: 'https://twitter.com/NetherMC_'
      },
      title: 'Twitter',
      description: 'Informations à propos de mon Twitter.',
      fields: [
        {
          name: 'Followers',
          value: `${twitter.getFollowersCount()} followers`,
          inline: true
        }
      ]
    }, client);
    return { embeds: [embed] };
  }

}

module.exports = TwitterCommand;