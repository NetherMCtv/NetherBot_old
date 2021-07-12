const config = require('../../src/config.json');

module.exports = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(config);
};