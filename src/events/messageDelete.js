const Logs = require('../helpers/Logs');

module.exports = (message) => {
  Logs.sendToLogsChannel({
    event: 'messageDelete',
    fields: [
      {
        name: 'Auteur',
        value: message.author,
        inline: true
      },
      {
        name: 'Channel',
        value: message.channel,
        inline: true
      },
      {
        name: 'Message',
        value: message.content,
        inline: true
      }
    ]
  });
};