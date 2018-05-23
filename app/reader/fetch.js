import FeedParser from 'feedparser';
import request from 'request';
import iconv from 'iconv';
import zlib from 'zlib';

export default fetch;

function fetch(feed, callback) {
    // Define our streams
    const req = request(feed, {timeout: 10000, pool: false});
    req.setMaxListeners(50);
    // Some feeds do not respond without user-agent and accept headers.
    req.setHeader('user-agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36');
    req.setHeader('accept', 'text/html,application/xhtml+xml');

    const result = {
        meta: null,
        posts: []
    };

    const feedparser = new FeedParser();
    // Define our handlers
    req.on('error', error);
    req.on('response', function(res) {
        if (res.statusCode != 200) return this.emit('error', new Error('Bad status code'));
        const encoding = res.headers['content-encoding'] || 'identity';
        const charset = getParams(res.headers['content-type'] || '').charset;
        res = maybeDecompress(res, encoding);
        res = maybeTranslate(res, charset);
        res.pipe(feedparser);
    });

    feedparser.on('error', error);

    feedparser.on('readable', function() {
        // This is where the action is!
        var stream = this; // `this` is `feedparser`, which is a stream
        if (!result.meta) result.meta = stream.meta;
        let post;
        while (post = stream.read()) {
            result.posts.push(post);
        }
    });

    feedparser.on('end', function() {
        callback(null, result);
    });

    function error(err) {
        callback(err);
    }
}

function maybeDecompress (res, encoding) {
    var decompress;
    if (encoding.match(/\bdeflate\b/)) {
        decompress = zlib.createInflate();
    } else if (encoding.match(/\bgzip\b/)) {
        decompress = zlib.createGunzip();
    }
    return decompress ? res.pipe(decompress) : res;
}

function maybeTranslate (res, charset) {
    var iconv;
    // Use iconv if its not utf8 already.
    if (!iconv && charset && !/utf-*8/i.test(charset)) {
        try {
            iconv = new Iconv(charset, 'utf-8');
            console.log('Converting from charset %s to utf-8', charset);
            iconv.on('error', done);
            // If we're using iconv, stream will be the output of iconv
            // otherwise it will remain the output of request
            res = res.pipe(iconv);
        } catch(err) {
            res.emit('error', err);
        }
    }
    return res;
}

function getParams(str) {
    var params = str.split(';').reduce(function (params, param) {
        var parts = param.split('=').map(function (part) { return part.trim(); });
        if (parts.length === 2) {
            params[parts[0]] = parts[1];
        }
            return params;
    }, {});
    return params;
}

function done(err) {
    if (err) {
        console.log(err, err.stack);
        return process.exit(1);
    }
    server.close();
    process.exit();
}

