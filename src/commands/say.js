const Command = require('../helpers/Command');
const Embed = require('../helpers/Embed');

class SayCommand extends Command {

  constructor() {
    super();

    this.setHelp({
      name: 'say',
      description: 'Faire répéter des choses au bot',
      options: [
        {
          type: 3,
          name: 'message',
          description: 'Le message',
          required: true
        }
      ]
    });
  }

  run(interaction, client, args) {
    const embed = new Embed({
      title: null,
      description: args[0].value,
      footer: {
        text: `${interaction.member.user.name} • ${client.user.username}`
      }
    }, client);

    return { embeds: [embed] };
  }

}

module.exports = SayCommand;