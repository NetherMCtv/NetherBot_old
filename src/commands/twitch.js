const Command = require('../helpers/Command');
const Embed = require('../helpers/Embed');

class TwitchCommand extends Command {

  constructor() {
    super();

    this.setHelp({
      name: 'twitch',
      description: 'followers twitch'
    });
  }

  run(interaction, client) {
    const embed = new Embed({
      author: {
        name: 'NetherMC',
        url: 'https://www.twitch.tv/NetherMCtv'
      },
      title: 'Twitch',
      description: 'Informations à propos de ma chaîne Twitch.',
      fields: [
        {
          name: 'Followers',
          value: '<?> followers',
          inline: true
        },
        {
          name: 'En live',
          value: 'Non',
          inline: true
        },
      ]
    }, client);
    return { embeds: [embed] };
  }

}

module.exports = TwitchCommand;