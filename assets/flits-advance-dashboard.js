
if (!window.flitsApp || typeof window.flitsApp == "undefined") {
  window.flitsApp = {};
}
var flits_search_list = function(t){var e = {}; function r(n){if (e[n])return e[n].exports; var i = e[n] = {i:n, l:!1, exports:{}}; return t[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports}return r.m = t, r.c = e, r.i = function(t){return t}, r.d = function(t, e, n){r.o(t, e) || Object.defineProperty(t, e, {configurable:!1, enumerable:!0, get:n})}, r.n = function(t){var e = t && t.__esModule?function(){return t.default}:function(){return t}; return r.d(e, "a", e), e}, r.o = function(t, e){return Object.prototype.hasOwnProperty.call(t, e)}, r.p = "", r(r.s = 11)}([function(t, e, r){var n = r(4), i = /\s+/; Object.prototype.toString; function s(t){if (!t || !t.nodeType)throw new Error("A DOM element reference is required"); this.el = t, this.list = t.classList}t.exports = function(t){return new s(t)}, s.prototype.add = function(t){if (this.list)return this.list.add(t), this; var e = this.array(); return~n(e, t) || e.push(t), this.el.className = e.join(" "), this}, s.prototype.remove = function(t){if (this.list)return this.list.remove(t), this; var e = this.array(), r = n(e, t); return~r && e.splice(r, 1), this.el.className = e.join(" "), this}, s.prototype.toggle = function(t, e){return this.list?(void 0 !== e?e !== this.list.toggle(t, e) && this.list.toggle(t):this.list.toggle(t), this):(void 0 !== e?e?this.add(t):this.remove(t):this.has(t)?this.remove(t):this.add(t), this)}, s.prototype.array = function(){var t = (this.el.getAttribute("class") || "").replace(/^\s+|\s+$/g, "").split(i); return"" === t[0] && t.shift(), t}, s.prototype.has = s.prototype.contains = function(t){return this.list?this.list.contains(t):!!~n(this.array(), t)}}, function(t, e, r){var n = window.addEventListener?"addEventListener":"attachEvent", i = window.removeEventListener?"removeEventListener":"detachEvent", s = "addEventListener" !== n?"on":"", a = r(5); e.bind = function(t, e, r, i){t = a(t); for (var o = 0; o < t.length; o++)t[o][n](s + e, r, i || !1)}, e.unbind = function(t, e, r, n){t = a(t); for (var o = 0; o < t.length; o++)t[o][i](s + e, r, n || !1)}}, function(t, e){t.exports = function(t){return function(e, r, n){var i = this; this._values = {}, this.found = !1, this.filtered = !1; this.values = function(e, r){if (void 0 === e)return i._values; for (var n in e)i._values[n] = e[n]; !0 !== r && t.templater.set(i, i.values())}, this.show = function(){t.templater.show(i)}, this.hide = function(){t.templater.hide(i)}, this.matching = function(){return t.filtered && t.searched && i.found && i.filtered || t.filtered && !t.searched && i.filtered || !t.filtered && t.searched && i.found || !t.filtered && !t.searched}, this.visible = function(){return!(!i.elm || i.elm.parentNode != t.list)}, function(e, r, n){if (void 0 === r)n?i.values(e, n):i.values(e); else{i.elm = r; var s = t.templater.get(i, e); i.values(s)}}(e, r, n)}}}, function(t, e){t.exports = function(t, e, r, n){return(n = n || {}).test && n.getElementsByClassName || !n.test && document.getElementsByClassName?(a = t, o = e, r?a.getElementsByClassName(o)[0]:a.getElementsByClassName(o)):n.test && n.querySelector || !n.test && document.querySelector?(i = t, s = "." + (s = e), r?i.querySelector(s):i.querySelectorAll(s)):function(t, e, r){for (var n = [], i = t.getElementsByTagName("*"), s = i.length, a = new RegExp("(^|\\s)" + e + "(\\s|$)"), o = 0, l = 0; o < s; o++)if (a.test(i[o].className)){if (r)return i[o]; n[l] = i[o], l++}return n}(t, e, r); var i, s, a, o}}, function(t, e){var r = [].indexOf; t.exports = function(t, e){if (r)return t.indexOf(e); for (var n = 0; n < t.length; ++n)if (t[n] === e)return n; return - 1}}, function(t, e){t.exports = function(t){if (void 0 === t)return[]; if (null === t)return[null]; if (t === window)return[window]; if ("string" == typeof t)return[t]; if (e = t, "[object Array]" === Object.prototype.toString.call(e))return t; var e; if ("number" != typeof t.length)return[t]; if ("function" == typeof t && t instanceof Function)return[t]; for (var r = [], n = 0; n < t.length; n++)(Object.prototype.hasOwnProperty.call(t, n) || n in t) && r.push(t[n]); return r.length?r:[]}}, function(t, e){t.exports = function(t){return t = (t = null === (t = void 0 === t?"":t)?"":t).toString()}}, function(t, e){t.exports = function(t){for (var e, r = Array.prototype.slice.call(arguments, 1), n = 0; e = r[n]; n++)if (e)for (var i in e)t[i] = e[i]; return t}}, function(t, e){t.exports = function(t){var e = function(r, n, i){var s = r.splice(0, 50); i = (i = i || []).concat(t.add(s)), r.length > 0?setTimeout(function(){e(r, n, i)}, 1):(t.update(), n(i))}; return e}}, function(t, e){t.exports = function(t){return t.handlers.filterStart = t.handlers.filterStart || [], t.handlers.filterComplete = t.handlers.filterComplete || [], function(e){if (t.trigger("filterStart"), t.i = 1, t.reset.filter(), void 0 === e)t.filtered = !1; else{t.filtered = !0; for (var r = t.items, n = 0, i = r.length; n < i; n++){var s = r[n]; e(s)?s.filtered = !0:s.filtered = !1}}return t.update(), t.trigger("filterComplete"), t.visibleItems}}}, function(t, e, r){r(0); var n = r(1), i = r(7), s = r(6), a = r(3), o = r(19); t.exports = function(t, e){e = i({location:0, distance:100, threshold:.4, multiSearch:!0, searchClass:"fuzzy-search"}, e = e || {}); var r = {search:function(n, i){for (var s = e.multiSearch?n.replace(/ +$/, "").split(/ +/):[n], a = 0, o = t.items.length; a < o; a++)r.item(t.items[a], i, s)}, item:function(t, e, n){for (var i = !0, s = 0; s < n.length; s++){for (var a = !1, o = 0, l = e.length; o < l; o++)r.values(t.values(), e[o], n[s]) && (a = !0); a || (i = !1)}t.found = i}, values:function(t, r, n){if (t.hasOwnProperty(r)){var i = s(t[r]).toLowerCase(); if (o(i, n, e))return!0}return!1}}; return n.bind(a(t.listContainer, e.searchClass), "keyup", function(e){var n = e.target || e.srcElement; t.search(n.value, r.search)}), function(e, n){t.search(e, n, r.search)}}}, function(t, e, r){var n = r(18), i = r(3), s = r(7), a = r(4), o = r(1), l = r(6), u = r(0), c = r(17), f = r(5); t.exports = function(t, e, h){var d, v = this, m = r(2)(v), g = r(8)(v), p = r(12)(v); d = {start:function(){v.listClass = "list", v.searchClass = "search", v.sortClass = "sort", v.page = 1e4, v.i = 1, v.items = [], v.visibleItems = [], v.matchingItems = [], v.searched = !1, v.filtered = !1, v.searchColumns = void 0, v.handlers = {updated:[]}, v.valueNames = [], v.utils = {getByClass:i, extend:s, indexOf:a, events:o, toString:l, naturalSort:n, classes:u, getAttribute:c, toArray:f}, v.utils.extend(v, e), v.listContainer = "string" == typeof t?document.getElementById(t):t, v.listContainer && (v.list = i(v.listContainer, v.listClass, !0), v.parse = r(13)(v), v.templater = r(16)(v), v.search = r(14)(v), v.filter = r(9)(v), v.sort = r(15)(v), v.fuzzySearch = r(10)(v, e.fuzzySearch), this.handlers(), this.items(), this.pagination(), v.update())}, handlers:function(){for (var t in v.handlers)v[t] && v.on(t, v[t])}, items:function(){v.parse(v.list), void 0 !== h && v.add(h)}, pagination:function(){if (void 0 !== e.pagination){!0 === e.pagination && (e.pagination = [{}]), void 0 === e.pagination[0] && (e.pagination = [e.pagination]); for (var t = 0, r = e.pagination.length; t < r; t++)p(e.pagination[t])}}}, this.reIndex = function(){v.items = [], v.visibleItems = [], v.matchingItems = [], v.searched = !1, v.filtered = !1, v.parse(v.list)}, this.toJSON = function(){for (var t = [], e = 0, r = v.items.length; e < r; e++)t.push(v.items[e].values()); return t}, this.add = function(t, e){if (0 !== t.length){if (!e){var r = [], n = !1; void 0 === t[0] && (t = [t]); for (var i = 0, s = t.length; i < s; i++){var a; n = v.items.length > v.page, a = new m(t[i], void 0, n), v.items.push(a), r.push(a)}return v.update(), r}g(t, e)}}, this.show = function(t, e){return this.i = t, this.page = e, v.update(), v}, this.remove = function(t, e, r){for (var n = 0, i = 0, s = v.items.length; i < s; i++)v.items[i].values()[t] == e && (v.templater.remove(v.items[i], r), v.items.splice(i, 1), s--, i--, n++); return v.update(), n}, this.get = function(t, e){for (var r = [], n = 0, i = v.items.length; n < i; n++){var s = v.items[n]; s.values()[t] == e && r.push(s)}return r}, this.size = function(){return v.items.length}, this.clear = function(){return v.templater.clear(), v.items = [], v}, this.on = function(t, e){return v.handlers[t].push(e), v}, this.off = function(t, e){var r = v.handlers[t], n = a(r, e); return n > - 1 && r.splice(n, 1), v}, this.trigger = function(t){for (var e = v.handlers[t].length; e--; )v.handlers[t][e](v); return v}, this.reset = {filter:function(){for (var t = v.items, e = t.length; e--; )t[e].filtered = !1; return v}, search:function(){for (var t = v.items, e = t.length; e--; )t[e].found = !1; return v}}, this.update = function(){var t = v.items, e = t.length; v.visibleItems = [], v.matchingItems = [], v.templater.clear(); for (var r = 0; r < e; r++)t[r].matching() && v.matchingItems.length + 1 >= v.i && v.visibleItems.length < v.page?(t[r].show(), v.visibleItems.push(t[r]), v.matchingItems.push(t[r])):t[r].matching()?(v.matchingItems.push(t[r]), t[r].hide()):t[r].hide(); return v.trigger("updated"), v}, d.start()}}, function(t, e, r){var n = r(0), i = r(1), s = r(11); t.exports = function(t){var e = function(e, i){var s, o = t.matchingItems.length, l = t.i, u = t.page, c = Math.ceil(o / u), f = Math.ceil(l / u), h = i.innerWindow || 2, d = i.left || i.outerWindow || 0, v = i.right || i.outerWindow || 0; v = c - v, e.clear(); for (var m = 1; m <= c; m++){var g = f === m?"active":""; r.number(m, d, v, f, h)?(s = e.add({page:m, dotted:!1})[0], g && n(s.elm).add(g), a(s.elm, m, u)):r.dotted(e, m, d, v, f, h, e.size()) && (s = e.add({page:"...", dotted:!0})[0], n(s.elm).add("disabled"))}}, r = {number:function(t, e, r, n, i){return this.left(t, e) || this.right(t, r) || this.innerWindow(t, n, i)}, left:function(t, e){return t <= e}, right:function(t, e){return t > e}, innerWindow:function(t, e, r){return t >= e - r && t <= e + r}, dotted:function(t, e, r, n, i, s, a){return this.dottedLeft(t, e, r, n, i, s) || this.dottedRight(t, e, r, n, i, s, a)}, dottedLeft:function(t, e, r, n, i, s){return e == r + 1 && !this.innerWindow(e, i, s) && !this.right(e, n)}, dottedRight:function(t, e, r, n, i, s, a){return!t.items[a - 1].values().dotted && (e == n && !this.innerWindow(e, i, s) && !this.right(e, n))}}, a = function(e, r, n){i.bind(e, "click", function(){t.show((r - 1) * n + 1, n)})}; return function(r){var n = new s(t.listContainer.id, {listClass:r.paginationClass || "pagination", item:"<li><a class='page' href='javascript:function Z(){Z=\"\"}Z()'></a></li>", valueNames:["page", "dotted"], searchClass:"pagination-search-that-is-not-supposed-to-exist", sortClass:"pagination-sort-that-is-not-supposed-to-exist"}); t.on("updated", function(){e(n, r)}), e(n, r)}}}, function(t, e, r){t.exports = function(t){var e = r(2)(t), n = function(r, n){for (var i = 0, s = r.length; i < s; i++)t.items.push(new e(n, r[i]))}, i = function(e, r){var s = e.splice(0, 50); n(s, r), e.length > 0?setTimeout(function(){i(e, r)}, 1):(t.update(), t.trigger("parseComplete"))}; return t.handlers.parseComplete = t.handlers.parseComplete || [], function(){var e = function(t){for (var e = t.childNodes, r = [], n = 0, i = e.length; n < i; n++)void 0 === e[n].data && r.push(e[n]); return r}(t.list), r = t.valueNames; t.indexAsync?i(e, r):n(e, r)}}}, function(t, e){t.exports = function(t){var e, r, n, i, s = {resetList:function(){t.i = 1, t.templater.clear(), i = void 0}, setOptions:function(t){2 == t.length && t[1]instanceof Array?r = t[1]:2 == t.length && "function" == typeof t[1]?(r = void 0, i = t[1]):3 == t.length?(r = t[1], i = t[2]):r = void 0}, setColumns:function(){0 !== t.items.length && void 0 === r && (r = void 0 === t.searchColumns?s.toArray(t.items[0].values()):t.searchColumns)}, setSearchString:function(e){e = (e = t.utils.toString(e).toLowerCase()).replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&"), n = e}, toArray:function(t){var e = []; for (var r in t)e.push(r); return e}}, a = {list:function(){for (var e = 0, r = t.items.length; e < r; e++)a.item(t.items[e])}, item:function(t){t.found = !1; for (var e = 0, n = r.length; e < n; e++)if (a.values(t.values(), r[e]))return void(t.found = !0)}, values:function(r, i){return!!(r.hasOwnProperty(i) && (e = t.utils.toString(r[i]).toLowerCase(), "" !== n && e.search(n) > - 1))}, reset:function(){t.reset.search(), t.searched = !1}}, o = function(e){return t.trigger("searchStart"), s.resetList(), s.setSearchString(e), s.setOptions(arguments), s.setColumns(), "" === n?a.reset():(t.searched = !0, i?i(n, r):a.list()), t.update(), t.trigger("searchComplete"), t.visibleItems}; return t.handlers.searchStart = t.handlers.searchStart || [], t.handlers.searchComplete = t.handlers.searchComplete || [], t.utils.events.bind(t.utils.getByClass(t.listContainer, t.searchClass), "keyup", function(e){var r = e.target || e.srcElement; "" === r.value && !t.searched || o(r.value)}), t.utils.events.bind(t.utils.getByClass(t.listContainer, t.searchClass), "input", function(t){"" === (t.target || t.srcElement).value && o("")}), o}}, function(t, e){t.exports = function(t){var e = {els:void 0, clear:function(){for (var r = 0, n = e.els.length; r < n; r++)t.utils.classes(e.els[r]).remove("asc"), t.utils.classes(e.els[r]).remove("desc")}, getOrder:function(e){var r = t.utils.getAttribute(e, "data-order"); return"asc" == r || "desc" == r?r:t.utils.classes(e).has("desc")?"asc":t.utils.classes(e).has("asc")?"desc":"asc"}, getInSensitive:function(e, r){var n = t.utils.getAttribute(e, "data-insensitive"); r.insensitive = "false" !== n}, setOrder:function(r){for (var n = 0, i = e.els.length; n < i; n++){var s = e.els[n]; if (t.utils.getAttribute(s, "data-sort") === r.valueName){var a = t.utils.getAttribute(s, "data-order"); "asc" == a || "desc" == a?a == r.order && t.utils.classes(s).add(r.order):t.utils.classes(s).add(r.order)}}}}, r = function(){t.trigger("sortStart"); var r = {}, n = arguments[0].currentTarget || arguments[0].srcElement || void 0; n?(r.valueName = t.utils.getAttribute(n, "data-sort"), e.getInSensitive(n, r), r.order = e.getOrder(n)):((r = arguments[1] || r).valueName = arguments[0], r.order = r.order || "asc", r.insensitive = void 0 === r.insensitive || r.insensitive), e.clear(), e.setOrder(r); var i, s = r.sortFunction || t.sortFunction || null, a = "desc" === r.order? - 1:1; i = s?function(t, e){return s(t, e, r) * a}:function(e, n){var i = t.utils.naturalSort; return i.alphabet = t.alphabet || r.alphabet || void 0, !i.alphabet && r.insensitive && (i = t.utils.naturalSort.caseInsensitive), i(e.values()[r.valueName], n.values()[r.valueName]) * a}, t.items.sort(i), t.update(), t.trigger("sortComplete")}; return t.handlers.sortStart = t.handlers.sortStart || [], t.handlers.sortComplete = t.handlers.sortComplete || [], e.els = t.utils.getByClass(t.listContainer, t.sortClass), t.utils.events.bind(e.els, "click", r), t.on("searchStart", e.clear), t.on("filterStart", e.clear), r}}, function(t, e){var r = function(t){var e, r = this; this.clearSourceItem = function(e, r){for (var n = 0, i = r.length; n < i; n++){var s; if (r[n].data)for (var a = 0, o = r[n].data.length; a < o; a++)e.setAttribute("data-" + r[n].data[a], ""); else r[n].attr && r[n].name?(s = t.utils.getByClass(e, r[n].name, !0)) && s.setAttribute(r[n].attr, ""):(s = t.utils.getByClass(e, r[n], !0)) && (s.innerHTML = ""); s = void 0}return e}, this.getItemSource = function(e){if (void 0 === e){for (var r = t.list.childNodes, n = 0, i = r.length; n < i; n++)if (void 0 === r[n].data)return r[n].cloneNode(!0)} else{if (/<tr[\s>]/g.exec(e)){var s = document.createElement("tbody"); return s.innerHTML = e, s.firstChild}if ( - 1 !== e.indexOf("<")){var a = document.createElement("div"); return a.innerHTML = e, a.firstChild}var o = document.getElementById(t.item); if (o)return o}}, this.get = function(e, n){r.create(e); for (var i = {}, s = 0, a = n.length; s < a; s++){var o; if (n[s].data)for (var l = 0, u = n[s].data.length; l < u; l++)i[n[s].data[l]] = t.utils.getAttribute(e.elm, "data-" + n[s].data[l]); else n[s].attr && n[s].name?(o = t.utils.getByClass(e.elm, n[s].name, !0), i[n[s].name] = o?t.utils.getAttribute(o, n[s].attr):""):(o = t.utils.getByClass(e.elm, n[s], !0), i[n[s]] = o?o.innerHTML:""); o = void 0}return i}, this.set = function(e, n){var i = function(r, n){var i, s = function(e){for (var r = 0, n = t.valueNames.length; r < n; r++)if (t.valueNames[r].data){for (var i = t.valueNames[r].data, s = 0, a = i.length; s < a; s++)if (i[s] === e)return{data:e}} else{if (t.valueNames[r].attr && t.valueNames[r].name && t.valueNames[r].name == e)return t.valueNames[r]; if (t.valueNames[r] === e)return e}}(r); s && (s.data?e.elm.setAttribute("data-" + s.data, n):s.attr && s.name?(i = t.utils.getByClass(e.elm, s.name, !0)) && i.setAttribute(s.attr, n):(i = t.utils.getByClass(e.elm, s, !0)) && (i.innerHTML = n), i = void 0)}; if (!r.create(e))for (var s in n)n.hasOwnProperty(s) && i(s, n[s])}, this.create = function(t){if (void 0 !== t.elm)return!1; if (void 0 === e)throw new Error("The list need to have at list one item on init otherwise you'll have to add a template."); var n = e.cloneNode(!0); return n.removeAttribute("id"), t.elm = n, r.set(t, t.values()), !0}, this.remove = function(e){e.elm.parentNode === t.list && t.list.removeChild(e.elm)}, this.show = function(e){r.create(e), t.list.appendChild(e.elm)}, this.hide = function(e){void 0 !== e.elm && e.elm.parentNode === t.list && t.list.removeChild(e.elm)}, this.clear = function(){if (t.list.hasChildNodes())for (; t.list.childNodes.length >= 1; )t.list.removeChild(t.list.firstChild)}, (e = r.getItemSource(t.item)) && (e = r.clearSourceItem(e, t.valueNames))}; t.exports = function(t){return new r(t)}}, function(t, e){t.exports = function(t, e){var r = t.getAttribute && t.getAttribute(e) || null; if (!r)for (var n = t.attributes.length, i = 0; i < n; i++)void 0 !== e[i] && e[i].nodeName === e && (r = e[i].nodeValue); return r}}, function(t, e, r){"use strict"; var n, i, s = 0; function a(t){return t >= 48 && t <= 57}function o(t, e){for (var r = (t += "").length, n = (e += "").length, o = 0, l = 0; o < r && l < n; ){var u = t.charCodeAt(o), c = e.charCodeAt(l); if (a(u)){if (!a(c))return u - c; for (var f = o, h = l; 48 === u && ++f < r; )u = t.charCodeAt(f); for (; 48 === c && ++h < n; )c = e.charCodeAt(h); for (var d = f, v = h; d < r && a(t.charCodeAt(d)); )++d; for (; v < n && a(e.charCodeAt(v)); )++v; var m = d - f - v + h; if (m)return m; for (; f < d; )if (m = t.charCodeAt(f++) - e.charCodeAt(h++))return m; o = d, l = v} else{if (u !== c)return u < s && c < s && - 1 !== i[u] && - 1 !== i[c]?i[u] - i[c]:u - c; ++o, ++l}}return r - n}o.caseInsensitive = o.i = function(t, e){return o(("" + t).toLowerCase(), ("" + e).toLowerCase())}, Object.defineProperties(o, {alphabet:{get:function(){return n}, set:function(t){i = []; var e = 0; if (n = t)for (; e < n.length; e++)i[n.charCodeAt(e)] = e; for (s = i.length, e = 0; e < s; e++)void 0 === i[e] && (i[e] = - 1)}}}), t.exports = o}, function(t, e){t.exports = function(t, e, r){var n = r.location || 0, i = r.distance || 100, s = r.threshold || .4; if (e === t)return!0; if (e.length > 32)return!1; var a = n, o = function(){var t, r = {}; for (t = 0; t < e.length; t++)r[e.charAt(t)] = 0; for (t = 0; t < e.length; t++)r[e.charAt(t)] |= 1 << e.length - t - 1; return r}(); function l(t, r){var n = t / e.length, s = Math.abs(a - r); return i?n + s / i:s?1:n}var u = s, c = t.indexOf(e, a); - 1 != c && (u = Math.min(l(0, c), u), - 1 != (c = t.lastIndexOf(e, a + e.length)) && (u = Math.min(l(0, c), u))); var f, h, d = 1 << e.length - 1; c = - 1; for (var v, m = e.length + t.length, g = 0; g < e.length; g++){for (f = 0, h = m; f < h; )l(g, a + h) <= u?f = h:m = h, h = Math.floor((m - f) / 2 + f); m = h; var p = Math.max(1, a - h + 1), C = Math.min(a + h, t.length) + e.length, y = Array(C + 2); y[C + 1] = (1 << g) - 1; for (var b = C; b >= p; b--){var w = o[t.charAt(b - 1)]; if (y[b] = 0 === g?(y[b + 1] << 1 | 1) & w:(y[b + 1] << 1 | 1) & w | (v[b + 1] | v[b]) << 1 | 1 | v[b + 1], y[b] & d){var x = l(g, b - 1); if (x <= u){if (u = x, !((c = b - 1) > a))break; p = Math.max(1, 2 * a - c)}}}if (l(g + 1, a) > u)break; v = y}return!(c < 0)}}]);
window.flitsApp.top_products = function(){
  var url = "/top_product_from_all_order";
  var that = this;
  var search_list = null;
  var per_page_limit = 4;
  this.get_products = function(){
    var call_url = flitsAppJquery('#flits-customer-url').val() + url;
    flitsAppJquery.ajax({
      url:call_url,
      timeout :0,
      method:"GET",
      data:{
        customer_hash: window.flitsApp.customer_hash, token:flitsAppJquery("#flits-token").val()
      },
      success:that.view_products,
      error:function(jqXHR, textStatus, errorThrown){
        flitsAppJquery('.flits-loading-icon').hide();
        flitsAppJquery('.flits-top-products-empty').show();
        flitsAppJquery('.flits-top-products-content').hide();
      }
    });
  };
  this.view_products = function(data){
    flitsAppJquery('.flits-loading-icon').hide();
    if (data.status && data.orders_count > 0){
      flitsAppJquery('.flits-top-products-empty').hide();
      flitsAppJquery('.flits-top-products-content').show();
      var products = data.products;
      var moneyFormat = flitsAppJquery("#flits-shop-money-format").val();
      var product_datas = data.products_data;
      flitsAppJquery.each(products, function(index, product){

        var $item = flitsAppJquery('.flits-products-items-row-default').clone();
        $item.removeClass('flits-products-items-row-default');
        $item.addClass('flits-products-items-row');
        var today_date = new Date();
        var product_date = new Date(product.last_date);
        $item.attr('data-days', that.numDaysBetween(product_date, today_date));
        var order_item_product = product_datas[product.id];
        $item.removeClass('flits-hidden');
        $item.find('.flits-image').attr('src', order_item_product.image.src);
        $item.find('.flits-product-item-title').attr('title', order_item_product.title);
        $item.find('.flits-product-link').attr('href', '/products/' + order_item_product.handle);
        $item.find('.flits-product-item-title').html(order_item_product.title);
        $item.find('.flits-product-item-price').attr('data-price', parseInt(order_item_product.variants[0].price * 100));
        $item.find('.flits-product-item-price').attr('title', window.flitsApp.formatMoney(Math.abs(order_item_product.variants[0].price * 100), moneyFormat).replace(/((\,00)|(\.00))$/g, ''));
        $item.find('.flits-product-item-price').html(window.flitsApp.formatMoney(Math.abs(order_item_product.variants[0].price * 100), moneyFormat).replace(/((\,00)|(\.00))$/g, ''));
        $item.find('.flits-product-item-count .flits-count').html(product.count);
        var variant_select = flitsAppJquery('<select/>');
        variant_select.attr('name', 'id');
        variant_select.addClass('flits-full-width flits-p-8 flits-p-r-30');
        $item.find('.flits-product-variant').html(variant_select);
        flitsAppJquery.each(order_item_product.variants, function(var_index, variant){
          var option = flitsAppJquery('<option/>');
          option.html(variant.title);
          option.attr('value', variant.id);
          variant_select.append(option);
        });
        flitsAppJquery('#flits-page-top-ordered-products .list').append($item);
      });
      var is_pagination = false;
      if(products.length > per_page_limit){
        is_pagination = true;
      }
      that.setup_search(is_pagination);
    }
    else{
      flitsAppJquery('.flits-top-products-empty').show();
      flitsAppJquery('.flits-top-products-content').hide();
    }

  };
  this.setup_search = function(is_pagination){
     var options = {
      valueNames: ['flits-product-item-title', 'flits-count', { data: ['days'] }, {name:'flits-product-item-price', attr:'data-price'}],
      page:per_page_limit,
      searchClass :'flits-search',
      
    };
    if(is_pagination){
		options.pagination = {
        paginationClass :'flits-pagination',
        right:1,
        left:1,
        innerWindow:1
      };
    }else{
//       options.pagination = false;
    }
    search_list = new flits_search_list('flits-page-top-ordered-products', options);
  };
  this.numDaysBetween = function(d1, d2) {
    var diff = Math.abs(d1.getTime() - d2.getTime());
    return parseInt(diff / (1000 * 60 * 60 * 24));
  };
  this.filter_days = function(days){
    search_list.filter(function(item) {
      if (parseInt(item.values().days) <= days) {
        return true;
      } else {
        return false;
      }
    });
    // 		search_list.search(days,{ data: ['days'] });
  };
  this.sort_list = function(sort, type){
    search_list.sort(sort, { order: type });
  };
  this.add_filter_event = function(){
    flitsAppJquery(document).on('click', '.flits-products-filter', function(ev){
      var type = flitsAppJquery(this).attr('data-type');
      flitsAppJquery('.flits-products-filter.flits-active').removeClass('flits-active');
      flitsAppJquery(this).addClass('flits-active');
      flitsAppJquery('.flits-filter-text').html(flitsAppJquery(this).attr('data-text'));
      switch (type){
        case 'none':
          that.clear_filter();
          break;
        case 'sort':
          var sort_type = flitsAppJquery(this).attr('data-sort-type');
          var sort = flitsAppJquery(this).attr('data-sort');
          that.sort_list(sort, sort_type);
          break;
        case 'days':
          var days = flitsAppJquery(this).attr('data-days');
          that.filter_days(days);
          break;
      };
    });
  };
  this.clear_filter = function(){
    search_list.filter();
  };
  this.get_products();
  this.add_filter_event();
};
        var div_anchor = document.querySelector('.flits-top-products-from-orders-extra-data .flits-anchor a');
        var div_div = document.querySelector('.flits-top-products-from-orders-extra-data .flits-div div');
        var orders = document.querySelector('.flits-nav a[data-href="#flits-page-orders"]');
        var address = document.querySelector('.flits-nav a[data-href="#flits-page-address"]');
        var pages_div = document.querySelector('.flits-pages');
        if (div_anchor){
          if (orders){
            address.parentNode.insertBefore(div_anchor, address);
          }
        }
if (div_div){
  if (pages_div){
    pages_div.append(div_div);
    window.flitsApp.top_products_interval = setInterval(function(){
      if (typeof flitsAppJquery == "undefined"){

      }
      else{
        clearInterval(window.flitsApp.top_products_interval);
        window.flitsApp.top_products_obj = new window.flitsApp.top_products();
        var page = location.hash.replace('#', '');
        if (page == "top-ordered-products"){
          flitsAppJquery("[data-href='#flits-page-" + page + "']").click();
        }
      }
    }, 1000);
  }
}
