(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    "1GPU": function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "pageQuery", function () {
          return o;
        });
      var a = n("mXGw"),
        l = n.n(a),
        r = n("Wbzz"),
        u = n("Z/i3"),
        c = n("cz2p");
      t.default = function (e) {
        var t = e.data.allSitePage.nodes;
        return l.a.createElement(
          u.a,
          null,
          l.a.createElement(c.b.h1, null, "Blog Index"),
          l.a.createElement(
            c.b.ul,
            null,
            t.map(function (e) {
              var t = e.id,
                n = e.path,
                a = e.context.frontmatter;
              return l.a.createElement(
                c.b.li,
                { key: t },
                l.a.createElement(r.a, { to: n }, l.a.createElement("code", null, n)),
                (null == a ? void 0 : a.title) && " -- " + a.title
              );
            })
          )
        );
      };
      var o = "4285176675";
    },
  },
]);
//# sourceMappingURL=component---src-pages-blog-tsx-1c4de68e876aa489995a.js.map
