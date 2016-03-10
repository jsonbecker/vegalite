! function(e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var n;
        n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, (n.vg || (n.vg = {})).embed = e()
    }
}(function() {
    return function e(n, t, a) {
        function i(r, u) {
            if (!t[r]) {
                if (!n[r]) {
                    var d = "function" == typeof require && require;
                    if (!u && d) return d(r, !0);
                    if (o) return o(r, !0);
                    var l = new Error("Cannot find module '" + r + "'");
                    throw l.code = "MODULE_NOT_FOUND", l
                }
                var s = t[r] = {
                    exports: {}
                };
                n[r][0].call(s.exports, function(e) {
                    var t = n[r][1][e];
                    return i(t ? t : e)
                }, s, s.exports, e, n, t, a)
            }
            return t[r].exports
        }
        for (var o = "function" == typeof require && require, r = 0; r < a.length; r++) i(a[r]);
        return i
    }({
        1: [function(e, n, t) {
            (function(t) {
                function a(e, n, t, a) {
                    u.util.load({
                        url: e
                    }, function(o, r) {
                        if (o || !r) console.error(o || "No data found at " + e);
                        else {
                            var d = n ? u.util.extend({
                                source: r
                            }, n) : JSON.parse(r);
                            i(t, d, a)
                        }
                    })
                }

                function i(e, n, t) {
                    var d, f, v, g = t || function() {},
                        m = [];
                    try {
                        if (u.util.isString(n)) return a(n, null, e, t);
                        if (n.source) d = n.source, f = JSON.parse(d);
                        else if (n.spec) f = n.spec, d = JSON.stringify(f, null, 2);
                        else {
                            if (n.url) return a(n.url, n, e, t);
                            f = n, d = JSON.stringify(f, null, 2), n = {
                                spec: f,
                                actions: !1
                            }
                        }
                        v = c[n.mode] || c.vega, f = p[v](f);
                        var h = r.select(e).classed("vega-embed", !0).html("");
                        if (n.parameters) {
                            var w = n.parameter_el ? r.select(n.parameter_el) : h,
                                y = w.append("div").attr("class", "vega-params");
                            m = n.parameters.map(function(e) {
                                return l.init(y, e, f)
                            })
                        }
                    } catch (x) {
                        g(x)
                    }
                    u.parse.spec(f, function(t, a) {
                        if (t) return void g(t);
                        try {
                            var u = n.renderer || "canvas",
                                c = n.actions || {},
                                p = a({
                                    el: e,
                                    data: n.data || void 0,
                                    renderer: u
                                });
                            if (n.actions !== !1) {
                                var w = h.append("div").attr("class", "vega-actions");
                                if (c["export"] !== !1) {
                                    var y = "canvas" === u ? "png" : "svg";
                                    w.append("a").text("Export as " + y.toUpperCase()).attr("href", "#").attr("target", "_blank").attr("download", (f.name || "vega") + "." + y).on("mousedown", function() {
                                        this.href = p.toImageURL(y), r.event.preventDefault()
                                    })
                                }
                                c.source !== !1 && w.append("a").text("View Source").attr("href", "#").on("click", function() {
                                    o(d), r.event.preventDefault()
                                }), c.editor !== !1 && w.append("a").text("Open in Vega Editor").attr("href", "#").on("click", function() {
                                    s(window, i.config.editor_url, {
                                        spec: d,
                                        mode: v
                                    }), r.event.preventDefault()
                                })
                            }
                            m.forEach(function(e) {
                                l.bind(e, p)
                            }), p.update(), g(null, {
                                view: p,
                                spec: f
                            })
                        } catch (x) {
                            g(x)
                        }
                    })
                }

                function o(e) {
                    var n = "<html><head>" + f.source_header + '</head><body><pre><code class="json">',
                        t = "</code></pre>" + f.source_footer + "</body></html>",
                        a = window.open("");
                    a.document.write(n + e + t), a.document.title = "Vega JSON Source"
                }
                var r = "undefined" != typeof window ? window.d3 : "undefined" != typeof t ? t.d3 : null,
                    u = "undefined" != typeof window ? window.vg : "undefined" != typeof t ? t.vg : null,
                    d = "undefined" != typeof window ? window.vl : "undefined" != typeof t ? t.vl : null,
                    l = e("./parameter"),
                    s = e("./post"),
                    f = {
                        editor_url: "http://vega.github.io/vega-editor/",
                        source_header: "",
                        source_footer: ""
                    },
                    c = {
                        vega: "vega",
                        "vega-lite": "vega-lite"
                    },
                    p = {
                        vega: function(e) {
                            return e
                        },
                        "vega-lite": function(e) {
                            return d.compile(e).spec
                        }
                    };
                i.config = f, n.exports = i
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            "./parameter": 2,
            "./post": 3
        }],
        2: [function(e, n, t) {
            (function(e) {
                function t(e, n) {
                    for (var t = n.signals || (n.signals = []), a = 0; a < t.length && t[a].name !== e.signal; ++a);
                    a === t.length && t.push({
                        name: e.signal,
                        init: e.value
                    }), (e.rewrite || []).forEach(function(t) {
                        f(t)(n, {
                            signal: e.signal
                        })
                    })
                }

                function a(e, n) {
                    var t = e.append("div").attr("class", "vega-param");
                    t.append("span").attr("class", "vega-param-name").text(n.name || n.signal);
                    var a = i;
                    switch (n.type) {
                        case "checkbox":
                            a = o;
                            break;
                        case "select":
                            a = r;
                            break;
                        case "radio":
                            a = u;
                            break;
                        case "range":
                            a = d
                    }
                    return a(t, n)
                }

                function i(e, n) {
                    var t = e.append("input").on("input", l);
                    for (var a in n) "signal" !== a && "rewrite" !== a && t.attr(a, n[a]);
                    t.attr("name", n.signal);
                    var i = t.node();
                    return {
                        dom: [i],
                        set: function(e) {
                            i.value = e
                        }
                    }
                }

                function o(e, n) {
                    var t = e.append("input").on("change", function() {
                        l.call(this, this.checked)
                    }).attr("type", "checkbox").attr("name", n.signal).attr("checked", n.value || null).node();
                    return {
                        dom: [t],
                        set: function(e) {
                            t.checked = !!e || null
                        }
                    }
                }

                function r(e, n) {
                    var t = e.append("select").attr("name", n.signal).on("change", function() {
                        l.call(this, this.options[this.selectedIndex].__data__)
                    });
                    t.selectAll("option").data(n.options).enter().append("option").attr("value", vg.util.identity).attr("selected", function(e) {
                        return e === n.value || null
                    }).text(vg.util.identity);
                    var a = t.node();
                    return {
                        dom: [a],
                        set: function(e) {
                            var t = n.options.indexOf(e);
                            a.selectedIndex = t
                        }
                    }
                }

                function u(e, n) {
                    var t = e.append("span").attr("class", "vega-param-radio"),
                        a = n.options.map(function(e) {
                            var a = "vega-option-" + n.signal + "-" + e,
                                i = t.append("input").datum(e).on("change", l).attr("id", a).attr("type", "radio").attr("name", n.signal).attr("value", e).attr("checked", e === n.value || null);
                            return t.append("label").attr("for", a).text(e), i.node()
                        });
                    return {
                        dom: a,
                        set: function(e) {
                            for (var n = 0; n < a.length; ++n) a[n].value === e && (a[n].checked = !0)
                        }
                    }
                }

                function d(e, n) {
                    var t = void 0 !== n.value ? n.value : (+n.max + +n.min) / 2,
                        a = e.append("input").on("input", function() {
                            i.text(this.value), l.call(this, +this.value)
                        }).attr("type", "range").attr("name", n.signal).attr("value", t).attr("min", n.min).attr("max", n.max).attr("step", n.step || vg.util.bins({
                            min: n.min,
                            max: n.max,
                            maxbins: 100
                        }).step),
                        i = e.append("label").attr("class", "vega-range").text(t),
                        o = a.node();
                    return {
                        dom: [o],
                        set: function(e) {
                            o.value = e, i.text(e)
                        }
                    }
                }

                function l(e) {
                    void 0 === e && (e = this.__data__ || s.event.target.value), this.__vega__.signal(this.name, e).update()
                }
                var s = "undefined" != typeof window ? window.d3 : "undefined" != typeof e ? e.d3 : null,
                    f = ("undefined" != typeof window ? window.vg : "undefined" != typeof e ? e.vg : null).util.mutator;
                n.exports = {
                    init: function(e, n, i) {
                        return t(n, i), a(e, n)
                    },
                    bind: function(e, n) {
                        e.dom.forEach(function(e) {
                            e.__vega__ = n
                        }), n.onSignal(e.dom[0].name, function(n, t) {
                            e.set(t)
                        })
                    }
                }
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        3: [function(e, n, t) {
            n.exports = function(e, n, t) {
                function a(n) {
                    n.source === o && (d = 0, e.removeEventListener("message", a, !1))
                }

                function i() {
                    0 >= d || (o.postMessage(t, "*"), setTimeout(i, u), d -= 1)
                }
                var o = e.open(n),
                    r = 1e4,
                    u = 250,
                    d = ~~(r / u);
                e.addEventListener("message", a, !1), setTimeout(i, u)
            }
        }, {}]
    }, {}, [1])(1)
});