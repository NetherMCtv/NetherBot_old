const db = require('../../src/helpers/Database');

module.exports = (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  db.query('SELECT * FROM bugs', (err, results) => {
    if (err) throw err;

    res.send(results);
  });
};