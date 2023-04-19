(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1384], {
        2771: function(t, o, e) {
            "use strict";
            var a, n, s = e(1720);

            function l() {
                return (l = Object.assign || function(t) {
                    for (var o = 1; o < arguments.length; o++) {
                        var e = arguments[o];
                        for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
                    }
                    return t
                }).apply(this, arguments)
            }
            o.Z = function(t) {
                return s.createElement("svg", l({
                    width: 30,
                    height: 30,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, t), a || (a = s.createElement("rect", {
                    width: 30,
                    height: 30,
                    rx: 12.8,
                    fill: "#1E293B"
                })), n || (n = s.createElement("path", {
                    d: "M10.247 22V8.91h8.821v2.281h-6.053v3.12h5.6v2.281h-5.6v3.126h6.079V22h-8.847Zm12.062.166c-.422 0-.784-.149-1.087-.447a1.493 1.493 0 0 1-.447-1.087c0-.418.15-.776.448-1.074a1.493 1.493 0 0 1 1.086-.447c.41 0 .767.149 1.074.447.307.299.46.657.46 1.074 0 .281-.072.54-.217.773-.14.23-.326.416-.556.557-.23.136-.484.204-.76.204Z",
                    fill: "#FB923C"
                })))
            }
        },
        5072: function(t, o, e) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/zh-hans/ai-toolkit", function() {
                return e(622)
            }])
        },
        3525: function(t, o, e) {
            "use strict";
            var a = e(7320),
                n = e(1664);

            function s(t, o, e) {
                return o in t ? Object.defineProperty(t, o, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[o] = e, t
            }

            function l(t) {
                for (var o = 1; o < arguments.length; o++) {
                    var e = null != arguments[o] ? arguments[o] : {},
                        a = Object.keys(e);
                    "function" === typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(e).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })))), a.forEach((function(o) {
                        s(t, o, e[o])
                    }))
                }
                return t
            }

            function c(t, o) {
                if (null == t) return {};
                var e, a, n = function(t, o) {
                    if (null == t) return {};
                    var e, a, n = {},
                        s = Object.keys(t);
                    for (a = 0; a < s.length; a++) e = s[a], o.indexOf(e) >= 0 || (n[e] = t[e]);
                    return n
                }(t, o);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(t);
                    for (a = 0; a < s.length; a++) e = s[a], o.indexOf(e) >= 0 || Object.prototype.propertyIsEnumerable.call(t, e) && (n[e] = t[e])
                }
                return n
            }
            o.Z = function(t) {
                var o = t.href,
                    e = c(t, ["href"]),
                    s = o && o.startsWith("/"),
                    i = o && o.startsWith("#");
                return s ? (0, a.tZ)(n.default, {
                    href: o,
                    children: (0, a.tZ)("a", l({}, e))
                }) : i ? (0, a.tZ)("a", l({
                    href: o
                }, e)) : (0, a.tZ)("a", l({
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: o
                }, e))
            }
        },
        9038: function(t, o, e) {
            "use strict";
            e.d(o, {
                T: function() {
                    return m
                },
                U: function() {
                    return p
                }
            });
            var a = e(7320),
                n = e(9008),
                s = e(1163),
                l = e(7059),
                c = e.n(l),
                i = e(4646),
                r = e(1720),
                h = function(t) {
                    var o = t.title,
                        e = t.description,
                        l = t.ogType,
                        i = t.ogImage,
                        h = t.twImage,
                        m = (0, s.useRouter)();
                    return (0, a.BX)(n.default, {
                        children: [(0, a.tZ)("title", {
                            children: o
                        }), (0, a.tZ)("meta", {
                            name: "robots",
                            content: "follow, index"
                        }), (0, a.tZ)("meta", {
                            name: "description",
                            content: e
                        }), (0, a.tZ)("meta", {
                            property: "og:url",
                            content: "".concat(c().siteUrl).concat(m.asPath)
                        }), (0, a.tZ)("meta", {
                            property: "og:type",
                            content: l
                        }), (0, a.tZ)("meta", {
                            property: "og:site_name",
                            content: c().title
                        }), (0, a.tZ)("meta", {
                            property: "og:description",
                            content: e
                        }), (0, a.tZ)("meta", {
                            property: "og:title",
                            content: o
                        }), (0, a.tZ)("meta", {
                            property: "og:image:alt",
                            content: "ExplainThis Logo"
                        }), (0, a.tZ)("meta", {
                            property: "fb:app_id",
                            content: "584781686379505"
                        }), Array.isArray(i) ? i.map((function(t) {
                            var o = t.url;
                            return (0, a.BX)(r.default.Fragment, {
                                children: [(0, a.tZ)("meta", {
                                    property: "og:image",
                                    content: o
                                }), (0, a.tZ)("meta", {
                                    property: "og:image:secure_url",
                                    content: o
                                })]
                            }, o)
                        })) : (0, a.BX)(a.HY, {
                            children: [(0, a.tZ)("meta", {
                                property: "og:image",
                                content: i || "https://www.explainthis.io/static/images/twitter-card.png"
                            }), (0, a.tZ)("meta", {
                                property: "og:image:secure_url",
                                content: h || "https://www.explainthis.io/static/images/twitter-card.png"
                            })]
                        }), (0, a.tZ)("meta", {
                            property: "og:image:type",
                            content: "image/png"
                        }), (0, a.tZ)("meta", {
                            property: "og:image:width",
                            content: "1280"
                        }), (0, a.tZ)("meta", {
                            property: "og:image:height",
                            content: "720"
                        }), (0, a.tZ)("meta", {
                            name: "twitter:card",
                            content: "summary_large_image"
                        }), (0, a.tZ)("meta", {
                            name: "twitter:site",
                            content: c().twitter
                        }), (0, a.tZ)("meta", {
                            name: "twitter:title",
                            content: o
                        }), (0, a.tZ)("meta", {
                            name: "twitter:description",
                            content: e
                        }), (0, a.tZ)("meta", {
                            name: "twitter:image",
                            content: h
                        })]
                    })
                },
                m = function(t) {
                    var o = t.title,
                        e = t.description,
                        l = t.pageImage,
                        i = c().siteUrl + c().socialBanner,
                        r = c().siteUrl + c().socialBanner,
                        m = (0, s.useRouter)(),
                        p = m.asPath.replace("/zh-hant", "").replace("/zh-hans", "").replace("/en", "");
                    return (0, a.BX)(a.HY, {
                        children: [(0, a.tZ)(h, {
                            title: o,
                            description: e,
                            ogType: "website",
                            ogImage: l || i,
                            twImage: l || r
                        }), (0, a.BX)(n.default, {
                            children: [(0, a.tZ)("link", {
                                rel: "canonical",
                                href: "".concat(c().siteUrl).concat(m.asPath)
                            }), (0, a.tZ)("link", {
                                rel: "alternate",
                                hrefLang: "zh-hant",
                                href: "".concat(c().siteUrl, "/zh-hant").concat(p)
                            }), (0, a.tZ)("link", {
                                rel: "alternate",
                                hrefLang: "zh-hans",
                                href: "".concat(c().siteUrl, "/zh-hans").concat(p)
                            }), (0, a.tZ)("link", {
                                rel: "alternate",
                                hrefLang: "en",
                                href: "".concat(c().siteUrl, "/en").concat(p)
                            })]
                        })]
                    })
                },
                p = function(t) {
                    var o = t.title,
                        e = t.summary,
                        l = t.date,
                        r = t.lastmod,
                        m = t.url,
                        p = t.images,
                        E = void 0 === p ? [] : p,
                        g = (0, s.useRouter)(),
                        d = new Date(l).toISOString(),
                        f = new Date(r || l).toISOString(),
                        u = (0 === E.length ? [c().socialBanner] : "string" === typeof E ? [E] : E).map((function(t) {
                            return {
                                "@type": "ImageObject",
                                url: "".concat(t)
                            }
                        })),
                        y = {
                            "@context": "https://schema.org",
                            "@type": "Article",
                            mainEntityOfPage: {
                                "@type": "WebPage",
                                "@id": m
                            },
                            headline: o,
                            image: u,
                            datePublished: d,
                            dateModified: f,
                            publisher: {
                                "@type": "Organization",
                                name: c().author,
                                logo: {
                                    "@type": "ImageObject",
                                    url: "".concat(c().siteUrl).concat(c().siteLogo)
                                }
                            },
                            description: e
                        },
                        T = u[0].url,
                        L = g.asPath.replace("/zh-hant", "").replace("/zh-hans", "").replace("/en", "");
                    return (0, a.BX)(a.HY, {
                        children: [(0, a.tZ)(h, {
                            title: "".concat(o, " - ").concat((0, i.Z)()),
                            description: e,
                            ogType: "article",
                            ogImage: u,
                            twImage: T
                        }), (0, a.BX)(n.default, {
                            children: [l && (0, a.tZ)("meta", {
                                property: "article:published_time",
                                content: d
                            }), r && (0, a.tZ)("meta", {
                                property: "article:modified_time",
                                content: f
                            }), (0, a.tZ)("link", {
                                rel: "canonical",
                                href: "".concat(c().siteUrl).concat(g.asPath)
                            }), (0, a.tZ)("link", {
                                rel: "alternate",
                                hrefLang: "zh-hant",
                                href: "".concat(c().siteUrl, "/zh-hant").concat(L)
                            }), (0, a.tZ)("link", {
                                rel: "alternate",
                                hrefLang: "zh-hant-tw",
                                href: "".concat(c().siteUrl, "/zh-hant").concat(L)
                            }), (0, a.tZ)("link", {
                                rel: "alternate",
                                hrefLang: "zh-hans",
                                href: "".concat(c().siteUrl, "/zh-hans").concat(L)
                            }), (0, a.tZ)("link", {
                                rel: "alternate",
                                hrefLang: "en",
                                href: "".concat(c().siteUrl, "/en").concat(L)
                            }), (0, a.tZ)("script", {
                                type: "application/ld+json",
                                dangerouslySetInnerHTML: {
                                    __html: JSON.stringify(y, null, 2)
                                }
                            })]
                        })]
                    })
                }
        },
        3158: function(t, o, e) {
            "use strict";
            var a = e(1163);
            o.Z = function() {
                var t = (0, a.useRouter)().asPath;
                return t.includes("zh-hans") ? "zh-hans" : t.includes("zh-hant") ? "zh-hant" : "en"
            }
        },
        4646: function(t, o, e) {
            "use strict";
            var a = e(3158);
            o.Z = function() {
                var t = (0, a.Z)();
                return "zh-hans" === t ? "\u8f6f\u4f53\u5de5\u7a0b\u5e08\u9762\u8bd5\u3001\u804c\u6daf\u3001\u65b0\u52a0\u5761\u751f\u6d3b\u5206\u4eab - ExplainThis" : "zh-hant" === t ? "\u8edf\u9ad4\u5de5\u7a0b\u5e2b\u9762\u8a66\u3001\u8077\u6daf\u3001\u65b0\u52a0\u5761\u751f\u6d3b\u5206\u4eab - ExplainThis" : "Interview Preps for Software Engineers - ExplainThis"
            }
        },
        622: function(t, o, e) {
            "use strict";
            e.r(o);
            var a = e(7320),
                n = e(1720),
                s = e(3525),
                l = e(8825),
                c = e(4116),
                i = e(7175),
                r = e(9354),
                h = e(2068),
                m = e(5102),
                p = e(6911),
                E = e(8641),
                g = e(5355),
                d = e(2490),
                f = e(4332),
                u = e(3711),
                y = e(4576),
                T = e(5360),
                L = e(345),
                w = e(5742),
                U = e(5392),
                R = e(5326),
                b = e(1947),
                z = e(1210),
                x = e(894),
                A = e(2771),
                N = e(5675),
                _ = e(9038);
            o.default = function() {
                var t = function(t) {
                        m.current.querySelectorAll("#first-category-section")[t].scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                            inline: "start"
                        })
                    },
                    o = function(t) {
                        p.current.querySelectorAll("#second-category-section")[t].scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                            inline: "start"
                        })
                    },
                    e = (0, n.useState)(!1),
                    i = e[0],
                    r = e[1],
                    h = function() {
                        r((function(t) {
                            return document.body.style.overflow = t ? "auto" : "hidden", !t
                        }))
                    },
                    m = (0, n.useRef)(null),
                    p = (0, n.useRef)(null);
                return (0, a.BX)("div", {
                    className: "h-screen max-h-screen overflow-hidden bg-[#f9f9f9]",
                    children: [(0, a.tZ)(_.T, {
                        title: "AI \u5de5\u5177\u767e\u5b9d\u7bb1",
                        description: "\u6700\u5b9e\u7528\u3001\u6700\u70ed\u95e8\u7684 AI \u5de5\u5177\uff0c\u5e2e\u52a9\u4f60\u5728\u5de5\u4f5c\u4e0e\u5b66\u4e60\u4e0a\u66f4\u8f7b\u677e\u6709\u6548\u7387",
                        pageImage: "https://explainthis.s3-ap-northeast-1.amazonaws.com/3be3106d8ae14f95bd271f5505e780fb.png"
                    }), (0, a.tZ)("div", {
                        className: "p-4 px-6 bg-white border",
                        children: (0, a.tZ)("div", {
                            className: "flex items-center justify-between",
                            children: (0, a.BX)("div", {
                                className: "flex items-center justify-between w-full",
                                children: [(0, a.BX)("div", {
                                    className: "flex gap-x-2 cursor-default",
                                    children: [(0, a.tZ)(A.Z, {}), (0, a.tZ)("h1", {
                                        className: "text-xl font-semibold",
                                        children: "AI \u5de5\u5177\u767e\u5b9d\u7bb1"
                                    })]
                                }), (0, a.BX)("div", {
                                    className: "flex gap-x-4 justify-center items-center",
                                    children: [(0, a.tZ)(s.Z, {
                                        href: "https://www.buymeacoffee.com/explainthis",
                                        className: "flex items-center px-2 py-2 text-white w-8 justify-center",
                                        children: (0, a.tZ)(N.default, {
                                            src: "/img/bmc-logo-no-background.png",
                                            height: 18,
                                            width: 18,
                                            alt: "bmc"
                                        })
                                    }), (0, a.tZ)(s.Z, {
                                        className: "text-xl flex justify-center items-center",
                                        href: "https://github.com/TheExplainthis/AI-Products-All-In-One",
                                        children: (0, a.tZ)(c.Z, {})
                                    }), (0, a.tZ)("button", {
                                        className: "lg:hidden focus:outline-none -mt-[5px]",
                                        onClick: h,
                                        "aria-label": "Toggle menu",
                                        children: (0, a.tZ)("span", {
                                            className: "text-2xl",
                                            children: "\u2630"
                                        })
                                    })]
                                })]
                            })
                        })
                    }), (0, a.tZ)("div", {
                        className: "lg:hidden",
                        children: (0, a.BX)("div", {
                            className: "fixed w-full h-full py-10 top-14 right-0 bg-white transform ease-in-out duration-300  ".concat(i ? "translate-x-0" : "translate-x-full"),
                            children: [(0, a.tZ)("button", {
                                type: "button",
                                className: "w-7 h-7 py-1 mt-0.5 ml-1 mr-1 rounded right-2 top-4 absolute",
                                "aria-label": "Toggle Menu",
                                onClick: h,
                                children: (0, a.tZ)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 20 20",
                                    fill: "currentColor",
                                    className: "text-gray-900",
                                    children: (0, a.tZ)("path", {
                                        fillRule: "evenodd",
                                        d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                                        clipRule: "evenodd"
                                    })
                                })
                            }), (0, a.BX)("nav", {
                                className: "fixed h-[calc(100vh-120px)] overflow-y-auto px-10 flex flex-col gap-y-4 w-full",
                                children: [(0, a.tZ)("ul", {
                                    className: "flex flex-col border-b pb-4",
                                    children: D.map((function(o, e) {
                                        return (0, a.BX)("li", {
                                            onClick: function() {
                                                h(), t(e)
                                            },
                                            className: "hover:text-orange-500 hover:bg-orange-50 rounded-xl cursor-pointer flex items-center gap-x-3 px-4 py-1",
                                            children: [o.icon, (0, a.tZ)("div", {
                                                children: o.category
                                            })]
                                        }, e)
                                    }))
                                }), (0, a.tZ)("ul", {
                                    className: "flex flex-col h-[calc(100vh-250px)] overflow-y-auto",
                                    children: S.map((function(t, e) {
                                        return (0, a.BX)("li", {
                                            onClick: function() {
                                                h(), o(e)
                                            },
                                            className: "hover:text-orange-500 text-gray-700 hover:bg-orange-50 rounded-xl cursor-pointer flex items-center gap-x-3 px-4 py-1 justify-between",
                                            children: [(0, a.tZ)("div", {
                                                children: t.category
                                            }), (0, a.tZ)("div", {
                                                className: "text-sm",
                                                children: t.tools.length
                                            })]
                                        }, t.category)
                                    }))
                                })]
                            })]
                        })
                    }), (0, a.BX)("div", {
                        className: "flex overflow-hidden",
                        children: [(0, a.tZ)("div", {
                            className: "hidden lg:block sm:w-[250px] sm:min-w-[250px] sm:max-w-[250px] bg-white rounded-lg m-4 border border-gray-200 p-2 h-[calc(100vh-100px)]",
                            children: (0, a.BX)("div", {
                                className: "flex-1 flex flex-col space-y-2 text-md",
                                children: [(0, a.tZ)("ul", {
                                    className: "flex flex-col border-b pb-2",
                                    children: D.map((function(o, e) {
                                        return (0, a.BX)("li", {
                                            onClick: function() {
                                                return t(e)
                                            },
                                            className: "hover:text-orange-500 text-gray-700 hover:bg-orange-50 rounded-xl cursor-pointer flex items-center gap-x-3 px-4 py-1.5",
                                            children: [o.icon, (0, a.tZ)("div", {
                                                children: o.category
                                            })]
                                        }, e)
                                    }))
                                }), (0, a.tZ)("ul", {
                                    className: "flex flex-col h-[calc(100vh-240px)] overflow-y-auto",
                                    children: S.map((function(t, e) {
                                        return (0, a.BX)("li", {
                                            onClick: function() {
                                                return o(e)
                                            },
                                            className: "hover:text-orange-500 text-gray-700 hover:bg-orange-50 rounded-xl cursor-pointer flex items-center gap-x-3 px-4 py-1.5 justify-between",
                                            children: [(0, a.tZ)("div", {
                                                children: t.category
                                            }), (0, a.tZ)("div", {
                                                className: "text-sm",
                                                children: t.tools.length
                                            })]
                                        }, t.category)
                                    }))
                                })]
                            })
                        }), (0, a.BX)("div", {
                            className: "flex-1 flex flex-col overflow-y-auto h-[calc(100vh-60px)] pr-4",
                            children: [(0, a.BX)("div", {
                                className: "flex flex-col flex-1 p-4 gap-y-6 mb-20",
                                children: [(0, a.BX)("div", {
                                    className: "bg-[#1d3557] p-8 rounded-lg text-white",
                                    children: [(0, a.tZ)("h2", {
                                        className: "text-xl mb-2",
                                        children: "\u6700\u5b9e\u7528\u3001\u6700\u70ed\u95e8\u7684 AI \u5de5\u5177\uff0c\u5e2e\u52a9\u4f60\u5728\u5de5\u4f5c\u4e0e\u5b66\u4e60\u4e0a\u66f4\u8f7b\u677e\u6709\u6548\u7387"
                                    }), (0, a.tZ)("span", {
                                        className: "text-gray-300",
                                        children: "\u5728\u7f51\u8def\u4e0a\u4f17\u591a AI \u4e0e ChatGPT \u5de5\u5177\u4e2d\uff0c\u6211\u4eec\u4eb2\u81ea\u8bd5\u7528\u5e76\u6311\u9009\u4e86\u6700\u6709\u6709\u7528\u7684\uff0c\u5206\u6210 20 \u5927\u7c7b\u522b\uff0c\u8ba9\u4f60\u8f7b\u677e\u627e\u5230\u4f60\u6240\u9700\u7684 AI \u5de5\u5177"
                                    })]
                                }), (0, a.tZ)("div", {
                                    ref: m,
                                    children: D.map((function(t, o) {
                                        return (0, a.BX)("div", {
                                            children: [(0, a.tZ)("div", {
                                                id: "first-category-section",
                                                className: "text-xl font-semibold my-4 tracking-wide",
                                                children: t.category
                                            }), (0, a.tZ)("div", {
                                                className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4",
                                                children: t.tools.map((function(t, o) {
                                                    var e = t.toolName,
                                                        n = t.toolDesc,
                                                        c = t.toolImg,
                                                        i = t.toolLink,
                                                        r = t.zh_hant,
                                                        h = t.zh_hans,
                                                        m = t.free,
                                                        p = t.icon,
                                                        E = t.customClass,
                                                        g = t.waitList,
                                                        d = t.pay,
                                                        f = t.en;
                                                    return (0, a.BX)(s.Z, {
                                                        className: "border flex flex-col bg-white rounded-lg hover:border-orange-500 p-6 pt-4",
                                                        href: i,
                                                        children: [(0, a.BX)("div", {
                                                            className: "flex",
                                                            children: [(0, a.tZ)("div", {
                                                                className: "flex mr-4",
                                                                children: c ? (0, a.tZ)("div", {
                                                                    className: "flex items-center",
                                                                    children: (0, a.tZ)("img", {
                                                                        src: c,
                                                                        className: "w-8 h-8"
                                                                    })
                                                                }) : (0, a.tZ)("div", {
                                                                    className: "text-2xl ".concat(E, " flex items-center"),
                                                                    children: p ? (0, a.tZ)(x.JO, {
                                                                        as: p
                                                                    }) : (0, a.tZ)(l.Z, {})
                                                                })
                                                            }), (0, a.tZ)("div", {
                                                                className: "font-semibold",
                                                                children: e
                                                            })]
                                                        }), (0, a.BX)("div", {
                                                            className: "text-gray-700 flex-1 justify-between flex flex-col mt-4",
                                                            children: [(0, a.tZ)("div", {
                                                                className: "text-sm",
                                                                children: n
                                                            }), (0, a.BX)("div", {
                                                                className: "flex gap-x-2 items-end justify-end flex-1 mt-2",
                                                                children: ["TRUE" === g && (0, a.tZ)("div", {
                                                                    className: "border border-orange-500 bg-orange-100 text-orange-500 text-xs p-1 rounded",
                                                                    children: "waitlist"
                                                                }), "TRUE" === m && (0, a.tZ)("div", {
                                                                    className: "bg-red-400 text-white text-xs p-1 rounded",
                                                                    children: "\u514d\u8d39"
                                                                }), "TRUE" === d && (0, a.tZ)("div", {
                                                                    className: "bg-rose-800 text-white text-xs p-1 rounded",
                                                                    children: "\u4ed8\u8d39"
                                                                }), ("TRUE" === r || "TRUE" === h) && (0, a.tZ)("div", {
                                                                    className: "bg-blue-400 text-white text-xs p-1 rounded",
                                                                    children: "\u4e2d\u6587"
                                                                }), "TRUE" === f && (0, a.tZ)("div", {
                                                                    className: "bg-indigo-400 text-white text-xs p-1 rounded",
                                                                    children: "\u82f1\u6587"
                                                                })]
                                                            })]
                                                        })]
                                                    }, o)
                                                }))
                                            })]
                                        }, o)
                                    }))
                                }), (0, a.tZ)("div", {
                                    ref: p,
                                    children: S.map((function(t, o) {
                                        return (0, a.BX)("div", {
                                            children: [(0, a.tZ)("div", {
                                                id: "second-category-section",
                                                className: "text-xl font-semibold my-4 tracking-wide",
                                                children: t.category
                                            }), (0, a.tZ)("div", {
                                                className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4",
                                                children: t.tools.map((function(t, o) {
                                                    var e = t.toolName,
                                                        n = t.toolDesc,
                                                        c = t.toolImg,
                                                        i = t.toolLink,
                                                        r = t.zh_hant,
                                                        h = t.zh_hans,
                                                        m = t.free,
                                                        p = t.icon,
                                                        E = t.customClass,
                                                        g = t.waitList,
                                                        d = t.en,
                                                        f = t.pay;
                                                    return (0, a.BX)(s.Z, {
                                                        className: "border flex flex-col bg-white rounded-lg hover:border-orange-500 p-6 pt-4",
                                                        href: i,
                                                        children: [(0, a.BX)("div", {
                                                            className: "flex",
                                                            children: [(0, a.tZ)("div", {
                                                                className: "flex mr-4",
                                                                children: c ? (0, a.tZ)("div", {
                                                                    className: "flex items-center",
                                                                    children: (0, a.tZ)("img", {
                                                                        src: c,
                                                                        className: "w-8 h-8"
                                                                    })
                                                                }) : (0, a.tZ)("div", {
                                                                    className: "text-2xl ".concat(E, " flex items-center"),
                                                                    children: p ? (0, a.tZ)(x.JO, {
                                                                        as: p
                                                                    }) : (0, a.tZ)(l.Z, {})
                                                                })
                                                            }), (0, a.tZ)("div", {
                                                                className: "font-semibold",
                                                                children: e
                                                            })]
                                                        }), (0, a.BX)("div", {
                                                            className: "text-gray-700 flex-1 justify-between flex flex-col mt-4",
                                                            children: [(0, a.tZ)("div", {
                                                                className: "text-sm",
                                                                children: n
                                                            }), (0, a.BX)("div", {
                                                                className: "flex gap-x-2 items-end justify-end flex-1 mt-2",
                                                                children: ["TRUE" === g && (0, a.tZ)("div", {
                                                                    className: "border border-orange-500 bg-orange-100 text-orange-500 text-xs p-1 rounded",
                                                                    children: "waitlist"
                                                                }), "TRUE" === m && (0, a.tZ)("div", {
                                                                    className: "bg-red-400 text-white text-xs p-1 rounded",
                                                                    children: "\u514d\u8d39"
                                                                }), "TRUE" === f && (0, a.tZ)("div", {
                                                                    className: "bg-rose-800 text-white text-xs p-1 rounded",
                                                                    children: "\u4ed8\u8d39"
                                                                }), ("TRUE" === r || "TRUE" === h) && (0, a.tZ)("div", {
                                                                    className: "bg-blue-400 text-white text-xs p-1 rounded",
                                                                    children: "\u4e2d\u6587"
                                                                }), "TRUE" === d && (0, a.tZ)("div", {
                                                                    className: "bg-indigo-400 text-white text-xs p-1 rounded",
                                                                    children: "\u82f1\u6587"
                                                                })]
                                                            })]
                                                        })]
                                                    }, o)
                                                }))
                                            })]
                                        }, o)
                                    }))
                                })]
                            }), (0, a.tZ)("div", {
                                className: "bg-gray-800 text-white p-4 rounded-tl",
                                children: (0, a.BX)("div", {
                                    className: "flex justify-between",
                                    children: [(0, a.BX)("div", {
                                        className: "flex",
                                        children: [(0, a.tZ)("div", {
                                            className: "mr-5",
                                            children: (0, a.tZ)(A.Z, {})
                                        }), (0, a.tZ)("div", {
                                            className: "text-xs self-center",
                                            children: (0, a.BX)(s.Z, {
                                                href: "/zh-hans",
                                                children: ["\xa9 ".concat((new Date).getFullYear()), " explainthis.io"]
                                            })
                                        })]
                                    }), (0, a.tZ)(s.Z, {
                                        href: "https://www.buymeacoffee.com/explainthis",
                                        className: "flex items-center px-2 py-2 text-white transition-colors duration-150 bg-orange-400 border border-transparent rounded-full shadow focus:outline-none focus:shadow-outline-blue hover:bg-orange-500 w-8",
                                        children: (0, a.tZ)(N.default, {
                                            src: "/img/bmc-logo-no-background.png",
                                            height: 18,
                                            width: 18,
                                            alt: "bmc"
                                        })
                                    })]
                                })
                            })]
                        })]
                    })]
                })
            };
            var S = [{
                    category: "ChatGPT \u5e94\u7528",
                    tools: [{
                        category: "ChatGPT \u5e94\u7528",
                        toolName: "PromptPerfect",
                        toolDesc: "\u4f18\u5316\u8f93\u5165\u7684\u63d0\u793a\u8bcd (prompt)",
                        toolLink: "https://promptperfect.jina.ai/",
                        free: "TRUE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "TRUE",
                        zh_hans: "TRUE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/8ca1f2023cf54fcc86101e1d3a419cac.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: "",
                        waitList: ""
                    }, {
                        category: "ChatGPT \u5e94\u7528",
                        toolName: "ChatGPT plugins",
                        toolDesc: "ChatGPT \u63d2\u4ef6\u8ba9 ChatGPT \u4e32\u63a5\u4e0d\u540c\u7684\u670d\u52a1\u6765\u589e\u5f3a ChatGPT \u7684\u529f\u80fd\uff0c\u4f8b\u5982\uff1a\u6d4f\u89c8\u7f51\u8def\u6700\u65b0\u8d44\u8baf\u3001\u8bfb\u53d6\u6587\u4ef6\u6863\u6848\u3001\u8ba2\u8d2d\u673a\u7968\u3001\u70b9\u9910\u7b49",
                        toolLink: "https://openai.com/blog/chatgpt-plugins",
                        free: "",
                        pay: "",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/4d3f073e41314323ac91409b6e858322.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: "",
                        waitList: "TRUE"
                    }, {
                        category: "ChatGPT \u5e94\u7528",
                        toolName: "ChatGPT Prompt Genius",
                        toolDesc: "\u8fd9\u662f\u4e00\u6b3e\u514d\u8d39\u3001\u5f00\u6e90\u7684\u6d4f\u89c8\u5668\u6269\u5c55\u7a0b\u5f0f\uff0c\u53ef\u5e2e\u52a9\u4f60\u53d1\u73b0\u3001\u5206\u4eab\u3001\u6c47\u5165\u548c\u4f7f\u7528\u6700\u4f73\u7684 ChatGPT prompts\uff0c\u5e76\u53ef\u5c06\u60a8\u7684\u804a\u5929\u8bb0\u5f55\u672c\u5730\u4fdd\u5b58\uff0c\u4ee5\u4fbf\u65e5\u540e\u67e5\u770b\u3002 ",
                        toolLink: "https://chrome.google.com/webstore/detail/chatgpt-prompt-genius/jjdnakkfjnnbbckhifcfchagnpofjffo",
                        free: "",
                        pay: "",
                        en: "",
                        zh_hant: "",
                        zh_hans: "",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/28015ee02e124a82920d34b4b40e9cd4.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "ChatGPT \u5e94\u7528",
                        toolName: "WebChatGPT\uff1a\u6709\u7f51\u8def\u5b58\u53d6\u529f\u80fd\u7684 ChatGPT",
                        toolDesc: "\u8fd9\u4e2a\u514d\u8d39\u7684\u6269\u5145\u5957\u4ef6\u5c06\u76f8\u5173\u7684\u7f51\u7edc\u7ed3\u679c\u6dfb\u52a0\u5230\u60a8\u5bf9 ChatGPT \u7684\u63d0\u793a\u4e2d\uff0c\u4ee5\u83b7\u5f97\u66f4\u51c6\u786e\u548c\u6700\u65b0\u7684\u5bf9\u8bdd\u3002 ",
                        toolLink: "https://chrome.google.com/webstore/detail/webchatgpt-chatgpt-with-i/lpfemeioodjbpieminkklglpmhlngfcn",
                        free: "TRUE",
                        pay: "FALSE",
                        en: "TRUE",
                        zh_hant: "TRUE",
                        zh_hans: "TRUE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/41bb8bc34e8244e6975a9b62406fdefc.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }]
                }, {
                    category: "\u6587\u4ef6\u5904\u7406",
                    tools: [{
                        category: "\u6587\u4ef6\u5904\u7406",
                        toolName: "ChatExcel",
                        toolDesc: "\u80fd\u591f\u6c47\u5165 Excel\uff0c\u5e76\u4e14\u5229\u7528 Prompt \u76f4\u63a5\u7f16\u8f91 Excel",
                        toolLink: "https://chatexcel.com/",
                        free: "TRUE",
                        pay: "FALSE",
                        en: "TRUE",
                        zh_hant: "TRUE",
                        zh_hans: "TRUE",
                        toolImg: "",
                        icon: i.Z,
                        customClass: "text-green-600",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u6587\u4ef6\u5904\u7406",
                        toolName: "Excelformulabot",
                        toolDesc: "\u5229\u7528 ChatGPT \u751f\u6210 Excel \u516c\u5f0f",
                        toolLink: "https://excelformulabot.com/",
                        free: "TRUE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "TRUE",
                        toolImg: "",
                        icon: i.Z,
                        customClass: "text-green-600",
                        toolEnName: "Excelformulabot",
                        toolEnDesc: "Translate text instructions to Excel or Google Sheets formula."
                    }, {
                        category: "\u6587\u4ef6\u5904\u7406",
                        toolName: "ChatPDF",
                        toolDesc: "\u5feb\u901f\u603b\u7ed3 PDF \u5185\u5bb9\uff0c\u5e76\u4e14\u53ef\u4ee5\u518d\u7528\u6307\u4ee4\u4e0e\u4e4b\u5bf9\u8bdd",
                        toolLink: "https://www.chatpdf.com/",
                        free: "TRUE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "",
                        icon: r.Z,
                        customClass: "text-red-500",
                        toolEnName: "ChatPDF",
                        toolEnDesc: ""
                    }]
                }, {
                    category: "\u5de5\u4f5c\u4f18\u5316",
                    tools: [{
                        category: "\u5de5\u4f5c\u4f18\u5316",
                        toolName: "Notion AI",
                        toolDesc: "\u6700\u5b8c\u6574\u7684\u6587\u5b57\u7b14\u8bb0 AI \u5de5\u5177",
                        toolLink: "https://affiliate.notion.so/pjib4ixelobm",
                        free: "FALSE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/d7b5bfd46ef4435fbd5791b3fb1e8cb6.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u5de5\u4f5c\u4f18\u5316",
                        toolName: "\u5468\u62a5\u751f\u6210\u5668",
                        toolDesc: "\u8f93\u5165\u5b8c\u6210\u7684\u4e8b\u9879\uff0c\u81ea\u52a8\u4ea7\u751f\u5468\u62a5",
                        toolLink: "https://weeklyreport.avemaria.fun/zh",
                        free: "TRUE",
                        pay: "FALSE",
                        en: "FALSE",
                        zh_hant: "FALSE",
                        zh_hans: "TRUE",
                        toolImg: "",
                        icon: h.Z,
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u5de5\u4f5c\u4f18\u5316",
                        toolName: "Fireflies",
                        toolDesc: "\u53ef\u5c06\u4f1a\u8bae\u7eaa\u5f55\u7684\u5185\u5bb9\u6216\u662f\u8bfe\u5802\u4e0a\u7684\u5185\u5bb9\uff0c\u5f55\u97f3\u3001\u8f6c\u4e3a\u6587\u5b57\u6863\uff0c\u8fd8\u6709\u603b\u7ed3\u3001\u8bb0\u7b14\u8bb0\u7b49\u529f\u80fd\u3002 ",
                        toolLink: "https://fireflies.ai/",
                        free: "TRUE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/81002b19f16c4b8ba7be808bab8a7230.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u5de5\u4f5c\u4f18\u5316",
                        toolName: "mem",
                        toolDesc: "\u81ea\u52a8\u5316\u6574\u5408\u4f60\u6240\u6709\u7684\u5de5\u5177",
                        toolLink: "https://get.mem.ai/",
                        free: "TRUE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/2e27b2976d24480b8744f353709c5a7a.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u5de5\u4f5c\u4f18\u5316",
                        toolName: "Otter",
                        toolDesc: "\u4f1a\u8bae\u5f55\u97f3\u3001\u91cd\u70b9\u6574\u7406\u3001\u81ea\u52a8\u751f\u6210\u9010\u5b57\u6863",
                        toolLink: "https://otter.ai/",
                        free: "TRUE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "",
                        icon: m.Z,
                        customClass: "text-blue-500",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u5de5\u4f5c\u4f18\u5316",
                        toolName: "genei",
                        toolDesc: "\u662f\u4e00\u63d0\u5347\u751f\u4ea7\u529b\u7684\u5de5\u5177\uff0c\u53ea\u9700\u63d0\u51fa\u95ee\u9898\uff0cGenei\u7684AI \u5c31\u80fd\u4e3a\u7528\u6237\u627e\u5230\u7b54\u6848\uff0c\u8fd8\u63d0\u4f9b\u4e86 AI \u5f3a\u5316\u7684\u6458\u8981\u548c\u5173\u952e\u8bcd\u63d0\u53d6\u529f\u80fd\uff0c\u5e2e\u52a9\u7528\u6237\u66f4\u5feb\u5730\u627e\u5230\u5173\u952e\u4fe1\u606f\u3002 ",
                        toolLink: "https://www.genei.io/",
                        free: "FALSE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "",
                        icon: p.Z,
                        customClass: "text-gray-600",
                        toolEnName: "",
                        toolEnDesc: ""
                    }]
                }, {
                    category: "Email \u52a9\u624b",
                    tools: [{
                        category: "Email \u52a9\u624b",
                        toolName: "Hoppy Copy",
                        toolDesc: "\u900f\u8fc7 AI \u5feb\u901f\u751f\u6210 Email \u5185\u5bb9\uff0c\u5e76\u4e14\u63d0\u4f9b\u5404\u7c7b\u6837\u677f\uff0c\u4f8b\u5982\uff1a\u884c\u9500\u6d3b\u52a8\u3001\u7535\u5b50\u62a5\u7b49\u3002 ",
                        toolLink: "https://www.hoppycopy.co/",
                        free: "FALSE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/48521e431c214934921a1f59d15cf47b.png",
                        icon: E.Z,
                        customClass: "text-red-700",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "Email \u52a9\u624b",
                        toolName: "Warmest.ai",
                        toolDesc: "\u5f53\u6536\u5230\u7535\u5b50\u90ae\u4ef6\u65f6\uff0cWarmest \u4f1a\u6536\u5230\u901a\u77e5\u5e76\u5f00\u59cb\u51c6\u5907\u8349\u7a3f\uff0c\u4f7f\u7528\u8005\u53ea\u9700\u5ba1\u67e5\u5e76\u7f16\u8f91\u540e\u5373\u53ef\u53d1\u9001",
                        toolLink: "https://www.warmest.ai/",
                        free: "FALSE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "",
                        icon: E.Z,
                        customClass: "text-red-600",
                        toolEnName: "",
                        toolEnDesc: ""
                    }]
                }, {
                    category: "\u6c42\u804c\u9762\u8bd5",
                    tools: [{
                        category: "\u6c42\u804c\u9762\u8bd5",
                        toolName: "BehavAI - \u5e38\u89c1\u9762\u8bd5\u9898\u76ee\u56de\u7b54\u4ea7\u751f\u5668",
                        toolDesc: "\u57fa\u4e8e ChatGPT \u4e0e\u9762\u8bd5\u4e13\u5bb6\u7cbe\u70bc\u8fc7\u7684\u8bed\u53e5\uff0c\u6839\u636e\u4f60\u7684\u7ecf\u9a8c\u4ea7\u751f\u9762\u8bd5\u56de\u7b54",
                        toolLink: "https://www.explainthis.io/zh-hans/tools/behav-ai",
                        free: "TRUE",
                        pay: "FALSE",
                        en: "TRUE",
                        zh_hant: "TRUE",
                        zh_hans: "TRUE",
                        toolImg: "",
                        icon: g.Z,
                        customClass: "text-cyan-600",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u6c42\u804c\u9762\u8bd5",
                        toolName: "BioGenAI - LinkedIn \u4e2a\u4eba\u7b80\u4ecb\u4ea7\u751f\u5668",
                        toolDesc: "LinkedIn \u4e2a\u4eba\u7b80\u4ecb\u4ea7\u751f\u5668",
                        toolLink: "https://www.explainthis.io/zh-hans/tools/biogen-ai",
                        free: "TRUE",
                        pay: "FALSE",
                        en: "TRUE",
                        zh_hant: "TRUE",
                        zh_hans: "TRUE",
                        toolImg: "",
                        icon: d.Z,
                        customClass: "text-blue-600",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u6c42\u804c\u9762\u8bd5",
                        toolName: "CoffeeChatAI - \u6c42\u804c\u7ea6\u559d\u5496\u5561\u9080\u8bf7\u4ea7\u751f\u5668",
                        toolDesc: "CoffeeChatAI \u5e2e\u4f60\u5199\u9080\u8bf7\u8baf\u606f",
                        toolLink: "https://www.explainthis.io/zh-hans/tools/coffeechat-ai",
                        free: "TRUE",
                        pay: "FALSE",
                        en: "TRUE",
                        zh_hant: "TRUE",
                        zh_hans: "TRUE",
                        toolImg: "",
                        icon: f.Z,
                        customClass: "text-yellow-300",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u6c42\u804c\u9762\u8bd5",
                        toolName: "CovLetterAI \u2014 \u6c42\u804c\u4fe1\u4ea7\u751f\u5668",
                        toolDesc: "\u900f\u8fc7\u751f\u6210\u5f0f AI\uff0c\u5feb\u901f\u534f\u52a9\u4f60\u5ba2\u5236\u5316\u4e0d\u540c\u516c\u53f8\u7684\u6c42\u804c\u4fe1",
                        toolLink: "https://www.explainthis.io/zh-hans/tools/covletter-ai",
                        free: "TRUE",
                        pay: "FALSE",
                        en: "TRUE",
                        zh_hant: "TRUE",
                        zh_hans: "TRUE",
                        toolImg: "",
                        icon: u.Z,
                        customClass: "text-orange-500",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u6c42\u804c\u9762\u8bd5",
                        toolName: "IntroAI \u2014 \u81ea\u6211\u4ecb\u7ecd\u4ea7\u751f\u5668",
                        toolDesc: "IntroAI \u6765\u5e2e\u4f60\u51c6\u5907\u81ea\u6211\u4ecb\u7ecd",
                        toolLink: "https://www.explainthis.io/zh-hans/tools/intro-ai",
                        free: "TRUE",
                        pay: "FALSE",
                        en: "TRUE",
                        zh_hant: "TRUE",
                        zh_hans: "TRUE",
                        toolImg: "",
                        icon: y.Z,
                        customClass: "text-violet-500",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u6c42\u804c\u9762\u8bd5",
                        toolName: "RecommAI \u2014 \u8ba9 AI \u5e2e\u4f60\u5199\u63a8\u8350\u4fe1",
                        toolDesc: "\u53ea\u9700\u8f93\u5165\u63a8\u8350\u8981\u70b9\uff0c\u7531 AI \u76f4\u63a5\u5e2e\u4f60\u5b8c\u6210\u63a8\u8350\u4fe1",
                        toolLink: "https://www.explainthis.io/zh-hans/tools/recomm-ai",
                        free: "TRUE",
                        pay: "FALSE",
                        en: "TRUE",
                        zh_hant: "TRUE",
                        zh_hans: "TRUE",
                        toolImg: "",
                        icon: T.Z,
                        customClass: "text-lime-500",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u6c42\u804c\u9762\u8bd5",
                        toolName: "ResignAI \u2014 \u79bb\u804c\u4fe1\u4ea7\u751f\u5668",
                        toolDesc: "ResignAI \u5e2e\u4f60\u5199\u51fa\u4e00\u5c01\u4f53\u9762\u4e14\u4e0d\u5931\u4e13\u4e1a\u7684\u79bb\u804c\u4fe1",
                        toolLink: "https://www.explainthis.io/zh-hans/tools/resign-ai",
                        free: "TRUE",
                        pay: "FALSE",
                        en: "TRUE",
                        zh_hant: "TRUE",
                        zh_hans: "TRUE",
                        toolImg: "",
                        icon: L.Z,
                        customClass: "text-zinc-500",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u6c42\u804c\u9762\u8bd5",
                        toolName: "ResumeAI - \u82f1\u6587\u5c65\u5386\u4fee\u6539",
                        toolDesc: "AI \u82f1\u6587\u5c65\u5386\u4fee\u6539\u5de5\u5177",
                        toolLink: "https://www.explainthis.io/zh-hans/tools/resume-ai",
                        free: "TRUE",
                        pay: "FALSE",
                        en: "TRUE",
                        zh_hant: "TRUE",
                        zh_hans: "TRUE",
                        toolImg: "",
                        icon: w.Z,
                        customClass: "text-amber-500",
                        toolEnName: "",
                        toolEnDesc: ""
                    }]
                }, {
                    category: "\u5199\u4f5c\u5de5\u5177",
                    tools: [{
                        category: "\u5199\u4f5c\u5de5\u5177",
                        toolName: "Jenni",
                        toolDesc: "AI \u5199\u4f5c\u8f85\u52a9\u5de5\u5177\uff0c\u62e5\u6709\u5e2e\u52a9\u5b8c\u6210\u6bb5\u843d\u3001\u5ba2\u5236\u5316\u8bed\u8c03\u3001\u91cd\u65b0\u7f16\u5199\u7b49\u529f\u80fd\u3002 ",
                        toolLink: "https://jenni.ai/",
                        free: "FALSE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u5199\u4f5c\u5de5\u5177",
                        toolName: "Rytr",
                        toolDesc: "Rytr \u662f\u4e00\u4e2a AI \u5199\u4f5c\u52a9\u624b\uff0c\u53ef\u4ee5\u7528\u4e8e Email\u3001\u90e8\u843d\u683c\u3001\u793e\u7fa4\u5a92\u4f53\u6587\u7ae0\u7b49",
                        toolLink: "https://rytr.me/",
                        free: "TRUE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/bae1210a332f404783b2526baa454085.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u5199\u4f5c\u5de5\u5177",
                        toolName: "Writesonic",
                        toolDesc: "\u7528\u4e8e\u5185\u5bb9\u521b\u4f5c\u3001\u5305\u62ec\u5199\u6587\u7ae0\u3001\u90e8\u843d\u683c\u7684 AI \u5de5\u5177",
                        toolLink: "https://writesonic.com/",
                        free: "TRUE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/847ec6fd9d874118b71297132aa953a4.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u5199\u4f5c\u5de5\u5177",
                        toolName: "Deep L Write",
                        toolDesc: "\u82f1\u6587\u3001\u5fb7\u6587\u5199\u4f5c\u5de5\u5177\uff0c\u53ef\u4ee5\u53ca\u65f6\u4fee\u6b63\u5199\u4f5c\u9519\u8bef\u3001\u6539\u5199\u53e5\u5b50\u3002 ",
                        toolLink: "https://www.deepl.com/write",
                        free: "TRUE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "TRUE",
                        zh_hans: "TRUE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/1f0d45de406c40f8abc03aa90e4824ae.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u5199\u4f5c\u5de5\u5177",
                        toolName: "quillbot",
                        toolDesc: "\u4f7f\u7528 QuillBot \u6539\u5199\uff0c\u6709\u4e24\u79cd\u514d\u8d39\u6a21\u5f0f\u548c\u4e94\u79cd\u9ad8\u7ea7\u6a21\u5f0f\u53ef\u4f9b\u9009\u62e9\uff0c\u53ef\u4ee5\u63d0\u9ad8\u6587\u7ae0\u7684\u6d41\u7545\u5ea6\u3001\u4f7f\u7528\u9002\u5f53\u7684\u8bcd\u6c47\u3001\u8bed\u6c14\u548c\u98ce\u683c\u3002 ",
                        toolLink: "https://quillbot.com/",
                        free: "TRUE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/825571547ba145fa8d37c7cd2e6602d5.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u5199\u4f5c\u5de5\u5177",
                        toolName: "Wordtune",
                        toolDesc: "\u53ef\u7528\u4e8e\u91cd\u65b0\u7f16\u5199\u3001\u6539\u8ff0\u548c\u6539\u5199\u7528\u6237\u7684\u5199\u4f5c\uff0c\u8fd8\u53ef\u7528\u4e8e\u6587\u7ae0\u3001\u5b66\u672f\u8bba\u6587\u3001\u7535\u5b50\u90ae\u4ef6\u548c\u4efb\u4f55\u5176\u4ed6\u5728\u7ebf\u5185\u5bb9\u3002 ",
                        toolLink: "https://www.wordtune.com/",
                        free: "TRUE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/d90796843b2a4e1aa860b2c54ce3c3be.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }]
                }, {
                    category: "\u6587\u6848\u751f\u6210",
                    tools: [{
                        category: "\u6587\u6848\u751f\u6210",
                        toolName: "Friday AI",
                        toolDesc: "AI \u6587\u6848\u5185\u5bb9\u751f\u6210\u5de5\u5177\uff0c\u5e2e\u52a9\u4f60\u4ea7\u751f\u5404\u7c7b\u6587\u6848\u548c\u6587\u7ae0",
                        toolLink: "https://heyfriday.cn/home",
                        free: "TRUE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "TRUE",
                        zh_hans: "TRUE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/5d1e910af05a46de91df38aeb4a7ba4a.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u6587\u6848\u751f\u6210",
                        toolName: "piggy",
                        toolDesc: "\u624b\u673a\u56fe\u6587\u81ea\u52a8\u751f\u6210\u5668",
                        toolLink: "https://piggy.to/magic",
                        free: "TRUE",
                        pay: "FALSE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u6587\u6848\u751f\u6210",
                        toolName: "ChatGPT eCommerce Prompts",
                        toolDesc: "\u53ef\u4ee5\u9488\u5bf9\u4ea7\u54c1\u3001\u8282\u65e5\u3001\u7ade\u54c1\u7b49\u751f\u4ea7\u884c\u9500\u76f8\u5173\u6587\u6848",
                        toolLink: "https://www.ecommerceprompts.com/",
                        free: "TRUE",
                        pay: "FALSE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u6587\u6848\u751f\u6210",
                        toolName: "Copy.ai",
                        toolDesc: "\u900f\u8fc7 AI \u6280\u672f\uff0c\u8be5\u5de5\u5177\u80fd\u591f\u534f\u52a9\u4e13\u4e1a\u4eba\u58eb\u66f4\u5feb\u901f\u5730\u64b0\u5199\u90e8\u843d\u683c\u6587\u7ae0\u3001\u521b\u9020\u66f4\u6709\u8bf4\u670d\u529b\u7684\u5e7f\u544a\u6587\u6848\uff0c\u4ee5\u53ca\u66f4\u5438\u5f15\u4eba\u7684\u7535\u5b50\u90ae\u4ef6\u3002 ",
                        toolLink: "https://www.copy.ai/",
                        free: "TRUE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/8006a36edef74963960e9a4899c8b3d3.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u6587\u6848\u751f\u6210",
                        toolName: "Jasper",
                        toolDesc: "\u6587\u6848\u751f\u6210\uff1a\u5305\u542b\u5e7f\u544a\u3001\u793e\u7fa4\u8d34\u6587\u3001Email \u7b49",
                        toolLink: "https://www.jasper.ai/",
                        free: "FALSE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/c4fd6d6626e14eca8a8829e37bd40867.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "Jasper",
                        toolEnDesc: ""
                    }, {
                        category: "\u6587\u6848\u751f\u6210",
                        toolName: "anyword",
                        toolDesc: "\u6587\u6848\u5185\u5bb9\u5206\u6790\u4f18\u5316",
                        toolLink: "https://anyword.com/",
                        free: "FALSE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "",
                        icon: U.Z,
                        customClass: "text-slate-600",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u6587\u6848\u751f\u6210",
                        toolName: "peppertype",
                        toolDesc: "\u63d0\u4f9b\u591a\u79cd\u6837\u672c\uff0c\u518d\u7ed3\u5408 AI \u6280\u672f\uff0c\u8ba9\u4f60\u53ef\u4ee5\u5feb\u901f\u5730\u751f\u6210\u6240\u9700\u7684\u5185\u5bb9",
                        toolLink: "https://www.peppertype.ai/",
                        free: "FALSE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/567ef03406da446d9bb826654c001470.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }]
                }, {
                    category: "PPT \u751f\u6210",
                    tools: [{
                        category: "PPT \u751f\u6210",
                        toolName: "Tome",
                        toolDesc: "\u4f7f\u7528\u56fe\u6587\u751f\u6210\u51fa PPT",
                        toolLink: "https://beta.tome.app/",
                        free: "TRUE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/8e44d4cb6ebb406799cd69a78e17cc17.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "PPT \u751f\u6210",
                        toolName: "Beautiful.ai",
                        toolDesc: "\u7b80\u5355\u8f93\u5165\u6307\u4ee4\uff0c\u5373\u53ef\u751f\u6210\u56fe\u6587\u5e76\u8302\u7684 PPT",
                        toolLink: "http://beautiful.ai/",
                        free: "FALSE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }]
                }, {
                    category: "\u91cd\u70b9\u6574\u7406",
                    tools: [{
                        category: "\u91cd\u70b9\u6574\u7406",
                        toolName: "SUMMARI",
                        toolDesc: "\u63d0\u4f9b\u4e13\u95e8\u603b\u7ed3\u7684 API \u529f\u80fd\uff0c\u8ba9\u5f00\u53d1\u8005\u8f7b\u6613\u4e32\u63a5\u5728\u81ea\u5df1\u7684\u4ea7\u54c1\u4e0a",
                        toolLink: "https://www.summari.com/",
                        free: "FALSE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/4139a9f8373b4e329b90447b3f151cab.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u91cd\u70b9\u6574\u7406",
                        toolName: "TLDR This",
                        toolDesc: "\u8f93\u5165\u7f51\u5740\u6216\u6587\u5b57\uff0c\u5373\u53ef\u5f97\u5230\u6587\u7ae0\u5185\u5bb9\u603b\u7ed3",
                        toolLink: "https://tldrthis.com/",
                        free: "TRUE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/2dfccf1484b54b00a6882bc73cd55c78.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u91cd\u70b9\u6574\u7406",
                        toolName: "ChatGPT for YouTube",
                        toolDesc: "Chrome \u63d2\u4ef6\u5feb\u901f\u53d6\u5f97 Youtube \u5f71\u7247\u5185\u5bb9",
                        toolLink: "https://chatgpt4youtube.com/",
                        free: "TRUE",
                        pay: "FALSE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "",
                        icon: R.Z,
                        customClass: "text-red-500",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u91cd\u70b9\u6574\u7406",
                        toolName: "Chat Youtube",
                        toolDesc: "\u4f20 Youtube \u8fde\u7ed3\u7ed9\u4ed6\uff0c\u5c31\u80fd\u50cf\u4ed6\u63d0\u95ee\u5f71\u7247\u5185\u5bb9\u3001\u603b\u7ed3\u7b49",
                        toolLink: "https://chatyoutube.com/",
                        free: "TRUE",
                        pay: "FALSE",
                        en: "TRUE",
                        zh_hant: "TRUE",
                        zh_hans: "TRUE",
                        toolImg: "",
                        icon: R.Z,
                        customClass: "text-red-500",
                        toolEnName: "",
                        toolEnDesc: ""
                    }]
                }, {
                    category: "\u56fe\u50cf\u751f\u6210",
                    tools: [{
                        category: "\u56fe\u50cf\u751f\u6210",
                        toolName: "Microsoft Bing Image Creator",
                        toolDesc: "Image Creator \u662f\u4e00\u6b3e\u80fd\u591f\u534f\u52a9\u4f7f\u7528\u8005\u8fd0\u7528 DALL-E \u6280\u672f\u521b\u9020 AI \u5f71\u50cf\u7684\u4ea7\u54c1\u3002\u4f7f\u7528\u8005\u53ea\u9700\u8f93\u5165\u6587\u5b57\u63d0\u793a\uff0cAI \u7cfb\u7edf\u5373\u53ef\u7acb\u5373\u751f\u6210\u4e00\u7ec4\u7b26\u5408\u63d0\u793a\u5185\u5bb9\u7684\u5f71\u50cf",
                        toolLink: "https://www.bing.com/images/create",
                        free: "TRUE",
                        pay: "FALSE",
                        en: "TRUE",
                        zh_hant: "TRUE",
                        zh_hans: "TRUE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/9eb29d655ced455f9a3535bc99115b68.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u56fe\u50cf\u751f\u6210",
                        toolName: "neural.love",
                        toolDesc: "\u6587\u5b57\u8f6c\u56fe\u7247\u5de5\u5177\uff0c\u8fd8\u63d0\u4f9b\u5f71\u7247\u548c\u7167\u7247\u4f18\u5316",
                        toolLink: "https://neural.love/",
                        free: "TRUE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/d2c264ab361c482698ef9047d16cd312.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u56fe\u50cf\u751f\u6210",
                        toolName: "Midjourney",
                        toolDesc: "\u8f93\u5165\u6587\u5b57\u751f\u6210\u56fe\u7247",
                        toolLink: "https://www.midjourney.com/",
                        free: "TRUE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/2e6f5c80b9f74b31843669720f702698.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u56fe\u50cf\u751f\u6210",
                        toolName: "Craiyon",
                        toolDesc: "\u6587\u5b57\u8f6c\u56fe\u7247\u5de5\u5177",
                        toolLink: "https://www.craiyon.com/",
                        free: "TRUE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "",
                        icon: b.Z,
                        customClass: "text-orange-400",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u56fe\u50cf\u751f\u6210",
                        toolName: "AutoDraw",
                        toolDesc: "Autodraw \u53ef\u4ee5\u731c\u6d4b\u4f7f\u7528\u8005\u60f3\u8981\u7ed8\u5236\u7684\u7269\u4f53\u6216\u5f62\u72b6\uff0c\u4ece\u800c\u8ba9\u4f7f\u7528\u8005\u66f4\u5feb\u901f\u5730\u7ed8\u56fe",
                        toolLink: "https://www.autodraw.com/",
                        free: "TRUE",
                        pay: "FALSE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "",
                        icon: b.Z,
                        customClass: "text-orange-400",
                        toolEnName: "",
                        toolEnDesc: ""
                    }]
                }, {
                    category: "\u5f71\u97f3\u751f\u6210",
                    tools: [{
                        category: "\u5f71\u97f3\u751f\u6210",
                        toolName: "Descript",
                        toolDesc: "\u591a\u529f\u80fd\u7684\u5f71\u7247\u548c Podcast \u7f16\u8f91\u8f6f\u4f53\uff0c\u529f\u80fd\u5305\u62ec\u5c06\u97f3\u9891\u8f6c\u5f55\u6210\u6587\u672c\u3001\u50cf\u7f16\u8f91\u6587\u6863\u4e00\u6837\u8f7b\u677e\u7f16\u8f91\u5f71\u7247\u3001\u8424\u5e55\u5f55\u5236\u7b49\u3002\u7533\u8bf7 waitlist \u4e5f\u53ef\u4ee5\u8bd5\u7528\u5230 GPT-4 \u7684\u529f\u80fd\u3002 ",
                        toolLink: "https://www.descript.com/",
                        free: "TRUE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/71053b2cc7654eee86978690f690ea25.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: "",
                        waitList: ""
                    }, {
                        category: "\u5f71\u97f3\u751f\u6210",
                        toolName: "Uberduck",
                        toolDesc: "\u8f93\u5165\u6587\u6848\u81ea\u52a8\u751f\u6210\u58f0\u97f3\uff0c\u63d0\u4f9b 5000+ \u4e0d\u540c\u7684\u58f0\u97f3\u53ef\u4ee5\u9009",
                        toolLink: "https://uberduck.ai/",
                        free: "TRUE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/fe84905a91f143f9b1c49a852a62eb68.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u5f71\u97f3\u751f\u6210",
                        toolName: "Mubert",
                        toolDesc: "\u7b80\u5355\u8f93\u5165\u6307\u4ee4\uff0cAI \u4f1a\u81ea\u52a8\u5316\u751f\u6210\u7b26\u5408\u5185\u5bb9\u7684\u80cc\u666f\u97f3\u4e50",
                        toolLink: "https://mubert.com/",
                        free: "TRUE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/722ea60e61854ffab8f024b6525d52d3.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: "",
                        waitList: ""
                    }, {
                        category: "\u5f71\u97f3\u751f\u6210",
                        toolName: "Tavus",
                        toolDesc: "\u6839\u636e\u4f60\u7684\u8138\u4e0e\u58f0\u97f3\uff0c\u7528 AI \u5e2e\u4f60\u505a\u5ba2\u5236\u5316\u5f71\u7247\uff0c\u7701\u53bb\u505a\u5f71\u7247\u7684\u65f6\u95f4",
                        toolLink: "https://www.tavus.io/",
                        free: "FALSE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/c18f599a019c4c568bad739ec577deeb.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u5f71\u97f3\u751f\u6210",
                        toolName: "Runway",
                        toolDesc: "AI \u5f71\u7247\u7f16\u8f91\u3001AI \u6587\u5b57\u751f\u6210\u56fe\u7247",
                        toolLink: "https://runwayml.com/",
                        free: "TRUE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/47e0a77fe84a4f49aa750c45f987e0a0.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u5f71\u97f3\u751f\u6210",
                        toolName: "Murf",
                        toolDesc: "\u5728\u51e0\u5206\u949f\u5185\u5236\u4f5c\u51fa\u5de5\u4f5c\u5ba4\u54c1\u8d28\u7684\u914d\u97f3\u3002\u4f7f\u7528\u903c\u771f\u58f0\u97f3\u4e3a Podcast\u3001\u5f71\u7247\u7b49\u5236\u4f5c\u914d\u97f3\u3002 ",
                        toolLink: "https://murf.ai/",
                        free: "TRUE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/39568a8ccfd84c689bb5a0415603b016.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u5f71\u97f3\u751f\u6210",
                        toolName: "synthesia",
                        toolDesc: "\u8f93\u5165\u6587\u5b57\u7a3f\uff0c\u5373\u53ef\u751f\u6210\u6709\u771f\u4eba\u4e3b\u6301\u4eba\u7684\u5f71\u7247",
                        toolLink: "https://www.synthesia.io/",
                        free: "FALSE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/4740b5cb15424d86b612536d7685fc20.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u5f71\u97f3\u751f\u6210",
                        toolName: "Fliki",
                        toolDesc: "\u5c06\u6587\u5b57\u8f6c\u4e3a\u5f71\u97f3\u3001\u5e76\u52a0\u4e0a AI \u7684\u97f3\u8baf\u3002 ",
                        toolLink: "https://fliki.ai/",
                        free: "TRUE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/3faa392b9a0a4493994e1b09aeeaf441.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u5f71\u97f3\u751f\u6210",
                        toolName: "capsho",
                        toolDesc: "Capsho\u662f\u4e13\u4e3a\u4e13\u4e1a\u64ad\u5ba2\u5236\u4f5c\u7684\u3002\u6307\u6559\u7ec3\u3001\u987e\u95ee\u3001\u670d\u52a1\u63d0\u4f9b\u5546\u7b49\uff0c\u900f\u8fc7 AI \u751f\u6210\u96c6\u6570\u4ecb\u7ecd\u3001\u8282\u76ee\u6458\u8981\u3001\u793e\u5a92\u6807\u9898\uff0c\u7b49\u5185\u5bb9\u3002 ",
                        toolLink: "https://www.capsho.com/",
                        free: "FALSE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/0ad9e2c154e04e4cb303c5d23ed64050.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }]
                }, {
                    category: "\u54c1\u724c\u751f\u6210",
                    tools: [{
                        category: "\u54c1\u724c\u751f\u6210",
                        toolName: "namelix",
                        toolDesc: "\u54c1\u724c\u540d\u79f0\u4ea7\u751f\u5668",
                        toolLink: "https://namelix.com/",
                        free: "TRUE",
                        pay: "FALSE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u54c1\u724c\u751f\u6210",
                        toolName: "Looka",
                        toolDesc: "Logo \u5236\u4f5c\u5de5\u5177",
                        toolLink: "https://looka.com/",
                        free: "TRUE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/8246cd06c7c24b3ba290a33695e99330.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u54c1\u724c\u751f\u6210",
                        toolName: "Namecheap Logo Maker",
                        toolDesc: "\u53ea\u8981\u56de\u7b54\u51e0\u4e2a\u7b80\u5355\u95ee\u9898\uff0c\u5373\u53ef\u8bbe\u8ba1\u3001\u514d\u8d39\u4e0b\u8f7d\u6570\u767e\u79cd\u5546\u6807\u8bbe\u8ba1\u3002 ",
                        toolLink: "https://www.namecheap.com/logo-maker/",
                        free: "TRUE",
                        pay: "FALSE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/336c46fe8da24cd296da0dc7193a8155.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }]
                }, {
                    category: "\u52a8\u753b\u751f\u6210",
                    tools: [{
                        category: "\u52a8\u753b\u751f\u6210",
                        toolName: "Jitter",
                        toolDesc: "Jitter \u8ba9\u521b\u4f5c\u8005\u548c\u56e2\u961f\u8f7b\u677e\u5730\u8bbe\u8ba1\u51fa\u4ee4\u4eba\u60ca\u8273\u7684\u52a8\u753b\u5185\u5bb9\u548c\u4ecb\u9762\u3002 ",
                        toolLink: "https://jitter.video/",
                        free: "TRUE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/eb059d644fb74e9cb69f35c8cfe75bba.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }]
                }, {
                    category: "\u804a\u5929\u673a\u5668\u4eba",
                    tools: [{
                        category: "\u804a\u5929\u673a\u5668\u4eba",
                        toolName: "Typing Mind",
                        toolDesc: "\u529f\u80fd\u662f\u57fa\u4e8e ChatGPT\uff0c\u4f46\u8fd9\u4e2a\u5de5\u5177 UI \u66f4\u52a0\u7f8e\u89c2\u6613\u7528",
                        toolLink: "https://www.typingmind.com/",
                        free: "TRUE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/c53865aee87f4e2397afdbac7e1647f9.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u804a\u5929\u673a\u5668\u4eba",
                        toolName: "Andi",
                        toolDesc: "\u51c6\u786e\u3001\u65e0\u5e7f\u544a\u4e14\u6ce8\u91cd\u9690\u79c1\u7684\u4eba\u5de5\u667a\u6167\u641c\u5bfb\u804a\u5929\u673a\u5668\u4eba\u3002 Andi \u4e0d\u4ec5\u63d0\u4f9b\u8fde\u7ed3\uff0c\u8fd8\u4f1a\u76f4\u63a5\u56de\u7b54\u7684\u95ee\u9898",
                        toolLink: "https://andisearch.com/",
                        free: "TRUE",
                        pay: "FALSE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/4d6717758db14c5cac860ac177a5782d.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u804a\u5929\u673a\u5668\u4eba",
                        toolName: "character.ai",
                        toolDesc: "Character.ai\u662f\u4e00\u4e2a\u795e\u7ecf\u8bed\u8a00\u6a21\u578b\u804a\u5929\u673a\u5668\u4eba\u7f51\u7edc\u5e94\u7528\u7a0b\u5f0f\uff0c\u53ef\u4ee5\u751f\u6210\u7c7b\u4f3c\u4eba\u7c7b\u7684\u6587\u672c\u56de\u590d\uff0c\u5e76\u7ed3\u5408\u4e0a\u4e0b\u6587\u8fdb\u884c\u5bf9\u8bdd\u3002 ",
                        toolLink: "https://beta.character.ai/",
                        free: "TRUE",
                        pay: "FALSE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/1abc0e1bcd954d07aecc391e6f701af7.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u804a\u5929\u673a\u5668\u4eba",
                        toolName: "Poe",
                        toolDesc: "Poe \u8ba9\u60a8\u53ef\u4ee5\u63d0\u95ee\u3001\u83b7\u5f97\u5373\u65f6\u7b54\u6848\uff0c\u5e76\u4e14\u4e0e\u4eba\u5de5\u667a\u6167\u8fdb\u884c\u6765\u56de\u5bf9\u8bdd",
                        toolLink: "https://poe.com/login",
                        free: "TRUE",
                        pay: "FALSE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/fd879c1ac1a543a586cd188060154c2f.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }]
                }, {
                    category: "\u641c\u5bfb\u5f15\u64ce",
                    tools: [{
                        category: "\u641c\u5bfb\u5f15\u64ce",
                        toolName: "Microsoft Bing",
                        toolDesc: "Bing \u53ef\u4ee5\u7528\u4e8e\u804a\u5929\u56de\u7b54\u95ee\u9898\uff0c\u63d0\u4f9b\u7b54\u6848\u548c\u7075\u611f\uff0c\u8349\u62df\u8349\u7a3f\u534f\u52a9\u5199\u4f5c\uff0c\u9002\u7528\u4e8e\u7535\u5b50\u90ae\u4ef6\u3001\u6545\u4e8b\u3001\u996e\u98df\u8ba1\u5212\u7b49\u3002 ",
                        toolLink: "https://www.bing.com/",
                        free: "TRUE",
                        pay: "FALSE",
                        en: "TRUE",
                        zh_hant: "TRUE",
                        zh_hans: "TRUE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/1688c15829ed484da8cbe1e7747abc22.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u641c\u5bfb\u5f15\u64ce",
                        toolName: "You.com",
                        toolDesc: "You.com \u4e0e Bing \u7686\u4e3a\u641c\u5bfb\u5f15\u64ce\u5e73\u53f0\uff0c\u53ef\u4ee5\u603b\u7ed3\u7528\u6237\u7684\u641c\u5bfb\u5185\u5bb9\uff0c\u8fd8\u63d0\u4f9b\u4e86\u6587\u5b57\u8f6c\u56fe\u7247\u7b49\u5de5\u5177\u3002 ",
                        toolLink: "https://you.com/",
                        free: "TRUE",
                        pay: "FALSE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/443a80311680488486868b1a6e0e7a36.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }]
                }, {
                    category: "\u7a0b\u5f0f\u5f00\u53d1",
                    tools: [{
                        category: "\u7a0b\u5f0f\u5f00\u53d1",
                        toolName: "replit - Ghostwriter",
                        toolDesc: "\u7ebf\u4e0a IDE replit \u63a8\u51fa\u7684 Ghostwriter\uff0c\u900f\u8fc7 AI \u5e2e\u52a9\u4f60\u5199\u7a0b\u5f0f\uff0c\u5e76\u4e14\u53ef\u4ee5\u5e2e\u52a9\u4f60\u627e\u5230\u9519\u8bef\u3002 ",
                        toolLink: "https://replit.com/site/ghostwriter",
                        free: "TRUE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/815a771cd4334c59b49f577608d0a261.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: "",
                        waitList: ""
                    }, {
                        category: "\u7a0b\u5f0f\u5f00\u53d1",
                        toolName: "Github Copilot X",
                        toolDesc: "\u900f\u8fc7\u5185\u5efa\u804a\u5929\u548c\u7ec8\u7aef\u4ecb\u9762\u3001\u652f\u63f4 pull request\u3001\u4ee5\u53ca\u91c7\u7528 OpenAI \u7684 GPT-4 \u6280\u672f\uff0cGitHub Copilot X \u662f\u672a\u6765 AI \u52a8\u529b\u8f6f\u4f53\u5f00\u53d1\u7684\u9886\u822a\u4ea7\u54c1\u3002 ",
                        toolLink: "https://github.com/features/preview/copilot-x",
                        free: "",
                        pay: "",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "",
                        icon: z.Z,
                        customClass: "text-gray-900",
                        toolEnName: "",
                        toolEnDesc: "",
                        waitList: "TRUE"
                    }, {
                        category: "\u7a0b\u5f0f\u5f00\u53d1",
                        toolName: "Cursor",
                        toolDesc: "\u4f7f\u7528 GPT-4\uff0c\u5728\u4e00\u79cd\u65b0\u578b\u7f16\u8f91\u5668\u4e2d\u64b0\u5199\u3001\u7f16\u8f91\u7684\u7a0b\u5f0f\u7801",
                        toolLink: "https://www.cursor.so/",
                        free: "TRUE",
                        pay: "FALSE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/591296587dbe4ccebb8a4f8e424c2c29.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u7a0b\u5f0f\u5f00\u53d1",
                        toolName: "AI Query",
                        toolDesc: "\u8f93\u5165\u7b80\u5355\u7684\u82f1\u6587\uff0c\u5373\u53ef\u900f\u8fc7\u6b64\u5de5\u5177\u5e2e\u4f60\u751f\u6210 SQL \u8bed\u6cd5",
                        toolLink: "https://aiquery.co/",
                        free: "FALSE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/9870770732034793b7e1d6a2b65b127d.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u7a0b\u5f0f\u5f00\u53d1",
                        toolName: "ChatGPT for VSCode",
                        toolDesc: "\u900f\u8fc7\u7ed3\u5408 VS Code \u548c ChatGPT \u7684\u65b9\u5f0f\uff0c\u4f7f\u7528\u8005\u53ef\u4ee5\u5f97\u5230 AI \u63d0\u4f9b\u7684\u7a0b\u5f0f\u8bbe\u8ba1\u6307\u5f15\uff0c\u5305\u62ec\u7a0b\u5f0f\u7801\u89e3\u91ca\u3001\u4fa6\u9519\u7b49\u529f\u80fd",
                        toolLink: "https://github.com/mpociot/chatgpt-vscode",
                        free: "TRUE",
                        pay: "FALSE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/37f8ddf0829b47dfa243daa2de58f501.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u7a0b\u5f0f\u5f00\u53d1",
                        toolName: "Codeium",
                        toolDesc: "Codeium \u81ea\u52a8\u5316\u751f\u6210\u7a0b\u5f0f\u7801\u3002\u5b83\u652f\u63f4\u8d85\u8fc7 40 \u79cd\u8bed\u8a00\uff0c\u4e14\u4ecd\u5728\u4e0d\u65ad\u6269\u5145\u4e2d\u3002 ",
                        toolLink: "https://codeium.com/",
                        free: "TRUE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/8863890827684fa2a09bd99c044da2b4.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u7a0b\u5f0f\u5f00\u53d1",
                        toolName: "GitHub Copilot",
                        toolDesc: "GitHub \u548c OpenAI \u5408\u4f5c\u5f00\u53d1\u7684\u4e00\u4e2a AI \u5de5\u5177\uff0c\u5e2e\u52a9\u5de5\u7a0b\u5e08\u5feb\u901f\u4ea7\u751f\u7f16\u5199\u7a0b\u5f0f\u7801",
                        toolLink: "https://github.com/features/copilot/",
                        free: "FALSE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "",
                        icon: z.Z,
                        customClass: "text-gray-900",
                        toolEnName: "",
                        toolEnDesc: ""
                    }]
                }, {
                    category: "\u7ffb\u8bd1\u5de5\u5177",
                    tools: [{
                        category: "\u7ffb\u8bd1\u5de5\u5177",
                        toolName: "Deep L",
                        toolDesc: "\u51c6\u786e\u5373\u65f6\u7684\u7ffb\u8bd1\u5de5\u5177\uff0c\u76ee\u524d\u652f\u63f4 31 \u79cd\u8bed\u8a00",
                        toolLink: "https://www.deepl.com/translator",
                        free: "TRUE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "TRUE",
                        zh_hans: "TRUE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/1f0d45de406c40f8abc03aa90e4824ae.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }]
                }, {
                    category: "\u5b66\u672f\u7814\u7a76",
                    tools: [{
                        category: "\u5b66\u672f\u7814\u7a76",
                        toolName: "Elicit",
                        toolDesc: "Elicit \u4f7f\u7528\u8bed\u8a00\u6a21\u578b\u5e2e\u52a9\u60a8\u81ea\u52a8\u5316\u7814\u7a76\u5de5\u4f5c\u6d41\u7a0b\uff0c\u4f8b\u5982\u6587\u732e\u56de\u987e\u7684\u90e8\u5206\u3002 Elicit \u53ef\u4ee5\u5728\u6ca1\u6709\u5b8c\u7f8e\u5173\u952e\u8bcd\u5339\u914d\u7684\u60c5\u51b5\u4e0b\u627e\u5230\u76f8\u5173\u8bba\u6587\uff0c\u603b\u7ed3\u4e0e\u60a8\u95ee\u9898\u76f8\u5173\u7684\u8bba\u6587\u8981\u70b9\u3002 ",
                        toolLink: "https://elicit.org/",
                        free: "TRUE",
                        pay: "FALSE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "",
                        icon: p.Z,
                        customClass: "text-gray-600",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u5b66\u672f\u7814\u7a76",
                        toolName: "IRIS.ai",
                        toolDesc: "\u7528\u4e8e\u5904\u7406\u7528\u6237\u6240\u6709\u7814\u7a76\u5de5\u4f5c\u3002\u667a\u80fd\u641c\u7d22\u548c\u591a\u79cd\u667a\u80fd\u7b5b\u9009\u5668\u3001\u9605\u8bfb\u5217\u8868\u5206\u6790\u3001\u81ea\u52a8\u751f\u6210\u6458\u8981\uff0c\u4ee5\u53ca\u81ea\u4e3b\u63d0\u53d6\u548c\u7cfb\u7edf\u5316\u6570\u636e\u3002 ",
                        toolLink: "https://iris.ai/",
                        free: "FALSE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "",
                        icon: p.Z,
                        customClass: "text-gray-600",
                        toolEnName: "",
                        toolEnDesc: ""
                    }]
                }, {
                    category: "\u4f7f\u7528\u8005\u7814\u7a76",
                    tools: [{
                        category: "\u4f7f\u7528\u8005\u7814\u7a76",
                        toolName: "Synthetic Users",
                        toolDesc: "Syntheticusers \u4f7f\u7528 AI \u6765\u751f\u6210\u80fd\u591f\u6a21\u62df\u771f\u5b9e\u4eba\u7c7b\u884c\u4e3a\u7684\u4eba\u7269\u5fd7 (personas)\u3002\u7528\u6237\u8f93\u5165\u4e00\u4e2a\u4eba\u7269\u7684\u7279\u5f81\u3001\u8be5\u4eba\u7269\u5b58\u5728\u7684\u95ee\u9898\u4ee5\u53ca\u63d0\u51fa\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u7136\u540e\u8be5\u6a21\u578b\u8fd0\u884c\u865a\u62df\u7528\u6237\u8bbf\u8c08\uff0c\u4ece\u4eba\u7269\u5fd7 (personas)\u4e2d\u6536\u96c6\u53cd\u9988\uff0c\u7136\u540e\u5c06\u5176\u603b\u7ed3\u5728\u5b8c\u6574\u7684\u62a5\u544a\u4e2d\u3002 ",
                        toolLink: "https://www.syntheticusers.com/",
                        free: "FALSE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "",
                        icon: p.Z,
                        customClass: "text-gray-600",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u4f7f\u7528\u8005\u7814\u7a76",
                        toolName: "User Evaluation",
                        toolDesc: "User Evaluation \u662f\u4e00\u4e2a\u900f\u8fc7 AI \u6765\u5206\u6790\u4f7f\u7528\u8005\u7684\u5de5\u5177\u3002\u91cd\u8981\u7684\u529f\u80fd\u5305\u62ec\uff1a\u5206\u6790\u4f7f\u7528\u8005\u3001\u53ef\u4e0a\u4f20\u4f7f\u7528\u8005\u8d44\u6599\u5e76\u900f\u8fc7 AI \u95ee\u7b54\uff0c\u4ee5\u53d6\u5f97\u6709\u5173\u4f7f\u7528\u8005\u5f97\u5173\u952e\u8d44\u6599\u4ee5\u53ca\u900f\u8fc7 AI \u4ea7\u751f\u4f7f\u7528\u54f2\u7814\u7a76\u62a5\u544a\u7b49\u3002 ",
                        toolLink: "https://www.userevaluation.com/",
                        free: "TRUE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "",
                        icon: p.Z,
                        customClass: "text-gray-600",
                        toolEnName: "",
                        toolEnDesc: ""
                    }]
                }, {
                    category: "\u6709\u8da3\u5e94\u7528",
                    tools: [{
                        category: "\u6709\u8da3\u5e94\u7528",
                        toolName: "Joy Wedding Writer\u2019s Block",
                        toolDesc: "\u8fd9\u4e2a AI \u52a9\u624b\u53ef\u4ee5\u5e2e\u52a9\u4f60\u4ea7\u51fa\u5a5a\u793c\u81f4\u8bcd\u3001\u611f\u8c22\u4fe1\u3001\u62d2\u7edd\u4fe1\u7b49\u3002 ",
                        toolLink: "https://withjoy.com/writersblock/",
                        free: "TRUE",
                        pay: "FALSE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/e0630bd3b29241e4b78f929a5801ca4f.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u6709\u8da3\u5e94\u7528",
                        toolName: "Dream Interpreter AI",
                        toolDesc: "\u8fd9\u4e2a AI \u5de5\u5177\u53ef\u4ee5\u8ba9\u4f60\u8f93\u5165\u68a6\u5883\uff0c\u5e76\u5e2e\u52a9\u4f60\u89e3\u6790\u68a6\u5883\u3002 ",
                        toolLink: "https://dreaminterpreter.ai/",
                        free: "TRUE",
                        pay: "FALSE",
                        en: "TRUE",
                        zh_hant: "TRUE",
                        zh_hans: "TRUE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/334208a76ce54b87bf21c2ded9b34e37.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u6709\u8da3\u5e94\u7528",
                        toolName: "\u9650\u65f6\u6d82\u9e26",
                        toolDesc: "Quick, draw! \u662f Google \u63a8\u51fa\u7684\u4e00\u4e2a AI \u753b\u56fe\u5b9e\u9a8c\u3002\u4f60\u4f1a\u5728 20 \u79d2\u4e4b\u5185\u753b\u51fa\u6307\u5b9a\u7684\u6d82\u6848\uff0cAI \u4f1a\u9700\u8981\u8fa8\u8bc6\u51fa\u4f60\u5728\u753b\u4ec0\u4e48",
                        toolLink: "https://quickdraw.withgoogle.com/",
                        free: "TRUE",
                        pay: "FALSE",
                        en: "TRUE",
                        zh_hant: "TRUE",
                        zh_hans: "TRUE",
                        toolImg: "",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u6709\u8da3\u5e94\u7528",
                        toolName: "HOTOKE AI",
                        toolDesc: "\u8fd9\u4e2a\u7ebf\u4e0a\u5de5\u5177\uff0c\u7ed3\u5408 AI \u900f\u8fc7\u4f5b\u6559\u7b49\u89c2\u70b9\u4e3a\u4f7f\u7528\u8005\u89e3\u7b54\u7591\u60d1",
                        toolLink: "https://hotoke.ai/",
                        free: "TRUE",
                        pay: "FALSE",
                        en: "TRUE",
                        zh_hant: "TRUE",
                        zh_hans: "TRUE",
                        toolImg: "",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }]
                }],
                D = [{
                    category: "\u6700\u65b0 AI \u5de5\u5177",
                    icon: "\u2b50\ufe0f",
                    tools: [{
                        category: "\u5f71\u97f3\u751f\u6210",
                        toolName: "Descript",
                        toolDesc: "\u591a\u529f\u80fd\u7684\u5f71\u7247\u548c Podcast \u7f16\u8f91\u8f6f\u4f53\uff0c\u529f\u80fd\u5305\u62ec\u5c06\u97f3\u9891\u8f6c\u5f55\u6210\u6587\u672c\u3001\u50cf\u7f16\u8f91\u6587\u6863\u4e00\u6837\u8f7b\u677e\u7f16\u8f91\u5f71\u7247\u3001\u8424\u5e55\u5f55\u5236\u7b49\u3002\u7533\u8bf7 waitlist \u4e5f\u53ef\u4ee5\u8bd5\u7528\u5230 GPT-4 \u7684\u529f\u80fd\u3002 ",
                        toolLink: "https://www.descript.com/",
                        free: "TRUE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/71053b2cc7654eee86978690f690ea25.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: "",
                        waitList: ""
                    }, {
                        category: "\u7a0b\u5f0f\u5f00\u53d1",
                        toolName: "replit - Ghostwriter",
                        toolDesc: "\u7ebf\u4e0a IDE replit \u63a8\u51fa\u7684 Ghostwriter\uff0c\u900f\u8fc7 AI \u5e2e\u52a9\u4f60\u5199\u7a0b\u5f0f\uff0c\u5e76\u4e14\u53ef\u4ee5\u5e2e\u52a9\u4f60\u627e\u5230\u9519\u8bef\u3002 ",
                        toolLink: "https://replit.com/site/ghostwriter",
                        free: "TRUE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/815a771cd4334c59b49f577608d0a261.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: "",
                        waitList: ""
                    }, {
                        category: "ChatGPT \u5e94\u7528",
                        toolName: "ChatGPT plugins",
                        toolDesc: "ChatGPT \u63d2\u4ef6\u8ba9 ChatGPT \u4e32\u63a5\u4e0d\u540c\u7684\u670d\u52a1\u6765\u589e\u5f3a ChatGPT \u7684\u529f\u80fd\uff0c\u4f8b\u5982\uff1a\u6d4f\u89c8\u7f51\u8def\u6700\u65b0\u8d44\u8baf\u3001\u8bfb\u53d6\u6587\u4ef6\u6863\u6848\u3001\u8ba2\u8d2d\u673a\u7968\u3001\u70b9\u9910\u7b49",
                        toolLink: "https://openai.com/blog/chatgpt-plugins",
                        free: "",
                        pay: "",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/4d3f073e41314323ac91409b6e858322.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: "",
                        waitList: "TRUE"
                    }, {
                        category: "\u7a0b\u5f0f\u5f00\u53d1",
                        toolName: "Github Copilot X",
                        toolDesc: "\u900f\u8fc7\u5185\u5efa\u804a\u5929\u548c\u7ec8\u7aef\u4ecb\u9762\u3001\u652f\u63f4 pull request\u3001\u4ee5\u53ca\u91c7\u7528 OpenAI \u7684 GPT-4 \u6280\u672f\uff0cGitHub Copilot X \u662f\u672a\u6765 AI \u52a8\u529b\u8f6f\u4f53\u5f00\u53d1\u7684\u9886\u822a\u4ea7\u54c1\u3002 ",
                        toolLink: "https://github.com/features/preview/copilot-x",
                        free: "",
                        pay: "",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "",
                        icon: z.Z,
                        customClass: "text-gray-900",
                        toolEnName: "",
                        toolEnDesc: "",
                        waitList: "TRUE"
                    }, {
                        category: "\u5f71\u97f3\u751f\u6210",
                        toolName: "Uberduck",
                        toolDesc: "\u8f93\u5165\u6587\u6848\u81ea\u52a8\u751f\u6210\u58f0\u97f3\uff0c\u63d0\u4f9b 5000+ \u4e0d\u540c\u7684\u58f0\u97f3\u53ef\u4ee5\u9009",
                        toolLink: "https://uberduck.ai/",
                        free: "TRUE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/fe84905a91f143f9b1c49a852a62eb68.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u6587\u6848\u751f\u6210",
                        toolName: "Friday AI",
                        toolDesc: "AI \u6587\u6848\u5185\u5bb9\u751f\u6210\u5de5\u5177\uff0c\u5e2e\u52a9\u4f60\u4ea7\u751f\u5404\u7c7b\u6587\u6848\u548c\u6587\u7ae0",
                        toolLink: "https://heyfriday.cn/home",
                        free: "TRUE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "TRUE",
                        zh_hans: "TRUE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/5d1e910af05a46de91df38aeb4a7ba4a.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "ChatGPT \u5e94\u7528",
                        toolName: "PromptPerfect",
                        toolDesc: "\u4f18\u5316\u8f93\u5165\u7684\u63d0\u793a\u8bcd (prompt)",
                        toolLink: "https://promptperfect.jina.ai/",
                        free: "TRUE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "TRUE",
                        zh_hans: "TRUE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/8ca1f2023cf54fcc86101e1d3a419cac.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: "",
                        waitList: ""
                    }, {
                        category: "\u7a0b\u5f0f\u5f00\u53d1",
                        toolName: "Cursor",
                        toolDesc: "\u4f7f\u7528 GPT-4\uff0c\u5728\u4e00\u79cd\u65b0\u578b\u7f16\u8f91\u5668\u4e2d\u64b0\u5199\u3001\u7f16\u8f91\u7684\u7a0b\u5f0f\u7801",
                        toolLink: "https://www.cursor.so/",
                        free: "TRUE",
                        pay: "FALSE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/591296587dbe4ccebb8a4f8e424c2c29.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u56fe\u50cf\u751f\u6210",
                        toolName: "Microsoft Bing Image Creator",
                        toolDesc: "Image Creator \u662f\u4e00\u6b3e\u80fd\u591f\u534f\u52a9\u4f7f\u7528\u8005\u8fd0\u7528 DALL-E \u6280\u672f\u521b\u9020 AI \u5f71\u50cf\u7684\u4ea7\u54c1\u3002\u4f7f\u7528\u8005\u53ea\u9700\u8f93\u5165\u6587\u5b57\u63d0\u793a\uff0cAI \u7cfb\u7edf\u5373\u53ef\u7acb\u5373\u751f\u6210\u4e00\u7ec4\u7b26\u5408\u63d0\u793a\u5185\u5bb9\u7684\u5f71\u50cf",
                        toolLink: "https://www.bing.com/images/create",
                        free: "TRUE",
                        pay: "FALSE",
                        en: "TRUE",
                        zh_hant: "TRUE",
                        zh_hans: "TRUE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/9eb29d655ced455f9a3535bc99115b68.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }]
                }, {
                    category: "\u70ed\u95e8\u514d\u8d39 AI \u5de5\u5177",
                    icon: "\ud83c\udd93",
                    tools: [{
                        category: "\u54c1\u724c\u751f\u6210",
                        toolName: "namelix",
                        toolDesc: "\u54c1\u724c\u540d\u79f0\u4ea7\u751f\u5668",
                        toolLink: "https://namelix.com/",
                        free: "TRUE",
                        pay: "FALSE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u6709\u8da3\u5e94\u7528",
                        category2: "",
                        toolName: "Dream Interpreter AI",
                        toolDesc: "\u8fd9\u4e2a AI \u5de5\u5177\u53ef\u4ee5\u8ba9\u4f60\u8f93\u5165\u68a6\u5883\uff0c\u5e76\u5e2e\u52a9\u4f60\u89e3\u6790\u68a6\u5883\u3002 ",
                        toolLink: "https://dreaminterpreter.ai/",
                        free: "TRUE",
                        pay: "FALSE",
                        en: "TRUE",
                        zh_hant: "TRUE",
                        zh_hans: "TRUE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/334208a76ce54b87bf21c2ded9b34e37.png",
                        icon: null,
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u5de5\u4f5c\u4f18\u5316",
                        category2: "ChatGPT \u5e94\u7528\u5de5\u5177",
                        toolName: "Excelformulabot",
                        toolDesc: "\u5229\u7528 ChatGPT \u751f\u6210 Excel \u516c\u5f0f",
                        toolLink: "https://excelformulabot.com/",
                        free: "TRUE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "TRUE",
                        toolImg: "",
                        icon: i.Z,
                        customClass: "text-green-600",
                        toolEnName: "Excelformulabot",
                        toolEnDesc: "Translate text instructions to Excel or Google Sheets formula."
                    }, {
                        category: "\u804a\u5929\u673a\u5668\u4eba",
                        category2: "",
                        toolName: "Poe",
                        toolDesc: "Poe \u8ba9\u60a8\u53ef\u4ee5\u63d0\u95ee\u3001\u83b7\u5f97\u5373\u65f6\u7b54\u6848\uff0c\u5e76\u4e14\u4e0e\u4eba\u5de5\u667a\u6167\u8fdb\u884c\u6765\u56de\u5bf9\u8bdd",
                        toolLink: "https://poe.com/login",
                        free: "TRUE",
                        pay: "FALSE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/fd879c1ac1a543a586cd188060154c2f.png",
                        icon: null,
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u641c\u5bfb\u5f15\u64ce",
                        category2: "",
                        toolName: "Microsoft Bing",
                        toolDesc: "Bing \u53ef\u4ee5\u7528\u4e8e\u804a\u5929\u56de\u7b54\u95ee\u9898\uff0c\u63d0\u4f9b\u7b54\u6848\u548c\u7075\u611f\uff0c\u8349\u62df\u8349\u7a3f\u534f\u52a9\u5199\u4f5c\uff0c\u9002\u7528\u4e8e\u7535\u5b50\u90ae\u4ef6\u3001\u6545\u4e8b\u3001\u996e\u98df\u8ba1\u5212\u7b49\u3002 ",
                        toolLink: "https://www.bing.com/",
                        free: "TRUE",
                        pay: "FALSE",
                        en: "TRUE",
                        zh_hant: "TRUE",
                        zh_hans: "TRUE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/1688c15829ed484da8cbe1e7747abc22.png",
                        icon: null,
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }]
                }, {
                    category: "\u70ed\u95e8\u4ed8\u8d39 AI \u5de5\u5177",
                    icon: "\ud83d\udcb0",
                    tools: [{
                        category: "\u5de5\u4f5c\u4f18\u5316",
                        toolName: "Notion AI",
                        toolDesc: "\u6700\u5b8c\u6574\u7684\u6587\u5b57\u7b14\u8bb0 AI \u5de5\u5177",
                        toolLink: "https://affiliate.notion.so/pjib4ixelobm",
                        free: "FALSE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/d7b5bfd46ef4435fbd5791b3fb1e8cb6.png",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u5199\u4f5c\u5de5\u5177",
                        toolName: "Jenni",
                        toolDesc: "AI \u5199\u4f5c\u8f85\u52a9\u5de5\u5177\uff0c\u62e5\u6709\u5e2e\u52a9\u5b8c\u6210\u6bb5\u843d\u3001\u5ba2\u5236\u5316\u8bed\u8c03\u3001\u91cd\u65b0\u7f16\u5199\u7b49\u529f\u80fd\u3002 ",
                        toolLink: "https://jenni.ai/",
                        free: "FALSE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "",
                        icon: "",
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u5f71\u97f3\u5de5\u5177",
                        category2: "",
                        toolName: "Fliki",
                        toolDesc: "\u5c06\u6587\u5b57\u8f6c\u4e3a\u5f71\u97f3\u3001\u5e76\u52a0\u4e0a AI \u7684\u97f3\u8baf\u3002 ",
                        toolLink: "https://fliki.ai/",
                        free: "TRUE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "https://explainthis.s3-ap-northeast-1.amazonaws.com/3faa392b9a0a4493994e1b09aeeaf441.png",
                        icon: null,
                        customClass: "",
                        toolEnName: "",
                        toolEnDesc: ""
                    }, {
                        category: "\u7a0b\u5f0f\u5f00\u53d1",
                        category2: "",
                        toolName: "GitHub Copilot",
                        toolDesc: "GitHub \u548c OpenAI \u5408\u4f5c\u5f00\u53d1\u7684\u4e00\u4e2a AI \u5de5\u5177\uff0c\u5e2e\u52a9\u5de5\u7a0b\u5e08\u5feb\u901f\u4ea7\u751f\u7f16\u5199\u7a0b\u5f0f\u7801",
                        toolLink: "https://github.com/features/copilot/",
                        free: "FALSE",
                        pay: "TRUE",
                        en: "TRUE",
                        zh_hant: "FALSE",
                        zh_hans: "FALSE",
                        toolImg: "",
                        icon: z.Z,
                        customClass: "text-gray-900",
                        toolEnName: "",
                        toolEnDesc: ""
                    }]
                }]
        }
    },
    function(t) {
        t.O(0, [3061, 6725, 7415, 2888, 179], (function() {
            return o = 5072, t(t.s = o);
            var o
        }));
        var o = t.O();
        _N_E = o
    }
]);