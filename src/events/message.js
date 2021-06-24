const Event = require('../helpers/Event');

class MessageEvent extends Event {

  run(message, client) {
    const prefix = '/';

    if (message.type !== 'DEFAULT' || message.author.bot) return;
    const args = message.content.trim().split(/ +/g);
    const commandName = args.shift().toLowerCase();
    if (!commandName.startsWith(prefix)) return;

    const command = client.commands.get(commandName.slice(prefix.length));
    if (!command) return;

    (new command).run(message, client, args);
    message.delete();
  }

}

module.exports = MessageEvent;