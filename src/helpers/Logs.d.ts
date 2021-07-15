import { ClientEvents, EmbedFieldData } from 'discord.js';

export default class Logs {

  public static sendToLogsChannel<K extends keyof ClientEvents>(event: {
    event: K,
    details?: string,
    fields: EmbedFieldData[]
  });

}