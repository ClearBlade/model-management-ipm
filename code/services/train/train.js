/*! For license information please see train.js.LICENSE.txt */
!(function () {
	var t = {
			877: function (t, e, r) {
				var n = r(570),
					o = r(171),
					i = o;
				(i.v1 = n), (i.v4 = o), (t.exports = i);
			},
			327: function (t) {
				for (var e = [], r = 0; r < 256; ++r)
					e[r] = (r + 256).toString(16).substr(1);
				t.exports = function (t, r) {
					var n = r || 0,
						o = e;
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
				var e =
					("undefined" != typeof crypto &&
						crypto.getRandomValues &&
						crypto.getRandomValues.bind(crypto)) ||
					("undefined" != typeof msCrypto &&
						"function" == typeof window.msCrypto.getRandomValues &&
						msCrypto.getRandomValues.bind(msCrypto));
				if (e) {
					var r = new Uint8Array(16);
					t.exports = function () {
						return e(r), r;
					};
				} else {
					var n = new Array(16);
					t.exports = function () {
						for (var t, e = 0; e < 16; e++)
							0 == (3 & e) && (t = 4294967296 * Math.random()),
								(n[e] = (t >>> ((3 & e) << 3)) & 255);
						return n;
					};
				}
			},
			570: function (t, e, r) {
				var n,
					o,
					i = r(217),
					a = r(327),
					c = 0,
					u = 0;
				t.exports = function (t, e, r) {
					var s = (e && r) || 0,
						l = e || [],
						f = (t = t || {}).node || n,
						p = void 0 !== t.clockseq ? t.clockseq : o;
					if (null == f || null == p) {
						var h = i();
						null == f && (f = n = [1 | h[0], h[1], h[2], h[3], h[4], h[5]]),
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
					(l[s++] = (m >>> 24) & 255),
						(l[s++] = (m >>> 16) & 255),
						(l[s++] = (m >>> 8) & 255),
						(l[s++] = 255 & m);
					var g = ((d / 4294967296) * 1e4) & 268435455;
					(l[s++] = (g >>> 8) & 255),
						(l[s++] = 255 & g),
						(l[s++] = ((g >>> 24) & 15) | 16),
						(l[s++] = (g >>> 16) & 255),
						(l[s++] = (p >>> 8) | 128),
						(l[s++] = 255 & p);
					for (var b = 0; b < 6; ++b) l[s + b] = f[b];
					return e || a(l);
				};
			},
			171: function (t, e, r) {
				var n = r(217),
					o = r(327);
				t.exports = function (t, e, r) {
					var i = (e && r) || 0;
					"string" == typeof t &&
						((e = "binary" === t ? new Array(16) : null), (t = null));
					var a = (t = t || {}).random || (t.rng || n)();
					if (((a[6] = (15 & a[6]) | 64), (a[8] = (63 & a[8]) | 128), e))
						for (var c = 0; c < 16; ++c) e[i + c] = a[c];
					return e || o(a);
				};
			},
		},
		e = {};
	function r(n) {
		var o = e[n];
		if (void 0 !== o) return o.exports;
		var i = (e[n] = { exports: {} });
		return t[n](i, i.exports, r), i.exports;
	}
	(r.n = function (t) {
		var e =
			t && t.__esModule
				? function () {
						return t.default;
				  }
				: function () {
						return t;
				  };
		return r.d(e, { a: e }), e;
	}),
		(r.d = function (t, e) {
			for (var n in e)
				r.o(e, n) &&
					!r.o(t, n) &&
					Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
		}),
		(r.g = (function () {
			if ("object" == typeof globalThis) return globalThis;
			try {
				return this || new Function("return this")();
			} catch (t) {
				if ("object" == typeof window) return window;
			}
		})()),
		(r.o = function (t, e) {
			return Object.prototype.hasOwnProperty.call(t, e);
		}),
		(function () {
			"use strict";
			function t(e) {
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
					t(e)
				);
			}
			function e(t, e, r) {
				return (
					e in t
						? Object.defineProperty(t, e, {
								value: r,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (t[e] = r),
					t
				);
			}
			function n(t, e, r, n, o, i, a) {
				try {
					var c = t[i](a),
						u = c.value;
				} catch (t) {
					return void r(t);
				}
				c.done ? e(u) : Promise.resolve(u).then(n, o);
			}
			function o(t) {
				return function () {
					var e = this,
						r = arguments;
					return new Promise(function (o, i) {
						var a = t.apply(e, r);
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
			var a = r(877),
				c = r.n(a),
				u = function (t) {
					return "ml-training/_edge/".concat(t);
				},
				s = "ml-job-status/_platform",
				l = function (t) {
					return "cb_ml_".concat(t);
				},
				f = "model.onnx",
				p = "retrain_requirement.txt",
				h = "env.list",
				d = "additional_output/",
				y = function (t) {
					return "retrain_scripts_".concat(t + 1, ".py");
				};
			function v(t, e) {
				var r =
					("undefined" != typeof Symbol && t[Symbol.iterator]) ||
					t["@@iterator"];
				if (!r) {
					if (
						Array.isArray(t) ||
						(r = (function (t, e) {
							if (t) {
								if ("string" == typeof t) return m(t, e);
								var r = Object.prototype.toString.call(t).slice(8, -1);
								return (
									"Object" === r && t.constructor && (r = t.constructor.name),
									"Map" === r || "Set" === r
										? Array.from(t)
										: "Arguments" === r ||
										  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
										? m(t, e)
										: void 0
								);
							}
						})(t)) ||
						(e && t && "number" == typeof t.length)
					) {
						r && (t = r);
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
						r = r.call(t);
					},
					n: function () {
						var t = r.next();
						return (a = t.done), t;
					},
					e: function (t) {
						(c = !0), (i = t);
					},
					f: function () {
						try {
							a || null == r.return || r.return();
						} finally {
							if (c) throw i;
						}
					},
				};
			}
			function m(t, e) {
				(null == e || e > t.length) && (e = t.length);
				for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
				return n;
			}
			function g() {
				g = function () {
					return e;
				};
				var e = {},
					r = Object.prototype,
					n = r.hasOwnProperty,
					o = "function" == typeof Symbol ? Symbol : {},
					i = o.iterator || "@@iterator",
					a = o.asyncIterator || "@@asyncIterator",
					c = o.toStringTag || "@@toStringTag";
				function u(t, e, r) {
					return (
						Object.defineProperty(t, e, {
							value: r,
							enumerable: !0,
							configurable: !0,
							writable: !0,
						}),
						t[e]
					);
				}
				try {
					u({}, "");
				} catch (t) {
					u = function (t, e, r) {
						return (t[e] = r);
					};
				}
				function s(t, e, r, n) {
					var o = e && e.prototype instanceof p ? e : p,
						i = Object.create(o.prototype),
						a = new k(n || []);
					return (
						(i._invoke = (function (t, e, r) {
							var n = "suspendedStart";
							return function (o, i) {
								if ("executing" === n)
									throw new Error("Generator is already running");
								if ("completed" === n) {
									if ("throw" === o) throw i;
									return { value: void 0, done: !0 };
								}
								for (r.method = o, r.arg = i; ; ) {
									var a = r.delegate;
									if (a) {
										var c = O(a, r);
										if (c) {
											if (c === f) continue;
											return c;
										}
									}
									if ("next" === r.method) r.sent = r._sent = r.arg;
									else if ("throw" === r.method) {
										if ("suspendedStart" === n)
											throw ((n = "completed"), r.arg);
										r.dispatchException(r.arg);
									} else "return" === r.method && r.abrupt("return", r.arg);
									n = "executing";
									var u = l(t, e, r);
									if ("normal" === u.type) {
										if (
											((n = r.done ? "completed" : "suspendedYield"),
											u.arg === f)
										)
											continue;
										return { value: u.arg, done: r.done };
									}
									"throw" === u.type &&
										((n = "completed"), (r.method = "throw"), (r.arg = u.arg));
								}
							};
						})(t, r, a)),
						i
					);
				}
				function l(t, e, r) {
					try {
						return { type: "normal", arg: t.call(e, r) };
					} catch (t) {
						return { type: "throw", arg: t };
					}
				}
				e.wrap = s;
				var f = {};
				function p() {}
				function h() {}
				function d() {}
				var y = {};
				u(y, i, function () {
					return this;
				});
				var v = Object.getPrototypeOf,
					m = v && v(v(E([])));
				m && m !== r && n.call(m, i) && (y = m);
				var b = (d.prototype = p.prototype = Object.create(y));
				function w(t) {
					["next", "throw", "return"].forEach(function (e) {
						u(t, e, function (t) {
							return this._invoke(e, t);
						});
					});
				}
				function x(e, r) {
					function o(i, a, c, u) {
						var s = l(e[i], e, a);
						if ("throw" !== s.type) {
							var f = s.arg,
								p = f.value;
							return p && "object" == t(p) && n.call(p, "__await")
								? r.resolve(p.__await).then(
										function (t) {
											o("next", t, c, u);
										},
										function (t) {
											o("throw", t, c, u);
										}
								  )
								: r.resolve(p).then(
										function (t) {
											(f.value = t), c(f);
										},
										function (t) {
											return o("throw", t, c, u);
										}
								  );
						}
						u(s.arg);
					}
					var i;
					this._invoke = function (t, e) {
						function n() {
							return new r(function (r, n) {
								o(t, e, r, n);
							});
						}
						return (i = i ? i.then(n, n) : n());
					};
				}
				function O(t, e) {
					var r = t.iterator[e.method];
					if (void 0 === r) {
						if (((e.delegate = null), "throw" === e.method)) {
							if (
								t.iterator.return &&
								((e.method = "return"),
								(e.arg = void 0),
								O(t, e),
								"throw" === e.method)
							)
								return f;
							(e.method = "throw"),
								(e.arg = new TypeError(
									"The iterator does not provide a 'throw' method"
								));
						}
						return f;
					}
					var n = l(r, t.iterator, e.arg);
					if ("throw" === n.type)
						return (
							(e.method = "throw"), (e.arg = n.arg), (e.delegate = null), f
						);
					var o = n.arg;
					return o
						? o.done
							? ((e[t.resultName] = o.value),
							  (e.next = t.nextLoc),
							  "return" !== e.method &&
									((e.method = "next"), (e.arg = void 0)),
							  (e.delegate = null),
							  f)
							: o
						: ((e.method = "throw"),
						  (e.arg = new TypeError("iterator result is not an object")),
						  (e.delegate = null),
						  f);
				}
				function S(t) {
					var e = { tryLoc: t[0] };
					1 in t && (e.catchLoc = t[1]),
						2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
						this.tryEntries.push(e);
				}
				function _(t) {
					var e = t.completion || {};
					(e.type = "normal"), delete e.arg, (t.completion = e);
				}
				function k(t) {
					(this.tryEntries = [{ tryLoc: "root" }]),
						t.forEach(S, this),
						this.reset(!0);
				}
				function E(t) {
					if (t) {
						var e = t[i];
						if (e) return e.call(t);
						if ("function" == typeof t.next) return t;
						if (!isNaN(t.length)) {
							var r = -1,
								o = function e() {
									for (; ++r < t.length; )
										if (n.call(t, r)) return (e.value = t[r]), (e.done = !1), e;
									return (e.value = void 0), (e.done = !0), e;
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
					u(b, "constructor", d),
					u(d, "constructor", h),
					(h.displayName = u(d, c, "GeneratorFunction")),
					(e.isGeneratorFunction = function (t) {
						var e = "function" == typeof t && t.constructor;
						return (
							!!e &&
							(e === h || "GeneratorFunction" === (e.displayName || e.name))
						);
					}),
					(e.mark = function (t) {
						return (
							Object.setPrototypeOf
								? Object.setPrototypeOf(t, d)
								: ((t.__proto__ = d), u(t, c, "GeneratorFunction")),
							(t.prototype = Object.create(b)),
							t
						);
					}),
					(e.awrap = function (t) {
						return { __await: t };
					}),
					w(x.prototype),
					u(x.prototype, a, function () {
						return this;
					}),
					(e.AsyncIterator = x),
					(e.async = function (t, r, n, o, i) {
						void 0 === i && (i = Promise);
						var a = new x(s(t, r, n, o), i);
						return e.isGeneratorFunction(r)
							? a
							: a.next().then(function (t) {
									return t.done ? t.value : a.next();
							  });
					}),
					w(b),
					u(b, c, "Generator"),
					u(b, i, function () {
						return this;
					}),
					u(b, "toString", function () {
						return "[object Generator]";
					}),
					(e.keys = function (t) {
						var e = [];
						for (var r in t) e.push(r);
						return (
							e.reverse(),
							function r() {
								for (; e.length; ) {
									var n = e.pop();
									if (n in t) return (r.value = n), (r.done = !1), r;
								}
								return (r.done = !0), r;
							}
						);
					}),
					(e.values = E),
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
								for (var e in this)
									"t" === e.charAt(0) &&
										n.call(this, e) &&
										!isNaN(+e.slice(1)) &&
										(this[e] = void 0);
						},
						stop: function () {
							this.done = !0;
							var t = this.tryEntries[0].completion;
							if ("throw" === t.type) throw t.arg;
							return this.rval;
						},
						dispatchException: function (t) {
							if (this.done) throw t;
							var e = this;
							function r(r, n) {
								return (
									(a.type = "throw"),
									(a.arg = t),
									(e.next = r),
									n && ((e.method = "next"), (e.arg = void 0)),
									!!n
								);
							}
							for (var o = this.tryEntries.length - 1; o >= 0; --o) {
								var i = this.tryEntries[o],
									a = i.completion;
								if ("root" === i.tryLoc) return r("end");
								if (i.tryLoc <= this.prev) {
									var c = n.call(i, "catchLoc"),
										u = n.call(i, "finallyLoc");
									if (c && u) {
										if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
										if (this.prev < i.finallyLoc) return r(i.finallyLoc);
									} else if (c) {
										if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
									} else {
										if (!u)
											throw new Error("try statement without catch or finally");
										if (this.prev < i.finallyLoc) return r(i.finallyLoc);
									}
								}
							}
						},
						abrupt: function (t, e) {
							for (var r = this.tryEntries.length - 1; r >= 0; --r) {
								var o = this.tryEntries[r];
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
								i.tryLoc <= e &&
								e <= i.finallyLoc &&
								(i = null);
							var a = i ? i.completion : {};
							return (
								(a.type = t),
								(a.arg = e),
								i
									? ((this.method = "next"), (this.next = i.finallyLoc), f)
									: this.complete(a)
							);
						},
						complete: function (t, e) {
							if ("throw" === t.type) throw t.arg;
							return (
								"break" === t.type || "continue" === t.type
									? (this.next = t.arg)
									: "return" === t.type
									? ((this.rval = this.arg = t.arg),
									  (this.method = "return"),
									  (this.next = "end"))
									: "normal" === t.type && e && (this.next = e),
								f
							);
						},
						finish: function (t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.finallyLoc === t)
									return this.complete(r.completion, r.afterLoc), _(r), f;
							}
						},
						catch: function (t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.tryLoc === t) {
									var n = r.completion;
									if ("throw" === n.type) {
										var o = n.arg;
										_(r);
									}
									return o;
								}
							}
							throw new Error("illegal catch attempt");
						},
						delegateYield: function (t, e, r) {
							return (
								(this.delegate = { iterator: E(t), resultName: e, nextLoc: r }),
								"next" === this.method && (this.arg = void 0),
								f
							);
						},
					}),
					e
				);
			}
			function b(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					e &&
						(n = n.filter(function (e) {
							return Object.getOwnPropertyDescriptor(t, e).enumerable;
						})),
						r.push.apply(r, n);
				}
				return r;
			}
			function w(t) {
				for (var r = 1; r < arguments.length; r++) {
					var n = null != arguments[r] ? arguments[r] : {};
					r % 2
						? b(Object(n), !0).forEach(function (r) {
								e(t, r, n[r]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
						: b(Object(n)).forEach(function (e) {
								Object.defineProperty(
									t,
									e,
									Object.getOwnPropertyDescriptor(n, e)
								);
						  });
				}
				return t;
			}
			var x = new MQTT.Client();
			function O() {
				return (O = o(
					g().mark(function t(e, r) {
						return g().wrap(function (t) {
							for (;;)
								switch ((t.prev = t.next)) {
									case 0:
										ClearBlade.init({ request: e }),
											ClearBlade.isEdge() ||
												r.success("Service must be run on edge"),
											log("subscribed to" + u(ClearBlade.edgeId())),
											x.subscribe(u(ClearBlade.edgeId()), function (t, r) {
												S(
													w(
														w({}, JSON.parse(r.payload)),
														{},
														{ system_key: e.systemKey }
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
						g().mark(function t(e) {
							var r, n, a, u, m, b, w, O, S, _, j, L, P, N, C, I, R, D, A;
							return g().wrap(
								function (t) {
									for (;;)
										switch ((t.prev = t.next)) {
											case 0:
												(r = ""),
													(t.prev = 1),
													log("starting retrain, training params: ", e),
													(n = e.model_name),
													(a = e.scripts_count),
													(u = e.evaluations),
													(m = e.system_key),
													(r = "".concat(n, "_job")),
													(b = "".concat(r, "_training")),
													(w = ClearBladeAsync.FS(b)),
													(O = l(r)),
													(S = ""
														.concat(new Date().toJSON().slice(0, 10), "_")
														.concat(c()())),
													(_ = {
														name: r,
														state: i.UNDERGOING,
														timestamp: new Date().toISOString(),
													}),
													x.publish(s, JSON.stringify(_)),
													(t.prev = 11),
													E(
														"docker run -t -d --name "
															.concat(
																O,
																" --env-file=/clearblade_platform_buckets/"
															)
															.concat(m, "/")
															.concat(b, "/inbox/")
															.concat(
																h,
																" --mount type=bind,source=/clearblade_platform_buckets/"
															)
															.concat(m, "/")
															.concat(
																b,
																",target=/docker-mnt python:3.9-bullseye"
															)
													),
													(t.next = 22);
												break;
											case 15:
												return (
													(t.prev = 15),
													(t.t0 = t.catch(11)),
													log(
														"docker container spin up err, perhaps you haven't added docker to a user group (In other words, it still needs sudo permission)?"
													),
													(j = {
														name: r,
														state: i.ERROR,
														timestamp: new Date().toISOString(),
														error:
															"Error attempting to spin up a container. docker run -t -d --name "
																.concat(
																	O,
																	" --env-file=/clearblade_platform_buckets/"
																)
																.concat(m, "/")
																.concat(b, "/inbox/")
																.concat(
																	h,
																	" --mount type=bind,source=/clearblade_platform_buckets/"
																)
																.concat(m, "/")
																.concat(
																	b,
																	",target=/docker-mnt python:3.9-bullseye failed"
																),
													}),
													(t.next = 21),
													x.publish(s, JSON.stringify(j))
												);
											case 21:
												return t.abrupt("return");
											case 22:
												for (
													log("installing pip packages"),
														E(
															"docker exec "
																.concat(
																	O,
																	" pip3 install -r /docker-mnt/inbox/"
																)
																.concat(p)
														),
														L = 0;
													L < a;
													L++
												)
													E(
														"docker exec -w /docker-mnt/inbox/ "
															.concat(O, " python3 ")
															.concat(y(L))
													);
												return (
													(t.next = 27),
													w.copyFile(
														"inbox/".concat(f),
														"outbox/".concat(S, "/").concat(f)
													)
												);
											case 27:
												return (
													(P = (function () {
														var t = o(
															g().mark(function t(e, r) {
																var n;
																return g().wrap(function (t) {
																	for (;;)
																		switch ((t.prev = t.next)) {
																			case 0:
																				return (t.next = 2), w.readDir(e);
																			case 2:
																				return (
																					(n = t.sent
																						.filter(function (t) {
																							return t.startsWith(e);
																						})
																						.map(function (t) {
																							return t.substring(e.length);
																						})),
																					t.abrupt(
																						"return",
																						Promise.all(
																							n.map(
																								(function () {
																									var t = o(
																										g().mark(function t(n) {
																											return g().wrap(function (
																												t
																											) {
																												for (;;)
																													switch (
																														(t.prev = t.next)
																													) {
																														case 0:
																															return t.abrupt(
																																"return",
																																w.copyFile(
																																	e +
																																		"".concat(
																																			n
																																		),
																																	r +
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
																									return function (e) {
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
														return function (e, r) {
															return t.apply(this, arguments);
														};
													})()),
													(t.next = 30),
													P(
														"/inbox/".concat(d),
														"/outbox/".concat(S, "/").concat(d)
													)
												);
											case 30:
												(N = {}), (C = v(u)), (t.prev = 32), C.s();
											case 34:
												if ((I = C.n()).done) {
													t.next = 41;
													break;
												}
												return (
													(R = I.value),
													(t.next = 38),
													w.readFile("inbox/".concat(R, ".txt"), "utf-8")
												);
											case 38:
												N[R] = t.sent.toString();
											case 39:
												t.next = 34;
												break;
											case 41:
												t.next = 46;
												break;
											case 43:
												(t.prev = 43), (t.t1 = t.catch(32)), C.e(t.t1);
											case 46:
												return (t.prev = 46), C.f(), t.finish(46);
											case 49:
												return (
													(D = {
														name: r,
														state: i.SUCCESS,
														timestamp: new Date().toISOString(),
														model_name: n,
														id: S,
														evaluations: N,
													}),
													(t.next = 52),
													x.publish(s, JSON.stringify(D))
												);
											case 52:
												log(
													"Model "
														.concat(r, " trained with deployment ")
														.concat(
															r,
															" is successfully trained and will be synced upstream."
														)
												),
													k(O),
													(t.next = 63);
												break;
											case 56:
												(t.prev = 56),
													(t.t2 = t.catch(1)),
													log("Stopping container due to error: e"),
													(A = {
														name: r,
														state: i.ERROR,
														timestamp: new Date().toISOString(),
														error: t.t2.toString(),
													});
												try {
													k(l(r));
												} catch (t) {
													log("Also failed when attempting to stop container");
												}
												return (t.next = 63), x.publish(s, JSON.stringify(A));
											case 63:
											case "end":
												return t.stop();
										}
								},
								t,
								null,
								[
									[1, 56],
									[11, 15],
									[32, 43, 46, 49],
								]
							);
						})
					)),
					_.apply(this, arguments)
				);
			}
			var k = function (t) {
					return E("docker stop ".concat(t, " | xargs docker rm"));
				},
				E = function (t) {
					return child_process.execSync(t, {}).toString();
				};
			r.g.train = function (t, e) {
				return O.apply(this, arguments);
			};
		})();
})();
