(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["_4xx"],{

/***/ "./routes/4xx.html":
/*!*************************!*\
  !*** ./routes/4xx.html ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/shared.js */ "./node_modules/svelte/shared.js");
/* routes/4xx.html generated by Svelte v2.6.1 */


function add_css() {
	var style = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("style");
	style.id = 'svelte-z93gx4-style';
	style.textContent = "h1.svelte-z93gx4,p.svelte-z93gx4{text-align:center;margin:0 auto}h1.svelte-z93gx4{font-size:2.8em;text-transform:uppercase;font-weight:700;margin:0 0 0.5em 0}p.svelte-z93gx4{margin:1em auto}@media(min-width: 480px){h1.svelte-z93gx4{font-size:4em}}";
	Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(style, document.head);
}

function create_main_fragment(component, ctx) {
	var text, h1, text_1, text_2, p, text_3;

	return {
		c() {
			text = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("\n\n");
			h1 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1");
			text_1 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("Not found");
			text_2 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("\n\n");
			p = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p");
			text_3 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("Please check the URL");
			this.h()
		},

		l(nodes) {
			text = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(nodes, "\n\n");

			h1 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(nodes, "H1", { class: true }, false);
			var h1_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(h1);

			text_1 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(h1_nodes, "Not found");
			h1_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			text_2 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(nodes, "\n\n");

			p = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(nodes, "P", { class: true }, false);
			var p_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(p);

			text_3 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(p_nodes, "Please check the URL");
			p_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			this.h();
		},

		h() {
			document.title = "Not found";
			h1.className = "svelte-z93gx4";
			p.className = "svelte-z93gx4";
		},

		m(target, anchor) {
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(text, target, anchor);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(h1, target, anchor);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(text_1, h1);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(text_2, target, anchor);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(p, target, anchor);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(text_3, p);
		},

		p: svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["noop"],

		d(detach) {
			if (detach) {
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(text);
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(h1);
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(text_2);
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(p);
			}
		}
	};
}

function _4xx(options) {
	Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options);
	this._state = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["assign"])({}, options.data);
	this._intro = true;

	if (!document.getElementById("svelte-z93gx4-style")) add_css();

	this._fragment = create_main_fragment(this, this._state);

	if (options.target) {
		var nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(options.target);
		options.hydrate ? this._fragment.l(nodes) : this._fragment.c();
		nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
		this._mount(options.target, options.anchor);
	}
}

Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["assign"])(_4xx.prototype, svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["proto"]);

if (true) {
	const { configure, register, reload } = __webpack_require__(/*! ./node_modules/svelte-loader/lib/hot-api.js */ "./node_modules/svelte-loader/lib/hot-api.js");

	module.hot.accept();

	if (!module.hot.data) {
		// initial load
		configure({});
		_4xx = register("routes/4xx.html", _4xx);
	} else {
		// hot update
		_4xx = reload("routes/4xx.html", _4xx);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (_4xx);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhNDNhOTcwMzg3OTkzMTI4MmFlOC9fNHh4Ll80eHguanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==