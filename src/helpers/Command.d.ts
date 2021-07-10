import { Message, Client, MessageEmbed, Snowflake, User, Emoji } from 'discord.js';

export default class Command {

  private help: ApplicationCommandStructure;
  private permission: ApplicationCommandPermissionsStructure;

  public constructor();

  protected static getHelp(): ApplicationCommandStructure;
  protected setHelp(help: ApplicationCommandStructure);

  protected static getPermission(): ApplicationCommandPermissionsStructure[];
  protected setPermission(permission: ApplicationCommandPermissionsStructure[]);

  public run(message: Message, client?: Client, args?: any[]);

  protected returnContent(
    content?: InteractionApplicationCommandCallbackDataStructure['content'] | null,
    embeds?: InteractionApplicationCommandCallbackDataStructure['embeds'] | null,
    components?: InteractionApplicationCommandCallbackDataStructure['components'] | null
  ): InteractionApplicationCommandCallbackDataStructure;

}

declare interface ApplicationCommandStructure {
  // Nom de la commande
  name: string,

  // Description de la commande
  description: string,

  // Les options de la commandes
  options?: ApplicationCommandOptionStructure[],

  // Est-ce la permission par défaut
  default_permission?: boolean
}

declare interface ApplicationCommandOptionStructure {
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
  choices?: ApplicationCommandOptionChoice[],

  // Les option de cette option
  options?: ApplicationCommandOptionStructure[]
}

declare interface ApplicationCommandOptionChoice {
  // Le nom du choix
  name: string,

  // La valeur du choix
  value: string | number
}

declare interface InteractionApplicationCommandCallbackDataStructure {
  //
  tts?: boolean,

  //
  content?: string,

  //
  embeds?: MessageEmbed[],

  //
  allowed_mentions?

  //
  flags?: number | InteractionApplicationCommandCallbackDataFlags

  //
  components?: ComponentStructure[]
}

declare interface ComponentStructure {
  //
  type:	number,

  //
  style?:	number,

  //
  label?:	string,

  //
  emoji?: Partial<Emoji>,

  //
  custom_id?:	string,

  //
  url?:	string,

  //
  disabled?: boolean,

  //
  components?: ComponentStructure[]
}

declare enum InteractionApplicationCommandCallbackDataFlags {
  EPHEMERAL = '1 << 6'
}

declare interface MessageInteractionStructure {
  //
  id: Snowflake,

  //
  type,

  //
  name: string,

  //
  user: User
}

declare interface ApplicationCommandPermissionsStructure {
  // the id of the role or user
  id: Snowflake,

  // role or user
  type: 1 | 2,

  // `true` to allow, `false` to disallow
  permission: boolean
}