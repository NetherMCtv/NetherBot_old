'use strict';

class Command {

  constructor() {
    this.help = {};
    this.permission = null;
  }

  static getHelp() {
    return (new this).help;
  }
  setHelp(help) {
    this.help = help;
  }

  static getPermission() {
    return (new this).permission;
  }
  setPermission(permission) {
    this.permission = permission;
  }

  run(message, client, args) {}

  returnContent(content, embeds, components) {
    return {
      content, embeds, components
    };
  }

}

module.exports = Command;