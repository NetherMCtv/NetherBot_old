const Event = require('../helpers/Event');
const AntiInsults = require('../plugins/bot/AntiInsults');
const Logs = require('../helpers/Logs');
const moment = require('moment');

class MessageUpdateEvent extends Event {

  run(oldMessage, newMessage) {
    (new AntiInsults).run(newMessage);

    Logs.sendToLogsChannel({
      event: 'messageUpdate',
      details: 'Un message a été modifié',
      fields: [
        {
          name: 'Auteur',
          value: newMessage.author,
          inline: true
        },
        {
          name: 'Modifié à',
          value: moment(newMessage.editedAt).format('LLL'),
          inline: true
        },
        {
          name: 'Ancien message',
          value: oldMessage.content,
          inline: true
        },
        {
          name: 'Nouveau message',
          value: newMessage.content,
          inline: true
        }
      ]
    });
  }

}

module.exports = MessageUpdateEvent;