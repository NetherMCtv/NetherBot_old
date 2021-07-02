const Command = require('../helpers/Command');
const Embed = require('../helpers/Embed');

class MinecraftCommand extends Command {

  constructor() {
    super();

    this.setHelp({
      name: 'minecraft',
      description: 'Infos sur le serveur Minecraft',
      options: [
        {
          name: 'ip',
          description: 'IP du serveur',
          type: 1
        }
      ]
    });
  }

  run(interaction, client, args) {
    const option = args[0].name;
    /* eslint-disable indent */
    switch (option) {
      case 'ip':
        return {
          content: 'Désolé, le serveur n\'est pas accessible pour le moment.'
        };
      default: break;
    }
    /* eslint-enable indent */

    return {
      content: 'salut'
    };
  }

}

module.exports = MinecraftCommand;