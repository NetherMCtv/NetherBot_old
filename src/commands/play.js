const Command = require('../helpers/Command');
const ytdl = require('ytdl-core-discord');
const Embed = require('../helpers/Embed');
const { VoiceChannel } = require('discord.js');

class PlayCommand extends Command {

  constructor() {
    super();

    this.setHelp({
      name: 'play',
      description: 'Permet de lancer de la musique dans un channel',
      options: [
        {
          type: 3,
          name: 'url',
          description: 'L\'URL de la musique. Pris en charge : YouTube',
          required: true
        }
      ]
    });
  }

  run(interaction, client, args) {
    const voiceChannel = new VoiceChannel(client.guilds.cache.get(interaction.guild_id), client.channels.cache.get('865177619321454592'));
    const url = args[0].value;

    (async () => await voiceChannel.join())()
      .then(async (connection) => {
        const dispatcher = connection.play(await this.getAudioSource(url), {
          type: 'opus'
        });

        dispatcher.setVolume(1);

        dispatcher.on('finish', () => {
          connection.disconnect();
        });
        dispatcher.on('error', console.error);
      })
      .catch(console.error);

    const embed = new Embed({
      title: 'Lecture commencée',
      description: `La lecture de la musique s'est bien lancée dans ${voiceChannel}.`
    });
    return this.returnContent(null, [embed], /*[
      {
        type: 1,
        components: [
          {
            type: 2,
            style: 1,
            label: 'Pause',
            custom_id: 'pause'
          },
          {
            type: 2,
            style: 1,
            label: 'Stopper',
            custom_id: 'stop'
          },
        ]
      }
    ]*/);
  }

  /**
   * @param {string} url
   */
  async getAudioSource(url) {
    // YouTube
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      return await ytdl(url, {
        filter: 'audioonly',
        format: {
          url,
          isLive: true,
          audioQuality: 'AUDIO_QUALITY_MEDIUM',
          mimeType: 'ogg'
        }
      });
    }

    // SoundCloud
    //else if (url.includes('soundcloud.com')) {}

    // Spotify
    //else if (url.includes('spotify.com')) {}

    // Aucune source
    else {
      console.error(`"${url}" is not an audio on YouTube, SoundCloud or Spotify`);
    }
  }

}

module.exports = PlayCommand;