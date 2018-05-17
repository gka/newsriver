# newsriver

### What is a "River of News" or "Newsriver"?

Here's what [Dave Winer wrote about this](http://scripting.com/2014/06/02/whatIsARiverOfNewsAggregator.html):

> _River of News_ is a kind of RSS aggregator.
>
> Items are presented in reverse-chronologic order.
>
> Each item has a headline, short description, a link to the story, links to the website and feed it came from, a link to its enclosure if it has one, when it was published, when it appeared in the river.

### How is this different from other RSS readers?

* No full text of articles
* No feature images
* No unread counts: Newsrivers are meant to be used like a Twitter feed. No hard feelings if you miss something.

### Why not use Dave's [reader implementation](https://github.com/scripting/reader)?

I tried! But it is really hard to use. Large part of the frontend is served from obscure hard-coded websites such as fargo.io which don't even bother to support HTTPS. I wanted to have the entire frontend being part of the app. As of now, the app is still using the [davereader](https://www.npmjs.com/package/davereader) package to aggregate the RSS feeds, but I am planning to re-implement that part as well.

### To do

* get rid of `davereader` dependency
* swipe left and right should switch feeds
* make header nav float smartly with the content (but only appear on scroll-up)
* better documentation
* example implementation
