'use strict';

const { MessageEmbed } = require('discord.js');

class Command {

  constructor() {
    this.help = {};
  }


  getHelp() {
    return this.help;
  }

  setHelp(help) {
    this.help = help;
  }

  run(message, client, args) {}

  returnContent(content) {
    /* eslint-disable indent */
    switch (typeof content) {
      case 'string':
        return { content };
      case MessageEmbed:
        return { embeds: [content] };
      default: break;
    }
    /* eslint-enable indent */
  }

}

module.exports = Command;