const express = require('express');
const server = express();
const port = 3000;

const req = (method, path, file) => server[method](path, (req, res) => require(file)(req, res));
const get = (path, file) => req('get', path, file);

get('/bot/config', './bot/config');
get('/bot/info', './bot/info');

req('all', '/server/events', './server/events');

server.listen(port, () => console.log(`API démarrée sur http://127.0.0.1:${port}`));