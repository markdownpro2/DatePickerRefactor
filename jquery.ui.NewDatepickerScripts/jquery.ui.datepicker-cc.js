!(function () {
  "use strict";
  !(function () {
    var t = void 0;
    function n(t) {
      return (n =
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
            })(t);
    }
    var e = function (t) {
        return void 0 === t;
      },
      i = function (t) {
        return "function" == typeof t;
      },
      o = function (t) {
        return "string" == typeof t;
      },
      a = function (t) {
        return JSON.parse(JSON.stringify(t));
      },
      r = function (t) {
        if (!t || !t.constructor || t.nodeType) return !1;
        try {
          return "{}" === JSON.stringify(t);
        } catch (t) {
          return !0;
        }
      },
      s = function o() {
        for (
          var a, s, h, u, d, c = arguments.length, p = new Array(c), m = 0;
          m < c;
          m++
        )
          p[m] = arguments[m];
        var l = p[0] || {},
          y = 1,
          f = p.length,
          v = !1;
        for (
          "boolean" == typeof l && ((v = l), (l = p[y] || {}), (y += 1)),
            "object" !== n(l) && i(l) && (l = {}),
            y === f && ((l = t), (y -= 1));
          y < f;
          y++
        )
          if (((a = p[y]), !e(a) && null !== a))
            for (var g = 0; g < window.Object.keys(a).length; g++) {
              var D = window.Object.keys(a)[g];
              if (Object.prototype.hasOwnProperty.call(a, D)) {
                if (((h = a[D]), "__proto__" === D || l === h)) return !0;
                (u = Array.isArray(h)),
                  v && h && (r(h) || u)
                    ? ((s = l[D]),
                      (d = u && !Array.isArray(s) ? [] : u || r(s) ? s : {}),
                      (l[D] = o(v, d, h)))
                    : e(h) || (l[D] = h);
              }
            }
        return l;
      },
      h = function (t, n) {
        return window.Math.abs(t - n * window.Math.floor(t / n));
      },
      u = function (t) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
          e = String(Math.abs(t)),
          i = e.length,
          o = "";
        for (t < 0 && (o += "-"); i < n; ) (i += 1), (o += "0");
        return o + e;
      },
      d = function (t, n, e) {
        var i = s(n, e),
          o = t.initDate,
          a = t.options.maxDate,
          r = t.options.minDate,
          h = i.year,
          u = i.month,
          d = i.day;
        return (
          isNaN(h) || h < 1e3 || h > 1999
            ? (h = o.year)
            : h < r.year
            ? ((h = r.year), (u = 1))
            : h > a.year && (h = a.year),
          isNaN(u) || u < 1 || u > 12
            ? (u = o.month)
            : h <= r.year && u < r.month
            ? ((u = r.month), (d = 1))
            : h >= a.year && u > a.month && (u = a.month),
          isNaN(d) || d < 1
            ? (d = o.day)
            : u <= r.month && d < r.day
            ? (d = r.day)
            : u >= a.month && d > a.day && (d = a.day),
          { year: parseInt(h), month: parseInt(u), day: parseInt(d) }
        );
      },
      c = function (t, n, e) {
        var i = s(n, e),
          o = t.initTime,
          a = t.options.maxTime,
          r = t.options.minTime,
          h = i.hour,
          u = i.minute,
          d = i.second;
        return (
          isNaN(h) || h < 0 || h > 23
            ? (h = o.hour)
            : h < r.hour
            ? (h = r.hour)
            : h > a.hour && (h = a.hour),
          isNaN(u) || u < 0 || u > 59
            ? (u = o.minute)
            : h <= r.hour && u < r.minute
            ? (u = r.minute)
            : h >= a.hour && u > a.minute && (u = a.minute),
          isNaN(d) || d < 0 || d > 59
            ? (d = o.second)
            : h <= r.hour && u <= r.minute && d < r.second
            ? (d = r.second)
            : h >= a.hour && u >= a.minute && d > a.second && (d = a.second),
          { hour: parseInt(h), minute: parseInt(u), second: parseInt(d) }
        );
      },
      p = function (t, n, e, i) {
        var o = t.options.minDate,
          a = t.options.maxDate,
          s = l(t, { year: n, month: e, day: i });
        return (
          (o = r(o) ? s : l(t, { year: o.year, month: o.month, day: o.day })),
          s <=
            (a = r(a)
              ? s
              : l(t, { year: a.year, month: a.month, day: a.day })) && s >= o
        );
      },
      m = function (t, n) {
        var e = t.options.separatorChars,
          i = n.split(e.between),
          o = t.options.date ? i[0].split(e.date) : {},
          a = t.options.date
            ? t.options.time && i[1]
              ? i[1].split(e.time)
              : {}
            : i[0].split(e.time);
        return {
          year: parseInt(o[0]),
          month: parseInt(o[1]),
          day: parseInt(o[2]),
          hour: parseInt(a[0]),
          minute: parseInt(a[1]),
          second: parseInt(a[2]),
        };
      },
      l = function (t, n) {
        var e = t.options.separatorChars;
        return ""
          .concat(n.year)
          .concat(e.date)
          .concat(u(n.month))
          .concat(e.date)
          .concat(u(n.day));
      },
      y = function (t, n) {
        if (!n) return !1;
        var e = n.substr(0, 10).split(t.options.separatorChars.date);
        return (
          3 === e.length &&
          4 === e[0].length &&
          2 === e[1].length &&
          2 === e[2].length
        );
      },
      f = function (t, n) {
        if (!n) return !1;
        var e = n
          .substr(t.options.date ? 11 : 0, 8)
          .split(t.options.separatorChars.time);
        return (
          e.length === (t.options.hasSecond ? 3 : 2) &&
          !e.find(function (t) {
            return 2 !== t.toString().length;
          })
        );
      },
      v = "jdp",
      g = "".concat(v, "-container"),
      D = "".concat(v, "-overlay"),
      w = "div.".concat(v, "-years"),
      _ = "div.".concat(v, "-year"),
      b = "div.".concat(v, "-months"),
      C = "div.".concat(v, "-month"),
      T = "div.".concat(v, "-days"),
      x = "div.".concat(v, "-day"),
      I = "div.".concat(v, "-day.not-in-month"),
      S = "div.".concat(v, "-day.disabled-day"),
      M = "".concat(I, ".disabled-day"),
      E = "div.".concat(v, "-day-name"),
      A = "div.".concat(v, "-icon-plus"),
      O = "div.".concat(v, "-icon-minus"),
      j = "div.".concat(v, "-footer"),
      N = "div.".concat(v, "-btn-today"),
      P = "div.".concat(v, "-btn-empty"),
      V = "div.".concat(v, "-btn-close"),
      B = "div.".concat(v, "-time-container"),
      H = "div.".concat(v, "-time"),
      Y = "not-in-range",
      L = "holly-day",
      k = "".concat(v, ":change"),
      z = "click",
      R = "focusin",
      J = "today",
      W = "attr",
      q = "data-jdp-only-date",
      F = "data-jdp-only-time",
      X = ("data-".concat(v), "visible"),
      G = "block",
      K = "none",
      Q = function t(n) {
        if (
          ["html", "body", "#document"].indexOf(
            (n.nodeName || "").toLowerCase()
          ) >= 0
        )
          return window;
        if (n instanceof HTMLElement) {
          var e = window.getComputedStyle(n),
            i = e.overflow,
            o = e.overflowX,
            a = e.overflowY;
          if (/auto|scroll|overlay/.test(i + a + o)) return n;
        }
        return t(n.parentNode);
      },
      U = function (t) {
        var n = document.createEvent("Event");
        return n.initEvent(t, !0, !0), n;
      },
      Z = function (t, n) {
        t &&
          (t.dispatchEvent(U(n)),
          n === k &&
            (t.dispatchEvent(U("change")), t.dispatchEvent(U("input"))));
      },
      $ = function (t, n, i, a, r) {
        var s = t.split(".");
        t = s.shift() || "div";
        var h = s,
          u = window.document.createElement(t);
        return (
          o(n)
            ? window.document.querySelector(n).appendChild(u)
            : n.appendChild(u),
          h.length && (u.className = h.join(" ")),
          i &&
            a &&
            (function (t, n, e) {
              for (var i = n.split(" "), o = 0, a = i.length; o < a; o++)
                t.addEventListener(i[o], e, !1);
            })(u, i, a),
          e(r) || tt(u, r),
          u
        );
      },
      tt = function (t, n) {
        t.innerHTML = n;
      },
      nt = function (t, n) {
        return n
          ? t.toString().replace(/\d/g, function (t) {
              return "۰۱۲۳۴۵۶۷۸۹"[t];
            })
          : t;
      },
      et = function (t) {
        function n(t, n) {
          return ~~(t / n);
        }
        for (
          var e,
            i = [
              -61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060,
              2097, 2192, 2262, 2324, 2394, 2456, 3178,
            ],
            o = i.length,
            a = 0,
            r = -14,
            s = i[0],
            u = 1;
          u < o;
          u += 1
        ) {
          var d = i[u];
          if (((a = d - s), t < d)) break;
          (r = r + 8 * n(a, 33) + n(h(a, 33), 4)), (s = d);
        }
        var c = t - s;
        return (
          a - c < 6 && (c = c - a + 33 * n(a + 4, 33)),
          -1 === (e = h(h(c + 1, 33) - 1, 4)) && (e = 4),
          0 === e
        );
      },
      it = function (t, n, e) {
        var i = function (t, n) {
          return t < 8 ? 31 * (t - 1) + n : 186 + 30 * (t - 7) + n;
        };
        return h(
          (function (t, n, e, o, a, r) {
            for (
              var s = i(a, r) - i(n, e), h = t < o ? o : t, u = t < o ? t : o;
              u < h;
              u++
            )
              et(u) ? (s += t < o ? 366 : -366) : (s += t < o ? 365 : -365);
            return s;
          })(1392, 3, 25, t, n, e),
          7
        );
      },
      ot = function (t, n) {
        return [0, 31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, et(t) ? 30 : 29][
          n
        ];
      };
    var at,
      rt,
      st = function (t, n) {
        for (var e = [], i = t; i <= n; i++) e.push(u(i));
        return e;
      },
      ht = function (t, n, e) {
        var i = $(H, n),
          o = $("select", i, "change", function (n) {
            var i, o, a;
            t.setValue(
              c(
                t,
                t.initTime,
                ((i = {}),
                (o = e),
                (a = n.target.value),
                o in i
                  ? Object.defineProperty(i, o, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (i[o] = a),
                i)
              )
            );
          });
        o.tabIndex = -1;
        for (
          var a,
            r,
            h =
              ((a = s({ hour: 0, minute: 0, second: 0 }, t.options.minTime)),
              (r = s({ hour: 23, minute: 59, second: 59 }, t.options.maxTime)),
              "hour" == e
                ? st(a.hour, r.hour)
                : "minute" == e
                ? a.hour == r.hour
                  ? st(a.minute, r.minute)
                  : t.initTime.hour == a.hour
                  ? st(a.minute, 59)
                  : t.initTime.hour == r.hour
                  ? st(0, r.minute)
                  : st(0, 59)
                : "second" == e
                ? a.hour == r.hour && a.minute == r.minute
                  ? st(a.second, r.second)
                  : t.initTime.hour == a.hour && t.initTime.minute == a.minute
                  ? st(a.second, 59)
                  : t.initTime.hour == r.hour && t.initTime.minute == r.minute
                  ? st(0, r.second)
                  : st(0, 59)
                : st(a.second, r.second)),
            u = 0;
          u < h.length;
          u++
        ) {
          var d = $("option", o);
          (d.value = h[u].toString()),
            (d.text = nt(h[u], t.options.persianDigits)),
            (d.selected =
              parseInt(h[u]) === parseInt(t.getValue[e] || t.initTime[e]));
        }
      },
      ut = function (t) {
        return 6 === t ? ".".concat("last-week", ".").concat(L) : "";
      },
      dt = function (t, n, e) {
        $(
          A +
            (e
              ? t.options.maxDate.year === t.initDate.year
                ? ".".concat(Y)
                : ""
              : t.options.maxDate.year === t.initDate.year &&
                t.options.maxDate.month === t.initDate.month
              ? ".".concat(Y)
              : ""),
          n,
          z,
          e
            ? function () {
                t.increaseYear();
              }
            : function () {
                t.increaseMonth();
              },
          t.options.plusHtml
        );
      },
      ct = function (t, n, e) {
        $(
          O +
            (e
              ? t.options.minDate.year === t.initDate.year
                ? ".".concat(Y)
                : ""
              : t.options.minDate.year === t.initDate.year &&
                t.options.minDate.month === t.initDate.month
              ? ".".concat(Y)
              : ""),
          n,
          z,
          e
            ? function () {
                t.decreaseYear();
              }
            : function () {
                t.decreaseMonth();
              },
          t.options.minusHtml
        );
      },
      pt = function (t) {
        var n = $(w, t.dpContainer);
        dt(t, n, !0);
        var e = $(_, n);
        ct(t, n, !0);
        var i = t.options.useDropDownYears,
          o = $(i ? "select" : "input", e, "keyup change", function (n) {
            n.target.value < 1e3 ||
              n.target.value > 2e3 ||
              t.yearChange(n.target.value);
          });
        if (i)
          for (
            var a = (function (t) {
                function n(t) {
                  return 100 * Math.round(t / 100);
                }
                var e = t.initDate.year;
                return {
                  min: t.options.minDate.year || n(e - 200),
                  max: t.options.maxDate.year || n(e + 200),
                };
              })(t),
              r = a.min;
            r <= a.max;
            r++
          ) {
            var s = $("option", o);
            (s.value = r),
              (s.text = nt(r, t.options.persianDigits)),
              (s.selected = r === t.initDate.year);
          }
        else
          (o.tabIndex = -1), (o.value = t.initDate.year), (o.type = "number");
      },
      mt = function (t) {
        pt(t),
          (function (t) {
            var n = $(b, t.dpContainer);
            dt(t, n, !1);
            var e = $(C, n);
            ct(t, n, !1);
            var i = $("select", e, "change", function (n) {
              t.monthChange(n.target.value);
            });
            i.tabIndex = -1;
            for (
              var o = (function (t) {
                  var n = t.initDate.year,
                    e = t.options.minDate,
                    i = t.options.maxDate,
                    o = [],
                    a = 1,
                    r = 12;
                  n === e.year
                    ? ((a = e.month), n === i.year && (r = i.month))
                    : n === i.year && ((a = 1), (r = i.month));
                  for (var s = a; s <= r; s++) o.push(s);
                  return o;
                })(t),
                a = t.options.months,
                r = 0;
              r < o.length;
              r++
            ) {
              var s = $("option", i);
              (s.value = o[r]),
                (s.text = nt(a[o[r] - 1], t.options.persianDigits)),
                (s.selected = o[r] === t.initDate.month);
            }
          })(t),
          (function (t) {
            for (var n = $(T, t.dpContainer), e = 0; e < 7; e++)
              $(
                E + ut(e),
                n,
                null,
                null,
                nt(t.options.days[e], t.options.persianDigits)
              );
            for (
              var o = function (n) {
                  return (
                    !n.day || n.inBeforeMonth ? (n.day = 1) : (n.day += 1),
                    (n.inBeforeMonth = !1),
                    (n.inAfterMonth = !1),
                    (n.isValid = !1),
                    (n.isHollyDay = !1),
                    (n.className = ""),
                    (n.year = t.initDate.year),
                    (n.month = t.initDate.month),
                    n
                  );
                },
                a = o({}),
                r = ot(a.year, a.month),
                h = it(a.year, a.month, 1),
                u = 7 * Math.ceil((h + r) / 7) - 1,
                d = 1 == a.month ? 12 : a.month - 1,
                c = 12 == a.month ? 1 : a.month + 1,
                m = 12 == d ? a.year - 1 : a.year,
                l = 1 == c ? a.year + 1 : a.year,
                y = 1 == a.month ? ot(a.year - 1, d) : ot(a.year, d),
                f = it(a.year, a.month, a.day),
                v = y - f,
                g = 0,
                D = function (e) {
                  (a.inBeforeMonth = a.day <= f && e < f),
                    (a.inAfterMonth = e >= r + f),
                    (a.inBeforeMonth || a.inAfterMonth) &&
                      (a.inBeforeMonth
                        ? (v++, (a.day = v), (a.year = m), (a.month = d))
                        : (g++, (a.day = g), (a.year = l), (a.month = c))),
                    (a.isValid = p(t, a.year, a.month, a.day)),
                    (a.className = ut(it(a.year, a.month, a.day))),
                    t.inputValue.day === a.day &&
                      t.inputValue.year === a.year &&
                      t.inputValue.month === a.month &&
                      (a.className += ".".concat("selected")),
                    t.today.day === a.day &&
                      t.today.year === a.year &&
                      t.today.month === a.month &&
                      (a.className += ".".concat("today")),
                    i(t.options.dayRendering) &&
                      s(a, t.options.dayRendering(a, t.input)),
                    a.isHollyDay && (a.className += ".".concat(L));
                  var h = a.isValid ? x : S;
                  (a.inBeforeMonth || a.inAfterMonth) &&
                    ((h = I), a.isValid || (h = M));
                  var u = $(
                    h + a.className,
                    n,
                    null,
                    null,
                    nt(a.day, t.options.persianDigits)
                  );
                  (u.day = a.day),
                    (u.month = a.month),
                    (u.year = a.year),
                    a.isValid &&
                      u.addEventListener(z, function () {
                        t.setValue({
                          year: u.year,
                          month: u.month,
                          day: u.day,
                        });
                      }),
                    o(a);
                },
                w = 0;
              w <= u;
              w++
            )
              D(w);
          })(t);
      },
      lt = function (t) {
        var n,
          e = $(j, t.dpContainer);
        if (t.options.showTodayBtn && t.options.date) {
          var i = (function (t) {
            return p(t, t.today.year, t.today.month, t.today.day);
          })(t);
          $(
            N + (i ? "" : ".disabled-btn"),
            e,
            z,
            function () {
              i && t.setValue(t.today);
            },
            "امروز"
          );
        }
        t.options.date ||
          !t.options.time ||
          (null !== (n = t.input) && void 0 !== n && n.value) ||
          $(
            N,
            e,
            z,
            function () {
              t.setValue(t.initTime), t.hide();
            },
            "انتخاب"
          ),
          t.options.showEmptyBtn &&
            $(
              P,
              e,
              z,
              function () {
                (t.input.value = ""),
                  Z(t.input, k),
                  t.options.hideAfterChange && t.hide();
              },
              "خالی"
            ),
          t.options.showCloseBtn &&
            $(
              V,
              e,
              z,
              function () {
                t.hide();
              },
              "بستن"
            );
      },
      yt = function (t) {
        tt(t.dpContainer, ""),
          t.options.date && mt(t),
          t.options.time &&
            (function (t) {
              var n =
                  B +
                  (t.options.time && !t.options.date ? ".jdp-only-time" : ""),
                e = $(n, t.dpContainer);
              t.options.hasSecond && ht(t, e, "second"),
                ht(t, e, "minute"),
                ht(t, e, "hour");
            })(t),
          lt(t);
      };
    var ft = /iphone|ipod|android|ie|blackberry|fennec/.test(
        null === (at = window.navigator) ||
          void 0 === at ||
          null === (rt = at.userAgent) ||
          void 0 === rt
          ? void 0
          : rt.toLowerCase()
      ),
      vt = {
        init: function (t) {
          var n;
          var that = this;
          this.updateOptions(t),
            (Element.prototype.matches =
              Element.prototype.matchesSelector ||
              Element.prototype.mozMatchesSelector ||
              Element.prototype.msMatchesSelector ||
              Element.prototype.oMatchesSelector ||
              Element.prototype.webkitMatchesSelector),
            window.addEventListener("resize", function () {
              vt.setPosition();
            }),
            this.options.autoHide &&
              document.body.addEventListener("click", function (t) {
                var n, e, o;
                vt.isShow &&
                  ((n = vt.dpContainer),
                  !((o =
                    (e = t).path || (e.composedPath && e.composedPath()) || !1)
                    ? -1 !== o.indexOf(n)
                    : n.outerHTML.indexOf(e.target.outerHTML) > -1)) &&
                  (function (t) {
                    try {
                      return i(t.composedPath) ? t.composedPath()[0] : t.target;
                    } catch (n) {
                      return t.target;
                    }
                  })(t) !== vt.input &&
                  !that.options?.isDashboard &&
                  vt.hide();
              }),
            this.options.autoShow &&
              ((n = this.options.selector),
              document.body.addEventListener(R, function (t) {
                t.target && t.target.matches(n) && vt.show(t.target);
              }));
        },
        updateOptions: function (t) {
          this.options = Dt(t);
        },
        options: a({
          days: ["ش", "ی", "د", "س", "چ", "پ", "ج"],
          months: [
            "فروردین",
            "اردیبهشت",
            "خرداد",
            "تیر",
            "مرداد",
            "شهریور",
            "مهر",
            "آبان",
            "آذر",
            "دی",
            "بهمن",
            "اسفند",
          ],
          initDate: null,
          today: null,
          initTime: null,
          hasSecond: !0,
          time: !1,
          date: !0,
          minDate: {},
          maxDate: {},
          minTime: {},
          maxTime: {},
          separatorChars: { date: "/", between: " ", time: ":" },
          persianDigits: !1,
          zIndex: 1e3,
          container: "body",
          selector: "input[data-jdp]",
          autoShow: !0,
          autoHide: !0,
          hideAfterChange: !0,
          plusHtml:
            '<svg viewBox="0 0 1024 1024"><g><path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path></g></svg>',
          minusHtml:
            '<svg viewBox="0 0 1024 1024"><g><path d="M810 554h-596v-84h596v84z"></path></g></svg>',
          changeMonthRotateYear: !1,
          showTodayBtn: !0,
          showEmptyBtn: !0,
          showCloseBtn: ft,
          autoReadOnlyInput: ft,
          useDropDownYears: !0,
          topSpace: 0,
          bottomSpace: 0,
          overflowSpace: -10,
          isDashboard: !1,
        }),
        input: null,
        get dpContainer() {
          return (
            (this._dpContainer && this._dpContainer.isConnected) ||
              ((this._dpContainer = $(g, this.options.container)),
              (this.dpContainer.style.zIndex = this.options.zIndex)),
            (this.overlayElm && this.overlayElm.isConnected) ||
              ((this.overlayElm = $(D, this.options.container)),
              (this.overlayElm.style.zIndex = this.options.zIndex - 1)),
            this._dpContainer
          );
        },
        get today() {
          return (
            (this._today =
              this._today ||
              this.options.today ||
              (function () {
                var t,
                  n,
                  e = new Date(),
                  i = parseInt(e.getFullYear()),
                  o = parseInt(e.getMonth()) + 1,
                  a = parseInt(e.getDate());
                i > 1600 ? ((t = 979), (i -= 1600)) : ((t = 0), (i -= 621));
                var r = o > 2 ? i + 1 : i;
                return (
                  (n =
                    365 * i +
                    parseInt((r + 3) / 4) -
                    parseInt((r + 99) / 100) +
                    parseInt((r + 399) / 400) -
                    80 +
                    a +
                    [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334][
                      o - 1
                    ]),
                  (t += 33 * parseInt(n / 12053)),
                  (n %= 12053),
                  (t += 4 * parseInt(n / 1461)),
                  (n %= 1461) > 365 &&
                    ((t += parseInt((n - 1) / 365)), (n = (n - 1) % 365)),
                  {
                    year: t,
                    month:
                      n < 186
                        ? 1 + parseInt(n / 31)
                        : 7 + parseInt((n - 186) / 30),
                    day: 1 + (n < 186 ? n % 31 : (n - 186) % 30),
                  }
                );
              })()),
            this._today
          );
        },
        get inputValue() {
          var t = a(this.input.value);
          return (t =
            (function (t, n) {
              if (!n) return !1;
              var e = t.options.separatorChars,
                i = t.options.date
                  ? "\\d{4}".concat(e.date, "\\d{2}").concat(e.date, "\\d{2}")
                  : "",
                o = t.options.time
                  ? "\\d{2}".concat(e.time, "\\d{2}") +
                    (t.options.hasSecond ? "".concat(e.time, "\\d{2}") : "")
                  : "";
              return new RegExp(i + (i && o ? e.between : "") + o).test(n, "g");
            })(this, t) ||
            (o(t) && y(this, t))
              ? m(this, t)
              : {});
        },
        get initDate() {
          return this.options.initDate
            ? this.options.initDate
            : (this._initDate ||
                ((this._initDate = a(this.input.value) || {}),
                r(this._initDate)
                  ? (this._initDate = this.options.initDate || a(this.today))
                  : o(this._initDate) && y(this, this._initDate)
                  ? (this._initDate = m(this, this._initDate))
                  : (this._initDate = a(this.today)),
                (this._initDate = d(this, this._initDate))),
              this._initDate);
        },
        get initTime() {
          if (this._initTime) return this._initTime;
          var t = new Date(),
            n = { hour: t.getHours(), minute: t.getMinutes(), second: 0 };
          return (
            (this._initTime =
              a(this.input.value) || this.options.initTime || n),
            o(this._initTime) &&
              (f(this, this._initTime)
                ? (this._initTime = m(this, this._initTime))
                : (this._initTime = n)),
            (this._initTime = c(this, this._initTime)),
            this._initTime
          );
        },
        _draw: function () {
          yt(this);
        },
        show: function (t) {
          var n = this;
          (this._initDate = null),
            (this._initTime = null),
            (this._value = null),
            (this.input = t),
            this._draw(),
            (function (t, n) {
              n.autoReadOnlyInput &&
                !t.readOnly &&
                (t.setAttribute("readonly", "readonly"), (t.readOnly = !0));
            })(t, this.options),
            (this.dpContainer.style.visibility = X),
            (this.dpContainer.style.display = G),
            (this.overlayElm.style.display = G),
            setTimeout(function () {
              (n.dpContainer.style.visibility = X),
                (n.dpContainer.style.display = G),
                (n.overlayElm.style.display = G),
                (n.isShow = !0);
            }, 300),
            this.setPosition(),
            (function (t) {
              Q(t).addEventListener(
                "scroll",
                function () {
                  vt.setPosition();
                },
                { passive: !0 }
              );
            })(t);
        },
        hide: function () {
          (this.dpContainer.style.visibility = "hidden"),
            (this.dpContainer.style.display = K),
            (this.overlayElm.style.display = K),
            (this.isShow = !1);
        },
        setPosition: function () {
          if (this.dpContainer.style.visibility === X) {
            var t = this.input.getBoundingClientRect(),
              n = t.height,
              e = t.left,
              i = t.top + n;
            i += this.options.topSpace;
            var o = window.document.body.offsetWidth,
              a = this.dpContainer.offsetWidth,
              r = this.dpContainer.offsetHeight;
            e + a >= o && (e -= e + a - (o + this.options.overflowSpace)),
              i - n >= r &&
                i + r >= window.innerHeight &&
                (i -= r + n + this.options.bottomSpace + this.options.topSpace),
              (this.dpContainer.style.position = !this.options?.isDashboard
                ? "fixed"
                : "relative"),
              (this.dpContainer.style.height =
                this.options.isDashboard && "98.7%"),
              (this.dpContainer.style.left = e + "px"),
              (this.dpContainer.style.top = i + "px");

            this.dpContainer.className =
              this.options?.isDashboard && "dashboard-widget-calender";
          }
        },
        get getValue() {
          return (
            (this._value = this._value || this.inputValue || {}), this._value
          );
        },
        setValue: function (t) {
          var n, e, i, o, a;
          (this._value = s(
            {
              year: this.today.year,
              month: this.today.month,
              day: this.today.day,
              hour: this.initTime.hour,
              minute: this.initTime.minute,
              second: this.initTime.second,
            },
            s(this._value, t)
          )),
            (this._initTime = null),
            (this.input.value =
              ((n = this),
              (e = this._value),
              (i = n.options.separatorChars),
              (o = n.options.date
                ? ""
                    .concat(e.year)
                    .concat(i.date)
                    .concat(u(e.month))
                    .concat(i.date)
                    .concat(u(e.day))
                : ""),
              (a = n.options.time
                ? "".concat(u(e.hour)).concat(i.time).concat(u(e.minute)) +
                  (n.options.hasSecond ? i.time + u(e.second) : "")
                : ""),
              o + (o && a ? i.between : "") + a)),
            Z(this.input, k),
            !this.options.time && this.options.hideAfterChange
              ? this.hide()
              : this._draw();
        },
        increaseMonth: function () {
          var t = 12 === this._initDate.month;
          this.options.changeMonthRotateYear && t && this.increaseYear(),
            this.monthChange(t ? 1 : this._initDate.month + 1);
        },
        decreaseMonth: function () {
          var t = 1 === this._initDate.month;
          this.options.changeMonthRotateYear && t && this.decreaseYear(),
            this.monthChange(t ? 12 : this._initDate.month - 1);
        },
        monthChange: function (t) {
          (this._initDate = d(this, this._initDate, { month: t })),
            this._draw();
          this.input.dispatchEvent(new Event("initdatechange"));
        },
        increaseYear: function () {
          this.yearChange(this._initDate.year + 1);
        },
        decreaseYear: function () {
          this.yearChange(this._initDate.year - 1);
        },
        yearChange: function (t) {
          (this._initDate = d(this, this._initDate, { year: t })), this._draw();
          this.input.dispatchEvent(new Event("initdatechange"));
        },
      },
      gt = function (t, n) {
        var e,
          i =
            null === (e = vt.input) || void 0 === e
              ? void 0
              : e.getAttribute(t);
        if (!n && i === J) return a(vt.today);
        if (!o(i)) return {};
        try {
          i = document.querySelector(i).value;
        } catch (t) {}
        return (i = n ? (f(vt, i) ? m(vt, i) : {}) : y(vt, i) ? m(vt, i) : {});
      },
      Dt = function (t) {
        return (
          !e(vt.options._date) && e(t.date) && (t.date = vt.options._date),
          !e(vt.options._time) && e(t.time) && (t.time = vt.options._time),
          (t.separatorChars = s(vt.options.separatorChars, t.separatorChars)),
          (t = s({}, vt.options, t)).minDate === J && (t.minDate = a(vt.today)),
          t.maxDate === J && (t.maxDate = a(vt.today)),
          (t.initDate === W || t._initDateIsAttr) &&
            (delete t.initDate,
            (t._initDateIsAttr = !0),
            window.Object.defineProperty(t, "initDate", {
              get: function () {
                return gt("data-jdp-init-date");
              },
              enumerable: !0,
            })),
          (t.minDate === W || t._minDateIsAttr) &&
            (delete t.minDate,
            (t._minDateIsAttr = !0),
            window.Object.defineProperty(t, "minDate", {
              get: function () {
                return gt("data-jdp-min-date");
              },
              enumerable: !0,
            })),
          (t.maxDate === W || t._maxDateIsAttr) &&
            (delete t.maxDate,
            (t._maxDateIsAttr = !0),
            window.Object.defineProperty(t, "maxDate", {
              get: function () {
                return gt("data-jdp-max-date");
              },
              enumerable: !0,
            })),
          (t.minTime === W || t._minTimeIsAttr) &&
            (delete t.minTime,
            (t._minTimeIsAttr = !0),
            window.Object.defineProperty(t, "minTime", {
              get: function () {
                return gt("data-jdp-min-time", !0);
              },
              enumerable: !0,
            })),
          (t.maxTime === W || t._maxTimeIsAttr) &&
            (delete t.maxTime,
            (t._maxTimeIsAttr = !0),
            window.Object.defineProperty(t, "maxTime", {
              get: function () {
                return gt("data-jdp-max-time", !0);
              },
              enumerable: !0,
            })),
          (t._date = t.date),
          delete t.date,
          window.Object.defineProperty(t, "date", {
            get: function () {
              var n, e;
              return (
                !(
                  null !== (n = vt.input) &&
                  void 0 !== n &&
                  n.hasAttribute(F)
                ) &&
                (t._date ||
                  (null === (e = vt.input) || void 0 === e
                    ? void 0
                    : e.hasAttribute(q)))
              );
            },
            enumerable: !0,
          }),
          (t._time = t.time),
          delete t.time,
          window.Object.defineProperty(t, "time", {
            get: function () {
              var n, e;
              return (
                !(
                  null !== (n = vt.input) &&
                  void 0 !== n &&
                  n.hasAttribute(q)
                ) &&
                (t._time ||
                  (null === (e = vt.input) || void 0 === e
                    ? void 0
                    : e.hasAttribute(F)))
              );
            },
            enumerable: !0,
          }),
          t
        );
      };
    window.jalaliDatepicker = {
      startWatch: function () {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        vt.init(t);
      },
      show: function (t) {
        vt.show(t);
      },
      hide: function () {
        vt.hide();
      },
      updateOptions: function (t) {
        vt.updateOptions(t);
      },
    };
    window.pjDatepicker = vt;
  })();
})();

