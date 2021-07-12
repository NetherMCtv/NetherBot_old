import { ClientEvents, EmbedFieldData } from 'discord.js';

export default class Logs {

  public static sendToLogsChannel<K extends keyof ClientEvents>(event: {
    details: string,
    fields: EmbedFieldData[],
    event: K
  });

}