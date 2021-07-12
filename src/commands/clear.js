const Command = require('../helpers/Command');

class ClearCommand extends Command {

  constructor() {
    super();

    this.setHelp({
      name: 'clear',
      description: 'Permet de supprimer un grand nombre de messages',
      default_permission: false,
      options: [
        {
          type: 4,
          name: 'messages',
          description: 'Nombre de messages à supprimer',
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
    const messages = args[0].value;
    const channel = client.channels.cache.get(interaction.channel_id);
    
    if (messages > 100 || messages <= 0) {
      return this.returnContent('Impossible de supprimer plus de 100 messages à la fois', null);
    }
    channel?.bulkDelete(messages, true);

    return this.returnContent(`${messages} messages ont été supprimés`, null);
  }

}

module.exports = ClearCommand;