// _____________________________________ CONFIG _________________________________________

/*
This initializes the JalaliDatePicker component with default settings.
It sets the default date format and other settings for the JalaliDatePicker component.
*/

/**
 * An array of CSS selectors used to identify date input fields in the DOM.
 * These selectors target input elements with specific class names or IDs
 * that are commonly associated with date pickers.
 *
 * Selectors included:
 * - `input.calender`: Matches input elements with the class "calender".
 * - `input[id*="date"]`: Matches input elements with an ID containing "date".
 * - `input[id*="Date"]`: Matches input elements with an ID containing "Date" (case-sensitive).
 * - `input[class*="date"]`: Matches input elements with a class containing "date".
 */
const DATE_SELECTORS = [
  "input.calender",
  'input[id*="date" i]',
  'input[class*="date" i]',
  "input[js-date-type]",
  'td[class*="date" i]>input',
];
const TRIGGER_SELECTORS = [".jalali-datepicker-trigger"];
const TRIGGER_ELEMENT_TYPES = ["img"];
const JALALI_INITIALIZED_CLASS = "jalali-initialized";
const JALALI_CALENDAR_CLASS = "calender";
const JALALI_TRIGGER_CLASS = "jalali-datepicker-trigger";
const JALALI_OPTIONS = {
  separatorChars: {
    date: window.location.href.includes("app=workflow&page=compose") ? "/" : "",
  },
  zIndex: 1000,
  selector: `.${JALALI_CALENDAR_CLASS}`,
};
const TIMEOUT_CALENDAR = 50;
const ON_CHANGE_SELECTORS = ['select[id*="ddlSendGroups" i]'];

