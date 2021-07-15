const Embed = require('./Embed');
const { client } = require('../index');
const config = require('../config.json');

class Logs {

  static sendToLogsChannel(event) {
    const titles = {
      guildMemberAdd: 'Nouveau membre',
      guildMemberRemove: 'Un membre est parti',
      inviteCreate: 'Création d\'une invitation',
      messageDelete: 'Message supprimé',
      messageUpdate: 'Modification d\'un message'
    };
    const descriptions = {
      guildMemberAdd: 'Un utrilisateur a rejoint le serveur.',
      guildMemberRemove: 'Un utilisateur a quitté le serveur.',
      inviteCreate: 'Une invitation a été crée.',
      messageDelete: 'Un message a été supprimé.',
      messageUpdate: 'Un message a été modifié.'
    };

    const channel = client.channels.cache.get(config.logs.server);
    const embed = new Embed({
      title: titles[event.event],
      description: `${descriptions[event.event]} ${event.details ? event.details : ''}`,
      fields: event.fields
    });

    channel?.send(embed);
  }

}

module.exports = Logs;