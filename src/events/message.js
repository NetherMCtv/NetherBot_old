const AntiInsults = require('../plugins/bot/AntiInsults');

module.exports = (message) => {
  (new AntiInsults).run(message);
};