/**
 * Initializes a Jalali date picker on the specified input element if it has not already been initialized.
 *
 * @param {HTMLInputElement} inputElement - The input element to attach the Jalali date picker to.
 * @throws {Error} Logs a warning to the console if the Jalali date picker initialization fails.
 */
const initializeDatePicker = (inputElement) => {
  if (!inputElement.classList.contains(JALALI_INITIALIZED_CLASS)) {
    try {
      jalaliDatepicker.startWatch({
        ...JALALI_OPTIONS,
        selector: inputElement.id && `#${inputElement.id}`,
      });
      inputElement.classList.add(
        JALALI_INITIALIZED_CLASS,
        JALALI_CALENDAR_CLASS
      );
    } catch (error) {
      console.warn("Jalali initialization failed", error, inputElement);
    }
  }
};

/**
 * Initializes a trigger button for a date input element to toggle the Jalali datepicker.
 *
 * This function identifies a trigger button (either the previous or next sibling element)
 * associated with the given date input element. If a valid trigger button is found, it adds
 * a specific CSS class to the button and sets up a click event listener to toggle the visibility
 * of the Jalali datepicker.
 *
 * @param {HTMLElement} dateElement - The date input element for which the trigger button is initialized.
 *
 * @throws Will log a warning to the console if an error occurs during initialization.
 *
 * @example
 * // HTML structure:
 * // <input type="text" id="dateInput">
 * // <button type="button" id="triggerButton">Pick Date</button>
 *
 * const dateElement = document.getElementById('dateInput');
 * initializeTriggerButton(dateElement);
 *
 * // Clicking the button toggles the Jalali datepicker for the input element.
 *
 * @remarks
 * - The function assumes that the trigger button is either the previous or next sibling
 *   of the date input element.
 * - The trigger button must have a type included in the `TRIGGER_ELEMENT_TYPES` array.
 * - The `JALALI_TRIGGER_CLASS` constant is used to style the trigger button.
 * - The `jalaliDatepicker` object is expected to have `show` and `hide` methods.
 */
