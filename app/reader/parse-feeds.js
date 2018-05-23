import fs from 'fs';
import fetch from './fetch';
import glob from 'glob';
import queue from 'd3-queue/src/queue';

const SAVE_MAX = 50;

export default function(callback) {
    const q = queue(1);
    // go through files in /feeds directory
    glob('feeds/*.txt', (err, files) => {
        files.forEach((file) => {
            q.defer(parseFile, file);
        });
        q.awaitAll(function(res) {
            callback(null, res);
        });
    });
}

function parseFile(file, callback) {
    const q = queue(1);
    const feeds = fs.readFileSync(file, 'utf-8').trim().split('\n');
    // go through each feed url in the feed txt file
    feeds.forEach((feed) => {
        q.defer(parseFeed, feed);
    });
    q.awaitAll((res) => {
        callback(null, res);
    });
}

function parseFeed(feedUrl, callback) {
    fetch(feedUrl, (err, feed) => {
        if (err) {
            console.warn('problem with feed',feedUrl);
            console.warn(err);
            return callback(null);
        }
        console.log(feed.meta.title, feed.posts.length);
        callback(null, feed);
    });
}
