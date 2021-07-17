const Command = require('../helpers/Command');
const Embed = require('../helpers/Embed');
const db = require('../helpers/Database');

class BugCommand extends Command {

  constructor() {
    super();

    this.setHelp({
      name: 'bug',
      description: 'Envoyer un bug au staff',
      options: [
        {
          type: 3,
          name: 'titre',
          description: 'Titre du bug',
          required: true
        },
        {
          type: 3,
          name: 'description',
          description: 'Description du bug',
          required: true
        }
      ]
    });
  }

  run(interaction, client, args) {
    const title = args[0].value;
    const description = args[1].value;
    const author = interaction.member.user;
    author.tag = `${author.username}#${author.discriminator}`;

    db.query('INSERT INTO bugs (author, title, description) VALUES (?, ?, ?)', [author.tag, title, description], (err) => {
      if (err) throw err;

      const embed = new Embed({
        title: 'Nouveau bug',
        fields: [
          {
            name: 'Auteur',
            value: `<@${author.id}>`,
            inline: true
          },
          {
            name: 'Titre',
            value: title,
            inline: true
          },
          {
            name: 'Description',
            value: description,
            inline: true
          },
        ]
      });

      client.channels.cache.get('865268470979756063')?.send(/*{
        embeds: [*/embed/*],
        components: [
          {
            type: 2,
            components: [
              {
                type: 1,
                style: 1,
                label: 'Approuver',
                custom_id: 'approve'
              },
              {
                type: 1,
                style: 1,
                label: 'Corriger',
                custom_id: 'corrige'
              },
            ]
          }
        ]
      }*/);
    });

    const embed = new Embed({
      title: 'Bug envoyé !',
      description: `Ton bug à bien été envoyé, <@${author.id}> ! Merci !`
    });

    return this.returnContent(null, [embed]);
  }

}

module.exports = BugCommand;