const initializeTriggerButton = (dateElement) => {
  try {
    const beforeElement = dateElement.previousElementSibling;
    const afterElement = dateElement.nextElementSibling;

    const datePickerBtn =
      afterElement && TRIGGER_ELEMENT_TYPES.includes(afterElement.type)
        ? afterElement
        : beforeElement && TRIGGER_ELEMENT_TYPES.includes(beforeElement.type)
        ? beforeElement
        : null;

    if (datePickerBtn) {
      datePickerBtn.classList.add(JALALI_TRIGGER_CLASS);
      let isShowing = false;
      datePickerBtn.addEventListener("click", (e) => {
        e.preventDefault();
        isShowing
          ? jalaliDatepicker.hide()
          : jalaliDatepicker.show(dateElement);
        isShowing = !isShowing;
      });
    }
  } catch (error) {
    console.warn("Jalali trigger initialization failed", error, dateElement);
  }
};

function normalizeDatePickers() {
  document
    // auto_txtDate is for this page 'viewTemplateData' the page for creating and editing document templates
    .querySelectorAll('input:not([type="hidden"]):not([id*="auto_txtDate" i])')
    .forEach(function (input) {
      const id = input.id?.toLowerCase() || "";
      const cls = input.className?.toLowerCase() || "";
      const name = input.name?.toLowerCase() || "";
      const attrs = [id, cls, name].join(" ");
      if (/date/i.test(attrs)) {
        if (!input.classList.contains(JALALI_CALENDAR_CLASS)) {
          input.classList.add(JALALI_CALENDAR_CLASS);
        }
      }
    });
}

/**
 * Initializes the Jalali date picker for all input elements matching the specified selectors.
 * This function selects all elements matching the `DATE_SELECTORS` array,
 * initializes the date picker on each input element, and sets up trigger buttons for them.
 *
 * @function
 * @returns {void}
 */
const jalaliDatePickerConfig = () => {
  // This will normalize the date picker inputs
  normalizeDatePickers();
  setTimeout(() => {
    jalaliDatepicker.startWatch(JALALI_OPTIONS);
  }, TIMEOUT_CALENDAR);
};

// Initialize the JalaliDatePicker when the document is ready
document.addEventListener("DOMContentLoaded", () => {
  jalaliDatePickerConfig();
});

document.onchange = (e) => {
  if (ON_CHANGE_SELECTORS.some((selector) => e.target.matches(selector))) {
    jalaliDatepicker.startWatch(JALALI_OPTIONS);
  }
};
