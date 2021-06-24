const Event = require('../helpers/Event');

class ReadyEvent extends Event {

  async run(client) {
    console.log(`Connecté en tant que ${client.user.tag}.`);

    const guilds = client.guilds.cache;
    const statuses = [
      ['NetherMC streamer', 'STREAMING'],
      ['des followers', 'WATCHING'],
    ];
    let i = 0;
    setInterval(async () => {
      await client.user.setActivity(statuses[i][0], {
        type: statuses[i][1],
        url: 'https://www.twitch.tv/NetherMCtv'
      });
      i = ++i % statuses.length;
    }, 1e1);
  }

}

module.exports = ReadyEvent;