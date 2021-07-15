const ms = require('ms');

module.exports = (client) => {
  console.log(`Connecté en tant que ${client.user.tag}.`);

  const statuses = [
    ['NetherMC streamer', 'STREAMING'],
    [`${client.users.cache.size} viewers`, 'WATCHING'],
    ['Minecraft', 'PLAYING']
  ];
  let i = 0;
  setInterval(async () => {
    await client.user.setActivity(statuses[i][0], {
      type: statuses[i][1],
      url: 'https://www.twitch.tv/NetherMCtv'
    });
    i = ++i % statuses.length;
  }, ms('8s'));
};