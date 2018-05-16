import fs from 'fs';

export function get(req, res, next) {
    // the `slug` parameter is available because this file
    // is called [slug].json.js
    const { slug } = req.params;

    fs.readFile(`river/rivers/${slug}.js`, 'utf-8', (err, data) => {
        if (err) {
            console.log(err)
            return next();
        }
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.parse(JSON.stringify(data
            .replace('onGetRiverStream (', '')
            .replace('})', '}'))));
    });

}
