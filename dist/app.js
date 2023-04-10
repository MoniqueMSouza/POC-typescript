import express from 'express';
import { convertCLTToPj } from './controllers/movies-controllers.js';
import { listAll, insert } from './controllers/jobs-controllers.js';
var server = express();
server.use(express.json());
server.get('/health', function (req, res) {
    res.send('ok');
});
server.get('/calculator', convertCLTToPj);
server.get('/jobs', listAll);
server.post('/jobs', insert);
server.listen(4000, function () {
    console.log('Tá executando.....');
});
