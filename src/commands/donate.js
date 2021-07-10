const Command = require('../helpers/Command');
const Embed = require('../helpers/Embed');

class DonateCommand extends Command {

  constructor() {
    super();

    this.setHelp({
      name: 'donate',
      description: 'Me faire un don'
    });
  }

  run(interaction, client) {
    const author = interaction.member.user;
    const embed = new Embed({
      title: 'Faire un don',
      description: 'Pour me faire un don vous pouvez utiliser ces plateformes :'
    }, client);

    return this.returnContent(null, [embed], [
      {
        type: 1,
        components: [
          {
            type: 2,
            style: 5,
            url: 'https://www.patreon.com/NetherMC_',
            label: 'Patreon'
          },
          {
            type: 2,
            style: 5,
            url: 'https://streamlabs.com/nethermctv/tip',
            label: 'Streamlabs'
          },
          {
            type: 2,
            style: 5,
            url: 'https://opencollective.com/NetherMC',
            label: 'OpenCollective'
          },
          {
            type: 2,
            style: 5,
            url: `https://donatebot.io/checkout/853738781541924894?buyer=${author.id}`,
            label: 'DonateBot'
          },
        ]
      }
    ]);
  }

}

module.exports = DonateCommand;