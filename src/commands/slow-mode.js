const Command = require('../helpers/Command');

class DonateCommand extends Command {

  constructor() {
    super();

    this.setHelp({
      name: 'slow-mode',
      description: 'Définir le temps du mode lent',
      default_permission: false,
      options: [
        {
          type: 4,
          name: 'secondes',
          description: 'Temps du mode lent (0 pour désactiver)',
          required: true
        }
      ]
    });
    this.setPermission([
      {
        type: 1,
        id: '855852738544926771',
        permission: true
      }
    ]);
  }

  run(interaction, client, args) {
    const channel = interaction.channel_id;
    const rateLimit = args[0].value;
    client.channels.cache.get(channel)?.setRateLimitPerUser(rateLimit);

    if (rateLimit === 0) {
      return this.returnContent('<a:yes:859024680489189388> **Le mode lent a été désactivé**');
    }
    return this.returnContent(`<a:yes:859024680489189388> **Le mode lent a été défini à ${rateLimit} secondes**`);
  }

}

module.exports = DonateCommand;