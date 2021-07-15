const AntiInsults = require('../plugins/bot/AntiInsults');
const Logs = require('../helpers/Logs');
const moment = require('moment');

module.exports = (oldMessage, newMessage) => {
  (new AntiInsults).run(newMessage);

  Logs.sendToLogsChannel({
    event: 'messageUpdate',
    fields: [
      {
        name: 'Auteur',
        value: newMessage.author,
        inline: true
      },
      {
        name: 'Modifié le',
        value: moment(newMessage.editedAt).format('LLL'),
        inline: true
      },
      {
        name: 'Channel',
        value: newMessage.channel,
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
};