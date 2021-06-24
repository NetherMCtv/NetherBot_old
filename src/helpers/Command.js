'use strict';

class Command {

  help = {};

  static getHelp() {
    return this.help;
  }

  setHelp(help) {
    return this.help = help;
  }

  run(message, client, args) {}

}

module.exports = Command;