import { Message, Client } from 'discord.js';

export default class Command {

  private help: Help;

  public static getHelp(): Help;

  public setHelp(help: Help);

  public run(message: Message, client?: Client, args?: any[]);

}

interface Help {
  name: string,
  description: string
}