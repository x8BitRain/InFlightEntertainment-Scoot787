/*
 RequireJS 2.0.4 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 Available via the MIT or new BSD license.
 see: http://github.com/jrburke/requirejs for details
*/
(function(n) {
    function k(a) {
        return "[object Function]" === D.call(a)
    }

    function m(a) {
        return "[object Array]" === D.call(a)
    }

    function h(a, b) {
        if (a) {
            var f;
            for (f = 0; f < a.length && (!a[f] || !b(a[f], f, a)); f += 1);
        }
    }

    function l(a, b) {
        if (a) {
            var f;
            for (f = a.length - 1; - 1 < f && (!a[f] || !b(a[f], f, a)); --f);
        }
    }

    function c(a, b) {
        for (var f in a)
            if (a.hasOwnProperty(f) && b(a[f], f)) break
    }

    function e(a, b, f, d) {
        b && c(b, function(b, c) {
            if (f || !a.hasOwnProperty(c)) d && "string" !== typeof b ? (a[c] || (a[c] = {}), e(a[c], b, f, d)) : a[c] = b
        });
        return a
    }

    function g(a, b) {
        return function() {
            return b.apply(a,
                arguments)
        }
    }

    function b(a) {
        if (!a) return a;
        var b = n;
        h(a.split("."), function(a) {
            b = b[a]
        });
        return b
    }

    function d(a, b, f) {
        return function() {
            var c = z.call(arguments, 0),
                d;
            f && k(d = c[c.length - 1]) && (d.__requireJsBuild = !0);
            c.push(b);
            return a.apply(null, c)
        }
    }

    function a(a, b, f) {
        h([
            ["toUrl"],
            ["undef"],
            ["defined", "requireDefined"],
            ["specified", "requireSpecified"]
        ], function(c) {
            var e = c[1] || c[0];
            a[c[0]] = b ? d(b[e], f) : function() {
                var a = I._;
                return a[e].apply(a, arguments)
            }
        })
    }

    function f(a, b, f, c) {
        b = Error(b + "\nhttp://requirejs.org/docs/errors.html#" +
            a);
        b.requireType = a;
        b.requireModules = c;
        f && (b.originalError = f);
        return b
    }

    function v(p) {
        function v(a, b, f) {
            var c = b && b.split("/"),
                d = c,
                e = B.map,
                p = e && e["*"],
                g, q, u;
            if (a && "." === a.charAt(0))
                if (b) {
                    d = B.pkgs[b] ? c = [b] : c.slice(0, c.length - 1);
                    b = a = d.concat(a.split("/"));
                    for (d = 0; b[d]; d += 1)
                        if (g = b[d], "." === g) b.splice(d, 1), --d;
                        else if (".." === g)
                        if (1 !== d || ".." !== b[2] && ".." !== b[0]) 0 < d && (b.splice(d - 1, 2), d -= 2);
                        else break;
                    d = B.pkgs[b = a[0]];
                    a = a.join("/");
                    d && a === b + "/" + d.main && (a = b)
                } else 0 === a.indexOf("./") && (a = a.substring(2));
            if (f &&
                (c || p) && e)
                for (b = a.split("/"), d = b.length; 0 < d; --d) {
                    q = b.slice(0, d).join("/");
                    if (c)
                        for (g = c.length; 0 < g; --g)
                            if (f = e[c.slice(0, g).join("/")])
                                if (f = f[q]) {
                                    u = f;
                                    break
                                }!u && p && p[q] && (u = p[q]);
                    if (u) {
                        b.splice(0, d, u);
                        a = b.join("/");
                        break
                    }
                }
            return a
        }

        function q(a) {
            N && h(document.getElementsByTagName("script"), function(b) {
                if (b.getAttribute("data-requiremodule") === a && b.getAttribute("data-requirecontext") === y.contextName) return b.parentNode.removeChild(b), !0
            })
        }

        function u(a) {
            var b = B.paths[a];
            if (b && m(b) && 1 < b.length) return q(a),
                b.shift(), y.undef(a), y.require([a]), !0
        }

        function r(a, b, f, d) {
            var c = a ? a.indexOf("!") : -1,
                e = null,
                g = b ? b.name : null,
                p = a,
                q = !0,
                u = "",
                h, F;
            a || (q = !1, a = "_@r" + (Z += 1)); - 1 !== c && (e = a.substring(0, c), a = a.substring(c + 1, a.length));
            e && (e = v(e, g, d), F = L[e]);
            a && (e ? u = F && F.normalize ? F.normalize(a, function(a) {
                return v(a, g, d)
            }) : v(a, g, d) : (u = v(a, g, d), h = y.nameToUrl(u)));
            a = !e || F || f ? "" : "_unnormalized" + (aa += 1);
            return {
                prefix: e,
                name: u,
                parentMap: b,
                unnormalized: !!a,
                url: h,
                originalName: p,
                isDefine: q,
                id: (e ? e + "!" + u : u) + a
            }
        }

        function F(a) {
            var b = a.id,
                f = C[b];
            f || (f = C[b] = new y.Module(a));
            return f
        }

        function l(a, b, f) {
            var d = a.id,
                c = C[d];
            if (!L.hasOwnProperty(d) || c && !c.defineEmitComplete) F(a).on(b, f);
            else "defined" === b && f(L[d])
        }

        function w(a, b) {
            var f = a.requireModules,
                d = !1;
            if (b) b(a);
            else if (h(f, function(b) {
                    if (b = C[b]) b.error = a, b.events.error && (d = !0, b.emit("error", a))
                }), !d) A.onError(a)
        }

        function x() {
            Q.length && (R.apply(G, [G.length - 1, 0].concat(Q)), Q = [])
        }

        function z(b, f, c) {
            b = b && b.map;
            f = d(c || y.require, b, f);
            a(f, y, b);
            f.isBrowser = N;
            return f
        }

        function D(a) {
            delete C[a];
            h(Y, function(b, f) {
                if (b.map.id === a) return Y.splice(f, 1), b.defined || --y.waitCount, !0
            })
        }

        function I(a, b) {
            var f = a.map.id,
                d = a.depMaps,
                c;
            if (a.inited) {
                if (b[f]) return a;
                b[f] = !0;
                h(d, function(a) {
                    if (a = C[a.id]) return a.inited && a.enabled ? c = I(a, e({}, b)) : (c = null, delete b[f], !0)
                });
                return c
            }
        }

        function V(a, b, f) {
            var d = a.map.id,
                c = a.depMaps;
            if (a.inited && a.map.isDefine) {
                if (b[d]) return L[d];
                b[d] = a;
                h(c, function(c) {
                    c = c.id;
                    var e = C[c];
                    !ba[c] && e && (e.inited && e.enabled ? (e = V(e, b, f), f[c] || a.defineDepById(c, e)) : f[d] = !0)
                });
                a.check(!0);
                return L[d]
            }
        }

        function K(a) {
            a.check()
        }

        function P() {
            var a = 1E3 * B.waitSeconds,
                b = a && y.startTime + a < (new Date).getTime(),
                d = [],
                e = !1,
                g = !0,
                p, v, r;
            if (!ca) {
                ca = !0;
                c(C, function(a) {
                    p = a.map;
                    v = p.id;
                    if (a.enabled && !a.error)
                        if (!a.inited && b) u(v) ? e = r = !0 : (d.push(v), q(v));
                        else if (!a.inited && a.fetched && p.isDefine && (e = !0, !p.prefix)) return g = !1
                });
                if (b && d.length) return a = f("timeout", "Load timeout for modules: " + d, null, d), a.contextName = y.contextName, w(a);
                g && (h(Y, function(a) {
                    if (!a.defined) {
                        a = I(a, {});
                        var b = {};
                        a && (V(a, b, {}), c(b,
                            K))
                    }
                }), c(C, K));
                b && !r || !e || !N && !U || da || (da = setTimeout(function() {
                    da = 0;
                    P()
                }, 50));
                ca = !1
            }
        }

        function T(a) {
            F(r(a[0], null, !0)).init(a[1], a[2])
        }

        function H(a) {
            a = a.currentTarget || a.srcElement;
            var b = y.onScriptLoad;
            a.detachEvent && !J ? a.detachEvent("onreadystatechange", b) : a.removeEventListener("load", b, !1);
            b = y.onScriptError;
            a.detachEvent && !J || a.removeEventListener("error", b, !1);
            return {
                node: a,
                id: a && a.getAttribute("data-requiremodule")
            }
        }
        var B = {
                waitSeconds: 7,
                baseUrl: "./",
                paths: {},
                pkgs: {},
                shim: {}
            },
            C = {},
            W = {},
            G = [],
            L = {},
            M = {},
            Z = 1,
            aa = 1,
            Y = [],
            ca, ea, y, ba, da;
        ba = {
            require: function(a) {
                return z(a)
            },
            exports: function(a) {
                a.usingExports = !0;
                if (a.map.isDefine) return a.exports = L[a.map.id] = {}
            },
            module: function(a) {
                return a.module = {
                    id: a.map.id,
                    uri: a.map.url,
                    config: function() {
                        return B.config && B.config[a.map.id] || {}
                    },
                    exports: L[a.map.id]
                }
            }
        };
        ea = function(a) {
            this.events = W[a.id] || {};
            this.map = a;
            this.shim = B.shim[a.id];
            this.depExports = [];
            this.depMaps = [];
            this.depMatched = [];
            this.pluginMaps = {};
            this.depCount = 0
        };
        ea.prototype = {
            init: function(a, b,
                f, d) {
                d = d || {};
                if (!this.inited) {
                    this.factory = b;
                    if (f) this.on("error", f);
                    else this.events.error && (f = g(this, function(a) {
                        this.emit("error", a)
                    }));
                    this.depMaps = a && a.slice(0);
                    this.depMaps.rjsSkipMap = a.rjsSkipMap;
                    this.errback = f;
                    this.inited = !0;
                    this.ignore = d.ignore;
                    d.enabled || this.enabled ? this.enable() : this.check()
                }
            },
            defineDepById: function(a, b) {
                var f;
                h(this.depMaps, function(b, d) {
                    if (b.id === a) return f = d, !0
                });
                return this.defineDep(f, b)
            },
            defineDep: function(a, b) {
                this.depMatched[a] || (this.depMatched[a] = !0, --this.depCount,
                    this.depExports[a] = b)
            },
            fetch: function() {
                if (!this.fetched) {
                    this.fetched = !0;
                    y.startTime = (new Date).getTime();
                    var a = this.map;
                    if (this.shim) z(this, !0)(this.shim.deps || [], g(this, function() {
                        return a.prefix ? this.callPlugin() : this.load()
                    }));
                    else return a.prefix ? this.callPlugin() : this.load()
                }
            },
            load: function() {
                var a = this.map.url;
                M[a] || (M[a] = !0, y.load(this.map.id, a))
            },
            check: function(a) {
                if (this.enabled && !this.enabling) {
                    var b = this.map.id,
                        f = this.depExports,
                        d = this.exports,
                        c = this.factory,
                        e;
                    if (!this.inited) this.fetch();
                    else if (this.error) this.emit("error", this.error);
                    else if (!this.defining) {
                        this.defining = !0;
                        if (1 > this.depCount && !this.defined) {
                            if (k(c)) {
                                if (this.events.error) try {
                                    d = y.execCb(b, c, f, d)
                                } catch (g) {
                                    e = g
                                } else d = y.execCb(b, c, f, d);
                                this.map.isDefine && ((f = this.module) && void 0 !== f.exports && f.exports !== this.exports ? d = f.exports : void 0 === d && this.usingExports && (d = this.exports));
                                if (e) return e.requireMap = this.map, e.requireModules = [this.map.id], e.requireType = "define", w(this.error = e)
                            } else d = c;
                            this.exports = d;
                            if (this.map.isDefine &&
                                !this.ignore && (L[b] = d, A.onResourceLoad)) A.onResourceLoad(y, this.map, this.depMaps);
                            delete C[b];
                            this.defined = !0;
                            --y.waitCount;
                            0 === y.waitCount && (Y = [])
                        }
                        this.defining = !1;
                        a || !this.defined || this.defineEmitted || (this.defineEmitted = !0, this.emit("defined", this.exports), this.defineEmitComplete = !0)
                    }
                }
            },
            callPlugin: function() {
                var a = this.map,
                    b = a.id,
                    f = r(a.prefix, null, !1, !0);
                l(f, "defined", g(this, function(f) {
                    var d = this.map.name,
                        e = this.map.parentMap ? this.map.parentMap.name : null;
                    if (this.map.unnormalized) {
                        if (f.normalize &&
                            (d = f.normalize(d, function(a) {
                                return v(a, e, !0)
                            }) || ""), f = r(a.prefix + "!" + d, this.map.parentMap, !1, !0), l(f, "defined", g(this, function(a) {
                                this.init([], function() {
                                    return a
                                }, null, {
                                    enabled: !0,
                                    ignore: !0
                                })
                            })), f = C[f.id]) {
                            if (this.events.error) f.on("error", g(this, function(a) {
                                this.emit("error", a)
                            }));
                            f.enable()
                        }
                    } else d = g(this, function(a) {
                        this.init([], function() {
                            return a
                        }, null, {
                            enabled: !0
                        })
                    }), d.error = g(this, function(a) {
                        this.inited = !0;
                        this.error = a;
                        a.requireModules = [b];
                        c(C, function(a) {
                            0 === a.map.id.indexOf(b + "_unnormalized") &&
                                D(a.map.id)
                        });
                        w(a)
                    }), d.fromText = function(a, b) {
                        var f = O;
                        f && (O = !1);
                        F(r(a));
                        A.exec(b);
                        f && (O = !0);
                        y.completeLoad(a)
                    }, f.load(a.name, z(a.parentMap, !0, function(a, b) {
                        a.rjsSkipMap = !0;
                        return y.require(a, b)
                    }), d, B)
                }));
                y.enable(f, this);
                this.pluginMaps[f.id] = f
            },
            enable: function() {
                this.enabled = !0;
                this.waitPushed || (Y.push(this), y.waitCount += 1, this.waitPushed = !0);
                this.enabling = !0;
                h(this.depMaps, g(this, function(a, b) {
                    var f, d;
                    if ("string" === typeof a) {
                        a = r(a, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.depMaps.rjsSkipMap);
                        this.depMaps[b] = a;
                        if (f = ba[a.id]) {
                            this.depExports[b] = f(this);
                            return
                        }
                        this.depCount += 1;
                        l(a, "defined", g(this, function(a) {
                            this.defineDep(b, a);
                            this.check()
                        }));
                        this.errback && l(a, "error", this.errback)
                    }
                    f = a.id;
                    d = C[f];
                    ba[f] || !d || d.enabled || y.enable(a, this)
                }));
                c(this.pluginMaps, g(this, function(a) {
                    var b = C[a.id];
                    b && !b.enabled && y.enable(a, this)
                }));
                this.enabling = !1;
                this.check()
            },
            on: function(a, b) {
                var f = this.events[a];
                f || (f = this.events[a] = []);
                f.push(b)
            },
            emit: function(a, b) {
                h(this.events[a], function(a) {
                    a(b)
                });
                "error" ===
                a && delete this.events[a]
            }
        };
        return y = {
            config: B,
            contextName: p,
            registry: C,
            defined: L,
            urlFetched: M,
            waitCount: 0,
            defQueue: G,
            Module: ea,
            makeModuleMap: r,
            configure: function(a) {
                a.baseUrl && "/" !== a.baseUrl.charAt(a.baseUrl.length - 1) && (a.baseUrl += "/");
                var b = B.pkgs,
                    f = B.shim,
                    d = B.paths,
                    g = B.map;
                e(B, a, !0);
                B.paths = e(d, a.paths, !0);
                a.map && (B.map = e(g || {}, a.map, !0, !0));
                a.shim && (c(a.shim, function(a, b) {
                    m(a) && (a = {
                        deps: a
                    });
                    a.exports && !a.exports.__buildReady && (a.exports = y.makeShimExports(a.exports));
                    f[b] = a
                }), B.shim = f);
                a.packages &&
                    (h(a.packages, function(a) {
                        a = "string" === typeof a ? {
                            name: a
                        } : a;
                        b[a.name] = {
                            name: a.name,
                            location: a.location || a.name,
                            main: (a.main || "main").replace(E, "").replace(t, "")
                        }
                    }), B.pkgs = b);
                c(C, function(a, b) {
                    a.map = r(b)
                });
                (a.deps || a.callback) && y.require(a.deps || [], a.callback)
            },
            makeShimExports: function(a) {
                var f;
                return "string" === typeof a ? (f = function() {
                    return b(a)
                }, f.exports = a, f) : function() {
                    return a.apply(n, arguments)
                }
            },
            requireDefined: function(a, b) {
                var f = r(a, b, !1, !0).id;
                return L.hasOwnProperty(f)
            },
            requireSpecified: function(a,
                b) {
                a = r(a, b, !1, !0).id;
                return L.hasOwnProperty(a) || C.hasOwnProperty(a)
            },
            require: function(a, b, d, c) {
                var e;
                if ("string" === typeof a) {
                    if (k(b)) return w(f("requireargs", "Invalid require call"), d);
                    if (A.get) return A.get(y, a, b);
                    a = r(a, b, !1, !0);
                    a = a.id;
                    return L.hasOwnProperty(a) ? L[a] : w(f("notloaded", 'Module name "' + a + '" has not been loaded yet for context: ' + p))
                }
                d && !k(d) && (c = d, d = void 0);
                b && !k(b) && (c = b, b = void 0);
                for (x(); G.length;) {
                    e = G.shift();
                    if (null === e[0]) return w(f("mismatch", "Mismatched anonymous define() module: " +
                        e[e.length - 1]));
                    T(e)
                }
                F(r(null, c)).init(a, b, d, {
                    enabled: !0
                });
                P();
                return y.require
            },
            undef: function(a) {
                var b = r(a, null, !0),
                    f = C[a];
                delete L[a];
                delete M[b.url];
                delete W[a];
                f && (f.events.defined && (W[a] = f.events), D(a))
            },
            enable: function(a, b) {
                C[a.id] && F(a).enable()
            },
            completeLoad: function(a) {
                var d = B.shim[a] || {},
                    c = d.exports && d.exports.exports,
                    e, g;
                for (x(); G.length;) {
                    g = G.shift();
                    if (null === g[0]) {
                        g[0] = a;
                        if (e) break;
                        e = !0
                    } else g[0] === a && (e = !0);
                    T(g)
                }
                g = C[a];
                if (!e && !L[a] && g && !g.inited)
                    if (!B.enforceDefine || c && b(c)) T([a, d.deps || [], d.exports]);
                    else return u(a) ? void 0 : w(f("nodefine", "No define call for " + a, null, [a]));
                P()
            },
            toUrl: function(a, b) {
                var f = a.lastIndexOf("."),
                    d = null; - 1 !== f && (d = a.substring(f, a.length), a = a.substring(0, f));
                return y.nameToUrl(v(a, b && b.id, !0), d)
            },
            nameToUrl: function(a, b) {
                var f, d, c, e, g, p;
                if (A.jsExtRegExp.test(a)) e = a + (b || "");
                else {
                    f = B.paths;
                    d = B.pkgs;
                    e = a.split("/");
                    for (g = e.length; 0 < g; --g)
                        if (p = e.slice(0, g).join("/"), c = d[p], p = f[p]) {
                            m(p) && (p = p[0]);
                            e.splice(0, g, p);
                            break
                        } else if (c) {
                        f = a === c.name ? c.location + "/" + c.main :
                            c.location;
                        e.splice(0, g, f);
                        break
                    }
                    e = e.join("/") + (b || ".js");
                    e = ("/" === e.charAt(0) || e.match(/^[\w\+\.\-]+:/) ? "" : B.baseUrl) + e
                }
                return B.urlArgs ? e + ((-1 === e.indexOf("?") ? "?" : "&") + B.urlArgs) : e
            },
            load: function(a, b) {
                A.load(y, a, b)
            },
            execCb: function(a, b, f, d) {
                return b.apply(d, f)
            },
            onScriptLoad: function(a) {
                if ("load" === a.type || S.test((a.currentTarget || a.srcElement).readyState)) X = null, a = H(a), y.completeLoad(a.id)
            },
            onScriptError: function(a) {
                var b = H(a);
                if (!u(b.id)) return w(f("scripterror", "Script error", a, [b.id]))
            }
        }
    }

    function w() {
        if (X &&
            "interactive" === X.readyState) return X;
        l(document.getElementsByTagName("script"), function(a) {
            if ("interactive" === a.readyState) return X = a
        });
        return X
    }
    var q, p, u, r = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,
        x = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
        t = /\.js$/,
        E = /^\.\//,
        D = Object.prototype.toString,
        F = Array.prototype,
        z = F.slice,
        R = F.splice,
        N = !("undefined" === typeof window || !navigator || !document),
        U = !N && "undefined" !== typeof importScripts,
        S = N && "PLAYSTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/,
        J = "undefined" !== typeof opera && "[object Opera]" === opera.toString(),
        I = {},
        K = {},
        Q = [],
        O = !1,
        A, G, T, P, V, X, W, Z, aa;
    if ("undefined" === typeof u) {
        if ("undefined" !== typeof q) {
            if (k(q)) return;
            K = q;
            q = void 0
        }
        "undefined" === typeof p || k(p) || (K = p, p = void 0);
        A = q = function(a, b, f, d) {
            var c = "_",
                e;
            m(a) || "string" === typeof a || (e = a, m(b) ? (a = b, b = f, f = d) : a = []);
            e && e.context && (c = e.context);
            (d = I[c]) || (d = I[c] = A.s.newContext(c));
            e && d.configure(e);
            return d.require(a, b, f)
        };
        A.config = function(a) {
            return A(a)
        };
        p || (p = A);
        A.version = "2.0.4";
        A.jsExtRegExp =
            /^\/|:|\?|\.js$/;
        A.isBrowser = N;
        u = A.s = {
            contexts: I,
            newContext: v
        };
        A({});
        a(A);
        N && (G = u.head = document.getElementsByTagName("head")[0], T = document.getElementsByTagName("base")[0]) && (G = u.head = T.parentNode);
        A.onError = function(a) {
            throw a;
        };
        A.load = function(a, b, f) {
            var d = a && a.config || {},
                c;
            if (N) return c = d.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script"), c.type = d.scriptType || "text/javascript", c.charset = "utf-8", c.async = !0, c.setAttribute("data-requirecontext",
                a.contextName), c.setAttribute("data-requiremodule", b), !c.attachEvent || c.attachEvent.toString && 0 > c.attachEvent.toString().indexOf("[native code") || J ? (c.addEventListener("load", a.onScriptLoad, !1), c.addEventListener("error", a.onScriptError, !1)) : (O = !0, c.attachEvent("onreadystatechange", a.onScriptLoad)), c.src = f, W = c, T ? G.insertBefore(c, T) : G.appendChild(c), W = null, c;
            U && (importScripts(f), a.completeLoad(b))
        };
        N && l(document.getElementsByTagName("script"), function(a) {
            G || (G = a.parentNode);
            if (P = a.getAttribute("data-main")) return K.baseUrl ||
                (V = P.split("/"), Z = V.pop(), aa = V.length ? V.join("/") + "/" : "./", K.baseUrl = aa, P = Z), P = P.replace(t, ""), K.deps = K.deps ? K.deps.concat(P) : [P], !0
        });
        u = function(a, b, f) {
            var d, c;
            "string" !== typeof a && (f = b, b = a, a = null);
            m(b) || (f = b, b = []);
            !b.length && k(f) && f.length && (f.toString().replace(r, "").replace(x, function(a, f) {
                b.push(f)
            }), b = (1 === f.length ? ["require"] : ["require", "exports", "module"]).concat(b));
            O && (d = W || w()) && (a || (a = d.getAttribute("data-requiremodule")), c = I[d.getAttribute("data-requirecontext")]);
            (c ? c.defQueue : Q).push([a,
                b, f
            ])
        };
        u.amd = {
            jQuery: !0
        };
        A.exec = function(a) {
            return eval(a)
        };
        A(K);
        var H = {
                version: "01.27.00.2010",
                host: location.protocol + "//api.inflightpanasonic.aero",
                servicesHost: location.protocol + "//services.inflightpanasonic.aero",
                defaultHost: location.protocol + "//api.inflightpanasonic.aero",
                defaultServicesHost: location.protocol + "//services.inflightpanasonic.aero",
                defaultHostRegExp: new RegExp(location.protocol + "//api.inflightpanasonic.aero", "g"),
                defaultServicesHostRegExp: new RegExp(location.protocol + "//services.inflightpanasonic.aero",
                    "g"),
                replaceHost: function(a, b) {
                    if (!H.customHost || !a || !a.replace) return a;
                    b && a.replace(H.defaultHostRegExp, H.host).replace(H.defaultServicesHostRegExp, H.servicesHost);
                    return a.replace(H.defaultHost, H.host)
                },
                setHost: function(a) {
                    this.host = location.protocol + "//" + a;
                    this.customHost = !0;
                    p.config({
                        baseUrl: location.protocol + "//" + a + "/inflight/static"
                    })
                },
                setServicesHost: function(a) {
                    this.servicesHost = location.protocol + "//" + a;
                    this.customHost = !0
                },
                makeServiceURL: function(a, b) {
                    a = this.servicesHost + "/inflight/services" +
                        a;
                    !0 === b && (a = a.replace("http://", "https://"));
                    return a
                },
                define: u,
                initService: function(a, b, f) {
                    var d = [];
                    "string" === typeof a ? d.push(a) : a instanceof Array && (d = a);
                    p(d, b, function(a) {
                        for (var b = " | Failed to load: ", d = 0; d < a.requireModules.length; d++) q.undef(a.requireModules[d]), b += a.requireModules[d] + ",";
                        b = b.substring(0, b.length - 1);
                        if (f && a && a.requireType && ("scripterror" === a.requireType || "timeout" === a.requireType)) a.type = a.requireType, a.text = a.message + b, delete a.requireType, delete a.message, delete a.contextName,
                            delete a.requireModules, f(a);
                        else throw a;
                    })
                },
                exit: function(a) {
                    H.initService("sdk/v1/iosbridge", function(b) {
                        b = b.call("ifapi.portal.notification", {
                            message: "ifapi.portal.exit"
                        }, a);
                        "object" === typeof b && 503 === b.code && a(b)
                    })
                },
                console: {
                    log: function() {
                        Date.prototype.toUTCString && Array.prototype.unshift && Array.prototype.unshift.call(arguments, (new Date).toUTCString());
                        window.console && console.log && (console.log && console.log.apply ? console.log.apply(console, arguments) : console.log && console.log(Array.prototype.slice.call(arguments)))
                    },
                    info: function() {
                        Date.prototype.toUTCString && Array.prototype.unshift && Array.prototype.unshift.call(arguments, (new Date).toUTCString());
                        window.console && (console.info && console.info.apply ? console.info.apply(console, arguments) : console.info ? console.info(Array.prototype.slice.call(arguments)) : H.console.log.apply(this, arguments))
                    },
                    error: function() {
                        Date.prototype.toUTCString && Array.prototype.unshift && Array.prototype.unshift.call(arguments, (new Date).toUTCString());
                        window.console && (console.error && console.error.apply ?
                            console.error.apply(console, arguments) : console.error ? console.error(Array.prototype.slice.call(arguments)) : H.console.log.apply(this, arguments))
                    },
                    warn: function() {
                        var a;
                        Date.prototype.toUTCString && Array.prototype.unshift && Array.prototype.unshift.call(arguments, (new Date).toUTCString());
                        if (window.console) {
                            a = Array.prototype.slice.call(arguments);
                            for (var b = 0; b < a.length; b++) "undefined" === typeof a[b] && (a[b] = "undefined");
                            console.warn && console.warn.apply ? console.warn.apply(console, a) : console.warn ? console.warn(a) :
                                H.console.log.apply(this, a)
                        }
                    },
                    trace: function() {
                        window.console && console.trace && console.trace.apply(console, Array.prototype.slice.call(arguments))
                    }
                },
                Error: function(a, b) {
                    this.code = a;
                    this.text = b
                }
            },
            M = {};
        H.dispatchEvent = function(a, b) {
            if (M.hasOwnProperty(a))
                for (var f = 0; f < M[a].length; f++) M[a][f](b)
        };
        H.addEventListener = function(a, b) {
            M.hasOwnProperty(a) || (M[a] = []);
            M[a].push(b)
        };
        H.removeEventListener = function(a) {
            M.hasOwnProperty(a) && delete M[a]
        };
        p.config({
            baseUrl: location.protocol + "//api.inflightpanasonic.aero/inflight/static",
            enforceDefine: !0,
            urlArgs: H.version
        });
        window.InFlight = H
    }
})(this);
/*
 Copyright (c) 2010-2012 Robert Kieffer
 MIT License - http://opensource.org/licenses/mit-license.php
*/
(function() {
    var n = null,
        k = window.JSON,
        m = {},
        h = [],
        l = null,
        c = [],
        e = function(a, b) {
            h.push({
                key: a,
                callback: b
            });
            null === l && (l = setTimeout(function() {
                g(function(a, b) {
                    if (a) InFlight.console.log(a.code + " error: " + a.text);
                    else {
                        for (var f = 0; f < b.length; f++) h[f].callback(b[f]);
                        h = [];
                        l = null
                    }
                })
            }, 0))
        },
        g = function(a) {
            for (var f = {}, d = [], e = [], g = 0; g < h.length; ++g)
                if (e.push(h[g].key.icao_code), 0 === g % 169 && 0 !== g || g === h.length - 1) d.push(e.join(",")), e = [];
            for (var p = 0, g = 0; g < d.length; g++) f.icao_codes = d[g], b(g, f, function() {
                p++;
                if (p === d.length) {
                    for (var b = [], f = 0; f < c.length; f++) b = b.concat(c[f]);
                    c = [];
                    a(null, b)
                }
            })
        },
        b = function(a, b, d) {
            n.get({
                url: InFlight.makeServiceURL("/airport_info/v1/multi_airport_info?icao_codes=" + b.icao_codes + "&"),
                headers: {
                    Accept: "application/json"
                }
            }, function(b, f) {
                if (null !== b) d(b, null);
                else if (f.code && 200 !== f.code) d({
                    code: f.code,
                    text: ""
                }, null);
                else {
                    try {
                        var e = k.parse(f.body)
                    } catch (g) {
                        d({
                            code: 500,
                            text: ""
                        }, null);
                        return
                    }
                    c[a] = e;
                    d()
                }
            })
        };
    m.cityNameByICAO = function(a, b) {
        var d;
        a && a.icao_code ? a && a.lang ? (a.icao_code = a.icao_code.toLowerCase(),
            d = a.lang.toLowerCase(), e(a, function(c) {
                if (404 === c.response_code) b({
                    code: 404,
                    text: ""
                }, null);
                else if ("undefined" === typeof c.body.city) b({
                    code: 4042,
                    text: ""
                }, null);
                else {
                    var e = "";
                    if (c.body.city.hasOwnProperty(d)) e = c.body.city[d];
                    else if (c.body.city.en) InFlight.console.log('airport_info/v1: Language "' + d + '" not found in ICAO "' + a.icao_code + '", defaulting to English.'), e = c.body.city.en;
                    else {
                        b({
                            code: 4041,
                            text: ""
                        }, null);
                        return
                    }
                    b(null, e)
                }
            })) : b({
            code: 400,
            text: ""
        }) : b({
            code: 400,
            text: ""
        })
    };
    var d = ["sdk/v1/http"];
    window.JSON || d.push("sdk/v1/json2");
    InFlight.define("airport_info/v1", d, function(a, b) {
        n = a;
        b && (k = b);
        return m
    })
})();
InFlight.define("analytics/v1", ["sdk/v1/http"], function(n) {
    Date.now = Date.now || function() {
        return +new Date
    };
    var k = {},
        m = [],
        h = !1,
        l = null,
        c = null,
        e = !1;
    k.screenChange = function(a, f) {
        a && a.screen ? (b({
            type: "screen_change",
            data: {
                current_screen: l,
                requested_screen: a.screen
            }
        }), l = a.screen, f(null, null)) : f({
            code: 400,
            text: ""
        })
    };
    k.languageChange = function(a, f) {
        a && a.language ? (b({
            type: "language_change",
            data: {
                current_language: c,
                requested_language: a.language
            }
        }), c = a.language, f(null, null)) : f({
            code: 400,
            text: ""
        })
    };
    k.appStart =
        function(a, f) {
            a && a.app_name ? (b({
                type: "application_state",
                data: {
                    app_name: a.app_name,
                    state: "start"
                }
            }), f(null, null)) : f({
                code: 400,
                text: ""
            })
        };
    k.appStop = function(a, f) {
        a && a.app_name ? (b({
            type: "application_state",
            data: {
                app_name: a.app_name,
                state: "stop"
            }
        }), f(null, null)) : f({
            code: 400,
            text: ""
        })
    };
    k.gameStart = function(a, f) {
        a && a.game_name ? (b({
            type: "game_state",
            data: {
                game_name: a.game_name,
                state: "start"
            }
        }), f(null, null)) : f({
            code: 400,
            text: ""
        })
    };
    k.gameStop = function(a, f) {
        a && a.game_name ? (b({
            type: "game_state",
            data: {
                game_name: a.game_name,
                state: "stop"
            }
        }), f(null, null)) : f({
            code: 400,
            text: ""
        })
    };
    var g = function() {
            e = !0;
            if (!(0 >= m.length)) {
                var a = {
                    client_timestamp: Math.round(Date.now() / 1E3),
                    logs: JSON.stringify(m)
                };
                m = [];
                n.post({
                    url: InFlight.makeServiceURL("/analytics/v1/log"),
                    data: a
                }, function(a, b) {
                    e = !1;
                    if (a) InFlight.console.error("500: Analytics Log Error");
                    else try {
                        JSON.parse(b.body)
                    } catch (d) {
                        InFlight.console.error("500: Analytics Log Error parsing JSON: " + d.toString())
                    }
                })
            }
        },
        b = function(a) {
            a.timestamp = Math.round(Date.now() / 1E3);
            h || d();
            m.push(a);
            5 <= m.length && !e && g()
        },
        d = function() {
            h = setInterval(function() {
                g()
            }, 1E4)
        };
    return k
});
(function() {
    var n, k = {
            sendMessage: function(h, l) {
                void 0 === l && (l = null);
                return h ? "ifapi." === h.substring(0, 6) ? {
                    code: 401,
                    text: ""
                } : n.callMethod("ifapi.portal.notification", {
                    message: h,
                    value: l
                }) : {
                    code: 400,
                    text: ""
                }
            },
            portalVersion: function(h) {
                return h ? n.callMethod("ifapi.portal.notification", {
                    message: "ifapi.portal.version",
                    value: h
                }) : {
                    code: 400,
                    text: ""
                }
            },
            exitPortal: function() {
                return n.callMethod("ifapi.portal.notification", {
                    message: "ifapi.portal.exit"
                })
            },
            getBridgeType: function() {
                return n.getBridgeType()
            }
        },
        m = ["sdk/v1/app_bridge"];
    window.JSON || m.push("sdk/v1/json2");
    InFlight.define("app_bridge/v1", m, function(h) {
        n = h;
        k.BridgeType = n.BridgeTypes;
        return k
    })
})();
(function() {
    var n, k, m = {
        newChallenge: function(h) {
            n.post({
                url: InFlight.makeServiceURL("/captcha/v1/new_challenge")
            }, function(l, c) {
                if (l) h(l, null);
                else try {
                    var e = k.parse(c.body);
                    e.image_url = InFlight.replaceHost(e.image_url);
                    h(null, e)
                } catch (g) {
                    h({
                        code: 500,
                        text: ""
                    })
                }
            })
        },
        solveChallenge: function(h, l) {
            var c = h.challenge_id || "",
                e = h.solution || "";
            n.post({
                url: InFlight.makeServiceURL("/captcha/v1/solution"),
                data: {
                    challenge_id: c,
                    solution: e
                }
            }, function(c, b) {
                if (c) l(c, null);
                else switch (b.code) {
                    case 200:
                        l(null, !0);
                        break;
                    case 401:
                        l(null, !1);
                        break;
                    case 403:
                        try {
                            var d = k.parse(b.body)
                        } catch (a) {
                            l({
                                code: 500,
                                text: ""
                            });
                            break
                        }
                        l({
                            code: 403,
                            retry_in: d.retry_in,
                            text: ""
                        }, null);
                        break;
                    case 410:
                        l({
                            code: 410,
                            text: ""
                        }, null);
                        break;
                    default:
                        l({
                            code: 500,
                            text: ""
                        }, null)
                }
            })
        }
    };
    InFlight.define("captcha/v1", ["sdk/v1/http", "sdk/v1/json2"], function(h, l) {
        n = h;
        k = window.JSON || l;
        return m
    })
})();
InFlight.define("catalogs/v1", ["sdk/v1/http", "sdk/v1/json2"], function(n, k) {
    function m(c) {
        n.get(c.urlArgs, function(e, g) {
            var b = null;
            if (e || 200 !== g.code) c.callback({
                code: 500,
                text: ""
            }, null);
            else {
                try {
                    b = h.parse(g.body)
                } catch (d) {
                    b = null, c.callback({
                        code: 500,
                        text: ""
                    }, null)
                }
                null !== b && ("object" === typeof b.error && null !== b.error ? c.callback({
                    code: b.error.code,
                    text: ""
                }, null) : "object" === typeof b.data && null !== b.data && c.callback(null, b.data))
            }
        })
    }
    var h = window.JSON || k,
        l = function(c, e) {
            this.id = c;
            this.serviceRoot = e
        };
    l.prototype.catalogs =
        function(c, e) {
            var g = {},
                b = {};
            c && (c.seat_class && (g["class"] = c.seat_class), c.lang && (g.lang = c.lang));
            b.callback = e;
            b.urlArgs = {
                url: InFlight.makeServiceURL("/" + this.serviceRoot + "/browse/v1/catalogs"),
                query: g
            };
            m.call(this, b)
        };
    l.prototype.categories = function(c, e) {
        if (c.catalog_id) {
            var g = {},
                b = {};
            g.catalog_id = c.catalog_id;
            c.lang && (g.lang = c.lang);
            b.callback = e;
            b.urlArgs = {
                url: InFlight.makeServiceURL("/" + this.serviceRoot + "/browse/v1/categories"),
                query: g
            };
            m.call(this, b)
        } else e({
            code: 400,
            text: ""
        })
    };
    l.prototype.categoryItems =
        function(c, e) {
            if (c.category_id) {
                var g = {},
                    b = {};
                g.category_id = c.category_id;
                c.lang && (g.lang = c.lang);
                b.callback = e;
                b.urlArgs = {
                    url: InFlight.makeServiceURL("/" + this.serviceRoot + "/browse/v1/items"),
                    query: g
                };
                m.call(this, b)
            } else e({
                code: 400,
                text: ""
            })
        };
    l.prototype.items = function(c, e) {
        if (c.item_ids && Array.isArray(c.item_ids) && 0 != c.item_ids.length) {
            var g = {},
                b = {};
            g.item_ids = c.item_ids.join(",");
            c.lang && (g.lang = c.lang);
            b.callback = e;
            b.urlArgs = {
                url: InFlight.makeServiceURL("/" + this.serviceRoot + "/browse/v1/items"),
                query: g
            };
            m.call(this, b)
        } else e({
            code: 400,
            text: ""
        })
    };
    return l
});
(function() {
    var n, k, m, h = [],
        l = !1,
        c = function(a, b) {
            h.push([a, b]);
            l || (l = !0, k.get({
                url: InFlight.makeServiceURL("/exconnect/v1/status")
            }, function(a, b) {
                var f, d, c;
                if (!a) try {
                    c = m.parse(b.body)
                } catch (e) {}
                for (var g = 0; g < h.length; g++) {
                    d = h[g][0];
                    var k = h[g][1];
                    c && "undefined" === typeof c[d] ? (f = {
                        code: 404,
                        text: ""
                    }, d = null) : (f = null, d = c[d]);
                    k(f, d)
                }
                l = !1;
                h.pop()
            }))
        },
        e = function(a) {
            var b = null;
            c("global_conn_enabled", function(c, e) {
                e !== b && (a({
                    event: d.Events.GLOBAL_CONN_ENABLED_CHANGE,
                    global_conn_enabled: e
                }), b = e)
            });
            n.register({
                namespace: "core.exconnect",
                event_name: "global_conn_enabled_change",
                callback: function(c) {
                    c = "1" === c.argv[0];
                    c !== b && (a({
                        event: d.Events.GLOBAL_CONN_ENABLED_CHANGE,
                        global_conn_enabled: c
                    }), b = c)
                }
            })
        },
        g = function(a) {
            var b = null;
            c("total_coverage_remaining", function(c, e) {
                e !== b && (a({
                    event: d.Events.TOTAL_COVERAGE_REMAINING_CHANGE,
                    total_coverage_remaining: e
                }), b = e)
            });
            n.register({
                namespace: "core.exconnect",
                event_name: "total_coverage_remaining_change",
                callback: function(c) {
                    c = parseInt(c.argv[0], 10);
                    c !== b && (a({
                        event: d.Events.TOTAL_COVERAGE_REMAINING_CHANGE,
                        total_coverage_remaining: c
                    }), b = c)
                }
            })
        },
        b = function(a) {
            var b = null;
            c("time_until_coverage_change", function(c, e) {
                e !== b && (a({
                    event: d.Events.TIME_UNTIL_COVERAGE_CHANGE_CHANGE,
                    time_until_coverage_change: e
                }), b = e)
            });
            n.register({
                namespace: "core.exconnect",
                event_name: "time_until_coverage_change_change",
                callback: function(c) {
                    c = parseInt(c.argv[0], 10);
                    c !== b && (a({
                        event: d.Events.TIME_UNTIL_COVERAGE_CHANGE_CHANGE,
                        time_until_coverage_change: c
                    }), b = c)
                }
            })
        },
        d = {
            Events: {
                GLOBAL_CONN_ENABLED_CHANGE: "core.exconnect.global_conn_enabled_change",
                TOTAL_COVERAGE_REMAINING_CHANGE: "core.exconnect.total_coverage_remaining_change",
                TIME_UNTIL_COVERAGE_CHANGE_CHANGE: "core.exconnect.time_until_coverage_change_change"
            },
            enableDeviceForWhitelist: function(a) {
                k.post({
                    url: InFlight.makeServiceURL("/exconnect/v1/enable_device_for_whitelist")
                }, function(b, d) {
                    if (b) a(b);
                    else if (200 !== d.code) try {
                        var c = m.parse(d.body);
                        a(c)
                    } catch (e) {
                        a({
                            code: 500,
                            text: ""
                        })
                    } else a(null)
                })
            },
            checkCAPTCHARequirement: function(a, b) {
                k.get({
                    url: InFlight.makeServiceURL("/exconnect/v1/check_captcha_requirement"),
                    query: {
                        url: a
                    }
                }, function(a, d) {
                    if (a) b(a, null);
                    else {
                        var c;
                        try {
                            c = m.parse(d.body)
                        } catch (e) {
                            b({
                                code: 500,
                                text: ""
                            }, null);
                            return
                        }
                        if (200 !== d.code) b(c, null);
                        else switch (c.captcha_required) {
                            case "NOT_FOUND":
                                b({
                                    code: 404,
                                    text: ""
                                }, null);
                                break;
                            case "YES":
                                b(null, !0);
                                break;
                            case "NO":
                                b(null, !1);
                                break;
                            default:
                                b({
                                    code: 500,
                                    text: ""
                                }, null)
                        }
                    }
                })
            },
            addEventListener: function(a, f) {
                switch (a) {
                    case d.Events.GLOBAL_CONN_ENABLED_CHANGE:
                        e(f);
                        break;
                    case d.Events.TIME_UNTIL_COVERAGE_CHANGE_CHANGE:
                        b(f);
                        break;
                    case d.Events.TOTAL_COVERAGE_REMAINING_CHANGE:
                        g(f);
                        break;
                    default:
                        throw Error("exconnect/v1: Unknown event name: '" + a + "'");
                }
            },
            getTimeUntilCoverageChange: function(a) {
                c("time_until_coverage_change", function(b, d) {
                    b ? a(b, null) : a(null, d)
                })
            },
            getTotalCoverageRemaining: function(a) {
                c("total_coverage_remaining", function(b, d) {
                    b ? a(b, null) : a(null, d)
                })
            },
            getGlobalConnEnabled: function(a) {
                c("global_conn_enabled", function(b, d) {
                    b ? a(b, null) : a(null, d)
                })
            }
        };
    InFlight.define("exconnect/v1", ["sdk/v1/event", "sdk/v1/http", "sdk/v1/json2"], function(a, b, c) {
        n = a;
        k = b;
        m = window.JSON ||
            c;
        return d
    });
    d.getWISP = function(a, b) {
        a && a.lang ? k.get({
            url: InFlight.makeServiceURL("/exconnect/v1/wisp"),
            query: a
        }, function(a, d) {
            if (a) b(a);
            else {
                var c;
                if (200 !== d.code) try {
                    c = m.parse(d.body), b(c)
                } catch (e) {
                    b({
                        code: 500,
                        text: ""
                    })
                } else {
                    try {
                        c = m.parse(d.body)
                    } catch (g) {
                        b({
                            code: 500,
                            text: ""
                        }, null);
                        return
                    }
                    b(null, c)
                }
            }
        }) : b({
            code: 400,
            text: ""
        })
    };
    d.getWISPProductList = function(a, b) {
        var d = "";
        a.lang && (d = a.lang);
        k.get({
            url: InFlight.makeServiceURL("/exconnect/v1/wisp_product_info"),
            query: {
                lang: d
            }
        }, function(a, d) {
            if (a || 200 !==
                d.code) b({
                code: d.code,
                text: ""
            }, null);
            else {
                var c;
                try {
                    c = m.parse(d.body), c.error ? b({
                        code: c.error.code,
                        text: ""
                    }, null) : c.data && b(null, c.data)
                } catch (e) {
                    b({
                        code: 500,
                        text: ""
                    }, null)
                }
            }
        })
    };
    d.getDeviceState = function(a) {
        k.get({
            url: InFlight.makeServiceURL("/exconnect/v1/device_state")
        }, function(b, d) {
            if (b) a(b);
            else {
                var c;
                if (200 !== d.code) try {
                    c = m.parse(d.body), a(c)
                } catch (e) {
                    a({
                        code: 500,
                        text: ""
                    })
                } else {
                    try {
                        c = m.parse(d.body)
                    } catch (g) {
                        a({
                            code: 500,
                            text: "",
                            response: d
                        }, null);
                        return
                    }
                    a(null, c)
                }
            }
        })
    }
})();
(function() {
    var n = null,
        k, m = window.JSON,
        h = function(c) {
            InFlight.initService("avod/v1", c, function() {
                c(null)
            })
        },
        l = {
            isCommissioned: function(c) {
                n.get({
                    url: InFlight.makeServiceURL("/extv_metadata/v1/commissioning_status")
                }, function(g, b) {
                    if (g) c(g, null);
                    else {
                        var d;
                        try {
                            d = m.parse(b.body)
                        } catch (a) {
                            c({
                                code: 500,
                                text: ""
                            });
                            return
                        }
                        200 !== b.code ? c({
                            code: d.code,
                            text: ""
                        }) : "Successful" === d.commissioning_status ? c(null, !0) : (InFlight.console.log("extv_metadata/v1: isCommissioned returned " + d.commissioning_status), c(null, !1))
                    }
                })
            },
            stations: function(c) {
                n.get({
                    url: InFlight.makeServiceURL("/extv_metadata/v1/stations"),
                    headers: {
                        Accept: "application/json"
                    }
                }, function(g, b) {
                    a: if (g || 200 !== b.code) {
                        var d = null;
                        try {
                            d = m.parse(b.body)
                        } catch (a) {
                            c({
                                code: 500,
                                text: ""
                            }, null);
                            break a
                        }
                        c(d, null)
                    } else {
                        d = null;
                        try {
                            d = m.parse(b.body)
                        } catch (f) {
                            c({
                                code: 500,
                                text: ""
                            }, null);
                            break a
                        }
                        if (InFlight.customHost)
                            for (var h = 0; h < d.length; h++) {
                                var l = d[h];
                                l.station_status_url = InFlight.replaceHost(l.station_status_url);
                                for (var q in d[h].poster_url) d[h].poster_url[q] =
                                    InFlight.replaceHost(d[h].poster_url[q])
                            }
                        h = {};
                        l = d.length;
                        for (q = 0; q < l; q++) {
                            var p = d[q];
                            h[p.id] = p
                        }
                        c(null, h)
                    }
                })
            },
            stationStatus: function(c, g) {
                c && c.id ? n.get({
                    url: InFlight.makeServiceURL("/extv_metadata/v1/station_status"),
                    headers: {
                        Accept: "application/json"
                    },
                    query: c
                }, function(b, d) {
                    try {
                        var a = m.parse(d.body)
                    } catch (c) {
                        g({
                            code: 500,
                            text: ""
                        }, null);
                        return
                    }
                    b || 200 !== d.code ? g(a, null) : g(null, a)
                }) : g({
                    code: 400,
                    text: ""
                })
            },
            onStationsChanged: function(c) {
                k.register({
                    event_name: "stations_changed",
                    namespace: "core.extv_metadata",
                    callback: function(g) {
                        c()
                    }
                })
            },
            getRequiredSoftwareForMedia: function(c, g) {
                h(function(b) {
                    b ? (requiredSoftware = b.getRequiredSoftware(["unencrypted_hls"]), g(null, requiredSoftware)) : g(null, null)
                })
            }
        },
        c = ["sdk/v1/http", "sdk/v1/event"];
    window.JSON || c.push("sdk/v1/json2");
    InFlight.define("extv_metadata/v1", c, function(c, g, b) {
        n = c;
        k = g;
        b && (m = b);
        return l
    })
})();
(function() {
    function n(b) {
        c.register({
            event_name: "current_longitude",
            namespace: "core.flightdata",
            callback: function(d) {
                a.currentCoordinates.lon = d.argv[0];
                a.currentCoordinates.lat && (b({
                    type: "core.flightdata." + E.CURRENT_COORDINATES,
                    data: a.currentCoordinates
                }), a.currentCoordinates = {})
            }
        });
        c.register({
            event_name: "current_latitude",
            namespace: "core.flightdata",
            callback: function(d) {
                a.currentCoordinates.lat = d.argv[0];
                a.currentCoordinates.lon && (b({
                        type: "core.flightdata." + E.CURRENT_COORDINATES,
                        data: a.currentCoordinates
                    }),
                    a.currentCoordinates = {})
            }
        })
    }
    var k = null,
        m = null,
        h = null,
        l = window.JSON,
        c = null,
        e = null,
        g = null,
        b = !1,
        d = [],
        a = {
            currentCoordinates: {
                lat: null,
                lon: null
            }
        },
        f = function(a, c) {
            d.push({
                key: a,
                callback: c
            });
            b || (b = !0, k.get({
                url: InFlight.makeServiceURL("/flightdata/v1/flightdata")
            }, function(a, c) {
                if (!a) {
                    try {
                        e = l.parse(c.body), g = null
                    } catch (f) {
                        e = null, g = {
                            code: 500,
                            text: ""
                        }
                    }
                    for (var p = 0; p < d.length; p++) {
                        var h = e,
                            u = d[p].key,
                            r = d[p].callback;
                        g ? r(g, null) : h.hasOwnProperty(u) ? r(null, h[u]) : r({
                            code: 400,
                            text: ""
                        }, null)
                    }
                    d = [];
                    b = !1
                }
            }))
        },
        v = function(a,
            b) {
            f(a, function(a, d) {
                a ? b(a, null) : b(null, "1" === d)
            })
        },
        w = function(a, b) {
            f(a, function(a, d) {
                if (a) return b(a, null);
                var c = parseInt(d.slice(1), 10);
                isNaN(c) ? b({
                    code: 500,
                    text: ""
                }, null) : ("8" === d[0] && (c *= -1), b(null, c))
            })
        },
        q = function(a, b) {
            f(a, function(d, c) {
                if (d) return b(d, null);
                var f = parseInt(c, 10);
                a === t.TD_ID_X2_PA_STATE && isNaN(f) && (f = 0);
                isNaN(f) ? b({
                    code: 500,
                    text: ""
                }, null) : b(null, f)
            })
        },
        p = function(a, b) {
            f(a, function(a, d) {
                if (a) return b(a, null);
                "" === d ? b({
                    code: 500,
                    text: ""
                }) : t.dateTimeUTC(function(a, c) {
                    if (a) return b(a,
                        null);
                    var f = u(d),
                        e = new h(c.getTime());
                    e.setTimezoneOffset(-1 * f);
                    b(null, e)
                })
            })
        },
        u = function(a) {
            var b = a.substr(1),
                d = parseFloat(b),
                b = Math.floor(d),
                d = Math.round(60 * (d - b));
            return ("8" === a.substring(0, 1) ? -1 : 1) * (60 * b + d)
        },
        r = function(a, b, d) {
            f(a, function(a, c) {
                if (a) return d(a, null);
                f(b, function(a, b) {
                    if (a) return d(a, null);
                    d(null, {
                        lat: x(c),
                        lon: x(b)
                    })
                })
            })
        },
        x = function(a) {
            var b = parseFloat(a.slice(1, 5)),
                b = b + parseFloat(a.slice(5, 7)) / 60,
                b = b + parseFloat(a.slice(7)) / 600;
            "8" === a[0] && (b *= -1);
            return b
        },
        t = {
            OPEN_FLIGHT: "open_flight",
            TD_ID_AIRFRAME_TAIL_NUMBER: "td_id_airframe_tail_number",
            TD_ID_DECOMPRESSION: "td_id_decompression",
            TD_ID_FLIGHT_PHASE: "td_id_flight_phase",
            TD_ID_FLTDATA_ALTITUDE: "td_id_fltdata_altitude",
            TD_ID_FLTDATA_DATE: "td_id_fltdata_date",
            TD_ID_FLTDATA_DEPARTURE_BAGGAGE_ID: "td_id_fltdata_departure_baggage_id",
            TD_ID_FLTDATA_DEPARTURE_LATITUDE: "td_id_fltdata_departure_latitude",
            TD_ID_FLTDATA_DEPARTURE_LONGITUDE: "td_id_fltdata_departure_longitude",
            TD_ID_FLTDATA_DESTINATION_BAGGAGE_ID: "td_id_fltdata_destination_baggage_id",
            TD_ID_FLTDATA_DESTINATION_LATITUDE: "td_id_fltdata_destination_latitude",
            TD_ID_FLTDATA_DESTINATION_LONGITUDE: "td_id_fltdata_destination_longitude",
            TD_ID_FLTDATA_DISTANCE_FROM_ORIGIN: "td_id_fltdata_distance_from_origin",
            TD_ID_FLTDATA_DISTANCE_TO_DESTINATION: "td_id_fltdata_distance_to_destination",
            TD_ID_FLTDATA_FLIGHT_NUMBER: "td_id_fltdata_flight_number",
            TD_ID_FLTDATA_GMT: "td_id_fltdata_gmt",
            TD_ID_FLTDATA_GROUND_SPEED: "td_id_fltdata_ground_speed",
            TD_ID_FLTDATA_HEAD_WIND_SPEED: "td_id_fltdata_head_wind_speed",
            TD_ID_FLTDATA_MACH: "td_id_fltdata_mach",
            TD_ID_FLTDATA_OUTSIDE_AIR_TEMP: "td_id_fltdata_outside_air_temp",
            TD_ID_FLTDATA_PRESENT_POSITION_LATITUDE: "td_id_fltdata_present_position_latitude",
            TD_ID_FLTDATA_PRESENT_POSITION_LONGITUDE: "td_id_fltdata_present_position_longitude",
            TD_ID_FLTDATA_TIME_TO_DESTINATION: "td_id_fltdata_time_to_destination",
            TD_ID_FLTDATA_TRUE_HEADING: "td_id_fltdata_true_heading",
            TD_ID_FLTDATA_WIND_DIRECTION: "td_id_fltdata_wind_direction",
            TD_ID_FLTDATA_WIND_SPEED: "td_id_fltdata_wind_speed",
            TD_ID_GMT_OFFSET_DEPARTURE: "td_id_gmt_offset_departure",
            TD_ID_GMT_OFFSET_DESTINATION: "td_id_gmt_offset_destination",
            TD_ID_PDI_FLTDATA_DEPARTURE_IATA: "td_id_pdi_fltdata_departure_iata",
            TD_ID_ROUTE_ID: "td_id_route_id",
            TD_ID_WEIGHT_ON_WHEELS: "td_id_weight_on_wheels",
            TD_ID_X2_PA_STATE: "td_id_x2_pa_state",
            TD_ID_ALL_DOORS_CLOSED: "td_id_all_doors_closed",
            TD_ID_FLTDATA_ESTIMATED_ARRIVAL_TIME: "td_id_fltdata_estimated_arrival_time",
            TD_ID_FLTDATA_TIME_AT_ORIGIN: "td_id_fltdata_time_at_origin",
            TD_ID_FLTDATA_TIME_AT_DESTINATION: "td_id_fltdata_time_at_destination",
            FlightPhase: {
                UNKNOWN: 0,
                POWER_UP: 1,
                ENGINES_START: 2,
                TAKE_OFF_POWER: 3,
                ACCELERATING: 4,
                LIFT_OFF: 5,
                CLIMB: 6,
                CRUISING: 7,
                DESCENDING: 8,
                APPROACH: 9,
                GO_AROUND: 10,
                FLARE: 11,
                TOUCHDOWN: 12,
                TAXI_TO_STOP: 13,
                ENGINES_STOP: 14,
                MAINTENANCE: 15
            }
        },
        E = {
            ALTITUDE_FEET: "altitude_feet",
            CURRENT_COORDINATES: "current_coordinates",
            DISTANCE_FROM_DEPARTURE_NAUTICAL_MILES: "distance_from_departure_nautical_miles",
            DISTANCE_TO_DESTINATION_NAUTICAL_MILES: "distance_to_destination_nautical_miles",
            GROUND_SPEED_KNOTS: "ground_speed_knots",
            FLIGHT_SPEED_MACH: "flight_speed_mach",
            TIME_TO_DESTINATION_MINUTES: "time_to_destination_minutes",
            OUTSIDE_AIR_TEMP_CELSIUS: "outside_air_temp_celsius",
            ALL_DOORS_CLOSED: "all_doors_closed",
            WEIGHT_ON_WHEELS: "weight_on_wheels"
        };
    t.Events = E;
    t.addEventListener = function(a, b) {
        a === E.CURRENT_COORDINATES ? n(b) : c.register({
            event_name: a,
            namespace: "core.flightdata",
            callback: function(d) {
                b({
                    type: "core.flightdata." + a,
                    data: d.argv[0]
                })
            }
        })
    };
    t.altitude = function(a) {
        w("td_id_fltdata_altitude", a)
    };
    t.currentCoordinates = function(a) {
        r("td_id_fltdata_present_position_latitude",
            "td_id_fltdata_present_position_longitude", a)
    };
    t.dateTimeUTC = function(a) {
        f("td_id_fltdata_gmt", function(b, d) {
            if (b) return a(b, null);
            "" === d ? a({
                code: 500,
                text: ""
            }) : f("td_id_fltdata_date", function(b, c) {
                if (b) return a(b, null);
                if ("" === c) a({
                    code: 500,
                    text: ""
                });
                else {
                    var f = parseInt(c.slice(6, 8), 10) + 2E3,
                        e = parseInt(c.slice(4, 6), 10) - 1,
                        g = parseInt(c.slice(2, 4), 10),
                        p = parseInt(d.slice(0, 2), 10),
                        u = parseInt(d.slice(2, 4), 10),
                        r = new h;
                    r.setUTCFullYear(f, e, g);
                    r.setUTCHours(p, u, 0);
                    a(null, r)
                }
            })
        })
    };
    t.decompressionState = function(a) {
        v("td_id_decompression",
            a)
    };
    t.destinationCoordinates = function(a) {
        r("td_id_fltdata_destination_latitude", "td_id_fltdata_destination_longitude", a)
    };
    t.destinationIATA = function(a) {
        f("td_id_fltdata_destination_baggage_id", a)
    };
    t.destinationICAO = function(a) {
        f("td_id_fltdata_destination_id", a)
    };
    t.distanceToDestination = function(a) {
        q("td_id_fltdata_distance_to_destination", a)
    };
    t.distanceToOrigin = function(a) {
        q("td_id_fltdata_distance_from_origin", a)
    };
    t.flightNumber = function(a) {
        f("td_id_fltdata_flight_number", a)
    };
    t.flightPhase = function(a) {
        f("td_id_flight_phase",
            function(b, d) {
                if (b) return a(b, null);
                "" === d ? a(b, t.FlightPhase.UNKNOWN) : a(b, parseInt(d, 10))
            })
    };
    t.groundSpeed = function(a) {
        q("td_id_fltdata_ground_speed", a)
    };
    t.headWindSpeed = function(a) {
        q("td_id_fltdata_head_wind_speed", a)
    };
    t.machNumber = function(a) {
        q("td_id_fltdata_mach", function(b, d) {
            if (b) return a(b, null);
            a(null, d / 1E3)
        })
    };
    t.headingAngleTrue = function(a) {
        q("td_id_fltdata_true_heading", a)
    };
    t.originIATA = function(a) {
        f("td_id_fltdata_departure_baggage_id", a)
    };
    t.originICAO = function(a) {
        f("td_id_fltdata_departure_id",
            a)
    };
    t.originCoordinates = function(a) {
        r("td_id_fltdata_departure_latitude", "td_id_fltdata_departure_longitude", a)
    };
    t.outsideAirTemperature = function(a) {
        w("td_id_fltdata_outside_air_temp", a)
    };
    t.paState = function(a) {
        q("td_id_x2_pa_state", a)
    };
    t.routeID = function(a) {
        q("td_id_route_id")
    };
    t.scheduledDepartureTime = function(a) {
        f("td_id_pdi_fltdata_departure_time_scheduled", function(b, d) {
            b ? a(b, null) : d ? f("td_id_gmt_offset_departure", function(b, c) {
                if (b) a(b, null);
                else {
                    c || a({
                        code: 503,
                        text: ""
                    }, null);
                    var f = d.split(" "),
                        e = f[0].split("-"),
                        g = f[1].split(":"),
                        f = parseInt(e[0], 10),
                        p = parseInt(e[1], 10),
                        e = parseInt(e[2], 10),
                        r = parseInt(g[0], 10),
                        q = parseInt(g[1], 10),
                        g = parseInt(g[2], 10);
                    --p; - 1 === p && (p = 11);
                    var v = new h;
                    v.setUTCFullYear(f, p, e);
                    v.setUTCHours(r, q, g);
                    v.setTimezoneOffset(-1 * u(c));
                    a(null, v)
                }
            }) : a({
                code: 503,
                text: ""
            }, null)
        })
    };
    t.tailNumber = function(a) {
        f("td_id_airframe_tail_number", a)
    };
    t.timeAtOrigin = function(a) {
        p("td_id_gmt_offset_departure", a)
    };
    t.timeAtDestination = function(a) {
        p("td_id_gmt_offset_destination", a)
    };
    t.timeToDestination =
        function(a) {
            q("td_id_fltdata_time_to_destination", a)
        };
    t.waypoints = function(a, b) {
        "function" === typeof a && (b = a);
        var d = a.numPoints ? a.numPoints : 32;
        2 > d && (d = 2);
        64 < d && (d = 64);
        t.originCoordinates(function(a, c) {
            if (a) return b(a, null);
            t.destinationCoordinates(function(a, f) {
                if (a) return b(a, null);
                var e = m.greatCircleWaypoints(c, f, d - 1);
                b(null, e)
            })
        })
    };
    t.weightOnWheels = function(a) {
        v("td_id_weight_on_wheels", a)
    };
    t.windDirectionTrue = function(a) {
        q("td_id_fltdata_wind_direction", a)
    };
    t.windSpeed = function(a) {
        q("td_id_fltdata_wind_speed",
            a)
    };
    t.doorsClosed = function(a) {
        f("td_id_all_doors_closed", a)
    };
    t.estimatedArrivalTime = function(a) {
        f("td_id_fltdata_estimated_arrival_time", a)
    };
    t.timeAtOriginWithDST = function(a) {
        f("td_id_fltdata_time_at_origin", a)
    };
    t.timeAtDestinationWithDST = function(a) {
        f("td_id_fltdata_time_at_destination", a)
    };
    var D = ["sdk/v1/http", "sdk/v1/event", "sdk/v1/geo", "sdk/v1/localdate"];
    l || D.push("sdk/v1/json2");
    InFlight.define("flightdata/v1", D, function(a, b, d, f, e) {
        k = a;
        m = d;
        h = f;
        e && (l = e);
        c = b;
        return t
    })
})();
(function() {
    var n = null,
        k = null,
        m = window.JSON,
        h = {
            cache: {},
            Events: {
                UPDATE: "update"
            },
            FeedTypes: {
                CUSTOM: "custom",
                RSS: "rss"
            }
        },
        l = function(b, d) {
            for (var a = {}, c = b.length, e = 0; e < c; e++) {
                var g = b[e];
                g.sequence_num = e + 1;
                a[g[d]] = g
            }
            return a
        },
        c = function(b) {
            var d = function() {
                b();
                setTimeout(d, 9E5)
            };
            setTimeout(d, 9E5);
            k.register({
                event_name: "td_id_ltn_last_update_time",
                namespace: "core.flightdata",
                callback: function(a) {
                    b({
                        event: h.Events.UPDATE
                    })
                }
            })
        };
    h.addEventListener = function(b, d) {
        b === h.Events.UPDATE && c(d)
    };
    h.providers = function(b) {
        n.get({
            url: InFlight.makeServiceURL("/livetextnews/v1/providers"),
            headers: {
                Accept: "application/json"
            }
        }, function(d, a) {
            e(d, a, b, function(a) {
                for (var b = a.length, d = {
                        langs: {}
                    }, c = 0; c < b; c++) {
                    var e = a[c],
                        g = e.lang;
                    d.langs.hasOwnProperty(g) || (d.langs[g] = {
                        providers: {}
                    });
                    e.categories_url = InFlight.replaceHost(e.categories_url);
                    d.langs[g].providers[e.id] = e
                }
                return d
            })
        })
    };
    h.categories = function(b, d) {
        n.get({
            url: InFlight.makeServiceURL("/livetextnews/v1/categories"),
            headers: {
                Accept: "application/json"
            },
            query: b
        }, function(a, b) {
            e(a, b, d, function(a) {
                for (var b = 0; b < a.length; b++) {
                    var d = a[b];
                    if (InFlight.customHost)
                        for (var c = 0; c < d.articles.length; c++) {
                            var f = d.articles[c];
                            f.image_url = InFlight.replaceHost(f.image_url);
                            f.url = InFlight.replaceHost(f.url)
                        }
                    d.articles = l(d.articles, "id")
                }
                return l(a, "id")
            })
        })
    };
    h.article = function(b, d) {
        n.get({
            url: InFlight.makeServiceURL("/livetextnews/v1/article"),
            headers: {
                Accept: "application/json"
            },
            query: b
        }, function(a, b) {
            e(a, b, d, function(a) {
                if (InFlight.customHost) {
                    a.body = InFlight.replaceHost(a.body, !0);
                    for (var b = 0; b < a.images.length; b++) a.images[b].url = InFlight.replaceHost(a.images[b].url)
                }
                return a
            })
        })
    };
    h.currentWeather = function(b) {
        n.get({
            url: InFlight.makeServiceURL("/livetextnews/v1/current_weather"),
            headers: {
                Accept: "application/json"
            }
        }, function(d, a) {
            e(d, a, b, function(a) {
                for (var b = {
                        regions: {}
                    }, d = a.length, c = 0; c < d; c++) {
                    var e = a[c];
                    b.regions.hasOwnProperty(e.region_id) || (b.regions[e.region_id] = {
                        name: e.region_name,
                        cities: []
                    });
                    e.forecast_weather_url = InFlight.replaceHost(e.forecast_weather_url);
                    b.regions[e.region_id].cities[e.icao_code] = e
                }
                return b
            })
        })
    };
    h.forecastWeather = function(b, d) {
        var a = null,
            c = typeof b.days;
        if ("undefined" !== c) {
            if ("" === b.days) a = null;
            else if ("number" === c) a = b.days;
            else if (a = parseInt(b.days, 10), isNaN(a)) throw Error('livetextnews/v1: "days" argument must be a number, got: ' + b.days);
            if ("number" === typeof a && 1 > a) throw Error('livetextnews/v1: "days" argument must be > 0, got: ' + a);
        }
        n.get({
            url: InFlight.makeServiceURL("/livetextnews/v1/forecast_weather"),
            headers: {
                Accept: "application/json"
            },
            query: b
        }, function(b, c) {
            e(b, c, d, function(b) {
                return null !== a ? b.slice(0, a + 1) : b
            })
        })
    };
    var e = function(b, d, a, c) {
            if (b ||
                200 !== d.code) {
                try {
                    var e = m.parse(d.body)
                } catch (g) {
                    a({
                        code: 500,
                        text: ""
                    }, null);
                    return
                }
                a(e, null)
            } else {
                try {
                    var h = m.parse(d.body)
                } catch (p) {
                    a({
                        code: 500,
                        text: ""
                    }, null);
                    return
                }
                c ? a(null, c(h)) : a(null, h)
            }
        },
        g = ["sdk/v1/http", "sdk/v1/event"];
    window.JSON || g.push("sdk/v1/json2");
    InFlight.define("livetextnews/v1", g, function(b, d, a) {
        n = b;
        k = d;
        a && (m = a);
        return h
    })
})();
InFlight.define("maps/v1", ["sdk/v1/http", "sdk/v1/event", "sdk/v1/json2", "sdk/v1/util"], function(n, k, m, h) {
    var l = window.JSON || m,
        c = {
            getFlightMaps: function(c) {
                n.get({
                    url: InFlight.makeServiceURL("/maps/v1/flight_map")
                }, function(g, b) {
                    if (g) c(g, null);
                    else {
                        var d;
                        try {
                            d = l.parse(b.body)
                        } catch (a) {
                            c({
                                code: 500,
                                text: ""
                            }, null);
                            return
                        }
                        d.code && 200 !== d.code ? c(d, null) : c(null, d.images)
                    }
                })
            },
            getFlightMapBySize: function(e, g) {
                e ? e.width || e.height ? c.getFlightMaps(function(b, d) {
                    if (b) g(b, null);
                    else {
                        var a = null,
                            c;
                        for (c in d)
                            if ("number" ===
                                typeof e.width && "number" === typeof e.height ? e.width === d[c].width && e.height === d[c].height && (a = d[c]) : "number" === typeof e.width ? e.width === d[c].width && (a = d[c]) : "number" === typeof e.height && e.height === d[c].height && (a = d[c]), a) {
                                g(null, a);
                                return
                            }
                        g(null, null)
                    }
                }) : g({
                    code: 400,
                    text: ""
                }) : g({
                    code: 400,
                    text: ""
                })
            },
            onFlightMapUpdate: function(c, g) {
                k.register({
                    event_name: "map_update",
                    namespace: "core.maps",
                    callback: function(b) {
                        b = l.parse(b.data.images || b.argv[0]);
                        if ("function" === typeof c) g(b);
                        else
                            for (var d in b) {
                                var a =
                                    b[d];
                                if (c.width === a.width && c.height === a.height) {
                                    g(a);
                                    break
                                }
                            }
                    }
                })
            }
        };
    return c
});
(function() {
    function n(a) {
        0 == e.length ? g ? e.push(a) : m(a) : g && (bumped = e.shift(), e.push(a))
    }

    function k() {
        g = !1;
        0 < e.length && m(e.shift());
        return !1
    }

    function m(a) {
        g = !0;
        var b = a.callback;
        h.get({
            url: InFlight.makeServiceURL("/metadata/v1/search"),
            query: a.data
        }, function(a, c) {
            var d;
            if (a || 200 !== c.code) try {
                var e = l.parse(c.body);
                k() || b(e.code, null)
            } catch (g) {
                k() || b({
                    code: 500,
                    text: ""
                }, null)
            } else try {
                if (d = l.parse(c.body), "object" === typeof d.error && null !== d.error) k() || b({
                    code: d.error.code,
                    text: ""
                }, null);
                else if ("object" ===
                    typeof d.data && null !== d.data) {
                    for (e = 0; e < d.data.length; e++) f(d.data[e]);
                    b(a, d.data);
                    k()
                }
            } catch (p) {
                k() || b({
                    code: 500,
                    text: ""
                }, null)
            }
        })
    }
    var h = null,
        l = window.JSON,
        c = {
            cache: {}
        },
        e = [],
        g = !1;
    AvodEncryptionSupport = null;
    var b = function(a, b) {
            for (var d = {}, c = a.length, f = 0; f < c; f++) {
                var e = a[f];
                e.sequence_num = f + 1;
                d[e[b]] = e
            }
            return d
        },
        d = function(b, d) {
            if (!InFlight.customHost) return b;
            for (var c = 0; c < b.length; c++) b[c] = a(b[c], d);
            return b
        },
        a = function(a, b) {
            if (!InFlight.customHost) return a;
            for (var c = 0; c < b.length; c++) switch (typeof a[b[c]]) {
                case "object":
                    for (var d in a[b[c]]) a[b[c]][d] =
                        a[b[c]][d].replace(InFlight.defaultHost, InFlight.host);
                    break;
                case "string":
                    a[b[c]] = a[b[c]].replace(InFlight.defaultHost, InFlight.host)
            }
            return a
        },
        f = function(a) {
            a.playable = v(a.key_type);
            void 0 !== a.key_type && delete a.key_type
        },
        v = function(a) {
            AvodEncryptionSupport || w(function(a) {
                if (!a) return "no";
                AvodEncryptionSupport = a.getEncryptionSupport()
            });
            switch (a) {
                case 0:
                    a = "unknownkey";
                    break;
                case 1:
                    a = "blowfish";
                    break;
                case 2:
                    a = "des";
                    break;
                case 3:
                    a = "tripledes";
                    break;
                case 4:
                    a = "rc4";
                    break;
                case 5:
                    a = "aes";
                    break;
                case 6:
                    a =
                        "aes_rsa";
                    break;
                case 7:
                    a = "aes_hls";
                    break;
                case 8:
                    a = "aes_hls_marlin";
                    break;
                case 9:
                    a = "unencrypted_hls"
            }
            return a && AvodEncryptionSupport[a] ? AvodEncryptionSupport[a].toString() : "playable.no"
        },
        w = function(a) {
            InFlight.initService("avod/v1", a, function() {
                a(null)
            })
        };
    c.searchMedia = function(a, b, c) {
        if (a) {
            var d = {};
            d.text = a;
            "undefined" !== typeof b && null !== b && ("undefined" !== typeof b.lang && null !== b.lang && (d.lang = b.lang), "undefined" !== typeof b.exact_match && null !== b.exact_match && (d.exact_match = b.exact_match));
            n({
                data: d,
                callback: c
            })
        } else c({
            code: 400,
            text: ""
        })
    };
    c.searchMediaByField = function(a, b, c) {
        if (a) {
            var d = {};
            a.media_type && (d.mediatype = a.media_type);
            a.title && (d.title = a.title);
            a.genre && (d.genre = a.genre);
            a.year && (d.year = a.year);
            a.cast && (d.cast = a.cast);
            a.director && (d.director = a.director);
            a.rating && (d.rating = a.rating);
            0 == d.length ? c({
                code: 400,
                text: ""
            }) : ("undefined" !== typeof b && null !== b && ("undefined" !== typeof b.lang && null !== b.lang && (d.lang = b.lang), "undefined" !== typeof b.exact_match && null !== b.exact_match && (d.exact_match =
                b.exact_match)), n({
                data: d,
                callback: c
            }))
        } else c({
            code: 400,
            text: ""
        })
    };
    c.MediaTypes = {
        MOVIE: "movie",
        TV_EPISODE: "tv",
        ALBUM: "album"
    };
    c.getRequiredSoftwareForMedia = function(a, b) {
        w(function(d) {
            d ? h.get({
                url: InFlight.makeServiceURL("/metadata/v1/media_keytype_count"),
                headers: {
                    Accept: "application/json"
                },
                query: a
            }, function(a, c) {
                if (a || 200 !== c.code) {
                    var f;
                    try {
                        f = l.parse(c.body)
                    } catch (e) {
                        b({
                            code: 500,
                            text: ""
                        }, null);
                        return
                    }
                    b(f, null)
                } else {
                    var g;
                    try {
                        g = l.parse(c.body)
                    } catch (h) {
                        b({
                            code: 500,
                            text: ""
                        }, null);
                        return
                    }
                    f = [];
                    for (var p in g) switch (g[p]) {
                        case 0:
                            f.push("unencrypted_hls");
                            break;
                        case 1:
                            f.push("aes_hls");
                            break;
                        case 2:
                            f.push("aes_hls_marlin")
                    }
                    g = d.getRequiredSoftware(f);
                    b(null, g)
                }
            }) : b(null, null)
        })
    };
    c.categories = function(a, c) {
        h.get({
            url: InFlight.makeServiceURL("/metadata/v1/categories"),
            headers: {
                Accept: "application/json"
            },
            query: a
        }, function(a, f) {
            if (a || 200 !== f.code) {
                var e;
                try {
                    e = l.parse(f.body)
                } catch (g) {
                    c({
                        code: 500,
                        text: ""
                    }, null);
                    return
                }
                c(e, null)
            } else {
                var h;
                try {
                    h = l.parse(f.body), h = d(h, ["poster_url", "synopsis_url"])
                } catch (p) {
                    c({
                        code: 500,
                        text: ""
                    }, null);
                    return
                }
                c(null, b(h, "id"))
            }
        })
    };
    c.CategoryRootType = {
        MOVIES: "movies",
        MUSIC: "music",
        TV: "tv",
        RADIO: "radio",
        AUDIOBOOKS: "audiobooks",
        MUSICVIDEOS: "musicvideos",
        FEATURED: "featured",
        SHOWCASE: "showcase",
        KIDS_MOVIES: "kids_movies",
        KIDS_MUSIC: "kids_music",
        KIDS_TV: "kids_tv",
        KIDS_RADIO: "kids_radio",
        KIDS_FEATURED: "kids_featured",
        KIDS_SHOWCASE: "kids_showcase"
    };
    c.categoryMedia = function(a, c) {
        h.get({
            url: InFlight.makeServiceURL("/metadata/v1/category_media"),
            headers: {
                Accept: "application/json"
            },
            query: a
        }, function(e, g) {
            if (e || 200 !== g.code) {
                var h;
                try {
                    h =
                        l.parse(g.body)
                } catch (q) {
                    c({
                        code: 500,
                        text: ""
                    }, null);
                    return
                }
                c(h, null)
            } else {
                var v;
                try {
                    for (v = l.parse(g.body), v = d(v, ["poster_url", "synopsis_url", "metadata_url"]), h = 0; h < v.length; h++) {
                        f(v[h]);
                        var k;
                        if (k = a.filter) {
                            var m;
                            a: {
                                for (var n = a.filter, w = n.length; w--;)
                                    if (n[w] === v[h].playable) {
                                        m = !0;
                                        break a
                                    }
                                m = !1
                            }
                            k = !m
                        }
                        k && (v.splice(h, 1), h--)
                    }
                } catch (U) {
                    c({
                        code: 500,
                        text: ""
                    }, null);
                    return
                }
                c(null, b(v, "media_uri"))
            }
        })
    };
    c.mediaMetadata = function(b, c) {
        "undefined" === typeof b && (b = {});
        h.get({
            url: InFlight.makeServiceURL("/metadata/v1/media_metadata"),
            headers: {
                Accept: "application/json"
            },
            query: b
        }, function(b, d) {
            if (b || 200 !== d.code) {
                var e;
                try {
                    e = l.parse(d.body)
                } catch (g) {
                    c({
                        code: 500,
                        text: ""
                    }, null);
                    return
                }
                c(e, null)
            } else {
                var h;
                try {
                    h = l.parse(d.body), h = a(h, ["poster_url", "synopsis_url"]), f(h)
                } catch (q) {
                    c({
                        code: 500,
                        text: ""
                    }, null);
                    return
                }
                c(null, h)
            }
        })
    };
    c.childMedia = function(a, c) {
        "undefined" === typeof a && (a = {});
        h.get({
            url: InFlight.makeServiceURL("/metadata/v1/child_media"),
            headers: {
                Accept: "application/json"
            },
            query: a
        }, function(a, f) {
            if (a || 200 !== f.code) {
                var e;
                try {
                    e =
                        l.parse(f.body)
                } catch (g) {
                    c({
                        code: 500,
                        text: ""
                    }, null);
                    return
                }
                c(e, null)
            } else {
                var h;
                try {
                    h = l.parse(f.body), h = d(h, ["poster_url", "synopsis_url"])
                } catch (q) {
                    c({
                        code: 500,
                        text: ""
                    }, null);
                    return
                }
                c(null, b(h, "media_uri"))
            }
        })
    };
    var q = ["sdk/v1/http"];
    window.JSON || q.push("sdk/v1/json2");
    InFlight.define("metadata/v1", q, function(a, b) {
        h = a;
        b && (l = b);
        return c
    })
})();
(function() {
    var n = {
            getBanner: function(k, h) {
                k && k.zone_path ? k && k.zone_width ? k && k.zone_height ? HTTP.get({
                    url: InFlight.makeServiceURL("/one_media/v1/banner"),
                    query: k
                }, function(l, c) {
                    if (l) h(l, c);
                    else if (200 !== c.code) 404 === c.code ? h({
                        code: 404,
                        text: ""
                    }, null) : h({
                        code: c.code,
                        text: ""
                    });
                    else {
                        try {
                            resp = JSON.parse(c.body)
                        } catch (e) {
                            h({
                                code: 500,
                                text: ""
                            });
                            return
                        }
                        h(null, resp)
                    }
                }) : h({
                    code: 400,
                    text: ""
                }) : h({
                    code: 400,
                    text: ""
                }) : h({
                    code: 400,
                    text: ""
                })
            },
            getInterstitial: function(k, h) {
                k && k.zone_path ? k && k.zone_width ? k && k.zone_height ?
                    HTTP.get({
                        url: InFlight.makeServiceURL("/one_media/v1/interstitial"),
                        query: k
                    }, function(k, c) {
                        if (k) h(k, c);
                        else if (200 !== c.code) 404 === c.code ? h({
                            code: 404,
                            text: ""
                        }, null) : h({
                            code: c.code,
                            text: ""
                        });
                        else {
                            try {
                                resp = JSON.parse(c.body)
                            } catch (e) {
                                h({
                                    code: 500,
                                    text: ""
                                });
                                return
                            }
                            h(null, resp)
                        }
                    }) : h({
                        code: 400,
                        text: ""
                    }) : h({
                        code: 400,
                        text: ""
                    }) : h({
                        code: 400,
                        text: ""
                    })
            }
        },
        k = ["sdk/v1/http"];
    window.JSON || k.push("sdk/v1/json2");
    InFlight.define("one_media/v1", k, function(k, h) {
        HTTP = k;
        h && (JSON = h);
        return n
    })
})();
(function() {
    var n, k, m, h, l = {
            Events: {
                RATING_UPDATE: "core.parental_control.rating_update"
            }
        },
        c = function(c) {
            n.register({
                namespace: "core.parental_control",
                event_name: "rating_update",
                callback: function(g) {
                    var b, d;
                    g.data.rating && (b = g.data.rating);
                    g.data.description && (d = g.data.description);
                    c({
                        event: l.Events.RATING_UPDATE,
                        rating: b,
                        description: d
                    })
                }
            })
        };
    l.addEventListener = function(e, g) {
        switch (e) {
            case l.Events.RATING_UPDATE:
                c(g);
                break;
            default:
                throw Error("parental_control/v1: Unknown event name: '" + e + "'");
        }
    };
    l.getRatings =
        function(c) {
            k.get({
                url: InFlight.makeServiceURL("/parental_control/v1/ratings", !0),
                headers: {
                    Accept: "application/json"
                }
            }, function(g, b) {
                if (g || 200 !== b.code) {
                    var d;
                    try {
                        d = m.parse(b.body)
                    } catch (a) {
                        c({
                            code: 500,
                            text: ""
                        }, null);
                        return
                    }
                    c(d, null)
                } else {
                    var f, h;
                    try {
                        f = m.parse(b.body), h = f.data
                    } catch (k) {
                        c({
                            code: 500,
                            text: ""
                        }, null);
                        return
                    }
                    c(null, h)
                }
            })
        };
    l.getDeviceRating = function(c) {
        k.get({
            url: InFlight.makeServiceURL("/parental_control/v1/rating", !0),
            headers: {
                Accept: "application/json"
            }
        }, function(g, b) {
            if (g || 200 !== b.code) {
                var d;
                try {
                    d = m.parse(b.body)
                } catch (a) {
                    c({
                        code: 500,
                        text: ""
                    }, null);
                    return
                }
                c(d, null)
            } else {
                var f, h;
                try {
                    f = m.parse(b.body), h = f.data
                } catch (k) {
                    c({
                        code: 500,
                        text: ""
                    }, null);
                    return
                }
                c(null, h)
            }
        })
    };
    l.setDeviceRating = function(c, g) {
        if (c.password) {
            var b = {},
                d = h.SHA256(c.password);
            b.passcode = d.toString(h.enc.Hex);
            "undefined" !== typeof c.rating && null !== c.rating && (b.rating = c.rating);
            b = {
                params: b
            };
            b = {
                url: InFlight.makeServiceURL("/parental_control/v1/rating", !0),
                data: m.stringify(b)
            };
            k.postJSON(b, function(a, b) {
                var c;
                if (a || 200 !== b.code) try {
                    var d =
                        m.parse(b.body);
                    g(d.code, null)
                } catch (e) {
                    g({
                        code: 500,
                        text: ""
                    }, null)
                } else try {
                    c = b.body, "object" === typeof c.error && null !== c.error ? g({
                        code: c.error.code,
                        text: ""
                    }, null) : "object" === typeof c.data && null !== c.data && g(a, c.data)
                } catch (h) {
                    g({
                        code: 500,
                        text: ""
                    }, null)
                }
            })
        } else g({
            code: 400,
            text: ""
        })
    };
    l.resetDeviceRating = function(c, g) {
        if (c.password) {
            var b = {},
                d = h.SHA256(c.password);
            b.crew_passcode = d.toString(h.enc.Hex);
            b = {
                params: b
            };
            b = {
                url: InFlight.makeServiceURL("/parental_control/v1/reset_rating", !0),
                data: m.stringify(b)
            };
            k.postJSON(b, function(a, b) {
                var c;
                if (a || 200 !== b.code) try {
                    var d = m.parse(b.body);
                    g(d.code, null)
                } catch (e) {
                    g({
                        code: 500,
                        text: ""
                    }, null)
                } else try {
                    c = b.body, "object" === typeof c.error && null !== c.error ? g({
                        code: c.error.code,
                        text: ""
                    }, null) : "object" === typeof c.data && null !== c.data && g(a, c.data)
                } catch (h) {
                    g({
                        code: 500,
                        text: ""
                    }, null)
                }
            })
        } else g({
            code: 400,
            text: ""
        })
    };
    InFlight.define("parental_control/v1", ["sdk/v1/event", "sdk/v1/http", "sdk/v1/json2", "parental_control/v1/sha256"], function(c, g, b, d) {
        n = c;
        k = g;
        m = window.JSON || b;
        h = d;
        return l
    })
})();
InFlight.define("ppv/v1", "payment/v1/token sdk/v1/http sdk/v1/event sdk/v1/devicestorage sdk/v1/util sdk/v1/json2".split(" "), function(n, k, m, h, l, c) {
    var e = window.JSON || c,
        g = null;
    return {
        checkPaymentRequirement: function(b, c) {
            var a = h.getData("ppv.ppv_token"),
                f = b.purchase_type,
                g, m = {};
            m.ppv_token = a;
            b.media_uris && l.isArray(b.media_uris) && (g = b.media_uris.join(","));
            void 0 !== f && (m.purchase_type = f);
            void 0 !== g && (m.media_uris = g);
            k.post({
                    url: InFlight.makeServiceURL("/ppv/v1/check_payment_requirement", !0),
                    data: m
                },
                function(a, b) {
                    if (a) c(a, b);
                    else {
                        var f;
                        try {
                            f = e.parse(b.body)
                        } catch (g) {
                            c({
                                code: 500,
                                text: ""
                            });
                            return
                        }
                        200 !== f.code ? c(f, null) : c(null, f.data.payment_required)
                    }
                })
        },
        initiatePayment: function(b, c) {
            b.app_id = "PPV";
            b.theme_id = b.theme_id ? b.theme_id : "default";
            b.lang = b.lang ? b.lang : "eng";
            void 0 !== b.media_uris && l.isArray(b.media_uris) ? n.requestPaymentToken(b, function(a, f) {
                if (a) c(a, null);
                else {
                    g = f.payment_token;
                    var h = null;
                    f.pay_type && (h = f.pay_type);
                    var m = b.purchase_type,
                        q;
                    l.isArray(b.media_uris) && (q = b.media_uris.join(","));
                    k.post({
                        url: InFlight.makeServiceURL("/ppv/v1/check_purchase_requirement", !0),
                        data: {
                            media_uris: q,
                            purchase_type: m,
                            payment_token: g
                        }
                    }, function(a, b) {
                        if (a) c(a, b);
                        else {
                            var f;
                            try {
                                f = e.parse(b.body)
                            } catch (g) {
                                c({
                                    code: 500,
                                    text: ""
                                });
                                return
                            }
                            200 !== f.code ? c(f, null) : (ppvToken = f.data.ppv_token, f.data.pay_type = h, c(null, f.data))
                        }
                    })
                }
            }) : c({
                code: 400,
                text: ""
            }, null)
        },
        purchase: function(b, c) {
            var a, f = b.purchase_type;
            void 0 !== b.media_uris && l.isArray(b.media_uris) ? (a = b.media_uris.join(","), g ? k.post({
                url: InFlight.makeServiceURL("/ppv/v1/purchase", !0),
                data: {
                    media_uris: a,
                    purchase_type: f,
                    payment_token: g
                }
            }, function(a, b) {
                if (a) c(a, b);
                else {
                    var f;
                    try {
                        f = e.parse(b.body)
                    } catch (g) {
                        c({
                            code: 500,
                            text: ""
                        });
                        return
                    }
                    200 !== f.code ? c(f, null) : (ppvToken = f.data.ppv_token, h.setData("ppv.ppv_token", ppvToken), c(null, {
                        code: f.code,
                        amount_charged: f.data.amount_charged
                    }))
                }
            }) : c({
                code: 404,
                text: ""
            }, null)) : c({
                code: 400,
                text: ""
            }, null)
        },
        configurePaymentForm: function(b, c) {
            c(null)
        }
    }
});
InFlight.define("ppv/v2", "payment/v1/token sdk/v1/http sdk/v1/event sdk/v1/devicestorage sdk/v1/util sdk/v1/json2".split(" "), function(n, k, m, h, l, c) {
    var e = window.JSON || c,
        g = null;
    return {
        checkPaymentRequirement: function(b, c) {
            var a = h.getData("ppv.ppv_token"),
                f = {};
            f.ppv_token = a;
            f.media_uri = b.media_uri;
            k.post({
                url: InFlight.makeServiceURL("/ppv/v2/check_payment_requirement", !0),
                data: f
            }, function(a, b) {
                if (a) c(a, b);
                else {
                    var f;
                    try {
                        f = e.parse(b.body)
                    } catch (g) {
                        c({
                            code: 500,
                            text: ""
                        });
                        return
                    }
                    200 !== f.code ? c(f, null) :
                        c(null, f.data.payment_required)
                }
            })
        },
        initiatePayment: function(b, c) {
            b.app_id = "PPV";
            b.theme_id = b.theme_id ? b.theme_id : "default";
            b.lang = b.lang ? b.lang : "eng";
            n.requestPaymentToken(b, function(a, f) {
                a ? c(a, null) : (g = f, k.post({
                    url: InFlight.makeServiceURL("/ppv/v2/check_purchase_requirement", !0),
                    data: {
                        media_uri: b.media_uri,
                        payment_token: g
                    }
                }, function(a, b) {
                    if (a) c(a, b);
                    else {
                        var f;
                        try {
                            f = e.parse(b.body)
                        } catch (g) {
                            c({
                                code: 500,
                                text: ""
                            });
                            return
                        }
                        200 !== f.code ? c(f, null) : (ppvToken = f.data.ppv_token, c(null, f.data))
                    }
                }))
            })
        },
        purchase: function(b,
            c) {
            g ? k.post({
                url: InFlight.makeServiceURL("/ppv/v2/purchase", !0),
                data: {
                    media_uri: b.media_uri,
                    payment_token: g
                }
            }, function(a, b) {
                if (a) c(a, b);
                else {
                    var g;
                    try {
                        g = e.parse(b.body)
                    } catch (k) {
                        c({
                            code: 500,
                            text: ""
                        });
                        return
                    }
                    200 !== g.code ? c(g, null) : (ppvToken = g.data.ppv_token, h.setData("ppv.ppv_token", ppvToken), c(null, {
                        code: g.code,
                        amount_charged: g.data.amount_charged
                    }))
                }
            }) : c({
                code: 404,
                text: ""
            }, null)
        }
    }
});
(function() {
    function n(a) {
        var b, c;
        "undefined" !== typeof document.hidden ? (b = "hidden", c = "visibilitychange") : "undefined" !== typeof document.mozHidden ? (b = "mozHidden", c = "mozvisibilitychange") : "undefined" !== typeof document.msHidden ? (b = "msHidden", c = "msvisibilitychange") : "undefined" !== typeof document.webkitHidden && (b = "webkitHidden", c = "webkitvisibilitychange");
        window.addEventListener && (window.addEventListener("pageshow", a, !1), document.addEventListener(c, function() {
            document[b] || a()
        }, !1));
        InFlight.addEventListener("inflight.app.wakeup",
            a)
    }
    var k = {
            DECOMPRESSION: "DECOMPRESSION",
            WEIGHT_ON_WHEELS: "WEIGHT_ON_WHEELS",
            PA_STATE: "PA_STATE",
            PAState: {
                OFF: 0,
                ON: 1,
                AUDIO: 1,
                VIDEO: 2,
                VIDEO_ANNOUNCEMENT: 4,
                OTHER: 8
            },
            NET_STATE_CHANGE: "NET_STATE_CHANGE"
        },
        m = null,
        h = window.JSON,
        l = null,
        c = null,
        e = null,
        g = [],
        b = [],
        d = [],
        a = null,
        f = !1,
        v = !1,
        w = !1,
        q = function(a) {
            var b, c = !1,
                f = null;
            if ("string" == typeof a) try {
                f = h.parse(a), void 0 === f.data || void 0 === f.data.decompression || isNaN(f.data.decompression) || (c = f.data.decompression)
            } catch (e) {
                InFlight.console.warn("Unable to parse native app decompression event")
            } else "0" !==
                a.data && "1" !== a.data && InFlight.console.warn("system/v1.addEventListener(System.DECOMPRESSION): Expected '0' or '1' for TD_ID_DECOMPRESSION event data. Got '" + a.data + "'"), c = "1" === a.data;
            for (b in d)
                if ("function" === typeof d[b]) d[b]({
                    data: {
                        decompression_state: c
                    }
                })
        },
        p = function(a) {
            var b = !1;
            if (!w) {
                if (e.getBridgeType() != e.BridgeTypes.NONE && e.getBridgeType() != e.BridgeTypes.ANDROID) {
                    var c = {
                        event: "inflight.app.decompression"
                    };
                    try {
                        b = h.parse(e.call("ifapi.hasEventSupport", c))
                    } catch (f) {
                        InFlight.console.warn("Unable to detect native app decompression event support")
                    }
                }
                b ?
                    InFlight.addEventListener("inflight.app.decompression", q) : l.addEventListener(l.TD_ID_DECOMPRESSION, q);
                w = !0
            }
            d[d.length] = a;
            l.decompressionState(function(b, c) {
                null !== b ? InFlight.console.warn("system/v1.onDecompression: error while fetching state.", b) : a({
                    data: {
                        decompression_state: c
                    }
                })
            })
        },
        u = function(a) {
            var c, d = !1,
                f = null;
            if ("string" == typeof a) try {
                f = h.parse(a), void 0 === f.data || void 0 === f.data.weight_on_wheels || isNaN(f.data.weight_on_wheels) || (d = f.data.weight_on_wheels)
            } catch (e) {
                InFlight.console.warn("Unable to parse native app WOW event")
            } else "0" !==
                a.data && "1" !== a.data && InFlight.console.warn("system/v1.onWeightOnWheels:", "Expected '0' or '1' for TD_ID_WEIGHT_ON_WHEELS event data.", "Got '" + a.data + "'"), d = "1" === a.data;
            for (c in b)
                if ("function" === typeof b[c]) b[c]({
                    data: {
                        weight_on_wheels: d
                    }
                })
        },
        r = function(a) {
            var c = !1;
            if (!v) {
                if (e.getBridgeType() != e.BridgeTypes.NONE && e.getBridgeType() != e.BridgeTypes.ANDROID) {
                    var d = {
                        event: "inflight.app.weight_on_wheels"
                    };
                    try {
                        c = h.parse(e.call("ifapi.hasEventSupport", d))
                    } catch (f) {
                        InFlight.console.warn("Unable to detect native app WOW event support")
                    }
                }
                c ?
                    InFlight.addEventListener("inflight.app.weight_on_wheels", u) : l.addEventListener(l.TD_ID_WEIGHT_ON_WHEELS, u);
                v = !0
            }
            b[b.length] = a;
            l.weightOnWheels(function(b, c) {
                null !== b ? InFlight.console.warn("system/v1.onWeightOnWheels: error while fetching state.", b) : a({
                    data: {
                        weight_on_wheels: c
                    }
                })
            })
        },
        x = function(b) {
            var c, d = null,
                f = null;
            if ("string" == typeof b) try {
                f = h.parse(b), void 0 === f.data || void 0 === f.data.pa_state || isNaN(f.data.pa_state) || (d = parseInt(f.data.pa_state, 10))
            } catch (e) {
                InFlight.console.warn("Unable to parse native app PA event")
            } else void 0 ===
                b.data || isNaN(b.data) || (d = parseInt(b.data, 10));
            d = isNaN(d) || 0 == d ? k.PAState.OFF : k.PAState.ON;
            if (d != a) {
                for (c in g)
                    if ("function" === typeof g[c]) g[c]({
                        data: {
                            pa_state: d
                        }
                    });
                a = d
            }
        },
        t = function(b) {
            var d = !1;
            if (!f) {
                if (e.getBridgeType() != e.BridgeTypes.NONE && e.getBridgeType() != e.BridgeTypes.ANDROID) {
                    var k = {
                        event: "inflight.app.pa_state"
                    };
                    try {
                        d = h.parse(e.call("ifapi.hasEventSupport", k))
                    } catch (r) {
                        InFlight.console.warn("Unable to detect native app PA event support")
                    }
                }
                d ? InFlight.addEventListener("inflight.app.pa_state",
                    x) : l.addEventListener(l.TD_ID_X2_PA_STATE, x);
                f = !0
            }
            g[g.length] = b;
            l.paState(function(c, d) {
                null !== c ? InFlight.console.warn("system/v1.onPAState: error while fetching state.", c) : (a = d, b({
                    data: {
                        pa_state: d
                    }
                }))
            });
            c.onStateChange(function(a) {
                a.online && l.paState(function(a, b) {
                    null !== a ? InFlight.console.warn("system/v1.onPAState: error while fetching state.", a) : x({
                        data: b
                    })
                })
            });
            m.onConnect(function() {
                l.paState(function(a, b) {
                    null !== a ? InFlight.console.warn("system/v1.onPAState: error while fetching state.", a) : x({
                        data: b
                    })
                })
            });
            n(function() {
                l.paState(function(a, b) {
                    null !== a ? InFlight.console.warn("system/v1.onPAState: error while fetching state.", a) : x({
                        data: b
                    })
                })
            })
        };
    k.addEventListener = function(a, b) {
        switch (a) {
            case k.DECOMPRESSION:
                p(b);
                break;
            case k.WEIGHT_ON_WHEELS:
                r(b);
                break;
            case k.PA_STATE:
                t(b);
                break;
            case k.NET_STATE_CHANGE:
                c.onStateChange(b);
                break;
            default:
                throw "Unknown event name: '" + a + "'";
        }
    };
    var E = ["flightdata/v1", "sdk/v1/event", "sdk/v1/network", "sdk/v1/app_bridge"];
    h || E.push("sdk/v1/json2");
    InFlight.define("system/v1",
        E,
        function(a, b, d, f, g) {
            l = a;
            m = b;
            c = d;
            e = f;
            g && (h = g);
            return k
        })
})();
InFlight.define("catalogs/hospitality/v1", ["catalogs/v1"], function(n) {
    return new n("hospitality", "catalogs/hospitality")
});
InFlight.define("catalogs/shopping/v1", ["catalogs/v1"], function(n) {
    return new n("shopping", "catalogs/shopping")
});
InFlight.define("parental_control/v1/sha256", [], function() {
    var n = n || function(k, m) {
        var h = {},
            l = h.lib = {},
            c = function() {},
            e = l.Base = {
                extend: function(a) {
                    c.prototype = this;
                    var b = new c;
                    a && b.mixIn(a);
                    b.hasOwnProperty("init") || (b.init = function() {
                        b.$super.init.apply(this, arguments)
                    });
                    b.init.prototype = b;
                    b.$super = this;
                    return b
                },
                create: function() {
                    var a = this.extend();
                    a.init.apply(a, arguments);
                    return a
                },
                init: function() {},
                mixIn: function(a) {
                    for (var b in a) a.hasOwnProperty(b) && (this[b] = a[b]);
                    a.hasOwnProperty("toString") &&
                        (this.toString = a.toString)
                },
                clone: function() {
                    return this.init.prototype.extend(this)
                }
            },
            g = l.WordArray = e.extend({
                init: function(a, b) {
                    a = this.words = a || [];
                    this.sigBytes = b != m ? b : 4 * a.length
                },
                toString: function(a) {
                    return (a || d).stringify(this)
                },
                concat: function(a) {
                    var b = this.words,
                        c = a.words,
                        d = this.sigBytes;
                    a = a.sigBytes;
                    this.clamp();
                    if (d % 4)
                        for (var f = 0; f < a; f++) b[d + f >>> 2] |= (c[f >>> 2] >>> 24 - f % 4 * 8 & 255) << 24 - (d + f) % 4 * 8;
                    else if (65535 < c.length)
                        for (f = 0; f < a; f += 4) b[d + f >>> 2] = c[f >>> 2];
                    else b.push.apply(b, c);
                    this.sigBytes += a;
                    return this
                },
                clamp: function() {
                    var a = this.words,
                        b = this.sigBytes;
                    a[b >>> 2] &= 4294967295 << 32 - b % 4 * 8;
                    a.length = k.ceil(b / 4)
                },
                clone: function() {
                    var a = e.clone.call(this);
                    a.words = this.words.slice(0);
                    return a
                },
                random: function(a) {
                    for (var b = [], c = 0; c < a; c += 4) b.push(4294967296 * k.random() | 0);
                    return new g.init(b, a)
                }
            }),
            b = h.enc = {},
            d = b.Hex = {
                stringify: function(a) {
                    var b = a.words;
                    a = a.sigBytes;
                    for (var c = [], d = 0; d < a; d++) {
                        var f = b[d >>> 2] >>> 24 - d % 4 * 8 & 255;
                        c.push((f >>> 4).toString(16));
                        c.push((f & 15).toString(16))
                    }
                    return c.join("")
                },
                parse: function(a) {
                    for (var b =
                            a.length, c = [], d = 0; d < b; d += 2) c[d >>> 3] |= parseInt(a.substr(d, 2), 16) << 24 - d % 8 * 4;
                    return new g.init(c, b / 2)
                }
            },
            a = b.Latin1 = {
                stringify: function(a) {
                    var b = a.words;
                    a = a.sigBytes;
                    for (var c = [], d = 0; d < a; d++) c.push(String.fromCharCode(b[d >>> 2] >>> 24 - d % 4 * 8 & 255));
                    return c.join("")
                },
                parse: function(a) {
                    for (var b = a.length, c = [], d = 0; d < b; d++) c[d >>> 2] |= (a.charCodeAt(d) & 255) << 24 - d % 4 * 8;
                    return new g.init(c, b)
                }
            },
            f = b.Utf8 = {
                stringify: function(b) {
                    try {
                        return decodeURIComponent(escape(a.stringify(b)))
                    } catch (c) {
                        throw Error("Malformed UTF-8 data");
                    }
                },
                parse: function(b) {
                    return a.parse(unescape(encodeURIComponent(b)))
                }
            },
            v = l.BufferedBlockAlgorithm = e.extend({
                reset: function() {
                    this._data = new g.init;
                    this._nDataBytes = 0
                },
                _append: function(a) {
                    "string" == typeof a && (a = f.parse(a));
                    this._data.concat(a);
                    this._nDataBytes += a.sigBytes
                },
                _process: function(a) {
                    var b = this._data,
                        c = b.words,
                        d = b.sigBytes,
                        f = this.blockSize,
                        e = d / (4 * f),
                        e = a ? k.ceil(e) : k.max((e | 0) - this._minBufferSize, 0);
                    a = e * f;
                    d = k.min(4 * a, d);
                    if (a) {
                        for (var h = 0; h < a; h += f) this._doProcessBlock(c, h);
                        h = c.splice(0, a);
                        b.sigBytes -=
                            d
                    }
                    return new g.init(h, d)
                },
                clone: function() {
                    var a = e.clone.call(this);
                    a._data = this._data.clone();
                    return a
                },
                _minBufferSize: 0
            });
        l.Hasher = v.extend({
            cfg: e.extend(),
            init: function(a) {
                this.cfg = this.cfg.extend(a);
                this.reset()
            },
            reset: function() {
                v.reset.call(this);
                this._doReset()
            },
            update: function(a) {
                this._append(a);
                this._process();
                return this
            },
            finalize: function(a) {
                a && this._append(a);
                return this._doFinalize()
            },
            blockSize: 16,
            _createHelper: function(a) {
                return function(b, c) {
                    return (new a.init(c)).finalize(b)
                }
            },
            _createHmacHelper: function(a) {
                return function(b,
                    c) {
                    return (new n.HMAC.init(a, c)).finalize(b)
                }
            }
        });
        var n = h.algo = {};
        return h
    }(Math);
    (function(k) {
        for (var m = n, h = m.lib, l = h.WordArray, c = h.Hasher, h = m.algo, e = [], g = [], b = function(a) {
                return 4294967296 * (a - (a | 0)) | 0
            }, d = 2, a = 0; 64 > a;) {
            var f;
            a: {
                f = d;
                for (var v = k.sqrt(f), w = 2; w <= v; w++)
                    if (!(f % w)) {
                        f = !1;
                        break a
                    }
                f = !0
            }
            f && (8 > a && (e[a] = b(k.pow(d, .5))), g[a] = b(k.pow(d, 1 / 3)), a++);
            d++
        }
        var q = [],
            h = h.SHA256 = c.extend({
                _doReset: function() {
                    this._hash = new l.init(e.slice(0))
                },
                _doProcessBlock: function(a, b) {
                    for (var c = this._hash.words, d = c[0],
                            f = c[1], e = c[2], h = c[3], k = c[4], l = c[5], m = c[6], v = c[7], n = 0; 64 > n; n++) {
                        if (16 > n) q[n] = a[b + n] | 0;
                        else {
                            var w = q[n - 15],
                                J = q[n - 2];
                            q[n] = ((w << 25 | w >>> 7) ^ (w << 14 | w >>> 18) ^ w >>> 3) + q[n - 7] + ((J << 15 | J >>> 17) ^ (J << 13 | J >>> 19) ^ J >>> 10) + q[n - 16]
                        }
                        w = v + ((k << 26 | k >>> 6) ^ (k << 21 | k >>> 11) ^ (k << 7 | k >>> 25)) + (k & l ^ ~k & m) + g[n] + q[n];
                        J = ((d << 30 | d >>> 2) ^ (d << 19 | d >>> 13) ^ (d << 10 | d >>> 22)) + (d & f ^ d & e ^ f & e);
                        v = m;
                        m = l;
                        l = k;
                        k = h + w | 0;
                        h = e;
                        e = f;
                        f = d;
                        d = w + J | 0
                    }
                    c[0] = c[0] + d | 0;
                    c[1] = c[1] + f | 0;
                    c[2] = c[2] + e | 0;
                    c[3] = c[3] + h | 0;
                    c[4] = c[4] + k | 0;
                    c[5] = c[5] + l | 0;
                    c[6] = c[6] + m | 0;
                    c[7] = c[7] + v | 0
                },
                _doFinalize: function() {
                    var a =
                        this._data,
                        b = a.words,
                        c = 8 * this._nDataBytes,
                        d = 8 * a.sigBytes;
                    b[d >>> 5] |= 128 << 24 - d % 32;
                    b[(d + 64 >>> 9 << 4) + 14] = k.floor(c / 4294967296);
                    b[(d + 64 >>> 9 << 4) + 15] = c;
                    a.sigBytes = 4 * b.length;
                    this._process();
                    return this._hash
                },
                clone: function() {
                    var a = c.clone.call(this);
                    a._hash = this._hash.clone();
                    return a
                }
            });
        m.SHA256 = c._createHelper(h);
        m.HmacSHA256 = c._createHmacHelper(h)
    })(Math);
    return n
});
InFlight.define("payment/v1/token", ["sdk/v1/http", "sdk/v1/app_bridge", "sdk/v1/platformdetection", "sdk/v1/devicestorage", "sdk/v1/json2"], function(n, k, m, h, l) {
    var c = window.JSON || l;
    l = {
        APP_ID: {
            PPV: "PPV"
        }
    };
    var e = InFlight.makeServiceURL("/payment/v1/form", !0),
        g = function(c, a) {
            var f = screen.height,
                g = screen.width,
                h = Math.random().toString(36).substring(7),
                l = e + "?form_id=" + h;
            c.payment_token && (l = l.concat("&payment_token=" + c.payment_token));
            c.app_id && (l = l.concat("&app_id=" + c.app_id));
            c.theme_id && (l = l.concat("&theme_id=" +
                c.theme_id));
            c.lang && (l = l.concat("&lang=" + c.lang));
            c.form_width && (g = c.form_width);
            c.form_height && (f = c.form_height);
            l = l.replace(InFlight.defaultHost, InFlight.host);
            if (m.isiOSSDK() || m.isAndroidSDK()) k.callMethod("ifapi.openPopup", {
                url: l
            }, function() {
                b(h, a)
            });
            else var n = window.open(l, "_blank", "height=" + f + ",width=" + g + ",scrollbars=1"),
                u = setInterval(function() {
                    if (!n || n.closed) clearInterval(u), b(h, a)
                }, 1E3)
        },
        b = function(b, a) {
            n.get({
                    url: InFlight.makeServiceURL("/payment/v1/get_token", !0),
                    query: {
                        form_id: b
                    }
                },
                function(b, d) {
                    if (b) a(b, d);
                    else {
                        var e;
                        try {
                            e = c.parse(d.body)
                        } catch (g) {
                            a({
                                code: 500,
                                text: ""
                            });
                            return
                        }
                        200 !== e.code ? a(e, null) : (pay_type = null, e.data.pay_type && (pay_type = e.data.pay_type), payment_token = e.data.payment_token, h.setData("payment.payment_token", payment_token), data = {
                            payment_token: payment_token,
                            pay_type: pay_type
                        }, a(null, data))
                    }
                })
        };
    l.requestPaymentToken = function(b, a) {
        h.getData("payment.payment_token") && (b.payment_token = h.getData("payment.payment_token"));
        g(b, a)
    };
    return l
});
(function() {
    var n, k, m = {
        call: function(h, l) {
            var c;
            return k.isAndroidSDK() && window.BridgeInterface ? BridgeInterface.call(n.stringify(h)) : c = {
                code: 503,
                text: ""
            }
        }
    };
    InFlight.define("sdk/v1/androidbridge", ["sdk/v1/json2", "sdk/v1/platformdetection"], function(h, l) {
        window.JSON && (n = window.JSON);
        n = h;
        k = l;
        return m
    })
})();
(function() {
    var n, k, m, h = 0,
        l = {},
        c = {
            ANDROID: "android",
            IOS: "ios",
            NONE: "none"
        },
        e = function(b, a, c) {
            var e = null,
                g = null,
                k = "function" === typeof c || !1 === c ? !1 : !0;
            if (!m) return b = {
                code: 503,
                text: ""
            };
            if (!b) return b = {
                code: 402,
                text: ""
            };
            c = void 0 === c ? null : c;
            e = ++h;
            g = {
                uid: e,
                method: b,
                method_arguments: void 0 === a ? null : a
            };
            "function" === typeof c && (l[e] = {
                callback: c
            });
            return m.call(g, k)
        },
        g = function(b, a) {
            var c = null,
                e = null,
                g = null;
            void 0 !== l[b] && (c = l[b].callback);
            if (null !== c) {
                try {
                    e = n.parse(a)
                } catch (h) {
                    g = {
                        code: 500,
                        text: ""
                    }
                }
                delete l[b];
                c(g, e)
            }
        },
        b = {};
    b.callMethod = e;
    b.call = e;
    b.getBridgeType = function() {
        return k.isAndroidSDK() ? c.ANDROID : k.isiOSSDK() ? c.IOS : c.NONE
    };
    b.BridgeTypes = c;
    InFlight.SDK = InFlight.SDK || {};
    InFlight.SDK.V1 = InFlight.SDK.V1 || {};
    InFlight.SDK.V1.AppBridge = InFlight.SDK.V1.AppBridge || {};
    InFlight.SDK.V1.AppBridge.callback = g;
    InFlight.SDK.V1.IOS = InFlight.SDK.V1.IOS || {};
    InFlight.SDK.V1.IOS.callback = g;
    InFlight.define("sdk/v1/app_bridge", ["sdk/v1/json2", "sdk/v1/platformdetection", "sdk/v1/androidbridge", "sdk/v1/iosbridge2"], function(c,
        a, f, e) {
        window.JSON && (n = window.JSON);
        n = c;
        k = a;
        k.isAndroidSDK() ? m = f : k.isiOSSDK() && (m = e);
        return b
    })
})();
(function() {
    var n = {},
        k = !1;
    try {
        window.localStorage && (window.localStorage.setItem("ifapi.test", 1), window.localStorage.removeItem("ifapi.test"))
    } catch (m) {
        InFlight.console.log("sdk/v1/devicestorage: No localstorage support"), k = !0
    }
    k || window.localStorage || Object.defineProperty(window, "localStorage", new function() {
        var h = [],
            k = {};
        Object.defineProperty(k, "getItem", {
            value: function(c) {
                return c ? this[c] : null
            },
            writable: !1,
            configurable: !1,
            enumerable: !1
        });
        Object.defineProperty(k, "key", {
            value: function(c) {
                return h[c]
            },
            writable: !1,
            configurable: !1,
            enumerable: !1
        });
        Object.defineProperty(k, "setItem", {
            value: function(c, e) {
                c && (document.cookie = escape(c) + "=" + escape(e) + "; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/")
            },
            writable: !1,
            configurable: !1,
            enumerable: !1
        });
        Object.defineProperty(k, "length", {
            get: function() {
                return h.length
            },
            configurable: !1,
            enumerable: !1
        });
        Object.defineProperty(k, "removeItem", {
            value: function(c) {
                c && (document.cookie = escape(c) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/")
            },
            writable: !1,
            configurable: !1,
            enumerable: !1
        });
        this.get = function() {
            var c, e;
            for (e in k) c = h.indexOf(e), -1 === c ? k.setItem(e, k[e]) : h.splice(c, 1), delete k[e];
            for (; 0 < h.length;) k.removeItem(h[0]), h.splice(0, 1);
            for (var g = 0, b = document.cookie.split(/\s*;\s*/); g < b.length; g++) c = b[g].split(/\s*=\s*/), 1 < c.length && (k[e = unescape(c[0])] = unescape(c[1]), h.push(e));
            return k
        };
        this.configurable = !1;
        this.enumerable = !0
    });
    k ? (n.setData = function() {}, n.deleteData = function() {}, n.getData = function() {}, n.clear = function() {}) : (n.setData = function(h, k) {
        return localStorage.setItem(h,
            k)
    }, n.getData = function(h) {
        return localStorage.getItem(h)
    }, n.deleteData = function(h) {
        return localStorage.removeItem(h)
    }, n.clear = function() {
        localStorage.clear()
    });
    InFlight.define("sdk/v1/devicestorage", [], function() {
        return n
    })
})();
(function(n, k) {
    function m(c) {
        this._events = {};
        c && (c.delimiter && (this.delimiter = c.delimiter), c.wildcard && (this.wildcard = c.wildcard), this.wildcard && (this.listenerTree = {}))
    }

    function h(c, e, g, b) {
        if (!g) return [];
        var d = [],
            a, f, k, l;
        k = e.length;
        l = e[b];
        var m = e[b + 1];
        if (b === k && g._listeners) {
            if ("function" === typeof g._listeners) c && c.push(g._listeners);
            else
                for (e = 0, b = g._listeners.length; e < b; e++) c && c.push(g._listeners[e]);
            return [g]
        }
        if ("*" === l || "**" === l || g[l]) {
            if ("*" === l) {
                for (a in g) "_listeners" !== a && g.hasOwnProperty(a) &&
                    (d = d.concat(h(c, e, g[a], b + 1)));
                return d
            }
            if ("**" === l) {
                (l = b + 1 === k || b + 2 === k && "*" === m) && g._listeners && (d = d.concat(h(c, e, g, k)));
                for (a in g) "_listeners" !== a && g.hasOwnProperty(a) && ("*" === a || "**" === a ? (g[a]._listeners && !l && (d = d.concat(h(c, e, g[a], k))), d = d.concat(h(c, e, g[a], b))) : d = a === m ? d.concat(h(c, e, g[a], b + 2)) : d.concat(h(c, e, g[a], b)));
                return d
            }
            d = d.concat(h(c, e, g[l], b + 1))
        }(f = g["*"]) && h(c, e, f, b + 1);
        if (g = g["**"])
            if (b < k)
                for (a in g._listeners && h(c, e, g, k), g) "_listeners" !== a && g.hasOwnProperty(a) && (a === m ? h(c, e, g[a],
                    b + 2) : a === l ? h(c, e, g[a], b + 1) : (k = {}, k[a] = g[a], h(c, e, {
                    "**": k
                }, b + 1)));
            else g._listeners ? h(c, e, g, k) : g["*"] && g["*"]._listeners && h(c, e, g["*"], k);
        return d
    }
    var l = Array.isArray ? Array.isArray : function(c) {
        return "[object Array]" === Object.prototype.toString.call(c)
    };
    m.prototype.delimiter = ".";
    m.prototype.setMaxListeners = function(c) {
        this._events || (this._events = {});
        this._events.maxListeners = c
    };
    m.prototype.event = "";
    m.prototype.once = function(c, e) {
        this.many(c, 1, e);
        return this
    };
    m.prototype.many = function(c, e, g) {
        function b() {
            0 ===
                --e && d.off(c, b);
            g.apply(this, arguments)
        }
        var d = this;
        if ("function" !== typeof g) throw Error("many only accepts instances of Function");
        b._origin = g;
        this.on(c, b);
        return d
    };
    m.prototype.emit = function() {
        this._events || (this._events = {});
        var c = arguments[0];
        if ("newListener" === c && !this._events.newListener) return !1;
        if (this._all) {
            for (var e = arguments.length, g = Array(e - 1), b = 1; b < e; b++) g[b - 1] = arguments[b];
            b = 0;
            for (e = this._all.length; b < e; b++) this.event = c, this._all[b].apply(this, g)
        }
        if ("error" === c && !(this._all || this._events.error ||
                this.wildcard && this.listenerTree.error)) {
            if (arguments[1] instanceof Error) throw arguments[1];
            throw Error("Uncaught, unspecified 'error' event.");
        }
        var d;
        this.wildcard ? (d = [], e = "string" === typeof c ? c.split(this.delimiter) : c.slice(), h.call(this, d, e, this.listenerTree, 0)) : d = this._events[c];
        if ("function" === typeof d) {
            this.event = c;
            if (1 === arguments.length) d.call(this);
            else if (1 < arguments.length) switch (arguments.length) {
                case 2:
                    d.call(this, arguments[1]);
                    break;
                case 3:
                    d.call(this, arguments[1], arguments[2]);
                    break;
                default:
                    e = arguments.length;
                    g = Array(e - 1);
                    for (b = 1; b < e; b++) g[b - 1] = arguments[b];
                    d.apply(this, g)
            }
            return !0
        }
        if (d) {
            e = arguments.length;
            g = Array(e - 1);
            for (b = 1; b < e; b++) g[b - 1] = arguments[b];
            d = d.slice();
            b = 0;
            for (e = d.length; b < e; b++) this.event = c, d[b].apply(this, g);
            return 0 < d.length || this._all
        }
        return this._all
    };
    m.prototype.on = function(c, e) {
        if ("function" === typeof c) return this.onAny(c), this;
        if ("function" !== typeof e) throw Error("on only accepts instances of Function");
        this._events || (this._events = {});
        this.emit("newListener",
            c, e);
        if (this.wildcard) {
            a: {
                for (var g = c, g = "string" === typeof g ? g.split(this.delimiter) : g.slice(), b = 0, d = g.length; b + 1 < d; b++)
                    if ("**" === g[b] && "**" === g[b + 1]) break a;
                b = this.listenerTree;
                for (d = g.shift(); d;) {
                    b[d] || (b[d] = {});
                    b = b[d];
                    if (0 === g.length) {
                        b._listeners ? "function" === typeof b._listeners ? b._listeners = [b._listeners, e] : l(b._listeners) && (b._listeners.push(e), b._listeners.warned || (g = 10, "undefined" !== typeof this._events.maxListeners && (g = this._events.maxListeners), 0 < g && b._listeners.length > g && (b._listeners.warned = !0, InFlight.console.warn("sdk/v1/eventemitter2: possible memory leak detected. " + b._listeners.length + " listeners added. ")))) : b._listeners = e;
                        break a
                    }
                    d = g.shift()
                }
            }
            return this
        }
        this._events[c] ? "function" === typeof this._events[c] ? this._events[c] = [this._events[c], e] : l(this._events[c]) && (this._events[c].push(e), this._events[c].warned || (g = 10, "undefined" !== typeof this._events.maxListeners && (g = this._events.maxListeners), 0 < g && this._events[c].length > g && (this._events[c].warned = !0, InFlight.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",
            this._events[c].length), InFlight.trace()))) : this._events[c] = e;
        return this
    };
    m.prototype.onAny = function(c) {
        this._all || (this._all = []);
        if ("function" !== typeof c) throw Error("onAny only accepts instances of Function");
        this._all.push(c);
        return this
    };
    m.prototype.addListener = m.prototype.on;
    m.prototype.off = function(c, e) {
        if ("function" !== typeof e) throw Error("removeListener only takes instances of Function");
        var g, b = [];
        if (this.wildcard) g = "string" === typeof c ? c.split(this.delimiter) : c.slice(), b = h.call(this, null,
            g, this.listenerTree, 0);
        else {
            if (!this._events[c]) return this;
            g = this._events[c];
            b.push({
                _listeners: g
            })
        }
        for (var d = 0; d < b.length; d++) {
            var a = b[d];
            g = a._listeners;
            if (l(g)) {
                for (var f = -1, k = 0, m = g.length; k < m; k++)
                    if (g[k] === e || g[k].listener && g[k].listener === e || g[k]._origin && g[k]._origin === e) {
                        f = k;
                        break
                    }
                if (0 > f) break;
                this.wildcard ? a._listeners.splice(f, 1) : this._events[c].splice(f, 1);
                0 === g.length && (this.wildcard ? delete a._listeners : delete this._events[c])
            } else if (g === e || g.listener && g.listener === e || g._origin && g._origin ===
                e) this.wildcard ? delete a._listeners : delete this._events[c]
        }
        return this
    };
    m.prototype.offAny = function(c) {
        var e = 0,
            g = 0,
            b;
        if (c && this._all && 0 < this._all.length)
            for (b = this._all, e = 0, g = b.length; e < g; e++) {
                if (c === b[e]) {
                    b.splice(e, 1);
                    break
                }
            } else this._all = [];
        return this
    };
    m.prototype.removeListener = m.prototype.off;
    m.prototype.removeAllListeners = function(c) {
        if (0 === arguments.length) return this._events && (this._events = {}), this;
        if (this.wildcard)
            for (var e = "string" === typeof c ? c.split(this.delimiter) : c.slice(), e = h.call(this,
                    null, e, this.listenerTree, 0), g = 0; g < e.length; g++) e[g]._listeners = null;
        else {
            if (!this._events[c]) return this;
            this._events[c] = null
        }
        return this
    };
    m.prototype.listeners = function(c) {
        if (this.wildcard) {
            var e = [];
            c = "string" === typeof c ? c.split(this.delimiter) : c.slice();
            h.call(this, e, c, this.listenerTree, 0);
            return e
        }
        this._events || (this._events = {});
        this._events[c] || (this._events[c] = []);
        l(this._events[c]) || (this._events[c] = [this._events[c]]);
        return this._events[c]
    };
    m.prototype.listenersAny = function() {
        return this._all ?
            this._all : []
    };
    "function" === typeof InFlight.define && InFlight.define.amd ? InFlight.define("sdk/v1/eventemitter2", function() {
        return m
    }) : n.EventEmitter2 = m
})("undefined" !== typeof process && "undefined" !== typeof process.title && "undefined" !== typeof exports ? exports : window);
(function() {
    (function() {
        for (var a = 3, b = document.createElement("div"), c = b.getElementsByTagName("i"); b.innerHTML = "\x3c!--[if gt IE " + ++a + "]><i></i><![endif]--\x3e", c[0];);
        return 4 < a ? a : void 0
    })();
    var n = null,
        k = {
            HIGH_PRIORITY: 1,
            LOW_PRIORITY: 0,
            baseURL: InFlight.makeServiceURL("/event/v1/eventstream")
        },
        m, h = null,
        l = [],
        c = {},
        e = !1,
        g = !1,
        b = !1,
        d, a = function() {
            var a = f(),
                a = k.baseURL + "?event=" + a.join("|") + "&time=" + (new Date).getTime();
            return a = InFlight.replaceHost(a + "&padding=1")
        },
        f = function() {
            var a = [],
                b;
            for (b in c)
                if (c.hasOwnProperty(b)) {
                    var d =
                        b,
                        f;
                    for (f in c[d]) {
                        var e = f;
                        0 < c[d][e] && a.push(d + "." + e)
                    }
                }
            return a
        },
        v = function() {
            var a = 0,
                b;
            for (b in c)
                if (c.hasOwnProperty(b)) {
                    var d = b,
                        f;
                    for (f in c[d]) a += c[d][f]
                }
            return a
        },
        w = function() {
            setTimeout(function() {
                if (null !== h && !e) return !0;
                null !== h && (h.close(), h = null);
                0 !== v() && p(function() {
                    if (null === h && e) {
                        h = new m(a());
                        h.onmessage = q;
                        for (var c = f(), g = 0; g < c.length; g++) h.addEventListener(c[g], q);
                        h.addEventListener("open", function() {
                            b || (d.emit("connect"), b = !0)
                        });
                        h.addEventListener("error", function(a) {
                            b && (d.emit("disconnect"),
                                b = !1)
                        });
                        e = !1
                    }
                })
            }, 0)
        },
        q = function(a) {
            var b = a.type.split("."),
                c = b[0] + "." + b[1],
                b = b[2],
                d = n.decodeFormURLEncoded(a.data);
            a.rawData = a.data;
            a.data = d;
            for (var f = [], e = 1;; e++)
                if (d.hasOwnProperty("param" + e)) f.push(d["param" + e]);
                else break;
            a.argv = f;
            l[k.HIGH_PRIORITY].emit(c + "." + b, a);
            l[k.LOW_PRIORITY].emit(c + "." + b, a)
        },
        p = function(a) {
            if (g) a(), b = !0;
            else {
                var b = !1;
                if ("complete" !== document.readyState || b)
                    if (document.readyState || setTimeout(function() {
                            a();
                            b = !0
                        }, 3E3), window.addEventListener) window.addEventListener("load",
                        function() {
                            b || (a(), b = !0)
                        }, !1);
                    else if (window.onload) {
                    var c = window.onload;
                    window.onload = function(d) {
                        b || (a(d), b = !0);
                        c(d)
                    }
                } else window.onload = a;
                else a(), b = !0
            }
        };
    k.register = function(a) {
        var b = a.event_name;
        if (!b) throw "Invalid event_name";
        var d = a.callback,
            f = a.namespace;
        a = "number" === typeof a.priority ? a.priority : k.LOW_PRIORITY;
        "undefined" === typeof c[f] && (c[f] = {});
        var g = c[f];
        if ("undefined" === typeof g[b] || 0 === g[b]) g[b] = 1, e = !0;
        l[a].on(f + "." + b, d);
        w()
    };
    k.deregister = function(a) {
        var b = a.event_name,
            d = a.callback,
            f =
            a.namespace;
        a = "number" === typeof a.priority ? a.priority : k.LOW_PRIORITY;
        var g = c[f];
        --g[b];
        0 === g[b] && (e = !0);
        l[a].off(f + "." + b, d);
        w()
    };
    k.onConnect = function(a) {
        d.on("connect", a)
    };
    k.onDisconnect = function(a) {
        d.on("disconnect", a)
    };
    InFlight.define("sdk/v1/event", ["sdk/v1/eventsource", "sdk/v1/eventemitter2", "sdk/v1/util"], function(a, b, c) {
        if (!a) return !1;
        m = a;
        n = c;
        l[k.HIGH_PRIORITY] = new b({
            wildcard: !0,
            delimiter: "."
        });
        l[k.LOW_PRIORITY] = new b({
            wildcard: !0,
            delimiter: "."
        });
        d = new b;
        return k
    });
    p(function() {
        g = !0
    })
})();
(function(n) {
    function k() {
        this.listeners = {};
        return this
    }

    function m() {}

    function h(b, d) {
        function a() {
            var a = A.event,
                b = A.readyState,
                c = String(a.type);
            A = A.next;
            if (2 !== r.readyState && (null !== b && (r.readyState = b), 0 === b && (216E5 < t && (t = 216E5), R = setTimeout(u, t), InFlight.console.log("sdk/v1/eventsource: onTimeout will retry connection in " + t + " ms")), a.target = r, r.dispatchEvent(a), ("message" === c || "error" === c || "open" === c) && "function" === typeof r["on" + c])) r["on" + c](a)
        }

        function f(b, c) {
            O.event = b;
            O.readyState = c;
            O = O.next = {
                next: null,
                event: null,
                readyState: null
            };
            G ? G.port2.postMessage("") : setTimeout(a, 0)
        }

        function h() {
            null !== z && (z.onload = z.onerror = z.onprogress = z.onreadystatechange = m, z.abort(), z = null);
            null !== R && (clearTimeout(R), R = null);
            null !== D && (clearTimeout(D), D = null);
            r.readyState = 2
        }

        function l() {
            var a = z.responseText || "",
                b, c, d, e;
            if (!J) {
                try {
                    b = z.getResponseHeader ? z.getResponseHeader("Content-Type") : z.contentType
                } catch (h) {
                    setTimeout(function() {}, 0), R = setTimeout(u, t), InFlight.console.log("sdk/v1/eventsource: Unable to getResponseHeader, retrying connection in " +
                        t + " ms")
                }
                b && /^text\/event\-stream/i.test(b) && (f({
                    type: "open"
                }, 1), J = !0, t = x)
            }
            if (J) {
                for (b = a.slice(S); - 1 !== (c = b.search(g));) d = a.slice(U, S + c), c += "\r\n" === b.slice(c, c + 2) ? 2 : 1, S = U = S + c, b = b.slice(c), d ? (e = "", c = d.indexOf(":"), -1 !== c && (e = d.slice(c + (" " === d.slice(c + 1, c + 2) ? 2 : 1)), d = d.slice(0, c)), "event" === d && (Q = e), "id" === d && (K = e), "retry" === d && /^\d+$/.test(e) && (t = x = Number(e)), "heartbeatTimeout" === d && /^\d+$/.test(e) && (E = Number(e), E = 1 > E ? 1 : 216E5 < E ? 216E5 : E, null !== D && clearTimeout(D)), "data" === d && (I = null === I ? e : I + ("\n" +
                    e))) : (null !== I && (F = K, f({
                    type: Q || "message",
                    lastEventId: K,
                    data: I
                }, null)), I = null, Q = "");
                S = a.length
            }
        }

        function q() {
            l();
            f({
                type: "error"
            }, 0);
            null !== D && (clearTimeout(D), D = null)
        }

        function p() {
            3 === z.readyState && l()
        }

        function u() {
            z.onload = z.onerror = q;
            window.addEventListener("beforeunload", function() {
                h()
            }, !1);
            z.onprogress = l;
            z.onreadystatechange = p;
            R = null;
            S = U = 0;
            J = !1;
            I = null;
            Q = "";
            K = F;
            var a;
            a = -1 === b.indexOf("?") ? b + "?timestamp=" + (new Date).getTime() : b + "&timestamp=" + (new Date).getTime();
            z.open("GET", a, !0);
            z.withCredentials =
                N;
            z.setRequestHeader && (z.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), z.setRequestHeader("Accept", "text/event-stream"));
            z.send("" !== F ? "Last-Event-ID=" + encodeURIComponent(F) : "");
            setTimeout(function() {
                null === z ? InFlight.console.log("sdk/v1/eventsource: Connection closed while waiting for timeout") : 3 !== z.readyState && 1 === z.readyState && (z.abort(), u())
            }, E)
        }
        b = String(b);
        var r = this,
            x = 1E3,
            t = x,
            E = 5E3,
            D = null,
            F = "",
            z = new e,
            R = null,
            N = Boolean(c && d && d.withCredentials),
            U, S, J, I = "",
            K = "",
            Q = "",
            O = {
                next: null,
                event: null,
                readyState: null
            },
            A = O,
            G = null;
        d = null;
        r.url = b;
        r.readyState = 0;
        r.withCredentials = N;
        n.MessageChannel && (G = new n.MessageChannel, G.port1.onmessage = a);
        r.close = h;
        k.call(r);
        u();
        return r
    }
    k.prototype = {
        listeners: null,
        throwError: function(b) {
            setTimeout(function() {
                throw b;
            }, 0)
        },
        invokeEvent: function(b) {
            var c = b.eventPhase,
                a = this.listeners[String(b.type)];
            if (a)
                for (var c = a[1 === c ? 0 : 3 === c ? 2 : 1], a = c.length, f = 0; f < a;) {
                    b.currentTarget = this;
                    try {
                        c[f] && c[f].call(this, b)
                    } catch (e) {
                        this.throwError(e)
                    }
                    b.currentTarget = null;
                    f += 1
                }
        },
        dispatchEvent: function(b) {
            b.eventPhase = 2;
            this.invokeEvent(b)
        },
        addEventListener: function(b, c, a) {
            b = String(b);
            a = a ? 0 : 2;
            var f = this.listeners,
                e = f[b];
            e || (f[b] = e = [
                [],
                [],
                []
            ]);
            b = e[a];
            for (f = b.length; 0 < f;)
                if (--f, b[f] === c) return;
            b.push(c);
            e[2 - a].push(null);
            e[1].push(c)
        },
        removeEventListener: function(b, c, a) {
            b = String(b);
            var f = this.listeners,
                e = f[b];
            if (e) {
                a = e[a ? 0 : 2];
                for (var g = a.length, h = [
                        [],
                        [],
                        []
                    ], k = 0; k < g;) a[k] !== c && (h[0].push(e[0][k]), h[1].push(e[1][k]), h[2].push(e[2][k])), k += 1;
                0 === h[0].length ? delete f[b] :
                    f[b] = h
            }
        }
    };
    var l = n.XMLHttpRequest,
        c = l && n.ProgressEvent && void 0 !== (new l).withCredentials,
        e = c ? l : n.XDomainRequest,
        g = /\r[\s\S]|\n/,
        l = new k;
    l.CONNECTING = 0;
    l.OPEN = 1;
    l.CLOSED = 2;
    h.prototype = l;
    h.CONNECTING = 0;
    h.OPEN = 1;
    h.CLOSED = 2;
    l = null;
    InFlight.define("sdk/v1/eventsource", function() {
        return e ? h : !1
    })
})(this);
(function() {
    var n = {
        DEGREES_TO_RADIANS_FACTOR: .01745329252,
        RADIANS_TO_DEGREES_FACTOR: 57.29577951308,
        EARTH_RADIUS_MI: 3958.75,
        haversineDistance: function(k, m) {
            var h = (m.lon - k.lon) * this.DEGREES_TO_RADIANS_FACTOR,
                l = k.lat * this.DEGREES_TO_RADIANS_FACTOR,
                c = m.lat * this.DEGREES_TO_RADIANS_FACTOR,
                h = (Math.pow(Math.sin((m.lat - k.lat) * this.DEGREES_TO_RADIANS_FACTOR / 2), 2) + Math.pow(Math.sin(h / 2), 2)) * Math.cos(l) * Math.cos(c),
                h = 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
            return this.EARTH_RADIUS_MI * h
        },
        greatCircleBearing: function(k,
            m) {
            var h = this.DEGREES_TO_RADIANS_FACTOR * k.lon,
                l = this.DEGREES_TO_RADIANS_FACTOR * k.lat,
                c = this.DEGREES_TO_RADIANS_FACTOR * m.lon,
                e = this.DEGREES_TO_RADIANS_FACTOR * m.lat,
                g = Math.cos(e) * Math.sin(c - h),
                h = Math.cos(l) * Math.sin(e) - Math.sin(l) * Math.cos(e) * Math.cos(c - h),
                l = 0;
            if (0 === g && 0 === h) return 0;
            if (0 === h) return 0 > g ? 3 * Math.PI / 2 : Math.PI / 2;
            0 > h ? l = Math.PI : 0 > g && (l = 2 * Math.PI);
            return Math.atan(g / h) + l
        },
        greatCircleWaypoint: function(k, m, h) {
            var l = this.DEGREES_TO_RADIANS_FACTOR * k.lon,
                c = this.DEGREES_TO_RADIANS_FACTOR * k.lat;
            k = h / this.EARTH_RADIUS_MI;
            h = Math.cos(k);
            k = Math.sin(k);
            var e = Math.cos(c),
                g = Math.sin(c),
                b = Math.cos(m),
                c = {};
            c.lat = Math.asin(g * h + e * k * b) * this.RADIANS_TO_DEGREES_FACTOR;
            m = k * Math.sin(m);
            h = e * h - g * k * b;
            c.lon = 0 === h ? l : (l + Math.atan2(m, h)) * this.RADIANS_TO_DEGREES_FACTOR; - 180 > c.lat && (c.lat += 360);
            180 < c.lat && (c.lat -= 360); - 180 > c.lon && (c.lon += 360);
            180 < c.lon && (c.lon -= 360);
            return c
        },
        greatCircleWaypoints: function(k, m, h) {
            var l = this.haversineDistance(k, m) / h - 1;
            k = [k];
            for (i = 0; i < h - 1; i++) {
                var c = k[k.length - 1],
                    e = this.greatCircleBearing(c,
                        m),
                    c = this.greatCircleWaypoint(c, e, l);
                k.push(c)
            }
            k.push(m);
            return k
        }
    };
    InFlight.define("sdk/v1/geo", [], function() {
        return n
    })
})();
(function() {
    var n, k, m, h = function(c, b) {
            var d;
            c.async = !b;
            var a = {
                url: "http://localhost:" + PORT + "/bridge/call",
                data: n.stringify(c),
                headers: {
                    "Content-Type": "application/json"
                },
                synchronous: !0,
                timeout: 500
            };
            if (!k.isiOSSDK()) return d = {
                code: 503,
                text: ""
            };
            m.post(a, function(a, c) {
                !a && 200 == c.code && b && (d = c.body)
            });
            return d
        },
        l = function(c) {
            for (var b = document.cookie.split(";"), d = null, a = 0, f = null, a = 0; a < b.length; a++) d = b[a].split("="), d[0] = d[0].replace(/^\s+|\s+$/g, ""), 2 == d.length && d[0] === c && (f = d[1]);
            return f
        },
        c = function(c) {
            var b =
                null;
            try {
                b = n.parse(c), void 0 === b.data || void 0 === b.data.port || isNaN(b.data.port) || (PORT = b.data.port)
            } catch (d) {}
        },
        e = {
            call: function(c, b) {
                var d = !1,
                    a, f = null,
                    e = "",
                    f = null,
                    h = 0,
                    m = null;
                if (!k.isiOSSDK()) return a = {
                    code: 503,
                    text: ""
                };
                b ? (h = (new Date).getTime(), e = "ios." + c.method + "." + c.uid + ".response", c.cookie_name = e) : d = !0;
                f = document.createElement("IFRAME");
                f.setAttribute("src", "inflightjs://" + encodeURIComponent(n.stringify(c)));
                document.documentElement.appendChild(f);
                for (f.parentNode.removeChild(f); !1 === d;) {
                    var m =
                        (new Date).getTime(),
                        f = l(e),
                        p = e,
                        u = void 0;
                    null !== l(p) && (u = p + "=", u += ";path=/", u += ";expires=Thu, 01-Jan-1970 00:00:01 GMT", document.cookie = u);
                    null !== f ? (a = f, d = !0) : 250 <= m - h && (a = {
                        code: 403,
                        text: ""
                    }, d = !0)
                }
                return a
            }
        };
    PORT = l("ios.bridge.httpd.port");
    null === PORT || isNaN(PORT) || (e.call = h, InFlight.addEventListener("inflight.app.bridge_port_change", c));
    InFlight.define("sdk/v1/iosbridge2", ["sdk/v1/json2", "sdk/v1/platformdetection", "sdk/v1/http"], function(c, b, d) {
        window.JSON && (n = window.JSON);
        n = c;
        k = b;
        m = d;
        return e
    })
})();
(function() {
    var n, k, m = 0,
        h = function(c) {
            for (var e = document.cookie.split(";"), g = null, b = 0, d = null, b = 0; b < e.length; b++) g = e[b].split("="), g[0] = g[0].replace(/^\s+|\s+$/g, ""), 2 == g.length && g[0] === c && (d = g[1]);
            return d
        },
        l = {
            call: function(c, e, g) {
                var b = !1,
                    d = "",
                    a = null,
                    f = a = null,
                    l = "",
                    a = null,
                    w = 0,
                    f = null;
                if (!k.isiOSSDK()) return d = {
                    code: 503,
                    text: ""
                };
                w = (new Date).getTime();
                g = void 0 === g ? null : g;
                a = ++m;
                l = "ios." + c + "." + a + ".response";
                f = {
                    uid: a,
                    cookie_name: l,
                    method: c,
                    method_arguments: void 0 === e ? null : e
                };
                if (null !== g || !1 === g) b = !0, "function" !==
                    typeof g && !1 === g && delete f.cookie_name;
                a = document.createElement("IFRAME");
                a.setAttribute("src", "inflightjs://" + encodeURIComponent(n.stringify(f)));
                document.documentElement.appendChild(a);
                for (a.parentNode.removeChild(a); !1 === b;) f = (new Date).getTime(), a = h(l), c = l, e = void 0, null !== h(c) && (e = c + "=", e += ";path=/", e += ";expires=Thu, 01-Jan-1970 00:00:01 GMT", document.cookie = e), null !== a ? (d = a, b = !0) : 250 <= f - w && (d = "error", b = !0);
                return d
            }
        };
    InFlight.define("sdk/v1/iosbridge", ["sdk/v1/json2", "sdk/v1/platformdetection"],
        function(c, e) {
            window.JSON && (n = window.JSON);
            n = c;
            k = e;
            return l
        })
})();
(function() {
    function n(a) {
        return 10 > a ? "0" + a : a
    }

    function k(a) {
        c.lastIndex = 0;
        return c.test(a) ? '"' + a.replace(c, function(a) {
            var c = b[a];
            return "string" === typeof c ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + a + '"'
    }

    function m(a, b) {
        var c, h, l, n, u = e,
            r, x = b[a];
        x && "object" === typeof x && "function" === typeof x.toJSON && (x = x.toJSON(a));
        "function" === typeof d && (x = d.call(b, a, x));
        switch (typeof x) {
            case "string":
                return k(x);
            case "number":
                return isFinite(x) ? String(x) : "null";
            case "boolean":
            case "null":
                return String(x);
            case "object":
                if (!x) return "null";
                e += g;
                r = [];
                if ("[object Array]" === Object.prototype.toString.apply(x)) {
                    n = x.length;
                    for (c = 0; c < n; c += 1) r[c] = m(c, x) || "null";
                    l = 0 === r.length ? "[]" : e ? "[\n" + e + r.join(",\n" + e) + "\n" + u + "]" : "[" + r.join(",") + "]";
                    e = u;
                    return l
                }
                if (d && "object" === typeof d)
                    for (n = d.length, c = 0; c < n; c += 1) "string" === typeof d[c] && (h = d[c], (l = m(h, x)) && r.push(k(h) + (e ? ": " : ":") + l));
                else
                    for (h in x) Object.prototype.hasOwnProperty.call(x, h) && (l = m(h, x)) && r.push(k(h) + (e ? ": " : ":") + l);
                l = 0 === r.length ? "{}" : e ? "{\n" + e + r.join(",\n" +
                    e) + "\n" + u + "}" : "{" + r.join(",") + "}";
                e = u;
                return l
        }
    }
    var h = {};
    "function" !== typeof Date.prototype.toJSON && (Date.prototype.toJSON = function(a) {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + n(this.getUTCMonth() + 1) + "-" + n(this.getUTCDate()) + "T" + n(this.getUTCHours()) + ":" + n(this.getUTCMinutes()) + ":" + n(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(a) {
        return this.valueOf()
    });
    var l = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        c = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        e, g, b = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        },
        d;
    "function" !== typeof h.stringify && (h.stringify = function(a, b, c) {
        var h;
        g = e = "";
        if ("number" === typeof c)
            for (h = 0; h < c; h += 1) g += " ";
        else "string" === typeof c && (g = c);
        if ((d = b) && "function" !== typeof b && ("object" !== typeof b || "number" !== typeof b.length)) throw Error("JSON.stringify");
        return m("", {
            "": a
        })
    });
    "function" !==
    typeof h.parse && (h.parse = function(a, b) {
        function c(a, d) {
            var e, g, h = a[d];
            if (h && "object" === typeof h)
                for (e in h) Object.prototype.hasOwnProperty.call(h, e) && (g = c(h, e), void 0 !== g ? h[e] = g : delete h[e]);
            return b.call(a, d, h)
        }
        var d;
        a = String(a);
        l.lastIndex = 0;
        l.test(a) && (a = a.replace(l, function(a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }));
        if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g,
                ""))) return d = eval("(" + a + ")"), "function" === typeof b ? c({
            "": d
        }, "") : d;
        throw new SyntaxError("JSON.parse");
    });
    InFlight.define("sdk/v1/json2", [], function() {
        return h
    })
})();
(function() {
    var n = function(a) {
            var b = Math.abs(a),
                c = Math.floor(b / 60),
                b = b - 60 * c;
            10 > c && (c = "0" + c);
            10 > b && (b = "0" + b);
            return a = (0 < a ? "-" : "+") + ("" + c + b)
        },
        k = function() {
            this.shiftedDate = null;
            switch (arguments.length) {
                case 0:
                    this.date = new Date;
                    break;
                case 1:
                    this.date = new Date(arguments[0])
            }
            this.setTimezoneOffset(0)
        };
    k.prototype.setTimezoneOffset = function(a) {
        if ("number" !== typeof a) throw {
            code: 400,
            text: ""
        };
        var b = this.date.getTime();
        this.shiftedDate = new Date(b - 6E4 * a);
        this.timezoneOffset = a
    };
    k.prototype.getTimezoneOffset =
        function() {
            return this.timezoneOffset
        };
    var m = {
            getDate: "getUTCDate",
            getDay: "getUTCDay",
            getFullYear: "getUTCFullYear",
            getHours: "getUTCHours",
            getMilliseconds: "getUTCMilliseconds",
            getMinutes: "getUTCMinutes",
            getMonth: "getUTCMonth",
            getSeconds: "getUTCSeconds",
            toString: "toString"
        },
        h;
    for (h in m) k.prototype[h] = function(a) {
        return function() {
            return this.shiftedDate[a]()
        }
    }(m[h]);
    for (var l = "getTime getUTCDate getUTCDay getUTCFullYear getUTCHours getUTCMilliseconds getUTCMinutes getUTCMonth getUTCSeconds toISOString toJSON toUTCString".split(" "),
            m = 0; m < l.length; m++) h = l[m], k.prototype[h] = function(a) {
        return function() {
            return this.date[a]()
        }
    }(h);
    l = "setUTCDate setUTCFullYear setUTCHours setUTCMilliseconds setUTCMinutes setUTCMonth".split(" ");
    for (m = 0; m < l.length; m++) h = l[m], k.prototype[h] = function(a) {
        return function() {
            var b = this.date[a].apply(this.date, arguments);
            this.setTimezoneOffset(this.timezoneOffset);
            return b
        }
    }(h);
    var c = "Sun Mon Tue Wed Thu Fri Sat".split(" "),
        e = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
        g = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
        b = "January February March April May June July August September October November December".split(" "),
        d = function(a, b, c) {
            for (a = "" + a; a.length < c;) a = b + a;
            return a
        };
    k.prototype.getYear = function() {
        var a = "" + this.shiftedDate.getUTCFullYear();
        return parseInt(a.substring(2), 10)
    };
    k.prototype.toLocaleDateString = function() {
        return this.shiftedDate.toLocaleDateString()
    };
    k.prototype.toDateString = function() {
        return c[this.shiftedDate.getUTCDay()] + ", " + e[this.shiftedDate.getUTCMonth()] + " " + d(this.shiftedDate.getUTCDate(),
            "0", 2) + " " + this.shiftedDate.getUTCFullYear()
    };
    k.prototype.toTimeString = function() {
        return d(this.shiftedDate.getUTCHours(), "0", 2) + ":" + d(this.shiftedDate.getUTCMinutes(), "0", 2) + ":" + d(this.shiftedDate.getUTCSeconds(), "0", 2) + " " + n(this.timezoneOffset)
    };
    k.prototype.toLocaleDateString = function() {
        var a = this.date.toLocaleDateString(),
            a = a.replace(this.date.getFullYear(), this.shiftedDate.getUTCFullYear()),
            a = a.replace(g[this.date.getDay()], g[this.shiftedDate.getUTCDay()]),
            a = a.replace(b[this.date.getMonth()],
                b[this.shiftedDate.getUTCMonth()]),
            a = a.replace(this.date.getDate(), this.shiftedDate.getUTCDate()),
            c = this.date.getMonth() + 1,
            d = this.shiftedDate.getUTCMonth() + 1;
        return a = a.replace(c, d)
    };
    k.prototype.toString = function() {
        return this.toDateString() + " " + this.toTimeString()
    };
    k.prototype.toLocaleString = function() {
        var a = this.shiftedDate.toLocaleString(),
            a = a.replace(/[A-Z][a-z]{2} [A-Z][a-z]{2} \d{1,2}/, c[this.shiftedDate.getUTCDay()] + " " + e[this.shiftedDate.getUTCMonth()] + " " + this.shiftedDate.getUTCDate()),
            a =
            a.replace(/[A-Z][a-z]+day/, g[this.shiftedDate.getUTCDay()]),
            a = a.replace(/[A-Z][a-z]{3,} \d{1,2}/, b[this.shiftedDate.getUTCMonth()] + " " + this.shiftedDate.getUTCDate()),
            a = a.replace(this.date.getFullYear(), this.shiftedDate.getUTCFullYear()),
            f = this.shiftedDate,
            h = this.timezoneOffset,
            k = d(f.getUTCHours(), "0", 2),
            l = d(f.getUTCMinutes(), "0", 2),
            f = d(f.getUTCSeconds(), "0", 2),
            a = a.replace(/\d?\d:\d\d:\d\d/, k + ":" + l + ":" + f),
            a = a.replace(/ (AM|PM) [A-Z]{3}/, ""),
            a = a.replace(/ (AM|PM) ?/, ""),
            h = n(h); - 1 !== a.indexOf("GMT") &&
            (a = a.replace(/(GMT)(\+|\-)\d{4}(\s.+)?/, "GMT" + h));
        return a
    };
    k.prototype.toLocaleTimeString = function() {
        var a = this.shiftedDate,
            b = a.getUTCHours(),
            c = a.getUTCMinutes(),
            a = a.getUTCSeconds();
        10 > b && (b = "0" + b);
        10 > c && (c = "0" + c);
        10 > a && (a = "0" + a);
        return b + ":" + c + ":" + a
    };
    InFlight.define("sdk/v1/localdate", [], function() {
        return k
    })
})();
(function() {
    var n, k, m = [],
        h = !0,
        l = !1,
        c = null,
        e = function() {
            null !== c && window.clearTimeout(c);
            c = null;
            b(!1)
        },
        g = function(a) {
            var c = null;
            if ("string" === typeof a) try {
                c = JSON.parse(a)
            } catch (d) {
                InFlight.console.warn("Unable to parse native app network_connection event")
            }
            null !== c && void 0 !== c.data && "boolean" === typeof c.data.online && b(c.data.online)
        },
        b = function(a) {
            if (h !== a) {
                for (var b = {
                        event: d.Events.NET_STATE_CHANGE,
                        online: a
                    }, c = 0; c < m.length; c++) m[c](b);
                h = a
            }
        },
        d = {
            Events: {
                NET_STATE_CHANGE: "network.state_change"
            },
            onStateChange: function(a) {
                m.push(a);
                a = !1;
                if (n.getBridgeType() != n.BridgeTypes.NONE && n.getBridgeType() != n.BridgeTypes.ANDROID) {
                    var d = {
                        event: "inflight.app.network_connection"
                    };
                    try {
                        a = JSON.parse(n.call("ifapi.hasEventSupport", d))
                    } catch (h) {
                        InFlight.console.warn("Unable to detect native app network_connection event support")
                    }
                }
                a ? InFlight.addEventListener("inflight.app.network_connection", g) : l || (k.register({
                    event_name: "nop",
                    namespace: "core.event_server",
                    callback: function(a) {
                        null !== c && window.clearTimeout(c);
                        c = null;
                        b(!0);
                        c = window.setTimeout(e,
                            9E3)
                    }
                }), l = !0)
            }
        },
        a = ["sdk/v1/http", "sdk/v1/app_bridge", "sdk/v1/event"];
    JSON || a.push("sdk/v1/json2");
    InFlight.define("sdk/v1/network", a, function(a, b, c, e) {
        n = b;
        k = c;
        e && (JSON = e);
        return d
    })
})();
(function() {
    var n = function() {
            return -1 < navigator.appVersion.toLowerCase().indexOf("win")
        },
        k = function() {
            return -1 < navigator.appVersion.toLowerCase().indexOf("linux") || -1 < navigator.appVersion.toLowerCase().indexOf("unix") || -1 < navigator.platform.toLowerCase().indexOf("linux") || -1 < navigator.platform.toLowerCase().indexOf("unix")
        },
        m = function() {
            return -1 < navigator.userAgent.toLowerCase().indexOf("android")
        },
        h = function() {
            return m() && -1 < navigator.userAgent.indexOf("InFlight")
        },
        l = function() {
            var a = "00.00.00.00",
                b = /InFlight\/(\d+\.\d+\.\d+\.\d+)/.exec(navigator.userAgent);
            b && 2 <= b.length && (a = b[1]);
            return a
        },
        c = function() {
            return -1 < navigator.userAgent.toLowerCase().indexOf("blackberry")
        },
        e = function() {
            return !d() && -1 < navigator.appVersion.toLowerCase().indexOf("mac")
        },
        g = function() {
            return -1 < navigator.userAgent.toLowerCase().indexOf("iphone")
        },
        b = function() {
            return -1 < navigator.userAgent.toLowerCase().indexOf("ipod")
        },
        d = function() {
            return g() || b() || -1 < navigator.userAgent.toLowerCase().indexOf("ipad")
        },
        a = function() {
            return d() &&
                -1 < navigator.userAgent.indexOf("InFlight")
        },
        f = function() {
            return -1 < navigator.userAgent.toLowerCase().indexOf("safari") && !(-1 < navigator.userAgent.toLowerCase().indexOf("chrome"))
        },
        v = function() {
            return -1 < navigator.userAgent.toLowerCase().indexOf("chrome")
        },
        w = function() {
            return "Microsoft Internet Explorer" === navigator.appName
        },
        q = function() {
            return -1 < navigator.userAgent.toLowerCase().indexOf("firefox")
        },
        p = function() {
            return -1 < navigator.userAgent.toLowerCase().indexOf("opera")
        },
        u = function() {
            var a = navigator.userAgent.toLowerCase().match(/android [0-9]+.[0-9]+/gi);
            return a = a ? parseFloat(a[0].split(" ")[1]) : 0
        },
        r = function() {
            var a = navigator.userAgent.toLowerCase().match(/mac os x [0-9]+.[0-9]+/gi);
            return a = a ? parseFloat(a[0].split(" ")[3].replace("_", ".")) : 0
        },
        x = function() {
            var a = window.navigator.appVersion.match(/Windows NT ([^;]*)/);
            return null !== a && this.isWindows() ? parseFloat(a[1]) : 0
        },
        t = function() {
            var a = 0,
                b = /CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent);
            null !== b && (a = parseFloat(b[1].replace("undefined", "3_2").replace("_", ".").replace("_",
                "")));
            return a
        },
        E = function() {
            var a = navigator.userAgent,
                b, c = a.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*([\d\.]+)/i) || [];
            if (/trident/i.test(c[1])) return b = /\brv[ :]+([\d\.]+)/g.exec(a) || [], parseFloat(b[1] || "");
            if ("Chrome" === c[1] && (b = a.match(/\bOPR\/([\d\.]+)/), null != b)) return parseFloat(b[1]);
            c = c[2] ? [c[2]] : [navigator.appVersion];
            return null != (b = a.match(/version\/([\d\.]+)/i)) ? parseFloat(b[1]) : parseFloat(c.join(""))
        },
        D = function() {
            var a = !0;
            q() && 3.5 > E() && (a = !1);
            return a
        };
    InFlight.define("sdk/v1/platformdetection",
        function() {
            return {
                isWindows: n,
                isiOSSDK: a,
                isLinux: k,
                isAndroid: m,
                getAndroidSDKVersion: l,
                isAndroidSDK: h,
                isBlackBerry: c,
                isOSX: e,
                isiPhone: g,
                isiPod: b,
                isiOS: d,
                isFirefox: q,
                isOpera: p,
                isSafari: f,
                isChrome: v,
                isIE: w,
                getBrowserVersion: E,
                getAndroidVersion: u,
                getOSXVersion: r,
                getWindowsVersion: x,
                getiOSVersion: t,
                hasEventSourceSupport: D
            }
        })
})();
(function() {
    var n = {};
    n.isArray = Array.isArray ? Array.isArray : function(k) {
        return !!k && "[object Array]" === Object.prototype.toString.call(k)
    };
    n.decodeFormURLEncoded = function(k) {
        var m = {};
        if (!k) return m;
        k = k.split("&");
        for (var h = 0; h < k.length; h++) {
            var l = k[h].split("=");
            1 === l.length && "" !== l[0] ? m[decodeURIComponent(l[0])] = "" : 2 === l.length && (m[decodeURIComponent(l[0])] = decodeURIComponent(l[1]))
        }
        return m
    };
    n.debounce = function(k, m, h) {
        var l, c, e, g, b, d = function() {
            var a = n.now() - g;
            a < m ? l = setTimeout(d, m - a) : (l = null, h || (b =
                k.apply(e, c), e = c = null))
        };
        return function() {
            e = this;
            c = arguments;
            g = n.now();
            var a = h && !l;
            l || (l = setTimeout(d, m));
            a && (b = k.apply(e, c), e = c = null);
            return b
        }
    };
    n.now = Date.now || function() {
        return (new Date).getTime()
    };
    InFlight.define("sdk/v1/util", [], function() {
        return n
    })
})();
(function() {
    var n = {};
    (function() {
        function k(a, c) {
            var d = c || 0,
                e = b;
            return e[a[d++]] + e[a[d++]] + e[a[d++]] + e[a[d++]] + "-" + e[a[d++]] + e[a[d++]] + "-" + e[a[d++]] + e[a[d++]] + "-" + e[a[d++]] + e[a[d++]] + "-" + e[a[d++]] + e[a[d++]] + e[a[d++]] + e[a[d++]] + e[a[d++]] + e[a[d++]]
        }
        var m;
        if ("function" == typeof require) try {
            var h = require("crypto").randomBytes;
            m = h && function() {
                return h(16)
            }
        } catch (l) {}
        if (!m && this.crypto && crypto.getRandomValues) {
            var c = new Uint8Array(16);
            m = function() {
                crypto.getRandomValues(c);
                return c
            }
        }
        if (!m) {
            var e = Array(16);
            m = function() {
                for (var a = 0, b; 16 > a; a++) 0 === (a & 3) && (b = 4294967296 * Math.random()), e[a] = b >>> ((a & 3) << 3) & 255;
                return e
            }
        }
        for (var g = "function" == typeof Buffer ? Buffer : Array, b = [], d = {}, a = 0; 256 > a; a++) b[a] = (a + 256).toString(16).substr(1), d[b[a]] = a;
        var a = m(),
            f = [a[0] | 1, a[1], a[2], a[3], a[4], a[5]],
            n = (a[6] << 8 | a[7]) & 16383,
            w = 0,
            q = 0,
            a = {
                v1: function(a, b, c) {
                    c = b && c || 0;
                    var d = b || [];
                    a = a || {};
                    var e = null != a.clockseq ? a.clockseq : n,
                        g = null != a.msecs ? a.msecs : (new Date).getTime(),
                        h = null != a.nsecs ? a.nsecs : q + 1,
                        l = g - w + (h - q) / 1E4;
                    0 > l && null == a.clockseq &&
                        (e = e + 1 & 16383);
                    (0 > l || g > w) && null == a.nsecs && (h = 0);
                    if (1E4 <= h) throw Error("uuid.v1(): Can't create more than 10M uuids/sec");
                    w = g;
                    q = h;
                    n = e;
                    g += 122192928E5;
                    h = (1E4 * (g & 268435455) + h) % 4294967296;
                    d[c++] = h >>> 24 & 255;
                    d[c++] = h >>> 16 & 255;
                    d[c++] = h >>> 8 & 255;
                    d[c++] = h & 255;
                    g = g / 4294967296 * 1E4 & 268435455;
                    d[c++] = g >>> 8 & 255;
                    d[c++] = g & 255;
                    d[c++] = g >>> 24 & 15 | 16;
                    d[c++] = g >>> 16 & 255;
                    d[c++] = e >>> 8 | 128;
                    d[c++] = e & 255;
                    a = a.node || f;
                    for (e = 0; 6 > e; e++) d[c + e] = a[e];
                    return b ? b : k(d)
                },
                v4: function(a, b, c) {
                    c = b && c || 0;
                    "string" == typeof a && (b = "binary" == a ? new g(16) :
                        null, a = null);
                    a = a || {};
                    a = a.random || (a.rng || m)();
                    a[6] = a[6] & 15 | 64;
                    a[8] = a[8] & 63 | 128;
                    if (b)
                        for (var d = 0; 16 > d; d++) b[c + d] = a[d];
                    return b || k(a)
                },
                parse: function(a, b, c) {
                    var e = b && c || 0,
                        f = 0;
                    b = b || [];
                    for (a.toLowerCase().replace(/[0-9a-f]{2}/g, function(a) {
                            16 > f && (b[e + f++] = d[a])
                        }); 16 > f;) b[e + f++] = 0;
                    return b
                }
            };
        a.unparse = k;
        a.BufferClass = g;
        this.uuid = a
    }).call(n);
    InFlight.define("sdk/v1/uuid", function() {
        return n.uuid
    })
})();
(function() {
    var e;

    function g(a) {
        this.method = "string" === typeof a.method ? a.method : "GET";
        switch (this.method.toUpperCase()) {
            case "GET":
                this.method = "GET";
                break;
            case "POST":
                this.method = "POST"
        }
        this.url = "string" === typeof a.url ? a.url : "";
        this.query = "object" === typeof a.query ? a.query : null;
        this.data = void 0 !== a.data ? a.data : null;
        this.headers = "object" === typeof a.headers ? a.headers : null;
        this.synchronous = !0 === a.synchronous;
        this.timeout = isNaN(a.timeout) ? 0 : a.timeout
    };

    function h(a, c, b) {
        this.body = a;
        this.code = c;
        this.headers = void 0 !== b ? b : null
    };

    function k(a) {
        var c = null,
            b;
        b = [];
        for (c in a) b.push(encodeURIComponent(c) + "=" + encodeURIComponent(a[c]));
        return b.join("&")
    }

    function l(a, c) {
        var b = a,
            d = "";
        null !== c && (d = k(c));
        b = 0 < b.indexOf("?") ? b + "&" : b + "?";
        return b + d
    };
    var m = window.JSON;

    function n(a, c, b) {
        var d = this,
            f = {};
        this.callback = c;
        this.e = b;
        this.responseType = this.d = this.b = this.c = null;
        this.setData(a.data);
        this.a = new XDomainRequest;
        this.a.timeout = a.timeout;
        this.a.ontimeout = function() {
            d.l()
        };
        this.a.onload = function() {
            var a = null,
                b = null;
            try {
                a = m.parse(d.a.responseText)
            } catch (c) {
                b = c
            }
            d.b = null === a || isNaN(a.code) ? 200 : a.code;
            switch (d.responseType) {
                case "json":
                    null !== b ? d.c = {
                        code: 500,
                        text: ""
                    } : d.d = a;
                    break;
                default:
                    d.d = d.a.responseText
            }
            d.f()
        };
        this.a.onerror = function() {
            d.c = {
                code: 500,
                text: ""
            };
            d.f()
        };
        this.a.onprogress = function() {};
        "HEAD" === a.method && (a.method = "GET");
        f.xdr = 1;
        f.t = (new Date).getTime();
        a.url = l(a.url, f);
        null !== a.query && (a.url = l(a.url, a.query));
        this.a.open(a.method, a.url)
    }
    e = n.prototype;
    e.load = function() {
        this.a.send(this.data)
    };
    e.i = function() {
        this.g();
        delete this.data;
        delete this.responseType;
        this.e = this.callback = this.c = this.b = this.d = this.a = null
    };
    e.g = function() {
        null !== this.a && (this.a.onload = null, this.a.onprogress = null, this.a.ontimeout = null, this.a.onerror = null, this.a.abort(), this.a = null)
    };
    e.h = function(a) {
        this.responseType = a
    };
    e.j = function() {
        var a = null;
        null === this.c && null !== this.d && null !== this.b && (a = new h(this.d, this.b));
        this.callback.call(this, this.c, a)
    };
    e.f = function() {
        this.g();
        null !== this.e && this.e.call(this)
    };
    e.setData = function(a) {
        if (null !== a) switch (a.constructor) {
            case window.String:
                this.data = a;
                break;
            case window.Object:
                this.data = k(a)
        }
    };
    e.l = function() {
        this.b = 408;
        this.d = '{ "code": ' + this.b + ',  "text":"" }';
        this.f()
    };

    function p(a, c, b) {
        this.o = a;
        this.c = this.m = this.responseType = null;
        this.callback = c;
        this.e = b;
        null === q && (q = document.createElement("iframe"), q.style.display = "none", q.src = window.InFlight.replaceHost("https://api.inflightpanasonic.aero/inflight/static/sdk/v1/proxy-iframe.html"), q.attachEvent("onreadystatechange", r), document.body.appendChild(q), window.attachEvent("onmessage", t))
    }
    e = p.prototype;
    e.load = function() {
        switch (q.readyState) {
            case "interactive":
            case "complete":
                u(this);
                break;
            default:
                null === v && (v = []), v.push(this)
        }
    };

    function u(a) {
        var c = {
            id: ++w,
            arguments: a.o,
            responseType: a.responseType
        };
        a.p = c.id;
        null === x && (x = []);
        x.push(a);
        q.contentWindow.postMessage(m.stringify(c), "*")
    }
    e.h = function(a) {
        this.responseType = a
    };
    e.j = function() {
        this.callback.call(this, this.c, this.m)
    };
    e.i = function() {
        delete this.o;
        delete this.p;
        this.e = this.callback = this.c = this.m = this.responseType = null
    };
    e.f = function(a, c) {
        this.c = a;
        this.m = c;
        null !== this.e && this.e.call(this)
    };

    function t(a) {
        var c, b = m.parse(a.data);
        if (null !== x) {
            for (a = 0; a < x.length; a++) c = x[a], c.p === b.id && (c.f(b.error, b.response), x.splice(a, 1));
            0 == x.length && (x = null)
        }
        null === x && null === v && (w = 0)
    }

    function r() {
        var a;
        switch (q.readyState) {
            case "interactive":
            case "complete":
                q.detachEvent("onreadystatechange", r);
                break;
            default:
                return
        }
        if (null !== v) {
            for (; 0 < v.length;) a = v.pop(), u(a);
            v = null
        }
    }
    var q = null,
        v = null,
        x = null,
        w = 0;

    function y(a, c, b) {
        var d = null,
            f = this;
        this.callback = c;
        this.e = b;
        this.responseType = this.d = this.b = this.n = this.c = null;
        this.a = new XMLHttpRequest;
        null !== a.query && (a.url = l(a.url, a.query));
        this.a.open(a.method, a.url, !a.synchronous);
        this.k = a.synchronous;
        this.k || (this.a.timeout = a.timeout, this.a.ontimeout = function() {
            f.l()
        }, this.a.onreadystatechange = function() {
            switch (f.a.readyState) {
                case 4:
                    f.f()
            }
        });
        this.setData(a.data);
        if (null !== a.headers)
            for (d in a.headers) this.a.setRequestHeader(d, a.headers[d])
    }
    e = y.prototype;
    e.load = function() {
        this.a.send(this.data);
        this.k && this.f()
    };
    e.i = function() {
        this.g();
        this.e = this.callback = this.c = this.n = this.responseType = this.b = this.d = this.a = this.data = null;
        delete this.k
    };
    e.h = function(a) {
        this.responseType = a
    };
    e.j = function() {
        var a = null;
        null === this.c && null !== this.d && null !== this.b && (a = new h(this.d, this.b, this.n));
        this.callback.call(this, this.c, a)
    };
    e.setData = function(a) {
        if (null !== a) switch (a.constructor) {
            case window.ArrayBuffer:
            case window.ArrayBufferView:
            case window.Blob:
            case window.Document:
            case window.FormData:
            case window.String:
                this.data = a;
                break;
            case window.Object:
                this.data = k(a)
        }
    };
    e.f = function() {
        if (null === this.c)
            if (this.b = this.a.status, 0 == this.b || 408 == this.b) this.b = 408, this.d = '{ "code": ' + this.b + ',  "text":"" }';
            else {
                var a, c, b, d, f = {};
                a = this.a.getAllResponseHeaders();
                if (null !== a)
                    for (d = a.split("\n"), a = 0; a < d.length; a++) "" !== d[a] && (b = d[a].indexOf(": "), c = d[a].slice(0, b).toLowerCase(), f[c] = d[a].slice(b + 1), f[c] = f[c].replace(/^\s+|\s+$/g, ""));
                this.n = f;
                switch (this.responseType) {
                    case "json":
                        try {
                            this.d = m.parse(this.a.responseText)
                        } catch (K) {
                            this.d = null, this.c = {
                                code: 500,
                                text: ""
                            }
                        }
                        break;
                    default:
                        this.d = this.a.responseText
                }
            }
        this.g();
        null !== this.e && this.e.call(this)
    };
    e.g = function() {
        if (null !== this.a) {
            this.a.ontimeout = null;
            this.a.onreadystatechange = null;
            this.a.abort();
            try {
                this.a.responseText = "", this.a.q = null, this.a.response = null
            } catch (a) {}
            this.a = null
        }
    };
    e.l = function() {
        this.f()
    };
    var z = null;

    function A(a, c) {
        var b = B,
            d = null,
            d = new g(a),
            f;
        null === z && (f = new XMLHttpRequest, z = void 0 !== f.withCredentials ? !0 : !1);
        return d = z ? new y(d, c, b) : void 0 !== window.XDomainRequest ? "http:" === window.location.protocol && 0 === d.url.indexOf("https://") ? new p(d, c, b) : new n(d, c, b) : new y(d, c, b)
    };

    function C(a, c) {
        var b = A(a, c);
        D(b);
        b.load()
    }

    function E(a, c) {
        a.method = "HEAD";
        var b = A(a, c);
        D(b);
        b.load()
    }

    function F(a, c) {
        a.method = "GET";
        var b = A(a, c);
        b.h("json");
        D(b);
        b.load()
    }

    function G(a, c) {
        var b, d = "application/x-www-form-urlencoded";
        void 0 === a.headers && (a.headers = {});
        for (b in a.headers)
            if ("string" === typeof b && "content-type" === b.toLowerCase()) {
                d = a.headers[b];
                delete a.headers[b];
                break
            }
        a.headers["Content-Type"] = d;
        a.method = "POST";
        b = A(a, c);
        D(b);
        b.load()
    }

    function H(a, c) {
        var b, d = "application/x-www-form-urlencoded";
        void 0 === a.headers && (a.headers = {});
        for (b in a.headers)
            if ("string" === typeof b && "content-type" === b.toLowerCase()) {
                d = a.headers[b];
                delete a.headers[b];
                break
            }
        a.headers["Content-Type"] = d;
        a.method = "POST";
        b = A(a, c);
        b.h("json");
        D(b);
        b.load()
    }

    function D(a) {
        null === I && (I = []);
        I.push(a)
    }

    function B() {
        var a = null;
        a: {
            var c;
            if (null !== I) {
                for (c = 0; c < I.length; c++)
                    if (I[c] === this) {
                        I.splice(c, 1);
                        break a
                    }
                0 == I.length && (I = null)
            }
        }
        try {
            this.j()
        } catch (b) {
            a = b
        }
        this.i();
        if (null !== a) throw a;
    }
    var I = null;
    var J = [];
    J.push("sdk/v1/json2");
    window.InFlight.define("sdk/v1/http", J, function(a) {
        var c = {
            head: E,
            get: C,
            getJSON: F,
            post: G,
            postJSON: H
        };
        null !== m && (m = a);
        return c
    });
})()
