const Event = require('../helpers/Event');
const Logs = require('../helpers/Logs');
const { welcome } = require('../config.json');
const moment = require('moment');

class GuildMemberAddEvent extends Event {

  run(member, client) {
    member.roles.add(welcome.role_id);

    const message = welcome.message
      .replaceAll('@member', member)
      .replaceAll('$server', member.guild.name);
    client.channels.cache.get(welcome.channel_id)?.send(message);

    Logs.sendToLogsChannel({
      event: 'guildMemberAdd',
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

module.exports = GuildMemberAddEvent;