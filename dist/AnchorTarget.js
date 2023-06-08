/*! For license information please see AnchorTarget.js.LICENSE.txt */
(() => {
  var e = {
      703: (e, t, r) => {
        "use strict";
        var n = r(414);
        function o() {}
        function u() {}
        (u.resetWarningCache = o),
          (e.exports = function () {
            function e(e, t, r, o, u, a) {
              if (a !== n) {
                var i = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                );
                throw ((i.name = "Invariant Violation"), i);
              }
            }
            function t() {
              return e;
            }
            e.isRequired = e;
            var r = {
              array: e,
              bigint: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: t,
              element: e,
              elementType: e,
              instanceOf: t,
              node: e,
              objectOf: t,
              oneOf: t,
              oneOfType: t,
              shape: t,
              exact: t,
              checkPropTypes: u,
              resetWarningCache: o,
            };
            return (r.PropTypes = r), r;
          });
      },
      697: (e, t, r) => {
        e.exports = r(703)();
      },
      414: (e) => {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      },
      408: (e, t) => {
        "use strict";
        var r = Symbol.for("react.element"),
          n = Symbol.for("react.portal"),
          o = Symbol.for("react.fragment"),
          u = Symbol.for("react.strict_mode"),
          a = Symbol.for("react.profiler"),
          i = Symbol.for("react.provider"),
          c = Symbol.for("react.context"),
          s = Symbol.for("react.forward_ref"),
          f = Symbol.for("react.suspense"),
          l = Symbol.for("react.memo"),
          p = Symbol.for("react.lazy"),
          y = Symbol.iterator,
          d = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          h = Object.assign,
          m = {};
        function _(e, t, r) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = r || d);
        }
        function v() {}
        function b(e, t, r) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = r || d);
        }
        (_.prototype.isReactComponent = {}),
          (_.prototype.setState = function (e, t) {
            if ("object" != typeof e && "function" != typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (_.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (v.prototype = _.prototype);
        var S = (b.prototype = new v());
        (S.constructor = b), h(S, _.prototype), (S.isPureReactComponent = !0);
        var g = Array.isArray,
          R = Object.prototype.hasOwnProperty,
          E = { current: null },
          k = { key: !0, ref: !0, __self: !0, __source: !0 };
        function w(e, t, n) {
          var o,
            u = {},
            a = null,
            i = null;
          if (null != t)
            for (o in (void 0 !== t.ref && (i = t.ref),
            void 0 !== t.key && (a = "" + t.key),
            t))
              R.call(t, o) && !k.hasOwnProperty(o) && (u[o] = t[o]);
          var c = arguments.length - 2;
          if (1 === c) u.children = n;
          else if (1 < c) {
            for (var s = Array(c), f = 0; f < c; f++) s[f] = arguments[f + 2];
            u.children = s;
          }
          if (e && e.defaultProps)
            for (o in (c = e.defaultProps)) void 0 === u[o] && (u[o] = c[o]);
          return {
            $$typeof: r,
            type: e,
            key: a,
            ref: i,
            props: u,
            _owner: E.current,
          };
        }
        function $(e) {
          return "object" == typeof e && null !== e && e.$$typeof === r;
        }
        var C = /\/+/g;
        function O(e, t) {
          return "object" == typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function x(e, t, o, u, a) {
          var i = typeof e;
          ("undefined" !== i && "boolean" !== i) || (e = null);
          var c = !1;
          if (null === e) c = !0;
          else
            switch (i) {
              case "string":
              case "number":
                c = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case r:
                  case n:
                    c = !0;
                }
            }
          if (c)
            return (
              (a = a((c = e))),
              (e = "" === u ? "." + O(c, 0) : u),
              g(a)
                ? ((o = ""),
                  null != e && (o = e.replace(C, "$&/") + "/"),
                  x(a, t, o, "", function (e) {
                    return e;
                  }))
                : null != a &&
                  ($(a) &&
                    (a = (function (e, t) {
                      return {
                        $$typeof: r,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      a,
                      o +
                        (!a.key || (c && c.key === a.key)
                          ? ""
                          : ("" + a.key).replace(C, "$&/") + "/") +
                        e
                    )),
                  t.push(a)),
              1
            );
          if (((c = 0), (u = "" === u ? "." : u + ":"), g(e)))
            for (var s = 0; s < e.length; s++) {
              var f = u + O((i = e[s]), s);
              c += x(i, t, o, f, a);
            }
          else if (
            ((f = (function (e) {
              return null === e || "object" != typeof e
                ? null
                : "function" == typeof (e = (y && e[y]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" == typeof f)
          )
            for (e = f.call(e), s = 0; !(i = e.next()).done; )
              c += x((i = i.value), t, o, (f = u + O(i, s++)), a);
          else if ("object" === i)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return c;
        }
        function T(e, t, r) {
          if (null == e) return e;
          var n = [],
            o = 0;
          return (
            x(e, n, "", "", function (e) {
              return t.call(r, e, o++);
            }),
            n
          );
        }
        function j(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var P = { current: null },
          I = { transition: null },
          q = {
            ReactCurrentDispatcher: P,
            ReactCurrentBatchConfig: I,
            ReactCurrentOwner: E,
          };
        (t.Children = {
          map: T,
          forEach: function (e, t, r) {
            T(
              e,
              function () {
                t.apply(this, arguments);
              },
              r
            );
          },
          count: function (e) {
            var t = 0;
            return (
              T(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              T(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!$(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = _),
          (t.Fragment = o),
          (t.Profiler = a),
          (t.PureComponent = b),
          (t.StrictMode = u),
          (t.Suspense = f),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = q),
          (t.cloneElement = function (e, t, n) {
            if (null == e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var o = h({}, e.props),
              u = e.key,
              a = e.ref,
              i = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((a = t.ref), (i = E.current)),
                void 0 !== t.key && (u = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var c = e.type.defaultProps;
              for (s in t)
                R.call(t, s) &&
                  !k.hasOwnProperty(s) &&
                  (o[s] = void 0 === t[s] && void 0 !== c ? c[s] : t[s]);
            }
            var s = arguments.length - 2;
            if (1 === s) o.children = n;
            else if (1 < s) {
              c = Array(s);
              for (var f = 0; f < s; f++) c[f] = arguments[f + 2];
              o.children = c;
            }
            return {
              $$typeof: r,
              type: e.type,
              key: u,
              ref: a,
              props: o,
              _owner: i,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: c,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: i, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = w),
          (t.createFactory = function (e) {
            var t = w.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: s, render: e };
          }),
          (t.isValidElement = $),
          (t.lazy = function (e) {
            return {
              $$typeof: p,
              _payload: { _status: -1, _result: e },
              _init: j,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: l, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = I.transition;
            I.transition = {};
            try {
              e();
            } finally {
              I.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return P.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return P.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return P.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return P.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return P.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, r) {
            return P.current.useImperativeHandle(e, t, r);
          }),
          (t.useInsertionEffect = function (e, t) {
            return P.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return P.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return P.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, r) {
            return P.current.useReducer(e, t, r);
          }),
          (t.useRef = function (e) {
            return P.current.useRef(e);
          }),
          (t.useState = function (e) {
            return P.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, r) {
            return P.current.useSyncExternalStore(e, t, r);
          }),
          (t.useTransition = function () {
            return P.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      294: (e, t, r) => {
        "use strict";
        e.exports = r(408);
      },
    },
    t = {};
  function r(n) {
    var o = t[n];
    if (void 0 !== o) return o.exports;
    var u = (t[n] = { exports: {} });
    return e[n](u, u.exports, r), u.exports;
  }
  (() => {
    "use strict";
    var e = r(294),
      t = r(697);
    const n = (0, t.shape)({
      id: t.string.isRequired,
      type: t.string.isRequired,
      area: t.string.isRequired,
      container_width: t.string,
      data: t.any,
      name: t.string,
      position: t.number,
      segments: (0, t.arrayOf)((0, t.shape)({ name: t.string.isRequired })),
      excluded_segments: (0, t.arrayOf)(
        (0, t.shape)({ name: t.string.isRequired })
      ),
    });
    function o(t) {
      let { block: r } = t;
      const n = (function () {
        return (
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
        )
          .toLowerCase()
          .replace(/\s/g, "-");
      })(r.name);
      return e.createElement("div", { id: n, tabIndex: "-1" });
    }
    var u;
    (o.propTypes = { block: n.isRequired }),
      (u = o),
      (o.displayName = "AnchorTarget"),
      $RefreshReg$(u, "AnchorTarget");
  })();
})();
