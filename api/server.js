const express = require('express');
const server = express();
const port = 4682;

const req = (method, path, file) => server[method](path, (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '127.0.0.1:8000');
  return require(file)(req, res);
});
const get = (path, file) => req('get', path, file);

req('all', '/bugs', './bugs/index');
req('all', '/bugs/:id(\\d+)', './bugs/bug');

get('/bot/config', './bot/config');
get('/bot/info', './bot/info');

server.listen(port, () => console.log(`API démarrée sur http://127.0.0.1:${port}`));