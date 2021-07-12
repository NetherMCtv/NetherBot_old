const Event = require('../helpers/Event');
const Logs = require('../helpers/Logs');
const moment = require('moment');

class GuildMemberRemoveEvent extends Event {

  run(member) {
    Logs.sendToLogsChannel({
      event: 'guildMemberRemove',
      details: null,
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
  }

}

module.exports = GuildMemberRemoveEvent;