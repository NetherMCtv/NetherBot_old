const Embed = require('./Embed');
const { client } = require('../index');
const config = require('../config.json');

class Logs {

  static sendToLogsChannel(event) {
    const titles = {
      guildMemberAdd: 'Nouveau membre 👋',
      guildMemberRemove: 'Un membre est parti 😭'
    };
    const channel = client.channels.cache.get(config.logs.server);
    const embed = new Embed({
      title: titles[event.event],
      description: event.details,
      fields: event.fields
    });

    channel?.send(embed);
  }

}

module.exports = Logs;