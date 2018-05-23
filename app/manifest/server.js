// This file is generated by Sapper — do not edit it!
import _4xx0 from '../../routes/4xx.html';
import _5xx0 from '../../routes/5xx.html';
import _0 from '../../routes/index.html';
import * as feeds_json0 from '../../routes/feeds.json.js';
import * as feeds_$slug$_json0 from '../../routes/feeds/[slug].json.js';
import feeds_$slug$0 from '../../routes/feeds/[slug].html';

export const routes = [
	{ error: '4xx', handlers: [{ type: 'page', module: _4xx0 }] },
	{ error: '5xx', handlers: [{ type: 'page', module: _5xx0 }] },
	{ id: '_', pattern: /^\/?$/, params: () => ({}), handlers: [{ type: 'page', module: _0 }] },
	{ id: 'feeds_json', pattern: /^\/feeds.json\/?$/, params: () => ({}), handlers: [{ type: 'route', module: feeds_json0 }] },
	{ id: 'feeds_$slug$_json', pattern: /^\/feeds(?:\/([^\/]+?).json)?\/?$/, params: match => ({ slug: match[1] }), handlers: [{ type: 'route', module: feeds_$slug$_json0 }] },
	{ id: 'feeds_$slug$', pattern: /^\/feeds(?:\/([^\/]+?))?\/?$/, params: match => ({ slug: match[1] }), handlers: [{ type: 'page', module: feeds_$slug$0 }] }
];