/*! For license information please see train.js.LICENSE.txt */
!(function () {
	var t = {
			877: function (t, r, e) {
				var n = e(570),
					o = e(171),
					i = o;
				(i.v1 = n), (i.v4 = o), (t.exports = i);
			},
			327: function (t) {
				for (var r = [], e = 0; e < 256; ++e)
					r[e] = (e + 256).toString(16).substr(1);
				t.exports = function (t, e) {
					var n = e || 0,
						o = r;
					return [
						o[t[n++]],
						o[t[n++]],
						o[t[n++]],
						o[t[n++]],
						"-",
						o[t[n++]],
						o[t[n++]],
						"-",
						o[t[n++]],
						o[t[n++]],
						"-",
						o[t[n++]],
						o[t[n++]],
						"-",
						o[t[n++]],
						o[t[n++]],
						o[t[n++]],
						o[t[n++]],
						o[t[n++]],
						o[t[n++]],
					].join("");
				};
			},
			217: function (t) {
				var r =
					("undefined" != typeof crypto &&
						crypto.getRandomValues &&
						crypto.getRandomValues.bind(crypto)) ||
					("undefined" != typeof msCrypto &&
						"function" == typeof window.msCrypto.getRandomValues &&
						msCrypto.getRandomValues.bind(msCrypto));
				if (r) {
					var e = new Uint8Array(16);
					t.exports = function () {
						return r(e), e;
					};
				} else {
					var n = new Array(16);
					t.exports = function () {
						for (var t, r = 0; r < 16; r++)
							0 == (3 & r) && (t = 4294967296 * Math.random()),
								(n[r] = (t >>> ((3 & r) << 3)) & 255);
						return n;
					};
				}
			},
			570: function (t, r, e) {
				var n,
					o,
					i = e(217),
					a = e(327),
					c = 0,
					u = 0;
				t.exports = function (t, r, e) {
					var s = (r && e) || 0,
						f = r || [],
						l = (t = t || {}).node || n,
						p = void 0 !== t.clockseq ? t.clockseq : o;
					if (null == l || null == p) {
						var h = i();
						null == l && (l = n = [1 | h[0], h[1], h[2], h[3], h[4], h[5]]),
							null == p && (p = o = 16383 & ((h[6] << 8) | h[7]));
					}
					var d = void 0 !== t.msecs ? t.msecs : new Date().getTime(),
						y = void 0 !== t.nsecs ? t.nsecs : u + 1,
						v = d - c + (y - u) / 1e4;
					if (
						(v < 0 && void 0 === t.clockseq && (p = (p + 1) & 16383),
						(v < 0 || d > c) && void 0 === t.nsecs && (y = 0),
						y >= 1e4)
					)
						throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
					(c = d), (u = y), (o = p);
					var m = (1e4 * (268435455 & (d += 122192928e5)) + y) % 4294967296;
					(f[s++] = (m >>> 24) & 255),
						(f[s++] = (m >>> 16) & 255),
						(f[s++] = (m >>> 8) & 255),
						(f[s++] = 255 & m);
					var g = ((d / 4294967296) * 1e4) & 268435455;
					(f[s++] = (g >>> 8) & 255),
						(f[s++] = 255 & g),
						(f[s++] = ((g >>> 24) & 15) | 16),
						(f[s++] = (g >>> 16) & 255),
						(f[s++] = (p >>> 8) | 128),
						(f[s++] = 255 & p);
					for (var b = 0; b < 6; ++b) f[s + b] = l[b];
					return r || a(f);
				};
			},
			171: function (t, r, e) {
				var n = e(217),
					o = e(327);
				t.exports = function (t, r, e) {
					var i = (r && e) || 0;
					"string" == typeof t &&
						((r = "binary" === t ? new Array(16) : null), (t = null));
					var a = (t = t || {}).random || (t.rng || n)();
					if (((a[6] = (15 & a[6]) | 64), (a[8] = (63 & a[8]) | 128), r))
						for (var c = 0; c < 16; ++c) r[i + c] = a[c];
					return r || o(a);
				};
			},
		},
		r = {};
	function e(n) {
		var o = r[n];
		if (void 0 !== o) return o.exports;
		var i = (r[n] = { exports: {} });
		return t[n](i, i.exports, e), i.exports;
	}
	(e.n = function (t) {
		var r =
			t && t.__esModule
				? function () {
						return t.default;
				  }
				: function () {
						return t;
				  };
		return e.d(r, { a: r }), r;
	}),
		(e.d = function (t, r) {
			for (var n in r)
				e.o(r, n) &&
					!e.o(t, n) &&
					Object.defineProperty(t, n, { enumerable: !0, get: r[n] });
		}),
		(e.g = (function () {
			if ("object" == typeof globalThis) return globalThis;
			try {
				return this || new Function("return this")();
			} catch (t) {
				if ("object" == typeof window) return window;
			}
		})()),
		(e.o = function (t, r) {
			return Object.prototype.hasOwnProperty.call(t, r);
		}),
		(function () {
			"use strict";
			function t(r) {
				return (
					(t =
						"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
							? function (t) {
									return typeof t;
							  }
							: function (t) {
									return t &&
										"function" == typeof Symbol &&
										t.constructor === Symbol &&
										t !== Symbol.prototype
										? "symbol"
										: typeof t;
							  }),
					t(r)
				);
			}
			function r(t, r, e) {
				return (
					r in t
						? Object.defineProperty(t, r, {
								value: e,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (t[r] = e),
					t
				);
			}
			function n(t, r, e, n, o, i, a) {
				try {
					var c = t[i](a),
						u = c.value;
				} catch (t) {
					return void e(t);
				}
				c.done ? r(u) : Promise.resolve(u).then(n, o);
			}
			function o(t) {
				return function () {
					var r = this,
						e = arguments;
					return new Promise(function (o, i) {
						var a = t.apply(r, e);
						function c(t) {
							n(a, o, i, c, u, "next", t);
						}
						function u(t) {
							n(a, o, i, c, u, "throw", t);
						}
						c(void 0);
					});
				};
			}
			var i;
			!(function (t) {
				(t.UNDERGOING = "undergoing"),
					(t.ERROR = "error"),
					(t.SUCCESS = "success"),
					(t.IDLE = "idle");
			})(i || (i = {}));
			var a = e(877),
				c = e.n(a),
				u = function (t) {
					return "ml-training/_edge/".concat(t);
				},
				s = "ml-job-status/_platform",
				f = function (t) {
					return "cb_ml_".concat(t);
				},
				l = "model.onnx",
				p = "retrain_requirement.txt",
				h = "env.list",
				d = "additional_output/",
				y = function (t) {
					return "retrain_scripts_".concat(t + 1, ".py");
				};
			function v(t, r) {
				var e =
					("undefined" != typeof Symbol && t[Symbol.iterator]) ||
					t["@@iterator"];
				if (!e) {
					if (
						Array.isArray(t) ||
						(e = (function (t, r) {
							if (t) {
								if ("string" == typeof t) return m(t, r);
								var e = Object.prototype.toString.call(t).slice(8, -1);
								return (
									"Object" === e && t.constructor && (e = t.constructor.name),
									"Map" === e || "Set" === e
										? Array.from(t)
										: "Arguments" === e ||
										  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
										? m(t, r)
										: void 0
								);
							}
						})(t)) ||
						(r && t && "number" == typeof t.length)
					) {
						e && (t = e);
						var n = 0,
							o = function () {};
						return {
							s: o,
							n: function () {
								return n >= t.length
									? { done: !0 }
									: { done: !1, value: t[n++] };
							},
							e: function (t) {
								throw t;
							},
							f: o,
						};
					}
					throw new TypeError(
						"Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
					);
				}
				var i,
					a = !0,
					c = !1;
				return {
					s: function () {
						e = e.call(t);
					},
					n: function () {
						var t = e.next();
						return (a = t.done), t;
					},
					e: function (t) {
						(c = !0), (i = t);
					},
					f: function () {
						try {
							a || null == e.return || e.return();
						} finally {
							if (c) throw i;
						}
					},
				};
			}
			function m(t, r) {
				(null == r || r > t.length) && (r = t.length);
				for (var e = 0, n = new Array(r); e < r; e++) n[e] = t[e];
				return n;
			}
			function g(t, r) {
				var e = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					r &&
						(n = n.filter(function (r) {
							return Object.getOwnPropertyDescriptor(t, r).enumerable;
						})),
						e.push.apply(e, n);
				}
				return e;
			}
			function b(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2
						? g(Object(n), !0).forEach(function (e) {
								r(t, e, n[e]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
						: g(Object(n)).forEach(function (r) {
								Object.defineProperty(
									t,
									r,
									Object.getOwnPropertyDescriptor(n, r)
								);
						  });
				}
				return t;
			}
			function w() {
				w = function () {
					return r;
				};
				var r = {},
					e = Object.prototype,
					n = e.hasOwnProperty,
					o = "function" == typeof Symbol ? Symbol : {},
					i = o.iterator || "@@iterator",
					a = o.asyncIterator || "@@asyncIterator",
					c = o.toStringTag || "@@toStringTag";
				function u(t, r, e) {
					return (
						Object.defineProperty(t, r, {
							value: e,
							enumerable: !0,
							configurable: !0,
							writable: !0,
						}),
						t[r]
					);
				}
				try {
					u({}, "");
				} catch (t) {
					u = function (t, r, e) {
						return (t[r] = e);
					};
				}
				function s(t, r, e, n) {
					var o = r && r.prototype instanceof p ? r : p,
						i = Object.create(o.prototype),
						a = new k(n || []);
					return (
						(i._invoke = (function (t, r, e) {
							var n = "suspendedStart";
							return function (o, i) {
								if ("executing" === n)
									throw new Error("Generator is already running");
								if ("completed" === n) {
									if ("throw" === o) throw i;
									return { value: void 0, done: !0 };
								}
								for (e.method = o, e.arg = i; ; ) {
									var a = e.delegate;
									if (a) {
										var c = O(a, e);
										if (c) {
											if (c === l) continue;
											return c;
										}
									}
									if ("next" === e.method) e.sent = e._sent = e.arg;
									else if ("throw" === e.method) {
										if ("suspendedStart" === n)
											throw ((n = "completed"), e.arg);
										e.dispatchException(e.arg);
									} else "return" === e.method && e.abrupt("return", e.arg);
									n = "executing";
									var u = f(t, r, e);
									if ("normal" === u.type) {
										if (
											((n = e.done ? "completed" : "suspendedYield"),
											u.arg === l)
										)
											continue;
										return { value: u.arg, done: e.done };
									}
									"throw" === u.type &&
										((n = "completed"), (e.method = "throw"), (e.arg = u.arg));
								}
							};
						})(t, e, a)),
						i
					);
				}
				function f(t, r, e) {
					try {
						return { type: "normal", arg: t.call(r, e) };
					} catch (t) {
						return { type: "throw", arg: t };
					}
				}
				r.wrap = s;
				var l = {};
				function p() {}
				function h() {}
				function d() {}
				var y = {};
				u(y, i, function () {
					return this;
				});
				var v = Object.getPrototypeOf,
					m = v && v(v(E([])));
				m && m !== e && n.call(m, i) && (y = m);
				var g = (d.prototype = p.prototype = Object.create(y));
				function b(t) {
					["next", "throw", "return"].forEach(function (r) {
						u(t, r, function (t) {
							return this._invoke(r, t);
						});
					});
				}
				function x(r, e) {
					function o(i, a, c, u) {
						var s = f(r[i], r, a);
						if ("throw" !== s.type) {
							var l = s.arg,
								p = l.value;
							return p && "object" == t(p) && n.call(p, "__await")
								? e.resolve(p.__await).then(
										function (t) {
											o("next", t, c, u);
										},
										function (t) {
											o("throw", t, c, u);
										}
								  )
								: e.resolve(p).then(
										function (t) {
											(l.value = t), c(l);
										},
										function (t) {
											return o("throw", t, c, u);
										}
								  );
						}
						u(s.arg);
					}
					var i;
					this._invoke = function (t, r) {
						function n() {
							return new e(function (e, n) {
								o(t, r, e, n);
							});
						}
						return (i = i ? i.then(n, n) : n());
					};
				}
				function O(t, r) {
					var e = t.iterator[r.method];
					if (void 0 === e) {
						if (((r.delegate = null), "throw" === r.method)) {
							if (
								t.iterator.return &&
								((r.method = "return"),
								(r.arg = void 0),
								O(t, r),
								"throw" === r.method)
							)
								return l;
							(r.method = "throw"),
								(r.arg = new TypeError(
									"The iterator does not provide a 'throw' method"
								));
						}
						return l;
					}
					var n = f(e, t.iterator, r.arg);
					if ("throw" === n.type)
						return (
							(r.method = "throw"), (r.arg = n.arg), (r.delegate = null), l
						);
					var o = n.arg;
					return o
						? o.done
							? ((r[t.resultName] = o.value),
							  (r.next = t.nextLoc),
							  "return" !== r.method &&
									((r.method = "next"), (r.arg = void 0)),
							  (r.delegate = null),
							  l)
							: o
						: ((r.method = "throw"),
						  (r.arg = new TypeError("iterator result is not an object")),
						  (r.delegate = null),
						  l);
				}
				function S(t) {
					var r = { tryLoc: t[0] };
					1 in t && (r.catchLoc = t[1]),
						2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])),
						this.tryEntries.push(r);
				}
				function _(t) {
					var r = t.completion || {};
					(r.type = "normal"), delete r.arg, (t.completion = r);
				}
				function k(t) {
					(this.tryEntries = [{ tryLoc: "root" }]),
						t.forEach(S, this),
						this.reset(!0);
				}
				function E(t) {
					if (t) {
						var r = t[i];
						if (r) return r.call(t);
						if ("function" == typeof t.next) return t;
						if (!isNaN(t.length)) {
							var e = -1,
								o = function r() {
									for (; ++e < t.length; )
										if (n.call(t, e)) return (r.value = t[e]), (r.done = !1), r;
									return (r.value = void 0), (r.done = !0), r;
								};
							return (o.next = o);
						}
					}
					return { next: j };
				}
				function j() {
					return { value: void 0, done: !0 };
				}
				return (
					(h.prototype = d),
					u(g, "constructor", d),
					u(d, "constructor", h),
					(h.displayName = u(d, c, "GeneratorFunction")),
					(r.isGeneratorFunction = function (t) {
						var r = "function" == typeof t && t.constructor;
						return (
							!!r &&
							(r === h || "GeneratorFunction" === (r.displayName || r.name))
						);
					}),
					(r.mark = function (t) {
						return (
							Object.setPrototypeOf
								? Object.setPrototypeOf(t, d)
								: ((t.__proto__ = d), u(t, c, "GeneratorFunction")),
							(t.prototype = Object.create(g)),
							t
						);
					}),
					(r.awrap = function (t) {
						return { __await: t };
					}),
					b(x.prototype),
					u(x.prototype, a, function () {
						return this;
					}),
					(r.AsyncIterator = x),
					(r.async = function (t, e, n, o, i) {
						void 0 === i && (i = Promise);
						var a = new x(s(t, e, n, o), i);
						return r.isGeneratorFunction(e)
							? a
							: a.next().then(function (t) {
									return t.done ? t.value : a.next();
							  });
					}),
					b(g),
					u(g, c, "Generator"),
					u(g, i, function () {
						return this;
					}),
					u(g, "toString", function () {
						return "[object Generator]";
					}),
					(r.keys = function (t) {
						var r = [];
						for (var e in t) r.push(e);
						return (
							r.reverse(),
							function e() {
								for (; r.length; ) {
									var n = r.pop();
									if (n in t) return (e.value = n), (e.done = !1), e;
								}
								return (e.done = !0), e;
							}
						);
					}),
					(r.values = E),
					(k.prototype = {
						constructor: k,
						reset: function (t) {
							if (
								((this.prev = 0),
								(this.next = 0),
								(this.sent = this._sent = void 0),
								(this.done = !1),
								(this.delegate = null),
								(this.method = "next"),
								(this.arg = void 0),
								this.tryEntries.forEach(_),
								!t)
							)
								for (var r in this)
									"t" === r.charAt(0) &&
										n.call(this, r) &&
										!isNaN(+r.slice(1)) &&
										(this[r] = void 0);
						},
						stop: function () {
							this.done = !0;
							var t = this.tryEntries[0].completion;
							if ("throw" === t.type) throw t.arg;
							return this.rval;
						},
						dispatchException: function (t) {
							if (this.done) throw t;
							var r = this;
							function e(e, n) {
								return (
									(a.type = "throw"),
									(a.arg = t),
									(r.next = e),
									n && ((r.method = "next"), (r.arg = void 0)),
									!!n
								);
							}
							for (var o = this.tryEntries.length - 1; o >= 0; --o) {
								var i = this.tryEntries[o],
									a = i.completion;
								if ("root" === i.tryLoc) return e("end");
								if (i.tryLoc <= this.prev) {
									var c = n.call(i, "catchLoc"),
										u = n.call(i, "finallyLoc");
									if (c && u) {
										if (this.prev < i.catchLoc) return e(i.catchLoc, !0);
										if (this.prev < i.finallyLoc) return e(i.finallyLoc);
									} else if (c) {
										if (this.prev < i.catchLoc) return e(i.catchLoc, !0);
									} else {
										if (!u)
											throw new Error("try statement without catch or finally");
										if (this.prev < i.finallyLoc) return e(i.finallyLoc);
									}
								}
							}
						},
						abrupt: function (t, r) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var o = this.tryEntries[e];
								if (
									o.tryLoc <= this.prev &&
									n.call(o, "finallyLoc") &&
									this.prev < o.finallyLoc
								) {
									var i = o;
									break;
								}
							}
							i &&
								("break" === t || "continue" === t) &&
								i.tryLoc <= r &&
								r <= i.finallyLoc &&
								(i = null);
							var a = i ? i.completion : {};
							return (
								(a.type = t),
								(a.arg = r),
								i
									? ((this.method = "next"), (this.next = i.finallyLoc), l)
									: this.complete(a)
							);
						},
						complete: function (t, r) {
							if ("throw" === t.type) throw t.arg;
							return (
								"break" === t.type || "continue" === t.type
									? (this.next = t.arg)
									: "return" === t.type
									? ((this.rval = this.arg = t.arg),
									  (this.method = "return"),
									  (this.next = "end"))
									: "normal" === t.type && r && (this.next = r),
								l
							);
						},
						finish: function (t) {
							for (var r = this.tryEntries.length - 1; r >= 0; --r) {
								var e = this.tryEntries[r];
								if (e.finallyLoc === t)
									return this.complete(e.completion, e.afterLoc), _(e), l;
							}
						},
						catch: function (t) {
							for (var r = this.tryEntries.length - 1; r >= 0; --r) {
								var e = this.tryEntries[r];
								if (e.tryLoc === t) {
									var n = e.completion;
									if ("throw" === n.type) {
										var o = n.arg;
										_(e);
									}
									return o;
								}
							}
							throw new Error("illegal catch attempt");
						},
						delegateYield: function (t, r, e) {
							return (
								(this.delegate = { iterator: E(t), resultName: r, nextLoc: e }),
								"next" === this.method && (this.arg = void 0),
								l
							);
						},
					}),
					r
				);
			}
			var x = new MQTT.Client();
			function O() {
				return (O = o(
					w().mark(function t(r, e) {
						return w().wrap(function (t) {
							for (;;)
								switch ((t.prev = t.next)) {
									case 0:
										ClearBlade.init({ request: r }),
											ClearBlade.isEdge() ||
												e.success("Service must be run on edge"),
											log("subscribed to" + u(ClearBlade.edgeId())),
											x.subscribe(u(ClearBlade.edgeId()), function (t, e) {
												S(
													b(
														b({}, JSON.parse(e.payload)),
														{},
														{ system_key: r.systemKey }
													)
												);
											});
									case 4:
									case "end":
										return t.stop();
								}
						}, t);
					})
				)).apply(this, arguments);
			}
			function S(t) {
				return _.apply(this, arguments);
			}
			function _() {
				return (
					(_ = o(
						w().mark(function t(r) {
							var e, n, a, u, m, g, b, O, S, _, j, L, P, N, C, I, D, A, G;
							return w().wrap(
								function (t) {
									for (;;)
										switch ((t.prev = t.next)) {
											case 0:
												return (
													(e = ""),
													(t.prev = 1),
													log("starting retrain, training params: ", r),
													(n = r.model_name),
													(a = r.scripts_count),
													(u = r.evaluations),
													(m = r.system_key),
													(e = "".concat(n, "_job")),
													(g = "".concat(e, "_training")),
													(b = ClearBladeAsync.FS(g)),
													(O = f(e)),
													(S = ""
														.concat(new Date().toJSON().slice(0, 10), "_")
														.concat(c()())),
													(_ = {
														name: e,
														state: i.UNDERGOING,
														timestamp: new Date().toISOString(),
													}),
													x.publish(s, JSON.stringify(_)),
													(t.next = 13),
													E(
														"sudo docker run -t -d --name "
															.concat(
																O,
																" --env-file=/clearblade_platform_buckets/"
															)
															.concat(m, "/")
															.concat(g, "/inbox/")
															.concat(
																h,
																" --mount type=bind,source=/clearblade_platform_buckets/"
															)
															.concat(m, "/")
															.concat(
																g,
																",target=/docker-mnt python:3.9-bullseye"
															)
													)
												);
											case 13:
												return (
													log("installing pip packages"),
													(t.next = 16),
													E(
														"sudo docker exec "
															.concat(O, " pip3 install -r /docker-mnt/inbox/")
															.concat(p)
													)
												);
											case 16:
												for (j = [], L = 0; L < a; L++)
													j.push(
														E(
															"sudo docker exec -w /docker-mnt/inbox/ "
																.concat(O, " python3 ")
																.concat(y(L))
														)
													);
												return (t.next = 20), Promise.all(j);
											case 20:
												return (
													(t.next = 22),
													b.copyFile(
														"inbox/".concat(l),
														"outbox/".concat(S, "/").concat(l)
													)
												);
											case 22:
												return (
													(P = (function () {
														var t = o(
															w().mark(function t(r, e) {
																var n;
																return w().wrap(function (t) {
																	for (;;)
																		switch ((t.prev = t.next)) {
																			case 0:
																				return (t.next = 2), b.readDir(r);
																			case 2:
																				return (
																					(n = t.sent
																						.filter(function (t) {
																							return t.startsWith(r);
																						})
																						.map(function (t) {
																							return t.substring(r.length);
																						})),
																					t.abrupt(
																						"return",
																						Promise.all(
																							n.map(
																								(function () {
																									var t = o(
																										w().mark(function t(n) {
																											return w().wrap(function (
																												t
																											) {
																												for (;;)
																													switch (
																														(t.prev = t.next)
																													) {
																														case 0:
																															return t.abrupt(
																																"return",
																																b.copyFile(
																																	r +
																																		"".concat(
																																			n
																																		),
																																	e +
																																		"".concat(n)
																																)
																															);
																														case 1:
																														case "end":
																															return t.stop();
																													}
																											},
																											t);
																										})
																									);
																									return function (r) {
																										return t.apply(
																											this,
																											arguments
																										);
																									};
																								})()
																							)
																						)
																					)
																				);
																			case 4:
																			case "end":
																				return t.stop();
																		}
																}, t);
															})
														);
														return function (r, e) {
															return t.apply(this, arguments);
														};
													})()),
													(t.next = 25),
													P(
														"/inbox/".concat(d),
														"/outbox/".concat(S, "/").concat(d)
													)
												);
											case 25:
												(N = {}), (C = v(u)), (t.prev = 27), C.s();
											case 29:
												if ((I = C.n()).done) {
													t.next = 36;
													break;
												}
												return (
													(D = I.value),
													(t.next = 33),
													b
														.readFile("inbox/".concat(D, ".txt"), "utf-8")
														.toString()
												);
											case 33:
												N[D] = t.sent;
											case 34:
												t.next = 29;
												break;
											case 36:
												t.next = 41;
												break;
											case 38:
												(t.prev = 38), (t.t0 = t.catch(27)), C.e(t.t0);
											case 41:
												return (t.prev = 41), C.f(), t.finish(41);
											case 44:
												return (
													(A = {
														name: e,
														state: i.SUCCESS,
														timestamp: new Date().toISOString(),
														model_name: n,
														id: S,
														evaluations: N,
													}),
													(t.next = 47),
													x.publish(s, JSON.stringify(A))
												);
											case 47:
												return (
													log(
														"Model "
															.concat(e, " trained with deployment ")
															.concat(
																e,
																" is successfully trained and will be synced upstream."
															)
													),
													(t.next = 50),
													k(O)
												);
											case 50:
												t.next = 61;
												break;
											case 52:
												return (
													(t.prev = 52),
													(t.t1 = t.catch(1)),
													log("Stopping container due to error"),
													log("error", t.t1),
													(G = {
														name: e,
														state: i.ERROR,
														timestamp: new Date().toISOString(),
														error: t.t1.toString(),
													}),
													(t.next = 59),
													k(f(e))
												);
											case 59:
												return (t.next = 61), x.publish(s, JSON.stringify(G));
											case 61:
											case "end":
												return t.stop();
										}
								},
								t,
								null,
								[
									[1, 52],
									[27, 38, 41, 44],
								]
							);
						})
					)),
					_.apply(this, arguments)
				);
			}
			var k = function (t) {
					return E("sudo docker stop ".concat(t, " | xargs sudo docker rm"));
				},
				E = (function () {
					var t = o(
						w().mark(function t(r) {
							return w().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return t.abrupt(
												"return",
												child_process.execSync(r, {}).toString()
											);
										case 1:
										case "end":
											return t.stop();
									}
							}, t);
						})
					);
					return function (r) {
						return t.apply(this, arguments);
					};
				})();
			e.g.train = function (t, r) {
				return O.apply(this, arguments);
			};
		})();
})();
