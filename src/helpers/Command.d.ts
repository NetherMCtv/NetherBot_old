import { Message, Client } from 'discord.js';

export default class Command {

  private help: Help;

  public getHelp(): Help;

  public setHelp(help: Help);

  public run(message: Message, client?: Client, args?: any[]);

}

interface Help {
  // Nom de la commande
  name: string,

  // Description de la commande
  description: string,

  // Les options de la commandes
  options?: InteractionOptions[],

  // Est-ce la permission par défaut
  default_permission?: boolean
}

interface InteractionOptions {
  // Le nom de l'option
  name: string,

  // La description de l'option
  description: string,

  /**
   * Le type de l'option
   *
   * Types :
   * - 1 : `SUB_COMMAND`
   * - 2 : `SUB_COMMAND_GROUP`
   * - 3 : `STRING`
   * - 4 : `INTEGER`
   * - 5 : `BOOLEAN`
   * - 6 : `USER`
   * - 7 : `CHANNEL`
   * - 8 : `ROLE`
   * - 9 : `MENTIONABLE`
   * @link https://discord.com/developers/docs/interactions/slash-commands#application-command-object-application-command-option-type
   */
  type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,

  // Est-ce obligatoire
  required?: boolean,

  // Les choix de l'option
  choices?: InteractionOptionsChoices[],

  // Les option de cette option
  options?: InteractionOptions[]
}

interface InteractionOptionsChoices {
  // Le nom du choix
  name: string,

  // La valeur du choix
  value: string | number
}