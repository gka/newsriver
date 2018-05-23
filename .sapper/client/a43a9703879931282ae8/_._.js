(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["_"],{

/***/ "./routes/index.html":
/*!***************************!*\
  !*** ./routes/index.html ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/shared.js */ "./node_modules/svelte/shared.js");
/* routes/index.html generated by Svelte v2.6.1 */


function create_main_fragment(component, ctx) {
	var text, h1, text_1;

	return {
		c() {
			text = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("\n\n");
			h1 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1");
			text_1 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("Great success!");
			this.h()
		},

		l(nodes) {
			text = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(nodes, "\n\n");

			h1 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(nodes, "H1", {}, false);
			var h1_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(h1);

			text_1 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(h1_nodes, "Great success!");
			h1_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			this.h();
		},

		h() {
			document.title = "Sapper project template";
		},

		m(target, anchor) {
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(text, target, anchor);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(h1, target, anchor);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(text_1, h1);
		},

		p: svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["noop"],

		d(detach) {
			if (detach) {
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(text);
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(h1);
			}
		}
	};
}

function Index(options) {
	Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options);
	this._state = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["assign"])({}, options.data);
	this._intro = true;

	this._fragment = create_main_fragment(this, this._state);

	if (options.target) {
		var nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(options.target);
		options.hydrate ? this._fragment.l(nodes) : this._fragment.c();
		nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
		this._mount(options.target, options.anchor);
	}
}

Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["assign"])(Index.prototype, svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["proto"]);

if (true) {
	const { configure, register, reload } = __webpack_require__(/*! ./node_modules/svelte-loader/lib/hot-api.js */ "./node_modules/svelte-loader/lib/hot-api.js");

	module.hot.accept();

	if (!module.hot.data) {
		// initial load
		configure({});
		Index = register("routes/index.html", Index);
	} else {
		// hot update
		Index = reload("routes/index.html", Index);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Index);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhNDNhOTcwMzg3OTkzMTI4MmFlOC9fLl8uanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==