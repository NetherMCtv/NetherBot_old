const { client } = require('../../src/index');

module.exports = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(client.user);
};