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
      description: 'Pour me faire un don vous pouvez utiliser ces plateformes :\n' +
        '> <:patreon:858715294973165618> [Patreon](https://www.patreon.com/NetherMC_)\n' +
        '> <:streamlabs:860127269044879370> [Streamlabs](https://streamlabs.com/nethermctv/tip)\n' +
        '> OpenCollective [OpenCollective](https://opencollective.com/NetherMC)\n' +
        `> <:donatebot:860554358344122368> [DonateBot](https://donatebot.io/checkout/853738781541924894?buyer=${author.id})` +
        ' (aussi accessible en tapant "donate" dans un channel)'
    }, client);

    return { embeds: [embed] };
  }

}

module.exports = DonateCommand;