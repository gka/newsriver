import fs from 'fs';

const cfg = JSON.parse(fs.readFileSync('river/config.json'));

export function get(req, res, next) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    res.end(JSON.stringify(cfg.homePage.panels));
}
