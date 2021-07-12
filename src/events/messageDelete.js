const Event = require('../helpers/Event');
const Logs = require('../helpers/Logs');

class MessageDeleteEvent extends Event {

  run(message) {
    Logs.sendToLogsChannel({
      event: 'messageDelete',
      details: 'Un message a été supprimé',
      fields: [
        {
          name: 'Auteur',
          value: message.author,
          inline: true
        },
        {
          name: 'Message',
          value: message.content,
          inline: true
        }
      ]
    });
  }

}

module.exports = MessageDeleteEvent;