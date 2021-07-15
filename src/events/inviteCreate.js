const Logs = require('../helpers/Logs');

module.exports = (invite) => {
  Logs.sendToLogsChannel({
    event: 'inviteCreate',
    fields: [
      {
        name: 'Code',
        value: invite.code,
        inline: true
      },
      {
        name: 'Inviteur',
        value: invite.inviter,
        inline: true
      },
      {
        name: 'Nombre max. d\'utilisations',
        value: invite.maxUses === 0 ? 'Illimité' : invite.maxUses,
        inline: true
      }
    ]
  });
};