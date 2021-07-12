const Event = require('../helpers/Event');
const AntiInsults = require('../plugins/bot/AntiInsults');

class MessageEvent extends Event {

  run(message) {
    (new AntiInsults).run(message);
  }

}

module.exports = MessageEvent;