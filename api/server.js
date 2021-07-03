const express = require('express');
const server = express();
const port = 3000;

server.get('/bot/info', (req, res) => require('./bot/info')(req, res));

server.all('/server/events', (req, res) => require('./server/events')(req, res));

server.listen(port, () => console.log(`API démarrée sur http://127.0.0.1:${port}`));