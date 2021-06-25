'use strict';

const {MessageEmbed} = require('discord.js');

class Embed {

  constructor(options, client) {
    let embed;

    embed = options;
    embed.footer = { text: client.user.username, icon_url: client.user.avatarURL() };
    embed.timestamp = Date.now();

    return new MessageEmbed(embed);
  }

}

module.exports = Embed;