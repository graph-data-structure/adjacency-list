"use strict";

(function () {

	"use strict";

	var definition = function definition(exports, undefined) {

		/* js/src/Edge.js */

		var Edge = function Edge(u, v) {

			this.u = u;
			this.v = v;
			this.iterator = null;
			this.uiterator = null;
			this.viterator = null;
		};

		exports.Edge = Edge;

		/* js/src/List.js */

		var List = function List(DLL) {

			var Graph = function Graph() {

				this.V = new DLL();
				this.E = new DLL();
			};

			Graph.prototype.vadd = function () {

				var v = new Vertex(new DLL());

				v.iterator = this.V.push(v);

				return v;
			};

			Graph.prototype.vdel = function (v) {

				// remove all incident edges
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = this.eitr(v)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var e = _step.value;
						this.edel(e);
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator["return"]) {
							_iterator["return"]();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}

				// remove vertex
				this.E.erase(v.iterator);
			};

			Graph.prototype.eadd = function (u, v) {

				var e = new Edge(u, v);

				// add to edge list
				e.iterator = this.E.push(e);

				// add to edge list of u
				e.uiterator = u.E.push(e);

				// add to edge list of v if u !== v
				if (u !== v) e.viterator = v.E.push(e);

				return e;
			};

			Graph.prototype.edel = function (e) {

				// remove from edge list
				this.E.erase(e.iterator);

				// remove from edge list of u
				e.u.E.erase(e.uiterator);

				// remove from edge list of v if u !== v
				if (e.u !== e.v) e.v.E.erase(e.viterator);
			};

			Graph.prototype.vitr = regeneratorRuntime.mark(function callee$3$0() {
				return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
					while (1) switch (context$4$0.prev = context$4$0.next) {
						case 0:
							return context$4$0.delegateYield(this.V, "t0", 1);

						case 1:
						case "end":
							return context$4$0.stop();
					}
				}, callee$3$0, this);
			});

			Graph.prototype.eitr = regeneratorRuntime.mark(function callee$3$0(v) {
				return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
					while (1) switch (context$4$0.prev = context$4$0.next) {
						case 0:
							return context$4$0.delegateYield(v.E, "t0", 1);

						case 1:
						case "end":
							return context$4$0.stop();
					}
				}, callee$3$0, this);
			});

			Graph.prototype.nitr = regeneratorRuntime.mark(function callee$3$0(w) {
				var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _step2$value, u, v;

				return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
					while (1) switch (context$4$0.prev = context$4$0.next) {
						case 0:
							_iteratorNormalCompletion2 = true;
							_didIteratorError2 = false;
							_iteratorError2 = undefined;
							context$4$0.prev = 3;
							_iterator2 = w.E[Symbol.iterator]();

						case 5:
							if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
								context$4$0.next = 14;
								break;
							}

							_step2$value = _step2.value;
							u = _step2$value.u;
							v = _step2$value.v;
							context$4$0.next = 11;
							return u === w ? v : u;

						case 11:
							_iteratorNormalCompletion2 = true;
							context$4$0.next = 5;
							break;

						case 14:
							context$4$0.next = 20;
							break;

						case 16:
							context$4$0.prev = 16;
							context$4$0.t0 = context$4$0["catch"](3);
							_didIteratorError2 = true;
							_iteratorError2 = context$4$0.t0;

						case 20:
							context$4$0.prev = 20;
							context$4$0.prev = 21;

							if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
								_iterator2["return"]();
							}

						case 23:
							context$4$0.prev = 23;

							if (!_didIteratorError2) {
								context$4$0.next = 26;
								break;
							}

							throw _iteratorError2;

						case 26:
							return context$4$0.finish(23);

						case 27:
							return context$4$0.finish(20);

						case 28:
						case "end":
							return context$4$0.stop();
					}
				}, callee$3$0, this, [[3, 16, 20, 28], [21,, 23, 27]]);
			});

			Graph.prototype.aeitr = regeneratorRuntime.mark(function callee$3$0() {
				return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
					while (1) switch (context$4$0.prev = context$4$0.next) {
						case 0:
							return context$4$0.delegateYield(this.E, "t0", 1);

						case 1:
						case "end":
							return context$4$0.stop();
					}
				}, callee$3$0, this);
			});

			return Graph;
		};

		exports.List = List;

		/* js/src/Vertex.js */

		var Vertex = function Vertex(edges) {

			this.iterator = null;
			this.E = edges;
		};

		exports.Vertex = Vertex;

		return exports;
	};
	if (typeof exports === "object") {
		definition(exports);
	} else if (typeof define === "function" && define.amd) {
		define("aureooms-js-adjacency-list", [], function () {
			return definition({});
		});
	} else if (typeof window === "object" && typeof window.document === "object") {
		definition(window["adjacencylist"] = {});
	} else console.error("unable to detect type of module to define for aureooms-js-adjacency-list");
})();