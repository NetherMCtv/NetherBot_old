const Logs = require('../helpers/Logs');
const moment = require('moment');

module.exports = (member) => {
  Logs.sendToLogsChannel({
    event: 'guildMemberRemove',
    fields: [
      {
        name: 'Membre',
        value: member,
        inline: true
      },
      {
        name: 'Arrivée à',
        value: moment(member.joinedAt).format('LLL'),
        inline: true
      }
    ]
  });
};