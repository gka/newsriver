import parseFeeds from './reader/parse-feeds';

const UPDATE_DELAY = 60000; // milliseconds

let timer;
let running = false;

function run() {
    parseFeeds((err, res) => {
        console.log('all done');
        if (running) {
            timer = setTimeout(run, UPDATE_DELAY);
        }
    });
}

export default {
    start: () => {
        running = true;
        run();
    },
    stop: () => {
        clearTimeout(timer);
        running = false;
    }
}
