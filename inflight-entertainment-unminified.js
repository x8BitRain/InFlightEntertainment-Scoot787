(function() {
    window.InFlight.define("avod/v1/config", function() {
        return {
            ANDROID_HTML_ENABLED: false,
            LOG_LEVEL: 5
        }
    });
})();
(function() {
    var f;

    function m(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.h = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    };

    function aa(a, b) {
        this.s = a;
        this.Eb = b;
        this.category = a;
        this.level = b
    }
    aa.prototype.toString = function() {
        return "{category:" + this.s + ", level: " + this.Eb + "}"
    };

    function n(a) {
        this.s = a
    }
    var ca = null;

    function ea(a, b) {
        return a.s > b.s ? -1 : a.s < b.s ? 1 : 0
    }
    f = n.prototype;
    f.debug = function(a) {
        var b = [];
        Array.prototype.push.apply(b, arguments);
        b.unshift(0);
        this.Ta.apply(this, b)
    };
    f.info = function(a) {
        var b = [];
        Array.prototype.push.apply(b, arguments);
        b.unshift(1);
        this.Ta.apply(this, b)
    };
    f.warn = function(a) {
        var b = [];
        Array.prototype.push.apply(b, arguments);
        b.unshift(2);
        this.Ta.apply(this, b)
    };
    f.error = function(a) {
        var b = [];
        Array.prototype.push.apply(b, arguments);
        b.unshift(3);
        this.Ta.apply(this, b)
    };
    f.Ta = function(a, b) {
        var c, d;
        c = new Date;
        var e = [],
            g, h = 5;
        Array.prototype.push.apply(e, arguments);
        e.splice(0, 1);
        if (null !== ca)
            for (g = 0; g < ca.length; g++)
                if (d = ca[g], 0 <= this.s.indexOf(d.s) || "*" == d.s) {
                    h = d.Eb;
                    break
                }
        if (!(h > a)) {
            switch (a) {
                case 4:
                    d = "FATAL";
                    break;
                case 3:
                    d = "ERROR";
                    break;
                case 2:
                    d = "WARN";
                    break;
                case 1:
                    d = "INFO";
                    break;
                default:
                    d = "DEBUG"
            }
            c = c.getFullYear() + "-" + fa(c.getMonth(), 2) + "-" + fa(c.getDate(), 2) + "." + fa(c.getHours(), 2) + ":" + fa(c.getMinutes(), 2) + ":" + fa(c.getSeconds(), 2) + "." + fa(c.getMilliseconds(), 3);
            c += " [" +
                d + "] [avod/v1/js] [" + this.s + "]";
            window.console && ("object" == typeof window.console.log ? window.console.log(c + " " + e.join(", ")) : (e.unshift(c), window.console.log.apply(window.console, e)))
        }
    };

    function fa(a, b) {
        for (var c = "" + a; c.length < b;) c = "0" + c;
        return c
    };
    window.InFlight.define("avod/v1/null-on-error", {
        load: function(a, b, c, d) {
            function e(a) {
                c(a)
            }
            void 0 === d.paths[a] && (d.paths[a] = []);
            d = d.paths[a];
            d[d.length] = a;
            d[d.length] = "avod/v1/null";
            0 < a.length && b([a], e)
        }
    });
    var ga = {
        NONE: 0,
        HTML5: 1,
        FLASH: 2,
        HTML5_PARTIAL: 3,
        FLASH_PARTIAL: 4,
        IOS_SDK: 5,
        ANDROID_SDK: 6
    };

    function ha(a, b) {
        this.qa = a;
        this.Mb = b
    };
    var ia = {
        YES: "playable.yes",
        NO: "playable.no",
        REQUIRES_SOFTWARE: "playable.requires_software"
    };
    var q = null;
    var ja = {
        FLASH_PLUGIN: "flash_plugin",
        DRM_PLUGIN: "drm_plugin",
        IOS_APPLICATION: "ios_application",
        ANDROID_APPLICATION: "android_application"
    };

    function v(a, b) {
        this.ca = a;
        void 0 === b && (b = null);
        this.K = b
    }
    v.prototype.toString = function() {
        return this.ca
    };

    function ka() {
        var a = new v("playable.no");
        w(this, "aes_hls", a);
        w(this, "aes_hls_marlin", a)
    }

    function la(a, b) {
        var c = null;
        void 0 !== a[b] && (c = a[b]);
        return c
    }

    function w(a, b, c) {
        a[b] = c;
        "aes_hls" === b && w(a, "unencrypted_hls", c)
    };
    var ma = {
        NORMAL: "normal",
        PSEUDO: "pseudo",
        ABSOLUTE: "absolute"
    };

    function na() {}
    f = na.prototype;
    f.wa = function() {};
    f.X = function() {};
    f.ya = function() {};
    f.subtitleGetCode = function() {};
    f.subtitleSetCode = function() {};
    var oa = {
        1: {}
    };
    oa[1][2] = !0;
    oa[1][3] = !0;
    oa[2] = {};
    oa[2][1] = !0;
    oa[2][3] = !0;
    oa[3] = {};
    oa[3][2] = !0;
    oa[3][1] = !0;
    var qa = {
        NONE: 0,
        ONE: 1,
        ALL: 2
    };

    function ta() {}
    f = ta.prototype;
    f.k = function() {};
    f.i = function() {};
    f.da = function() {};
    f.R = function() {};
    f.C = function() {};
    f.sa = function() {};
    f.Ga = function() {};
    f.ra = function() {};
    f.ea = function() {};
    f.ta = function() {};
    f.Ia = function() {};
    f.Ha = function() {};
    f.Fa = function() {};
    f.H = function() {};

    function ua(a, b) {
        this.wb = void 0 === a || isNaN(a) ? 0 : a;
        this.vb = void 0 === b || isNaN(b) ? 0 : b;
        this.length = 0 === this.wb && 0 === this.vb ? 0 : 1
    }
    ua.prototype.start = function(a) {
        if (0 == this.length || isNaN(a) || 0 !== a) throw Error("Index out of bounds");
        return this.wb
    };
    ua.prototype.end = function(a) {
        if (0 == this.length || isNaN(a) || 0 !== a) throw Error("Index out of bounds");
        return this.vb
    };
    var va = ua.prototype;
    va.start = va.start;
    va.end = va.end;
    va.length = va.length;

    function x(a, b) {
        this.type = a;
        this.async = !1 !== b
    }
    x.prototype.toString = function() {
        return "event [" + this.type + "]"
    };
    var wa = x.prototype;
    wa.player = wa.player;
    wa.type = wa.type;
    wa.async = wa.async;

    function xa(a, b, c, d) {
        x.call(this, a, d);
        this.code = b;
        this.text = c
    }
    m(xa, x);
    xa.prototype.toString = function() {
        return "event [" + this.type + "] code [" + this.code + "] text [" + this.text + "]"
    };
    var ya = xa.prototype;
    ya.code = ya.code;
    ya.text = ya.text;

    function za(a, b) {
        x.call(this, a, b)
    }
    m(za, x);

    function Aa(a, b) {
        x.call(this, a, b)
    }
    m(Aa, x);

    function y(a, b, c, d) {
        x.call(this, a, d);
        this.code = b;
        this.text = c
    }
    m(y, x);
    y.prototype.toString = function() {
        return "event [" + this.type + "] code [" + this.code + "] text [" + this.text + "]"
    };
    var Ba = y.prototype;
    Ba.code = Ba.code;
    Ba.text = Ba.text;

    function Ca() {
        this.q = null
    }
    Ca.prototype.addEventListener = function(a, b) {
        var c;
        Da.debug("addEventListener [" + a + "]");
        null === this.q && (this.q = {});
        void 0 === this.q[a] ? (c = [], this.q[a] = c) : c = this.q[a];
        c.push(b)
    };
    Ca.prototype.removeEventListener = function(a, b) {
        var c, d = !1,
            e;
        Da.debug("removeEventListener [" + a + "]");
        if (null !== this.q && void 0 !== this.q[a]) {
            e = this.q[a];
            for (c = 0; c < e.length; c++) b === e[c] && (d = !0), d && c + 1 < e.length && (e[c] = e[c + 1]);
            d && e.length--;
            0 === e.length && delete this.q[a]
        }
    };
    Ca.prototype.dispatchEvent = function(a) {
        var b, c, d;
        Da.debug("dispatchEvent [" + a.type + "]");
        if (null !== this.q && void 0 !== this.q[a.type]) {
            c = this.q[a.type];
            d = [];
            for (b = 0; b < c.length; b++) d[b] = c[b];
            for (b = 0; b < d.length; b++) {
                c = d[b];
                try {
                    c.call(this, a)
                } catch (e) {
                    c = "Error executing event handler:\n\tType:\t" + a.type + "\n\tName:\t" + e.name + "\n\tMessage:\t" + e.message, void 0 !== e.stack ? Da.error(c + "\n" + e.stack) : Da.error(c)
                }
            }
        }
    };
    var Da = new n("avod.events.EventDispatcher");

    function Ea(a, b, c) {
        void 0 === c && (c = !1);
        this.delay = this.delay = b;
        x.call(this, a, c)
    }
    m(Ea, x);

    function A(a, b) {
        void 0 === b && (b = !1);
        x.call(this, a, b)
    }
    m(A, x);

    function Fa() {
        return {
            SUBTITLE_CHANGE: "subtitlechange",
            SOUNDTRACK_CHANGE: "soundtrackchange",
            CAN_PLAY: "canplay",
            CAN_PLAY_THROUGH: "canplaythrough",
            DURATION_CHANGE: "durationchange",
            EMPTIED: "emptied",
            ENDED: "ended",
            FULL_SCREEN_CHANGE: "fullscreenchange",
            LOAD_START: "loadstart",
            LOADED_DATA: "loadeddata",
            LOADED_META_DATA: "loadedmetadata",
            PAUSE: "pause",
            PLAY: "play",
            PLAYING: "playing",
            PLAYLIST_CHANGE: "playlistchange",
            PLAYLIST_END: "playlistend",
            PLAYLIST_INDEX_CHANGE: "playlistindexchange",
            PLAYLIST_REPEAT_MODE_CHANGE: "playlistrepeatmodechange",
            PLAYLIST_SHUFFLE_MODE_CHANGE: "playlistshufflemodechange",
            READY: "jsbridgecreated",
            REMOVE: "remove",
            SEEKED: "seeked",
            SEEKING: "seeking",
            CAN_SEEK: "canseek",
            STOP: "stop",
            SUSPEND: "suspend",
            TIME_UPDATE: "timeupdate",
            VOLUME_CHANGE: "volumechange",
            WAITING: "waiting"
        }
    };

    function Ha(a, b, c, d) {
        x.call(this, a, d);
        this.code = b;
        this.text = c
    }
    m(Ha, x);
    Ha.prototype.toString = function() {
        return "event [" + this.type + "] code [" + this.code + "] text [" + this.text + "]"
    };
    var Ia = Ha.prototype;
    Ia.code = Ia.code;
    Ia.text = Ia.text;

    function Ja(a, b) {
        this.Ob = a;
        this.ob = void 0 === b ? null : b
    };

    function Ka(a) {
        this.id = a;
        null === La && (La = {});
        La[this.id] = this;
        this.q = null
    }
    m(Ka, Ca);

    function Ma(a) {
        var b = null;
        void 0 !== La[a] && (b = La[a]);
        return b
    }
    f = Ka.prototype;
    f.close = function() {
        throw Error("init must be implemented by subclass");
    };
    f.Ra = function() {
        throw Error("init must be implemented by subclass");
    };
    f.setPersonalization = function() {
        throw Error("setPersonalization must be implemented by subclass");
    };
    f.getLastError = function() {
        throw Error("getLastError must be implemented by subclass");
    };
    f.open = function() {
        throw Error("open must be implemented by subclass");
    };
    f.jb = function() {
        throw Error("getProxyUrl must be implemented by subclass");
    };
    f.kb = function() {
        throw Error("getSessionKey must be implemented by subclass");
    };
    f.isPersonalized = function() {
        throw Error("isPersonalized must be implemented by subclass");
    };
    f.lb = function() {
        throw Error("getVersion must be implemented by subclass");
    };
    f.dispose = function() {
        delete La[this.id]
    };
    var La = null;
    var Na = null;
    var Oa = null;
    var Pa = null;
    var Qa = null;
    var Ra = window.JSON;

    function Sa(a, b, c) {
        if ("string" === typeof a) this.media_uri = a;
        else throw Error("Invalid media_uri");
        this.O = "number" === typeof b ? b : 0;
        this.sb = "number" === typeof c ? c : 0
    }

    function Ta(a) {
        return Ra.stringify({
            media_uri: a.media_uri,
            elapsed_time: a.O,
            sub_item: a.sb
        })
    }

    function Ua(a) {
        var b, c = null;
        if ("string" === typeof a) try {
            b = Ra.parse(a), c = new Sa(b.media_uri, b.elapsed_time, b.sub_item)
        } catch (d) {
            Va.warn("Failed to unserialize bookmark [" + a + "]")
        } else Va.warn("Bookmark must be of type [string].  type [" + (null === a ? "null" : typeof a) + "] was provided");
        return c
    }
    var Va = new n("avod.player.Bookmark");
    var C = null;
    var Xa = null;
    var Ya, Za = ["webkit", "moz", "o", "ms", "khtml"],
        $a, ab;
    if (!("cancelFullScreen" in document))
        for ($a = 0, ab = Za.length; $a < ab && (Ya = Za[$a], void 0 === document[Ya + "CancelFullScreen"]); $a++);

    function bb() {
        var a, b;
        null == cb && (this.r = null, this.Zb = [], db && (b = new MutationObserver(eb), a = {
            attributes: !0,
            childList: !0,
            jc: !0,
            subtree: !0
        }, b.observe(document.getElementsByTagName("html")[0], a), this.Zb.push(b)))
    }

    function fb() {
        null === cb && (cb = new bb);
        return cb
    }

    function gb(a) {
        var b = fb();
        db && (null === b.r && (b.r = []), b.r.push(a))
    }

    function eb() {
        var a = fb(),
            b;
        if (null !== a.r)
            for (b = 0; b < a.r.length; b++) a.r[b]()
    }
    var db = "undefined" !== typeof MutationObserver,
        cb = null;

    function hb() {
        null == ib && (this.ja = this.Ca = this.Db = this.r = null, "undefined" !== typeof document.hidden ? (this.Ca = "hidden", this.ja = "visibilitychange") : "undefined" !== typeof document.mozHidden ? (this.Ca = "mozHidden", this.ja = "mozvisibilitychange") : "undefined" !== typeof document.msHidden ? (this.Ca = "msHidden", this.ja = "msvisibilitychange") : "undefined" !== typeof document.webkitHidden && (this.Ca = "webkitHidden", this.ja = "webkitvisibilitychange"), window.addEventListener ? (jb.debug("add pageshow/pagehide/load/unload event handler"),
            window.addEventListener("pageshow", kb, !1), window.addEventListener("pagehide", kb, !1), window.addEventListener("load", kb, !1), window.addEventListener("unload", kb, !1)) : (jb.debug("add window.unload callback"), lb()), void 0 !== window.InFlight.addEventListener && (jb.debug("add inflight.app.wakeup event handler"), window.InFlight.addEventListener("inflight.app.wakeup", mb)), C.isiOS() || null === this.ja || (jb.debug("add visibility event handler"), document.addEventListener(this.ja, kb, !1)), ib = this)
    }

    function nb() {
        null === ib && (ib = new hb);
        return ib
    }

    function mb() {
        kb({
            type: "inflight.app.wakeup"
        })
    }

    function kb(a) {
        var b = nb(),
            c = !1,
            d = null,
            e = void 0 !== a.persisted ? a.persisted : !1;
        if (null !== b) {
            switch (a.type) {
                case "load":
                    c = !0;
                    d = ob;
                    break;
                case "unload":
                    c = !1;
                    d = rb;
                    break;
                case "pageshow":
                    c = !0;
                    d = e ? sb : ob;
                    break;
                case "pagehide":
                    c = !1;
                    d = e ? tb : rb;
                    break;
                case b.ja:
                    d = (c = !document[b.Ca]) ? sb : tb;
                    break;
                case "inflight.app.wakeup":
                    c = !0, d = sb
            }
            jb.debug("page visibility event [" + a.type + "] visible: [" + c + "] pageIsPersisted [" + e + "]");
            if (null !== d && d != b.Db && (b.Db = d, null !== b.r))
                for (a = 0; a < b.r.length; a++) b.r[a]({
                    type: d
                })
        }
    }

    function lb() {
        var a = kb,
            b = window.onunload;
        window.onunload = function() {
            b && b.call(window, {
                type: "unload"
            });
            a.call(window, {
                type: "unload"
            })
        }
    }
    var jb = new n("avod.utils.PageVisibilityDispatcher"),
        ib = null,
        ob = "page_load",
        rb = "page_unload",
        sb = "page_visible",
        tb = "page_hidden";
    var D = new n("avod.player.PlayerManager"),
        ub = {},
        vb = null,
        wb = null,
        xb = !0,
        yb = !1,
        zb = null,
        Ab = !0,
        Bb = !0;

    function E(a) {
        var b = null;
        void 0 !== ub[a] && (b = ub[a]);
        return b
    }

    function Cb(a) {
        var b = "null";
        null !== a && (b = a.target);
        D.debug("setFullScreenPlayer [" + b + "]");
        zb = a
    }

    function Db(a) {
        var b = null,
            c = null;
        if (a != Eb())
            for (b in D.debug("set persistent volume [" + a + "]"), Pa.setData("ifapi.avod.volume", a.toString()), 0 < a && (D.debug("set persistent max volume [" + a + "]"), Pa.setData("ifapi.avod.max_volume", a.toString())), ub) c = E(b), null !== c && c.setVolume(a)
    }

    function Eb() {
        var a = parseFloat(Pa.getData("ifapi.avod.volume"));
        isNaN(a) && (D.debug("persistent volume not available, setting to device volume"), a = 1);
        D.debug("get persistent volume [" + a + "]");
        return a
    }

    function Fb() {
        var a = parseFloat(Pa.getData("ifapi.avod.max_volume"));
        isNaN(a) && (D.debug("persistent max volume not available, setting to device volume"), a = 1);
        D.debug("get persistent max volume [" + a + "]");
        return a
    }

    function Gb() {
        var a = null;
        for (a in ub)
            if ("string" === typeof a) {
                var b = E(a);
                !xb || null !== vb && null !== wb && wb !== vb.PAState.OFF ? F(b.b, 3) : F(b.b, 2)
            }
    }

    function Hb(a) {
        void 0 === a ? window.InFlight.initService("flightdata/v1", Hb, Ib) : (a.decompressionState(function(a, c) {
            null === a && Jb({
                data: {
                    decompression_state: c
                }
            })
        }), Ab && a.paState(function(a, c) {
            null === a && Kb({
                data: {
                    pa_state: c
                }
            })
        }))
    }

    function Lb(a) {
        var b;
        b = 0;
        var c = [],
            d;
        a = E(a);
        if (null !== a && (b = a.b, null !== b && b.m && (d = b.k(), null != d && 0 < d.length)))
            if (1 < d.length)
                for (b = 0; b < d.length; b++) c[c.length] = a.type;
            else c[c.length] = a.type;
        return c
    }

    function Mb(a) {
        var b = null,
            c = [];
        for (b in ub) "string" === typeof b && b !== a && (c = c.concat(Lb(b)));
        return c
    }

    function Kb(a) {
        Ab && (isNaN(a.data.pa_state) && (D.warn("pa state is undefined"), a.data.pa_state = 0), a.data.pa_state !== wb && (D.debug("pa_state:\t" + a.data.pa_state), wb = a.data.pa_state, Gb()))
    }

    function Nb(a) {
        var b = null,
            c = null;
        D.debug("page visibility event [" + a.type + "]");
        switch (a.type) {
            case rb:
                Ub();
                break;
            case tb:
                a = null;
                D.debug("unload all players");
                for (a in ub) b = E(a), null !== b && b.b.Kb();
                break;
            case sb:
                for (b in Hb(), ub) c = E(b), null !== c && 2 == c.b.f && c.b.S()
        }
    }

    function Vb(a) {
        Bb && (a.online && Hb(), xb !== a.online && (xb = a.online, Gb()))
    }

    function Jb(a) {
        var b;
        if (b = !!a.data.decompression_state) D.debug("decompression_state:\t" + a.data.decompression_state), Ub();
        yb = b
    }

    function Ub() {
        var a = null,
            b;
        D.debug("destroy all players");
        for (a in ub) b = E(a), null !== b && b.remove()
    }

    function Wb(a) {
        a.onStateChange(Vb)
    }

    function Xb() {
        D.error("Error loading Network Service for avod/v1")
    }

    function Yb(a, b, c) {
        vb = a;
        Ab ? c.register({
            event_name: b.TD_ID_X2_PA_STATE,
            namespace: "core.flightdata",
            callback: function(a) {
                Kb({
                    data: {
                        pa_state: parseInt(a.argv[0], 10)
                    }
                })
            },
            priority: c.HIGH_PRIORITY
        }) : wb = 0;
        c.register({
            event_name: b.TD_ID_DECOMPRESSION,
            namespace: "core.flightdata",
            callback: function(a) {
                Jb({
                    data: {
                        decompression_state: parseInt(a.argv[0], 10)
                    }
                })
            },
            priority: c.HIGH_PRIORITY
        });
        Hb(b)
    }

    function Ib() {
        D.error("Error loading System Events for avod/v1")
    };
    var Zb = new n("avod.events.EventFactory"),
        G = {},
        $b = null;

    function ac(a, b) {
        return void 0 !== G[a] && void 0 !== G[a][b] ? G[a][b] : null
    }

    function bc(a, b) {
        var c, d = ac(a, b);
        if (null !== d) {
            for (c = d.length - 1; 0 <= c; c--) delete d[c];
            delete G[a][b]
        }
    }

    function cc(a, b, c) {
        var d;
        void 0 === G[a] && (G[a] = []);
        if (void 0 === G[a][b]) G[a][b] = [];
        else
            for (d = 0; d < G[a][b].length; d++)
                if (c === G[a][b][d]) return !1;
        a = G[a][b];
        a[a.length] = c;
        return !0
    }

    function H(a, b) {
        var c = null;
        b.async ? (c = {
            playerId: a,
            event: b
        }, null === $b && ($b = []), $b.push(c), window.setTimeout(dc, 0)) : ec(a, b)
    }

    function dc() {
        var a = null;
        null !== $b && (a = $b.shift(), 0 == $b.length && ($b = null));
        null !== a && ec(a.playerId, a.event)
    }

    function fc(a) {
        var b = [],
            c = null;
        if (void 0 !== G[a])
            for (c in G[a]) b[b.length] = c;
        return b
    }

    function ec(a, b) {
        var c, d = null,
            e = null,
            g, h = null,
            h = E(a);
        if (null !== h) {
            "string" === typeof b && (b = Ra.parse(b));
            if ("jsbridgecreated" === b.type) F(h.b, 2);
            else if ("pause" == b.type && h.paused()) return;
            switch (b.type) {
                case "debug":
                    Zb.debug(b.toString());
                    break;
                case "warning":
                    Zb.warn(b.toString());
                    break;
                case "error":
                    Zb.error(b.toString());
                    break;
                case "seekdelay":
                    Zb.info(b.toString());
                    break;
                default:
                    Zb.info(b.toString())
            }
            e = ac(a, b.type);
            if (null !== e) {
                g = [];
                for (c = 0; c < e.length; c++) g[c] = e[c];
                e = b;
                e.player = h;
                for (c = 0; c < g.length; c++) {
                    d =
                        g[c];
                    try {
                        d.call(h, e)
                    } catch (k) {
                        d = "Error executing IFAPI Media Player event handler:\n\tType:\t" + b.type + "\n\tName:\t" + k.name + "\n\tMessage:\t" + k.message, void 0 !== k.stack ? Zb.error(d + "\n" + k.stack) : Zb.error(d)
                    }
                }
                "jsbridgecreated" === b.type && bc(a, b.type)
            }
            if ("remove" === b.type && (c = E(a), null !== c && (zb == c && Cb(null), c.za(), delete ub[a], D.debug("player unregistered [" + a + "]")), c = "", void 0 !== G[a])) {
                for (c in G[a]) bc(a, c);
                delete G[a]
            }
        }
    };

    function gc(a, b) {
        var c, d, e = [],
            g = [],
            h = !1;
        if (null === b) return !0;
        d = b.split(".");
        for (c = 0; c < d.length; c++) g[c] = parseInt(d[c], 10);
        null === a && (a = "0");
        d = a.match(/(\d+)\.{0,1}/g);
        if (null !== d)
            for (c = 0; c < d.length; c++) e[c] = parseInt(d[c], 10);
        for (c = 0; c < g.length && c < e.length; c++)
            if (e[c] > g[c]) {
                h = !0;
                break
            } else if (e[c] < g[c]) {
            h = !1;
            break
        } else e[c] === g[c] && c === g.length - 1 && (h = !0);
        return h
    }

    function hc(a, b) {
        var c = /(^-?[0-9]+(\.?[0-9]*)[df]?e?[0-9]?$|^0x[0-9a-f]+$|[0-9]+)/gi,
            d = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
            e = /(^[ ]*|[ ]*$)/g,
            g = /^0x[0-9a-f]+$/i,
            h = /^0/,
            k = a.replace(e, "") || "",
            t = b.replace(e, "") || "",
            e = k.replace(c, "\x00$1\x00").replace(/\0$/, "").replace(/^\0/, "").split("\x00"),
            c = t.replace(c, "\x00$1\x00").replace(/\0$/, "").replace(/^\0/, "").split("\x00"),
            k = parseInt(k.match(g), 10) || 1 != e.length && k.match(d) && Date.parse(k);
        if (d = parseInt(t.match(g), 10) || k && t.match(d) && Date.parse(t) || null) {
            if (k < d) return -1;
            if (k > d) return 1
        }
        k = 0;
        for (t = Math.max(e.length, c.length); k < t; k++) {
            d = !(e[k] || "").match(h) && parseFloat(e[k]) || e[k] || 0;
            g = !(c[k] || "").match(h) && parseFloat(c[k]) || c[k] || 0;
            if (isNaN(d) !== isNaN(g)) return isNaN(d) ? 1 : -1;
            typeof d !== typeof g && (d += "", g += "");
            if (d < g) return -1;
            if (d > g) return 1
        }
        return 0
    };

    function ic(a) {
        Ka.call(this, a);
        this.key = this.fa = null
    }
    m(ic, Ka);
    f = ic.prototype;
    f.close = function() {
        var a = {
            playerId: this.id,
            type: "close"
        };
        this.key = this.fa = null;
        jc(a)
    };
    f.dispose = function() {
        this.close();
        ic.h.dispose.call(this)
    };
    f.jb = function() {
        return this.fa
    };
    f.kb = function() {
        return this.key
    };
    f.lb = function() {
        var a = "";
        null !== kc && (a = kc);
        return a
    };
    f.isPersonalized = function() {
        return lc
    };
    f.getLastError = function() {
        return null
    };
    f.setPersonalization = function(a) {
        jc({
            playerId: this.id,
            type: "personalize",
            token: a
        })
    };

    function jc(a) {
        var b = "off";
        null !== Na && 5 > Na.LOG_LEVEL && 0 <= Na.LOG_LEVEL && (b = "debug");
        if (void 0 !== a || null !== a) a.log_level = b, a = new CustomEvent("phkhmhjoaliekidocmibncjbepgflmdp_request", {
            detail: a
        }), document.dispatchEvent(a)
    }
    f.open = function(a) {
        jc({
            playerId: this.id,
            type: "open",
            ms3Url: a
        })
    };
    f.Ra = function() {
        jc({
            playerId: this.id,
            type: "init"
        })
    };

    function mc(a) {
        var b = nc,
            c;
        if (null !== b && null !== a) {
            for (c = 0; c < oc.length; c++)
                if (oc[c] == b) return !1;
            if (null !== sc)
                for (c = 0; c < sc.length; c++)
                    if (sc[c] == a) return !0
        }
        return !1
    }

    function tc(a) {
        a = a.detail;
        switch (a.type) {
            case "error":
                var b = Ma(a.playerId),
                    c = null;
                if (null !== b) {
                    switch (a.errorCode) {
                        case 1001:
                            c = new za("drm_invalid_init_response");
                            break;
                        case 1002:
                            c = new za("drm_request_handler_not_found")
                    }
                    null !== c && b.dispatchEvent(c)
                }
                break;
            case "disconnected":
                a = Ma(a.playerId);
                null !== a && a.dispatchEvent(new Aa("drm_plugin_disconnected"));
                break;
            case "init":
                b = Ma(a.playerId);
                null !== b && (lc = a.isPersonalized, kc = a.version, null !== a.interfaceVersion && (uc = a.interfaceVersion), b.dispatchEvent(new Aa("drm_plugin_ready")));
                break;
            case "open":
                b = Ma(a.playerId);
                null !== b && (void 0 !== a.url && (b.fa = a.url), void 0 !== a.key && (b.key = a.key), b.dispatchEvent(new Aa("drm_proxy_available")));
                break;
            case "personalize":
                b = Ma(a.playerId), lc = a.isPersonalized, null !== b && (a = a.isPersonalized ? new Aa("drm_plugin_personalized") : new za("drm_personalization_failed"), b.dispatchEvent(a))
        }
    }
    var vc = new n("avod.player.adaptor.swf.ChromeDRMExtension"),
        wc = !1,
        nc = null,
        uc = null,
        kc = null,
        oc = null,
        sc = null,
        lc = !1;
    window.InFlight.define("avod/v1/chrome-extension", {
        load: function(a, b, c, d) {
            function e(a) {
                null === a ? c(null) : (wc || (document.addEventListener("phkhmhjoaliekidocmibncjbepgflmdp_response", tc, !1), wc = !0), null === oc && (oc = [], oc.push("1.0.0.0")), void 0 !== a.interfaceVersions && (sc = a.interfaceVersions), null === nc && void 0 !== a.version && (nc = a.version), k = new ic("chrome-extension"), k.addEventListener("drm_plugin_ready", g), k.addEventListener("drm_invalid_init_response", h), k.Ra())
            }

            function g() {
                k.removeEventListener("drm_plugin_ready",
                    g);
                k.removeEventListener("drm_invalid_init_response", h);
                k.dispose();
                k = null;
                c(null)
            }

            function h() {
                k.removeEventListener("drm_plugin_ready", g);
                k.removeEventListener("drm_invalid_init_response", h);
                k.dispose();
                k = null;
                c(null)
            }
            var k = null;
            void 0 === d.paths[a] && (d.paths[a] = []);
            d = d.paths[a];
            d[d.length] = "chrome-extension://" + a;
            d[d.length] = "avod/v1/null";
            0 < a.length && b([a], e)
        }
    });

    function xc(a) {
        this.fa = null;
        Ka.call(this, a)
    }
    m(xc, Ka);
    f = xc.prototype;
    f.Ra = function() {
        var a, b, c = document.getElementById(this.id);
        b = "off";
        5 > Na.LOG_LEVEL && 0 <= Na.LOG_LEVEL && (b = "debug");
        null !== c && (a = '<object id="' + c.id + '-drm-plugin"', a += ' type="application/x-pac-drm-3" width="0"', a += ' height="0"', a += ">", a += '<param name="swf_object" value="' + c.id + '" />', a += '<param name="event_dispatcher" value="window.InFlight.AVOD.dispatchEvent" />', a += '<param name="log_level" value="' + b + '" />', a += "</object>", b = document.createElement("div"), c.parentNode.insertBefore(b, c), b.setAttribute("id",
            c.id + "-drm-plugin-container"), b.setAttribute("style", "width:0px; height:0px; position:absolute"), b.innerHTML = a, b = document.getElementById(c.id + "-drm-plugin"), cc(c.id, "drm_plugin_ready", yc), this.plugin = b)
    };
    f.close = function() {
        this.fa = null;
        null !== this.plugin && void 0 !== this.plugin.close && this.plugin.close()
    };
    f.open = function(a) {
        this.fa = this.plugin.open(a);
        this.dispatchEvent(new Aa("drm_proxy_available"))
    };
    f.getLastError = function() {
        return this.plugin.getLastError()
    };
    f.kb = function() {
        return this.plugin.getKey()
    };
    f.isPersonalized = function() {
        return this.plugin.isPersonalized
    };
    f.lb = function() {
        var a = zc();
        null === a && (a = "");
        return a
    };
    f.jb = function() {
        return this.fa
    };
    f.dispose = function() {
        var a;
        null !== this.plugin && (Ac.debug("dispose ActiveX DRM plugin"), this.plugin.dispose(), this.plugin = null, a = document.getElementById(this.id + "-drm-plugin-container"), null !== a && a.parentNode.removeChild(a), xc.h.dispose.call(this))
    };
    f.setPersonalization = function(a) {
        this.plugin.setPersonalization(a) ? this.dispatchEvent(new Aa("drm_plugin_personalized")) : this.dispatchEvent(new za("drm_personalization_failed"))
    };

    function zc() {
        var a = null,
            b, c;
        c = b = null;
        var d, e, g;
        if (void 0 !== window.ActiveXObject) {
            try {
                c = new ActiveXObject("Panasonic.PanasonicDrmPlugin-3")
            } catch (h) {}
            c && (a = c.version, void 0 !== c.dispose && c.dispose())
        } else {
            navigator.plugins.refresh(!1);
            if (void 0 !== navigator.mimeTypes) d = navigator.mimeTypes["application/x-pac-drm-3"], void 0 !== d && (b = d.enabledPlugin);
            else
                for (e = 0; e < navigator.plugins.length && null === b; e++)
                    for (c = navigator.plugins[e], g = 0; g < c.length && null === b; g++) d = c[g], "application/x-pac-drm-3" === d.type && (b =
                        c);
            null !== b && (void 0 !== b.version ? a = b.version : void 0 !== b.description && (b = b.description.match(/[\d]+\.[\d]+\.[\d]+\.[\d]+/), void 0 !== b[0] && (a = b[0])))
        }
        return a
    }

    function yc(a) {
        cc(a.player.target, "drm_plugin_ready", yc);
        a = Ma(a.player.target);
        null !== a && a.dispatchEvent(new Aa("drm_plugin_ready"))
    }
    var Ac = new n("avod.player.adaptor.swf.NetscapeActiveXDrmPlugin");

    function Bc() {
        var a;
        void 0 !== window.chrome ? (a = null, vc.debug("Required Chrome Messaging Interface [1]"), vc.debug("Installed Chrome Messaging Interface [" + nc + "]"), vc.debug("Required Chrome Messaging Host version [" + q.plugin.drm.version + "]"), vc.debug("Installed Chrome Messaging Host version [" + kc + "]"), null === kc) ? (vc.debug("Unable to determine Chrome Messaging Host version"), mc(1) ? (vc.debug("Chrome Messaging Interface is compatible"), a = 0) : (vc.debug("Chrome Messaging Interface is NOT incompatible"), a =
            1)) : mc(uc) ? gc(kc, q.plugin.drm.version) || (vc.debug("Chrome Messaging Host version is NOT compatible"), a = 0) : (vc.debug("Chrome Messaging Interface is NOT compatible"), a = 1) : (a = null, gc(zc(), q.plugin.drm.version) || (a = 0));
        return a
    };
    var Cc = function() {
        function a() {
            p.T && (("undefined" != typeof u.readyState && "complete" == u.readyState || "undefined" == typeof u.readyState && (u.getElementsByTagName("body")[0] || u.body)) && b(), Ga || ("undefined" != typeof u.addEventListener && u.addEventListener("DOMContentLoaded", b, !1), p.t && p.A && (u.attachEvent("onreadystatechange", function() {
                    "complete" == u.readyState && (u.detachEvent("onreadystatechange", a), b())
                }), S == top && function ye() {
                    if (!Ga) {
                        try {
                            u.documentElement.doScroll("left")
                        } catch (a) {
                            setTimeout(ye, 0);
                            return
                        }
                        b()
                    }
                }()),
                p.L && function ze() {
                    Ga || (/loaded|complete/.test(u.readyState) ? b() : setTimeout(ze, 0))
                }(), d(b)))
        }

        function b() {
            if (!Ga) {
                try {
                    var a = u.getElementsByTagName("body")[0].appendChild(u.createElement("span"));
                    a.parentNode.removeChild(a)
                } catch (b) {
                    return
                }
                Ga = !0;
                for (var a = Ob.length, c = 0; c < a; c++) Ob[c]()
            }
        }

        function c(a) {
            Ga ? a() : Ob[Ob.length] = a
        }

        function d(a) {
            if ("undefined" != typeof S.addEventListener) S.addEventListener("load", a, !1);
            else if ("undefined" != typeof u.addEventListener) u.addEventListener("load", a, !1);
            else if ("undefined" !=
                typeof S.attachEvent) r(S, a);
            else if ("function" == typeof S.onload) {
                var b = S.onload;
                S.onload = function(c) {
                    b(c);
                    a()
                }
            } else S.onload = a
        }

        function e() {
            var a = u.getElementsByTagName("body")[0],
                b = u.createElement("object");
            b.setAttribute("type", "application/x-shockwave-flash");
            var c = a.appendChild(b);
            if (c) {
                var d = 0;
                (function Ae() {
                    if ("undefined" != typeof c.GetVariable) {
                        var e = c.GetVariable("$version");
                        e && (e = e.split(" ")[1].split(","), p.va = [parseInt(e[0], 10), parseInt(e[1], 10), parseInt(e[2], 10)])
                    } else if (10 > d) {
                        d++;
                        setTimeout(Ae,
                            10);
                        return
                    }
                    a.removeChild(b);
                    c = null;
                    g()
                })()
            } else g()
        }

        function g() {
            var a = ra.length;
            if (0 < a)
                for (var b = 0; b < a; b++) {
                    var c = ra[b].id,
                        d = ra[b].Lb,
                        e = {
                            ia: !1,
                            id: c
                        };
                    if (0 < p.va[0]) {
                        var g = u.getElementById(c);
                        if (g)
                            if (!pb(ra[b].dc) || p.L && 312 > p.L)
                                if (ra[b].Ab && k()) {
                                    e = {};
                                    e.data = ra[b].Ab;
                                    e.width = g.getAttribute("width") || "0";
                                    e.height = g.getAttribute("height") || "0";
                                    g.getAttribute("class") && (e.qc = g.getAttribute("class"));
                                    g.getAttribute("align") && (e.align = g.getAttribute("align"));
                                    for (var l = {}, g = g.getElementsByTagName("param"),
                                            B = g.length, r = 0; r < B; r++) "movie" != g[r].getAttribute("name").toLowerCase() && (l[g[r].getAttribute("name")] = g[r].getAttribute("value"));
                                    t(e, l, c, d)
                                } else da(g), d && d(e);
                        else ba(c, !0), d && (e.ia = !0, e.Xa = h(c), d(e))
                    } else ba(c, !0), d && ((c = h(c)) && "undefined" != typeof c.SetVariable && (e.ia = !0, e.Xa = c), d(e))
                }
        }

        function h(a) {
            var b = null;
            (a = l(a)) && "OBJECT" == a.nodeName && ("undefined" != typeof a.SetVariable ? b = a : (a = a.getElementsByTagName("object")[0]) && (b = a));
            return b
        }

        function k() {
            return !Pb && pb("6.0.65") && (p.A || p.mac) && !(p.L &&
                312 > p.L)
        }

        function t(a, b, c, d) {
            Pb = !0;
            qc = d || null;
            cd = {
                ia: !1,
                id: c,
                Xa: null
            };
            var e = l(c);
            if (e) {
                "OBJECT" == e.nodeName ? (qb = z(e), Qb = null) : (qb = e, Qb = c);
                a.id = "SWFObjectExprInst";
                if ("undefined" == typeof a.width || !/%$/.test(a.width) && 310 > parseInt(a.width, 10)) a.width = "310";
                if ("undefined" == typeof a.height || !/%$/.test(a.height) && 137 > parseInt(a.height, 10)) a.height = "137";
                u.title = u.title.slice(0, 47) + " - Flash Player Installation";
                d = p.t && p.A ? "ActiveX" : "PlugIn";
                d = "MMredirectURL=" + encodeURI(S.location.toString()).toString().replace(/&/g,
                    "%26") + "&MMplayerType=" + d + "&MMdoctitle=" + u.title;
                b.flashvars = "undefined" != typeof b.flashvars ? b.flashvars + ("&" + d) : d;
                p.t && p.A && 4 != e.readyState && (d = u.createElement("div"), c += "SWFObjectNew", d.setAttribute("id", c), e.parentNode.insertBefore(d, e), e.style.display = "none", function Be() {
                    4 == e.readyState ? e.parentNode.removeChild(e) : setTimeout(Be, 10)
                }());
                Rb(a, b, c)
            }
        }

        function da(a) {
            if (p.t && p.A && 4 != a.readyState) {
                var b = u.createElement("div");
                a.parentNode.insertBefore(b, a);
                b.parentNode.replaceChild(z(a), b);
                a.style.display =
                    "none";
                (function pc() {
                    4 == a.readyState ? a.parentNode.removeChild(a) : setTimeout(pc, 10)
                })()
            } else a.parentNode.replaceChild(z(a), a)
        }

        function z(a) {
            var b = u.createElement("div");
            if (p.A && p.t) b.innerHTML = a.innerHTML;
            else if (a = a.getElementsByTagName("object")[0])
                if (a = a.childNodes)
                    for (var c = a.length, d = 0; d < c; d++) 1 == a[d].nodeType && "PARAM" == a[d].nodeName || 8 == a[d].nodeType || b.appendChild(a[d].cloneNode(!0));
            return b
        }

        function Rb(a, b, c) {
            var d = void 0,
                e = l(c);
            if (p.L && 312 > p.L) return d;
            if (e)
                if ("undefined" == typeof a.id &&
                    (a.id = c), p.t && p.A) {
                    var g = "",
                        h;
                    for (h in a) a[h] != Object.prototype[h] && ("data" == h.toLowerCase() ? b.movie = a[h] : "styleclass" == h.toLowerCase() ? g += ' class="' + a[h] + '"' : "classid" != h.toLowerCase() && (g += " " + h + '="' + a[h] + '"'));
                    h = "";
                    for (var k in b) b[k] != Object.prototype[k] && (h += '<param name="' + k + '" value="' + b[k] + '" />');
                    e.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + g + ">" + h + "</object>";
                    Sb[Sb.length] = a.id;
                    d = l(a.id)
                } else {
                    k = u.createElement("object");
                    k.setAttribute("type", "application/x-shockwave-flash");
                    for (var r in a) a[r] != Object.prototype[r] && ("styleclass" == r.toLowerCase() ? k.setAttribute("class", a[r]) : "classid" != r.toLowerCase() && k.setAttribute(r, a[r]));
                    for (g in b) b[g] != Object.prototype[g] && "movie" != g.toLowerCase() && (a = k, h = b[g], r = u.createElement("param"), r.setAttribute("name", g), r.setAttribute("value", h), a.appendChild(r));
                    e.parentNode.replaceChild(k, e);
                    d = k
                }
            return d
        }

        function B(a) {
            var b = l(a);
            b && "OBJECT" == b.nodeName && (p.t && p.A ? (b.style.display = "none", function pc() {
                if (4 == b.readyState) {
                    var c = l(a);
                    if (c) {
                        for (var d in c) "function" ==
                            typeof c[d] && (c[d] = null);
                        c.parentNode.removeChild(c)
                    }
                } else setTimeout(pc, 10)
            }()) : b.parentNode.removeChild(b))
        }

        function l(a) {
            var b = null;
            try {
                b = u.getElementById(a)
            } catch (c) {}
            return b
        }

        function r(a, b) {
            a.attachEvent("onload", b);
            Wa[Wa.length] = [a, "onload", b]
        }

        function pb(a) {
            var b = p.va;
            a = a.split(".");
            a[0] = parseInt(a[0], 10);
            a[1] = parseInt(a[1], 10) || 0;
            a[2] = parseInt(a[2], 10) || 0;
            return b[0] > a[0] || b[0] == a[0] && b[1] > a[1] || b[0] == a[0] && b[1] == a[1] && b[2] >= a[2] ? !0 : !1
        }

        function Tb(a, b, c, d) {
            if (!p.t || !p.mac) {
                var e = u.getElementsByTagName("head")[0];
                e && (c = c && "string" == typeof c ? c : "screen", d && (rc = pa = null), pa && rc == c || (d = u.createElement("style"), d.setAttribute("type", "text/css"), d.setAttribute("media", c), pa = e.appendChild(d), p.t && p.A && "undefined" != typeof u.styleSheets && 0 < u.styleSheets.length && (pa = u.styleSheets[u.styleSheets.length - 1]), rc = c), p.t && p.A ? pa && "object" == typeof pa.addRule && pa.addRule(a, b) : pa && "undefined" != typeof u.createTextNode && pa.appendChild(u.createTextNode(a + " {" + b + "}")))
            }
        }

        function ba(a, b) {
            if (dd) {
                var c = b ? "visible" : "hidden";
                Ga && l(a) ?
                    l(a).style.visibility = c : Tb("#" + a, "visibility:" + c)
            }
        }

        function O(a) {
            return null != /[\\\"<>\.;]/.exec(a) && "undefined" != typeof encodeURIComponent ? encodeURIComponent(a) : a
        }
        var S = window,
            u = document,
            sa = navigator,
            ed = !1,
            Ob = [function() {
                ed ? e() : g()
            }],
            ra = [],
            Sb = [],
            Wa = [],
            qb = void 0,
            Qb = void 0,
            qc = void 0,
            cd = void 0,
            Ga = !1,
            Pb = !1,
            pa = void 0,
            rc = void 0,
            dd = !0,
            p = function() {
                var a = "undefined" != typeof u.getElementById && "undefined" != typeof u.getElementsByTagName && "undefined" != typeof u.createElement,
                    b = sa.userAgent.toLowerCase(),
                    c = sa.platform.toLowerCase(),
                    d = c ? /win/.test(c) : /win/.test(b),
                    c = c ? /mac/.test(c) : /mac/.test(b),
                    b = /webkit/.test(b) ? parseFloat(b.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1,
                    e = !+"\v1",
                    g = [0, 0, 0],
                    h = null;
                if ("undefined" != typeof sa.plugins && "object" == typeof sa.plugins["Shockwave Flash"]) !(h = sa.plugins["Shockwave Flash"].description) || "undefined" != typeof sa.mimeTypes && sa.mimeTypes["application/x-shockwave-flash"] && !sa.mimeTypes["application/x-shockwave-flash"].enabledPlugin || (ed = !0, e = !1, h = h.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), g[0] = parseInt(h.replace(/^(.*)\..*$/,
                    "$1"), 10), g[1] = parseInt(h.replace(/^.*\.(.*)\s.*$/, "$1"), 10), g[2] = /[a-zA-Z]/.test(h) ? parseInt(h.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
                else if ("undefined" != typeof S.ActiveXObject) try {
                    var l = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                    l && (h = l.GetVariable("$version")) && (e = !0, h = h.split(" ")[1].split(","), g = [parseInt(h[0], 10), parseInt(h[1], 10), parseInt(h[2], 10)])
                } catch (k) {}
                return {
                    T: a,
                    va: g,
                    L: b,
                    t: e,
                    A: d,
                    mac: c
                }
            }();
        a();
        (function() {
            p.t && p.A && window.attachEvent("onunload", function() {
                for (var a = Wa.length,
                        b = 0; b < a; b++) Wa[b][0].detachEvent(Wa[b][1], Wa[b][2]);
                a = Sb.length;
                for (b = 0; b < a; b++) B(Sb[b]);
                for (var c in p) p[c] = null;
                p = null;
                for (var d in Cc) Cc[d] = null;
                Cc = null
            })
        })();
        return {
            nc: function(a, b, c, d) {
                if (p.T && a && b) {
                    var e = {};
                    e.id = a;
                    e.dc = b;
                    e.Ab = c;
                    e.Lb = d;
                    ra[ra.length] = e;
                    ba(a, !1)
                } else d && d({
                    ia: !1,
                    id: a
                })
            },
            lc: function(a) {
                if (p.T) return h(a)
            },
            Nb: function(a, b, d, e, g, h, l, r, B, u) {
                var z = {
                    ia: !1,
                    id: b
                };
                p.T && !(p.L && 312 > p.L) && a && b && d && e && g ? (ba(b, !1), c(function() {
                    d += "";
                    e += "";
                    var c = {};
                    if (B && "object" === typeof B)
                        for (var p in B) c[p] =
                            B[p];
                    c.data = a;
                    c.width = d;
                    c.height = e;
                    p = {};
                    if (r && "object" === typeof r)
                        for (var O in r) p[O] = r[O];
                    if (l && "object" === typeof l)
                        for (var S in l) p.flashvars = "undefined" != typeof p.flashvars ? p.flashvars + ("&" + S + "=" + l[S]) : S + "=" + l[S];
                    if (pb(g)) O = Rb(c, p, b), c.id == b && ba(b, !0), z.ia = !0, z.Xa = O;
                    else {
                        if (h && k()) {
                            c.data = h;
                            t(c, p, b, u);
                            return
                        }
                        ba(b, !0)
                    }
                    u && u(z)
                })) : u && u(z)
            },
            ec: function() {
                dd = !1
            },
            rc: p,
            Pb: function() {
                return {
                    Fb: p.va[0],
                    Gb: p.va[1],
                    ac: p.va[2]
                }
            },
            Qb: pb,
            ic: function(a, b, c) {
                if (p.T) return Rb(a, b, c)
            },
            pc: function(a, b, c, d) {
                p.T && k() &&
                    t(a, b, c, d)
            },
            bc: function(a) {
                p.T && B(a)
            },
            hc: function(a, b, c, d) {
                p.T && Tb(a, b, c, d)
            },
            fc: c,
            gc: d,
            mc: function(a) {
                var b = u.location.search || u.location.hash;
                if (b) {
                    /\?/.test(b) && (b = b.split("?")[1]);
                    if (null == a) return O(b);
                    for (var b = b.split("&"), c = 0; c < b.length; c++)
                        if (b[c].substring(0, b[c].indexOf("=")) == a) return O(b[c].substring(b[c].indexOf("=") + 1))
                }
                return ""
            },
            kc: function() {
                if (Pb) {
                    var a = l("SWFObjectExprInst");
                    a && qb && (a.parentNode.replaceChild(qb, a), Qb && (ba(Qb, !0), p.t && p.A && (qb.style.display = "block")), qc && qc(cd));
                    Pb = !1
                }
            }
        }
    }();

    function Dc(a) {
        var b = null,
            c = Bc();
        switch (a) {
            case "drm_plugin":
                if (C.isWindows()) switch (c) {
                        case 0:
                            b = Ec(q.plugin.drm.windows.software, null, !0);
                            break;
                        case 1:
                            b = Ec(q.plugin.drm.windows.software_and_extension, null, !0)
                    } else if (C.isOSX()) switch (c) {
                        case 0:
                            b = Ec(q.plugin.drm.mac.software, null, !0);
                            break;
                        case 1:
                            b = Ec(q.plugin.drm.mac.software_and_extension, null, !0)
                    }
                    break;
            case "flash_plugin":
                C.isWindows() ? b = void 0 !== window.ActiveXObject ? Ec(q.plugin.flash.windows.activex, null, !0) : Ec(q.plugin.flash.windows.npapi, null, !0) : C.isOSX() && (b = Ec(q.plugin.flash.mac, null, !0));
                break;
            case "ios_application":
                b = q.mobile.ios.shellApp.url;
                break;
            case "android_application":
                b = Ec(q.mobile.android.shellApp.url, null, !0)
        }
        return b
    }

    function Fc(a, b) {
        switch (a) {
            case "drm_plugin":
                Gc = b;
                break;
            case "flash_plugin":
                Hc = b;
                break;
            case "ios_application":
                Ic = b;
                break;
            case "android_application":
                Jc = b
        }
    }

    function Kc(a) {
        var b = "";
        switch (a) {
            case "drm_plugin":
                b = Gc;
                break;
            case "flash_plugin":
                b = Hc;
                break;
            case "ios_application":
                b = Ic;
                break;
            case "android_application":
                b = Jc
        }
        return b
    }

    function Lc(a) {
        var b = null;
        return null !== a && confirm(Kc(a)) ? (b = window.document.createElement("iframe"), b.src = Dc(a), b.width = "0", b.height = "0", b.style.display = "none", b.addEventListener ? (b.addEventListener("load", Mc, !1), b.addEventListener("error", Mc, !1)) : b.attachEvent && (b.attachEvent("onload", Mc), b.attachEvent("onerror", Mc)), window.document.body.appendChild(b), !0) : !1
    }

    function Mc() {
        var a = this;
        window.setTimeout(function() {
            a.parentNode.removeChild(a)
        }, 1E3)
    }

    function Ec(a, b, c) {
        var d = null,
            e = "",
            g = window.InFlight.host;
        !0 === c && (c = window.InFlight.makeServiceURL("", !0), 0 == c.indexOf("https://") && (g = g.replace("http://", "https://")));
        if (void 0 === a || null === a) return null;
        if (void 0 !== b && null !== b)
            for (d in b) e += 0 === e.length ? "?" : "&", e += escape(d) + "=" + escape(b[d]);
        return g + "/inflight/static/avod/v1/" + a + e
    }
    var Nc = new n("avod.platform.support.SoftwareSupport"),
        Gc = "Click `Okay` to download the latest DRM Plugin.\nIn order to complete the installation you will need to restart your browser.",
        Hc = "Click `Okay` to download the latest Flash Plugin.\nIn order to complete the installation you will need to restart your browser.",
        Ic = "In order to play this media, you must launch the iOS Shell Application.",
        Jc = "In order to play this media, you must download and install the latest Android Shell Application.";

    function Oc() {
        this.xa = {};
        this.l = new ka
    }

    function I(a, b, c, d) {
        void 0 === d && (d = null);
        a.xa[b] = new ha(c, d)
    }

    function Pc(a, b) {
        var c = null;
        void 0 !== a.xa[b] && (c = a.xa[b]);
        return c
    }

    function Qc(a) {
        var b = null,
            c = null;
        J.debug("partial support enforced");
        for (c in a.xa)
            if (void 0 !== a.xa[c]) switch (b = a.xa[c], b.qa) {
                case 2:
                    b.qa = 4;
                    break;
                case 1:
                    b.qa = 3
            }
    }

    function Rc(a) {
        var b = !1;
        switch (a) {
            case "android_application":
                if (C.isAndroid())
                    if (null === q.mobile.android.shellApp.osVersion) b = !0;
                    else if (a = parseFloat(q.mobile.android.shellApp.osVersion), 0 === C.getAndroidVersion() || C.getAndroidVersion() >= a) b = !0;
                break;
            case "drm_plugin":
            case "flash_plugin":
                if (C.isWindows() || C.isOSX()) b = !0;
                break;
            case "ios_application":
                C.isiOS() && (null === q.mobile.ios.shellApp.osVersion ? b = !0 : (a = parseFloat(q.mobile.ios.shellApp.osVersion), C.getiOSVersion() >= a && (b = !0)))
        }
        return b
    }
    var J = new n("avod.platform.PlatformSupport");

    function Sc() {}
    var Tc;

    function Uc() {
        var a = null;
        if (Tc) return Tc;
        a = new Sc;
        a.ba = new Oc;
        return Tc = a
    }

    function Vc(a) {
        var b = null,
            b = null,
            b = Pc(Uc().ba, a);
        return b = null === b ? 0 : b.qa
    }

    function Wc() {
        return Uc().ba.l
    }

    function Xc(a) {
        var b = 0,
            c, d = Uc().ba.l,
            e = null;
        if ("[object Array]" === Object.prototype.toString.apply(a))
            for (b = 0; b < a.length; b++)
                if (c = a[b], c = la(d, c), null !== c && null !== c.K) {
                    e = c.K;
                    break
                }
        return e
    }
    var Yc = new n("avod.platform.PlatformDetection");

    function Zc(a, b, c) {
        $c(a, b, "start", c, !1)
    }

    function ad(a, b, c) {
        var d = E(a),
            e;
        null !== d && (d = d.b, e = d.k(), 0 < e.length && ($c(a, null, "stop", b, c), d.m = !1))
    }

    function bd(a, b, c) {
        $c(a, b, "lookup", c, !1)
    }

    function $c(a, b, c, d, e) {
        var g = E(a),
            h = {},
            k = [],
            t = Pa.getData("ppv.ppv_token"),
            da = 0;
        if (null !== b)
            for (da = 0; da < b.length; da++) k[da] = g.type;
        g = fd();
        h.fn = c;
        h.nocache = (new Date).getTime();
        h.device_id = g;
        switch (c) {
            case "lookup":
                h.media_uris = b.join(",");
                h.media_types = k.join(",");
                h.client_capability = gd();
                h.ppv_token = null !== t ? t : "";
                break;
            case "start":
                h.registered_instances = Mb(a).join(",");
                h.media_uris = b.join(",");
                h.media_types = k.join(",");
                h.client_capability = gd();
                h.ppv_token = null !== t ? t : "";
                break;
            case "stop":
                h.registered_instances =
                    Mb().join(","), h.deregister_instance = Lb(a).join(",")
        }
        Qa.get({
            url: window.InFlight.makeServiceURL("/mm/v3/", !0),
            synchronous: e,
            headers: {
                Accept: "application/json"
            },
            query: h
        }, function(b, c) {
            var e = {},
                g, h = null,
                k = null,
                t = E(a),
                ba = null;
            null !== t && (ba = t.b);
            if (null !== ba) {
                var O, t = E(a);
                if (null !== t) {
                    ba = t.b;
                    if (b || 200 !== c.code) {
                        try {
                            Ra.parse(c.body)
                        } catch (S) {}
                        e.success = !1;
                        e.code = 408;
                        e.text = "Network Unavailable"
                    } else try {
                        g = Ra.parse(c.body);
                        g.bandwidth_allocation_code = parseInt(g.bandwidth_allocation_code, 10);
                        e.success = 200 ===
                            g.bandwidth_allocation_code ? !0 : !1;
                        if (void 0 !== g.locations) {
                            for (O = 0; O < g.locations.length; O++) switch (g.locations[O].lookup_code = parseInt(g.locations[O].lookup_code, 10), g.locations[O].lookup_code) {
                                case 502:
                                    g.locations.splice(O, 1);
                                    O--;
                                    null === k && (k = new Ha("warning", 2003, "Media Manager Lookup Warning"));
                                    break;
                                case 415:
                                    h = new y("error", 1005, "The media player requires additional software to play the current media");
                                    g.locations.splice(O, 1);
                                    O--;
                                    break;
                                default:
                                    window.InFlight.defaultHost !== window.InFlight.host &&
                                        window.InFlight.replaceHost(g.locations[O].media_url, !0)
                            }
                            e.media_urls = g.locations
                        }
                        e.code = g.bandwidth_allocation_code;
                        e.text = g.text
                    } catch (u) {
                        e.success = !1, e.code = 408, e.text = "Bad Request"
                    }
                    if (!e.success) {
                        if (null === h) switch (parseInt(e.code, 10)) {
                            case 400:
                                h = new y("error", 1003, e.text);
                                break;
                            case 401:
                                h = new y("error", 1010, e.text);
                                break;
                            case 402:
                                h = new y("error", 1006, e.text);
                                break;
                            case 403:
                                h = new y("error", 1007, e.text);
                                break;
                            case 405:
                                h = new y("error", 1003, e.text);
                                break;
                            case 502:
                                h = new y("error", 1002, e.text);
                                break;
                            case 503:
                                h = new y("error", 1001, e.text);
                                break;
                            case 505:
                                h = new y("error", 1009, e.text);
                                break;
                            default:
                                h = new y("error", 1E3, "Unknown Error")
                        }
                        null !== h && H(a, h)
                    }
                    void 0 !== d && null !== d && (d(e), null !== k && 0 === ba.j && H(a, k))
                }
            }
        })
    }

    function gd() {
        var a = la(Uc().ba.l, "aes_hls_marlin"),
            b = "";
        if ("playable.yes" === a.ca || "drm_plugin" === a.K && "playable.requires_software" === a.ca) b = "bt";
        return b
    };

    function hd(a, b) {
        var c, d = null,
            e = null,
            g = null;
        this.Qa = e = c = null;
        this.f = 1;
        this.Ja = this.Sa = this.G = null;
        this.duration = this.currentTime = 0;
        this.Da = this.M = !0;
        this.media = this.I = this.aa = this.B = this.N = null;
        this.autoplay = !1;
        this.pa = {};
        this.la = 0;
        this.g = -1;
        this.ab = !1;
        this.j = 0;
        this.rb = !1;
        this.plugins = this.a = null;
        this.Ea = !1;
        this.Y = null;
        this.c = a;
        this.gb = void 0 === b.width ? "100%" : b.width.toString();
        this.fb = void 0 === b.height ? "100%" : b.height.toString();
        b.auto_install = !1 !== b.auto_install;
        c = E(a.target);
        null !== c && (e = c.b, d =
            document.getElementById(c.target), e.e() && null !== d && null !== d.parentNode && (e = document.createElement(d.nodeName.toLowerCase()), g = d.parentNode.getAttribute("class"), null !== g && null !== g.match(/\bavod-wrapper\b/) ? d.parentNode.parentNode.insertBefore(e, d.parentNode) : d.parentNode.insertBefore(e, d), c.remove(), e.setAttribute("id", a.target)));
        d = document.getElementById(a.target);
        null !== d ? (e = document.createElement(d.nodeName.toLowerCase()), c = document.createElement("div"), c.appendChild(e), id(c, "avod-wrapper"), id(c,
            "avod-fs-off"), d.parentNode.replaceChild(c, d), e.setAttribute("id", a.target)) : jd.warn("AVOD Warning: Element '" + this.c.target + "' does not exist in the DOM");
        this.xb = b.auto_install;
        this.addEventListener("seeking", kd);
        this.addEventListener("seeked", kd);
        this.addEventListener("timeupdate", ld);
        this.addEventListener("stop", md);
        this.addEventListener("play", nd);
        this.addEventListener("playing", od);
        this.addEventListener("pause", od);
        this.addEventListener("durationchange", pd);
        this.addEventListener("loadstart",
            qd);
        this.addEventListener("ended", rd)
    }

    function K(a, b) {
        return void 0 !== a.pa[b] ? a.pa[b] : null
    }

    function L(a, b, c) {
        void 0 === c && a.pa.hasOwnProperty(b) ? delete a.pa[b] : a.pa[b] = c
    }

    function fd() {
        var a = null;
        try {
            a = Pa.getData("ifapi.avod.uuid")
        } catch (b) {}
        null === a && (a = Xa.v1());
        if (null !== a) try {
            Pa.setData("ifapi.avod.uuid", a)
        } catch (c) {}
        return a
    }
    f = hd.prototype;
    f.load = function(a) {
        var b = null,
            b = null,
            c = Vc(this.c.type);
        jd.debug("player state [" + this.f + "]");
        if (yb) b = new y("error", 1001, "Bandwidth Allocation Error"), H(this.c.target, b);
        else if (3 !== this.f) {
            this.autoplay = a.autoplay;
            this.Ja = a.poster_url;
            sd(this.c, na) || (a.soundtrack_code = null, a.subtitle_code = null);
            this.N = a.soundtrack_code;
            this.B = a.subtitle_code;
            td(this, a.autoplay);
            void 0 !== a.bookmark && null !== a.bookmark && (jd.debug("bookmark received [" + a.bookmark + "]"), b = Ua(a.bookmark));
            void 0 !== a.current_item_index &&
                (this.la = a.current_item_index);
            this.g = null !== b ? b.sb : -1;
            void 0 === a.media_uris && void 0 !== a.media_uri && (a.media_uris = [a.media_uri]);
            this.aa = a.media_uris;
            this.I = b;
            this.M = !0;
            0 === this.j && (this.media = null);
            if (!a.force_partially_supported) switch (c) {
                case 3:
                case 4:
                    b = new Ha("warning", 2001, "Media player is not fully supported on this device");
                    H(this.c.target, b);
                    return
            }
            var b = !1,
                c = c = null,
                d = la(Uc().ba.l, "aes_hls");
            if (null !== d) switch (d.ca) {
                case "playable.yes":
                    b = !0;
                    break;
                case "playable.requires_software":
                    b = !1;
                    c = Kc(d.K);
                    this.xb && null !== c && null !== Dc(d.K) && Lc(d.K);
                    c = new y("error", 1005, "The media player requires additional software to play the current media", !1);
                    H(this.c.target, c);
                    break;
                default:
                    b = !1, c = new y("error", 1004, "Media player is not supported on this device"), H(this.c.target, c)
            }
            b && (ud(this), this.Ea = !1, this.Za(a.media_uris))
        } else 2 === this.j && this.u(1)
    };

    function ud(a) {
        null !== a.Sa && window.clearTimeout(a.Sa);
        a.Sa = null
    }

    function vd(a) {
        var b = null,
            c = a.I;
        null !== a.aa && (b = {
            autoplay: a.ab,
            poster_url: a.Ja,
            force_partially_supported: !0,
            soundtrack_code: a.N,
            subtitle_code: a.B,
            current_item_index: a.i()
        }, 1 < a.aa.length ? b.media_uris = a.aa : 1 == a.aa.length && (b.media_uri = a.aa[0]), null !== c && (b.bookmark = Ta(c)));
        return b
    }
    f.u = function(a) {
        switch (a) {
            case 0:
            case 1:
            case 2:
                this.j = a;
                break;
            case 3:
                this.ab && this.play(), this.u(0)
        }
    };

    function td(a, b) {
        0 === a.j && (jd.debug("set resumeOnReady [" + b + "]"), a.ab = b)
    }
    f.addEventListener = function(a, b) {
        return cc(this.c.target, a, b)
    };
    f.removeEventListener = function(a, b) {
        if (null !== this.c) {
            var c = this.c.target,
                d, e = !1,
                g = ac(c, a);
            if (null !== g) {
                for (d = 0; d < g.length; d++) g[d] === b && (e = !0), e && d + 1 < g.length && (g[d] = g[d + 1]);
                e && g.length--;
                0 === g.length && bc(c, a)
            }
        }
    };
    f.k = function() {
        var a = [],
            b, c;
        if (null !== this.media)
            for (c = 0; c < this.media.length; c++) b = this.media[c], a[c] = b.media_uri;
        return a
    };
    f.i = function() {
        return this.la
    };

    function wd(a, b) {
        var c;
        a.la !== b && !isNaN(b) && sd(a.c, ta) && (a.la = b, c = new A("playlistindexchange"), H(a.c.target, c))
    }

    function xd(a, b, c, d, e) {
        var g = !1;
        void 0 === c && (c = 0);
        void 0 === d && (d = 0);
        void 0 === e && (e = !1);
        null !== a.Y && (window.clearTimeout(a.Y), a.Y = null);
        b = parseInt(b, 10);
        null !== a.media && 0 <= b && b <= a.media.length - 1 && (g = !0, a.c.pause(), a.autoplay = e, td(a, e), wd(a, b), b = a.media[b], void 0 !== b.media_url_list ? (a.g = 0 <= c && c <= b.media_url_list.length ? c : 0, c = b.media_url_list[a.g], a.M = 0 === c.seek_delay, a.oa(c.media_url, d)) : (a.M = !0, a.g = -1, a.oa(b.media_url, d)));
        return g
    }
    f.sa = function(a) {
        var b = !1;
        a = Ua(a);
        null !== a && (b = this.Ga(a.media_uri, a.sb, a.O));
        return b
    };
    f.C = function(a, b, c) {
        return xd(this, a, b, c, !0)
    };
    f.ra = function(a, b) {
        var c = this;
        "string" === typeof a && (a = [a]);
        "[object Array]" === Object.prototype.toString.apply(a) ? bd(this.c.target, a, function(a) {
            yd.call(c, a, b)
        }) : jd.warn("playlistAddItemByMediaURI expects either a string or an array")
    };
    f.Ga = function(a, b, c) {
        var d = !1,
            e = this.k(),
            g;
        "number" === typeof a && (a = a.toString());
        for (g = 0; g < e.length; g++)
            if (e[g] === a) {
                d = this.C(g, b, c);
                break
            }
        return d
    };
    f.da = function() {
        var a;
        null !== this.media && 0 < this.media.length && (a = this.i(), 0 < a ? this.C(a - 1) : 2 === this.La && this.C(this.media.length - 1))
    };
    f.R = function() {
        var a;
        a = this.i();
        null != this.media && 0 < this.media.length && (a < this.media.length - 1 ? this.C(a + 1) : 2 === this.La && this.C(0))
    };
    f.ea = function(a) {
        var b = !1,
            c, d = this.i(),
            e = d,
            g = !1;
        if (null == this.media) return b;
        c = this.media.slice(0);
        if (0 <= a && a < c.length) {
            a < d ? d-- : e === a && (1 === c.length ? (this.pause(), this.mb(), this.U()) : e === c.length - 1 ? (g = !0, d--) : g = !0);
            for (e = 0; e < c.length; e++) b = c[e], b.index > a && b.index--;
            b = !0;
            c.splice(a, 1);
            zd(this, c, d);
            g && Ad(this, d)
        }
        return b
    };

    function Ad(a, b) {
        null !== a.Y && (window.clearTimeout(a.Y), a.Y = null);
        a.Y = window.setTimeout(function() {
            xd(a, b, 0)
        }, 0)
    }
    f.ta = function(a) {
        var b = !1,
            c = 0,
            d;
        if (null === this.media) return b;
        for (c = 0; c < this.media.length && (d = this.media[c], d.media_uri !== a); c++);
        c < this.media.length && (b = this.ea(c));
        return b
    };
    f.Ia = function(a) {
        var b, c, d = this.i(),
            e;
        if (null !== this.media && (b = this.media.slice(0), a !== this.rb)) {
            if (a) {
                for (e = 0; e < b.length; e++) c = b[e], c.sort = e === d ? 0 : Math.random();
                b.sort(function(a, b) {
                    return a.sort - b.sort
                });
                for (e = 0; e < b.length; e++)
                    if (c = b[e], c.index === d) {
                        d = e;
                        break
                    }
            } else {
                for (e = 0; e < b.length; e++) c = b[e], c.sort = c.index;
                c = b[d];
                d = c.index;
                b.sort(function(a, b) {
                    return a.sort - b.sort
                })
            }
            zd(this, b, d);
            this.rb = a;
            a = new A("playlistshufflemodechange", !0);
            H(this.c.target, a)
        }
    };
    f.Ha = function(a) {
        this.La !== a && (this.La = a, a = new A("playlistrepeatmodechange", !0), H(this.c.target, a))
    };
    f.Fa = function() {
        return this.rb
    };
    f.H = function() {
        return this.La
    };

    function zd(a, b, c) {
        var d = null,
            e, g = [],
            h = !1,
            k = !1,
            t = 0;
        if (null !== b)
            for (t = 0; t < b.length; t++) d = b[t], g[t] = d.media_uri;
        if (null !== b && null !== a.media && b.length === a.media.length)
            for (t = 0; t < b.length; t++)
                if (d = b[t], e = a.media[t], d.media_uri !== e.media_uri) {
                    h = !0;
                    break
                } else d.media_url !== e.media_url && (k = !0);
        else if (null !== b || null !== a.media) h = !0;
        if (h || k) jd.debug("set media", b), a.media = b, a.aa = g;
        sd(a.c, ta) && h && null !== a.a && (d = new A("playlistchange"), H(a.c.target, d));
        void 0 !== c && wd(a, c)
    }
    f.ka = function() {
        return !0
    };
    f.setDefaultFullScreenMode = function() {};

    function Bd(a) {
        var b;
        !a.M && (b = Cd(a, a.g), null === b || -1 !== b.seek_delay && a.getCurrentTime() > b.seek_delay) && (a.M = !0);
        return a.M
    }
    f.mb = function() {};

    function Dd(a) {
        var b = 0,
            c = 0,
            d = 0,
            e = 0,
            g = null,
            b = null;
        if (null !== a.a) {
            b = a.a.offsetLeft;
            c = a.a.offsetTop;
            d = a.a.offsetWidth;
            e = a.a.offsetHeight;
            for (g = a.a.offsetParent; null !== g && "BODY" !== g.tagName;) b += g.offsetLeft, c += g.offsetTop, g = g.offsetParent;
            b = null === a.a.offsetParent ? null : [b, c, d, e]
        }
        return b
    }

    function M(a) {
        var b = Dd(a);
        return "absolute" != a.getDisplayState() && null === b ? !1 : !0
    }
    f.remove = function() {
        var a;
        this.U();
        ud(this);
        null !== this.a ? (a = this.a.parentNode, this.Ya()) : (a = document.getElementById(this.c.target), a = null !== a && null !== a.parentNode ? a.parentNode : null);
        null !== a && null !== a.parentNode && a.parentNode.removeChild(a);
        H(this.c.target, new A("remove", !1))
    };
    f.Kb = function() {};
    f.Ya = function() {};
    f.Z = function() {
        var a;
        a = !this.paused();
        this.pause();
        td(this, a);
        xb || (a = new Ha("warning", 2002, "Network Unavailable", !0), H(this.c.target, a))
    };
    f.S = function() {
        0 === this.j && this.ab && this.play();
        2 == this.f && Ed(this)
    };
    f.getBookmark = function() {
        var a = null,
            b = Fd(this, this.i());
        null !== b && (a = new Sa(b.media_uri, this.getCurrentTime(), this.g));
        return null !== a ? Ta(a) : null
    };

    function F(a, b) {
        var c = b;
        if (!xb || null !== vb && null !== wb && wb !== vb.PAState.OFF) c = 3;
        var d = a.f,
            e = !1;
        void 0 !== oa[d] && !0 === oa[d][c] && (e = !0);
        if (e) switch (c) {
            case 3:
                a.f = c;
                a.Z();
                break;
            case 2:
                a.f = c;
                a.S();
                break;
            default:
                a.f = c
        }
        jd.debug("set state [" + b + "], new state [" + a.f + "]")
    }
    f.na = function() {
        null !== this.a && ("normal" !== this.getDisplayState() && this.cancelFullScreen(), this.a.style.visibility = "hidden")
    };
    f.show = function() {
        2 !== this.f ? Gd(this, this.show) : null !== this.a && (this.a.style.visibility = "")
    };
    f.pause = function() {
        3 !== this.f && td(this, !1)
    };
    f.paused = function() {
        return this.Da
    };
    f.play = function() {};
    f.stop = function() {};
    f.buffered = function() {
        return null
    };
    f.seekable = function() {
        return null
    };
    f.seeking = function() {
        return this.Ea
    };
    f.getVolume = function() {
        return 0
    };
    f.setVolume = function() {
        return !0
    };

    function N(a, b, c) {
        if (a.c && null !== a.a) {
            if (3 === a.f) return !1;
            if (2 !== a.f) return Gd(a, b, c), !1;
            if (!M(a)) return !1
        } else return !1;
        return !0
    }
    f.e = function() {
        return this.c && null !== this.a ? !0 : !1
    };

    function Hd(a, b) {
        var c = Fd(a, a.i());
        null !== c ? (jd.debug("Save restore point media_uri [" + c.media_uri + "], sub_item_index [" + a.g + "], elapsed_time [" + b + "]"), a.I = new Sa(c.media_uri, b, a.g)) : jd.warn("Unable to save restore point, no media items loaded")
    }
    f.getCurrentTime = function() {
        return this.currentTime
    };
    f.V = function() {
        return this.getCurrentTime()
    };
    f.getDuration = function() {
        return this.duration
    };
    f.J = function(a) {
        jd.debug("duration updated [" + a + "]");
        this.duration = a
    };
    f.W = function() {
        return this.getDuration()
    };
    f.seek = function() {};
    f.ga = function() {
        return !1
    };
    f.cancelFullScreen = function() {
        return !1
    };

    function Fd(a, b) {
        var c = null;
        null !== a.media && b < a.media.length && 0 <= b && (c = a.media[b]);
        return c
    }

    function Cd(a, b) {
        var c = null,
            d = null;
        0 <= a.i() && 0 < a.media.length && (c = a.media[a.i()], void 0 !== c.media_url_list && b < c.media_url_list.length && 0 <= b && (d = c.media_url_list[b]));
        return d
    }

    function Id(a, b) {
        var c = null,
            c = window.document.getElementsByTagName("html")[0];
        "normal" !== b ? (Jd(c, "avod-fs-absolute"), Jd(c, "avod-fs-pseudo"), id(c, "avod-fs-" + b), c = a.a, Jd(c.parentNode, "avod-fs-off"), id(c.parentNode, "avod-fs-on")) : (Jd(c, "avod-fs-absolute"), Jd(c, "avod-fs-pseudo"), c = a.a, id(c.parentNode, "avod-fs-off"), Jd(c.parentNode, "avod-fs-on"))
    }
    f.getDisplayState = function() {
        var a = RegExp("\\s*avod-fs-pseudo\\s*", "gm"),
            b = "normal",
            c;
        c = document.getElementsByTagName("html")[0];
        c = null === c.getAttribute("class") ? "" : c.getAttribute("class");
        a.test(c) && (b = "pseudo");
        return b
    };
    f.configureGUI = function(a) {
        void 0 !== a && null !== a && void 0 === a.baseUrl && (a.baseUrl = window.location.protocol + "//" + window.location.host);
        this.Qa = a;
        return !1
    };
    f.hb = function(a, b, c) {
        a = "";
        var d = null;
        null === this.plugins && (this.plugins = {});
        b = {
            src: b
        };
        if ("object" === typeof c) {
            for (a in c) b[a] = c[a];
            if ("http://api.airpana.com/avod/controls/settings" === b.namespace && void 0 !== b.configureGUI) {
                switch (b.configureGUI.constructor) {
                    case window.String:
                        try {
                            d = Ra.parse(b.configureGUI)
                        } catch (e) {
                            jd.warn("plugin configureGUI object is not valid json")
                        }
                        break;
                    case window.Object:
                        d = b.configureGUI
                }
                this.configureGUI(d)
            }
        }
    };
    f.oa = function() {};
    f.Za = function() {};
    f.za = function() {
        delete this.c;
        this.c = null;
        delete this.a;
        this.a = null
    };
    f.U = function(a) {
        var b = this;
        void 0 === a && (a = !1);
        this.m && (jd.debug("deallocate bandwidth, async [" + !a + "]"), ad(this.c.target, function(a) {
            b.Hb(a)
        }, a))
    };

    function Kd(a) {
        var b, c;
        0 <= a.g && (c = Cd(a, a.g), null !== c && (b = new Ea("seekdelay", c.seek_delay), H(a.c.target, b), 0 === c.seek_delay && (b = new A("canseek"), H(a.c.target, b))));
        0 >= a.g && H(a.c.target, new A("loadedmetadata"))
    }
    f.ua = function(a) {
        var b;
        b = null;
        var c = a.player.b;
        this.currentTime = 0;
        this.autoplay = !1;
        sd(a.player, ta) ? (b = c.k(), 1 == c.H() ? window.setTimeout(function() {
            a.player.play()
        }, 0) : 2 == c.H() || c.i() < b.length - 1 ? window.setTimeout(function() {
            c.R()
        }, 0) : (c.g = -1, td(c, !1), c.U(), b = new A("playlistend", !1), H(a.player.target, b))) : (c.g = -1, td(c, !1), c.U())
    };
    f.subtitleSetCode = function() {
        return !1
    };
    f.subtitleGetCode = function() {
        return null
    };
    f.wa = function() {
        return !1
    };
    f.X = function() {
        return null
    };
    f.ya = function() {
        return !1
    };

    function Gd(a, b, c) {
        b = new Ja(b, c);
        null === a.G ? a.G = [b] : a.G[a.G.length] = b
    }

    function Ed(a) {
        var b, c = [],
            d;
        if (null !== a.G && 0 < a.G.length) {
            for (b = 0; b < a.G.length; b++) c[b] = a.G[b];
            for (b = a.G.length = 0; b < c.length; b++) d = c[b], null === d.ob && (d.ob = []), d.Ob.apply(a, d.ob);
            c.length = 0
        }
        a.G = null
    }

    function id(a, b) {
        var c = new RegExp("\\b" + b + "\\b", "gm"),
            d;
        null !== a && (d = null === a.getAttribute("class") ? "" : a.getAttribute("class"), c.test(d) || (0 < d.length && (d += " "), d += b), a.setAttribute("class", d))
    }

    function Jd(a, b) {
        var c = new RegExp("\\s*" + b + "\\s*", "gm"),
            d, e = -1,
            g = " ";
        if (null !== a) {
            d = null === a.getAttribute("class") ? "" : a.getAttribute("class");
            c = c.exec(d);
            if (null !== c) {
                e = d.indexOf(c[0]);
                if (0 === e || e === d.length - c[0].length) g = "";
                d = d.replace(c[0], g)
            }
            " " === d && (d = "");
            a.setAttribute("class", d)
        }
    }

    function rd(a) {
        a.player.b.ua(a)
    }
    f.Hb = function() {};

    function ld(a) {
        var b, c;
        if (c = a.player.b) b = c.V(), c.currentTime = b;
        c.M || (b = Cd(c, c.g)) && -1 !== b.seek_delay && c.getCurrentTime() > b.seek_delay && (c.M = !0, c = new A("canseek"), H(a.player.target, c))
    }

    function md(a) {
        a = a.player.b;
        a.Da = !0;
        a.U()
    }

    function nd(a) {
        a = a.player.b;
        a.Da = !1;
        td(a, !0)
    }

    function od(a) {
        var b = a.player.b;
        "pause" === a.type ? b.Da = !0 : "playing" === a.type && (b.Da = !1);
        2 === b.f && ("playing" === a.type && b.show(), td(b, !a.player.paused()))
    }

    function qd(a) {
        a = a.player.b;
        a.J(0);
        a.currentTime = 0;
        a.Ea = !1
    }

    function kd(a) {
        var b = a.player.b;
        switch (a.type) {
            case "seeked":
                b.Ea = !1;
                break;
            case "seeking":
                b.Ea = !0
        }
    }

    function pd(a) {
        a = a.player.b;
        var b = a.W();
        a.getDuration() !== b && a.J(b)
    }

    function Ld(a, b) {
        null !== a.c && (ud(a), null !== E(a.c.target) && (b.success ? (a.m = !0, Md(a, b.media_urls)) : (0 === a.j && (a.media = null), 408 === parseInt(b.code, 10) ? a.Sa = window.setTimeout(function() {
            Nd.call(a)
        }, Od) : 0 === a.j && a.mb(), F(a, 2))))
    }

    function Md(a, b) {
        var c = 0,
            d, e = a.i(),
            g = a.g,
            h = !1,
            k = a.I,
            t = 0;
        0 === a.j && (a.J(0), a.currentTime = 0);
        if (null !== a.c) {
            for (c = 0; c < b.length; c++) d = b[c], h || null === k || d.media_uri !== k.media_uri || (jd.debug("updated current item index from bookmark media_uri [" + k.media_uri + "]"), e = c, t = k.O, h = !0), d.index = c, d.sort = c;
            zd(a, b, e);
            xd(a, e, g, t, a.autoplay);
            null === k || h || (c = new Ha("warning", 2004, "Bookmark doesn't match any playlist items"), H(a.c.target, c))
        }
    }

    function Nd() {
        var a;
        ud(this);
        3 !== this.f && (a = new Ha("warning", 2002, "Network Unavailable"), H(this.c.target, a));
        this.c.qb()
    }

    function yd(a, b) {
        var c = 0,
            d, e, g = 0,
            h, k, t;
        if (a.success && (h = a.media_urls, "[object Array]" === Object.prototype.toString.apply(h))) {
            k = h.length;
            d = null == this.media ? [] : this.media.slice(0);
            g = d.length;
            if (void 0 === b || 0 > b || b > d.length) b = d.length;
            if (b < g)
                for (c = 0; c < g - b; c++) e = g + k - 1 - c, d[e] = d[g - c - 1], e = d[e], e.sort += k, e.index >= b && (e.index += k);
            for (c = 0; c < k; c++) d[b + c] = h[c], 0 < b + c && 0 < g ? (e = d[b + c - 1], t = e.sort + 1) : t = 0, e = d[b + c], e.sort = t, e.index = b + c;
            zd(this, d);
            0 === g && xd(this, this.i(), this.g, 0, !1)
        }
    }
    var jd = new n("avod.player.adaptor.AbstractAdaptor");
    hd.prototype.La = 0;
    var Od = 3E4;

    function Pd(a, b) {
        var c, d = this;
        hd.call(this, a, b);
        this.ub = null;
        this.tb = !1;
        this.D = [0, 0, 0, 0];
        this.w = this.ha = null;
        this.Va = [];
        this.a = document.createElement("VIDEO");
        this.a.setAttribute("width", this.gb);
        this.a.setAttribute("height", this.fb);
        this.a.controls = !1;
        this.a.poster = Ec("images/transparent.png");
        c = document.getElementById(a.target);
        c.parentNode.replaceChild(this.a, c);
        this.a.id = a.target;
        Qd(this);
        this.addEventListener("jsbridgecreated", Rd);
        this.addEventListener("loadedmetadata", Sd);
        this.addEventListener("playlistchange",
            Td);
        this.addEventListener("playlistindexchange", Ud);
        this.addEventListener("soundtrackchange", Vd);
        this.addEventListener("subtitlechange", Wd);
        this.addEventListener("MEDIA_PLAYER_FULL_SCREEN_CHANGE", Xd);
        this.addEventListener("MEDIA_PLAYER_PLAYING", Yd);
        this.addEventListener("MEDIA_PLAYER_CAN_PLAY", P);
        this.addEventListener("MEDIA_PLAYER_CAN_PLAY_THROUGH", P);
        this.addEventListener("MEDIA_PLAYER_DURATION_CHANGED", P);
        this.addEventListener("MEDIA_PLAYER_BUFFER_EMPTIED", P);
        this.addEventListener("MEDIA_PLAYER_END_OF_STREAM",
            P);
        this.addEventListener("MEDIA_PLAYER_FULL_SCREEN_CHANGE", P);
        this.addEventListener("MEDIA_PLAYER_LOAD_STARTED", P);
        this.addEventListener("MEDIA_PLAYER_LOADED_DATA", P);
        this.addEventListener("MEDIA_PLAYER_LOADED_META_DATA", P);
        this.addEventListener("MEDIA_PLAYER_PAUSED", P);
        this.addEventListener("MEDIA_PLAYER_SET_TO_PLAY", P);
        this.addEventListener("MEDIA_PLAYER_PLAYING", P);
        this.addEventListener("MEDIA_PLAYER_PLAYLIST_CHANGE", P);
        this.addEventListener("MEDIA_PLAYER_PLAYLIST_ENDED", P);
        this.addEventListener("MEDIA_PLAYER_PLAYLIST_INDEX_CHANGE",
            P);
        this.addEventListener("MEDIA_PLAYER_PLAYLIST_REPEAT_MODE_CHANGED", P);
        this.addEventListener("MEDIA_PLAYER_PLAYLIST_SHUFFLE_MODE_CHANGED", P);
        this.addEventListener("MEDIA_PLAYER_READY", P);
        this.addEventListener("MEDIA_PLAYER_REMOVED", P);
        this.addEventListener("MEDIA_PLAYER_CAN_SEEK", P);
        this.addEventListener("MEDIA_PLAYER_SEEK_DELAY_CHANGE", P);
        this.addEventListener("MEDIA_PLAYER_SEEK_RANGE_CHANGE", P);
        this.addEventListener("MEDIA_PLAYER_SEEKED", P);
        this.addEventListener("MEDIA_PLAYER_SEEKING", P);
        this.addEventListener("MEDIA_PLAYER_STOPPED",
            P);
        this.addEventListener("MEDIA_PLAYER_SUSPENDED_DOWNLOAD", P);
        this.addEventListener("MEDIA_PLAYER_TIME_UPDATE", P);
        this.addEventListener("MEDIA_PLAYER_VOLUME_CHANGED", P);
        this.addEventListener("MEDIA_PLAYER_SOUNDTRACK_CHANGED", P);
        this.addEventListener("MEDIA_PLAYER_SUBTITLE_CHANGED", P);
        this.addEventListener("MEDIA_PLAYER_WAITING", P);
        this.addEventListener("MEDIA_PLAYER_ERROR", P);
        this.addEventListener("MEDIA_PLAYER_WARNING", P);
        db && gb(function() {
            Zd.call(d)
        })
    }
    m(Pd, hd);

    function Qd(a) {
        null !== a.a && (window.addEventListener("orientationchange", function() {
            $d(a)
        }, !1), window.addEventListener("resize", function() {
            $d(a)
        }, !1))
    }

    function $d(a) {
        var b;
        b = null;
        if (null === a.ub) {
            b = Dd(a);
            null === b && (b = [0, 0, 0, 0]);
            if (a.D[0] !== b[0] || a.D[1] !== b[1] || a.D[2] !== b[2] || a.D[3] !== b[3]) a.D = b, ae.debug("viewport changed", "[" + a.D.join(",") + "]"), b = {
                viewport: a.D
            }, Q(a, "ifapi.avod.updateViewport", b, !1);
            a.ub = window.setTimeout(function() {
                a.ub = null;
                a.tb && (a.tb = !1, $d(a))
            }, be)
        } else a.tb = !0
    }
    f = Pd.prototype;
    f.Za = function(a) {
        var b = {},
            c = this.I,
            d = Pa.getData("ppv.ppv_token");
        this.ha = this.N;
        this.D = Dd(this);
        null === this.D && (this.D = [0, 0, 0, 0]);
        this.Va = [];
        b.mediaURIs = a;
        b.viewport = this.D;
        b.JSONObject = null;
        b.mediaPlayerType = this.c.type;
        b.ppv_token = null !== d ? d : "";
        b.autoplay = this.autoplay;
        b.subtitle_code = this.B;
        b.JSONObject = this.Qa;
        null !== this.ha && (b.soundtrack_code = this.ha);
        null !== c && (b.bookmark = Ra.parse(Ta(c)));
        Q(this, "ifapi.avod.load", b, !1)
    };
    f.play = function() {
        0 < this.k().length && N(this, this.play) && Q(this, "ifapi.avod.play", null, !1)
    };
    f.wa = function(a) {
        var b = !1;
        if (b = "true" === Q(this, "ifapi.avod.setSoundtrack", {
                code: a
            }, !1)) this.N = this.ha = a;
        return b
    };
    f.X = function() {
        return this.ha
    };

    function ce(a) {
        var b = null;
        try {
            if (b = Q(a, "ifapi.avod.getSoundtrack"), 0 == b.length || "null" === b) b = null
        } catch (c) {}
        a.ha = b
    }
    f.subtitleSetCode = function(a) {
        var b = !1;
        if (b = "true" === Q(this, "ifapi.avod.subtitleSetCode", {
                code: a
            }, !1)) this.B = this.w = a;
        return b
    };
    f.subtitleGetCode = function() {
        return this.w
    };

    function de(a) {
        var b = null;
        try {
            b = Q(a, "ifapi.avod.subtitleGetCode"), "null" === b && (b = null)
        } catch (c) {}
        a.w = b
    }
    f.getBookmark = function() {
        var a = Q(this, "ifapi.avod.getBookmark"),
            a = Ua(a);
        return null !== a ? Ta(a) : null
    };
    f.pause = function() {
        Pd.h.pause.call(this);
        Q(this, "ifapi.avod.pause", null, !1)
    };
    f.ka = function() {
        return !0
    };
    f.remove = function() {
        Q(this, "ifapi.avod.remove", null, !1);
        Pd.h.remove.call(this)
    };
    f.Ya = function() {
        this.a.parentNode.removeChild(this.a);
        this.a = null
    };
    f.Z = function() {
        Pd.h.Z.call(this);
        Q(this, "ifapi.avod.hideNativeControls", null, !1)
    };
    f.S = function() {
        var a = "",
            b, c = !1;
        Pd.h.S.call(this);
        if (null !== this.plugins)
            for (a in this.plugins) b = this.plugins[a], "string" === typeof a && void 0 !== b.namespace && "http://api.airpana.com/avod/controls/settings" === b.namespace && "string" === typeof b.configureGUI && (c = !0);
        c || Q(this, "ifapi.avod.showNativeControls", null, !1)
    };
    f.ra = function(a, b) {
        var c = {};
        c.mediaURIs = "string" === typeof a ? [a] : a;
        void 0 === b || isNaN(b) || (c.index = b);
        N(this, this.ra, [a]) && Q(this, "ifapi.avod.playlistAddItemByMediaURI", c, !1)
    };
    f.ta = function(a) {
        var b = !1,
            c = {
                mediaURI: a
            };
        N(this, this.ta, [a]) && (b = "true" === Q(this, "ifapi.avod.playlistRemoveItemByMediaURI", c));
        return b
    };
    f.ea = function(a) {
        var b = !1,
            c = {
                index: a
            };
        N(this, this.ea, [a]) && (b = "true" === Q(this, "ifapi.avod.playlistRemoveItemByIndex", c));
        return b
    };
    f.C = function(a) {
        var b = !1,
            c = {
                index: a
            };
        N(this, this.C, [a]) && (b = "true" === Q(this, "ifapi.avod.playlistPlayItemByIndex", c));
        return b
    };
    f.sa = function(a) {
        var b = !1,
            c;
        null !== Ua(a) && (c = {
            bookmark: Ra.parse(a)
        }, N(this, this.sa, [a]) && (b = "true" === Q(this, "ifapi.avod.playlistPlayItemByBookmark", c)));
        return b
    };
    f.da = function() {
        N(this, this.da) && Q(this, "ifapi.avod.playlistPlayPrevious", null, !1)
    };
    f.R = function() {
        N(this, this.R) && Q(this, "ifapi.avod.playlistPlayNext", null, !1)
    };
    f.Ha = function(a) {
        Q(this, "ifapi.avod.playlistSetRepeatMode", {
            mode: a
        }, !1)
    };
    f.Ia = function(a) {
        Q(this, "ifapi.avod.playlistSetShuffle", {
            value: a
        }, !1)
    };
    f.Fa = function() {
        return "true" === Q(this, "ifapi.avod.playlistGetShuffle")
    };
    f.H = function() {
        return parseInt(Q(this, "ifapi.avod.playlistGetRepeatMode"), 10)
    };
    f.na = function() {
        null !== this.a && (this.a.style.visibility = "hidden");
        Q(this, "ifapi.avod.hide", null, !1)
    };
    f.show = function() {
        var a = this;
        null !== this.a && (this.a.style.visibility = "", Q(this, "ifapi.avod.show", null, !1), window.setTimeout(function() {
            $d(a)
        }, 0))
    };
    f.stop = function() {
        this.e() && Q(this, "ifapi.avod.stop", null, !1)
    };
    f.configureGUI = function(a) {
        a = Pd.h.configureGUI.call(this, a);
        var b = {
            JSONObject: this.Qa
        };
        try {
            a = "true" === Q(this, "ifapi.avod.configureGUI", b)
        } catch (c) {
            a = !1
        }
        return a
    };
    f.getVolume = function() {
        var a = 0;
        try {
            a = parseFloat(Q(this, "ifapi.avod.getVolume"))
        } catch (b) {}
        return a
    };
    f.setVolume = function(a) {
        var b = {
                level: a
            },
            c = !1;
        N(this, this.setVolume, [a]) && (c = "false" !== Q(this, "ifapi.avod.setVolume", b));
        return c
    };
    f.V = function() {
        var a = 0;
        try {
            a = parseInt(Q(this, "ifapi.avod.getCurrentTime"), 10)
        } catch (b) {}
        return a
    };
    f.getDuration = function() {
        var a = 0;
        try {
            a = parseInt(Q(this, "ifapi.avod.getDuration"), 10)
        } catch (b) {}
        return a
    };
    f.seek = function(a) {
        var b = {
            seconds: a
        };
        N(this, this.seek, [a]) && Q(this, "ifapi.avod.seek", b, !1)
    };
    f.seekable = function() {
        var a = null;
        Bd(this) && (a = new ua(0, this.getDuration()));
        return a
    };
    f.ga = function() {
        var a = !1;
        2 === this.f && (a = "false" !== Q(this, "ifapi.avod.requestFullScreen"));
        return a
    };
    f.cancelFullScreen = function() {
        var a = !1;
        return a = "false" !== Q(this, "ifapi.avod.cancelFullScreen")
    };
    f.getDisplayState = function() {
        var a = "normal",
            b = Q(this, "ifapi.avod.getDisplayState");
        switch (b) {
            case "normal":
            case "absolute":
                a = b
        }
        return a
    };

    function Q(a, b, c, d) {
        var e = void 0;
        if (void 0 === c || null === c) c = {};
        null !== a.c && (c.player_id = a.c.target, ae.debug(b + " call:", Ra.stringify(c)), e = Oa.callMethod(b, c, d), void 0 === d && ae.debug(b + " return:", e));
        return e
    }
    f.k = function() {
        return this.Va
    };

    function ee(a) {
        var b = Q(a, "ifapi.avod.playlistGetInfo");
        try {
            a.Va = Ra.parse(b)
        } catch (c) {
            a.Va = []
        }
    }
    f.U = function() {};
    f.ua = function() {};

    function P(a) {
        var b = null;
        switch (a.type) {
            case "MEDIA_PLAYER_CAN_PLAY":
                b = new A("canplay");
                break;
            case "MEDIA_PLAYER_CAN_PLAY_THROUGH":
                b = new A("canplaythrough");
                break;
            case "MEDIA_PLAYER_DURATION_CHANGED":
                b = new A("durationchange");
                break;
            case "MEDIA_PLAYER_BUFFER_EMPTIED":
                b = new A("emptied");
                break;
            case "MEDIA_PLAYER_END_OF_STREAM":
                b = new A("ended");
                break;
            case "MEDIA_PLAYER_FULL_SCREEN_CHANGE":
                b = new A("fullscreenchange");
                break;
            case "MEDIA_PLAYER_LOAD_STARTED":
                b = new A("loadstart");
                break;
            case "MEDIA_PLAYER_LOADED_DATA":
                b =
                    new A("loadeddata");
                break;
            case "MEDIA_PLAYER_LOADED_META_DATA":
                b = new A("loadedmetadata");
                break;
            case "MEDIA_PLAYER_PAUSED":
                b = new A("pause");
                break;
            case "MEDIA_PLAYER_SET_TO_PLAY":
                b = new A("play");
                break;
            case "MEDIA_PLAYER_PLAYING":
                b = new A("playing");
                break;
            case "MEDIA_PLAYER_PLAYLIST_CHANGE":
                b = new A("playlistchange");
                break;
            case "MEDIA_PLAYER_PLAYLIST_ENDED":
                b = new A("playlistend");
                break;
            case "MEDIA_PLAYER_PLAYLIST_INDEX_CHANGE":
                b = new A("playlistindexchange");
                break;
            case "MEDIA_PLAYER_PLAYLIST_REPEAT_MODE_CHANGED":
                b =
                    new A("playlistrepeatmodechange");
                break;
            case "MEDIA_PLAYER_PLAYLIST_SHUFFLE_MODE_CHANGED":
                b = new A("playlistshufflemodechange");
                break;
            case "MEDIA_PLAYER_READY":
                b = new A("jsbridgecreated");
                break;
            case "MEDIA_PLAYER_CAN_SEEK":
                b = new A("canseek");
                break;
            case "MEDIA_PLAYER_SEEK_DELAY_CHANGE":
            case "MEDIA_PLAYER_SEEK_RANGE_CHANGE":
                b = new Ea("seekdelay", a.data.delay);
                break;
            case "MEDIA_PLAYER_SEEKED":
                b = new A("seeked");
                break;
            case "MEDIA_PLAYER_SEEKING":
                b = new A("seeking");
                break;
            case "MEDIA_PLAYER_SOUNDTRACK_CHANGED":
                b =
                    new A("soundtrackchange");
                break;
            case "MEDIA_PLAYER_SUBTITLE_CHANGED":
                b = new A("subtitlechange");
                break;
            case "MEDIA_PLAYER_STALLED":
                b = new y("stalled", a.data.code, a.data.text);
                break;
            case "MEDIA_PLAYER_ERROR":
                b = new y("error", a.data.code, a.data.text);
                break;
            case "MEDIA_PLAYER_STOPPED":
                b = new A("stop");
                break;
            case "MEDIA_PLAYER_SUSPENDED_DOWNLOAD":
                b = new A("suspend");
                break;
            case "MEDIA_PLAYER_TIME_UPDATE":
                b = new A("timeupdate");
                break;
            case "MEDIA_PLAYER_VOLUME_CHANGED":
                b = new A("volumechange");
                break;
            case "MEDIA_PLAYER_WAITING":
                b =
                    new A("waiting");
                break;
            case "MEDIA_PLAYER_WARNING":
                b = new Ha("warning", a.data.code, a.data.text)
        }
        null !== b && (H(a.player.target, b), db || (a = a.player.b, $d(a)))
    }

    function Td(a) {
        ee(a.player.b)
    }

    function Ud(a) {
        var b = null;
        a = a.player.b;
        try {
            b = parseInt(Q(a, "ifapi.avod.playlistGetCurrentItemIndex"), 10)
        } catch (c) {}
        null !== b && (a.la = b)
    }

    function Yd(a) {
        a = a.player.b;
        0 != a.k().length && 3 !== a.f || Q(a, "ifapi.avod.pause", null, !1)
    }

    function Sd(a) {
        a = a.player.b;
        ce(a);
        de(a);
        Ed(a)
    }

    function Rd(a) {
        a = a.player.b;
        ee(a);
        a.m = !0
    }

    function Xd(a) {
        a = a.player.b;
        var b = "",
            c = !1,
            d;
        if (null !== a.plugins)
            for (b in a.plugins) d = a.plugins[b], "string" === typeof b && void 0 !== d.namespace && "http://api.airpana.com/avod/controls/settings" === d.namespace && "string" === typeof d.configureGUI && (c = !0);
        c || Q(a, "ifapi.avod.showNativeControls", null, !1)
    }
    var ae = new n("avod.player.adaptor.AppAdaptor");

    function Vd(a) {
        a = a.player.b;
        ce(a);
        a.N = a.ha
    }

    function Wd(a) {
        a = a.player.b;
        de(a);
        a.B = a.w
    }

    function Zd() {
        $d(this)
    }
    var be = 1E3;

    function fe(a, b, c) {
        this.$a = !1;
        this.bb = 0;
        this.o = null;
        this.nb = 0;
        this.Wa = this.Q = null;
        this.Bb = !0;
        this.Oa = !1;
        this.Ma = null;
        this.Rb = c;
        this.p = null;
        hd.call(this, a, b);
        this.addEventListener("loadstart", ge);
        this.addEventListener("playing", he);
        R.debug("HtmlAdaptor instantiated [" + a.target + "]")
    }
    m(fe, hd);
    f = fe.prototype;
    f.Za = function(a) {
        var b = this,
            c, d;
        R.debug("requestMedia", a);
        F(this, 1);
        if (this.Oa || null === this.a && this.autoplay) {
            c = [];
            for (d = 0; d < a.length; d++) c[d] = {
                media_uri: a[d],
                media_url: ""
            };
            Md(this, c);
            C.isiOS() && 8 > C.getiOSVersion() && Zc(this.c.target, a, function(a) {
                Ld(b, a)
            })
        } else Zc(this.c.target, a, function(a) {
            Ld(b, a)
        })
    };
    f.getVolume = function() {
        var a = 0;
        this.e() && (a = this.a, a = a.volume);
        return a
    };
    f.setVolume = function(a) {
        var b = !1,
            c, d;
        this.e() && (d = this.a, c = d.volume, c !== a && (d.volume = a, c !== d.volume && (b = !0)));
        return b
    };
    f.ka = function() {
        var a = this.getVolume(),
            b = this.setVolume(1 > a ? a + .1 : .9);
        b && this.setVolume(a);
        return b
    };
    f.seeking = function() {
        var a;
        a = !1;
        this.e() && (a = this.a, a = a.seeking);
        return a
    };
    f.ga = function(a) {
        var b = !1,
            c = null,
            c = this.c.getDisplayState();
        void 0 === a && (a = "absolute");
        if (N(this, this.ga, [a]) && c !== a && null !== this.e()) switch (c = zb, null !== c && c.cancelFullScreen(), a) {
            case "pseudo":
                Id(this, a);
                Cb(this.c);
                c = new A("fullscreenchange");
                H(this.c.target, c);
                b = !0;
                break;
            default:
                a = this.a;
                var c = null,
                    d = !1;
                "" !== Ya && "function" === typeof a[Ya + "RequestFullScreen"] ? c = a[Ya + "RequestFullScreen"] : "function" === typeof a.webkitEnterFullscreen ? c = a.webkitEnterFullscreen : "function" === typeof a.requestFullScreen &&
                    (c = a.requestFullScreen);
                if ("function" === typeof c) try {
                    c.call(a), d = !0
                } catch (e) {}
                d && (b = !0)
        }
        return b
    };
    f.cancelFullScreen = function() {
        var a = !1,
            b = null,
            c;
        if (this.e()) switch (c = this.c.getDisplayState(), c) {
            case "pseudo":
                a = !0;
                b = new A("fullscreenchange");
                break;
            case "absolute":
                var a = this.a,
                    d = c = null;
                "" !== Ya && "function" === typeof document[Ya + "CancelFullScreen"] ? (c = document[Ya + "CancelFullScreen"], d = document) : "function" === typeof a.webkitExitFullscreen ? (c = a.webkitExitFullscreen, d = a) : "function" === typeof document.cancelFullScreen && (c = document.cancelFullScreen, d = document);
                "function" === typeof c ? (c.call(d), a = !0) : a = !1
        }
        a &&
            (Cb(null), Id(this, "normal"), null !== b && H(this.c.target, b));
        return a
    };

    function ie(a, b) {
        b ? (a.a.addEventListener("webkitbeginfullscreen", je, !1), a.a.addEventListener("webkitendfullscreen", je, !1), a.a.addEventListener("fullscreenchange", je, !1), a.a.addEventListener("webkitfullscreenchange", je, !1)) : (a.a.removeEventListener("webkitbeginfullscreen", je, !1), a.a.removeEventListener("webkitendfullscreen", je, !1), a.a.removeEventListener("fullscreenchange", je, !1), a.a.removeEventListener("webkitfullscreenchange", je, !1))
    }
    f.V = function() {
        var a = this.a.currentTime;
        2 === this.f && this.eb(this.W());
        return a
    };
    f.eb = function(a) {
        a > this.c.getDuration() && this.J(a)
    };

    function ke(a) {
        var b = "",
            c = document.getElementById(a.c.target),
            d = a.Ja,
            e;
        if (null !== c)
            for (b in a.a = document.createElement(a.Rb), e = a.a, e.autoplay = a.autoplay, e.src = K(a, "mediaUrl"), e.setAttribute("width", a.gb), e.setAttribute("height", a.fb), null !== d && (e.poster = d), c.parentNode.replaceChild(e, c), e.controls = !0, e.id = a.c.target, ie(a, !0), e.addEventListener("contextmenu", le, !1), e.addEventListener("durationchange", me, !1), e.addEventListener("loadedmetadata", me, !1), e.addEventListener("pause", ne, !1), e.addEventListener("loadedmetadata",
                    oe, !1), e.addEventListener("error", pe, !1), e.addEventListener("ended", qe, !1), e.addEventListener("seeking", re, !1), e.addEventListener("seeked", se, !1), e.addEventListener("timeupdate", te, !1), e.addEventListener("volumechange", ue, !1), a = Fa(), a) e.addEventListener(a[b], ve, !1)
    }
    f.oa = function(a, b) {
        var c = this,
            d;
        d = (new Date).getTime();
        var e;
        null !== this.Q && (window.clearTimeout(this.Q), this.Q = null);
        (0 !== this.j || "" !== a && a !== K(this, "mediaUrl")) && 2E3 >= d - this.nb ? (this.Q = window.setTimeout(function() {
            we.call(c, a, b)
        }, 2E3), F(this, 1)) : (null !== this.o && (window.clearTimeout(this.o), this.o = null), this.nb = d, fe.h.oa.call(this, a, b), "" === a ? L(this, "mediaUrl", null) : L(this, "mediaUrl", a), Hd(this, b), F(this, 1), this.e() ? (e = this.a, e.autoplay = !1, d = this.Ja, null !== d && (e.poster = d), this.a.removeEventListener("seeked",
            xe, !1), this.a.removeEventListener("loadeddata", xe, !1), this.m ? this.a.src !== K(this, "mediaUrl") || 0 !== this.j ? (this.$a = !1, this.J(0), this.currentTime = 0, e.src = K(this, "mediaUrl"), e.load(), null !== K(this, "mediaUrl") && (this.Oa = !1), F(this, 2)) : 2 < Math.abs(b - this.getCurrentTime()) ? (F(this, 2), this.F(b)) : F(this, 2) : this.Oa ? F(this, 2) : this.n()) : (ke(this), e = this.a, this.Pa = window.setTimeout(function() {
            Ce.call(c)
        }, 1E3), H(this.c.target, new A("jsbridgecreated")), this.setVolume(Eb()), e.autoplay ? (this.Bb && (this.Oa = !0, this.nb =
            0), e.play()) : this.a.addEventListener("error", pe, !1), this.Bb = !1))
    };
    f.getDisplayState = function() {
        var a = fe.h.getDisplayState.call(this);
        if ("normal" === a) {
            var b = this.a,
                c = !1;
            if (null !== b)
                if (void 0 !== b.webkitDisplayingFullscreen) c = b.webkitDisplayingFullscreen;
                else switch (Ya) {
                    case "":
                        c = document.fullScreen;
                        break;
                    case "webkit":
                        c = document.webkitIsFullScreen;
                        break;
                    default:
                        c = document[Ya + "FullScreen"]
                }
                c && (a = "absolute")
        }
        return a
    };
    f.buffered = function() {
        var a, b = null;
        this.e() && (a = this.a, null !== a.buffered && 0 < a.buffered.length && (b = a.buffered), null !== b && this.eb(b.end(0)));
        return b
    };
    f.seekable = function() {
        var a;
        a = null;
        this.e() && Bd(this) && (a = this.a, a = a.seekable);
        return a
    };
    f.play = function() {
        0 < this.k().length && N(this, this.play) && (this.m || this.addEventListener("play", De), this.a.play())
    };
    f.pause = function() {
        this.e() && (R.debug("pause call"), this.a.pause())
    };
    f.stop = function() {
        this.e() && (this.paused() || (this.pause(), H(this.c.target, new A("pause"))), H(this.c.target, new A("stop")))
    };
    f.seek = function(a) {
        var b = this,
            c, d = (new Date).getTime();
        "" === K(this, "mediaUrl") ? Gd(this, this.seek, [a]) : N(this, this.seek, [a]) && this.m && (c = this.seekable(), 0 <= a && a <= this.W() && c && 0 < c.length ? (null !== this.o && (window.clearTimeout(this.o), this.o = null), 2E3 >= d - this.bb ? this.o = window.setTimeout(function() {
            b.seek(a)
        }, 2E3) : Bd(this) && (this.bb = d, R.debug("currentTime = [" + a + "]"), this.a.currentTime = a)) : c && 0 !== c.length || (this.o = window.setTimeout(function() {
            b.seek(a)
        }, 500)))
    };
    f.F = function(a) {
        var b = this,
            c, d = (new Date).getTime();
        N(this, this.F, [a]) && this.m && (c = this.seekable(), 0 <= a && a <= this.W() && c && 0 < c.length ? (null !== this.o && (window.clearTimeout(this.o), this.o = null), 2E3 >= d - this.bb ? this.o = window.setTimeout(function() {
            b.seek(a)
        }, 2E3) : (this.bb = d, R.debug("currentTime = [" + a + "]"), this.a.currentTime = a)) : c && 0 !== c.length || (this.o = window.setTimeout(function() {
            b.seek(a)
        }, 500)))
    };
    f.W = function() {
        var a, b = 0;
        this.e() && (a = this.a, isNaN(a.duration) || (b = a.duration));
        return b
    };
    f.mb = function() {
        null !== this.a && (this.a.src = null, L(this, "mediaUrl", null), Ee(this), ke(this))
    };

    function Ee(a) {
        var b, c = null;
        null !== a.Q && (window.clearTimeout(a.Q), a.Q = null);
        null !== a.o && (window.clearTimeout(a.o), a.o = null);
        ie(a, !1);
        a.a.removeEventListener("contextmenu", le, !1);
        a.a.removeEventListener("durationchange", me, !1);
        a.a.removeEventListener("loadedmetadata", me, !1);
        a.a.removeEventListener("pause", ne, !1);
        a.a.removeEventListener("loadedmetadata", oe, !1);
        a.a.removeEventListener("seeked", xe, !1);
        a.a.removeEventListener("loadeddata", xe, !1);
        a.a.removeEventListener("error", pe, !1);
        a.a.removeEventListener("ended",
            qe, !1);
        a.a.removeEventListener("seeking", re, !1);
        a.a.removeEventListener("seeked", se, !1);
        a.a.removeEventListener("timeupdate", te, !1);
        a.a.removeEventListener("volumechange", ue, !1);
        b = Fa();
        for (c in b) a.a.removeEventListener(b[c], ve, !1)
    }
    f.Ya = function() {
        null !== this.Pa && (window.clearTimeout(this.Pa), this.Pa = null);
        Ee(this);
        Fe(this);
        this.a.parentNode.removeChild(this.a);
        this.a = null
    };
    f.Kb = function() {
        var a;
        a = C.getiOSVersion();
        R.debug("ios version:\t" + a);
        0 < a && 8 > a && this.e() && (a = this.a, 0 == this.j && Hd(this, this.getCurrentTime()), R.debug("set to recover"), this.u(1), R.debug("unload player"), a.pause(), R.debug("update to bad source to invalidate tag"), a.src = window.InFlight.makeServiceURL("/avod/v1/404.m3u8", !1), R.debug("load bad source:\t" + a.src), a.load(), this.U(!0))
    };
    f.Z = function() {
        fe.h.Z.call(this);
        this.zb()
    };
    f.S = function() {
        fe.h.S.call(this);
        this.Jb();
        1 === this.j && (R.debug("recover on unlock"), this.n())
    };
    f.zb = function() {
        null !== this.a && null !== this.Ma && (this.a.controls = !1)
    };
    f.Jb = function() {
        null !== this.a && null !== this.Ma && (this.a.controls = this.Ma)
    };

    function Ge(a) {
        var b = !1,
            c = a.k();
        Fe(a);
        var d;
        if (d = null !== a.c) {
            d = a.getDuration();
            var e = a.W();
            d = 10 < d - e && 0 < c.length
        }
        d && (b = !0, a.n());
        return b
    }
    f.n = function() {
        var a;
        0 == this.j && Hd(this, this.getCurrentTime());
        a = vd(this);
        this.u(2);
        this.load(a)
    };
    f.ua = function(a) {
        var b = a.player.b,
            c = b.k();
        b.e() && M(b) && b.i() === c.length - 1 && 0 === b.H() && (b.a.autoplay = !1, b.a.load());
        fe.h.ua.call(this, a)
    };

    function Fe(a) {
        null !== a.Wa && (window.clearTimeout(a.Wa), a.Wa = null)
    }

    function we(a, b) {
        0 < this.k().length && this.oa(a, b)
    }

    function he(a) {
        a = a.player.b;
        var b = a.k();
        0 == b.length || 3 === a.f ? (R.debug("playing attempt while player is locked. playlist.length [" + b.length + "], player state [" + a.f + "]"), a.a.pause()) : a.m || 2 !== a.f || (a.autoplay = !0, a.n())
    }

    function De(a) {
        a = a.player.b;
        var b;
        a.removeEventListener("play", De);
        a.m || 2 !== a.f || (b = a.I, a.autoplay = !0, a.n(), null !== b && Hd(a, b.O))
    }

    function ge(a) {
        a = a.player.b;
        0 < K(a, "mediaUrl").length && null === a.Ma && (a.Ma = a.a.controls);
        Ed(a)
    }

    function ve(a) {
        var b, c;
        if (null !== a.target && (c = a.target, b = E(c.id), b = b.b, "play" === a.type && (b.Oa = !1), 0 === b.j && null === b.Q)) switch (a.type) {
            case "loadstart":
            case "loadeddata":
            case "canplaythrough":
                0 >= b.g && H(c.id, new A(a.type));
                break;
            case "loadedmetadata":
                Kd(b);
                break;
            case "ended":
            case "timeupdate":
            case "volumechange":
            case "seeking":
            case "seeked":
                break;
            default:
                H(c.id, new A(a.type))
        }
    }

    function qe(a) {
        var b, c;
        null !== a.target && (a = a.target, b = E(a.id), b = b.b, null !== b.p ? (R.debug("invalid end when seeking is disabled, revert to [" + b.p + "]"), b.F(b.p)) : (c = Cd(b, b.g + 1), null !== c ? xd(b, b.i(), b.g + 1, 0, !0) : H(a.id, new A("ended"))))
    }

    function te(a) {
        var b, c;
        null !== a.target && (a = a.target, b = E(a.id), b = b.b, c = b.V() - b.getCurrentTime(), Bd(b) || (null === b.p && 2 < Math.abs(c) ? (b.p = b.getCurrentTime(), R.debug("invalid timeupdate when seeking is disabled, return to [" + b.p + "]"), b.F(b.p)) : null !== b.p && (.005 > Math.abs(c) ? (b.p = null, R.debug("revert to seek complete")) : b.F(b.p))), null === b.p && H(a.id, new A("timeupdate")))
    }

    function ue(a) {
        null !== a.target && (a = a.target, a = E(a.id), a = a.b, Db(a.getVolume()))
    }

    function re(a) {
        var b;
        null !== a.target && (a = a.target, b = E(a.id), b = b.b, R.debug("seek fired [" + b.V() + "]"), Bd(b) || (null === b.p ? (b.p = b.getCurrentTime(), R.debug("invalid seek, return to [" + b.p + "]"), b.F(b.p)) : R.debug("waiting for timeupdate to confirm seek")), H(a.id, new A("seeking")))
    }

    function se(a) {
        null !== a.target && (a = a.target, H(a.id, new A("seeked")))
    }

    function me(a) {
        var b;
        null !== a.target && (b = a.target, b = E(b.id), b = b.b, isNaN(b.W()) && a.stopPropagation())
    }

    function le(a) {
        a.preventDefault()
    }

    function pe(a) {
        var b;
        null !== a.target && (a = a.target, R.error("error event:\t", a.error), a = E(a.id), a = a.b, b = a.k(), 0 !== b.length && M(a) && a.a.src != window.InFlight.makeServiceURL("/avod/v1/404.m3u8", !1) ? a.n() : R.debug("ignore error"))
    }

    function ne(a) {
        var b, c;
        null !== a.target && (b = a.target, b = E(b.id), c = b.b, Ge(c) ? a.stopPropagation() : "pause" === a.type ? c.Wa = window.setTimeout(function() {
            Ge(c)
        }, 1E3) : "ended" === a.type && Fe(c))
    }

    function oe(a) {
        var b, c = 0,
            d = null,
            d = null;
        if (null !== a.target) {
            a = a.target;
            a = E(a.id);
            b = a.b;
            d = b.I;
            null !== d && (c = d.O);
            d = b.j;
            if (0 !== d && 0 === c) b.u(3), c = new A("durationchange"), H(a.target, c), b.a.addEventListener("loadeddata", xe, !1);
            else if (0 !== d || 2 < Math.abs(c - b.getCurrentTime())) b.a.addEventListener("seeked", xe, !1), R.debug("force seek [" + c + "]"), b.F(c);
            Hd(b, 0)
        }
    }

    function je(a) {
        a = a.target;
        var b = E(a.id),
            c = b.b,
            d = "normal";
        a.webkitDisplayingFullscreen ? (d = "absolute", Cb(b)) : Cb(null);
        Id(c, d);
        c.paused() || c.play();
        H(b.target, new A("fullscreenchange"))
    }

    function xe(a) {
        var b;
        null !== a.target && (b = a.target, b = E(b.id), b = b.b, b.a.removeEventListener("seeked", xe, !1), b.a.removeEventListener("loadeddata", xe, !1), 0 !== b.j && (a.stopPropagation(), b.u(3)))
    }

    function Ce() {
        var a = this;
        this.e() && (null === this.a.offsetParent ? this.$a = !0 : this.$a && 1 !== this.f && (this.$a = !1, this.a.autoplay = !1, this.a.load(), this.a.play()));
        this.Pa = window.setTimeout(function() {
            Ce.call(a)
        }, 1E3)
    }
    var R = new n("avod.player.adaptor.HtmlAdaptor");

    function He(a, b) {
        fe.call(this, a, b, "audio");
        this.addEventListener("canplay", Ie)
    }
    m(He, fe);

    function Ie(a) {
        a = a.player.b;
        var b = vd(a);
        a.e() && b.autoplay && (a = a.a, Je.debug("Attempt play once canplay event has been dispatched to ensure playback"), a.play())
    }
    He.prototype.zb = function() {};
    He.prototype.Jb = function() {};
    var Je = new n("avod.player.adaptor.HtmlAudioAdaptor");

    function Ke(a, b) {
        fe.call(this, a, b, "video");
        this.w = null;
        this.addEventListener("loadeddata", Le)
    }
    m(Ke, fe);
    var Me = new n("avod.player.adaptor.HtmlVideoAdaptor");
    Ke.prototype.subtitleSetCode = function(a) {
        var b = !1,
            c, d = null,
            e;
        c = this.a;
        if (this.w !== a && c.textTracks && (d = c.textTracks, 0 < d.length))
            for (c = 0; c < d.length; c++) e = d[c], "subtitles" === e.kind && (e.language === a ? (b = !0, this.B = a, Me.debug("text tracks enabled [" + e.language + "]"), void 0 === d.onchange && "showing" !== e.mode && Ne(this), e.mode = "showing") : "disabled" !== e.mode && (Me.debug("text tracks disabled [" + e.language + "]"), void 0 === d.onchange && "showing" === e.mode && Ne(this), e.mode = "disabled"));
        return b
    };
    Ke.prototype.subtitleGetCode = function() {
        var a, b = null,
            c;
        a = this.a;
        if (a.textTracks && (b = a.textTracks, 0 < b.length))
            for (a = 0; a < b.length; a++)
                if (c = b[a], "subtitles" === c.kind && "showing" === c.mode) return c.language;
        return null
    };

    function Le(a) {
        var b = a.player.b;
        a = null;
        b.subtitleSetCode(b.B);
        b.w = b.subtitleGetCode();
        a = b.a;
        a.textTracks && (a = a.textTracks, void 0 !== a.onchange ? (Me.debug("add subtitle change listener: onSubtitlesChangeHandler"), a.addEventListener("change", function() {
            Ne(b)
        })) : b.addEventListener("timeupdate", Oe), a.addEventListener("addtrack", function() {
            Ne(b)
        }), a.addEventListener("removetrack", function() {
            Ne(b)
        }))
    }

    function Ne(a) {
        if (a.w !== a.subtitleGetCode() && (Me.debug("subtitles changed to [" + a.subtitleGetCode() + "]"), a.w = a.subtitleGetCode(), a.B = a.w, H(a.c.target, new A("subtitlechange")), C.isiOS() && 8 <= C.getiOSVersion())) {
            var b = a.a.textTracks,
                c, d = null;
            c = null;
            var e = a.V(),
                g;
            if (null !== a.w) {
                for (g = 0; g < b.length; g++)
                    if (c = b[g], c.language === a.w) {
                        d = b[g];
                        break
                    }
                if (null !== d && null !== d.cues)
                    for (g = 0; g < d.cues.length; g++) c = d.cues[g], c.endTime > e && !c.hasOwnProperty("charEncodeFixed") && (Me.debug("original track: [" + c.startTime.toFixed(2) +
                        " --\x3e " + c.endTime.toFixed(2) + "] [" + c.text + "]"), c.text = decodeURIComponent(escape(c.text)), Me.debug("updated track:  [" + c.startTime.toFixed(2) + " --\x3e " + c.endTime.toFixed(2) + "] [" + c.text + "]"), c.charEncodeFixed = !0)
            }
        }
    }

    function Oe(a) {
        Ne(a.player.b)
    };

    function T(a, b) {
        this.$ = null;
        hd.call(this, a, b);
        5 > Na.LOG_LEVEL && 0 <= Na.LOG_LEVEL && this.addLogFilter("*", Na.LOG_LEVEL);
        switch (a.type) {
            case "vod":
                L(this, "streamType", "dvr");
                L(this, "wmode", "direct");
                L(this, "enableStageVideo", "true");
                L(this, "playerType", "vod");
                break;
            case "aod":
                L(this, "playerType", "aod");
                break;
            case "tv":
                L(this, "streamType", "live"), L(this, "playerType", "tv")
        }
        L(this, "swf", Ec("FlashVideoPlayer.swf", {
            v: "01.14.00.2131"
        }));
        L(this, "javascriptCallbackFunction", "window.InFlight.AVOD.dispatchEvent");
        L(this, "autoPlay", "false");
        L(this, "loop", "false");
        L(this, "controls", "true");
        null === K(this, "wmode") && L(this, "wmode", "opaque");
        this.Ib = !1;
        this.ib = 0;
        this.yb = "normal";
        this.cb = this.ma = null;
        this.pb = "";
        this.$b = !1;
        this.Ua = this.Ka = this.Aa = this.d = null;
        this.addEventListener("playlistchange", Pe);
        this.addEventListener("playlistindexchange", Qe);
        this.addEventListener("cmd_next", Re);
        this.addEventListener("cmd_previous", Se);
        this.addEventListener("MEDIA_PLAYER_CAN_PLAY", Te);
        this.addEventListener("MEDIA_PLAYER_DURATION_CHANGED",
            Ue);
        this.addEventListener("MEDIA_PLAYER_BUFFER_EMPTIED", Ve);
        this.addEventListener("MEDIA_PLAYER_END_OF_STREAM", We);
        this.addEventListener("MEDIA_PLAYER_FULL_SCREEN_CHANGE", Xe);
        this.addEventListener("MEDIA_PLAYER_LOAD_STARTED", Ye);
        this.addEventListener("MEDIA_PLAYER_LOADED_DATA", Ze);
        this.addEventListener("MEDIA_PLAYER_LOADED_META_DATA", $e);
        this.addEventListener("MEDIA_PLAYER_PAUSED", af);
        this.addEventListener("MEDIA_PLAYER_SET_TO_PLAY", bf);
        this.addEventListener("MEDIA_PLAYER_PLAYING", cf);
        this.addEventListener("MEDIA_PLAYER_SEEKED",
            df);
        this.addEventListener("MEDIA_PLAYER_SEEKING", ef);
        this.addEventListener("MEDIA_PLAYER_STOPPED", ff);
        this.addEventListener("MEDIA_PLAYER_SUSPENDED_DOWNLOAD", gf);
        this.addEventListener("MEDIA_PLAYER_TIME_UPDATE", hf);
        this.addEventListener("MEDIA_PLAYER_VOLUME_CHANGED", jf);
        this.addEventListener("MEDIA_PLAYER_SOUNDTRACK_CHANGED", kf);
        this.addEventListener("MEDIA_PLAYER_SUBTITLE_CHANGED", lf);
        this.addEventListener("MEDIA_PLAYER_WAITING", mf);
        this.addEventListener("MEDIA_PLAYER_STALLED", nf)
    }
    m(T, hd);
    f = T.prototype;
    f.play = function() {
        var a;
        if (0 < this.k().length && N(this, this.play)) {
            U.debug("play call");
            try {
                a = this.a, a.avodPlay()
            } catch (b) {
                U.warn("SwfAdaptor - play:\n", b.stack ? b.stack : b)
            }
        }
    };
    f.pause = function() {
        var a;
        if (this.e()) try {
            U.debug("attempt pause"), a = this.a, a.avodPause()
        } catch (b) {
            U.warn("SwfAdaptor - pause:\n", b.stack ? b.stack : b)
        }
    };
    f.stop = function() {
        var a, b = this;
        if (this.e())
            if (of(this), this.pause(), M(this)) {
                this.cb = window.setTimeout(function() {
                    pf.call(b)
                }, 2E3);
                try {
                    a = this.a, a.avodStop()
                } catch (c) {
                    U.warn("SwfAdaptor - stop:\n", c.stack ? c.stack : c)
                }
            } else pf.call(b);
        qf(this);
        this.u(0)
    };
    f.seek = function(a) {
        var b;
        if (N(this, this.seek, [a]) && this.m && Bd(this)) try {
            b = this.a, b.avodSeek(a)
        } catch (c) {
            U.warn("SwfAdaptor - seek:\n", c.stack ? c.stack : c)
        }
    };
    f.F = function(a) {
        var b;
        if (N(this, this.F, [a]) && this.m) try {
            b = this.a, b.avodSeek(a, !0)
        } catch (c) {
            U.warn("SwfAdaptor - seek:\n", c.stack ? c.stack : c)
        }
    };
    f.buffered = function() {
        var a, b = null,
            c = null;
        a = this.a;
        if (M(this) && void 0 !== a.buffered) try {
            (c = a.buffered()) && (b = new ua(c.start, c.end))
        } catch (d) {
            U.warn("SwfAdaptor - buffered:\n", d.stack ? d.stack : d)
        }
        null !== b && this.eb(b.end(0));
        return b
    };
    f.eb = function(a) {
        a > this.c.getDuration() && this.J(a)
    };
    f.seekable = function() {
        var a, b = null,
            c;
        if (M(this) && Bd(this)) try {
            a = this.a, (c = a.seekable()) && (b = new ua(c.start, c.end))
        } catch (d) {
            U.warn("SwfAdaptor - seekable:\n", d.stack ? d.stack : d)
        }
        return b
    };
    f.configureGUI = function(a) {
        var b, c = T.h.configureGUI.call(this, a);
        if (this.e()) try {
            b = this.a, b.configureGUI(a), c = !0
        } catch (d) {
            this.a.setAttribute("data-force-reload", "1"), U.warn("SwfAdaptor - configureGUI:\n", d.stack ? d.stack : d)
        }
        return c
    };
    f.getVolume = function() {
        var a, b = 0;
        a = this.a;
        if (M(this) && void 0 !== a.getVolume) try {
            b = a.getVolume()
        } catch (c) {
            U.warn("SwfAdaptor - getVolume:\n", c.stack ? c.stack : c)
        }
        return b
    };
    f.setVolume = function(a) {
        var b, c = !1;
        if (M(this)) try {
            b = this.a, b.setVolume(a), c = !0
        } catch (d) {
            U.warn("SwfAdaptor - setVolume:\n", d.stack ? d.stack : d)
        }
        return c
    };
    f.ka = function() {
        return !0
    };
    f.ga = function(a) {
        var b, c = !1,
            d = null,
            e = this.c.getDisplayState();
        if (2 !== this.f) return c;
        void 0 === a && (a = "absolute");
        if (e !== a && M(this)) switch (e = zb, null !== e && e.cancelFullScreen(), a) {
            case "pseudo":
                Id(this, a);
                d = new A("fullscreenchange");
                try {
                    b = this.a, this.setDefaultFullScreenMode(a), b.setPseudoFullScreenState(!0), c = !0
                } catch (g) {
                    U.warn("SwfAdaptor - requestFullScreen:\n", g.stack ? g.stack : g), c = !1
                }
                break;
            default:
                this.setDefaultFullScreenMode(a)
        }
        c && null !== d && H(this.c.target, d);
        return c
    };
    f.setDefaultFullScreenMode = function(a) {
        var b;
        if (!this.c.Cb() && M(this)) try {
            b = this.a, b.setDefaultFullScreenMode(a)
        } catch (c) {
            U.warn("SwfAdaptor - setDefaultFullScreenMode:\n", c.stack ? c.stack : c)
        }
    };
    f.cancelFullScreen = function() {
        var a, b = this,
            c = !1,
            d = null,
            e;
        if (M(this)) {
            a = this.a;
            e = this.c.getDisplayState();
            switch (e) {
                case "pseudo":
                    c = !0;
                    d = new A("fullscreenchange");
                    break;
                case "absolute":
                    c = !0;
                    try {
                        a.cancelFullScreen()
                    } catch (g) {
                        U.warn("SwfAdaptor - cancelFullScreen:\n", g.stack ? g.stack : g)
                    }
            }
            if (c) {
                window.setTimeout(function() {
                    Id(b, "normal")
                }, 0);
                try {
                    a.setPseudoFullScreenState(!1), null !== d && H(this.c.target, d)
                } catch (h) {
                    U.warn("SwfAdaptor - setPseudoFullScreenState:\n", h.stack ? h.stack : h)
                }
            }
        }
        return c
    };
    f.getDisplayState = function() {
        return this.yb
    };
    f.Za = function(a) {
        var b = this;
        F(this, 1);
        of(this);
        Zc(this.c.target, a, function(a) {
            Ld(b, a)
        })
    };
    f.V = function() {
        return this.ib
    };
    f.J = function(a) {
        a !== this.getDuration() && (T.h.J.call(this, a), a = new A("durationchange"), H(this.c.target, a))
    };
    f.oa = function(a, b) {
        var c;
        c = this.k();
        var d, e = null;
        F(this, 1);
        Hd(this, b);
        var g, e = !1;
        g = Cd(this, this.g);
        null !== g ? e = 1 === g.bt : (g = Fd(this, this.i()), null !== g && (e = 1 === g.bt));
        if (e)
            if (null !== Bc()) H(this.c.target, new y("error", 1005, "The media player requires additional software to play the current media", !1)), e = Kc("drm_plugin"), this.xb && null !== e && null === this.Aa && Lc("drm_plugin") && rf.call(this);
            else if (null === this.d) null !== document.getElementById(this.c.target) && null === this.d && (c = this.c.target, d = null, this.d = d =
            void 0 !== window.chrome ? new ic(c) : new xc(c), this.d.addEventListener("drm_plugin_ready", sf), this.d.Ra());
        else {
            if (void 0 !== this.d.lb() && 0 < c.length) {
                if (this.e()) try {
                    d = this.a, d.close()
                } catch (h) {
                    U.error("failed to close the flash player")
                }
                c = Fd(this, this.i());
                this.d.open(c.media_url)
            }
        } else tf(this, a)
    };

    function uf(a) {
        var b = {},
            c = {},
            d = {},
            e;
        e = "";
        var g;
        b.quality = "high";
        b.allowScriptAccess = "always";
        b.allowFullScreen = "true";
        b.menu = "false";
        b.wmode = K(a, "wmode");
        c.id = a.c.target;
        c["data-force-reload"] = "0";
        c["data-swf-path"] = K(a, "swf");
        c.name = a.c.target;
        c.align = "middle";
        L(a, "events", fc(a.c.target).join(","));
        for (e in a.pa) g = K(a, e), null !== g && (d[e] = g);
        delete d.swf;
        delete d.wmode;
        delete d.width;
        delete d.height;
        d.mediaUrl = encodeURIComponent(d.mediaUrl);
        void 0 !== d.logger && (d.logger = encodeURIComponent(d.logger));
        d.guiConfig = escape(Ra.stringify(a.Qa));
        d.subtitleCode = a.B;
        e = Cd(a, a.g);
        null !== e && (d.seekDelay = e.seek_delay.toString());
        Cc.ec();
        qf(a);
        Cc.Nb(K(a, "swf"), a.c.target, a.gb, a.fb, q.plugin.flash.version, null, d, b, c, function(b) {
            vf.call(a, b)
        })
    }

    function tf(a, b) {
        var c, d = null,
            e, g = null,
            h, k, t = 0;
        L(a, "mediaUrl", b);
        L(a, "autoPlay", a.autoplay.toString());
        L(a, "poster", a.Ja);
        L(a, "audioTrackCode", a.N);
        if (a.m)
            if (a.e() && !wf(a) && a.a.getAttribute("data-swf-path") === K(a, "swf")) try {
                k = Cd(a, a.g);
                null !== k && (t = k.seek_delay);
                g = a.a.getElementsByTagName("param");
                for (c = 0; c < g.length; c++) d = g.item(c), "flashvars" === d.getAttribute("name") && (e = d.getAttribute("value").replace(/mediaUrl=([^&]*)/, "mediaUrl=" + encodeURIComponent(K(a, "mediaUrl"))), e = e.replace(/seekDelay=([^&]*)/,
                    "seekDelay=" + encodeURIComponent(t.toString())), d.setAttribute("value", e));
                h = a.a;
                h.load(K(a, "mediaUrl"), a.autoplay, t);
                F(a, 2);
                Ed(a)
            } catch (da) {
                U.warn("SwfAdaptor - load:\n", da.stack ? da.stack : da)
            } else a.addEventListener("MEDIA_PLAYER_READY", xf), uf(a);
            else a.autoplay = !0, a.n()
    }
    f.addEventListener = function(a, b) {
        var c = !1,
            d;
        T.h.addEventListener.call(this, a, b);
        d = this.a;
        if (2 === this.f && M(this) && void 0 !== d.avodAddEventListener) try {
            c = d.avodAddEventListener(a)
        } catch (e) {
            U.warn("SwfAdaptor - addEventListener:\n", e.stack ? e.stack : e)
        }
        return c
    };
    f.Z = function() {
        T.h.Z.call(this);
        this.lockControls(!0)
    };
    f.S = function() {
        this.lockControls(!1);
        2 === this.f && qf(this);
        T.h.S.call(this);
        1 === this.j && this.n()
    };
    f.lockControls = function(a) {
        var b;
        if (M(this)) try {
            b = this.a, b.lockControls(a)
        } catch (c) {
            U.warn("SwfAdaptor - lockControls:\n", c.stack ? c.stack : c)
        }
    };
    f.na = function() {
        T.h.na.call(this);
        this.a && this.a.setAttribute("data-force-reload", "1")
    };
    f.show = function() {
        T.h.show.call(this);
        M(this) && wf(this) && (this.n(), this.pause())
    };
    f.za = function() {
        T.h.za.call(this);
        yf(this);
        zf(this);
        qf(this);
        Af(this);
        null !== this.d && void 0 !== this.d.dispose && this.d.dispose();
        this.d = null
    };
    f.n = function(a) {
        var b;
        2 !== this.j && Hd(this, this.c.getCurrentTime());
        null === this.Ka && (b = this, void 0 === a && (a = 0), U.info("initiate recovery in [" + a + "] seconds"), this.Ka = window.setTimeout(function() {
            var a;
            Af(b);
            M(b) && (a = vd(b), null !== a && (b.u(2), U.info("initiate recovery"), b.load(a)))
        }, 1E3 * a))
    };
    f.setPlaylistLength = function() {
        var a;
        a = this.a;
        if (N(this, this.setPlaylistLength) && void 0 !== a.setPlaylistLength) try {
            a.setPlaylistLength(this.k().length)
        } catch (b) {
            U.warn("SwfAdaptor - setPlaylistLength:\n", b.stack ? b.stack : b)
        }
    };
    f.setPlaylistIndex = function() {
        var a;
        a = this.a;
        if (N(this, this.setPlaylistIndex) && void 0 !== a.setPlaylistIndex) try {
            a.setPlaylistIndex(this.la)
        } catch (b) {
            U.warn("SwfAdaptor - setPlaylistIndex:\n", b.stack ? b.stack : b)
        }
    };

    function wf(a) {
        var b = !1,
            c = Dd(a),
            d = document.body,
            e = document.documentElement,
            g = Math.max(d.scrollHeight, d.offsetHeight, e.clientHeight, e.scrollHeight, e.offsetHeight),
            d = Math.max(d.scrollWidth, d.offsetWidth, e.clientWidth, e.scrollWidth, e.offsetWidth);
        null !== c && 0 <= c[0] + c[2] && c[0] + c[2] <= d && 0 <= c[1] + c[3] && c[1] + c[3] <= g && (a.e() && "1" === a.a.getAttribute("data-force-reload") || null !== a.ma) && (b = !0);
        return b
    }
    f.Ya = function() {
        var a;
        null !== this.d && (this.d.removeEventListener("drm_plugin_ready", sf), this.d.removeEventListener("drm_proxy_available", Bf), this.d.removeEventListener("drm_plugin_personalized", Cf), this.d.removeEventListener("drm_personalization_failed", Df));
        a = this.a;
        if (null !== a) {
            if (void 0 !== a.dispose) try {
                a.dispose()
            } catch (b) {}
            Cc.bc(this.c.target)
        }
        this.a = null;
        null !== this.d && void 0 !== this.d.dispose && (this.d.dispose(), this.d = null)
    };
    f.subtitleSetCode = function(a) {
        var b, c = !1;
        if (this.e()) try {
            if (b = this.a, c = b.subtitleSetCode(a)) this.B = a
        } catch (d) {
            U.warn("SwfAdaptor - subtitleSetCode:\n", d.stack ? d.stack : d)
        }
        return c
    };
    f.subtitleGetCode = function() {
        var a, b = null;
        if (this.e()) try {
            a = this.a, b = a.subtitleGetCode()
        } catch (c) {
            U.warn("SwfAdaptor - subtitleGetCode:\n", c.stack ? c.stack : c)
        }
        return b
    };
    f.wa = function(a) {
        var b, c = !1;
        if (this.e()) try {
            if (b = this.a, c = b.setAudioTrackCode(a)) this.N = a
        } catch (d) {
            U.warn("SwfAdaptor - audioTrackSetByCode:\n", d.stack ? d.stack : d)
        }
        return c
    };
    f.X = function() {
        var a, b = null;
        if (this.e()) try {
            a = this.a, b = a.getAudioTrackCode()
        } catch (c) {
            U.warn("SwfAdaptor - audioTrackGetCode:\n", c.stack ? c.stack : c)
        }
        return b
    };
    f.ya = function() {
        return !0
    };
    f.addLogFilter = function(a, b) {
        var c;
        c = 0;
        var d = null,
            e;
        e = new aa(a, b);
        null === this.$ && (this.$ = []);
        for (c = 0; c < this.$.length; c++) {
            d = this.$[c];
            if (d.s === a) {
                this.$[c] = e;
                break
            }
            d = null
        }
        null == d && this.$.push(e);
        L(this, "logger", Ra.stringify(this.$));
        if (c = this.a) try {
            c.addLogFilter(a, b)
        } catch (g) {
            U.warn("unable to apply log filter to flash player: category [" + a + "], level [" + b + "]")
        }
    };
    f.ua = function(a) {
        var b = a.player.b,
            c, d = b.k();
        if (0 === b.H() || 2 === b.H() && b.i() == d.length - 1) {
            U.debug("close media");
            try {
                c = b.a, c.close()
            } catch (e) {
                U.error("failed to close the flash player when processing eneded event")
            }
        }
        T.h.ua.call(this, a)
    };
    f.Hb = function() {
        null !== this.d && void 0 !== this.d.close && this.d.close()
    };

    function cf(a) {
        var b = a.player.b;
        0 == b.k().length || 3 === b.f && M(b) ? (a = b.a, a.avodPause()) : b.m ? (window.InFlight.initService("sdk/v1/event", function(a) {
            a.register({
                event_name: "software_install",
                namespace: "avod",
                callback: function() {}
            })
        }, function() {}), H(a.player.target, new A("playing"))) : b.n()
    }

    function nf(a) {
        a = E(a.player.target);
        var b = a.b,
            c;
        M(b) && (null !== b.d && (c = b.d.getLastError(), null !== c && U.error("drm error, code [" + c.code + "], text [" + c.text + "], recomendationText [" + c.recommendationText + "], recomendationCode [" + c.recommendationCode + "]")), b.m && 3 !== b.f && (c = new Ha("warning", 2002, "Network Unavailable"), H(a.target, c), b.n(3)))
    }

    function rf() {
        var a = this;
        yf(this);
        null === Bc() ? a.c.qb() : a.Aa = window.setTimeout(function() {
            rf.call(a)
        }, 1E3)
    }
    f.e = function() {
        return T.h.e.call(this) && null === this.ma
    };

    function Ef(a) {
        zf(a);
        var b, c = null,
            d = 0;
        a.d.isPersonalized() || "" !== a.pb ? a.d.isPersonalized() && (a.d.addEventListener("drm_proxy_available", Bf), a.addEventListener("drm_key_needed", Ff), b = vd(a), c = a.I, null !== c && (d = c.O), xd(a, a.i(), a.g, d, b.autoplay)) : Qa.get({
            url: window.InFlight.makeServiceURL("/pers", !0),
            synchronous: !1,
            query: {
                uid: fd(),
                base64: 1
            }
        }, function(b, c) {
            var d = null;
            void 0 !== a.c && (null !== b || 200 !== c.code ? 404 === c.code || 444 === c.code ? (d = new y("error", 1008, "DRM Error"), U.warn("No keys available to personalize")) :
                a.Ua = window.setTimeout(function() {
                    Ef(a)
                }, 5E3) : (a.pb = c.body, a.$b = !1, a.d.addEventListener("drm_plugin_personalized", Cf), a.d.addEventListener("drm_personalization_failed", Df), a.d.setPersonalization(a.pb)), null !== d && H(a.c.target, d))
        })
    }

    function Pe(a) {
        a.player.b.setPlaylistLength()
    }

    function Qe(a) {
        a.player.b.setPlaylistIndex()
    }

    function Re(a) {
        a.player.b.R()
    }

    function Se(a) {
        a.player.b.da()
    }

    function vf(a) {
        var b = this;
        a.ia ? (this.ma = window.setTimeout(function() {
            Gf.call(b)
        }, 12E3), this.a = a.Xa) : U.warn("Error embedding swf file")
    }

    function hf(a) {
        var b = a.player.b;
        a.data && void 0 !== a.data.currentTime && (a = a.data.currentTime, a !== b.ib && (b.ib = a, a = new A("timeupdate"), H(b.c.target, a)))
    }

    function Ue(a) {
        var b = a.player.b;
        0 === b.j && a.data && void 0 !== a.data.duration && b.J(a.data.duration)
    }

    function We(a) {
        var b;
        b = a.player.b;
        null !== Cd(b, b.g + 1) ? xd(b, b.i(), b.g + 1, 0, !0) : (b = new A("ended"), H(a.player.target, b))
    }

    function Gf() {
        H(this.c.target, new xa("debug", 3001, "Player not responsive"));
        this.n()
    }

    function sf() {
        var a = E(this.id).b;
        a.d.removeEventListener("drm_plugin_ready", sf);
        Ef(a)
    }

    function Cf() {
        var a = E(this.id).b,
            b = vd(a),
            c = a.I;
        a.d.addEventListener("drm_proxy_available", Bf);
        a.addEventListener("drm_key_needed", Ff);
        xd(a, a.i(), a.g, c.O, b.autoplay)
    }

    function Df() {
        var a = new y("error", 1008, "DRM Error");
        U.warn("Error attempting to personalize");
        H(this.id, a)
    }

    function Bf() {
        var a = E(this.id).b,
            b = a.d.jb();
        null !== b ? tf(a, b) : a.n(3)
    }

    function Ff(a) {
        var b;
        b = a.player.b;
        b.e() && (a = b.d.kb(), null !== a ? (b = b.a, b.setKey(a)) : b.n(3))
    }

    function xf(a) {
        var b = a.player.b;
        qf(b);
        b.setPlaylistLength();
        b.setPlaylistIndex();
        b.setVolume(Fb());
        b.setVolume(Eb());
        3 === b.f && b.lockControls(!0);
        b.Ib ? F(b, 2) : (b.Ib = !0, H(a.player.target, new A("jsbridgecreated")))
    }

    function pf() {
        var a;
        of(this);
        this.e() && !M(this) && (a = new A("stop"), H(this.c.target, a))
    }

    function qf(a) {
        null !== a.ma && (window.clearTimeout(a.ma), a.ma = null)
    }

    function of(a) {
        null !== a.cb && (window.clearTimeout(a.cb), a.cb = null)
    }
    f.u = function(a) {
        T.h.u.call(this, a);
        0 === this.j && Af(this)
    };

    function Af(a) {
        null !== a.Ka && (window.clearTimeout(a.Ka), a.Ka = null)
    }

    function zf(a) {
        null !== a.Ua && (window.clearTimeout(a.Ua), a.Ua = null)
    }

    function yf(a) {
        null !== a.Aa && (window.clearTimeout(a.Aa), a.Aa = null)
    }

    function Ye(a) {
        var b;
        b = a.player.b;
        0 === b.j && 0 >= b.g && (b = new A("loadstart"), H(a.player.target, b))
    }

    function df(a) {
        H(a.player.target, new A("seeked"))
    }

    function ef(a) {
        H(a.player.target, new A("seeking"))
    }

    function ff(a) {
        H(a.player.target, new A("stop"))
    }

    function gf(a) {
        H(a.player.target, new A("suspend"))
    }

    function jf(a) {
        Db(a.player.b.getVolume());
        H(a.player.target, new A("volumechange"))
    }

    function mf(a) {
        H(a.player.target, new A("waiting"))
    }

    function Te(a) {
        H(a.player.target, new A("canplay"))
    }

    function Ve(a) {
        H(a.player.target, new A("emptied"))
    }

    function af(a) {
        H(a.player.target, new A("pause"))
    }

    function bf(a) {
        var b = a.player.b;
        H(a.player.target, new A("play"));
        b.m || b.n()
    }

    function Ze(a) {
        var b;
        0 >= a.player.b.g && (b = new A("loadeddata"), H(a.player.target, b))
    }

    function $e(a) {
        a = a.player.b;
        var b = a.I,
            c = 0;
        null !== b && (c = b.O);
        Ed(a);
        0 !== c && a.F(c);
        2 === a.j ? a.u(3) : Kd(a)
    }

    function Xe(a) {
        var b = a.player.b,
            c, d = T.h.getDisplayState.call(b);
        c = b.a;
        if ("normal" === d && b.e() && void 0 !== c.getDisplayState) try {
            d = c.getDisplayState()
        } catch (e) {
            U.warn("SwfAdaptor - getDisplayState:\n", e.stack ? e.stack : e), d = "normal"
        }
        U.debug("displayState [" + d + "]");
        c = d;
        b.yb = c;
        b = zb;
        "absolute" === c && null !== b && (b.cancelFullScreen(), Cb(a.player))
    }

    function lf(a) {
        var b = a.player.b,
            c = b.subtitleGetCode();
        b.B = c;
        H(a.player.target, new A("subtitlechange"))
    }

    function kf(a) {
        var b = a.player.b,
            c = b.X();
        b.N = c;
        H(a.player.target, new A("soundtrackchange"))
    }
    var U = new n("avod.player.adaptor.SwfAdaptor");

    function Hf(a, b) {
        hd.call(this, a, b)
    }
    m(Hf, hd);

    function If(a) {
        this.P = [];
        this.target = a.target.substring(1);
        var b = null;
        switch (Vc(this.type)) {
            case 5:
            case 6:
                b = new Pd(this, a);
                break;
            case 1:
            case 3:
                var c = this.type,
                    d = null,
                    e = null,
                    d = Pc(Uc().ba, c);
                null !== d && (e = d.Mb);
                switch (e) {
                    case 0:
                        b = new He(this, a);
                        break;
                    case 1:
                        b = new Ke(this, a)
                }
                break;
            case 2:
            case 4:
                b = new T(this, a);
                break;
            default:
                b = new Hf(this, a)
        }
        this.b = b;
        ub[this.target] = this;
        D.debug("player registered [" + this.target + "]")
    }

    function sd(a, b) {
        for (var c = 0, c = 0; c < a.P.length; c++)
            if (a.P[c] === b) return !0;
        return !1
    }

    function V(a) {
        var b = !1;
        void 0 === a.b || null === a.b ? Jf.warn("AVODPlayer is not available") : b = !0;
        return b
    }
    f = If.prototype;
    f.load = function(a) {
        Jf.debug("load call");
        V(this) && (a = this.Na(a), a.oc = 0, this.b.u(0), this.b.load(a))
    };
    f.Na = function(a) {
        a.autoplay = void 0 !== a.autoplay && "true" === String(a.autoplay) ? !0 : !1;
        a.poster_url = void 0 !== a.poster_url ? a.poster_url : null;
        a.current_item_index = void 0 === a.current_item_index || isNaN(a.current_item_index) ? 0 : a.current_item_index;
        a.bookmark = void 0 !== a.bookmark ? a.bookmark : null;
        a.force_partially_supported = void 0 !== a.force_partially_supported ? a.force_partially_supported : !1;
        void 0 === a.media_uri || "string" !== typeof a.media_uri && "number" !== typeof a.media_uri ? (a.media_uris = [], a.media_uri = "") : a.media_uris = [a.media_uri];
        Jf.debug("load arguments: media_uri [" + a.media_uri + "] autoplay [" + a.autoplay + "] poster_url [" + a.poster_url + "] force_partially_supported [" + a.force_partially_supported + "] soundtrack_code [" + a.soundtrack_code + "] bookmark [" + a.bookmark + "]");
        return a
    };
    f.za = function() {
        this.b.za();
        delete this.b;
        this.b = null
    };
    f.qb = function() {
        var a = vd(this.b);
        null !== a && this.load(a)
    };
    f.show = function() {
        V(this) && this.b.show()
    };
    f.na = function() {
        V(this) && this.b.na()
    };
    f.remove = function() {
        V(this) && this.b.remove()
    };
    f.play = function() {
        V(this) && this.b.play()
    };
    f.pause = function() {
        V(this) && this.b.pause()
    };
    f.stop = function() {
        V(this) && this.b.stop()
    };
    f.seek = function(a) {
        V(this) && this.b.seek(a)
    };
    f.ga = function(a) {
        var b = !1;
        V(this) && (b = this.b.ga(a));
        return b
    };
    f.cancelFullScreen = function() {
        var a = !1;
        V(this) && (a = this.b.cancelFullScreen());
        return a
    };
    f.getDisplayState = function() {
        var a = "normal";
        V(this) && (a = this.b.getDisplayState());
        return a
    };
    f.seekable = function() {
        var a = null;
        V(this) && (a = this.b.seekable());
        return a
    };
    f.buffered = function() {
        var a = null;
        V(this) && (a = this.b.buffered());
        return a
    };
    f.Sb = function() {
        return "absolute" === this.getDisplayState()
    };
    f.Wb = function() {
        return "pseudo" === this.getDisplayState()
    };
    f.Vb = function() {
        return "normal" === this.getDisplayState()
    };
    f.Ba = function() {
        return Vc(this.type)
    };
    f.Tb = function() {
        return 2 === this.Ba()
    };
    f.Ub = function() {
        return 1 === this.Ba()
    };
    f.isiOSSDK = function() {
        return 5 === this.Ba()
    };
    f.isAndroidSDK = function() {
        return 6 === this.Ba()
    };
    f.Xb = function() {
        return "tv" === this.type
    };
    f.Yb = function() {
        return "vod" === this.type
    };
    f.Cb = function() {
        return "aod" === this.type
    };
    f.paused = function() {
        var a = !0;
        V(this) && (a = this.b.paused());
        return a
    };
    f.seeking = function() {
        var a = !1;
        V(this) && (a = this.b.seeking());
        return a
    };
    f.getBookmark = function() {
        var a = null;
        V(this) && (a = this.b.getBookmark());
        return a
    };
    f.getCurrentTime = function() {
        var a = 0;
        V(this) && (a = this.b.getCurrentTime());
        return a
    };
    f.getDuration = function() {
        var a = 0;
        V(this) && (a = this.b.getDuration());
        return a
    };
    f.ka = function() {
        var a = !1;
        V(this) && (a = this.b.ka());
        return a
    };
    f.setVolume = function(a) {
        var b = !1;
        V(this) && (b = this.b.setVolume(a));
        return b
    };
    f.getVolume = function() {
        var a = 0;
        V(this) && (a = this.b.getVolume());
        return a
    };
    f.configureGUI = function(a) {
        var b = !1;
        V(this) && (b = this.b.configureGUI(a));
        return b
    };
    f.addEventListener = function(a, b) {
        V(this) && this.b.addEventListener(a, b)
    };
    f.removeEventListener = function(a, b) {
        V(this) && this.b.removeEventListener(a, b)
    };
    f.hb = function(a, b, c) {
        V(this) && this.b.hb(a, b, c)
    };
    f.cc = function(a) {
        this.load({
            media_uri: a,
            autoplay: void 0,
            poster_url: void 0,
            force_partially_supported: void 0
        });
        Jf.warn("AVODPlayer.setMediaURI is depreciated")
    };
    var Jf = new n("avod.player.AbstractPlayer"),
        W = If.prototype;
    W.addEventListener = W.addEventListener;
    W.addPlugin = W.hb;
    W.buffered = W.buffered;
    W.configureGUI = W.configureGUI;
    W.cancelFullScreen = W.cancelFullScreen;
    W.canSetVolume = W.ka;
    W.configureGUI = W.configureGUI;
    W.getBookmark = W.getBookmark;
    W.getCurrentTime = W.getCurrentTime;
    W.getDisplayState = W.getDisplayState;
    W.getDuration = W.getDuration;
    W.getPlatformType = W.Ba;
    W.getVolume = W.getVolume;
    W.hide = W.na;
    W.isAbsoluteFullScreen = W.Sb;
    W.isAOD = W.Cb;
    W.isAndroidSDK = W.isAndroidSDK;
    W.isFlash = W.Tb;
    W.isHtml = W.Ub;
    W.isiOSSDK = W.isiOSSDK;
    W.isNormalDisplay = W.Vb;
    W.isPseudoFullScreen = W.Wb;
    W.isTV = W.Xb;
    W.isVOD = W.Yb;
    W.load = W.load;
    W.pause = W.pause;
    W.paused = W.paused;
    W.play = W.play;
    W.reloadWithPartialSupport = W.qb;
    W.remove = W.remove;
    W.removeEventListener = W.removeEventListener;
    W.requestFullScreen = W.ga;
    W.seek = W.seek;
    W.seekable = W.seekable;
    W.seeking = W.seeking;
    W.setMediaURI = W.cc;
    W.setVolume = W.setVolume;
    W.show = W.show;
    W.stop = W.stop;

    function Kf(a) {
        If.call(this, a);
        this.P[this.P.length] = ta
    }
    m(Kf, If);
    f = Kf.prototype;
    f.Na = function(a) {
        var b = a.media_uris,
            c = Kf.h.Na.call(this, a);
        c.media_uris = void 0 !== b ? b : c.media_uris;
        Jf.debug("load arguments: media_uris [" + a.media_uris + "]");
        return c
    };
    f.k = function() {
        var a = [];
        V(this) && (a = this.b.k());
        return a
    };
    f.i = function() {
        var a = 0;
        V(this) && (a = this.b.i());
        return a
    };
    f.da = function() {
        V(this) && this.b.da()
    };
    f.R = function() {
        V(this) && this.b.R()
    };
    f.C = function(a) {
        return V(this) ? this.b.C(a) : !1
    };
    f.sa = function(a) {
        return V(this) ? this.b.sa(a) : !1
    };
    f.Ga = function(a) {
        return V(this) ? this.b.Ga(a) : !1
    };
    f.ra = function(a, b) {
        V(this) && this.b.ra(a, b)
    };
    f.ea = function(a) {
        var b = !1;
        V(this) && (b = this.b.ea(a));
        return b
    };
    f.ta = function(a) {
        var b = !1;
        V(this) && (b = this.b.ta(a));
        return b
    };
    f.Ia = function(a) {
        V(this) && this.b.Ia(a)
    };
    f.Ha = function(a) {
        V(this) && this.b.Ha(a)
    };
    f.Fa = function() {
        var a = !1;
        V(this) && (a = this.b.Fa());
        return a
    };
    f.H = function() {
        var a = 0;
        V(this) && (a = this.b.H());
        return a
    };
    var X = Kf.prototype;
    X.playlistAddItemByMediaURI = X.ra;
    X.playlistGetCurrentItemIndex = X.i;
    X.playlistGetInfo = X.k;
    X.playlistGetRepeatMode = X.H;
    X.playlistGetShuffle = X.Fa;
    X.playlistPlayItemByIndex = X.C;
    X.playlistPlayItemByMediaURI = X.Ga;
    X.playlistPlayItemByBookmark = X.sa;
    X.playlistPlayNext = X.R;
    X.playlistPlayPrevious = X.da;
    X.playlistRemoveItemByIndex = X.ea;
    X.playlistRemoveItemByMediaURI = X.ta;
    X.playlistSetRepeatMode = X.Ha;
    X.playlistSetShuffle = X.Ia;

    function Lf(a) {
        this.type = "aod";
        Kf.call(this, a)
    }
    m(Lf, Kf);

    function Y(a) {
        Kf.call(this, a);
        this.P[this.P.length] = ta;
        this.P[this.P.length] = na
    }
    m(Y, Kf);
    Y.prototype.Na = function(a) {
        var b = Y.h.Na.call(this, a);
        b.soundtrack_code = void 0 !== a.soundtrack_code ? a.soundtrack_code : null;
        b.subtitle_code = void 0 !== a.subtitle_code ? a.subtitle_code : null;
        Mf.debug("load arguments: soundtrack_code [" + a.soundtrack_code + "], subtitle_code [" + a.subtitle_code + "]");
        return b
    };
    Y.prototype.wa = function(a) {
        var b = !1;
        V(this) && (b = this.b.wa(a));
        return b
    };
    Y.prototype.setSoundtrack = Y.prototype.wa;
    Y.prototype.X = function() {
        var a = null;
        V(this) && (a = this.b.X());
        return a
    };
    Y.prototype.getSoundtrack = Y.prototype.X;
    Y.prototype.ya = function() {
        var a = !1;
        V(this) && (a = this.b.ya());
        return a
    };
    Y.prototype.canSetSoundtrack = Y.prototype.ya;
    Y.prototype.subtitleGetCode = function() {
        var a = null;
        V(this) && (a = this.b.subtitleGetCode());
        return a
    };
    Y.prototype.subtitleGetCode = Y.prototype.subtitleGetCode;
    Y.prototype.subtitleSetCode = function(a) {
        var b = !1;
        V(this) && (b = this.b.subtitleSetCode(a));
        return b
    };
    Y.prototype.subtitleSetCode = Y.prototype.subtitleSetCode;
    var Mf = new n("avod.player.AbstractPlaylistPlayer");

    function Nf(a) {
        this.type = "tv";
        If.call(this, a)
    }
    m(Nf, If);

    function Of(a) {
        this.type = "vod";
        Y.call(this, a)
    }
    m(Of, Y);
    var Z = [];
    Z.push("sdk/v1/http");
    Z.push("sdk/v1/json2");
    Z.push("sdk/v1/app_bridge");
    Z.push("sdk/v1/platformdetection");
    Z.push("ppv/v1");
    Z.push("sdk/v1/devicestorage");
    Z.push("sdk/v1/uuid");
    Z.push("sdk/v1/network");
    Z.push("avod/v1/software");
    Z.push("avod/v1/config");
    Z.push("avod/v1/null-on-error!avod/v1/flash_config");
    var Pf;
    void 0 !== window.chrome ? Z.push("avod/v1/chrome-extension!phkhmhjoaliekidocmibncjbepgflmdp/config") : Z.push("avod/v1/null");
    Z.push("exports");
    window.InFlight.define(Z, function(a, b, c, d, e, g, h, k, t, da, z, Rb, B) {
        Qa = a;
        Oa = c;
        C = d;
        Pa = g;
        Xa = h;
        q = t;
        Na = da;
        null !== Ra && (Ra = b);
        B.TVPlayer = Nf;
        B.VODPlayer = Of;
        B.AODPlayer = Lf;
        a = 0;
        b = "";
        c = {};
        d = null;
        g = [Fa(), {
            PROGRESS: "progress"
        }, {
            ERROR: "error",
            STALLED: "stalled",
            ABORT: "abort"
        }, {
            WARNING: "warning"
        }, {
            DEBUG: "debug"
        }];
        for (a = 0; a < g.length; a++)
            for (b in d = g[a], d) c[b] = d[b];
        B.Events = c;
        B.FullScreenType = ma;
        B.RepeatMode = qa;
        B.Playable = ia;
        B.SoftwareRequired = ja;
        B.Platform = ga;
        B.getEncryptionSupport = Wc;
        B.getRequiredSoftware = Xc;
        B.setSoftwareInstallMessage =
            Fc;
        B.getSoftwareUrl = Dc;
        B.PPV = e;
        void 0 === window.InFlight.AVOD && (window.InFlight.AVOD = {});
        window.InFlight.AVOD.dispatchEvent = H;
        e = 0;
        a = null;
        b = new aa("*", Na.LOG_LEVEL);
        null === ca && (ca = []);
        for (e = 0; e < ca.length; e++) {
            a = ca[e];
            if ("*" === a.s) {
                ca[e] = b;
                break
            }
            a = null
        }
        null == a && (ca.push(b), ca.sort(ea));
        Pf = new n("main");
        Pf.debug("begin export");
        D.debug("add page visibility handler");
        e = nb();
        null === e.r && (e.r = []);
        e.r.push(Nb);
        e = {
            event: ""
        };
        Oa.getBridgeType() !== Oa.BridgeTypes.NONE && (e.event = "inflight.app.pa_state", a = Oa.callMethod("ifapi.hasEventSupport",
            e), "true" === a && (Ab = !1), e.event = "inflight.app.network_connection", a = Oa.callMethod("ifapi.hasEventSupport", e), "true" === a && (Bb = !1));
        D.debug("listen for network connection [" + Bb + "]");
        D.debug("listen for PA event [" + Ab + "]");
        window.InFlight.initService(["system/v1", "flightdata/v1", "sdk/v1/event"], Yb, Ib);
        Bb && window.InFlight.initService("sdk/v1/network", Wb, Xb);
        e = Uc().ba;
        if (null !== z) {
            J.debug("flash config is available");
            try {
                var l = z.config;
                z = null;
                a = !1;
                var r;
                try {
                    for (r = 0; r < l.length; r++) {
                        b = z = l[r];
                        c = !1;
                        h = g = d = !0;
                        t = k = "";
                        if (void 0 !== b.os_platform) {
                            switch (b.os_platform) {
                                case "win":
                                    (d = d && C.isWindows()) && (k = C.getWindowsVersion().toString());
                                    break;
                                case "mac":
                                    (d = d && C.isOSX()) && (k = C.getOSXVersion().toString());
                                    break;
                                default:
                                    d = !1
                            }
                            d && (void 0 !== b.os_min_version && (d = gc(k, b.os_min_version)), void 0 !== b.os_max_version && (d = gc(b.os_max_version, k)));
                            c = d
                        }
                        if (void 0 !== b.browser_name) {
                            switch (b.browser_name) {
                                case "chrome":
                                    g = C.isChrome();
                                    break;
                                case "ie":
                                    g = C.isIE();
                                    break;
                                case "firefox":
                                    g = C.isFirefox();
                                    break;
                                case "safari":
                                    g = C.isSafari();
                                    break;
                                case "opera":
                                    g = C.isOpera();
                                    break;
                                default:
                                    g = !1
                            }
                            g && (t = C.getBrowserVersion().toString(), void 0 !== b.browser_min_version && (g = gc(b.browser_min_version, t)), void 0 !== b.browser_max_version && (g = gc(t, b.browser_max_version)));
                            c = c && g
                        }
                        if (void 0 !== b.plugin_interface) {
                            switch (b.plugin_interface) {
                                case "activex":
                                    h = h && void 0 !== window.ActiveXObject;
                                    break;
                                case "npapi":
                                    h = h && void 0 === window.ActiveXObject;
                                    break;
                                default:
                                    h = !1
                            }
                            c = c && h
                        }
                        if (c) {
                            J.debug("flash config environment detected", z);
                            a = !0;
                            void 0 !== z.plugin_min_version &&
                                (J.debug("flash version [" + z.plugin_min_version + "] is required"), q.plugin.flash.version = z.plugin_min_version);
                            break
                        }
                    }
                    a || (J.debug("flash config environment is not found, flash cannot be installed"), q.plugin.flash.mac = null, q.plugin.flash.windows.activex = null, q.plugin.flash.windows.npapi = null)
                } catch (pb) {
                    J.error("unable to parse flash install config")
                }
            } catch (Tb) {
                J.error("flash install configuration error:\n\t" + Tb.toString())
            }
            J.debug("flash config setup complete")
        }
        l = null;
        J.debug("detect platform support");
        C.isiOS() && (J.debug("iOS Device, enable html"), I(e, "aod", 1, 0), I(e, "vod", 1, 1), I(e, "tv", 1, 1));
        l = q.plugin.flash.version;
        r = Cc.Pb();
        z = !1;
        null !== l && Nc.debug("Flash version [" + l + "] required");
        Nc.debug("Flash version [" + r.Fb + "." + r.Gb + "." + r.ac + "] installed");
        if (0 < r.Fb && 0 <= r.Gb)
            if (void 0 === l || null === l) z = !0;
            else try {
                z = Cc.Qb(l)
            } catch (ba) {
                z = !1
            }
            z && (J.debug("Flash requirement met, enable flash"), l = 2, I(e, "aod", 2, l), I(e, "vod", 2, l), I(e, "tv", 2, l));
        if (C.isiOSSDK()) J.debug("iOS SDK detected"), l = 1, I(e, "aod", 5, l), I(e, "vod",
            5, l), I(e, "tv", 5, l);
        else {
            r = q.mobile.android.shellApp.sdkVersion;
            l = q.mobile.android.shellApp.appVersion;
            z = !1;
            null !== r && Nc.debug("Android SDK version [" + r + "] required");
            if (C.isAndroidSDK())
                if (void 0 === r || null === r) z = !0;
                else if (z = C.getAndroidSDKVersion(), Nc.debug("Android SDK version [" + z + "] installed"), z = gc(z, r)) Nc.debug("Android App version [" + l + "] required"), void 0 !== l && null !== l && (r = null, z = /s*ShellApp\/(.*)s*/i.exec(navigator.userAgent), null !== z && (r = z[1]), Nc.debug("Android App version [" + r + "] installed"),
                z = 0 <= hc((null !== r ? r : "").toLowerCase(), (null !== l ? l : "").toLowerCase()));
            z ? (J.debug("Android SDK detected, Shell App requirements met"), l = 1, I(e, "aod", 6, l), I(e, "vod", 6, l), I(e, "tv", 6, l)) : C.isAndroid() ? (J.debug("Android OS detected"), Na.ANDROID_HTML_ENABLED ? (J.debug("Android Html Support Enabled"), I(e, "aod", 1, 0), I(e, "vod", 1, 1), I(e, "tv", 1, 1)) : (J.debug("Android Html Support Disabled"), I(e, "aod", 0), I(e, "vod", 0), I(e, "tv", 0))) : C.isBlackBerry() ? Qc(e) : C.isWindows() && 0 <= window.navigator.userAgent.toLowerCase().indexOf("touch") &&
                -1 === window.navigator.userAgent.toLowerCase().indexOf("tablet pc") ? Qc(e) : C.isiOS() && 5 > C.getiOSVersion() && (J.debug("iOS version < 5, disable support"), I(e, "aod", 0), I(e, "vod", 0), I(e, "tv", 0))
        }
        r = Pc(e, "vod");
        if (null !== r) switch (r.qa) {
            case 2:
                l = new v("playable.yes");
                w(e.l, "aes_hls", l);
                null === Bc() ? (J.debug("Flash Player supports AES_HLS_MARLIN"), l = new v("playable.yes"), w(e.l, "aes_hls_marlin", l)) : (J.debug("Panasonic Drm Plugin is not installed"), Rc("drm_plugin") && (J.debug("Flash Player requires DRM_PLUGIN for AES_HLS_MARLIN support"),
                    l = new v("playable.requires_software", "drm_plugin"), w(e.l, "aes_hls_marlin", l)));
                break;
            case 4:
                l = new v("playable.yes");
                w(e.l, "aes_hls", l);
                l = new v("playable.no");
                w(e.l, "aes_hls_marlin", l);
                break;
            case 1:
            case 3:
                l = new v("playable.yes");
                w(e.l, "aes_hls", l);
                Rc("ios_application") ? (J.debug("IOS_APPLICATION is required for AES_HLS_MARLIN support"), l = new v("playable.requires_software", "ios_application")) : Rc("flash_plugin") ? (J.debug("FLASH_PLUGIN is required for AES_HLS_MARLIN support"), l = new v("playable.requires_software",
                    "flash_plugin")) : Rc("android_application") ? (J.debug("ANDROID_APPLICATION is required for AES_HLS_MARLIN support"), l = new v("playable.requires_software", "android_application")) : l = new v("playable.no");
                w(e.l, "aes_hls_marlin", l);
                break;
            case 5:
                l = new v("playable.yes");
                w(e.l, "aes_hls", l);
                w(e.l, "aes_hls_marlin", l);
                break;
            case 6:
                l = new v("playable.yes"), w(e.l, "aes_hls", l), w(e.l, "aes_hls_marlin", l)
        }
        if (null === r || 0 === r.qa) l = Rc("flash_plugin") ? new v("playable.requires_software", "flash_plugin") : Rc("android_application") ?
            new v("playable.requires_software", "android_application") : new v("playable.no"), w(e.l, "aes_hls", l), w(e.l, "aes_hls_marlin", l);
        l = la(e.l, "unencrypted_hls");
        J.debug("encryption type: [unencrypted_hls], playable: [" + l.ca + "], required software: [" + l.K + "]");
        l = la(e.l, "aes_hls");
        J.debug("encryption type: [aes_hls], playable: [" + l.ca + "], required software: [" + l.K + "]");
        l = la(e.l, "aes_hls_marlin");
        J.debug("encryption type: [aes_hls_marlin], playable: [" + l.ca + "], required software: [" + l.K + "]");
        Yc.debug("export PlatformSupport");
        B.support = B.support || {};
        B.support.platform = B.support.platform || {};
        B.support.platform.aod = Vc("aod");
        B.support.platform.vod = Vc("vod");
        B.support.platform.tv = Vc("tv")
    });
})()
