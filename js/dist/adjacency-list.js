"use strict";

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

(function () {

	"use strict";

	var definition = function definition(exports, undefined) {

		/* js/src/DiEdge.js */

		var DiEdge = function DiEdge(u, v, list) {

			this.u = u;
			this.v = v;
			this.iterator = null;
			this.twin = null;
			this.list = list;
		};

		exports.DiEdge = DiEdge;

		/* js/src/DiVertex.js */

		var DiVertex = function DiVertex() {

			this.iterator = null;
		};

		exports.DiVertex = DiVertex;

		/* js/src/Edge.js */

		var Edge = function Edge(u, v) {

			this.u = u;
			this.v = v;
			this.iterator = null;
			this.uiterator = null;
			this.viterator = null;
		};

		exports.Edge = Edge;

		/* js/src/MultiDiGraph.js */

		/**
   * Complexity of each update operation in comments for
   * classical Doubly Linked List and Hash Map implementations.
   * Complexity in O(.) notation is most likely amortized time
   * for operation involving the successors and predecessors maps.
   */

		var MultiDiGraph = function MultiDiGraph(List, Map) {

			/**
    * O(1)
    */
			var Graph = function Graph() {

				this.V = new List();

				this.succ = new Map();
				this.pred = new Map();
			};

			/**
    * O(1)
    */
			Graph.prototype.vadd = function () {

				var v = new DiVertex();

				this.succ.set(v, new List());
				this.pred.set(v, new List());

				v.iterator = this.V.push(v);

				return v;
			};

			/**
    * O(n) where n is the degree of v
    */
			Graph.prototype.vdel = function (v) {

				// remove all ingoing and outgoing edges
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = this.initr(v)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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

				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;

				try {
					for (var _iterator2 = this.outitr(v)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						var e = _step2.value;
						this.edel(e);
					}
				} catch (err) {
					_didIteratorError2 = true;
					_iteratorError2 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
							_iterator2["return"]();
						}
					} finally {
						if (_didIteratorError2) {
							throw _iteratorError2;
						}
					}
				}

				this.pred["delete"](v);
				this.succ["delete"](v);

				// remove vertex
				this.V.erase(v.iterator);
			};

			/**
    * O(1)
    */
			Graph.prototype.eadd = function (u, v) {

				var uv = new DiEdge(u, v, this.succ.get(u));
				var vu = new DiEdge(v, u, this.pred.get(v));

				// add to edge list of u
				uv.iterator = uv.list.push(uv);

				// add to edge list of v
				vu.iterator = vu.list.push(vu);

				// set twin
				uv.twin = vu;
				vu.twin = uv;

				return uv;
			};

			/**
    * O(1)
    */
			Graph.prototype.edel = function (e) {

				e.list.erase(e.iterator);
				e.twin.list.erase(e.twin.iterator);
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

			Graph.prototype.eitr = regeneratorRuntime.mark(function callee$3$0() {
				var _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, _step3$value, _, edges;

				return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
					while (1) switch (context$4$0.prev = context$4$0.next) {
						case 0:
							_iteratorNormalCompletion3 = true;
							_didIteratorError3 = false;
							_iteratorError3 = undefined;
							context$4$0.prev = 3;
							_iterator3 = this.succ[Symbol.iterator]();

						case 5:
							if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
								context$4$0.next = 13;
								break;
							}

							_step3$value = _slicedToArray(_step3.value, 2);
							_ = _step3$value[0];
							edges = _step3$value[1];
							return context$4$0.delegateYield(edges, "t0", 10);

						case 10:
							_iteratorNormalCompletion3 = true;
							context$4$0.next = 5;
							break;

						case 13:
							context$4$0.next = 19;
							break;

						case 15:
							context$4$0.prev = 15;
							context$4$0.t1 = context$4$0["catch"](3);
							_didIteratorError3 = true;
							_iteratorError3 = context$4$0.t1;

						case 19:
							context$4$0.prev = 19;
							context$4$0.prev = 20;

							if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
								_iterator3["return"]();
							}

						case 22:
							context$4$0.prev = 22;

							if (!_didIteratorError3) {
								context$4$0.next = 25;
								break;
							}

							throw _iteratorError3;

						case 25:
							return context$4$0.finish(22);

						case 26:
							return context$4$0.finish(19);

						case 27:
						case "end":
							return context$4$0.stop();
					}
				}, callee$3$0, this, [[3, 15, 19, 27], [20,, 22, 26]]);
			});

			Graph.prototype.iitr = regeneratorRuntime.mark(function callee$3$0(v) {
				return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
					while (1) switch (context$4$0.prev = context$4$0.next) {
						case 0:
							return context$4$0.delegateYield(this.initr(v), "t0", 1);

						case 1:
							return context$4$0.delegateYield(this.outitr(v), "t1", 2);

						case 2:
						case "end":
							return context$4$0.stop();
					}
				}, callee$3$0, this);
			});

			Graph.prototype.initr = regeneratorRuntime.mark(function callee$3$0(v) {
				return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
					while (1) switch (context$4$0.prev = context$4$0.next) {
						case 0:
							return context$4$0.delegateYield(this.pred.get(v), "t0", 1);

						case 1:
						case "end":
							return context$4$0.stop();
					}
				}, callee$3$0, this);
			});

			Graph.prototype.outitr = regeneratorRuntime.mark(function callee$3$0(v) {
				return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
					while (1) switch (context$4$0.prev = context$4$0.next) {
						case 0:
							return context$4$0.delegateYield(this.succ.get(v), "t0", 1);

						case 1:
						case "end":
							return context$4$0.stop();
					}
				}, callee$3$0, this);
			});

			Graph.prototype.nitr = regeneratorRuntime.mark(function callee$3$0(u) {
				return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
					while (1) switch (context$4$0.prev = context$4$0.next) {
						case 0:
							return context$4$0.delegateYield(this.dsitr(u), "t0", 1);

						case 1:
							return context$4$0.delegateYield(this.dpitr(u), "t1", 2);

						case 2:
						case "end":
							return context$4$0.stop();
					}
				}, callee$3$0, this);
			});

			Graph.prototype.dsitr = regeneratorRuntime.mark(function callee$3$0(u) {
				var _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, v;

				return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
					while (1) switch (context$4$0.prev = context$4$0.next) {
						case 0:
							_iteratorNormalCompletion4 = true;
							_didIteratorError4 = false;
							_iteratorError4 = undefined;
							context$4$0.prev = 3;
							_iterator4 = this.succ.get(u)[Symbol.iterator]();

						case 5:
							if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
								context$4$0.next = 12;
								break;
							}

							v = _step4.value.v;
							context$4$0.next = 9;
							return v;

						case 9:
							_iteratorNormalCompletion4 = true;
							context$4$0.next = 5;
							break;

						case 12:
							context$4$0.next = 18;
							break;

						case 14:
							context$4$0.prev = 14;
							context$4$0.t0 = context$4$0["catch"](3);
							_didIteratorError4 = true;
							_iteratorError4 = context$4$0.t0;

						case 18:
							context$4$0.prev = 18;
							context$4$0.prev = 19;

							if (!_iteratorNormalCompletion4 && _iterator4["return"]) {
								_iterator4["return"]();
							}

						case 21:
							context$4$0.prev = 21;

							if (!_didIteratorError4) {
								context$4$0.next = 24;
								break;
							}

							throw _iteratorError4;

						case 24:
							return context$4$0.finish(21);

						case 25:
							return context$4$0.finish(18);

						case 26:
						case "end":
							return context$4$0.stop();
					}
				}, callee$3$0, this, [[3, 14, 18, 26], [19,, 21, 25]]);
			});

			Graph.prototype.dpitr = regeneratorRuntime.mark(function callee$3$0(u) {
				var _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, v;

				return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
					while (1) switch (context$4$0.prev = context$4$0.next) {
						case 0:
							_iteratorNormalCompletion5 = true;
							_didIteratorError5 = false;
							_iteratorError5 = undefined;
							context$4$0.prev = 3;
							_iterator5 = this.pred.get(u)[Symbol.iterator]();

						case 5:
							if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
								context$4$0.next = 12;
								break;
							}

							v = _step5.value.v;
							context$4$0.next = 9;
							return v;

						case 9:
							_iteratorNormalCompletion5 = true;
							context$4$0.next = 5;
							break;

						case 12:
							context$4$0.next = 18;
							break;

						case 14:
							context$4$0.prev = 14;
							context$4$0.t0 = context$4$0["catch"](3);
							_didIteratorError5 = true;
							_iteratorError5 = context$4$0.t0;

						case 18:
							context$4$0.prev = 18;
							context$4$0.prev = 19;

							if (!_iteratorNormalCompletion5 && _iterator5["return"]) {
								_iterator5["return"]();
							}

						case 21:
							context$4$0.prev = 21;

							if (!_didIteratorError5) {
								context$4$0.next = 24;
								break;
							}

							throw _iteratorError5;

						case 24:
							return context$4$0.finish(21);

						case 25:
							return context$4$0.finish(18);

						case 26:
						case "end":
							return context$4$0.stop();
					}
				}, callee$3$0, this, [[3, 14, 18, 26], [19,, 21, 25]]);
			});

			Graph.prototype.edges = regeneratorRuntime.mark(function callee$3$0() {
				var _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator6, _step6, e;

				return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
					while (1) switch (context$4$0.prev = context$4$0.next) {
						case 0:
							_iteratorNormalCompletion6 = true;
							_didIteratorError6 = false;
							_iteratorError6 = undefined;
							context$4$0.prev = 3;
							_iterator6 = this.eitr()[Symbol.iterator]();

						case 5:
							if (_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done) {
								context$4$0.next = 12;
								break;
							}

							e = _step6.value;
							context$4$0.next = 9;
							return [e.u, e.v, e];

						case 9:
							_iteratorNormalCompletion6 = true;
							context$4$0.next = 5;
							break;

						case 12:
							context$4$0.next = 18;
							break;

						case 14:
							context$4$0.prev = 14;
							context$4$0.t0 = context$4$0["catch"](3);
							_didIteratorError6 = true;
							_iteratorError6 = context$4$0.t0;

						case 18:
							context$4$0.prev = 18;
							context$4$0.prev = 19;

							if (!_iteratorNormalCompletion6 && _iterator6["return"]) {
								_iterator6["return"]();
							}

						case 21:
							context$4$0.prev = 21;

							if (!_didIteratorError6) {
								context$4$0.next = 24;
								break;
							}

							throw _iteratorError6;

						case 24:
							return context$4$0.finish(21);

						case 25:
							return context$4$0.finish(18);

						case 26:
						case "end":
							return context$4$0.stop();
					}
				}, callee$3$0, this, [[3, 14, 18, 26], [19,, 21, 25]]);
			});

			Graph.prototype.incident = regeneratorRuntime.mark(function callee$3$0(u) {
				return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
					while (1) switch (context$4$0.prev = context$4$0.next) {
						case 0:
							return context$4$0.delegateYield(this.ingoing(u), "t0", 1);

						case 1:
							return context$4$0.delegateYield(this.outgoing(u), "t1", 2);

						case 2:
						case "end":
							return context$4$0.stop();
					}
				}, callee$3$0, this);
			});

			Graph.prototype.ingoing = regeneratorRuntime.mark(function callee$3$0(u) {
				var _iteratorNormalCompletion7, _didIteratorError7, _iteratorError7, _iterator7, _step7, e;

				return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
					while (1) switch (context$4$0.prev = context$4$0.next) {
						case 0:
							_iteratorNormalCompletion7 = true;
							_didIteratorError7 = false;
							_iteratorError7 = undefined;
							context$4$0.prev = 3;
							_iterator7 = this.initr(u)[Symbol.iterator]();

						case 5:
							if (_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done) {
								context$4$0.next = 12;
								break;
							}

							e = _step7.value;
							context$4$0.next = 9;
							return [e.u, e.v, e];

						case 9:
							_iteratorNormalCompletion7 = true;
							context$4$0.next = 5;
							break;

						case 12:
							context$4$0.next = 18;
							break;

						case 14:
							context$4$0.prev = 14;
							context$4$0.t0 = context$4$0["catch"](3);
							_didIteratorError7 = true;
							_iteratorError7 = context$4$0.t0;

						case 18:
							context$4$0.prev = 18;
							context$4$0.prev = 19;

							if (!_iteratorNormalCompletion7 && _iterator7["return"]) {
								_iterator7["return"]();
							}

						case 21:
							context$4$0.prev = 21;

							if (!_didIteratorError7) {
								context$4$0.next = 24;
								break;
							}

							throw _iteratorError7;

						case 24:
							return context$4$0.finish(21);

						case 25:
							return context$4$0.finish(18);

						case 26:
						case "end":
							return context$4$0.stop();
					}
				}, callee$3$0, this, [[3, 14, 18, 26], [19,, 21, 25]]);
			});

			Graph.prototype.outgoing = regeneratorRuntime.mark(function callee$3$0(u) {
				var _iteratorNormalCompletion8, _didIteratorError8, _iteratorError8, _iterator8, _step8, e;

				return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
					while (1) switch (context$4$0.prev = context$4$0.next) {
						case 0:
							_iteratorNormalCompletion8 = true;
							_didIteratorError8 = false;
							_iteratorError8 = undefined;
							context$4$0.prev = 3;
							_iterator8 = this.outitr(u)[Symbol.iterator]();

						case 5:
							if (_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done) {
								context$4$0.next = 12;
								break;
							}

							e = _step8.value;
							context$4$0.next = 9;
							return [e.u, e.v, e];

						case 9:
							_iteratorNormalCompletion8 = true;
							context$4$0.next = 5;
							break;

						case 12:
							context$4$0.next = 18;
							break;

						case 14:
							context$4$0.prev = 14;
							context$4$0.t0 = context$4$0["catch"](3);
							_didIteratorError8 = true;
							_iteratorError8 = context$4$0.t0;

						case 18:
							context$4$0.prev = 18;
							context$4$0.prev = 19;

							if (!_iteratorNormalCompletion8 && _iterator8["return"]) {
								_iterator8["return"]();
							}

						case 21:
							context$4$0.prev = 21;

							if (!_didIteratorError8) {
								context$4$0.next = 24;
								break;
							}

							throw _iteratorError8;

						case 24:
							return context$4$0.finish(21);

						case 25:
							return context$4$0.finish(18);

						case 26:
						case "end":
							return context$4$0.stop();
					}
				}, callee$3$0, this, [[3, 14, 18, 26], [19,, 21, 25]]);
			});

			Graph.prototype.endpoints = function (e) {

				return [e.u, e.v];
			};

			/**
    * O(1)
    */
			Graph.prototype.reverse = function () {
				var _ref = [this.pred, this.succ];
				this.succ = _ref[0];
				this.pred = _ref[1];

				return this;
			};

			return Graph;
		};

		exports.MultiDiGraph = MultiDiGraph;

		/* js/src/MultiGraph.js */

		/**
   * Complexity of each update operation in comments for
   * a classical Doubly Linked List implementation.
   */

		var MultiGraph = function MultiGraph(List) {

			/**
    * O(1)
    */
			var Graph = function Graph() {

				this.V = new List();
				this.E = new List();
			};

			/**
    * O(1)
    */
			Graph.prototype.vadd = function () {

				var v = new Vertex(new List());

				v.iterator = this.V.push(v);

				return v;
			};

			/**
    * O(n) where n is the degree of v
    */
			Graph.prototype.vdel = function (v) {

				// remove all incident edges
				var _iteratorNormalCompletion9 = true;
				var _didIteratorError9 = false;
				var _iteratorError9 = undefined;

				try {
					for (var _iterator9 = this.iitr(v)[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
						var e = _step9.value;
						this.edel(e);
					}
				} catch (err) {
					_didIteratorError9 = true;
					_iteratorError9 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion9 && _iterator9["return"]) {
							_iterator9["return"]();
						}
					} finally {
						if (_didIteratorError9) {
							throw _iteratorError9;
						}
					}
				}

				// remove vertex
				this.V.erase(v.iterator);
			};

			/**
    * O(1)
    */
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

			/**
    * O(1)
    */
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

			Graph.prototype.eitr = regeneratorRuntime.mark(function callee$3$0() {
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

			Graph.prototype.iitr = regeneratorRuntime.mark(function callee$3$0(v) {
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

			Graph.prototype.initr = Graph.prototype.iitr;
			Graph.prototype.outitr = Graph.prototype.iitr;

			Graph.prototype.nitr = regeneratorRuntime.mark(function callee$3$0(w) {
				var _iteratorNormalCompletion10, _didIteratorError10, _iteratorError10, _iterator10, _step10, _step10$value, u, v;

				return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
					while (1) switch (context$4$0.prev = context$4$0.next) {
						case 0:
							_iteratorNormalCompletion10 = true;
							_didIteratorError10 = false;
							_iteratorError10 = undefined;
							context$4$0.prev = 3;
							_iterator10 = w.E[Symbol.iterator]();

						case 5:
							if (_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done) {
								context$4$0.next = 14;
								break;
							}

							_step10$value = _step10.value;
							u = _step10$value.u;
							v = _step10$value.v;
							context$4$0.next = 11;
							return u === w ? v : u;

						case 11:
							_iteratorNormalCompletion10 = true;
							context$4$0.next = 5;
							break;

						case 14:
							context$4$0.next = 20;
							break;

						case 16:
							context$4$0.prev = 16;
							context$4$0.t0 = context$4$0["catch"](3);
							_didIteratorError10 = true;
							_iteratorError10 = context$4$0.t0;

						case 20:
							context$4$0.prev = 20;
							context$4$0.prev = 21;

							if (!_iteratorNormalCompletion10 && _iterator10["return"]) {
								_iterator10["return"]();
							}

						case 23:
							context$4$0.prev = 23;

							if (!_didIteratorError10) {
								context$4$0.next = 26;
								break;
							}

							throw _iteratorError10;

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

			Graph.prototype.dsitr = Graph.prototype.nitr;
			Graph.prototype.dpitr = Graph.prototype.nitr;

			Graph.prototype.edges = regeneratorRuntime.mark(function callee$3$0() {
				var _iteratorNormalCompletion11, _didIteratorError11, _iteratorError11, _iterator11, _step11, e;

				return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
					while (1) switch (context$4$0.prev = context$4$0.next) {
						case 0:
							_iteratorNormalCompletion11 = true;
							_didIteratorError11 = false;
							_iteratorError11 = undefined;
							context$4$0.prev = 3;
							_iterator11 = this.eitr()[Symbol.iterator]();

						case 5:
							if (_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done) {
								context$4$0.next = 12;
								break;
							}

							e = _step11.value;
							context$4$0.next = 9;
							return [e.u, e.v, e];

						case 9:
							_iteratorNormalCompletion11 = true;
							context$4$0.next = 5;
							break;

						case 12:
							context$4$0.next = 18;
							break;

						case 14:
							context$4$0.prev = 14;
							context$4$0.t0 = context$4$0["catch"](3);
							_didIteratorError11 = true;
							_iteratorError11 = context$4$0.t0;

						case 18:
							context$4$0.prev = 18;
							context$4$0.prev = 19;

							if (!_iteratorNormalCompletion11 && _iterator11["return"]) {
								_iterator11["return"]();
							}

						case 21:
							context$4$0.prev = 21;

							if (!_didIteratorError11) {
								context$4$0.next = 24;
								break;
							}

							throw _iteratorError11;

						case 24:
							return context$4$0.finish(21);

						case 25:
							return context$4$0.finish(18);

						case 26:
						case "end":
							return context$4$0.stop();
					}
				}, callee$3$0, this, [[3, 14, 18, 26], [19,, 21, 25]]);
			});

			Graph.prototype.incident = regeneratorRuntime.mark(function callee$3$0(v) {
				var _iteratorNormalCompletion12, _didIteratorError12, _iteratorError12, _iterator12, _step12, e;

				return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
					while (1) switch (context$4$0.prev = context$4$0.next) {
						case 0:
							_iteratorNormalCompletion12 = true;
							_didIteratorError12 = false;
							_iteratorError12 = undefined;
							context$4$0.prev = 3;
							_iterator12 = this.iitr(v)[Symbol.iterator]();

						case 5:
							if (_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done) {
								context$4$0.next = 12;
								break;
							}

							e = _step12.value;
							context$4$0.next = 9;
							return [e.u, e.v, e];

						case 9:
							_iteratorNormalCompletion12 = true;
							context$4$0.next = 5;
							break;

						case 12:
							context$4$0.next = 18;
							break;

						case 14:
							context$4$0.prev = 14;
							context$4$0.t0 = context$4$0["catch"](3);
							_didIteratorError12 = true;
							_iteratorError12 = context$4$0.t0;

						case 18:
							context$4$0.prev = 18;
							context$4$0.prev = 19;

							if (!_iteratorNormalCompletion12 && _iterator12["return"]) {
								_iterator12["return"]();
							}

						case 21:
							context$4$0.prev = 21;

							if (!_didIteratorError12) {
								context$4$0.next = 24;
								break;
							}

							throw _iteratorError12;

						case 24:
							return context$4$0.finish(21);

						case 25:
							return context$4$0.finish(18);

						case 26:
						case "end":
							return context$4$0.stop();
					}
				}, callee$3$0, this, [[3, 14, 18, 26], [19,, 21, 25]]);
			});

			Graph.prototype.ingoing = Graph.prototype.incident;
			Graph.prototype.outgoing = Graph.prototype.incident;

			Graph.prototype.endpoints = function (e) {

				return [e.u, e.v];
			};

			/**
    * O(1)
    */
			Graph.prototype.reverse = function () {};

			return Graph;
		};

		exports.MultiGraph = MultiGraph;

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