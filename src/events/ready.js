const Event = require('../helpers/Event');

class ReadyEvent extends Event {

  run(client) {
    console.log(`Connecté en tant que ${client.user.tag}.`);
  }

}

module.exports = ReadyEvent;