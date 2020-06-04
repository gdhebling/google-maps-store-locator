<!DOCTYPE html>
<html lang="en-US" class="no-js fonts-loading">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta property="twitter:card" content="summary">
        <meta property="twitter:site" content="@starbucks">
        <meta property="twitter:creator" content="@starbucksprtnrs">
        <meta property="og:title" content="Starbucks®">
        <meta property="og:image" data-hid="image" content="https://app.starbucks.com/weblx/images/social/summary_square.png">
        <meta property="twitter:image" data-hid="twitter:image" content="https://app.starbucks.com/weblx/images/social/summary_image.png">
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
        <script type='text/javascript'>
            window.NREUM || (NREUM = {});
            NREUM.info = {
                "agent": "",
                "beacon": "bam.nr-data.net",
                "errorBeacon": "bam.nr-data.net",
                "licenseKey": "671cca5e0f",
                "applicationID": "24549142",
                "applicationTime": 276.234722,
                "transactionName": "NQMBZkJRXEAEAhJQCgxJJkpAQldAFgsVFiInMkwdQ0RdQQBMClYGAxIMQA==",
                "queueTime": 0,
                "ttGuid": "7a2fbdd6760d7fb2",
                "agentToken": null
            };
            (window.NREUM || (NREUM = {})).loader_config = {
                xpid: "VQUHVlNSARACUFRWDgADVA==",
                licenseKey: "671cca5e0f",
                applicationID: "24549142"
            };
            window.NREUM || (NREUM = {}),
            __nr_require = function(t, e, n) {
                function r(n) {
                    if (!e[n]) {
                        var o = e[n] = {
                            exports: {}
                        };
                        t[n][0].call(o.exports, function(e) {
                            var o = t[n][1][e];
                            return r(o || e)
                        }, o, o.exports)
                    }
                    return e[n].exports
                }
                if ("function" == typeof __nr_require)
                    return __nr_require;
                for (var o = 0; o < n.length; o++)
                    r(n[o]);
                return r
            }({
                1: [function(t, e, n) {
                    function r(t) {
                        try {
                            s.console && console.log(t)
                        } catch (e) {}
                    }
                    var o, i = t("ee"), a = t(25), s = {};
                    try {
                        o = localStorage.getItem("__nr_flags").split(","),
                        console && "function" == typeof console.log && (s.console = !0,
                        o.indexOf("dev") !== -1 && (s.dev = !0),
                        o.indexOf("nr_dev") !== -1 && (s.nrDev = !0))
                    } catch (c) {}
                    s.nrDev && i.on("internal-error", function(t) {
                        r(t.stack)
                    }),
                    s.dev && i.on("fn-err", function(t, e, n) {
                        r(n.stack)
                    }),
                    s.dev && (r("NR AGENT IN DEVELOPMENT MODE"),
                    r("flags: " + a(s, function(t, e) {
                        return t
                    }).join(", ")))
                }
                , {}],
                2: [function(t, e, n) {
                    function r(t, e, n, r, s) {
                        try {
                            l ? l -= 1 : o(s || new UncaughtException(t,e,n), !0)
                        } catch (f) {
                            try {
                                i("ierr", [f, c.now(), !0])
                            } catch (d) {}
                        }
                        return "function" == typeof u && u.apply(this, a(arguments))
                    }
                    function UncaughtException(t, e, n) {
                        this.message = t || "Uncaught error with no additional information",
                        this.sourceURL = e,
                        this.line = n
                    }
                    function o(t, e) {
                        var n = e ? null : c.now();
                        i("err", [t, n])
                    }
                    var i = t("handle")
                      , a = t(26)
                      , s = t("ee")
                      , c = t("loader")
                      , f = t("gos")
                      , u = window.onerror
                      , d = !1
                      , p = "nr@seenError"
                      , l = 0;
                    c.features.err = !0,
                    t(1),
                    window.onerror = r;
                    try {
                        throw new Error
                    } catch (h) {
                        "stack"in h && (t(13),
                        t(12),
                        "addEventListener"in window && t(6),
                        c.xhrWrappable && t(14),
                        d = !0)
                    }
                    s.on("fn-start", function(t, e, n) {
                        d && (l += 1)
                    }),
                    s.on("fn-err", function(t, e, n) {
                        d && !n[p] && (f(n, p, function() {
                            return !0
                        }),
                        this.thrown = !0,
                        o(n))
                    }),
                    s.on("fn-end", function() {
                        d && !this.thrown && l > 0 && (l -= 1)
                    }),
                    s.on("internal-error", function(t) {
                        i("ierr", [t, c.now(), !0])
                    })
                }
                , {}],
                3: [function(t, e, n) {
                    t("loader").features.ins = !0
                }
                , {}],
                4: [function(t, e, n) {
                    function r() {
                        L++,
                        C = g.hash,
                        this[u] = y.now()
                    }
                    function o() {
                        L--,
                        g.hash !== C && i(0, !0);
                        var t = y.now();
                        this[h] = ~~this[h] + t - this[u],
                        this[d] = t
                    }
                    function i(t, e) {
                        E.emit("newURL", ["" + g, e])
                    }
                    function a(t, e) {
                        t.on(e, function() {
                            this[e] = y.now()
                        })
                    }
                    var s = "-start"
                      , c = "-end"
                      , f = "-body"
                      , u = "fn" + s
                      , d = "fn" + c
                      , p = "cb" + s
                      , l = "cb" + c
                      , h = "jsTime"
                      , m = "fetch"
                      , v = "addEventListener"
                      , w = window
                      , g = w.location
                      , y = t("loader");
                    if (w[v] && y.xhrWrappable) {
                        var x = t(10)
                          , b = t(11)
                          , E = t(8)
                          , O = t(6)
                          , R = t(13)
                          , P = t(7)
                          , T = t(14)
                          , N = t(9)
                          , M = t("ee")
                          , S = M.get("tracer");
                        t(16),
                        y.features.spa = !0;
                        var C, L = 0;
                        M.on(u, r),
                        M.on(p, r),
                        M.on(d, o),
                        M.on(l, o),
                        M.buffer([u, d, "xhr-done", "xhr-resolved"]),
                        O.buffer([u]),
                        R.buffer(["setTimeout" + c, "clearTimeout" + s, u]),
                        T.buffer([u, "new-xhr", "send-xhr" + s]),
                        P.buffer([m + s, m + "-done", m + f + s, m + f + c]),
                        E.buffer(["newURL"]),
                        x.buffer([u]),
                        b.buffer(["propagate", p, l, "executor-err", "resolve" + s]),
                        S.buffer([u, "no-" + u]),
                        N.buffer(["new-jsonp", "cb-start", "jsonp-error", "jsonp-end"]),
                        a(T, "send-xhr" + s),
                        a(M, "xhr-resolved"),
                        a(M, "xhr-done"),
                        a(P, m + s),
                        a(P, m + "-done"),
                        a(N, "new-jsonp"),
                        a(N, "jsonp-end"),
                        a(N, "cb-start"),
                        E.on("pushState-end", i),
                        E.on("replaceState-end", i),
                        w[v]("hashchange", i, !0),
                        w[v]("load", i, !0),
                        w[v]("popstate", function() {
                            i(0, L > 1)
                        }, !0)
                    }
                }
                , {}],
                5: [function(t, e, n) {
                    function r(t) {}
                    if (window.performance && window.performance.timing && window.performance.getEntriesByType) {
                        var o = t("ee")
                          , i = t("handle")
                          , a = t(13)
                          , s = t(12)
                          , c = "learResourceTimings"
                          , f = "addEventListener"
                          , u = "resourcetimingbufferfull"
                          , d = "bstResource"
                          , p = "resource"
                          , l = "-start"
                          , h = "-end"
                          , m = "fn" + l
                          , v = "fn" + h
                          , w = "bstTimer"
                          , g = "pushState"
                          , y = t("loader");
                        y.features.stn = !0,
                        t(8),
                        "addEventListener"in window && t(6);
                        var x = NREUM.o.EV;
                        o.on(m, function(t, e) {
                            var n = t[0];
                            n instanceof x && (this.bstStart = y.now())
                        }),
                        o.on(v, function(t, e) {
                            var n = t[0];
                            n instanceof x && i("bst", [n, e, this.bstStart, y.now()])
                        }),
                        a.on(m, function(t, e, n) {
                            this.bstStart = y.now(),
                            this.bstType = n
                        }),
                        a.on(v, function(t, e) {
                            i(w, [e, this.bstStart, y.now(), this.bstType])
                        }),
                        s.on(m, function() {
                            this.bstStart = y.now()
                        }),
                        s.on(v, function(t, e) {
                            i(w, [e, this.bstStart, y.now(), "requestAnimationFrame"])
                        }),
                        o.on(g + l, function(t) {
                            this.time = y.now(),
                            this.startPath = location.pathname + location.hash
                        }),
                        o.on(g + h, function(t) {
                            i("bstHist", [location.pathname + location.hash, this.startPath, this.time])
                        }),
                        f in window.performance && (window.performance["c" + c] ? window.performance[f](u, function(t) {
                            i(d, [window.performance.getEntriesByType(p)]),
                            window.performance["c" + c]()
                        }, !1) : window.performance[f]("webkit" + u, function(t) {
                            i(d, [window.performance.getEntriesByType(p)]),
                            window.performance["webkitC" + c]()
                        }, !1)),
                        document[f]("scroll", r, {
                            passive: !0
                        }),
                        document[f]("keypress", r, !1),
                        document[f]("click", r, !1)
                    }
                }
                , {}],
                6: [function(t, e, n) {
                    function r(t) {
                        for (var e = t; e && !e.hasOwnProperty(u); )
                            e = Object.getPrototypeOf(e);
                        e && o(e)
                    }
                    function o(t) {
                        s.inPlace(t, [u, d], "-", i)
                    }
                    function i(t, e) {
                        return t[1]
                    }
                    var a = t("ee").get("events")
                      , s = t("wrap-function")(a, !0)
                      , c = t("gos")
                      , f = XMLHttpRequest
                      , u = "addEventListener"
                      , d = "removeEventListener";
                    e.exports = a,
                    "getPrototypeOf"in Object ? (r(document),
                    r(window),
                    r(f.prototype)) : f.prototype.hasOwnProperty(u) && (o(window),
                    o(f.prototype)),
                    a.on(u + "-start", function(t, e) {
                        var n = t[1]
                          , r = c(n, "nr@wrapped", function() {
                            function t() {
                                if ("function" == typeof n.handleEvent)
                                    return n.handleEvent.apply(n, arguments)
                            }
                            var e = {
                                object: t,
                                "function": n
                            }[typeof n];
                            return e ? s(e, "fn-", null, e.name || "anonymous") : n
                        });
                        this.wrapped = t[1] = r
                    }),
                    a.on(d + "-start", function(t) {
                        t[1] = this.wrapped || t[1]
                    })
                }
                , {}],
                7: [function(t, e, n) {
                    function r(t, e, n) {
                        var r = t[e];
                        "function" == typeof r && (t[e] = function() {
                            var t = i(arguments)
                              , e = {};
                            o.emit(n + "before-start", [t], e);
                            var a;
                            e[m] && e[m].dt && (a = e[m].dt);
                            var s = r.apply(this, t);
                            return o.emit(n + "start", [t, a], s),
                            s.then(function(t) {
                                return o.emit(n + "end", [null, t], s),
                                t
                            }, function(t) {
                                throw o.emit(n + "end", [t], s),
                                t
                            })
                        }
                        )
                    }
                    var o = t("ee").get("fetch")
                      , i = t(26)
                      , a = t(25);
                    e.exports = o;
                    var s = window
                      , c = "fetch-"
                      , f = c + "body-"
                      , u = ["arrayBuffer", "blob", "json", "text", "formData"]
                      , d = s.Request
                      , p = s.Response
                      , l = s.fetch
                      , h = "prototype"
                      , m = "nr@context";
                    d && p && l && (a(u, function(t, e) {
                        r(d[h], e, f),
                        r(p[h], e, f)
                    }),
                    r(s, "fetch", c),
                    o.on(c + "end", function(t, e) {
                        var n = this;
                        if (e) {
                            var r = e.headers.get("content-length");
                            null !== r && (n.rxSize = r),
                            o.emit(c + "done", [null, e], n)
                        } else
                            o.emit(c + "done", [t], n)
                    }))
                }
                , {}],
                8: [function(t, e, n) {
                    var r = t("ee").get("history")
                      , o = t("wrap-function")(r);
                    e.exports = r;
                    var i = window.history && window.history.constructor && window.history.constructor.prototype
                      , a = window.history;
                    i && i.pushState && i.replaceState && (a = i),
                    o.inPlace(a, ["pushState", "replaceState"], "-")
                }
                , {}],
                9: [function(t, e, n) {
                    function r(t) {
                        function e() {
                            c.emit("jsonp-end", [], p),
                            t.removeEventListener("load", e, !1),
                            t.removeEventListener("error", n, !1)
                        }
                        function n() {
                            c.emit("jsonp-error", [], p),
                            c.emit("jsonp-end", [], p),
                            t.removeEventListener("load", e, !1),
                            t.removeEventListener("error", n, !1)
                        }
                        var r = t && "string" == typeof t.nodeName && "script" === t.nodeName.toLowerCase();
                        if (r) {
                            var o = "function" == typeof t.addEventListener;
                            if (o) {
                                var a = i(t.src);
                                if (a) {
                                    var u = s(a)
                                      , d = "function" == typeof u.parent[u.key];
                                    if (d) {
                                        var p = {};
                                        f.inPlace(u.parent, [u.key], "cb-", p),
                                        t.addEventListener("load", e, !1),
                                        t.addEventListener("error", n, !1),
                                        c.emit("new-jsonp", [t.src], p)
                                    }
                                }
                            }
                        }
                    }
                    function o() {
                        return "addEventListener"in window
                    }
                    function i(t) {
                        var e = t.match(u);
                        return e ? e[1] : null
                    }
                    function a(t, e) {
                        var n = t.match(p)
                          , r = n[1]
                          , o = n[3];
                        return o ? a(o, e[r]) : e[r]
                    }
                    function s(t) {
                        var e = t.match(d);
                        return e && e.length >= 3 ? {
                            key: e[2],
                            parent: a(e[1], window)
                        } : {
                            key: t,
                            parent: window
                        }
                    }
                    var c = t("ee").get("jsonp")
                      , f = t("wrap-function")(c);
                    if (e.exports = c,
                    o()) {
                        var u = /[?&](?:callback|cb)=([^&#]+)/
                          , d = /(.*)\.([^.]+)/
                          , p = /^(\w+)(\.|$)(.*)$/
                          , l = ["appendChild", "insertBefore", "replaceChild"];
                        Node && Node.prototype && Node.prototype.appendChild ? f.inPlace(Node.prototype, l, "dom-") : (f.inPlace(HTMLElement.prototype, l, "dom-"),
                        f.inPlace(HTMLHeadElement.prototype, l, "dom-"),
                        f.inPlace(HTMLBodyElement.prototype, l, "dom-")),
                        c.on("dom-start", function(t) {
                            r(t[0])
                        })
                    }
                }
                , {}],
                10: [function(t, e, n) {
                    var r = t("ee").get("mutation")
                      , o = t("wrap-function")(r)
                      , i = NREUM.o.MO;
                    e.exports = r,
                    i && (window.MutationObserver = function(t) {
                        return this instanceof i ? new i(o(t, "fn-")) : i.apply(this, arguments)
                    }
                    ,
                    MutationObserver.prototype = i.prototype)
                }
                , {}],
                11: [function(t, e, n) {
                    function r(t) {
                        var e = a.context()
                          , n = s(t, "executor-", e)
                          , r = new f(n);
                        return a.context(r).getCtx = function() {
                            return e
                        }
                        ,
                        a.emit("new-promise", [r, e], e),
                        r
                    }
                    function o(t, e) {
                        return e
                    }
                    var i = t("wrap-function")
                      , a = t("ee").get("promise")
                      , s = i(a)
                      , c = t(25)
                      , f = NREUM.o.PR;
                    e.exports = a,
                    f && (window.Promise = r,
                    ["all", "race"].forEach(function(t) {
                        var e = f[t];
                        f[t] = function(n) {
                            function r(t) {
                                return function() {
                                    a.emit("propagate", [null, !o], i),
                                    o = o || !t
                                }
                            }
                            var o = !1;
                            c(n, function(e, n) {
                                Promise.resolve(n).then(r("all" === t), r(!1))
                            });
                            var i = e.apply(f, arguments)
                              , s = f.resolve(i);
                            return s
                        }
                    }),
                    ["resolve", "reject"].forEach(function(t) {
                        var e = f[t];
                        f[t] = function(t) {
                            var n = e.apply(f, arguments);
                            return t !== n && a.emit("propagate", [t, !0], n),
                            n
                        }
                    }),
                    f.prototype["catch"] = function(t) {
                        return this.then(null, t)
                    }
                    ,
                    f.prototype = Object.create(f.prototype, {
                        constructor: {
                            value: r
                        }
                    }),
                    c(Object.getOwnPropertyNames(f), function(t, e) {
                        try {
                            r[e] = f[e]
                        } catch (n) {}
                    }),
                    a.on("executor-start", function(t) {
                        t[0] = s(t[0], "resolve-", this),
                        t[1] = s(t[1], "resolve-", this)
                    }),
                    a.on("executor-err", function(t, e, n) {
                        t[1](n)
                    }),
                    s.inPlace(f.prototype, ["then"], "then-", o),
                    a.on("then-start", function(t, e) {
                        this.promise = e,
                        t[0] = s(t[0], "cb-", this),
                        t[1] = s(t[1], "cb-", this)
                    }),
                    a.on("then-end", function(t, e, n) {
                        this.nextPromise = n;
                        var r = this.promise;
                        a.emit("propagate", [r, !0], n)
                    }),
                    a.on("cb-end", function(t, e, n) {
                        a.emit("propagate", [n, !0], this.nextPromise)
                    }),
                    a.on("propagate", function(t, e, n) {
                        this.getCtx && !e || (this.getCtx = function() {
                            if (t instanceof Promise)
                                var e = a.context(t);
                            return e && e.getCtx ? e.getCtx() : this
                        }
                        )
                    }),
                    r.toString = function() {
                        return "" + f
                    }
                    )
                }
                , {}],
                12: [function(t, e, n) {
                    var r = t("ee").get("raf")
                      , o = t("wrap-function")(r)
                      , i = "equestAnimationFrame";
                    e.exports = r,
                    o.inPlace(window, ["r" + i, "mozR" + i, "webkitR" + i, "msR" + i], "raf-"),
                    r.on("raf-start", function(t) {
                        t[0] = o(t[0], "fn-")
                    })
                }
                , {}],
                13: [function(t, e, n) {
                    function r(t, e, n) {
                        t[0] = a(t[0], "fn-", null, n)
                    }
                    function o(t, e, n) {
                        this.method = n,
                        this.timerDuration = isNaN(t[1]) ? 0 : +t[1],
                        t[0] = a(t[0], "fn-", this, n)
                    }
                    var i = t("ee").get("timer")
                      , a = t("wrap-function")(i)
                      , s = "setTimeout"
                      , c = "setInterval"
                      , f = "clearTimeout"
                      , u = "-start"
                      , d = "-";
                    e.exports = i,
                    a.inPlace(window, [s, "setImmediate"], s + d),
                    a.inPlace(window, [c], c + d),
                    a.inPlace(window, [f, "clearImmediate"], f + d),
                    i.on(c + u, r),
                    i.on(s + u, o)
                }
                , {}],
                14: [function(t, e, n) {
                    function r(t, e) {
                        d.inPlace(e, ["onreadystatechange"], "fn-", s)
                    }
                    function o() {
                        var t = this
                          , e = u.context(t);
                        t.readyState > 3 && !e.resolved && (e.resolved = !0,
                        u.emit("xhr-resolved", [], t)),
                        d.inPlace(t, g, "fn-", s)
                    }
                    function i(t) {
                        y.push(t),
                        h && (b ? b.then(a) : v ? v(a) : (E = -E,
                        O.data = E))
                    }
                    function a() {
                        for (var t = 0; t < y.length; t++)
                            r([], y[t]);
                        y.length && (y = [])
                    }
                    function s(t, e) {
                        return e
                    }
                    function c(t, e) {
                        for (var n in t)
                            e[n] = t[n];
                        return e
                    }
                    t(6);
                    var f = t("ee")
                      , u = f.get("xhr")
                      , d = t("wrap-function")(u)
                      , p = NREUM.o
                      , l = p.XHR
                      , h = p.MO
                      , m = p.PR
                      , v = p.SI
                      , w = "readystatechange"
                      , g = ["onload", "onerror", "onabort", "onloadstart", "onloadend", "onprogress", "ontimeout"]
                      , y = [];
                    e.exports = u;
                    var x = window.XMLHttpRequest = function(t) {
                        var e = new l(t);
                        try {
                            u.emit("new-xhr", [e], e),
                            e.addEventListener(w, o, !1)
                        } catch (n) {
                            try {
                                u.emit("internal-error", [n])
                            } catch (r) {}
                        }
                        return e
                    }
                    ;
                    if (c(l, x),
                    x.prototype = l.prototype,
                    d.inPlace(x.prototype, ["open", "send"], "-xhr-", s),
                    u.on("send-xhr-start", function(t, e) {
                        r(t, e),
                        i(e)
                    }),
                    u.on("open-xhr-start", r),
                    h) {
                        var b = m && m.resolve();
                        if (!v && !m) {
                            var E = 1
                              , O = document.createTextNode(E);
                            new h(a).observe(O, {
                                characterData: !0
                            })
                        }
                    } else
                        f.on("fn-end", function(t) {
                            t[0] && t[0].type === w || a()
                        })
                }
                , {}],
                15: [function(t, e, n) {
                    function r(t) {
                        if (!i(t))
                            return null;
                        var e = window.NREUM;
                        if (!e.loader_config)
                            return null;
                        var n = (e.loader_config.accountID || "").toString() || null
                          , r = (e.loader_config.agentID || "").toString() || null
                          , s = (e.loader_config.trustKey || "").toString() || null;
                        if (!n || !r)
                            return null;
                        var c = a.generateCatId()
                          , f = a.generateCatId()
                          , u = Date.now()
                          , d = o(c, f, u, n, r, s);
                        return {
                            header: d,
                            guid: c,
                            traceId: f,
                            timestamp: u
                        }
                    }
                    function o(t, e, n, r, o, i) {
                        var a = "btoa"in window && "function" == typeof window.btoa;
                        if (!a)
                            return null;
                        var s = {
                            v: [0, 1],
                            d: {
                                ty: "Browser",
                                ac: r,
                                ap: o,
                                id: t,
                                tr: e,
                                ti: n
                            }
                        };
                        return i && r !== i && (s.d.tk = i),
                        btoa(JSON.stringify(s))
                    }
                    function i(t) {
                        var e = !1
                          , n = !1
                          , r = {};
                        if ("init"in NREUM && "distributed_tracing"in NREUM.init && (r = NREUM.init.distributed_tracing,
                        n = !!r.enabled),
                        n)
                            if (t.sameOrigin)
                                e = !0;
                            else if (r.allowed_origins instanceof Array)
                                for (var o = 0; o < r.allowed_origins.length; o++) {
                                    var i = s(r.allowed_origins[o]);
                                    if (t.hostname === i.hostname && t.protocol === i.protocol && t.port === i.port) {
                                        e = !0;
                                        break
                                    }
                                }
                        return n && e
                    }
                    var a = t(23)
                      , s = t(17);
                    e.exports = {
                        generateTracePayload: r,
                        shouldGenerateTrace: i
                    }
                }
                , {}],
                16: [function(t, e, n) {
                    function r(t) {
                        var e = this.params
                          , n = this.metrics;
                        if (!this.ended) {
                            this.ended = !0;
                            for (var r = 0; r < p; r++)
                                t.removeEventListener(d[r], this.listener, !1);
                            e.aborted || (n.duration = a.now() - this.startTime,
                            this.loadCaptureCalled || 4 !== t.readyState ? null == e.status && (e.status = 0) : i(this, t),
                            n.cbTime = this.cbTime,
                            u.emit("xhr-done", [t], t),
                            s("xhr", [e, n, this.startTime]))
                        }
                    }
                    function o(t, e) {
                        var n = c(e)
                          , r = t.params;
                        r.host = n.hostname + ":" + n.port,
                        r.pathname = n.pathname,
                        t.parsedOrigin = c(e),
                        t.sameOrigin = t.parsedOrigin.sameOrigin
                    }
                    function i(t, e) {
                        t.params.status = e.status;
                        var n = v(e, t.lastSize);
                        if (n && (t.metrics.rxSize = n),
                        t.sameOrigin) {
                            var r = e.getResponseHeader("X-NewRelic-App-Data");
                            r && (t.params.cat = r.split(", ").pop())
                        }
                        t.loadCaptureCalled = !0
                    }
                    var a = t("loader");
                    if (a.xhrWrappable) {
                        var s = t("handle")
                          , c = t(17)
                          , f = t(15).generateTracePayload
                          , u = t("ee")
                          , d = ["load", "error", "abort", "timeout"]
                          , p = d.length
                          , l = t("id")
                          , h = t(21)
                          , m = t(20)
                          , v = t(18)
                          , w = window.XMLHttpRequest;
                        a.features.xhr = !0,
                        t(14),
                        t(7),
                        u.on("new-xhr", function(t) {
                            var e = this;
                            e.totalCbs = 0,
                            e.called = 0,
                            e.cbTime = 0,
                            e.end = r,
                            e.ended = !1,
                            e.xhrGuids = {},
                            e.lastSize = null,
                            e.loadCaptureCalled = !1,
                            t.addEventListener("load", function(n) {
                                i(e, t)
                            }, !1),
                            h && (h > 34 || h < 10) || window.opera || t.addEventListener("progress", function(t) {
                                e.lastSize = t.loaded
                            }, !1)
                        }),
                        u.on("open-xhr-start", function(t) {
                            this.params = {
                                method: t[0]
                            },
                            o(this, t[1]),
                            this.metrics = {}
                        }),
                        u.on("open-xhr-end", function(t, e) {
                            "loader_config"in NREUM && "xpid"in NREUM.loader_config && this.sameOrigin && e.setRequestHeader("X-NewRelic-ID", NREUM.loader_config.xpid);
                            var n = f(this.parsedOrigin);
                            n && n.header && (e.setRequestHeader("newrelic", n.header),
                            this.dt = n)
                        }),
                        u.on("send-xhr-start", function(t, e) {
                            var n = this.metrics
                              , r = t[0]
                              , o = this;
                            if (n && r) {
                                var i = m(r);
                                i && (n.txSize = i)
                            }
                            this.startTime = a.now(),
                            this.listener = function(t) {
                                try {
                                    "abort" !== t.type || o.loadCaptureCalled || (o.params.aborted = !0),
                                    ("load" !== t.type || o.called === o.totalCbs && (o.onloadCalled || "function" != typeof e.onload)) && o.end(e)
                                } catch (n) {
                                    try {
                                        u.emit("internal-error", [n])
                                    } catch (r) {}
                                }
                            }
                            ;
                            for (var s = 0; s < p; s++)
                                e.addEventListener(d[s], this.listener, !1)
                        }),
                        u.on("xhr-cb-time", function(t, e, n) {
                            this.cbTime += t,
                            e ? this.onloadCalled = !0 : this.called += 1,
                            this.called !== this.totalCbs || !this.onloadCalled && "function" == typeof n.onload || this.end(n)
                        }),
                        u.on("xhr-load-added", function(t, e) {
                            var n = "" + l(t) + !!e;
                            this.xhrGuids && !this.xhrGuids[n] && (this.xhrGuids[n] = !0,
                            this.totalCbs += 1)
                        }),
                        u.on("xhr-load-removed", function(t, e) {
                            var n = "" + l(t) + !!e;
                            this.xhrGuids && this.xhrGuids[n] && (delete this.xhrGuids[n],
                            this.totalCbs -= 1)
                        }),
                        u.on("addEventListener-end", function(t, e) {
                            e instanceof w && "load" === t[0] && u.emit("xhr-load-added", [t[1], t[2]], e)
                        }),
                        u.on("removeEventListener-end", function(t, e) {
                            e instanceof w && "load" === t[0] && u.emit("xhr-load-removed", [t[1], t[2]], e)
                        }),
                        u.on("fn-start", function(t, e, n) {
                            e instanceof w && ("onload" === n && (this.onload = !0),
                            ("load" === (t[0] && t[0].type) || this.onload) && (this.xhrCbStart = a.now()))
                        }),
                        u.on("fn-end", function(t, e) {
                            this.xhrCbStart && u.emit("xhr-cb-time", [a.now() - this.xhrCbStart, this.onload, e], e)
                        }),
                        u.on("fetch-before-start", function(t) {
                            var e, n = t[1] || {};
                            "string" == typeof t[0] ? e = t[0] : t[0] && t[0].url && (e = t[0].url),
                            e && (this.parsedOrigin = c(e),
                            this.sameOrigin = this.parsedOrigin.sameOrigin);
                            var r = f(this.parsedOrigin);
                            if (r && r.header) {
                                var o = r.header;
                                if ("string" == typeof t[0]) {
                                    var i = {};
                                    for (var a in n)
                                        i[a] = n[a];
                                    i.headers = new Headers(n.headers || {}),
                                    i.headers.set("newrelic", o),
                                    this.dt = r,
                                    t.length > 1 ? t[1] = i : t.push(i)
                                } else
                                    t[0] && t[0].headers && (t[0].headers.append("newrelic", o),
                                    this.dt = r)
                            }
                        })
                    }
                }
                , {}],
                17: [function(t, e, n) {
                    var r = {};
                    e.exports = function(t) {
                        if (t in r)
                            return r[t];
                        var e = document.createElement("a")
                          , n = window.location
                          , o = {};
                        e.href = t,
                        o.port = e.port;
                        var i = e.href.split("://");
                        !o.port && i[1] && (o.port = i[1].split("/")[0].split("@").pop().split(":")[1]),
                        o.port && "0" !== o.port || (o.port = "https" === i[0] ? "443" : "80"),
                        o.hostname = e.hostname || n.hostname,
                        o.pathname = e.pathname,
                        o.protocol = i[0],
                        "/" !== o.pathname.charAt(0) && (o.pathname = "/" + o.pathname);
                        var a = !e.protocol || ":" === e.protocol || e.protocol === n.protocol
                          , s = e.hostname === document.domain && e.port === n.port;
                        return o.sameOrigin = a && (!e.hostname || s),
                        "/" === o.pathname && (r[t] = o),
                        o
                    }
                }
                , {}],
                18: [function(t, e, n) {
                    function r(t, e) {
                        var n = t.responseType;
                        return "json" === n && null !== e ? e : "arraybuffer" === n || "blob" === n || "json" === n ? o(t.response) : "text" === n || "" === n || void 0 === n ? o(t.responseText) : void 0
                    }
                    var o = t(20);
                    e.exports = r
                }
                , {}],
                19: [function(t, e, n) {
                    function r() {}
                    function o(t, e, n) {
                        return function() {
                            return i(t, [f.now()].concat(s(arguments)), e ? null : this, n),
                            e ? void 0 : this
                        }
                    }
                    var i = t("handle")
                      , a = t(25)
                      , s = t(26)
                      , c = t("ee").get("tracer")
                      , f = t("loader")
                      , u = NREUM;
                    "undefined" == typeof window.newrelic && (newrelic = u);
                    var d = ["setPageViewName", "setCustomAttribute", "setErrorHandler", "finished", "addToTrace", "inlineHit", "addRelease"]
                      , p = "api-"
                      , l = p + "ixn-";
                    a(d, function(t, e) {
                        u[e] = o(p + e, !0, "api")
                    }),
                    u.addPageAction = o(p + "addPageAction", !0),
                    u.setCurrentRouteName = o(p + "routeName", !0),
                    e.exports = newrelic,
                    u.interaction = function() {
                        return (new r).get()
                    }
                    ;
                    var h = r.prototype = {
                        createTracer: function(t, e) {
                            var n = {}
                              , r = this
                              , o = "function" == typeof e;
                            return i(l + "tracer", [f.now(), t, n], r),
                            function() {
                                if (c.emit((o ? "" : "no-") + "fn-start", [f.now(), r, o], n),
                                o)
                                    try {
                                        return e.apply(this, arguments)
                                    } catch (t) {
                                        throw c.emit("fn-err", [arguments, this, t], n),
                                        t
                                    } finally {
                                        c.emit("fn-end", [f.now()], n)
                                    }
                            }
                        }
                    };
                    a("actionText,setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","), function(t, e) {
                        h[e] = o(l + e)
                    }),
                    newrelic.noticeError = function(t, e) {
                        "string" == typeof t && (t = new Error(t)),
                        i("err", [t, f.now(), !1, e])
                    }
                }
                , {}],
                20: [function(t, e, n) {
                    e.exports = function(t) {
                        if ("string" == typeof t && t.length)
                            return t.length;
                        if ("object" == typeof t) {
                            if ("undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer && t.byteLength)
                                return t.byteLength;
                            if ("undefined" != typeof Blob && t instanceof Blob && t.size)
                                return t.size;
                            if (!("undefined" != typeof FormData && t instanceof FormData))
                                try {
                                    return JSON.stringify(t).length
                                } catch (e) {
                                    return
                                }
                        }
                    }
                }
                , {}],
                21: [function(t, e, n) {
                    var r = 0
                      , o = navigator.userAgent.match(/Firefox[\/\s](\d+\.\d+)/);
                    o && (r = +o[1]),
                    e.exports = r
                }
                , {}],
                22: [function(t, e, n) {
                    function r(t, e) {
                        var n = t.getEntries();
                        n.forEach(function(t) {
                            "first-paint" === t.name ? c("timing", ["fp", Math.floor(t.startTime)]) : "first-contentful-paint" === t.name && c("timing", ["fcp", Math.floor(t.startTime)])
                        })
                    }
                    function o(t, e) {
                        var n = t.getEntries();
                        n.length > 0 && c("lcp", [n[n.length - 1]])
                    }
                    function i(t) {
                        if (t instanceof u && !p) {
                            var e, n = Math.round(t.timeStamp);
                            e = n > 1e12 ? Date.now() - n : f.now() - n,
                            p = !0,
                            c("timing", ["fi", n, {
                                type: t.type,
                                fid: e
                            }])
                        }
                    }
                    if (!("init"in NREUM && "page_view_timing"in NREUM.init && "enabled"in NREUM.init.page_view_timing && NREUM.init.page_view_timing.enabled === !1)) {
                        var a, s, c = t("handle"), f = t("loader"), u = NREUM.o.EV;
                        if ("PerformanceObserver"in window && "function" == typeof window.PerformanceObserver) {
                            a = new PerformanceObserver(r),
                            s = new PerformanceObserver(o);
                            try {
                                a.observe({
                                    entryTypes: ["paint"]
                                }),
                                s.observe({
                                    entryTypes: ["largest-contentful-paint"]
                                })
                            } catch (d) {}
                        }
                        if ("addEventListener"in document) {
                            var p = !1
                              , l = ["click", "keydown", "mousedown", "pointerdown", "touchstart"];
                            l.forEach(function(t) {
                                document.addEventListener(t, i, !1)
                            })
                        }
                    }
                }
                , {}],
                23: [function(t, e, n) {
                    function r() {
                        function t() {
                            return e ? 15 & e[n++] : 16 * Math.random() | 0
                        }
                        var e = null
                          , n = 0
                          , r = window.crypto || window.msCrypto;
                        r && r.getRandomValues && (e = r.getRandomValues(new Uint8Array(31)));
                        for (var o, i = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx", a = "", s = 0; s < i.length; s++)
                            o = i[s],
                            "x" === o ? a += t().toString(16) : "y" === o ? (o = 3 & t() | 8,
                            a += o.toString(16)) : a += o;
                        return a
                    }
                    function o() {
                        function t() {
                            return e ? 15 & e[n++] : 16 * Math.random() | 0
                        }
                        var e = null
                          , n = 0
                          , r = window.crypto || window.msCrypto;
                        r && r.getRandomValues && Uint8Array && (e = r.getRandomValues(new Uint8Array(31)));
                        for (var o = [], i = 0; i < 16; i++)
                            o.push(t().toString(16));
                        return o.join("")
                    }
                    e.exports = {
                        generateUuid: r,
                        generateCatId: o
                    }
                }
                , {}],
                24: [function(t, e, n) {
                    function r(t, e) {
                        if (!o)
                            return !1;
                        if (t !== o)
                            return !1;
                        if (!e)
                            return !0;
                        if (!i)
                            return !1;
                        for (var n = i.split("."), r = e.split("."), a = 0; a < r.length; a++)
                            if (r[a] !== n[a])
                                return !1;
                        return !0
                    }
                    var o = null
                      , i = null
                      , a = /Version\/(\S+)\s+Safari/;
                    if (navigator.userAgent) {
                        var s = navigator.userAgent
                          , c = s.match(a);
                        c && s.indexOf("Chrome") === -1 && s.indexOf("Chromium") === -1 && (o = "Safari",
                        i = c[1])
                    }
                    e.exports = {
                        agent: o,
                        version: i,
                        match: r
                    }
                }
                , {}],
                25: [function(t, e, n) {
                    function r(t, e) {
                        var n = []
                          , r = ""
                          , i = 0;
                        for (r in t)
                            o.call(t, r) && (n[i] = e(r, t[r]),
                            i += 1);
                        return n
                    }
                    var o = Object.prototype.hasOwnProperty;
                    e.exports = r
                }
                , {}],
                26: [function(t, e, n) {
                    function r(t, e, n) {
                        e || (e = 0),
                        "undefined" == typeof n && (n = t ? t.length : 0);
                        for (var r = -1, o = n - e || 0, i = Array(o < 0 ? 0 : o); ++r < o; )
                            i[r] = t[e + r];
                        return i
                    }
                    e.exports = r
                }
                , {}],
                27: [function(t, e, n) {
                    e.exports = {
                        exists: "undefined" != typeof window.performance && window.performance.timing && "undefined" != typeof window.performance.timing.navigationStart
                    }
                }
                , {}],
                ee: [function(t, e, n) {
                    function r() {}
                    function o(t) {
                        function e(t) {
                            return t && t instanceof r ? t : t ? c(t, s, i) : i()
                        }
                        function n(n, r, o, i) {
                            if (!p.aborted || i) {
                                t && t(n, r, o);
                                for (var a = e(o), s = m(n), c = s.length, f = 0; f < c; f++)
                                    s[f].apply(a, r);
                                var d = u[y[n]];
                                return d && d.push([x, n, r, a]),
                                a
                            }
                        }
                        function l(t, e) {
                            g[t] = m(t).concat(e)
                        }
                        function h(t, e) {
                            var n = g[t];
                            if (n)
                                for (var r = 0; r < n.length; r++)
                                    n[r] === e && n.splice(r, 1)
                        }
                        function m(t) {
                            return g[t] || []
                        }
                        function v(t) {
                            return d[t] = d[t] || o(n)
                        }
                        function w(t, e) {
                            f(t, function(t, n) {
                                e = e || "feature",
                                y[n] = e,
                                e in u || (u[e] = [])
                            })
                        }
                        var g = {}
                          , y = {}
                          , x = {
                            on: l,
                            addEventListener: l,
                            removeEventListener: h,
                            emit: n,
                            get: v,
                            listeners: m,
                            context: e,
                            buffer: w,
                            abort: a,
                            aborted: !1
                        };
                        return x
                    }
                    function i() {
                        return new r
                    }
                    function a() {
                        (u.api || u.feature) && (p.aborted = !0,
                        u = p.backlog = {})
                    }
                    var s = "nr@context"
                      , c = t("gos")
                      , f = t(25)
                      , u = {}
                      , d = {}
                      , p = e.exports = o();
                    p.backlog = u
                }
                , {}],
                gos: [function(t, e, n) {
                    function r(t, e, n) {
                        if (o.call(t, e))
                            return t[e];
                        var r = n();
                        if (Object.defineProperty && Object.keys)
                            try {
                                return Object.defineProperty(t, e, {
                                    value: r,
                                    writable: !0,
                                    enumerable: !1
                                }),
                                r
                            } catch (i) {}
                        return t[e] = r,
                        r
                    }
                    var o = Object.prototype.hasOwnProperty;
                    e.exports = r
                }
                , {}],
                handle: [function(t, e, n) {
                    function r(t, e, n, r) {
                        o.buffer([t], r),
                        o.emit(t, e, n)
                    }
                    var o = t("ee").get("handle");
                    e.exports = r,
                    r.ee = o
                }
                , {}],
                id: [function(t, e, n) {
                    function r(t) {
                        var e = typeof t;
                        return !t || "object" !== e && "function" !== e ? -1 : t === window ? 0 : a(t, i, function() {
                            return o++
                        })
                    }
                    var o = 1
                      , i = "nr@id"
                      , a = t("gos");
                    e.exports = r
                }
                , {}],
                loader: [function(t, e, n) {
                    function r() {
                        if (!E++) {
                            var t = b.info = NREUM.info
                              , e = l.getElementsByTagName("script")[0];
                            if (setTimeout(u.abort, 3e4),
                            !(t && t.licenseKey && t.applicationID && e))
                                return u.abort();
                            f(y, function(e, n) {
                                t[e] || (t[e] = n)
                            }),
                            c("mark", ["onload", a() + b.offset], null, "api");
                            var n = l.createElement("script");
                            n.src = "https://" + t.agent,
                            e.parentNode.insertBefore(n, e)
                        }
                    }
                    function o() {
                        "complete" === l.readyState && i()
                    }
                    function i() {
                        c("mark", ["domContent", a() + b.offset], null, "api")
                    }
                    function a() {
                        return O.exists && performance.now ? Math.round(performance.now()) : (s = Math.max((new Date).getTime(), s)) - b.offset
                    }
                    var s = (new Date).getTime()
                      , c = t("handle")
                      , f = t(25)
                      , u = t("ee")
                      , d = t(24)
                      , p = window
                      , l = p.document
                      , h = "addEventListener"
                      , m = "attachEvent"
                      , v = p.XMLHttpRequest
                      , w = v && v.prototype;
                    NREUM.o = {
                        ST: setTimeout,
                        SI: p.setImmediate,
                        CT: clearTimeout,
                        XHR: v,
                        REQ: p.Request,
                        EV: p.Event,
                        PR: p.Promise,
                        MO: p.MutationObserver
                    };
                    var g = "" + location
                      , y = {
                        beacon: "bam.nr-data.net",
                        errorBeacon: "bam.nr-data.net",
                        agent: "js-agent.newrelic.com/nr-spa-1169.min.js"
                    }
                      , x = v && w && w[h] && !/CriOS/.test(navigator.userAgent)
                      , b = e.exports = {
                        offset: s,
                        now: a,
                        origin: g,
                        features: {},
                        xhrWrappable: x,
                        userAgent: d
                    };
                    t(19),
                    t(22),
                    l[h] ? (l[h]("DOMContentLoaded", i, !1),
                    p[h]("load", r, !1)) : (l[m]("onreadystatechange", o),
                    p[m]("onload", r)),
                    c("mark", ["firstbyte", s], null, "api");
                    var E = 0
                      , O = t(27)
                }
                , {}],
                "wrap-function": [function(t, e, n) {
                    function r(t) {
                        return !(t && t instanceof Function && t.apply && !t[a])
                    }
                    var o = t("ee")
                      , i = t(26)
                      , a = "nr@original"
                      , s = Object.prototype.hasOwnProperty
                      , c = !1;
                    e.exports = function(t, e) {
                        function n(t, e, n, o) {
                            function nrWrapper() {
                                var r, a, s, c;
                                try {
                                    a = this,
                                    r = i(arguments),
                                    s = "function" == typeof n ? n(r, a) : n || {}
                                } catch (f) {
                                    p([f, "", [r, a, o], s])
                                }
                                u(e + "start", [r, a, o], s);
                                try {
                                    return c = t.apply(a, r)
                                } catch (d) {
                                    throw u(e + "err", [r, a, d], s),
                                    d
                                } finally {
                                    u(e + "end", [r, a, c], s)
                                }
                            }
                            return r(t) ? t : (e || (e = ""),
                            nrWrapper[a] = t,
                            d(t, nrWrapper),
                            nrWrapper)
                        }
                        function f(t, e, o, i) {
                            o || (o = "");
                            var a, s, c, f = "-" === o.charAt(0);
                            for (c = 0; c < e.length; c++)
                                s = e[c],
                                a = t[s],
                                r(a) || (t[s] = n(a, f ? s + o : o, i, s))
                        }
                        function u(n, r, o) {
                            if (!c || e) {
                                var i = c;
                                c = !0;
                                try {
                                    t.emit(n, r, o, e)
                                } catch (a) {
                                    p([a, n, r, o])
                                }
                                c = i
                            }
                        }
                        function d(t, e) {
                            if (Object.defineProperty && Object.keys)
                                try {
                                    var n = Object.keys(t);
                                    return n.forEach(function(n) {
                                        Object.defineProperty(e, n, {
                                            get: function() {
                                                return t[n]
                                            },
                                            set: function(e) {
                                                return t[n] = e,
                                                e
                                            }
                                        })
                                    }),
                                    e
                                } catch (r) {
                                    p([r])
                                }
                            for (var o in t)
                                s.call(t, o) && (e[o] = t[o]);
                            return e
                        }
                        function p(e) {
                            try {
                                t.emit("internal-error", e)
                            } catch (n) {}
                        }
                        return t || (t = o),
                        n.inPlace = f,
                        n.flag = a,
                        n
                    }
                }
                , {}]
            }, {}, ["loader", 2, 16, 5, 3, 4]);
        </script>
        <link rel="icon" href="/weblx/images/icons/favicon-16x16.png">
        <link rel="icon" href="/weblx/images/icons/favicon-32x32.png">
        <link rel="apple-touch-icon" sizes="180x180" href="/weblx/images/icons/apple-touch-icon.png">
        <link rel="icon" type="image/png" href="/weblx/images/icons/pwa-icon-192.png" sizes="192x192">
        <link rel="manifest" href="/weblx/assets/manifest.json">
        <link rel="mask-icon" href="/weblx/images/icons/safari-pinned-tab.svg" color="#008046">
        <meta name="apple-mobile-web-app-title" content="Starbucks">
        <meta name="application-name" content="Starbucks">
        <meta name="msapplication-TileColor" content="#242221">
        <meta name="msapplication-TileImage" content="/weblx/images/mstile-144x144.png">
        <meta name="msapplication-config" content="/weblx/assets/browserconfig.xml">
        <meta name="theme-color" content="#006341">
        <script>
            (function(html) {
                html.className = html.className.replace(/\bno-js\b/, 'js')
            }
            )(document.documentElement)
        </script>
        <link rel="stylesheet" href="https://assets.web.starbucksassets.com/weblx/static/patternLib.7a672ef6751403ac9d8c.css"/>
        <link rel="stylesheet" href="https://assets.web.starbucksassets.com/weblx/static/shared.f4015644b6f7ebe139d1.css"/>
        <link rel="canonical" href="https://www.starbucks.com/store-locator?place=Stavanger%2C%20Norway"/>
        <meta property="og:url" data-hid="url" content="https://www.starbucks.com/store-locator?place=Stavanger%2C%20Norway"/>
        <title data-react-helmet="true"></title>
        <script>

            (function() {
                // Google Tag Manager
                window.dataLayer = window.dataLayer || [];
                if (null) {
                    window.dataLayer.push(null);
                }
                var dataLayerConfig = {
                    "platform": "Starbucks Global Web (Node.js)",
                    "event": "datalayer-initialized",
                    "locale": "en-US",
                    "region": "US"
                };
                var isStandalone = Boolean(window.matchMedia && window.matchMedia('(display-mode: standalone)').matches);
                if (isStandalone) {
                    dataLayerConfig.fromHomescreen = true;
                }
                window.dataLayer.push(dataLayerConfig);
            }
            )();

            (function() {
                var removeLoadingClass = function() {
                    document.documentElement.classList.remove('fonts-loading');
                };

                if (typeof Promise === 'undefined') {
                    removeLoadingClass();
                    return;
                }

                try {
                    if (sessionStorage.fontsLoaded) {
                        removeLoadingClass();
                        return;
                    }
                } catch (e) {}

                !function() {
                    function e(e, t) {
                        document.addEventListener ? e.addEventListener("scroll", t, !1) : e.attachEvent("scroll", t)
                    }
                    function t(e) {
                        this.a = document.createElement("div"),
                        this.a.setAttribute("aria-hidden", "true"),
                        this.a.appendChild(document.createTextNode(e)),
                        this.b = document.createElement("span"),
                        this.c = document.createElement("span"),
                        this.h = document.createElement("span"),
                        this.f = document.createElement("span"),
                        this.g = -1,
                        this.b.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",
                        this.c.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",
                        this.f.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",
                        this.h.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",
                        this.b.appendChild(this.h),
                        this.c.appendChild(this.f),
                        this.a.appendChild(this.b),
                        this.a.appendChild(this.c)
                    }
                    function n(e, t) {
                        e.a.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" + t + ";"
                    }
                    function i(e) {
                        var t = e.a.offsetWidth
                          , n = t + 100;
                        return e.f.style.width = n + "px",
                        e.c.scrollLeft = n,
                        e.b.scrollLeft = e.b.scrollWidth + 100,
                        e.g !== t && (e.g = t,
                        !0)
                    }
                    function o(t, n) {
                        function o() {
                            var e = s;
                            i(e) && e.a.parentNode && n(e.g)
                        }
                        var s = t;
                        e(t.b, o),
                        e(t.c, o),
                        i(t)
                    }
                    function s(e, t) {
                        var n = t || {};
                        this.family = e,
                        this.style = n.style || "normal",
                        this.weight = n.weight || "normal",
                        this.stretch = n.stretch || "normal"
                    }
                    var a = null
                      , d = null
                      , r = null
                      , c = null;
                    function l() {
                        return null === c && (c = !!document.fonts),
                        c
                    }
                    function h(e, t) {
                        return [e.style, e.weight, function() {
                            if (null === r) {
                                var e = document.createElement("div");
                                try {
                                    e.style.font = "condensed 100px sans-serif"
                                } catch (e) {}
                                r = "" !== e.style.font
                            }
                            return r
                        }() ? e.stretch : "", "100px", t].join(" ")
                    }
                    s.prototype.load = function(e, i) {
                        var s = this
                          , r = e || "BESbswy"
                          , c = 0
                          , u = i || 3e3
                          , f = (new Date).getTime();
                        return new Promise(function(e, i) {
                            if (l() && !function() {
                                if (null === d)
                                    if (l() && /Apple/.test(window.navigator.vendor)) {
                                        var e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);
                                        d = !!e && 603 > parseInt(e[1], 10)
                                    } else
                                        d = !1;
                                return d
                            }()) {
                                var p = new Promise(function(e, t) {
                                    !function n() {
                                        (new Date).getTime() - f >= u ? t(Error(u + "ms timeout exceeded")) : document.fonts.load(h(s, '"' + s.family + '"'), r).then(function(t) {
                                            1 <= t.length ? e() : setTimeout(n, 25)
                                        }, t)
                                    }()
                                }
                                )
                                  , m = new Promise(function(e, t) {
                                    c = setTimeout(function() {
                                        t(Error(u + "ms timeout exceeded"))
                                    }, u)
                                }
                                );
                                Promise.race([m, p]).then(function() {
                                    clearTimeout(c),
                                    e(s)
                                }, i)
                            } else
                                !function(e) {
                                    document.body ? e() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function t() {
                                        document.removeEventListener("DOMContentLoaded", t),
                                        e()
                                    }) : document.attachEvent("onreadystatechange", function t() {
                                        "interactive" != document.readyState && "complete" != document.readyState || (document.detachEvent("onreadystatechange", t),
                                        e())
                                    })
                                }(function() {
                                    function d() {
                                        var t;
                                        (t = -1 != w && -1 != v || -1 != w && -1 != y || -1 != v && -1 != y) && ((t = w != v && w != y && v != y) || (null === a && (t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),
                                        a = !!t && (536 > parseInt(t[1], 10) || 536 === parseInt(t[1], 10) && 11 >= parseInt(t[2], 10))),
                                        t = a && (w == x && v == x && y == x || w == b && v == b && y == b || w == g && v == g && y == g)),
                                        t = !t),
                                        t && (E.parentNode && E.parentNode.removeChild(E),
                                        clearTimeout(c),
                                        e(s))
                                    }
                                    var l = new t(r)
                                      , p = new t(r)
                                      , m = new t(r)
                                      , w = -1
                                      , v = -1
                                      , y = -1
                                      , x = -1
                                      , b = -1
                                      , g = -1
                                      , E = document.createElement("div");
                                    E.dir = "ltr",
                                    n(l, h(s, "sans-serif")),
                                    n(p, h(s, "serif")),
                                    n(m, h(s, "monospace")),
                                    E.appendChild(l.a),
                                    E.appendChild(p.a),
                                    E.appendChild(m.a),
                                    document.body.appendChild(E),
                                    x = l.a.offsetWidth,
                                    b = p.a.offsetWidth,
                                    g = m.a.offsetWidth,
                                    function e() {
                                        if ((new Date).getTime() - f >= u)
                                            E.parentNode && E.parentNode.removeChild(E),
                                            i(Error(u + "ms timeout exceeded"));
                                        else {
                                            var t = document.hidden;
                                            !0 !== t && void 0 !== t || (w = l.a.offsetWidth,
                                            v = p.a.offsetWidth,
                                            y = m.a.offsetWidth,
                                            d()),
                                            c = setTimeout(e, 50)
                                        }
                                    }(),
                                    o(l, function(e) {
                                        w = e,
                                        d()
                                    }),
                                    n(l, h(s, '"' + s.family + '",sans-serif')),
                                    o(p, function(e) {
                                        v = e,
                                        d()
                                    }),
                                    n(p, h(s, '"' + s.family + '",serif')),
                                    o(m, function(e) {
                                        y = e,
                                        d()
                                    }),
                                    n(m, h(s, '"' + s.family + '",monospace'))
                                })
                        }
                        )
                    }
                    ,
                    "object" == typeof module ? module.exports = s : (window.FontFaceObserver = s,
                    window.FontFaceObserver.prototype.load = s.prototype.load)
                }();

                var soDoSans = new FontFaceObserver('SoDoSans');
                var soDoSansSemiBold = new FontFaceObserver('SoDoSans',{
                    weight: 600
                });
                var soDoSansBold = new FontFaceObserver('SoDoSans',{
                    weight: 700
                });

                Promise.all([soDoSans.load(), soDoSansSemiBold.load(), soDoSansBold.load()]).then(function() {
                    removeLoadingClass();
                    try {
                        sessionStorage.fontsLoaded = true
                    } catch (e) {}
                });
            }
            )();
        </script>
        <script>
            (window.BOOMR_mq = window.BOOMR_mq || []).push(["addVar", {
                "rua.upush": "true",
                "rua.cpush": "false",
                "rua.upre": "true",
                "rua.cpre": "false",
                "rua.uprl": "false",
                "rua.cprl": "false",
                "rua.cprf": "false",
                "rua.trans": "SJ-eb45a3b1-1873-4e9a-bec8-f7dd94b0bac0",
                "rua.cook": "true",
                "rua.ims": "false",
                "rua.ufprl": "false",
                "rua.cfprl": "false"
            }]);
        </script>
        <script>
            !function(a) {
                var e = "https://s.go-mpulse.net/boomerang/"
                  , t = "addEventListener";
                if ("False" == "True")
                    a.BOOMR_config = a.BOOMR_config || {},
                    a.BOOMR_config.PageParams = a.BOOMR_config.PageParams || {},
                    a.BOOMR_config.PageParams.pci = !0,
                    e = "https://s2.go-mpulse.net/boomerang/";
                if (window.BOOMR_API_key = "HHB3F-A7T87-EXZWT-MGPRQ-KZYBS",
                function() {
                    function n(e) {
                        a.BOOMR_onload = e && e.timeStamp || (new Date).getTime()
                    }
                    if (!a.BOOMR || !a.BOOMR.version && !a.BOOMR.snippetExecuted) {
                        a.BOOMR = a.BOOMR || {},
                        a.BOOMR.snippetExecuted = !0;
                        var i, o, _, r = document.createElement("iframe");
                        if (a[t])
                            a[t]("load", n, !1);
                        else if (a.attachEvent)
                            a.attachEvent("onload", n);
                        r.src = "javascript:void(0)",
                        r.title = "",
                        r.role = "presentation",
                        (r.frameElement || r).style.cssText = "width:0;height:0;border:0;display:none;",
                        _ = document.getElementsByTagName("script")[0],
                        _.parentNode.insertBefore(r, _);
                        try {
                            o = r.contentWindow.document
                        } catch (O) {
                            i = document.domain,
                            r.src = "javascript:var d=document.open();d.domain='" + i + "';void(0);",
                            o = r.contentWindow.document
                        }
                        o.open()._l = function() {
                            var a = this.createElement("script");
                            if (i)
                                this.domain = i;
                            a.id = "boomr-if-as",
                            a.src = e + "HHB3F-A7T87-EXZWT-MGPRQ-KZYBS",
                            BOOMR_lstart = (new Date).getTime(),
                            this.body.appendChild(a)
                        }
                        ,
                        o.write("<bo" + 'dy onload="document._l();">'),
                        o.close()
                    }
                }(),
                "".length > 0)
                    if (a && "performance"in a && a.performance && "function" == typeof a.performance.setResourceTimingBufferSize)
                        a.performance.setResourceTimingBufferSize();
                !function() {
                    if (BOOMR = a.BOOMR || {},
                    BOOMR.plugins = BOOMR.plugins || {},
                    !BOOMR.plugins.AK) {
                        var e = "true" == "true" ? 1 : 0
                          , t = "cookiepresent"
                          , n = "ktlubcixguyjaxwzkkyq-f-e85fc351c-clientnsv4-s.akamaihd.net"
                          , i = {
                            "ak.v": "27",
                            "ak.cp": "609049",
                            "ak.ai": parseInt("372024", 10),
                            "ak.ol": "0",
                            "ak.cr": 16,
                            "ak.ipv": 4,
                            "ak.proto": "h2",
                            "ak.rid": "20ca770",
                            "ak.r": 15267,
                            "ak.a2": e,
                            "ak.m": "a",
                            "ak.n": "essl",
                            "ak.bpcip": "84.215.64.0",
                            "ak.cport": 52547,
                            "ak.gh": "95.101.133.110",
                            "ak.quicv": "",
                            "ak.tlsv": "tls1.3",
                            "ak.0rtt": "",
                            "ak.csrc": "-",
                            "ak.acc": "",
                            "ak.t": "1591300785",
                            "ak.ak": "hOBiQwZUYzCg5VSAfCLimQ==WSLw6YiYsTZVXDKINEKtXoKptatjgHAYRNVeyMcgstP0dMmiSkZXEAJhR35MvRa+frRa8HvDlxJvYsV3+OuJFuFAOzMMgXRZDYZkH9YFJWsqTLrz1J55qD3l1QWl5MYdWz3e165lZH6BgyEUNEMtFIqdMSX3ueUM69s02e2WOwa7cadBNKUByS4oFDJVZyPYV+F0JR3NyOL2w6t31DGE56TWk+ZhDzoVfbPh516f0/dMTPnqE7jTCYRbAtZIBqkmqehxapUQ7GvjXYZwmI5FSHrcOaqHJkoNxewRv2cBC1h/t1K4FYb1J5q+KyApokWMS5UC85IMowJz3Q5DS7JU9W2BIBAurhpuSX/KJtQDT5TDY3f1E3HLsboEzCz88rzSalSmrWSc+5xePZ2ffzrmL4qyWES74pLkrraRxJkza4w=",
                            "ak.pv": "223"
                        };
                        if ("" !== t)
                            i["ak.ruds"] = t;
                        var o = {
                            i: !1,
                            av: function(e) {
                                var t = "http.initiator";
                                if (e && (!e[t] || "spa_hard" === e[t]))
                                    i["ak.feo"] = void 0 !== a.aFeoApplied ? 1 : 0,
                                    BOOMR.addVar(i)
                            },
                            rv: function() {
                                var a = ["ak.bpcip", "ak.cport", "ak.cr", "ak.csrc", "ak.gh", "ak.ipv", "ak.m", "ak.n", "ak.ol", "ak.proto", "ak.quicv", "ak.tlsv", "ak.0rtt", "ak.r", "ak.acc", "ak.t"];
                                BOOMR.removeVar(a)
                            }
                        };
                        BOOMR.plugins.AK = {
                            akVars: i,
                            akDNSPreFetchDomain: n,
                            init: function() {
                                if (!o.i) {
                                    var a = BOOMR.subscribe;
                                    a("before_beacon", o.av, null, null),
                                    a("onbeacon", o.rv, null, null),
                                    o.i = !0
                                }
                                return this
                            },
                            is_complete: function() {
                                return !0
                            }
                        }
                    }
                }()
            }(window);
        </script>
    </head>
    <body>
        <!-- Trust Arc is disabled in body -->
        <noscript>
            <iframe src="//www.googletagmanager.com/ns.html?id=GTM-NXP5CQ" height="0" width="0" style="display:none;visibility:hidden"></iframe>
        </noscript>
        <script>
            (function(w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({
                    'gtm.start': new Date().getTime(),
                    event: 'gtm.js'
                });
                var f = d.getElementsByTagName(s)[0]
                  , j = d.createElement(s)
                  , dl = l != 'dataLayer' ? '&l=' + l : '';
                j.async = true;
                j.src = '//www.googletagmanager.com/gtm.js?id=' + i + dl;
                f.parentNode.insertBefore(j, f);
            }
            )(window, document, 'script', 'dataLayer', 'GTM-NXP5CQ');
        </script>
        <div id="js-content" class="height-100">
            <noscript>This site requires JavaScript.</noscript>
        </div>
        <script>
            uo_data = {};
        </script>
        <script>
            window.__BOOTSTRAP = {
                "asyncCount": 0,
                "locale": "en-US",
                "previousAction": {
                    "type": "UPDATE_LOCATIONS",
                    "payload": {
                        "data": {
                            "paging": {
                                "total": 3,
                                "offset": 0,
                                "limit": 50,
                                "returned": 3
                            },
                            "stores": [{
                                "recommendation": {},
                                "storeNumber": "22620-222825",
                                "id": "1008470",
                                "name": "Domkirkeplassen-Stavanger",
                                "phoneNumber": "458 46 094",
                                "coordinates": {
                                    "latitude": 58.970037,
                                    "longitude": 5.732303
                                },
                                "regulations": [],
                                "address": {
                                    "streetAddressLine1": "Domkirkeplassen 1",
                                    "streetAddressLine2": null,
                                    "streetAddressLine3": null,
                                    "city": "Stavanger",
                                    "countrySubdivisionCode": "11",
                                    "countryCode": "NO",
                                    "postalCode": "4006"
                                },
                                "timeZoneInfo": {
                                    "currentTimeOffset": 120,
                                    "windowsTimeZoneId": "W. Europe Standard Time",
                                    "olsonTimeZoneId": "GMT+1:00 Europe/Oslo"
                                },
                                "brandName": "Starbucks",
                                "ownershipTypeCode": "LS",
                                "open": false,
                                "openStatusText": "Closed",
                                "addressLines": ["Domkirkeplassen 1", "Stavanger, 11 4006"],
                                "mop": {
                                    "ready": false,
                                    "wait": null
                                },
                                "schedule": [{
                                    "dayName": "Today",
                                    "hours": "11:00 AM to 6:00 PM",
                                    "open": true,
                                    "holiday": ""
                                }, {
                                    "dayName": "Tomorrow",
                                    "hours": "11:00 AM to 6:00 PM",
                                    "open": true,
                                    "holiday": ""
                                }, {
                                    "dayName": "Saturday",
                                    "hours": "11:00 AM to 6:00 PM",
                                    "open": true,
                                    "holiday": ""
                                }, {
                                    "dayName": "Sunday",
                                    "hours": "11:00 AM to 6:00 PM",
                                    "open": true,
                                    "holiday": ""
                                }, {
                                    "dayName": "Monday",
                                    "hours": "11:00 AM to 6:00 PM",
                                    "open": true,
                                    "holiday": ""
                                }, {
                                    "dayName": "Tuesday",
                                    "hours": "11:00 AM to 6:00 PM",
                                    "open": true,
                                    "holiday": ""
                                }, {
                                    "dayName": "Wednesday",
                                    "hours": "11:00 AM to 6:00 PM",
                                    "open": true,
                                    "holiday": ""
                                }],
                                "features": [{
                                    "code": "WF",
                                    "name": "Wireless Hotspot"
                                }, {
                                    "code": "RW",
                                    "name": "My Starbucks Rewards"
                                }],
                                "slug": "domkirkeplassen-stavanger-domkirkeplassen-1-stavanger-11-4006-no"
                            }, {
                                "recommendation": {},
                                "storeNumber": "51663-278970",
                                "id": "1019886",
                                "name": "Klubbgata,  Stavanger",
                                "phoneNumber": null,
                                "coordinates": {
                                    "latitude": 58.970724,
                                    "longitude": 5.73577
                                },
                                "regulations": [],
                                "address": {
                                    "streetAddressLine1": "Klubbgata 5",
                                    "streetAddressLine2": null,
                                    "streetAddressLine3": null,
                                    "city": "Stavanger",
                                    "countrySubdivisionCode": "11",
                                    "countryCode": "NO",
                                    "postalCode": "4013"
                                },
                                "timeZoneInfo": {
                                    "currentTimeOffset": 120,
                                    "windowsTimeZoneId": "W. Europe Standard Time",
                                    "olsonTimeZoneId": "GMT+1:00 Europe/Oslo"
                                },
                                "brandName": "Starbucks",
                                "ownershipTypeCode": "LS",
                                "open": false,
                                "openStatusText": "Closed",
                                "addressLines": ["Klubbgata 5", "Stavanger, 11 4013"],
                                "mop": {
                                    "ready": false,
                                    "wait": null
                                },
                                "schedule": [{
                                    "dayName": "Today",
                                    "hours": "11:00 AM to 6:00 PM",
                                    "open": true,
                                    "holiday": ""
                                }, {
                                    "dayName": "Tomorrow",
                                    "hours": "11:00 AM to 6:00 PM",
                                    "open": true,
                                    "holiday": ""
                                }, {
                                    "dayName": "Saturday",
                                    "hours": "11:00 AM to 6:00 PM",
                                    "open": true,
                                    "holiday": ""
                                }, {
                                    "dayName": "Sunday",
                                    "hours": "Closed",
                                    "open": false,
                                    "holiday": ""
                                }, {
                                    "dayName": "Monday",
                                    "hours": "11:00 AM to 6:00 PM",
                                    "open": true,
                                    "holiday": ""
                                }, {
                                    "dayName": "Tuesday",
                                    "hours": "11:00 AM to 6:00 PM",
                                    "open": true,
                                    "holiday": ""
                                }, {
                                    "dayName": "Wednesday",
                                    "hours": "11:00 AM to 6:00 PM",
                                    "open": true,
                                    "holiday": ""
                                }],
                                "features": [],
                                "slug": "klubbgata-stavanger-klubbgata-5-stavanger-11-4013-no"
                            }, {
                                "recommendation": {},
                                "storeNumber": "50786-275626",
                                "id": "1017552",
                                "name": "Kvadrat Nord",
                                "phoneNumber": "045836796",
                                "coordinates": {
                                    "latitude": 58.877717,
                                    "longitude": 5.72252
                                },
                                "regulations": [],
                                "address": {
                                    "streetAddressLine1": "Gamle Stokka vei 1, 4813 Sandnes",
                                    "streetAddressLine2": "Kvadrat Kjopesenter",
                                    "streetAddressLine3": null,
                                    "city": "Stavanger",
                                    "countrySubdivisionCode": "11",
                                    "countryCode": "NO",
                                    "postalCode": "4313"
                                },
                                "timeZoneInfo": {
                                    "currentTimeOffset": 120,
                                    "windowsTimeZoneId": "W. Europe Standard Time",
                                    "olsonTimeZoneId": "GMT+1:00 Europe/Oslo"
                                },
                                "brandName": "Starbucks",
                                "ownershipTypeCode": "LS",
                                "open": false,
                                "openStatusText": "Closed",
                                "addressLines": ["Gamle Stokka vei 1, 4813 Sandnes", "Kvadrat Kjopesenter", "Stavanger, 11 4313"],
                                "mop": {
                                    "ready": false,
                                    "wait": null
                                },
                                "schedule": [{
                                    "dayName": "Today",
                                    "hours": "10:00 AM to 7:00 PM",
                                    "open": true,
                                    "holiday": ""
                                }, {
                                    "dayName": "Tomorrow",
                                    "hours": "10:00 AM to 7:00 PM",
                                    "open": true,
                                    "holiday": ""
                                }, {
                                    "dayName": "Saturday",
                                    "hours": "10:00 AM to 6:00 PM",
                                    "open": true,
                                    "holiday": ""
                                }, {
                                    "dayName": "Sunday",
                                    "hours": "Closed",
                                    "open": false,
                                    "holiday": ""
                                }, {
                                    "dayName": "Monday",
                                    "hours": "10:00 AM to 7:00 PM",
                                    "open": true,
                                    "holiday": ""
                                }, {
                                    "dayName": "Tuesday",
                                    "hours": "10:00 AM to 7:00 PM",
                                    "open": true,
                                    "holiday": ""
                                }, {
                                    "dayName": "Wednesday",
                                    "hours": "10:00 AM to 7:00 PM",
                                    "open": true,
                                    "holiday": ""
                                }],
                                "features": [],
                                "slug": "kvadrat-nord-gamle-stokka-vei-1-4813-sandnes-stavanger-11-4313-"
                            }],
                            "coordinates": {
                                "lat": 58.9699756,
                                "lng": 5.7331074
                            },
                            "includesRecommendedLocations": false
                        },
                        "moreResultsAvailable": false,
                        "selectedStoreId": "1008470",
                        "expandedStoreId": null
                    }
                },
                "router": {
                    "location": {
                        "pathname": "/store-locator/",
                        "search": "?map=58.924221,5.729145,12z&place=Stavanger,%20Norway",
                        "hash": "",
                        "key": "yod6gn",
                        "query": {
                            "map": "58.924221,5.729145,12z",
                            "place": "Stavanger,%20Norway"
                        }
                    },
                    "action": "POP"
                },
                "routes": {
                    "current": {
                        "pathname": "/store-locator/",
                        "hash": "",
                        "search": "?map=58.924221,5.729145,12z&place=Stavanger,%20Norway",
                        "state": {},
                        "route": "/store-locator*",
                        "params": {
                            "0": "/"
                        },
                        "query": {
                            "map": "58.924221,5.729145,12z",
                            "place": "Stavanger, Norway"
                        },
                        "result": {
                            "fullPageComponent": {},
                            "usesCrateLayout": true
                        }
                    },
                    "previous": null,
                    "routes": {
                        "/store-locator*": {
                            "fullPageComponent": {},
                            "usesCrateLayout": true
                        }
                    }
                },
                "bottomSheet": {
                    "bottomSheetRoutes": [],
                    "bottomSheetReturnUrl": null
                },
                "overlay": {
                    "overlaysOpenedByUrlHash": []
                },
                "config": {
                    "universal": {
                        "bffBaseUrl": "",
                        "chasePay": {
                            "chasePayEnabled": true,
                            "url": "https://pwc.chase.com/pwc/checkout/js/v20170521/list.action?type=raw&applId=PWC&channelId=CWC&version=1"
                        },
                        "groupOrdering": {
                            "enabled": true
                        },
                        "payPal": {
                            "enabled": true,
                            "url": "https://www.paypal.com/sdk/js?client-id=AXjQJ2vHhgpu7DYUrE1IerCOOp9y-d8dSIMEIkc49ckjO9M04AehA8qm5jm0FIV7kO3CEtzZ8e-dp8-2&vault=true&intent=capture&commit=false"
                        },
                        "securePayment": {
                            "guestPaymentTokenMaxAge": 600000
                        },
                        "optimizely": {
                            "environment": "production",
                            "sdkKey": "28Mn9riXNWZ7tLED1Mjbpf",
                            "cookieName": "ux_exp_id",
                            "cookieMaxAge": 31557600000,
                            "dataFileTimeout": 500,
                            "logLevel": 4
                        },
                        "clientErrorLogging": false,
                        "risk": {
                            "platform": "Web",
                            "ccAgentName": "WebApp",
                            "deviceFingerprinting": {
                                "iovationGlobalName": "IGLOO",
                                "maxDelay": 5000
                            }
                        },
                        "staticUrls": {
                            "assets": {
                                "host": "",
                                "path": "weblx/assets"
                            },
                            "images": {
                                "host": "",
                                "path": "weblx/images"
                            },
                            "static": {
                                "host": "https://assets.web.starbucksassets.com",
                                "path": "weblx/static"
                            }
                        },
                        "communicationPreferences": {
                            "enabled": true,
                            "appPath": "/settings/communication-preferences",
                            "legacyPath": "/account/profile/contactprefs",
                            "topics": {
                                "sbuxEmail": "sbux_email",
                                "sbuxGeneralEmail": "sbux_gen_email",
                                "sbuxPersonalizedEmail": "sbux_per_email",
                                "sbuxPostalMail": "sbux_mail",
                                "businessPartnerEmail": "affiliate_email"
                            }
                        },
                        "userSelectedLanguageCookieName": ".SbuxLang",
                        "enableMfaFeatures": true,
                        "oauthMfaChallengeErrorCode": "101010",
                        "guestGiftingForAddCardEnabled": true,
                        "surveyMonkey": {
                            "enabled": false,
                            "minimumSessionDelayToStartSurvey": 60000,
                            "minimumDelayAfterPageLoad": 30000,
                            "cacheTtl": 1209600000,
                            "initCode": "(function(t,e,s,o){var n,c,l;t.SMCX=t.SMCX||[],e.getElementById(o)||(n=e.getElementsByTagName(s),c=n[n.length-1],l=e.createElement(s),l.type=\"text/javascript\",l.async=!0,l.id=o,l.src=[\"https:\"===location.protocol?\"https://\":\"http://\",\"widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgdwwFDKE7MxdPDrljSOtz34DQXD2UQIEQkcmByMgcmwZo.js\"].join(\"\"),c.parentNode.insertBefore(l,c))})(window,document,\"script\",\"smcx-sdk\")",
                            "pickupSurveyInitCode": "(function(t,e,s,o){var n,c,l;t.SMCX=t.SMCX||[],e.getElementById(o)||(n=e.getElementsByTagName(s),c=n[n.length-1],l=e.createElement(s),l.type=\"text/javascript\",l.async=!0,l.id=o,l.src=[\"https:\"===location.protocol?\"https://\":\"http://\",\"widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgd_2BcEYo8O3z9VnKhrJB6wgHK6bXbgk0bAbTDbmrEc47wP.js\"].join(\"\"),c.parentNode.insertBefore(l,c))})(window,document,\"script\",\"smcx-sdk\")"
                        },
                        "trustArcEnabled": false,
                        "transferBalanceForAddCardEnabled": false
                    },
                    "supportedLocales": {
                        "en-US": {
                            "name": "English",
                            "coreAppBaseUrl": "https://app.starbucks.com",
                            "legacyBaseUrl": "https://www.starbucks.com",
                            "coreAppHasSignin": true,
                            "countryName": "U.S.",
                            "currency": "USD",
                            "secureUiUrlSrc": "https://secureui.starbucks.com",
                            "securePaymentOrigin": "https://globalsecureui.starbucks.com",
                            "securePaymentFormPath": "/SecureUI/v2/paymentinstruments/guest/en/us/single-use"
                        },
                        "en-IE": {
                            "name": "English",
                            "legacyBaseUrl": "https://www.starbucks.ie",
                            "defaultSigninRedirect": "/account/home",
                            "coreAppHasSignin": false,
                            "countryName": "Ireland",
                            "currency": "GBP"
                        },
                        "en-GB": {
                            "name": "English",
                            "legacyBaseUrl": "https://www.starbucks.co.uk",
                            "defaultSigninRedirect": "/account/home",
                            "coreAppHasSignin": false,
                            "countryName": "UK",
                            "currency": "GBP"
                        },
                        "en-CA": {
                            "name": "English",
                            "coreAppBaseUrl": "https://app.starbucks.ca",
                            "legacyBaseUrl": "https://www.starbucks.ca",
                            "coreAppHasSignin": true,
                            "altLang": "fr-CA",
                            "multiLangDefault": "en-CA",
                            "countryName": "Canada",
                            "currency": "CAD",
                            "secureUiUrlSrc": "https://secureui.starbucks.com",
                            "secureUiProxyUrl": "/bff/payment-method/secureui-url-proxy",
                            "secureUiShouldProxy": true,
                            "securePaymentOrigin": "https://secureui.starbucks.ca",
                            "securePaymentFormPath": "/SecureUI/v2/paymentinstruments/guest/en/ca/single-use"
                        },
                        "fr-CA": {
                            "name": "Français",
                            "coreAppBaseUrl": "https://app.starbucks.ca",
                            "legacyBaseUrl": "https://fr.starbucks.ca",
                            "coreAppHasSignin": true,
                            "altLang": "en-CA",
                            "multiLangDefault": "en-CA",
                            "countryName": "Canada",
                            "currency": "CAD",
                            "secureUiUrlSrc": "https://secureui.starbucks.com",
                            "secureUiProxyUrl": "/bff/payment-method/secureui-url-proxy",
                            "secureUiShouldProxy": true,
                            "securePaymentOrigin": "https://secureui.starbucks.ca",
                            "securePaymentFormPath": "/SecureUI/v2/paymentinstruments/guest/fr/ca/single-use"
                        },
                        "de-DE": {
                            "name": "Deutsch",
                            "legacyBaseUrl": "https://www.starbucks.de",
                            "defaultSigninRedirect": "/account/home",
                            "coreAppHasSignin": false,
                            "countryName": "Deutschland",
                            "currency": "EUR"
                        },
                        "fr-FR": {
                            "name": "Français",
                            "legacyBaseUrl": "https://www.starbucks.fr",
                            "defaultSigninRedirect": "/account/home",
                            "coreAppHasSignin": false,
                            "countryName": "France",
                            "currency": "EUR"
                        },
                        "pt-BR": {
                            "name": "Português",
                            "legacyBaseUrl": "https://www.starbucks.com.br",
                            "defaultSigninRedirect": "/account/home",
                            "coreAppHasSignin": false,
                            "countryName": "Brasil",
                            "currency": "BRL"
                        }
                    },
                    "globalNav": {
                        "mainNavLinks": [{
                            "name": "Menu",
                            "url": "/menu",
                            "data-e2e": "dotComHamburgerNavMenu",
                            "subNavItems": [{
                                "name": "All products",
                                "url": "/menu",
                                "data-e2e": "dotComHamburgerNavMenuLink"
                            }, {
                                "name": "Featured",
                                "url": "https://www.starbucks.com/menu/featured",
                                "data-e2e": "dotComHamburgerNavFeaturedLink"
                            }, {
                                "name": "Previous",
                                "url": "/menu/previous",
                                "data-e2e": "dotComHamburgerNavPreviousLink"
                            }, {
                                "name": "Favorites",
                                "url": "/menu/favorites",
                                "data-e2e": "dotComHamburgerNavFavoritesLink"
                            }]
                        }, {
                            "name": "Rewards",
                            "url": "/rewards",
                            "data-e2e": "dotComHamburgerNavRewards"
                        }, {
                            "name": "Gift Cards",
                            "url": "/gift",
                            "data-e2e": "dotComHamburgerNavMenuGift"
                        }],
                        "accountNav": {
                            "subNavItems": [{
                                "name": "Card management",
                                "url": "/cards"
                            }, {
                                "name": "My Rewards",
                                "url": "/rewards"
                            }, {
                                "name": "History",
                                "url": "/history"
                            }, {
                                "name": "Personal info",
                                "url": "/personal"
                            }, {
                                "name": "Payment methods",
                                "url": "/payment-method"
                            }, {
                                "name": "Settings",
                                "url": "/settings"
                            }]
                        }
                    },
                    "footerNavLinks": [{
                        "name": "Responsibility",
                        "url": "https://www.starbucks.com/responsibility"
                    }, {
                        "name": "Web Accessibility",
                        "url": "https://www.starbucks.com/about-us/company-information/online-policies/web-accessibility"
                    }, {
                        "name": "Privacy Policy",
                        "url": "https://www.starbucks.com/about-us/company-information/online-policies/privacy-policy"
                    }, {
                        "name": "Terms of Use",
                        "url": "https://www.starbucks.com/about-us/company-information/online-policies/terms-of-use"
                    }],
                    "onlinePolicyUrls": {
                        "cardsTermsAndConditions": "https://www.starbucks.com/card/card-terms-and-conditions",
                        "customerServiceUrl": "https://customerservice.starbucks.com",
                        "customerServiceMfaHelpUrl": "https://customerservice.starbucks.com/app/answers/list/p/148",
                        "privacyStatementContactUsUrl": "https://www.starbucks.com/customer-service/contact-us",
                        "privacyStatementUrl": "https://www.starbucks.com/about-us/company-information/online-policies/privacy-policy",
                        "rewardsTermsOfUse": "https://www.starbucks.com/rewards/terms",
                        "termsOfUseUrl": "https://www.starbucks.com/about-us/company-information/online-policies/terms-of-use"
                    },
                    "numericPostalCode": true,
                    "addressFieldNames": ["AddressLineFields", "CityField", "CountrySubdivisionSelect", "PostalCodeField"],
                    "countrySubdivisions": {
                        "AL": "Alabama",
                        "AK": "Alaska",
                        "AZ": "Arizona",
                        "AR": "Arkansas",
                        "CA": "California",
                        "CO": "Colorado",
                        "CT": "Connecticut",
                        "DE": "Delaware",
                        "DC": "District of Columbia",
                        "FL": "Florida",
                        "GA": "Georgia",
                        "HI": "Hawaii",
                        "ID": "Idaho",
                        "IL": "Illinois",
                        "IN": "Indiana",
                        "IA": "Iowa",
                        "KS": "Kansas",
                        "KY": "Kentucky",
                        "LA": "Louisiana",
                        "ME": "Maine",
                        "MD": "Maryland",
                        "MA": "Massachusetts",
                        "MI": "Michigan",
                        "MN": "Minnesota",
                        "MS": "Mississippi",
                        "MO": "Missouri",
                        "MT": "Montana",
                        "NE": "Nebraska",
                        "NV": "Nevada",
                        "NH": "New Hampshire",
                        "NJ": "New Jersey",
                        "NM": "New Mexico",
                        "NY": "New York",
                        "NC": "North Carolina",
                        "ND": "North Dakota",
                        "OH": "Ohio",
                        "OK": "Oklahoma",
                        "OR": "Oregon",
                        "PA": "Pennsylvania",
                        "RI": "Rhode Island",
                        "SC": "South Carolina",
                        "SD": "South Dakota",
                        "TN": "Tennessee",
                        "TX": "Texas",
                        "UT": "Utah",
                        "VT": "Vermont",
                        "VA": "Virginia",
                        "WA": "Washington",
                        "WV": "West Virginia",
                        "WI": "Wisconsin",
                        "WY": "Wyoming"
                    },
                    "chaseCreditBasePath": "/starbucks-rewards/credit-card",
                    "chasePrepaidBasePath": "/starbucks-rewards/prepaid-card",
                    "communicationPreferences": {
                        "email": ["sbux_email", "affiliate_email"],
                        "mail": ["sbux_mail"]
                    },
                    "showLinkToProfileFromCommunicationPreferences": true,
                    "chasePayAvailable": true,
                    "showSimplifiedAccountCreate": true,
                    "selectBirthdayMonthFirst": true,
                    "supportsMenuAndOrdering": true,
                    "phoneNumber": {
                        "countryCode": "01",
                        "length": "10"
                    },
                    "footer": {
                        "primaryLinkListsHeadingProps": {
                            "size": "xs",
                            "tagName": "h3"
                        },
                        "primaryLinkLists": [{
                            "headingText": "About Us",
                            "ariaExpandButtonLabel": "Expand About Us",
                            "links": [{
                                "text": "Our Heritage",
                                "href": "https://www.starbucks.com/about-us/company-information"
                            }, {
                                "text": "Our Coffee",
                                "href": "https://www.starbucks.com/coffee"
                            }, {
                                "text": "Stories and News",
                                "href": "https://stories.starbucks.com/"
                            }, {
                                "text": "Investor Relations",
                                "href": "https://investor.starbucks.com"
                            }, {
                                "text": "Policies and Standards",
                                "href": "https://www.starbucks.com/responsibility/global-report/policies"
                            }, {
                                "text": "Customer Service",
                                "href": "https://customerservice.starbucks.com/"
                            }]
                        }, {
                            "headingText": "Careers",
                            "ariaExpandButtonLabel": "Expand Careers",
                            "links": [{
                                "text": "Culture and Values",
                                "href": "https://www.starbucks.com/careers/working-at-starbucks/culture-and-values"
                            }, {
                                "text": "Diversity and Inclusion",
                                "href": "https://www.starbucks.com/responsibility/community/diversity-and-inclusion"
                            }, {
                                "text": "College Achievement Plan",
                                "href": "https://www.starbucks.com/careers/working-at-starbucks/education"
                            }, {
                                "text": "U.S. Careers",
                                "href": "https://www.starbucks.com/careers/"
                            }, {
                                "text": "International Careers",
                                "href": "https://www.starbucks.com/careers/international-careers"
                            }]
                        }, {
                            "headingText": "Social Impact",
                            "ariaExpandButtonLabel": "Expand Social Impact",
                            "links": [{
                                "text": "Ethical Sourcing",
                                "href": "https://www.starbucks.com/responsibility/sourcing"
                            }, {
                                "text": "Leading in Sustainability",
                                "href": "https://www.starbucks.com/responsibility/environment"
                            }, {
                                "text": "Strengthening Communities",
                                "href": "https://www.starbucks.com/responsibility/community"
                            }, {
                                "text": "Creating Opportunities",
                                "href": "https://www.starbucks.com/responsibility/community/opportunity-youth"
                            }, {
                                "text": "Global Social Impact Report",
                                "href": "https://www.starbucks.com/responsibility/global-report"
                            }]
                        }, {
                            "headingText": "For Business Partners",
                            "ariaExpandButtonLabel": "Expand For Business Partners",
                            "links": [{
                                "text": "Landlord Support Center",
                                "href": "https://www.starbucks.com/business/landlord-faq"
                            }, {
                                "text": "Suppliers",
                                "href": "https://www.starbucks.com/business/suppliers"
                            }, {
                                "text": "Corporate Gift Card Sales",
                                "href": "https://www.starbuckscardb2b.com/",
                                "target": "_blank"
                            }]
                        }, {
                            "headingText": "Ways To Order",
                            "ariaExpandButtonLabel": "Expand Ways To Order",
                            "links": [{
                                "text": "Order on the Web",
                                "href": "https://www.starbucks.com/menu"
                            }, {
                                "text": "Download the App",
                                "href": "https://www.starbucks.com/coffeehouse/mobile-order"
                            }, {
                                "text": "Delivery",
                                "href": "https://delivery.starbucks.com/",
                                "target": "_blank"
                            }, {
                                "text": "Google Assistant",
                                "href": "https://www.starbucks.com/promo/googleassistant"
                            }]
                        }],
                        "socialMediaIcons": [{
                            "name": "spotify",
                            "url": "https://open.spotify.com/user/starbucks"
                        }, {
                            "name": "facebook",
                            "url": "https://facebook.com/starbucks"
                        }, {
                            "name": "pinterest",
                            "url": "https://www.pinterest.com/starbucks/"
                        }, {
                            "name": "instagram",
                            "url": "https://instagram.com/starbucks"
                        }, {
                            "name": "youtube",
                            "url": "https://www.youtube.com/starbucks"
                        }, {
                            "name": "twitter",
                            "url": "https://twitter.com/starbucks/"
                        }],
                        "secondaryLinkList": [{
                            "text": "Privacy Policy",
                            "href": "https://www.starbucks.com/about-us/company-information/online-policies/privacy-policy"
                        }, {
                            "text": "Terms of Use",
                            "href": "https://www.starbucks.com/about-us/company-information/online-policies/terms-of-use"
                        }, {
                            "text": "CA Supply Chain Act",
                            "href": "https://globalassets.starbucks.com/assets/A2A072E3411C4A6ABAEB8D6BCF286F43.pdf"
                        }, {
                            "text": "Submit Your Idea",
                            "href": "https://ideas.starbucks.com/"
                        }]
                    },
                    "surveyMonkeyEnabled": true,
                    "trustArc": {
                        "enabled": true,
                        "domain": "starbuckstest.com",
                        "productName": "Chocolate chip cookie ",
                        "productImageUri": "https://globalassets.starbucks.com/assets/7274a0da5453434aaa63b133edd3ce5c.jpg",
                        "productPagePath": "/menu/product/2122714/single?parent=%2Ffood%2Fbakery%2Fcookies-and-brownies"
                    },
                    "mapDefaults": {
                        "lat": 39.635307,
                        "lng": -101.337891,
                        "zoom": 5
                    },
                    "limit": 50,
                    "panThreshold": 1.6,
                    "searchRadius": 50,
                    "searchRadiusLimit": 250,
                    "singleLocationZoom": 15,
                    "zoomThreshold": 6,
                    "geolocationThreshold": 1600,
                    "googleMapsUrl": "https://maps.googleapis.com/maps/api/js?v=3&client=gme-starbuckscorporation&libraries=places&language=en-US",
                    "addressFields": [{
                        "fieldName": "streetAddressLine1",
                        "postFieldCharacter": "LINE_BREAK"
                    }, {
                        "fieldName": "streetAddressLine2",
                        "postFieldCharacter": "LINE_BREAK"
                    }, {
                        "fieldName": "city",
                        "postFieldCharacter": ", "
                    }, {
                        "fieldName": "countrySubdivisionCode",
                        "postFieldCharacter": " "
                    }, {
                        "fieldName": "postalCode",
                        "postFieldCharacter": "LINE_BREAK"
                    }],
                    "features": [{
                        "code": "ON",
                        "name": "Open Now",
                        "filterable": true,
                        "public": true
                    }, {
                        "code": "DT",
                        "name": "Drive-Thru",
                        "filterable": true,
                        "public": true
                    }, {
                        "code": "hrs24",
                        "name": "Open 24 hours per day",
                        "filterable": true,
                        "public": true
                    }, {
                        "code": "XO",
                        "name": "Mobile Order and Pay",
                        "filterable": true,
                        "public": true
                    }, {
                        "code": "UP",
                        "name": "Starbucks Pickup",
                        "filterable": false,
                        "public": true
                    }, {
                        "code": "CL",
                        "name": "Starbucks Reserve-Clover Brewed",
                        "filterable": true,
                        "public": true
                    }, {
                        "code": "GO",
                        "name": "Starbucks Wi-Fi",
                        "filterable": true,
                        "public": true
                    }, {
                        "code": "EM",
                        "name": "Starbucks Evenings",
                        "filterable": false,
                        "public": true
                    }, {
                        "code": "CL",
                        "name": "Starbucks Reserve",
                        "filterable": false,
                        "public": true
                    }, {
                        "code": "WA",
                        "name": "Oven-warmed Food",
                        "filterable": false,
                        "public": true
                    }, {
                        "code": "DR",
                        "name": "Digital Rewards",
                        "filterable": true,
                        "public": true
                    }, {
                        "code": "CD",
                        "name": "Mobile Payment",
                        "filterable": false,
                        "public": true
                    }, {
                        "code": "VS",
                        "name": "Verismo",
                        "filterable": false,
                        "public": true
                    }, {
                        "code": "11",
                        "name": "Brilliant Collection",
                        "filterable": false,
                        "public": false
                    }, {
                        "code": "12",
                        "name": "Dot Local Collection",
                        "filterable": false,
                        "public": false
                    }, {
                        "code": "FZ",
                        "name": "Fizzio Handcrafted Sodas",
                        "filterable": false,
                        "public": true
                    }, {
                        "code": "LB",
                        "name": "LaBoulange",
                        "filterable": false,
                        "public": true
                    }, {
                        "code": "LU",
                        "name": "Lunch",
                        "filterable": false,
                        "public": false
                    }, {
                        "code": "MX",
                        "name": "Music Experience",
                        "filterable": false,
                        "public": false
                    }, {
                        "code": "PS",
                        "name": "Playbook Store System",
                        "filterable": false,
                        "public": false
                    }, {
                        "code": "10",
                        "name": "Premium Collection",
                        "filterable": false,
                        "public": false
                    }, {
                        "code": "13",
                        "name": "Starbucks Reserve Christmas Blend",
                        "filterable": false,
                        "public": false
                    }, {
                        "code": "WC",
                        "name": "Wireless Charging",
                        "filterable": false,
                        "public": false
                    }, {
                        "code": "SD",
                        "name": "Street Delivery",
                        "filterable": false,
                        "public": false
                    }, {
                        "code": "NB",
                        "name": "Nitro Cold Brew",
                        "filterable": true,
                        "public": true
                    }, {
                        "code": "MC",
                        "name": "Mercato",
                        "filterable": false,
                        "public": true
                    }],
                    "metric": false
                },
                "hamburgerNav": {
                    "isOpen": false
                },
                "message": null,
                "dialog": null,
                "time": 1591300786019,
                "topSheet": [],
                "viewport": null,
                "scripts": {},
                "storeLocator": {
                    "expandedStoreState": null,
                    "locationState": {
                        "error": null,
                        "includesRecommendedLocations": false,
                        "loading": false,
                        "locations": [{
                            "recommendation": {},
                            "storeNumber": "22620-222825",
                            "id": "1008470",
                            "name": "Domkirkeplassen-Stavanger",
                            "phoneNumber": "458 46 094",
                            "coordinates": {
                                "latitude": 58.970037,
                                "longitude": 5.732303
                            },
                            "regulations": [],
                            "address": {
                                "streetAddressLine1": "Domkirkeplassen 1",
                                "streetAddressLine2": null,
                                "streetAddressLine3": null,
                                "city": "Stavanger",
                                "countrySubdivisionCode": "11",
                                "countryCode": "NO",
                                "postalCode": "4006"
                            },
                            "timeZoneInfo": {
                                "currentTimeOffset": 120,
                                "windowsTimeZoneId": "W. Europe Standard Time",
                                "olsonTimeZoneId": "GMT+1:00 Europe/Oslo"
                            },
                            "brandName": "Starbucks",
                            "ownershipTypeCode": "LS",
                            "open": false,
                            "openStatusText": "Closed",
                            "addressLines": ["Domkirkeplassen 1", "Stavanger, 11 4006"],
                            "mop": {
                                "ready": false,
                                "wait": null
                            },
                            "schedule": [{
                                "dayName": "Today",
                                "hours": "11:00 AM to 6:00 PM",
                                "open": true,
                                "holiday": ""
                            }, {
                                "dayName": "Tomorrow",
                                "hours": "11:00 AM to 6:00 PM",
                                "open": true,
                                "holiday": ""
                            }, {
                                "dayName": "Saturday",
                                "hours": "11:00 AM to 6:00 PM",
                                "open": true,
                                "holiday": ""
                            }, {
                                "dayName": "Sunday",
                                "hours": "11:00 AM to 6:00 PM",
                                "open": true,
                                "holiday": ""
                            }, {
                                "dayName": "Monday",
                                "hours": "11:00 AM to 6:00 PM",
                                "open": true,
                                "holiday": ""
                            }, {
                                "dayName": "Tuesday",
                                "hours": "11:00 AM to 6:00 PM",
                                "open": true,
                                "holiday": ""
                            }, {
                                "dayName": "Wednesday",
                                "hours": "11:00 AM to 6:00 PM",
                                "open": true,
                                "holiday": ""
                            }],
                            "features": [{
                                "code": "WF",
                                "name": "Wireless Hotspot"
                            }, {
                                "code": "RW",
                                "name": "My Starbucks Rewards"
                            }],
                            "slug": "domkirkeplassen-stavanger-domkirkeplassen-1-stavanger-11-4006-no"
                        }, {
                            "recommendation": {},
                            "storeNumber": "51663-278970",
                            "id": "1019886",
                            "name": "Klubbgata,  Stavanger",
                            "phoneNumber": null,
                            "coordinates": {
                                "latitude": 58.970724,
                                "longitude": 5.73577
                            },
                            "regulations": [],
                            "address": {
                                "streetAddressLine1": "Klubbgata 5",
                                "streetAddressLine2": null,
                                "streetAddressLine3": null,
                                "city": "Stavanger",
                                "countrySubdivisionCode": "11",
                                "countryCode": "NO",
                                "postalCode": "4013"
                            },
                            "timeZoneInfo": {
                                "currentTimeOffset": 120,
                                "windowsTimeZoneId": "W. Europe Standard Time",
                                "olsonTimeZoneId": "GMT+1:00 Europe/Oslo"
                            },
                            "brandName": "Starbucks",
                            "ownershipTypeCode": "LS",
                            "open": false,
                            "openStatusText": "Closed",
                            "addressLines": ["Klubbgata 5", "Stavanger, 11 4013"],
                            "mop": {
                                "ready": false,
                                "wait": null
                            },
                            "schedule": [{
                                "dayName": "Today",
                                "hours": "11:00 AM to 6:00 PM",
                                "open": true,
                                "holiday": ""
                            }, {
                                "dayName": "Tomorrow",
                                "hours": "11:00 AM to 6:00 PM",
                                "open": true,
                                "holiday": ""
                            }, {
                                "dayName": "Saturday",
                                "hours": "11:00 AM to 6:00 PM",
                                "open": true,
                                "holiday": ""
                            }, {
                                "dayName": "Sunday",
                                "hours": "Closed",
                                "open": false,
                                "holiday": ""
                            }, {
                                "dayName": "Monday",
                                "hours": "11:00 AM to 6:00 PM",
                                "open": true,
                                "holiday": ""
                            }, {
                                "dayName": "Tuesday",
                                "hours": "11:00 AM to 6:00 PM",
                                "open": true,
                                "holiday": ""
                            }, {
                                "dayName": "Wednesday",
                                "hours": "11:00 AM to 6:00 PM",
                                "open": true,
                                "holiday": ""
                            }],
                            "features": [],
                            "slug": "klubbgata-stavanger-klubbgata-5-stavanger-11-4013-no"
                        }, {
                            "recommendation": {},
                            "storeNumber": "50786-275626",
                            "id": "1017552",
                            "name": "Kvadrat Nord",
                            "phoneNumber": "045836796",
                            "coordinates": {
                                "latitude": 58.877717,
                                "longitude": 5.72252
                            },
                            "regulations": [],
                            "address": {
                                "streetAddressLine1": "Gamle Stokka vei 1, 4813 Sandnes",
                                "streetAddressLine2": "Kvadrat Kjopesenter",
                                "streetAddressLine3": null,
                                "city": "Stavanger",
                                "countrySubdivisionCode": "11",
                                "countryCode": "NO",
                                "postalCode": "4313"
                            },
                            "timeZoneInfo": {
                                "currentTimeOffset": 120,
                                "windowsTimeZoneId": "W. Europe Standard Time",
                                "olsonTimeZoneId": "GMT+1:00 Europe/Oslo"
                            },
                            "brandName": "Starbucks",
                            "ownershipTypeCode": "LS",
                            "open": false,
                            "openStatusText": "Closed",
                            "addressLines": ["Gamle Stokka vei 1, 4813 Sandnes", "Kvadrat Kjopesenter", "Stavanger, 11 4313"],
                            "mop": {
                                "ready": false,
                                "wait": null
                            },
                            "schedule": [{
                                "dayName": "Today",
                                "hours": "10:00 AM to 7:00 PM",
                                "open": true,
                                "holiday": ""
                            }, {
                                "dayName": "Tomorrow",
                                "hours": "10:00 AM to 7:00 PM",
                                "open": true,
                                "holiday": ""
                            }, {
                                "dayName": "Saturday",
                                "hours": "10:00 AM to 6:00 PM",
                                "open": true,
                                "holiday": ""
                            }, {
                                "dayName": "Sunday",
                                "hours": "Closed",
                                "open": false,
                                "holiday": ""
                            }, {
                                "dayName": "Monday",
                                "hours": "10:00 AM to 7:00 PM",
                                "open": true,
                                "holiday": ""
                            }, {
                                "dayName": "Tuesday",
                                "hours": "10:00 AM to 7:00 PM",
                                "open": true,
                                "holiday": ""
                            }, {
                                "dayName": "Wednesday",
                                "hours": "10:00 AM to 7:00 PM",
                                "open": true,
                                "holiday": ""
                            }],
                            "features": [],
                            "slug": "kvadrat-nord-gamle-stokka-vei-1-4813-sandnes-stavanger-11-4313-"
                        }],
                        "resultCoordinates": {
                            "lat": 58.9699756,
                            "lng": 5.7331074
                        },
                        "selectedStoreId": "1008470",
                        "highlightedStoreId": null,
                        "locationQuery": {
                            "lat": 58.9699756,
                            "lng": 5.7331074
                        },
                        "locationQueryUrl": "/bff/locations?lat=58.9699756&lng=5.7331074&place=Stavanger%2C%20Norway",
                        "moreResultsAvailable": false,
                        "placeName": "Stavanger, Norway",
                        "placeNameNotFound": false,
                        "fetchAtLocation": false,
                        "shouldScroll": false,
                        "geolocationSearch": false
                    },
                    "mapState": {
                        "lat": null,
                        "lng": null,
                        "zoomLevel": null,
                        "locatorControlsHeight": 0,
                        "locatorPageRectangle": null,
                        "userOverride": false,
                        "preventMovement": false,
                        "coordinatesUpdated": false,
                        "initialUrlZoomOutsideThreshold": false
                    },
                    "nearestLocationState": {
                        "loading": false,
                        "nearestNotFound": false,
                        "nearestStoreCoordinates": null,
                        "hasSearchedNearest": false
                    },
                    "selectedFeaturesState": [],
                    "transportMethodsState": {
                        "methods": ["Car", "Transit", "Walk", "Bike"],
                        "selected": "Car"
                    },
                    "filterState": {
                        "isOverlayOpen": false
                    }
                },
                "user": {
                    "sessionExpired": false,
                    "loggedOut": false,
                    "reAuthEligible": null,
                    "profile": {
                        "data": null,
                        "loading": false,
                        "lastFetch": null,
                        "lastError": null,
                        "mutationError": null,
                        "redeemedRewards": 0
                    },
                    "mfaFactors": {
                        "data": null,
                        "loading": false,
                        "lastFetch": null,
                        "lastError": null,
                        "mutationError": null
                    },
                    "sessionMeta": null,
                    "onboardingFlags": {
                        "data": null,
                        "loading": false,
                        "lastFetch": null,
                        "lastError": null,
                        "mutationError": null
                    },
                    "chaseStatus": {
                        "data": null,
                        "loading": false,
                        "lastFetch": null,
                        "lastError": null,
                        "mutationError": null
                    },
                    "betaFlags": {
                        "data": null,
                        "loading": false,
                        "lastFetch": null,
                        "lastError": null,
                        "mutationError": null
                    }
                }
            }
            window.__INTL_MESSAGES = {
                "errorBoundary.couldNotRecover": "The app had an error it couldn't recover from, please try refreshing the page, or clicking below.",
                "errorBoundary.refresh": "Refresh",
                "errorBoundary.somethingWentWrong": "Whoops, something went wrong 😢",
                "feedback.dialog.twist.body": "Take survey (< 1 min)",
                "feedback.dialog.twist.cancel": "No thanks",
                "feedback.dialog.twist.confirm": "Take survey",
                "feedback.dialog.twist.heading": "Share your impression of this feature!",
                "feedback.toast.body": "Help us improve this experience!",
                "feedback.toast.heading": "Feedback",
                "shared.404page.primaryText": "Oops!",
                "shared.404page.secondaryText": "We can’t find the page that you were looking for.",
                "shared.404page.tertiaryText": "You might try retyping the URL.",
                "shared.404page.title": "Page not found",
                "shared.CTAs.Ok": "Ok",
                "shared.CTAs.cancel": "Cancel",
                "shared.CTAs.closeLabel": "Close",
                "shared.CTAs.continue": "Continue",
                "shared.CTAs.cookiePreferences": "Cookie Preferences",
                "shared.CTAs.details": "Details",
                "shared.CTAs.done": "Done",
                "shared.CTAs.earnStars": "Earn Stars",
                "shared.CTAs.edit": "Edit {a11yMessage}",
                "shared.CTAs.findAStore": "Find a store",
                "shared.CTAs.goBack": "Go back",
                "shared.CTAs.gotIt": "Got it",
                "shared.CTAs.joinNow": "Join now",
                "shared.CTAs.leaveFeedback": "Leave feedback",
                "shared.CTAs.makeItAGroupOrder": "Make it a group order",
                "shared.CTAs.manage": "Manage",
                "shared.CTAs.noThanks": "No thanks",
                "shared.CTAs.notNow": "Not now",
                "shared.CTAs.order": "Order",
                "shared.CTAs.profile": "Profile",
                "shared.CTAs.redeem": "Redeem",
                "shared.CTAs.restrictionsApply": "Some restrictions apply",
                "shared.CTAs.save": "Save",
                "shared.CTAs.seeMore": "See more",
                "shared.CTAs.send": "Send",
                "shared.CTAs.signIn": "Sign in",
                "shared.CTAs.signOut": "Sign out",
                "shared.CTAs.startAnOrder": "Start an order",
                "shared.CTAs.takeSurvey": "Take survey",
                "shared.CTAs.tryAgain": "Try again",
                "shared.SiteSelectorOverlay.heading": "Choose a Location",
                "shared.a11yErrorMessagePrefix": "Error:",
                "shared.accounts.account": "Account",
                "shared.accounts.communicationPreferences": "Communication preferences",
                "shared.accounts.forgotYourPassword": "Forgot your password?",
                "shared.accounts.groupOrderHelpUsImprove": "While we process your order, take a 1-minute survey to help us improve this experience!",
                "shared.accounts.helpUsImprove": "Help us improve this experience!",
                "shared.accounts.history": "History",
                "shared.accounts.mfa": "2-Factor Authentication",
                "shared.accounts.newPassword": "New password",
                "shared.accounts.partnerNumber": "Partner number",
                "shared.accounts.password": "Password",
                "shared.accounts.personal": "Personal",
                "shared.accounts.security.addPhone": "Add phone number",
                "shared.accounts.security.editPhone": "Change phone number",
                "shared.accounts.settings": "Settings",
                "shared.accounts.settings.editEmail": "New email login",
                "shared.accounts.termsOfUse": "Terms of Use",
                "shared.addCard.button": "Add a card",
                "shared.addCard.message": "Add a Starbucks card so you can order ahead and earn Rewards.",
                "shared.addCard.title": "Almost there!",
                "shared.addToHomeScreen.iosTutorialStepOne": "Use the Share button",
                "shared.addToHomeScreen.iosTutorialStepThree": "Give it a name",
                "shared.addToHomeScreen.iosTutorialStepTwo": "Add to Home Screen",
                "shared.addressFields.invalidCharactersError": "Remove special characters",
                "shared.addressLineFields.line1.label": "Address line 1",
                "shared.addressLineFields.line2.instruction": "Optional",
                "shared.addressLineFields.line2.label": "Address line 2",
                "shared.addressLineFields.missingError": "Enter your address",
                "shared.app.components.offlineIndicator.offline": "You are offline",
                "shared.betaIndicator.text": "Beta",
                "shared.betas.whatYouThink": "Tell us what you think!",
                "shared.birthday.birthDateError": "Select your birthday month and day",
                "shared.birthday.birthDayError": "Select day",
                "shared.birthday.birthMonthError": "Select month",
                "shared.birthday.dayLabel": "Day",
                "shared.birthday.dayLabelLong": "Birthdate Day",
                "shared.birthday.monthLabel": "Month",
                "shared.birthday.monthLabelLong": "Birthdate Month",
                "shared.birthday.selectMonthFirst": "Select a month",
                "shared.buyingData.selectPaymentMethod": "Select payment method",
                "shared.cardErrorBody.checkCardInformation": "Check your card information and try again. (You can also get started with a digital Starbucks Card already added to your account.)",
                "shared.cardErrorBody.internalServerError": "There was an error adding your card, please try again later",
                "shared.cardErrorBody.startDigitalCard": "(You can also get started with a digital Starbucks Card already added to your account.)",
                "shared.cardErrorBody.tryDifferentCard": "Try a different card. (You can also get started with a digital Starbucks Card already added to your account.)",
                "shared.cardErrorHeader.cardClosed": "This Starbucks Card is closed.",
                "shared.cardErrorHeader.cardInactive": "This card isn’t active. Check your card information or try a different card.",
                "shared.cardErrorHeader.cardRegistered": "This card has already been added",
                "shared.cardErrorHeader.checkCardInformation": "That card number or security code doesn’t look right.",
                "shared.cardErrorHeader.internalServerError": "Something went wrong on our end. 😳",
                "shared.cardErrorHeader.lostStolenCard": "This card has been marked as lost or stolen",
                "shared.carousel.mainLabel": "Carousel content with {slideCount} slides. Use the previous and next buttons or swipe right or left to change the currently displayed slides.",
                "shared.carousel.nextButton": "Next slide",
                "shared.carousel.pageButtons": "go to page {pageNumber}",
                "shared.carousel.prevButton": "Previous slide",
                "shared.changeRegion.label": "Change region",
                "shared.city.invalidCharactersError": "City name cannot have special characters",
                "shared.cityField.label": "City",
                "shared.cityField.missingError": "Enter your city",
                "shared.commonWords.privacyNoticeLink.text": "Privacy Policy",
                "shared.commonWords.starbucksRewardsTrademark": "Starbucks® Rewards",
                "shared.commonWords.stars": "Stars",
                "shared.communicationPreferences.accountHoldersLink": "If you have an account, you can {communicationPreferencesLink}",
                "shared.communicationPreferences.linkText": "change your preferences",
                "shared.confirmNavigation": "Not yet in our web app. Go to Starbucks.com?",
                "shared.confirmReauth": "Your login expired. Sign in again to view personalized features?",
                "shared.confirmStoreDialog.cancel": "Change store",
                "shared.confirmStoreDialog.confirm": "Confirm",
                "shared.confirmStoreDialog.title": "Confirm pickup store",
                "shared.contentCrateLoading.title": "Loading content... (steaming coffee cup)",
                "shared.countrySubdivisionField.error": "Please select state from the dropdown.",
                "shared.countrySubdivisionField.label": "State",
                "shared.dialog.confirm": "OK",
                "shared.emailField.errorExistence": "Please enter your email address.",
                "shared.emailField.invalidError": "Please enter a valid email address.",
                "shared.emailField.label": "Email address",
                "shared.emailField.usernameHint": "This will be your username",
                "shared.errors.chasePayErrorMessage": "Something went wrong with Chase Pay. Try again or choose a different payment option.",
                "shared.externalLink": "opens in new window",
                "shared.firstLastName.invalidCharactersError": "First/Last name cannot have special characters or numerals",
                "shared.firstName.invalidError": "Please enter a valid first name",
                "shared.firstName.label": "First name",
                "shared.firstName.tooLongError": "First name must be 50 characters or less",
                "shared.firstNameFields.charactersErrors": "First name cannot have special characters or numerals",
                "shared.firstNameFields.existenceError": "Enter your first name",
                "shared.firstNameFields.firstName.label": "First name",
                "shared.firstNameFields.profanityErrors": "Your first name does not pass our filter. Modify and try again.",
                "shared.footer.finePrint": "© {currentYear} Starbucks Coffee Company. All rights reserved.",
                "shared.globalNav.pushViewButtonLabelLeft": "Back to Main Menu",
                "shared.globalNav.pushViewButtonLabelRight": "Expand {navItemText} sub-menu",
                "shared.groupOrdering.cartClosedDialogMessageLine1": "Oops you are too late :(",
                "shared.groupOrdering.cartClosedDialogMessageLine2": "The group order has already been submitted.",
                "shared.groupOrdering.groupOrderButton": "Group Order",
                "shared.groupOrdering.howItWorksOverlay.groupOrder": "Group Order!",
                "shared.groupOrdering.howItWorksOverlay.howPayWorksAsContributor": "Your friend will pay for the full order (thank them again for picking up the tab)",
                "shared.groupOrdering.howItWorksOverlay.howStarsWork": "Psst – you get all the Stars!",
                "shared.groupOrdering.howItWorksOverlay.howToContribute": "Pick whatever you want and send your order",
                "shared.groupOrdering.howItWorksOverlay.howToInvite": "Share a link with friends to add their items",
                "shared.groupOrdering.howItWorksOverlay.howToPay": "Use your account to pay for the full order (they can owe you one)",
                "shared.groupOrdering.howItWorksOverlay.welcomeTo": "Welcome to",
                "shared.groupOrdering.howItWorksOverlay.whatToDoAfterContributing": "Sit back and relax, your friend will take it from here",
                "shared.header.skipLink": "Skip to main content",
                "shared.howAboutARealCookieDialog.header": "How about a real cookie?",
                "shared.languagePicker.changeLanguage": "change language",
                "shared.lastName.label": "Last name",
                "shared.lastName.tooLongError": "Last name must be 50 characters or less",
                "shared.lastNameFields.charactersError": "Last name cannot have special characters or numerals",
                "shared.lastNameFields.existenceError": "Enter your last name",
                "shared.lastNameFields.profanityErrors": "Your last name does not pass our filter. Modify and try again.",
                "shared.logo.altText": "Starbucks Coffee Company",
                "shared.loyaltyStatus.viewRewardsLink": "View your Rewards status.",
                "shared.messages.userFormInput.passwordComplexityError": "Password does not meet complexity requirements",
                "shared.messages.userFormInput.passwordInvalidError": "Password is invalid",
                "shared.messages.userFormInput.passwordReuseError": "You’ve used this one before. Try a different password.",
                "shared.messages.userFormInput.profaneNameError": "Your name does not pass our filter. Modify and try again.",
                "shared.mfa.codeSent.label": "Verification code sent",
                "shared.mfa.enterCode.subHeading": "To make sure it’s you, Starbucks will send a code to {phoneNumber}. Message and data rates may apply.",
                "shared.mfa.enterCodeExitDialog.body": "We sent a code to {phoneNumber}. Would you like to verify now, or later?",
                "shared.mfa.enterCodeExitDialog.cancel": "Not now",
                "shared.mfa.enterCodeExitDialog.confirm": "Verify now",
                "shared.mfa.enterCodeExitDialog.heading": "The number isn't verified yet",
                "shared.mfa.enterMfaCode": "We sent a verification code to {phoneNumber}. Enter it here.",
                "shared.mfa.enterMfaCode.error": "Enter a code",
                "shared.mfa.enterMfaCode.getCodeAnotherWay.button": "Get code another way",
                "shared.mfa.enterMfaCode.heading": "Enter Code",
                "shared.mfa.enterMfaCode.phoneVerificationSuccessMessage": "Phone number verified 👍",
                "shared.mfa.enterMfaCode.resendCode.label": "Resend Code",
                "shared.mfa.enterMfaCode.verifyCode.label": "Verify",
                "shared.mfa.enterMfaCode.yourMfaCode.label": "Your verification code",
                "shared.mfa.noMoreRetries.error": "No more tries left. Try again later.",
                "shared.mfa.nonSmsNumberDialog.body": "{phoneNumber} isn't set up to receive text messages. Would you like us to call you instead?",
                "shared.mfa.nonSmsNumberDialog.cancel": "Not now",
                "shared.mfa.nonSmsNumberDialog.confirm": "Call me",
                "shared.mfa.nonSmsNumberDialog.heading": "This number isn't SMS enabled",
                "shared.mfa.phoneNotSmsCapable.error": "Phone is not SMS capable",
                "shared.mfa.sendCodeOptionsCallRadio.label": "Phone call",
                "shared.mfa.sendCodeOptionsRadioGroupLegend": "How would you like us to send you a code?",
                "shared.mfa.sendCodeOptionsSubmit.button": "Send code",
                "shared.mfa.sendCodeOptionsTextRadio.label": "Text message (SMS)",
                "shared.mfa.twoFactorAuthentication.heading": "2-Factor Authentication",
                "shared.mfa.unexpected.error": "Something went wrong on our end. Try again later.",
                "shared.mfa.verifyNumber.heading": "Verify Number",
                "shared.mfa.verifyNumber.subHeading": "We want to make sure it’s you. We sent a verification code to {phoneNumber}. Message and data rates may apply. Enter it here.",
                "shared.mfa.wrongMfaCode.error": "Check code and try again.",
                "shared.mobileNav.hamburger": "{active, select, true {Collapse} false {Expand}} global navigation",
                "shared.name.nameProfaneError": "Your name did not pass our filter. Modify and try again.",
                "shared.navigationButton.close": "Close menu",
                "shared.navigationButton.open": "Open menu",
                "shared.notifications.confirmLabel": "OK",
                "shared.notifications.dismissLabel": "Dismiss this notification",
                "shared.notifications.unexpectedError": "Something went wrong on our end. 😳",
                "shared.overlay.loadCardButton": "Load your card",
                "shared.overlay.loadCardWelcomeOverlayBody": "We’ve created your account – the next thing to do is load your card.",
                "shared.overlay.loadCardWelcomeOverlayTitle": "You’re in!",
                "shared.overlay.orderAheadButton": "Order ahead",
                "shared.overlay.orderWelcomeOverlayBody": "You’re ready to order ahead and pay with your phone. Pay with your card or app to order ahead, earn free food and drinks, and get free refills on brewed coffee and tea.",
                "shared.overlay.orderWelcomeOverlayTitle": "Welcome!",
                "shared.overlay.payButton": "Pay in store",
                "shared.passwordField.passwordAriaHint": "Create a password 8 to 25 characters long that includes at least 1 uppercase and 1 lowercase letter, 1 number and 1 special character like an exclamation point or asterisk.",
                "shared.passwordField.passwordCriterionInvalid": "Not satisfied:",
                "shared.passwordField.passwordCriterionValid": "Satisfied:",
                "shared.passwordField.passwordHintCapital": "At least one capital letter",
                "shared.passwordField.passwordHintCharacterLength": "From 8 to 25 characters",
                "shared.passwordField.passwordHintLowercase": "At least one lowercase letter",
                "shared.passwordField.passwordHintNumber": "At least one number",
                "shared.passwordField.passwordHintSpecialCharacter": "At least one special character such as exclamation point or comma",
                "shared.passwordField.textToggleLong": "{toggleActive, select, true {Hide} false {Show}} password text",
                "shared.paymentMethodSelect.addCreditCard": "Add credit card",
                "shared.paymentMethodSelect.payment": "Payment",
                "shared.paymentMethods.addPaymentMethod": "Add payment method",
                "shared.paymentMethods.noPaymentMethodSelected": "To add money, select a payment method.",
                "shared.paymentMethods.payPalPaymentMethodAdded": "PayPal added",
                "shared.phoneNumberField.existenceError": "Please enter phone number",
                "shared.phoneNumberField.label": "Phone number",
                "shared.postalCodeField.label": "Zip code",
                "shared.postalCodeField.missingError": "Enter a valid zip code",
                "shared.privacyStatementLink": "Privacy Statement",
                "shared.reAuthForm.forgotPasswordLink": "Forgot your password?",
                "shared.reAuthForm.networkError": "Something went wrong",
                "shared.reAuthForm.passwordError": "Wrong password",
                "shared.reAuthForm.submitLabel": "Submit",
                "shared.reAuthForm.unsuccessfulError": "Sign in unsuccessful",
                "shared.redeem.options.orderAheadDetail": "You'll have a chance to redeem a Reward after you choose what you'd like",
                "shared.redeem.options.orderAheadPrompt": "Order ahead for pickup",
                "shared.redeem.options.orderInPersonDetail": "Let the barista know you'd like to redeem a Reward",
                "shared.redeem.options.orderInPersonPrompt": "In person, at Starbucks",
                "shared.redeem.options.orderModePrompt": "How are you ordering today?",
                "shared.redeem.options.overlay.orderAheadDetail": "If you'd like to redeem in person at the store, it works best on a phone or tablet.",
                "shared.redeem.options.overlay.orderAheadPrompt": "Order ahead to redeem a Reward",
                "shared.rewardsEmptyState.checkBackSoon": "Check back soon.",
                "shared.rewardsEmptyState.message": "We’re still brewing your {starbucksRewardsTrademark} info.",
                "shared.rewardsSR4Description.level3600": "Customize your drink (espresso shot, dairy substitute, syrup and more)",
                "shared.rewardsSR4Description.level3601": "Brewed hot coffee, bakery item or hot tea",
                "shared.rewardsSR4Description.level3602": "Handcrafted drink, hot breakfast or parfait",
                "shared.rewardsSR4Description.level3603": "Lunch sandwich, protein box or salad",
                "shared.rewardsSR4Description.level3604": "Select merchandise or at-home coffee",
                "shared.rewardsSR4Description.level3605": "Customize your drink (espresso shot, dairy substitute, syrup and more)",
                "shared.rewardsSR4Description.level3606": "Brewed hot coffee, bakery item or hot tea",
                "shared.rewardsSR4Description.level3607": "Handcrafted drink, hot breakfast or parfait",
                "shared.rewardsSR4Description.level3608": "Lunch sandwich, protein box or salad",
                "shared.rewardsSR4Description.level3609": "Select merchandise or at-home coffee",
                "shared.rewardsStatusMessage.hasRewards": "{displayNumber} free drink or food {displayNumber, plural, one {Reward} other {Rewards}}",
                "shared.rewardsStatusMessage.nextReward": "Collect {stars} more Stars for another Reward",
                "shared.rewardsStatusMessage.noStars": "Make a purchase to start collecting Stars",
                "shared.rewardsStatusMessage.starBalance": "Star balance",
                "shared.rewardsStatusMessage.untilFirstReward": "{displayNumber, plural, one {# more Star} other {# more Stars}} until your free Reward",
                "shared.rewardsStatusMessage.untilGold": "{displayNumber, plural, one {# more Star} other {# more Stars}} to Gold",
                "shared.selectStoreDialog.confirm": "Select Store",
                "shared.selectStoreDialog.title": "Please select a store before continuing to the cart.",
                "shared.starBalance.starCount": "You have {starCount} Reward {starCount, plural, one {star} other {stars}}",
                "shared.storedValueCardsSelect.label": "Select card to add money",
                "shared.svcMessages.autoReloadLabel": "Auto reload",
                "shared.svcMessages.notifications.transferBalanceSuccess": "{amount} transferred to card ({lastFourDigits})",
                "shared.svcMessages.reportLostStolen.lostCardReportErrorText": "The card balance was not transferred",
                "shared.svcMessages.transferCardBalance": "Transfer balance",
                "shared.tenuredGoldMedal.imageAlt": "Star badge celebrating your membership",
                "shared.userBundle.reAuthDialogBody": "Hey {name}, we need your password to be sure it's you.",
                "shared.userBundle.reAuthDialogTitle": "Re-enter password",
                "shared.userBundle.reAuthorizeBody": "Something went wrong. Try again",
                "expandedLocationCardDetails.directionsLink": "Get Directions",
                "expandedLocationCardDetails.featuresHeading": "Amenities",
                "expandedLocationCardDetails.featuresNotAvailable": "Store features not available",
                "expandedLocationCardDetails.kmAway": "{distance} km away from you",
                "expandedLocationCardDetails.milesAway": "{distance, plural, one {# mile} other {# miles}} away from you",
                "expandedLocationCardDetails.phoneLabel": "Phone number:",
                "expandedLocationCardDetails.scheduleHeading": "Hours",
                "expandedLocationCardDetails.scheduleNotAvailable": "Schedule not available",
                "expandedLocationcardDetails.expandedLabel": "Expanded details for {storeName}",
                "geolocateButton.label": "Find locations near me",
                "locationCard.addFavoriteLabel": "Add {storeName} to your list of favorite stores",
                "locationCard.buttonLabel": "Select {storeName}",
                "locationCard.kmAway": "{distance} km away",
                "locationCard.kmShort": "{distance} km",
                "locationCard.linkLabel": "Store details for {storeName}",
                "locationCard.milesAway": "{distance, plural, one {# mile} other {# miles}} away",
                "locationCard.milesShort": "{distance} mi",
                "locationCard.removeFavoriteLabel": "Remove {storeName} from your list of favorite stores",
                "locationCard.travelTimeInMinutes": "{minutes, plural, one {1 minute away} other {# minutes away}}",
                "locationCard.travelTimeOverHour": "Over an hour away",
                "locationCardListTitle.geolocated": "{locationCount, plural, =0 {No Stores } one {1 Store } other {{locationCount} Stores}} near your location",
                "locationCardListTitle.initial": "Store Search Results",
                "locationCardListTitle.loading": "Loading Store Search Results",
                "locationCardListTitle.placename": "{locationCount, plural, =0 {No Stores } one {1 Store } other {{locationCount} Stores}} near {placeName}",
                "locatorControls.activeFilterCount": "{filterCount, plural, zero {no filters} one {# filter} other {# filters}} active",
                "locatorControls.filterHeading": "Search Controls",
                "locatorControls.filterToggle": "Filter",
                "locatorControls.filterToggleLabel": "Show options for filtering store results",
                "locatorErrorCard.buttonText": "Expand Search",
                "locatorErrorCard.mustLoginToFavorite.message": "You must sign in to add this store to your favorites.",
                "locatorErrorCard.noStoresFoundOrderingEnabled": "Try moving the map or zooming out.",
                "locatorErrorCard.noStoresHeading": "No stores were found.",
                "locatorErrorCard.noStoresMessageExpand": "Do you want to look further away?",
                "locatorErrorCard.noStoresMessageHasActiveFilters": "Try disabling filters to see more.",
                "locatorErrorCard.noStoresMessageNearestNotFound": "We can't find any nearby stores.",
                "locatorErrorCard.notFoundHeading": "Whoops!",
                "locatorErrorCard.notFoundMessage": "We couldn't find that store.",
                "locatorErrorCard.notFoundSuggestion": "Please search again.",
                "locatorErrorCard.placeNameNotFoundHeading": "Whoops!",
                "locatorErrorCard.placeNameNotFoundMessage": "We couldn't find that location.",
                "locatorErrorCard.placeNameNotFoundMessageSuggestion": "Please search again.",
                "locatorErrorCard.zoomOutTooFarHeading": "Zoomed out too far",
                "locatorErrorCard.zoomOutWithoutResultsMessage": "Try searching for a location or zooming in to see results.",
                "locatorErrorCard.zoomedOutWithResultsMessage": "Zoom in to see results.",
                "locatorFilterItem.labelVerb": "{active, select, true {Deactivate} false {Activate}} filter:",
                "locatorMap.menuNotAvailable": "Menu not available for this store.",
                "locatorMapZoomControls.zoomInLabel": "Zoom map in",
                "locatorMapZoomControls.zoomOutLabel": "Zoom map out",
                "locatorSearch.buttonLabel": "Submit search term",
                "locatorSearch.formLabel": "Search for Starbucks stores",
                "locatorSearch.inputLabel": "Enter a location to search for Starbucks stores",
                "locatorSearch.placeholder": "Find a store",
                "storeLocator.filterOverlay.applyAria": "Apply chosen filters",
                "storeLocator.filterOverlay.applyButton": "Apply",
                "storeLocator.filterOverlay.clearAria": "Clear all filters and go to results",
                "storeLocator.filterOverlay.clearFiltersButton": "Clear All",
                "storeLocator.filterOverlay.closeButton": "Hide options for filtering store results",
                "storeLocator.filterOverlay.heading": "Filters",
                "storeLocator.locationCardListSection.favorite": "Favorite",
                "storeLocator.locationCardListSection.nearby": "Nearby",
                "storeLocator.locationCardListSection.previous": "Previous",
                "storeLocator.metaDescription": "Our Starbucks store locator will help you find locations near you where you can enjoy great beverages and wi-fi. Find a Starbucks now.",
                "storeLocator.notifications.unexpectedError": "There was an unexpected error.",
                "storeLocator.storeList.confirmStore": "Confirm Store",
                "storeLocator.storeList.confirmStoreDetails": "{storeName} is the Starbucks you want to order from.",
                "storeLocator.title": "Store Locator"
            };
            window.__INTL_FORMATS = {
                "number": {
                    "money": {
                        "currency": "USD",
                        "style": "currency"
                    },
                    "moneyRounded": {
                        "currency": "USD",
                        "style": "currency",
                        "maximumFractionDigits": 0,
                        "minimumFractionDigits": 0
                    }
                }
            };
        </script>
        <script src="https://assets.web.starbucksassets.com/weblx/static/manifest.c76e28a3b30b935ac0a0.js"></script>
        <script src="https://assets.web.starbucksassets.com/weblx/static/vendor.1beb2165f07538282bd3.chunk.js"></script>
        <script src="https://assets.web.starbucksassets.com/weblx/static/react.f4f8df1db2bb99b7df13.chunk.js"></script>
        <script src="https://assets.web.starbucksassets.com/weblx/static/optimizely.376e817501416b02b779.chunk.js"></script>
        <script src="https://assets.web.starbucksassets.com/weblx/static/patternLib.63374fa86f0bb2ae1aae.chunk.js"></script>
        <script src="https://assets.web.starbucksassets.com/weblx/static/shared.259b0dd4bb3febe745a3.chunk.js"></script>
        <script src="https://assets.web.starbucksassets.com/weblx/static/lodash.b707bb016c6da6b9ba45.chunk.js"></script>
        <script src="https://assets.web.starbucksassets.com/weblx/static/storeLocator.cf860b88b296bb2fb4d1.chunk.js"></script>
    </body>
</html>
