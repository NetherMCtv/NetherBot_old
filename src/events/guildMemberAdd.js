const Event = require('../helpers/Event');
const config = require('../config.json');

class GuildMemberAddEvent extends Event {

  run(member, client) {
    member.roles.add(config.welcome.role_id);
  }

}

module.exports = GuildMemberAddEvent;