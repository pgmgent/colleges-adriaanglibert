(() => {
  // node_modules/@lottiefiles/dotlottie-web/dist/index.js
  var Ni = Object.defineProperty;
  var qi = (g, a, s) => a in g ? Ni(g, a, { enumerable: true, configurable: true, writable: true, value: s }) : g[a] = s;
  var F = (g, a, s) => (qi(g, typeof a != "symbol" ? a + "" : a, s), s);
  var Qe = class {
    requestAnimationFrame(a) {
      return requestAnimationFrame(a);
    }
    cancelAnimationFrame(a) {
      cancelAnimationFrame(a);
    }
  };
  var et = class {
    constructor() {
      F(this, "_lastHandleId", 0);
      F(this, "_lastImmediate", null);
    }
    requestAnimationFrame(a) {
      return this._lastHandleId >= Number.MAX_SAFE_INTEGER && (this._lastHandleId = 0), this._lastHandleId += 1, this._lastImmediate = setImmediate(() => {
        a(Date.now());
      }), this._lastHandleId;
    }
    cancelAnimationFrame(a) {
      this._lastImmediate && clearImmediate(this._lastImmediate);
    }
  };
  var ke = class {
    constructor() {
      F(this, "_strategy");
      this._strategy = typeof requestAnimationFrame == "function" ? new Qe() : new et();
    }
    requestAnimationFrame(a) {
      return this._strategy.requestAnimationFrame(a);
    }
    cancelAnimationFrame(a) {
      this._strategy.cancelAnimationFrame(a);
    }
  };
  var tt = typeof window < "u" && typeof window.document < "u";
  var _e = { name: "@lottiefiles/dotlottie-web", version: "0.21.1", type: "module", description: "Lottie and DotLottie player for the web", repository: { type: "git", url: "git+https://github.com/LottieFiles/dotlottie-web.git", directory: "packages/web" }, homepage: "https://github.com/LottieFiles/dotlottie-web#readme", bugs: "https://github.com/LottieFiles/dotlottie-web/issues", author: "LottieFiles", contributors: ["Abdelrahman Ashraf <a.theashraf@gmail.com>"], license: "MIT", main: "dist/index.cjs", module: "dist/index.js", types: "dist/index.d.ts", files: ["dist"], keywords: ["dotlottie", "lottie", "player", "animation", "web", "canvas", "javascript", "thorvg"], scripts: { build: "tsup", dev: "tsup --watch", lint: "eslint --fix .", "stats:eslint": "cross-env TIMING=1 eslint .", "stats:ts": "tsc -p tsconfig.build.json --extendedDiagnostics", test: "vitest run --browser.headless", "test:coverage": "vitest run --browser.headless --coverage", "test:watch": "vitest", "type-check": "tsc --noEmit" }, devDependencies: { "@types/node": "^20.10.5", "@vitest/browser": "^1.2.2 ", "@vitest/coverage-istanbul": "^1.2.2", "cross-env": "7.0.3", tsup: "8.0.1", typescript: "5.0.4", vitest: "^1.2.2", webdriverio: "^8.32.0" }, publishConfig: { access: "public" } };
  var Xi = (() => {
    var g = typeof document < "u" ? document.currentScript?.src : void 0;
    return function(a = {}) {
      var s = a, _, L, ie = new Promise((e, t) => {
        _ = e, L = t;
      }), me = Object.assign({}, s), ot = "./this.program", st = true, U = "";
      function er(e) {
        return s.locateFile ? s.locateFile(e, U) : U + e;
      }
      typeof document < "u" && document.currentScript && (U = document.currentScript.src), g && (U = g), U.startsWith("blob:") ? U = "" : U = U.substr(0, U.replace(/[?#].*/, "").lastIndexOf("/") + 1), (e, t, r) => {
        var n = new XMLHttpRequest();
        n.open("GET", e, true), n.responseType = "arraybuffer", n.onload = () => {
          if (n.status == 200 || n.status == 0 && n.response) {
            t(n.response);
            return;
          }
          r();
        }, n.onerror = r, n.send(null);
      };
      var nr = s.print || console.log.bind(console), Z = s.printErr || console.error.bind(console);
      Object.assign(s, me), me = null, s.arguments && s.arguments, s.thisProgram && (ot = s.thisProgram), s.quit && s.quit;
      var ae;
      s.wasmBinary && (ae = s.wasmBinary);
      var ge, lt = false, O, P, Q, oe, A, w, ut, dt;
      function ct() {
        var e = ge.buffer;
        s.HEAP8 = O = new Int8Array(e), s.HEAP16 = Q = new Int16Array(e), s.HEAPU8 = P = new Uint8Array(e), s.HEAPU16 = oe = new Uint16Array(e), s.HEAP32 = A = new Int32Array(e), s.HEAPU32 = w = new Uint32Array(e), s.HEAPF32 = ut = new Float32Array(e), s.HEAPF64 = dt = new Float64Array(e);
      }
      var ft = [], vt = [], pt = [];
      function or() {
        if (s.preRun)
          for (typeof s.preRun == "function" && (s.preRun = [s.preRun]); s.preRun.length; )
            ur(s.preRun.shift());
        De(ft);
      }
      function sr() {
        De(vt);
      }
      function lr() {
        if (s.postRun)
          for (typeof s.postRun == "function" && (s.postRun = [s.postRun]); s.postRun.length; )
            cr(s.postRun.shift());
        De(pt);
      }
      function ur(e) {
        ft.unshift(e);
      }
      function dr(e) {
        vt.unshift(e);
      }
      function cr(e) {
        pt.unshift(e);
      }
      var q = 0, se = null;
      function fr(e) {
        q++, s.monitorRunDependencies?.(q);
      }
      function vr(e) {
        if (q--, s.monitorRunDependencies?.(q), q == 0 && se) {
          var t = se;
          se = null, t();
        }
      }
      function be(e) {
        s.onAbort?.(e), e = "Aborted(" + e + ")", Z(e), lt = true, e += ". Build with -sASSERTIONS for more info.";
        var t = new WebAssembly.RuntimeError(e);
        throw L(t), t;
      }
      var pr = "data:application/octet-stream;base64,", ht = (e) => e.startsWith(pr), ee;
      ee = "DotLottiePlayer.wasm", ht(ee) || (ee = er(ee));
      function _t(e) {
        if (e == ee && ae)
          return new Uint8Array(ae);
        throw "both async and sync fetching of the wasm failed";
      }
      function hr(e) {
        return !ae && st && typeof fetch == "function" ? fetch(e, { credentials: "same-origin" }).then((t) => {
          if (!t.ok)
            throw `failed to load wasm binary file at '${e}'`;
          return t.arrayBuffer();
        }).catch(() => _t(e)) : Promise.resolve().then(() => _t(e));
      }
      function mt(e, t, r) {
        return hr(e).then((n) => WebAssembly.instantiate(n, t)).then(r, (n) => {
          Z(`failed to asynchronously prepare wasm: ${n}`), be(n);
        });
      }
      function _r(e, t, r, n) {
        return !e && typeof WebAssembly.instantiateStreaming == "function" && !ht(t) && typeof fetch == "function" ? fetch(t, { credentials: "same-origin" }).then((i) => {
          var o = WebAssembly.instantiateStreaming(i, r);
          return o.then(n, function(u) {
            return Z(`wasm streaming compile failed: ${u}`), Z("falling back to ArrayBuffer instantiation"), mt(t, r, n);
          });
        }) : mt(t, r, n);
      }
      function mr() {
        var e = { a: hi };
        function t(n, i) {
          return b = n.exports, ge = b.la, ct(), kt = b.pa, dr(b.ma), vr(), b;
        }
        fr();
        function r(n) {
          t(n.instance);
        }
        if (s.instantiateWasm)
          try {
            return s.instantiateWasm(e, t);
          } catch (n) {
            Z(`Module.instantiateWasm callback failed with error: ${n}`), L(n);
          }
        return _r(ae, ee, e, r).catch(L), {};
      }
      var De = (e) => {
        for (; e.length > 0; )
          e.shift()(s);
      };
      s.noExitRuntime || true;
      var D = (e) => zt(e), I = () => Vt(), yt = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0, gt = (e, t, r) => {
        for (var n = t + r, i = t; e[i] && !(i >= n); )
          ++i;
        if (i - t > 16 && e.buffer && yt)
          return yt.decode(e.subarray(t, i));
        for (var o = ""; t < i; ) {
          var u = e[t++];
          if (!(u & 128)) {
            o += String.fromCharCode(u);
            continue;
          }
          var l = e[t++] & 63;
          if ((u & 224) == 192) {
            o += String.fromCharCode((u & 31) << 6 | l);
            continue;
          }
          var d = e[t++] & 63;
          if ((u & 240) == 224 ? u = (u & 15) << 12 | l << 6 | d : u = (u & 7) << 18 | l << 12 | d << 6 | e[t++] & 63, u < 65536)
            o += String.fromCharCode(u);
          else {
            var f = u - 65536;
            o += String.fromCharCode(55296 | f >> 10, 56320 | f & 1023);
          }
        }
        return o;
      }, G = (e, t) => e ? gt(P, e, t) : "", yr = (e, t, r, n) => {
        be(`Assertion failed: ${G(e)}, at: ` + [t ? G(t) : "unknown filename", r, n ? G(n) : "unknown function"]);
      }, te = 0;
      class bt {
        constructor(t) {
          this.excPtr = t, this.ptr = t - 24;
        }
        set_type(t) {
          w[this.ptr + 4 >> 2] = t;
        }
        get_type() {
          return w[this.ptr + 4 >> 2];
        }
        set_destructor(t) {
          w[this.ptr + 8 >> 2] = t;
        }
        get_destructor() {
          return w[this.ptr + 8 >> 2];
        }
        set_caught(t) {
          t = t ? 1 : 0, O[this.ptr + 12] = t;
        }
        get_caught() {
          return O[this.ptr + 12] != 0;
        }
        set_rethrown(t) {
          t = t ? 1 : 0, O[this.ptr + 13] = t;
        }
        get_rethrown() {
          return O[this.ptr + 13] != 0;
        }
        init(t, r) {
          this.set_adjusted_ptr(0), this.set_type(t), this.set_destructor(r);
        }
        set_adjusted_ptr(t) {
          w[this.ptr + 16 >> 2] = t;
        }
        get_adjusted_ptr() {
          return w[this.ptr + 16 >> 2];
        }
        get_exception_ptr() {
          var t = Nt(this.get_type());
          if (t)
            return w[this.excPtr >> 2];
          var r = this.get_adjusted_ptr();
          return r !== 0 ? r : this.excPtr;
        }
      }
      var gr = (e) => {
        throw te || (te = e), te;
      }, Ce = (e) => Bt(e), br = (e) => {
        var t = te;
        if (!t)
          return Ce(0), 0;
        var r = new bt(t);
        r.set_adjusted_ptr(t);
        var n = r.get_type();
        if (!n)
          return Ce(0), t;
        for (var i in e) {
          var o = e[i];
          if (o === 0 || o === n)
            break;
          var u = r.ptr + 16;
          if (Yt(o, n, u))
            return Ce(o), t;
        }
        return Ce(n), t;
      }, Cr = () => br([]), Tr = (e, t, r) => {
        var n = new bt(e);
        throw n.init(t, r), te = e, te;
      };
      function Er(e, t, r) {
        return 0;
      }
      var Fr = (e, t) => {
      }, Ct = (e) => {
        for (var t = 0, r = 0; r < e.length; ++r) {
          var n = e.charCodeAt(r);
          n <= 127 ? t++ : n <= 2047 ? t += 2 : n >= 55296 && n <= 57343 ? (t += 4, ++r) : t += 3;
        }
        return t;
      }, wt = (e, t, r, n) => {
        if (!(n > 0))
          return 0;
        for (var i = r, o = r + n - 1, u = 0; u < e.length; ++u) {
          var l = e.charCodeAt(u);
          if (l >= 55296 && l <= 57343) {
            var d = e.charCodeAt(++u);
            l = 65536 + ((l & 1023) << 10) | d & 1023;
          }
          if (l <= 127) {
            if (r >= o)
              break;
            t[r++] = l;
          } else if (l <= 2047) {
            if (r + 1 >= o)
              break;
            t[r++] = 192 | l >> 6, t[r++] = 128 | l & 63;
          } else if (l <= 65535) {
            if (r + 2 >= o)
              break;
            t[r++] = 224 | l >> 12, t[r++] = 128 | l >> 6 & 63, t[r++] = 128 | l & 63;
          } else {
            if (r + 3 >= o)
              break;
            t[r++] = 240 | l >> 18, t[r++] = 128 | l >> 12 & 63, t[r++] = 128 | l >> 6 & 63, t[r++] = 128 | l & 63;
          }
        }
        return t[r] = 0, r - i;
      }, $r = (e, t, r) => wt(e, P, t, r), Pr = (e, t) => {
      };
      function Mr(e, t, r) {
        return 0;
      }
      var Lr = (e, t, r, n) => {
      };
      function Ar(e, t, r, n) {
      }
      var kr = (e, t) => {
      }, we = {}, je = (e) => {
        for (; e.length; ) {
          var t = e.pop(), r = e.pop();
          r(t);
        }
      };
      function le(e) {
        return this.fromWireType(w[e >> 2]);
      }
      var re = {}, X = {}, Te = {}, Tt, Ee = (e) => {
        throw new Tt(e);
      }, N = (e, t, r) => {
        e.forEach(function(l) {
          Te[l] = t;
        });
        function n(l) {
          var d = r(l);
          d.length !== e.length && Ee("Mismatched type converter count");
          for (var f = 0; f < e.length; ++f)
            H(e[f], d[f]);
        }
        var i = new Array(t.length), o = [], u = 0;
        t.forEach((l, d) => {
          X.hasOwnProperty(l) ? i[d] = X[l] : (o.push(l), re.hasOwnProperty(l) || (re[l] = []), re[l].push(() => {
            i[d] = X[l], ++u, u === o.length && n(i);
          }));
        }), o.length === 0 && n(i);
      }, Rr = (e) => {
        var t = we[e];
        delete we[e];
        var r = t.rawConstructor, n = t.rawDestructor, i = t.fields, o = i.map((u) => u.getterReturnType).concat(i.map((u) => u.setterArgumentType));
        N([e], o, (u) => {
          var l = {};
          return i.forEach((d, f) => {
            var v = d.fieldName, m = u[f], h = d.getter, C = d.getterContext, E = u[f + i.length], W = d.setter, S = d.setterContext;
            l[v] = { read: ($) => m.fromWireType(h(C, $)), write: ($, c) => {
              var p = [];
              W(S, $, E.toWireType(p, c)), je(p);
            } };
          }), [{ name: t.name, fromWireType: (d) => {
            var f = {};
            for (var v in l)
              f[v] = l[v].read(d);
            return n(d), f;
          }, toWireType: (d, f) => {
            for (var v in l)
              if (!(v in f))
                throw new TypeError(`Missing field: "${v}"`);
            var m = r();
            for (v in l)
              l[v].write(m, f[v]);
            return d !== null && d.push(n, m), m;
          }, argPackAdvance: B, readValueFromPointer: le, destructorFunction: n }];
        });
      }, Sr = (e, t, r, n, i) => {
      }, xr = () => {
        for (var e = new Array(256), t = 0; t < 256; ++t)
          e[t] = String.fromCharCode(t);
        Et = e;
      }, Et, M = (e) => {
        for (var t = "", r = e; P[r]; )
          t += Et[P[r++]];
        return t;
      }, ne, y = (e) => {
        throw new ne(e);
      };
      function Dr(e, t, r = {}) {
        var n = t.name;
        if (e || y(`type "${n}" must have a positive integer typeid pointer`), X.hasOwnProperty(e)) {
          if (r.ignoreDuplicateRegistrations)
            return;
          y(`Cannot register type '${n}' twice`);
        }
        if (X[e] = t, delete Te[e], re.hasOwnProperty(e)) {
          var i = re[e];
          delete re[e], i.forEach((o) => o());
        }
      }
      function H(e, t, r = {}) {
        if (!("argPackAdvance" in t))
          throw new TypeError("registerType registeredInstance requires argPackAdvance");
        return Dr(e, t, r);
      }
      var B = 8, Ir = (e, t, r, n) => {
        t = M(t), H(e, { name: t, fromWireType: function(i) {
          return !!i;
        }, toWireType: function(i, o) {
          return o ? r : n;
        }, argPackAdvance: B, readValueFromPointer: function(i) {
          return this.fromWireType(P[i]);
        }, destructorFunction: null });
      }, jr = (e) => ({ count: e.count, deleteScheduled: e.deleteScheduled, preservePointerOnDelete: e.preservePointerOnDelete, ptr: e.ptr, ptrType: e.ptrType, smartPtr: e.smartPtr, smartPtrType: e.smartPtrType }), We = (e) => {
        function t(r) {
          return r.$$.ptrType.registeredClass.name;
        }
        y(t(e) + " instance already deleted");
      }, Oe = false, Ft = (e) => {
      }, Wr = (e) => {
        e.smartPtr ? e.smartPtrType.rawDestructor(e.smartPtr) : e.ptrType.registeredClass.rawDestructor(e.ptr);
      }, $t = (e) => {
        e.count.value -= 1;
        var t = e.count.value === 0;
        t && Wr(e);
      }, Pt = (e, t, r) => {
        if (t === r)
          return e;
        if (r.baseClass === void 0)
          return null;
        var n = Pt(e, t, r.baseClass);
        return n === null ? null : r.downcast(n);
      }, Mt = {}, Or = () => Object.keys(ce).length, Ur = () => {
        var e = [];
        for (var t in ce)
          ce.hasOwnProperty(t) && e.push(ce[t]);
        return e;
      }, ue = [], Ue = () => {
        for (; ue.length; ) {
          var e = ue.pop();
          e.$$.deleteScheduled = false, e.delete();
        }
      }, de, Hr = (e) => {
        de = e, ue.length && de && de(Ue);
      }, Br = () => {
        s.getInheritedInstanceCount = Or, s.getLiveInheritedInstances = Ur, s.flushPendingDeletes = Ue, s.setDelayFunction = Hr;
      }, ce = {}, zr = (e, t) => {
        for (t === void 0 && y("ptr should not be undefined"); e.baseClass; )
          t = e.upcast(t), e = e.baseClass;
        return t;
      }, Vr = (e, t) => (t = zr(e, t), ce[t]), Fe = (e, t) => {
        (!t.ptrType || !t.ptr) && Ee("makeClassHandle requires ptr and ptrType");
        var r = !!t.smartPtrType, n = !!t.smartPtr;
        return r !== n && Ee("Both smartPtrType and smartPtr must be specified"), t.count = { value: 1 }, fe(Object.create(e, { $$: { value: t, writable: true } }));
      };
      function Yr(e) {
        var t = this.getPointee(e);
        if (!t)
          return this.destructor(e), null;
        var r = Vr(this.registeredClass, t);
        if (r !== void 0) {
          if (r.$$.count.value === 0)
            return r.$$.ptr = t, r.$$.smartPtr = e, r.clone();
          var n = r.clone();
          return this.destructor(e), n;
        }
        function i() {
          return this.isSmartPointer ? Fe(this.registeredClass.instancePrototype, { ptrType: this.pointeeType, ptr: t, smartPtrType: this, smartPtr: e }) : Fe(this.registeredClass.instancePrototype, { ptrType: this, ptr: e });
        }
        var o = this.registeredClass.getActualType(t), u = Mt[o];
        if (!u)
          return i.call(this);
        var l;
        this.isConst ? l = u.constPointerType : l = u.pointerType;
        var d = Pt(t, this.registeredClass, l.registeredClass);
        return d === null ? i.call(this) : this.isSmartPointer ? Fe(l.registeredClass.instancePrototype, { ptrType: l, ptr: d, smartPtrType: this, smartPtr: e }) : Fe(l.registeredClass.instancePrototype, { ptrType: l, ptr: d });
      }
      var fe = (e) => typeof FinalizationRegistry > "u" ? (fe = (t) => t, e) : (Oe = new FinalizationRegistry((t) => {
        $t(t.$$);
      }), fe = (t) => {
        var r = t.$$, n = !!r.smartPtr;
        if (n) {
          var i = { $$: r };
          Oe.register(t, i, t);
        }
        return t;
      }, Ft = (t) => Oe.unregister(t), fe(e)), Nr = () => {
        Object.assign($e.prototype, { isAliasOf(e) {
          if (!(this instanceof $e) || !(e instanceof $e))
            return false;
          var t = this.$$.ptrType.registeredClass, r = this.$$.ptr;
          e.$$ = e.$$;
          for (var n = e.$$.ptrType.registeredClass, i = e.$$.ptr; t.baseClass; )
            r = t.upcast(r), t = t.baseClass;
          for (; n.baseClass; )
            i = n.upcast(i), n = n.baseClass;
          return t === n && r === i;
        }, clone() {
          if (this.$$.ptr || We(this), this.$$.preservePointerOnDelete)
            return this.$$.count.value += 1, this;
          var e = fe(Object.create(Object.getPrototypeOf(this), { $$: { value: jr(this.$$) } }));
          return e.$$.count.value += 1, e.$$.deleteScheduled = false, e;
        }, delete() {
          this.$$.ptr || We(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && y("Object already scheduled for deletion"), Ft(this), $t(this.$$), this.$$.preservePointerOnDelete || (this.$$.smartPtr = void 0, this.$$.ptr = void 0);
        }, isDeleted() {
          return !this.$$.ptr;
        }, deleteLater() {
          return this.$$.ptr || We(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && y("Object already scheduled for deletion"), ue.push(this), ue.length === 1 && de && de(Ue), this.$$.deleteScheduled = true, this;
        } });
      };
      function $e() {
      }
      var ve = (e, t) => Object.defineProperty(t, "name", { value: e }), Lt = (e, t, r) => {
        if (e[t].overloadTable === void 0) {
          var n = e[t];
          e[t] = function(...i) {
            return e[t].overloadTable.hasOwnProperty(i.length) || y(`Function '${r}' called with an invalid number of arguments (${i.length}) - expects one of (${e[t].overloadTable})!`), e[t].overloadTable[i.length].apply(this, i);
          }, e[t].overloadTable = [], e[t].overloadTable[n.argCount] = n;
        }
      }, He = (e, t, r) => {
        s.hasOwnProperty(e) ? ((r === void 0 || s[e].overloadTable !== void 0 && s[e].overloadTable[r] !== void 0) && y(`Cannot register public name '${e}' twice`), Lt(s, e, e), s.hasOwnProperty(r) && y(`Cannot register multiple overloads of a function with the same number of arguments (${r})!`), s[e].overloadTable[r] = t) : (s[e] = t, r !== void 0 && (s[e].numArguments = r));
      }, qr = 48, Gr = 57, Xr = (e) => {
        if (e === void 0)
          return "_unknown";
        e = e.replace(/[^a-zA-Z0-9_]/g, "$");
        var t = e.charCodeAt(0);
        return t >= qr && t <= Gr ? `_${e}` : e;
      };
      function Jr(e, t, r, n, i, o, u, l) {
        this.name = e, this.constructor = t, this.instancePrototype = r, this.rawDestructor = n, this.baseClass = i, this.getActualType = o, this.upcast = u, this.downcast = l, this.pureVirtualFunctions = [];
      }
      var Be = (e, t, r) => {
        for (; t !== r; )
          t.upcast || y(`Expected null or instance of ${r.name}, got an instance of ${t.name}`), e = t.upcast(e), t = t.baseClass;
        return e;
      };
      function Kr(e, t) {
        if (t === null)
          return this.isReference && y(`null is not a valid ${this.name}`), 0;
        t.$$ || y(`Cannot pass "${Ge(t)}" as a ${this.name}`), t.$$.ptr || y(`Cannot pass deleted object as a pointer of type ${this.name}`);
        var r = t.$$.ptrType.registeredClass, n = Be(t.$$.ptr, r, this.registeredClass);
        return n;
      }
      function Zr(e, t) {
        var r;
        if (t === null)
          return this.isReference && y(`null is not a valid ${this.name}`), this.isSmartPointer ? (r = this.rawConstructor(), e !== null && e.push(this.rawDestructor, r), r) : 0;
        (!t || !t.$$) && y(`Cannot pass "${Ge(t)}" as a ${this.name}`), t.$$.ptr || y(`Cannot pass deleted object as a pointer of type ${this.name}`), !this.isConst && t.$$.ptrType.isConst && y(`Cannot convert argument of type ${t.$$.smartPtrType ? t.$$.smartPtrType.name : t.$$.ptrType.name} to parameter type ${this.name}`);
        var n = t.$$.ptrType.registeredClass;
        if (r = Be(t.$$.ptr, n, this.registeredClass), this.isSmartPointer)
          switch (t.$$.smartPtr === void 0 && y("Passing raw pointer to smart pointer is illegal"), this.sharingPolicy) {
            case 0:
              t.$$.smartPtrType === this ? r = t.$$.smartPtr : y(`Cannot convert argument of type ${t.$$.smartPtrType ? t.$$.smartPtrType.name : t.$$.ptrType.name} to parameter type ${this.name}`);
              break;
            case 1:
              r = t.$$.smartPtr;
              break;
            case 2:
              if (t.$$.smartPtrType === this)
                r = t.$$.smartPtr;
              else {
                var i = t.clone();
                r = this.rawShare(r, J.toHandle(() => i.delete())), e !== null && e.push(this.rawDestructor, r);
              }
              break;
            default:
              y("Unsupporting sharing policy");
          }
        return r;
      }
      function Qr(e, t) {
        if (t === null)
          return this.isReference && y(`null is not a valid ${this.name}`), 0;
        t.$$ || y(`Cannot pass "${Ge(t)}" as a ${this.name}`), t.$$.ptr || y(`Cannot pass deleted object as a pointer of type ${this.name}`), t.$$.ptrType.isConst && y(`Cannot convert argument of type ${t.$$.ptrType.name} to parameter type ${this.name}`);
        var r = t.$$.ptrType.registeredClass, n = Be(t.$$.ptr, r, this.registeredClass);
        return n;
      }
      var en = () => {
        Object.assign(pe.prototype, { getPointee(e) {
          return this.rawGetPointee && (e = this.rawGetPointee(e)), e;
        }, destructor(e) {
          this.rawDestructor?.(e);
        }, argPackAdvance: B, readValueFromPointer: le, fromWireType: Yr });
      };
      function pe(e, t, r, n, i, o, u, l, d, f, v) {
        this.name = e, this.registeredClass = t, this.isReference = r, this.isConst = n, this.isSmartPointer = i, this.pointeeType = o, this.sharingPolicy = u, this.rawGetPointee = l, this.rawConstructor = d, this.rawShare = f, this.rawDestructor = v, !i && t.baseClass === void 0 ? n ? (this.toWireType = Kr, this.destructorFunction = null) : (this.toWireType = Qr, this.destructorFunction = null) : this.toWireType = Zr;
      }
      var At = (e, t, r) => {
        s.hasOwnProperty(e) || Ee("Replacing nonexistent public symbol"), s[e].overloadTable !== void 0 && r !== void 0 ? s[e].overloadTable[r] = t : (s[e] = t, s[e].argCount = r);
      }, tn = (e, t, r) => {
        e = e.replace(/p/g, "i");
        var n = s["dynCall_" + e];
        return n(t, ...r);
      }, kt, k = (e) => kt.get(e), rn = (e, t, r = []) => {
        if (e.includes("j"))
          return tn(e, t, r);
        var n = k(t)(...r);
        return n;
      }, nn = (e, t) => (...r) => rn(e, t, r), j = (e, t) => {
        e = M(e);
        function r() {
          return e.includes("j") ? nn(e, t) : k(t);
        }
        var n = r();
        return typeof n != "function" && y(`unknown function pointer with signature ${e}: ${t}`), n;
      }, an = (e, t) => {
        var r = ve(t, function(n) {
          this.name = t, this.message = n;
          var i = new Error(n).stack;
          i !== void 0 && (this.stack = this.toString() + `
` + i.replace(/^Error(:[^\n]*)?\n/, ""));
        });
        return r.prototype = Object.create(e.prototype), r.prototype.constructor = r, r.prototype.toString = function() {
          return this.message === void 0 ? this.name : `${this.name}: ${this.message}`;
        }, r;
      }, Rt, St = (e) => {
        var t = Ht(e), r = M(t);
        return V(t), r;
      }, Pe = (e, t) => {
        var r = [], n = {};
        function i(o) {
          if (!n[o] && !X[o]) {
            if (Te[o]) {
              Te[o].forEach(i);
              return;
            }
            r.push(o), n[o] = true;
          }
        }
        throw t.forEach(i), new Rt(`${e}: ` + r.map(St).join([", "]));
      }, on = (e, t, r, n, i, o, u, l, d, f, v, m, h) => {
        v = M(v), o = j(i, o), l && (l = j(u, l)), f && (f = j(d, f)), h = j(m, h);
        var C = Xr(v);
        He(C, function() {
          Pe(`Cannot construct ${v} due to unbound types`, [n]);
        }), N([e, t, r], n ? [n] : [], (E) => {
          var Ae;
          E = E[0];
          var W, S;
          n ? (W = E.registeredClass, S = W.instancePrototype) : S = $e.prototype;
          var $ = ve(v, function(...Ze) {
            if (Object.getPrototypeOf(this) !== c)
              throw new ne("Use 'new' to construct " + v);
            if (p.constructor_body === void 0)
              throw new ne(v + " has no accessible constructor");
            var Xt = p.constructor_body[Ze.length];
            if (Xt === void 0)
              throw new ne(`Tried to invoke ctor of ${v} with invalid number of parameters (${Ze.length}) - expected (${Object.keys(p.constructor_body).toString()}) parameters instead!`);
            return Xt.apply(this, Ze);
          }), c = Object.create(S, { constructor: { value: $ } });
          $.prototype = c;
          var p = new Jr(v, $, c, h, W, o, l, f);
          p.baseClass && ((Ae = p.baseClass).__derivedClasses ?? (Ae.__derivedClasses = []), p.baseClass.__derivedClasses.push(p));
          var x = new pe(v, p, true, false, false), T = new pe(v + "*", p, false, false, false), Y = new pe(v + " const*", p, false, true, false);
          return Mt[e] = { pointerType: T, constPointerType: Y }, At(C, $), [x, T, Y];
        });
      }, ze = (e, t) => {
        for (var r = [], n = 0; n < e; n++)
          r.push(w[t + n * 4 >> 2]);
        return r;
      };
      function sn(e) {
        for (var t = 1; t < e.length; ++t)
          if (e[t] !== null && e[t].destructorFunction === void 0)
            return true;
        return false;
      }
      function Ve(e, t, r, n, i, o) {
        var u = t.length;
        u < 2 && y("argTypes array size mismatch! Must at least get return value and 'this' types!");
        var l = t[1] !== null && r !== null, d = sn(t), f = t[0].name !== "void", v = u - 2, m = new Array(v), h = [], C = [], E = function(...W) {
          W.length !== v && y(`function ${e} called with ${W.length} arguments, expected ${v}`), C.length = 0;
          var S;
          h.length = l ? 2 : 1, h[0] = i, l && (S = t[1].toWireType(C, this), h[1] = S);
          for (var $ = 0; $ < v; ++$)
            m[$] = t[$ + 2].toWireType(C, W[$]), h.push(m[$]);
          var c = n(...h);
          function p(x) {
            if (d)
              je(C);
            else
              for (var T = l ? 1 : 2; T < t.length; T++) {
                var Y = T === 1 ? S : m[T - 2];
                t[T].destructorFunction !== null && t[T].destructorFunction(Y);
              }
            if (f)
              return t[0].fromWireType(x);
          }
          return p(c);
        };
        return ve(e, E);
      }
      var ln = (e, t, r, n, i, o) => {
        var u = ze(t, r);
        i = j(n, i), N([], [e], (l) => {
          l = l[0];
          var d = `constructor ${l.name}`;
          if (l.registeredClass.constructor_body === void 0 && (l.registeredClass.constructor_body = []), l.registeredClass.constructor_body[t - 1] !== void 0)
            throw new ne(`Cannot register multiple constructors with identical number of parameters (${t - 1}) for class '${l.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);
          return l.registeredClass.constructor_body[t - 1] = () => {
            Pe(`Cannot construct ${l.name} due to unbound types`, u);
          }, N([], u, (f) => (f.splice(1, 0, null), l.registeredClass.constructor_body[t - 1] = Ve(d, f, null, i, o), [])), [];
        });
      }, xt = (e) => {
        e = e.trim();
        let t = e.indexOf("(");
        return t !== -1 ? e.substr(0, t) : e;
      }, un = (e, t, r, n, i, o, u, l, d) => {
        var f = ze(r, n);
        t = M(t), t = xt(t), o = j(i, o), N([], [e], (v) => {
          v = v[0];
          var m = `${v.name}.${t}`;
          t.startsWith("@@") && (t = Symbol[t.substring(2)]), l && v.registeredClass.pureVirtualFunctions.push(t);
          function h() {
            Pe(`Cannot call ${m} due to unbound types`, f);
          }
          var C = v.registeredClass.instancePrototype, E = C[t];
          return E === void 0 || E.overloadTable === void 0 && E.className !== v.name && E.argCount === r - 2 ? (h.argCount = r - 2, h.className = v.name, C[t] = h) : (Lt(C, t, m), C[t].overloadTable[r - 2] = h), N([], f, (W) => {
            var S = Ve(m, W, v, o, u);
            return C[t].overloadTable === void 0 ? (S.argCount = r - 2, C[t] = S) : C[t].overloadTable[r - 2] = S, [];
          }), [];
        });
      }, Ye = [], z = [], Ne = (e) => {
        e > 9 && --z[e + 1] === 0 && (z[e] = void 0, Ye.push(e));
      }, dn = () => z.length / 2 - 5 - Ye.length, cn = () => {
        z.push(0, 1, void 0, 1, null, 1, true, 1, false, 1), s.count_emval_handles = dn;
      }, J = { toValue: (e) => (e || y("Cannot use deleted val. handle = " + e), z[e]), toHandle: (e) => {
        switch (e) {
          case void 0:
            return 2;
          case null:
            return 4;
          case true:
            return 6;
          case false:
            return 8;
          default: {
            let t = Ye.pop() || z.length;
            return z[t] = e, z[t + 1] = 1, t;
          }
        }
      } }, fn = { name: "emscripten::val", fromWireType: (e) => {
        var t = J.toValue(e);
        return Ne(e), t;
      }, toWireType: (e, t) => J.toHandle(t), argPackAdvance: B, readValueFromPointer: le, destructorFunction: null }, Dt = (e) => H(e, fn), vn = (e, t, r) => {
        switch (t) {
          case 1:
            return r ? function(n) {
              return this.fromWireType(O[n]);
            } : function(n) {
              return this.fromWireType(P[n]);
            };
          case 2:
            return r ? function(n) {
              return this.fromWireType(Q[n >> 1]);
            } : function(n) {
              return this.fromWireType(oe[n >> 1]);
            };
          case 4:
            return r ? function(n) {
              return this.fromWireType(A[n >> 2]);
            } : function(n) {
              return this.fromWireType(w[n >> 2]);
            };
          default:
            throw new TypeError(`invalid integer width (${t}): ${e}`);
        }
      }, pn = (e, t, r, n) => {
        t = M(t);
        function i() {
        }
        i.values = {}, H(e, { name: t, constructor: i, fromWireType: function(o) {
          return this.constructor.values[o];
        }, toWireType: (o, u) => u.value, argPackAdvance: B, readValueFromPointer: vn(t, r, n), destructorFunction: null }), He(t, i);
      }, qe = (e, t) => {
        var r = X[e];
        return r === void 0 && y(`${t} has unknown type ${St(e)}`), r;
      }, hn = (e, t, r) => {
        var n = qe(e, "enum");
        t = M(t);
        var i = n.constructor, o = Object.create(n.constructor.prototype, { value: { value: r }, constructor: { value: ve(`${n.name}_${t}`, function() {
        }) } });
        i.values[r] = o, i[t] = o;
      }, Ge = (e) => {
        if (e === null)
          return "null";
        var t = typeof e;
        return t === "object" || t === "array" || t === "function" ? e.toString() : "" + e;
      }, _n = (e, t) => {
        switch (t) {
          case 4:
            return function(r) {
              return this.fromWireType(ut[r >> 2]);
            };
          case 8:
            return function(r) {
              return this.fromWireType(dt[r >> 3]);
            };
          default:
            throw new TypeError(`invalid float width (${t}): ${e}`);
        }
      }, mn = (e, t, r) => {
        t = M(t), H(e, { name: t, fromWireType: (n) => n, toWireType: (n, i) => i, argPackAdvance: B, readValueFromPointer: _n(t, r), destructorFunction: null });
      }, yn = (e, t, r, n, i, o, u) => {
        var l = ze(t, r);
        e = M(e), e = xt(e), i = j(n, i), He(e, function() {
          Pe(`Cannot call ${e} due to unbound types`, l);
        }, t - 1), N([], l, (d) => {
          var f = [d[0], null].concat(d.slice(1));
          return At(e, Ve(e, f, null, i, o), t - 1), [];
        });
      }, gn = (e, t, r) => {
        switch (t) {
          case 1:
            return r ? (n) => O[n] : (n) => P[n];
          case 2:
            return r ? (n) => Q[n >> 1] : (n) => oe[n >> 1];
          case 4:
            return r ? (n) => A[n >> 2] : (n) => w[n >> 2];
          default:
            throw new TypeError(`invalid integer width (${t}): ${e}`);
        }
      }, bn = (e, t, r, n, i) => {
        t = M(t);
        var o = (v) => v;
        if (n === 0) {
          var u = 32 - 8 * r;
          o = (v) => v << u >>> u;
        }
        var l = t.includes("unsigned"), d = (v, m) => {
        }, f;
        l ? f = function(v, m) {
          return d(m, this.name), m >>> 0;
        } : f = function(v, m) {
          return d(m, this.name), m;
        }, H(e, { name: t, fromWireType: o, toWireType: f, argPackAdvance: B, readValueFromPointer: gn(t, r, n !== 0), destructorFunction: null });
      }, Cn = (e, t, r) => {
        var n = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array], i = n[t];
        function o(u) {
          var l = w[u >> 2], d = w[u + 4 >> 2];
          return new i(O.buffer, d, l);
        }
        r = M(r), H(e, { name: r, fromWireType: o, argPackAdvance: B, readValueFromPointer: o }, { ignoreDuplicateRegistrations: true });
      }, wn = (e, t) => {
        Dt(e);
      }, Tn = (e, t, r, n, i, o, u, l, d, f, v, m) => {
        r = M(r), o = j(i, o), l = j(u, l), f = j(d, f), m = j(v, m), N([e], [t], (h) => {
          h = h[0];
          var C = new pe(r, h.registeredClass, false, false, true, h, n, o, l, f, m);
          return [C];
        });
      }, En = (e, t) => {
        t = M(t);
        var r = t === "std::string";
        H(e, { name: t, fromWireType(n) {
          var i = w[n >> 2], o = n + 4, u;
          if (r)
            for (var l = o, d = 0; d <= i; ++d) {
              var f = o + d;
              if (d == i || P[f] == 0) {
                var v = f - l, m = G(l, v);
                u === void 0 ? u = m : (u += "\0", u += m), l = f + 1;
              }
            }
          else {
            for (var h = new Array(i), d = 0; d < i; ++d)
              h[d] = String.fromCharCode(P[o + d]);
            u = h.join("");
          }
          return V(n), u;
        }, toWireType(n, i) {
          i instanceof ArrayBuffer && (i = new Uint8Array(i));
          var o, u = typeof i == "string";
          u || i instanceof Uint8Array || i instanceof Uint8ClampedArray || i instanceof Int8Array || y("Cannot pass non-string to std::string"), r && u ? o = Ct(i) : o = i.length;
          var l = Ke(4 + o + 1), d = l + 4;
          if (w[l >> 2] = o, r && u)
            $r(i, d, o + 1);
          else if (u)
            for (var f = 0; f < o; ++f) {
              var v = i.charCodeAt(f);
              v > 255 && (V(d), y("String has UTF-16 code units that do not fit in 8 bits")), P[d + f] = v;
            }
          else
            for (var f = 0; f < o; ++f)
              P[d + f] = i[f];
          return n !== null && n.push(V, l), l;
        }, argPackAdvance: B, readValueFromPointer: le, destructorFunction(n) {
          V(n);
        } });
      }, It = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void 0, Fn = (e, t) => {
        for (var r = e, n = r >> 1, i = n + t / 2; !(n >= i) && oe[n]; )
          ++n;
        if (r = n << 1, r - e > 32 && It)
          return It.decode(P.subarray(e, r));
        for (var o = "", u = 0; !(u >= t / 2); ++u) {
          var l = Q[e + u * 2 >> 1];
          if (l == 0)
            break;
          o += String.fromCharCode(l);
        }
        return o;
      }, $n = (e, t, r) => {
        if (r ?? (r = 2147483647), r < 2)
          return 0;
        r -= 2;
        for (var n = t, i = r < e.length * 2 ? r / 2 : e.length, o = 0; o < i; ++o) {
          var u = e.charCodeAt(o);
          Q[t >> 1] = u, t += 2;
        }
        return Q[t >> 1] = 0, t - n;
      }, Pn = (e) => e.length * 2, Mn = (e, t) => {
        for (var r = 0, n = ""; !(r >= t / 4); ) {
          var i = A[e + r * 4 >> 2];
          if (i == 0)
            break;
          if (++r, i >= 65536) {
            var o = i - 65536;
            n += String.fromCharCode(55296 | o >> 10, 56320 | o & 1023);
          } else
            n += String.fromCharCode(i);
        }
        return n;
      }, Ln = (e, t, r) => {
        if (r ?? (r = 2147483647), r < 4)
          return 0;
        for (var n = t, i = n + r - 4, o = 0; o < e.length; ++o) {
          var u = e.charCodeAt(o);
          if (u >= 55296 && u <= 57343) {
            var l = e.charCodeAt(++o);
            u = 65536 + ((u & 1023) << 10) | l & 1023;
          }
          if (A[t >> 2] = u, t += 4, t + 4 > i)
            break;
        }
        return A[t >> 2] = 0, t - n;
      }, An = (e) => {
        for (var t = 0, r = 0; r < e.length; ++r) {
          var n = e.charCodeAt(r);
          n >= 55296 && n <= 57343 && ++r, t += 4;
        }
        return t;
      }, kn = (e, t, r) => {
        r = M(r);
        var n, i, o, u;
        t === 2 ? (n = Fn, i = $n, u = Pn, o = (l) => oe[l >> 1]) : t === 4 && (n = Mn, i = Ln, u = An, o = (l) => w[l >> 2]), H(e, { name: r, fromWireType: (l) => {
          for (var d = w[l >> 2], f, v = l + 4, m = 0; m <= d; ++m) {
            var h = l + 4 + m * t;
            if (m == d || o(h) == 0) {
              var C = h - v, E = n(v, C);
              f === void 0 ? f = E : (f += "\0", f += E), v = h + t;
            }
          }
          return V(l), f;
        }, toWireType: (l, d) => {
          typeof d != "string" && y(`Cannot pass non-string to C++ string type ${r}`);
          var f = u(d), v = Ke(4 + f + t);
          return w[v >> 2] = f / t, i(d, v + 4, f + t), l !== null && l.push(V, v), v;
        }, argPackAdvance: B, readValueFromPointer: le, destructorFunction(l) {
          V(l);
        } });
      }, Rn = (e, t, r, n, i, o) => {
        we[e] = { name: M(t), rawConstructor: j(r, n), rawDestructor: j(i, o), fields: [] };
      }, Sn = (e, t, r, n, i, o, u, l, d, f) => {
        we[e].fields.push({ fieldName: M(t), getterReturnType: r, getter: j(n, i), getterContext: o, setterArgumentType: u, setter: j(l, d), setterContext: f });
      }, xn = (e, t) => {
        t = M(t), H(e, { isVoid: true, name: t, argPackAdvance: 0, fromWireType: () => {
        }, toWireType: (r, n) => {
        } });
      }, Dn = (e, t, r) => P.copyWithin(e, t, t + r), In = () => {
        throw 1 / 0;
      }, Xe = [], jn = (e, t, r, n) => (e = Xe[e], t = J.toValue(t), e(null, t, r, n)), Wn = (e) => {
        var t = Xe.length;
        return Xe.push(e), t;
      }, On = (e, t) => {
        for (var r = new Array(e), n = 0; n < e; ++n)
          r[n] = qe(w[t + n * 4 >> 2], "parameter " + n);
        return r;
      }, Un = Reflect.construct, Hn = (e, t, r) => {
        var n = [], i = e.toWireType(n, r);
        return n.length && (w[t >> 2] = J.toHandle(n)), i;
      }, Bn = (e, t, r) => {
        var n = On(e, t), i = n.shift();
        e--;
        var o = new Array(e), u = (d, f, v, m) => {
          for (var h = 0, C = 0; C < e; ++C)
            o[C] = n[C].readValueFromPointer(m + h), h += n[C].argPackAdvance;
          var E = r === 1 ? Un(f, o) : f.apply(d, o);
          return Hn(i, v, E);
        }, l = `methodCaller<(${n.map((d) => d.name).join(", ")}) => ${i.name}>`;
        return Wn(ve(l, u));
      }, zn = (e) => {
        e > 9 && (z[e + 1] += 1);
      }, Vn = (e) => {
        var t = J.toValue(e);
        je(t), Ne(e);
      }, Yn = (e, t) => {
        e = qe(e, "_emval_take_value");
        var r = e.readValueFromPointer(t);
        return J.toHandle(r);
      }, Nn = () => {
        be("");
      }, jt;
      jt = () => performance.now();
      var qn = () => 2147483648, Gn = (e) => {
        var t = ge.buffer, r = (e - t.byteLength + 65535) / 65536;
        try {
          return ge.grow(r), ct(), 1;
        } catch {
        }
      }, Xn = (e) => {
        var t = P.length;
        e >>>= 0;
        var r = qn();
        if (e > r)
          return false;
        for (var n = (d, f) => d + (f - d % f) % f, i = 1; i <= 4; i *= 2) {
          var o = t * (1 + 0.2 / i);
          o = Math.min(o, e + 100663296);
          var u = Math.min(r, n(Math.max(e, o), 65536)), l = Gn(u);
          if (l)
            return true;
        }
        return false;
      }, Je = {}, Jn = () => ot || "./this.program", he = () => {
        if (!he.strings) {
          var e = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", t = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: e, _: Jn() };
          for (var r in Je)
            Je[r] === void 0 ? delete t[r] : t[r] = Je[r];
          var n = [];
          for (var r in t)
            n.push(`${r}=${t[r]}`);
          he.strings = n;
        }
        return he.strings;
      }, Kn = (e, t) => {
        for (var r = 0; r < e.length; ++r)
          O[t++] = e.charCodeAt(r);
        O[t] = 0;
      }, Zn = (e, t) => {
        var r = 0;
        return he().forEach((n, i) => {
          var o = t + r;
          w[e + i * 4 >> 2] = o, Kn(n, o), r += n.length + 1;
        }), 0;
      }, Qn = (e, t) => {
        var r = he();
        w[e >> 2] = r.length;
        var n = 0;
        return r.forEach((i) => n += i.length + 1), w[t >> 2] = n, 0;
      }, ei = (e) => 52, ti = (e, t, r, n) => 52;
      function ni(e, t, r, n, i) {
        return 70;
      }
      var ii = [null, [], []], ai = (e, t) => {
        var r = ii[e];
        t === 0 || t === 10 ? ((e === 1 ? nr : Z)(gt(r, 0)), r.length = 0) : r.push(t);
      }, oi = (e, t, r, n) => {
        for (var i = 0, o = 0; o < r; o++) {
          var u = w[t >> 2], l = w[t + 4 >> 2];
          t += 8;
          for (var d = 0; d < l; d++)
            ai(e, P[u + d]);
          i += l;
        }
        return w[n >> 2] = i, 0;
      }, si = () => {
        if (typeof crypto == "object" && typeof crypto.getRandomValues == "function")
          return (e) => crypto.getRandomValues(e);
        be("initRandomDevice");
      }, Wt = (e) => (Wt = si())(e), li = (e, t) => (Wt(P.subarray(e, e + t)), 0), Me = (e) => e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0), ui = (e, t) => {
        for (var r = 0, n = 0; n <= t; r += e[n++])
          ;
        return r;
      }, Ot = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Ut = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], di = (e, t) => {
        for (var r = new Date(e.getTime()); t > 0; ) {
          var n = Me(r.getFullYear()), i = r.getMonth(), o = (n ? Ot : Ut)[i];
          if (t > o - r.getDate())
            t -= o - r.getDate() + 1, r.setDate(1), i < 11 ? r.setMonth(i + 1) : (r.setMonth(0), r.setFullYear(r.getFullYear() + 1));
          else
            return r.setDate(r.getDate() + t), r;
        }
        return r;
      };
      function ci(e, t, r) {
        var n = r > 0 ? r : Ct(e) + 1, i = new Array(n), o = wt(e, i, 0, i.length);
        return t && (i.length = o), i;
      }
      var fi = (e, t) => {
        O.set(e, t);
      }, vi = (e, t, r, n) => {
        var i = w[n + 40 >> 2], o = { tm_sec: A[n >> 2], tm_min: A[n + 4 >> 2], tm_hour: A[n + 8 >> 2], tm_mday: A[n + 12 >> 2], tm_mon: A[n + 16 >> 2], tm_year: A[n + 20 >> 2], tm_wday: A[n + 24 >> 2], tm_yday: A[n + 28 >> 2], tm_isdst: A[n + 32 >> 2], tm_gmtoff: A[n + 36 >> 2], tm_zone: i ? G(i) : "" }, u = G(r), l = { "%c": "%a %b %d %H:%M:%S %Y", "%D": "%m/%d/%y", "%F": "%Y-%m-%d", "%h": "%b", "%r": "%I:%M:%S %p", "%R": "%H:%M", "%T": "%H:%M:%S", "%x": "%m/%d/%y", "%X": "%H:%M:%S", "%Ec": "%c", "%EC": "%C", "%Ex": "%m/%d/%y", "%EX": "%H:%M:%S", "%Ey": "%y", "%EY": "%Y", "%Od": "%d", "%Oe": "%e", "%OH": "%H", "%OI": "%I", "%Om": "%m", "%OM": "%M", "%OS": "%S", "%Ou": "%u", "%OU": "%U", "%OV": "%V", "%Ow": "%w", "%OW": "%W", "%Oy": "%y" };
        for (var d in l)
          u = u.replace(new RegExp(d, "g"), l[d]);
        var f = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], v = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        function m(c, p, x) {
          for (var T = typeof c == "number" ? c.toString() : c || ""; T.length < p; )
            T = x[0] + T;
          return T;
        }
        function h(c, p) {
          return m(c, p, "0");
        }
        function C(c, p) {
          function x(Y) {
            return Y < 0 ? -1 : Y > 0 ? 1 : 0;
          }
          var T;
          return (T = x(c.getFullYear() - p.getFullYear())) === 0 && (T = x(c.getMonth() - p.getMonth())) === 0 && (T = x(c.getDate() - p.getDate())), T;
        }
        function E(c) {
          switch (c.getDay()) {
            case 0:
              return new Date(c.getFullYear() - 1, 11, 29);
            case 1:
              return c;
            case 2:
              return new Date(c.getFullYear(), 0, 3);
            case 3:
              return new Date(c.getFullYear(), 0, 2);
            case 4:
              return new Date(c.getFullYear(), 0, 1);
            case 5:
              return new Date(c.getFullYear() - 1, 11, 31);
            case 6:
              return new Date(c.getFullYear() - 1, 11, 30);
          }
        }
        function W(c) {
          var p = di(new Date(c.tm_year + 1900, 0, 1), c.tm_yday), x = new Date(p.getFullYear(), 0, 4), T = new Date(p.getFullYear() + 1, 0, 4), Y = E(x), Ae = E(T);
          return C(Y, p) <= 0 ? C(Ae, p) <= 0 ? p.getFullYear() + 1 : p.getFullYear() : p.getFullYear() - 1;
        }
        var S = { "%a": (c) => f[c.tm_wday].substring(0, 3), "%A": (c) => f[c.tm_wday], "%b": (c) => v[c.tm_mon].substring(0, 3), "%B": (c) => v[c.tm_mon], "%C": (c) => {
          var p = c.tm_year + 1900;
          return h(p / 100 | 0, 2);
        }, "%d": (c) => h(c.tm_mday, 2), "%e": (c) => m(c.tm_mday, 2, " "), "%g": (c) => W(c).toString().substring(2), "%G": W, "%H": (c) => h(c.tm_hour, 2), "%I": (c) => {
          var p = c.tm_hour;
          return p == 0 ? p = 12 : p > 12 && (p -= 12), h(p, 2);
        }, "%j": (c) => h(c.tm_mday + ui(Me(c.tm_year + 1900) ? Ot : Ut, c.tm_mon - 1), 3), "%m": (c) => h(c.tm_mon + 1, 2), "%M": (c) => h(c.tm_min, 2), "%n": () => `
`, "%p": (c) => c.tm_hour >= 0 && c.tm_hour < 12 ? "AM" : "PM", "%S": (c) => h(c.tm_sec, 2), "%t": () => "	", "%u": (c) => c.tm_wday || 7, "%U": (c) => {
          var p = c.tm_yday + 7 - c.tm_wday;
          return h(Math.floor(p / 7), 2);
        }, "%V": (c) => {
          var p = Math.floor((c.tm_yday + 7 - (c.tm_wday + 6) % 7) / 7);
          if ((c.tm_wday + 371 - c.tm_yday - 2) % 7 <= 2 && p++, p) {
            if (p == 53) {
              var T = (c.tm_wday + 371 - c.tm_yday) % 7;
              T != 4 && (T != 3 || !Me(c.tm_year)) && (p = 1);
            }
          } else {
            p = 52;
            var x = (c.tm_wday + 7 - c.tm_yday - 1) % 7;
            (x == 4 || x == 5 && Me(c.tm_year % 400 - 1)) && p++;
          }
          return h(p, 2);
        }, "%w": (c) => c.tm_wday, "%W": (c) => {
          var p = c.tm_yday + 7 - (c.tm_wday + 6) % 7;
          return h(Math.floor(p / 7), 2);
        }, "%y": (c) => (c.tm_year + 1900).toString().substring(2), "%Y": (c) => c.tm_year + 1900, "%z": (c) => {
          var p = c.tm_gmtoff, x = p >= 0;
          return p = Math.abs(p) / 60, p = p / 60 * 100 + p % 60, (x ? "+" : "-") + ("0000" + p).slice(-4);
        }, "%Z": (c) => c.tm_zone, "%%": () => "%" };
        u = u.replace(/%%/g, "\0\0");
        for (var d in S)
          u.includes(d) && (u = u.replace(new RegExp(d, "g"), S[d](o)));
        u = u.replace(/\0\0/g, "%");
        var $ = ci(u, false);
        return $.length > t ? 0 : (fi($, e), $.length - 1);
      }, pi = (e, t, r, n, i) => vi(e, t, r, n);
      Tt = s.InternalError = class extends Error {
        constructor(t) {
          super(t), this.name = "InternalError";
        }
      }, xr(), ne = s.BindingError = class extends Error {
        constructor(t) {
          super(t), this.name = "BindingError";
        }
      }, Nr(), Br(), en(), Rt = s.UnboundTypeError = an(Error, "UnboundTypeError"), cn();
      var hi = { a: yr, b: Cr, o: Tr, d: gr, E: Er, W: Fr, T: Pr, X: Mr, U: Lr, D: Ar, V: kr, A: Rr, O: Sr, ea: Ir, z: on, x: ln, f: un, da: Dt, B: pn, m: hn, I: mn, K: yn, n: bn, i: Cn, L: wn, ka: Tn, J: En, y: kn, s: Rn, l: Sn, fa: xn, Y: Dn, P: In, ia: jn, R: Ne, ha: Bn, ja: zn, ga: Vn, r: Yn, ca: Nn, k: jt, S: Xn, Z: Zn, _: Qn, u: ei, C: ti, N: ni, t: oi, $: li, F: zi, p: Ii, g: Di, j: Bi, ba: Ri, v: Hi, G: Oi, q: Wi, e: ki, c: Si, h: xi, w: Ui, H: ji, aa: Vi, M: Yi, Q: pi }, b = mr(), Ke = (e) => (Ke = b.na)(e), Ht = (e) => (Ht = b.oa)(e), V = (e) => (V = b.qa)(e), R = (e, t) => (R = b.ra)(e, t), Bt = (e) => (Bt = b.sa)(e), zt = (e) => (zt = b.ta)(e), Vt = () => (Vt = b.ua)(), Yt = (e, t, r) => (Yt = b.va)(e, t, r), Nt = (e) => (Nt = b.wa)(e);
      s.dynCall_iijj = (e, t, r, n, i, o) => (s.dynCall_iijj = b.xa)(e, t, r, n, i, o);
      s.dynCall_vijj = (e, t, r, n, i, o) => (s.dynCall_vijj = b.ya)(e, t, r, n, i, o);
      s.dynCall_jiii = (e, t, r, n) => (s.dynCall_jiii = b.za)(e, t, r, n);
      s.dynCall_jii = (e, t, r) => (s.dynCall_jii = b.Aa)(e, t, r);
      var qt = s.dynCall_viiij = (e, t, r, n, i, o) => (qt = s.dynCall_viiij = b.Ba)(e, t, r, n, i, o);
      s.dynCall_jiji = (e, t, r, n, i) => (s.dynCall_jiji = b.Ca)(e, t, r, n, i);
      s.dynCall_viijii = (e, t, r, n, i, o, u) => (s.dynCall_viijii = b.Da)(e, t, r, n, i, o, u);
      s.dynCall_iiiiij = (e, t, r, n, i, o, u) => (s.dynCall_iiiiij = b.Ea)(e, t, r, n, i, o, u);
      s.dynCall_iiiiijj = (e, t, r, n, i, o, u, l, d) => (s.dynCall_iiiiijj = b.Fa)(e, t, r, n, i, o, u, l, d);
      s.dynCall_iiiiiijj = (e, t, r, n, i, o, u, l, d, f) => (s.dynCall_iiiiiijj = b.Ga)(e, t, r, n, i, o, u, l, d, f);
      function ki(e, t) {
        var r = I();
        try {
          k(e)(t);
        } catch (n) {
          if (D(r), n !== n + 0)
            throw n;
          R(1, 0);
        }
      }
      function Ri(e, t, r, n, i) {
        var o = I();
        try {
          return k(e)(t, r, n, i);
        } catch (u) {
          if (D(o), u !== u + 0)
            throw u;
          R(1, 0);
        }
      }
      function Si(e, t, r) {
        var n = I();
        try {
          k(e)(t, r);
        } catch (i) {
          if (D(n), i !== i + 0)
            throw i;
          R(1, 0);
        }
      }
      function xi(e, t, r, n) {
        var i = I();
        try {
          k(e)(t, r, n);
        } catch (o) {
          if (D(i), o !== o + 0)
            throw o;
          R(1, 0);
        }
      }
      function Di(e, t, r) {
        var n = I();
        try {
          return k(e)(t, r);
        } catch (i) {
          if (D(n), i !== i + 0)
            throw i;
          R(1, 0);
        }
      }
      function Ii(e, t) {
        var r = I();
        try {
          return k(e)(t);
        } catch (n) {
          if (D(r), n !== n + 0)
            throw n;
          R(1, 0);
        }
      }
      function ji(e, t, r, n, i, o) {
        var u = I();
        try {
          k(e)(t, r, n, i, o);
        } catch (l) {
          if (D(u), l !== l + 0)
            throw l;
          R(1, 0);
        }
      }
      function Wi(e) {
        var t = I();
        try {
          k(e)();
        } catch (r) {
          if (D(t), r !== r + 0)
            throw r;
          R(1, 0);
        }
      }
      function Oi(e, t, r, n, i, o, u, l) {
        var d = I();
        try {
          return k(e)(t, r, n, i, o, u, l);
        } catch (f) {
          if (D(d), f !== f + 0)
            throw f;
          R(1, 0);
        }
      }
      function Ui(e, t, r, n, i) {
        var o = I();
        try {
          k(e)(t, r, n, i);
        } catch (u) {
          if (D(o), u !== u + 0)
            throw u;
          R(1, 0);
        }
      }
      function Hi(e, t, r, n, i, o) {
        var u = I();
        try {
          return k(e)(t, r, n, i, o);
        } catch (l) {
          if (D(u), l !== l + 0)
            throw l;
          R(1, 0);
        }
      }
      function Bi(e, t, r, n) {
        var i = I();
        try {
          return k(e)(t, r, n);
        } catch (o) {
          if (D(i), o !== o + 0)
            throw o;
          R(1, 0);
        }
      }
      function zi(e) {
        var t = I();
        try {
          return k(e)();
        } catch (r) {
          if (D(t), r !== r + 0)
            throw r;
          R(1, 0);
        }
      }
      function Vi(e, t, r, n, i, o, u) {
        var l = I();
        try {
          k(e)(t, r, n, i, o, u);
        } catch (d) {
          if (D(l), d !== d + 0)
            throw d;
          R(1, 0);
        }
      }
      function Yi(e, t, r, n, i, o) {
        var u = I();
        try {
          qt(e, t, r, n, i, o);
        } catch (l) {
          if (D(u), l !== l + 0)
            throw l;
          R(1, 0);
        }
      }
      var Le;
      se = function e() {
        Le || Gt(), Le || (se = e);
      };
      function Gt() {
        if (q > 0 || (or(), q > 0))
          return;
        function e() {
          Le || (Le = true, s.calledRun = true, !lt && (sr(), _(s), s.onRuntimeInitialized && s.onRuntimeInitialized(), lr()));
        }
        s.setStatus ? (s.setStatus("Running..."), setTimeout(function() {
          setTimeout(function() {
            s.setStatus("");
          }, 1), e();
        }, 1)) : e();
      }
      if (s.preInit)
        for (typeof s.preInit == "function" && (s.preInit = [s.preInit]); s.preInit.length > 0; )
          s.preInit.pop()();
      return Gt(), ie;
    };
  })();
  var Jt = Xi;
  var K = class {
    constructor() {
      throw new Error("RendererLoader is a static class and cannot be instantiated.");
    }
    static async _tryLoad(a) {
      return await Jt({ locateFile: () => a });
    }
    static async _loadWithBackup() {
      return this._ModulePromise || (this._ModulePromise = this._tryLoad(this._wasmURL).catch(async (a) => {
        let s = `https://unpkg.com/${_e.name}@${_e.version}/dist/dotlottie-player.wasm`;
        console.warn(`Trying backup URL for WASM loading: ${s}`);
        try {
          return await this._tryLoad(s);
        } catch (_) {
          throw console.error(`Both primary and backup WASM URLs failed. Primary error: ${a.message}, Backup error: ${_.message}`), new Error("WASM loading failed from all sources.");
        }
      })), this._ModulePromise;
    }
    static async load() {
      return this._loadWithBackup();
    }
    static setWasmUrl(a) {
      this._wasmURL = a, this._ModulePromise = null;
    }
  };
  F(K, "_ModulePromise", null), F(K, "_wasmURL", `https://cdn.jsdelivr.net/npm/${_e.name}@${_e.version}/dist/dotlottie-player.wasm`);
  var Re = class {
    constructor() {
      F(this, "_eventListeners", /* @__PURE__ */ new Map());
    }
    addEventListener(a, s) {
      let _ = this._eventListeners.get(a);
      _ || (_ = /* @__PURE__ */ new Set(), this._eventListeners.set(a, _)), _.add(s);
    }
    removeEventListener(a, s) {
      let _ = this._eventListeners.get(a);
      _ && (s ? (_.delete(s), _.size === 0 && this._eventListeners.delete(a)) : this._eventListeners.delete(a));
    }
    dispatch(a) {
      this._eventListeners.get(a.type)?.forEach((_) => _(a));
    }
    removeAllEventListeners() {
      this._eventListeners.clear();
    }
  };
  var rt = (g, a) => g === "reverse" ? a.Mode.Reverse : g === "bounce" ? a.Mode.Bounce : g === "reverse-bounce" ? a.Mode.ReverseBounce : a.Mode.Forward;
  var nt = (g, a) => g === "contain" ? a.Fit.Contain : g === "cover" ? a.Fit.Cover : g === "fill" ? a.Fit.Fill : g === "fit-height" ? a.Fit.FitHeight : g === "fit-width" ? a.Fit.FitWidth : a.Fit.None;
  var it = (g, a) => {
    let s = new a.VectorFloat();
    return s.push_back(g[0]), s.push_back(g[1]), s;
  };
  var at = (g, a) => {
    let s = new a.VectorFloat();
    return g.length !== 2 || (s.push_back(g[0]), s.push_back(g[1])), s;
  };
  var Kt = class {
    constructor(a) {
      F(this, "_canvas");
      F(this, "_context");
      F(this, "_eventManager");
      F(this, "_animationFrameId", null);
      F(this, "_frameManager");
      F(this, "_dotLottieCore", null);
      F(this, "_wasmModule", null);
      F(this, "_renderConfig", {});
      F(this, "_isFrozen", false);
      F(this, "_backgroundColor", null);
      this._canvas = a.canvas, this._context = this._canvas.getContext("2d"), this._eventManager = new Re(), this._frameManager = new ke(), this._renderConfig = a.renderConfig ?? {}, K.load().then((s) => {
        this._wasmModule = s, this._dotLottieCore = new s.DotLottiePlayer({ autoplay: a.autoplay ?? false, backgroundColor: 0, loopAnimation: a.loop ?? false, mode: rt(a.mode ?? "forward", s), segment: at(a.segment ?? [], s), speed: a.speed ?? 1, useFrameInterpolation: a.useFrameInterpolation ?? true, marker: a.marker ?? "", layout: a.layout ? { align: it(a.layout.align, s), fit: nt(a.layout.fit, s) } : s.createDefaultLayout() }), a.data ? this._loadFromData(a.data) : a.src && this._loadFromSrc(a.src), a.backgroundColor && this.setBackgroundColor(a.backgroundColor);
      }).catch((s) => {
        this._eventManager.dispatch({ type: "loadError", error: new Error(`Failed to load wasm module: ${s}`) });
      });
    }
    _loadFromSrc(a) {
      async function s() {
        let _ = await fetch(a);
        if (!_.ok)
          throw new Error(`Failed to fetch the animation data from URL: ${a}. ${_.status}: ${_.statusText}`);
        let L = (_.headers.get("content-type") ?? "").trim(), ie;
        return ["application/json", "text/plain"].some((me) => L.startsWith(me)) ? ie = await _.text() : ie = await _.arrayBuffer(), ie;
      }
      s().then((_) => {
        this._loadFromData(_);
      }).catch((_) => {
        this._eventManager.dispatch({ type: "loadError", error: new Error(`Failed to load animation data from URL: ${a}. ${_}`) });
      });
    }
    _loadFromData(a) {
      if (this._dotLottieCore === null)
        return;
      let s = this._canvas.width, _ = this._canvas.height, L = false;
      if (typeof a == "string")
        L = this._dotLottieCore.loadAnimationData(a, s, _);
      else if (a instanceof ArrayBuffer)
        L = this._dotLottieCore.loadDotLottieData(a, s, _);
      else if (typeof a == "object")
        L = this._dotLottieCore.loadAnimationData(JSON.stringify(a), s, _);
      else {
        this._eventManager.dispatch({ type: "loadError", error: new Error("Unsupported data type for animation data. Expected a string or ArrayBuffer.") });
        return;
      }
      L ? (this._eventManager.dispatch({ type: "load" }), tt && this.resize(), this._eventManager.dispatch({ type: "frame", currentFrame: this._dotLottieCore.currentFrame() }), this._render(), this._dotLottieCore.config().autoplay && (this._dotLottieCore.play(), this._dotLottieCore.isPlaying() ? (this._eventManager.dispatch({ type: "play" }), this._animationFrameId = this._frameManager.requestAnimationFrame(this._draw.bind(this))) : console.error("something went wrong, the animation was suppose to autoplay"))) : this._eventManager.dispatch({ type: "loadError", error: new Error("Failed to load animation data") });
    }
    get activeAnimationId() {
      return this._dotLottieCore?.activeAnimationId();
    }
    get activeThemeId() {
      return this._dotLottieCore?.activeThemeId();
    }
    get layout() {
      let a = this._dotLottieCore?.config().layout;
      if (a)
        return { align: [a.align.get(0), a.align.get(1)], fit: (() => {
          switch (a.fit) {
            case this._wasmModule?.Fit.Contain:
              return "contain";
            case this._wasmModule?.Fit.Cover:
              return "cover";
            case this._wasmModule?.Fit.Fill:
              return "fill";
            case this._wasmModule?.Fit.FitHeight:
              return "fit-height";
            case this._wasmModule?.Fit.FitWidth:
              return "fit-width";
            case this._wasmModule?.Fit.None:
              return "none";
            default:
              return "contain";
          }
        })() };
    }
    get marker() {
      return this._dotLottieCore?.config().marker;
    }
    get manifest() {
      try {
        let a = this._dotLottieCore?.manifestString();
        if (this._dotLottieCore === null || !a)
          return null;
        let s = JSON.parse(a);
        return Object.keys(s).length === 0 ? null : s;
      } catch {
        return null;
      }
    }
    get renderConfig() {
      return this._renderConfig;
    }
    get segment() {
      let a = this._dotLottieCore?.config().segment;
      if (a && a.size() === 2)
        return [a.get(0), a.get(1)];
    }
    get loop() {
      return this._dotLottieCore?.config().loopAnimation ?? false;
    }
    get mode() {
      let a = this._dotLottieCore?.config().mode;
      return a === this._wasmModule?.Mode.Reverse ? "reverse" : a === this._wasmModule?.Mode.Bounce ? "bounce" : a === this._wasmModule?.Mode.ReverseBounce ? "reverse-bounce" : "forward";
    }
    get isFrozen() {
      return this._isFrozen;
    }
    get backgroundColor() {
      return this._backgroundColor ?? "";
    }
    get autoplay() {
      return this._dotLottieCore?.config().autoplay ?? false;
    }
    get useFrameInterpolation() {
      return this._dotLottieCore?.config().useFrameInterpolation ?? false;
    }
    get speed() {
      return this._dotLottieCore?.config().speed ?? 0;
    }
    get isLoaded() {
      return this._dotLottieCore?.isLoaded() ?? false;
    }
    get isPlaying() {
      return this._dotLottieCore?.isPlaying() ?? false;
    }
    get isPaused() {
      return this._dotLottieCore?.isPaused() ?? false;
    }
    get isStopped() {
      return this._dotLottieCore?.isStopped() ?? false;
    }
    get currentFrame() {
      return this._dotLottieCore?.currentFrame() ?? 0;
    }
    get loopCount() {
      return this._dotLottieCore?.loopCount() ?? 0;
    }
    get totalFrames() {
      return this._dotLottieCore?.totalFrames() ?? 0;
    }
    get duration() {
      return this._dotLottieCore?.duration() ?? 0;
    }
    load(a) {
      this._dotLottieCore === null || this._wasmModule === null || (this._dotLottieCore.setConfig({ autoplay: a.autoplay ?? false, backgroundColor: 0, loopAnimation: a.loop ?? false, mode: rt(a.mode ?? "forward", this._wasmModule), segment: at(a.segment ?? [], this._wasmModule), speed: a.speed ?? 1, useFrameInterpolation: a.useFrameInterpolation ?? true, marker: a.marker ?? "", layout: a.layout ? { align: it(a.layout.align, this._wasmModule), fit: nt(a.layout.fit, this._wasmModule) } : this._wasmModule.createDefaultLayout() }), a.data ? this._loadFromData(a.data) : a.src && this._loadFromSrc(a.src), this.setBackgroundColor(a.backgroundColor ?? ""));
    }
    _render() {
      if (this._dotLottieCore === null || this._context === null)
        return false;
      if (this._dotLottieCore.render()) {
        let s = this._dotLottieCore.buffer(), _ = this._context.createImageData(this._canvas.width, this._canvas.height);
        return _.data.set(s), this._context.putImageData(_, 0, 0), this._eventManager.dispatch({ type: "render", currentFrame: this._dotLottieCore.currentFrame() }), true;
      }
      return false;
    }
    _draw() {
      if (this._dotLottieCore === null || this._context === null || !this._dotLottieCore.isPlaying())
        return;
      let a = this._dotLottieCore.requestFrame();
      this._dotLottieCore.setFrame(a) && (this._eventManager.dispatch({ type: "frame", currentFrame: this._dotLottieCore.currentFrame() }), this._render() && this._dotLottieCore.isComplete() && (this._dotLottieCore.config().loopAnimation ? this._eventManager.dispatch({ type: "loop", loopCount: this._dotLottieCore.loopCount() }) : this._eventManager.dispatch({ type: "complete" }))), this._animationFrameId = this._frameManager.requestAnimationFrame(this._draw.bind(this));
    }
    play() {
      if (this._dotLottieCore === null)
        return;
      let a = this._dotLottieCore.play();
      this._isFrozen = false, a && (this._eventManager.dispatch({ type: "play" }), this._animationFrameId = this._frameManager.requestAnimationFrame(this._draw.bind(this)));
    }
    pause() {
      if (this._dotLottieCore === null)
        return;
      this._dotLottieCore.pause() && this._eventManager.dispatch({ type: "pause" });
    }
    stop() {
      if (this._dotLottieCore === null)
        return;
      this._dotLottieCore.stop() && (this._eventManager.dispatch({ type: "frame", currentFrame: this._dotLottieCore.currentFrame() }), this._render(), this._eventManager.dispatch({ type: "stop" }));
    }
    setFrame(a) {
      if (this._dotLottieCore === null || a < 0 || a > this._dotLottieCore.totalFrames())
        return;
      this._dotLottieCore.seek(a) && (this._eventManager.dispatch({ type: "frame", currentFrame: this._dotLottieCore.currentFrame() }), this._render());
    }
    setSpeed(a) {
      this._dotLottieCore !== null && this._dotLottieCore.setConfig({ ...this._dotLottieCore.config(), speed: a });
    }
    setBackgroundColor(a) {
      this._dotLottieCore !== null && (this._canvas instanceof HTMLCanvasElement && (this._canvas.style.backgroundColor = a), this._backgroundColor = a);
    }
    setLoop(a) {
      this._dotLottieCore !== null && this._dotLottieCore.setConfig({ ...this._dotLottieCore.config(), loopAnimation: a });
    }
    setUseFrameInterpolation(a) {
      this._dotLottieCore !== null && this._dotLottieCore.setConfig({ ...this._dotLottieCore.config(), useFrameInterpolation: a });
    }
    addEventListener(a, s) {
      this._eventManager.addEventListener(a, s);
    }
    removeEventListener(a, s) {
      this._eventManager.removeEventListener(a, s);
    }
    destroy() {
      this._dotLottieCore?.delete(), this._dotLottieCore = null, this._context = null, this._eventManager.dispatch({ type: "destroy" }), this._eventManager.removeAllEventListeners();
    }
    freeze() {
      this._animationFrameId !== null && (this._frameManager.cancelAnimationFrame(this._animationFrameId), this._animationFrameId = null, this._isFrozen = true, this._eventManager.dispatch({ type: "freeze" }));
    }
    unfreeze() {
      this._animationFrameId === null && (this._animationFrameId = this._frameManager.requestAnimationFrame(this._draw.bind(this)), this._isFrozen = false, this._eventManager.dispatch({ type: "unfreeze" }));
    }
    resize() {
      if (!tt || !(this._canvas instanceof HTMLCanvasElement))
        return;
      let a = this._renderConfig.devicePixelRatio || window.devicePixelRatio || 1, { height: s, width: _ } = this._canvas.getBoundingClientRect();
      this._canvas.width = _ * a, this._canvas.height = s * a, this._dotLottieCore?.resize(this._canvas.width, this._canvas.height) && this._render();
    }
    setSegment(a, s) {
      this._dotLottieCore === null || this._wasmModule === null || this._dotLottieCore.setConfig({ ...this._dotLottieCore.config(), segment: at([a, s], this._wasmModule) });
    }
    setMode(a) {
      this._dotLottieCore === null || this._wasmModule === null || this._dotLottieCore.setConfig({ ...this._dotLottieCore.config(), mode: rt(a, this._wasmModule) });
    }
    setRenderConfig(a) {
      this._renderConfig = a;
    }
    loadAnimation(a) {
      if (this._dotLottieCore === null)
        return;
      this._dotLottieCore.loadAnimation(a, this._canvas.width, this._canvas.height) ? (this._eventManager.dispatch({ type: "load" }), this.resize()) : this._eventManager.dispatch({ type: "loadError", error: new Error(`Failed to animation :${a}`) });
    }
    setMarker(a) {
      this._dotLottieCore !== null && this._dotLottieCore.setConfig({ ...this._dotLottieCore.config(), marker: a });
    }
    markers() {
      let a = this._dotLottieCore?.markers();
      if (a) {
        let s = [];
        for (let _ = 0; _ < a.size(); _ += 1) {
          let L = a.get(_);
          s.push({ name: L.name, time: L.time, duration: L.duration });
        }
        return s;
      }
      return [];
    }
    loadTheme(a) {
      return this._dotLottieCore === null ? false : this._dotLottieCore.loadTheme(a);
    }
    loadThemeData(a) {
      return this._dotLottieCore === null ? false : this._dotLottieCore.loadThemeData(a);
    }
    setLayout(a) {
      this._dotLottieCore === null || this._wasmModule === null || this._dotLottieCore.setConfig({ ...this._dotLottieCore.config(), layout: { align: it(a.align, this._wasmModule), fit: nt(a.fit, this._wasmModule) } });
    }
    static setWasmUrl(a) {
      K.setWasmUrl(a);
    }
  };

  // src/scripts/app.js
  console.log("Test", document.getElementById("lottie-container"));
  var $lottieContainers = document.querySelectorAll("canvas[data-src]");
  $lottieContainers.forEach(($lottieContainer) => {
    const myAnimation = new Kt({
      canvas: $lottieContainer,
      src: $lottieContainer.dataset.src,
      speed: 0.15
    });
    document.getElementById("my-animation-play").addEventListener("click", () => {
      myAnimation.play();
    });
    console.log(myAnimation);
  });
})();
