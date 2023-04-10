import express from 'express'

import router from './routes/index-routes.js';

const server = express();
server.use(express.json())
server.use(router);



server.listen(4000, () => {
    console.log('Tá executando.....')
})