const db = require('../../src/helpers/Database');

module.exports = (req, res) => {
  if (req.method === 'GET') {
    res.setHeader('Content-Type', 'application/json');
    const { id } = req.params;

    db.query('SELECT * FROM bugs WHERE id = ?', [id], (err, results) => {
      if (err) throw err;

      res.send(results);
    });
  } else if (req.method === 'POST') {
    res.status(204);
    const { id } = req.params;

    db.query('UPDATE bugs b SET b.approved = ? WHERE b.id = ?', [true, id], (err) => {
      if (err) throw err;
    });
  } else if (req.method === 'PATCH') {
    res.status(204);
    const { id } = req.params;

    db.query('UPDATE bugs b SET b.corriged = ? WHERE b.id = ?', [true, id], (err) => {
      if (err) throw err;
    });
  }
};