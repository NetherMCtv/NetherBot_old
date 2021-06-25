import { EmbedFieldData, Client } from 'discord.js';

export default class Embed {

  public constructor(options: {
    author?: {
      name: string,
      icon_url?: string,
      url?: string
    },
    title: string,
    description?: string,
    fields?: EmbedFieldData[],
    url?: string,
    footer?: {
      text: string,
      icon_url?: string
    },
    timestamp?: Date | number
  }, client: Client);

}