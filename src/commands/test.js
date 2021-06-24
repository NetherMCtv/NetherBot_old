const Command = require('../helpers/Command');

class TestCommand extends Command {

  constructor() {
    super();

    this.setHelp({
      name: 'test',
      description: 'aa'
    });
  }

  run(message) {
    message.channel.send('coucou');
  }

}

module.exports = TestCommand;