import polka from 'polka';
import compression from 'compression';
import sapper from 'sapper';
import serve from 'serve-static';
import { routes } from './manifest/server.js';
import App from './App.html';

polka() // You can also use Express
    .use(
        compression({ threshold: 0 }),
        serve('assets'),
        sapper({
            routes,
            App
        })
    )
    .listen(process.env.PORT);

import reader from 'davereader';
import fs from 'fs';

const riverCfg = JSON.parse(fs.readFileSync('river/config.json'));

reader.init (riverCfg, function () {
    console.log('river initialized');
});

// import parseFeeds from './reader/parse-feeds';


