const config = require('../../config.json');
const { client } = require('../../index');

class AntiInsults {

  run(message) {
    const insults = config.insults;
    const content = message.content.toLowerCase().replaceAll(/\s/g, '');

    let insultDetected = false;
    for (let i = 0; i < insults.length; i++) {
      if (content.includes(insults[i])) insultDetected = true;
    }

    if (message.author.id === '807326854314590228' || message.author.id === client.user.id) return;
    if (insultDetected) {
      message.delete();
      message.channel.send(
        `<a:no:859024721282203649> **Hé ${message.author} !** Ton message à été supprimé car il contenait des insultes !`
      );
    }
  }

}

module.exports = AntiInsults;