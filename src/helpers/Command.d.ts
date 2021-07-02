import { Message, Client } from 'discord.js';

export default class Command {

  private help: Help;

  public getHelp(): Help;

  public setHelp(help: Help);

  public run(message: Message, client?: Client, args?: any[]);

}

interface Help {
  name: string,
  description: string,
  options?: InteractionOptions[],
  default_permission?: boolean
}

interface InteractionOptions {
  name: string,
  description: string,
  type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
  required?: boolean,
  choices?: InteractionOptionsChoices[],
  options?: InteractionOptions[]
}

interface InteractionOptionsChoices {
  name: string,
  value: string | number
}