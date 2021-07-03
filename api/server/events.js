const db = require('../../src/helpers/Database');

module.exports = (req, res) => {
  const method = req.method;
  if (method === 'GET') {
    res.setHeader('Content-Type', 'application/json');

    db.query('SELECT * FROM events', (err, results, fields) => {
      if (err) throw err;

      res.send(results);
    });
  } else if (method === 'POST') {
    // console.log(req);
    // console.log(req.body);
    // console.log(req.res.body);
    //
    // //const { type, value } = req.body;
    //
    // if (!req.body/* || !type || !value*/) {
    //   throw new Error('Cannot insert event into database because the type or the value is missing');
    // }
    //
    // db.query('INSERT INTO events (type, value) VALUES (?, ?)', [type, value], (err, results, fields) => {
    //   if (err) throw err;
    //   res.status(204);
    // });
  }
};