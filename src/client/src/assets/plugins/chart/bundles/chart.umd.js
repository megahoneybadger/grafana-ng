(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('uilib'), require('@angular/common'), require('@angular/forms'), require('common'), require('primeng'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('chart', ['exports', '@angular/core', 'uilib', '@angular/common', '@angular/forms', 'common', 'primeng', 'rxjs/operators'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.chart = {}, global.ng.core, global.uilib, global.ng.common, global.ng.forms, global.common, global.i2, global.rxjs.operators));
}(this, (function (exports, i0, i1, common, forms, i1$1, i2, operators) { 'use strict';

    var ChartEditorComponent = /** @class */ (function () {
        function ChartEditorComponent() {
            this.tabs = [
                { text: 'General' },
                { text: 'Metrics', active: true },
                { text: 'Axes' }
            ];
        }
        return ChartEditorComponent;
    }());
    ChartEditorComponent.ɵfac = function ChartEditorComponent_Factory(t) { return new (t || ChartEditorComponent)(); };
    ChartEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ChartEditorComponent, selectors: [["widget-editor"]], decls: 1, vars: 1, consts: [[3, "megatabs"]], template: function ChartEditorComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "ed-tabstrip-editor", 0);
            }
            if (rf & 2) {
                i0.ɵɵproperty("megatabs", ctx.tabs);
            }
        }, directives: [i1.TabStripEditorComponent], styles: [".hide-text[_ngcontent-%COMP%]{background-color:transparent;border:0;color:transparent;font:0/0 a;text-shadow:none}.input-block-level[_ngcontent-%COMP%]{box-sizing:border-box;display:block;min-height:18px;width:100%}.animate-height[_ngcontent-%COMP%]{max-height:0;overflow:hidden}.animate-height--open[_ngcontent-%COMP%]{max-height:1000px;overflow:auto;transition:max-height .25s ease-in-out}.gf-tabs[_ngcontent-%COMP%]{float:left;position:relative;top:1px}.gf-tabs[_ngcontent-%COMP%]:after{clear:both;content:\"\";display:table}.gf-tabs-item[_ngcontent-%COMP%]{float:left;list-style:none}.gf-tabs-link[_ngcontent-%COMP%]{border:1px solid transparent;border-radius:3px 3px 0 0;border-top:0 solid transparent;color:#d8d9da;display:block;margin-right:.5rem;padding:10px 15px 9px;position:relative}.gf-tabs-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:5px}.gf-tabs-link[_ngcontent-%COMP%]   .gicon[_ngcontent-%COMP%]{position:relative;top:-2px}.gf-tabs-link[_ngcontent-%COMP%]:focus, .gf-tabs-link[_ngcontent-%COMP%]:hover{color:#fff}.gf-tabs-link.active[_ngcontent-%COMP%], .gf-tabs-link.active[_ngcontent-%COMP%]:focus, .gf-tabs-link.active[_ngcontent-%COMP%]:hover{background:#161719;border-color:#eb7b18 #333 transparent;color:#e3e3e3;overflow:hidden}.gf-tabs-link.active[_ngcontent-%COMP%]:before, .gf-tabs-link.active[_ngcontent-%COMP%]:focus:before, .gf-tabs-link.active[_ngcontent-%COMP%]:hover:before{background-image:linear-gradient(90deg,#ffd500 0,#f40 99%,#f40);content:\" \";display:block;height:2px;left:0;position:absolute;right:0;top:0}.gf-tabs-link.active--panel[_ngcontent-%COMP%]{background:#212124!important}.tabbed-view[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}.tabbed-view.tabbed-view--new[_ngcontent-%COMP%]{height:100%;padding:25px 0 0}.tabbed-view-header[_ngcontent-%COMP%]{border-bottom:1px solid #333;box-shadow:inset 0 -4px 14px #1f1f20}.tabbed-view-header[_ngcontent-%COMP%]:after{clear:both;content:\"\";display:table}.tabbed-view-title[_ngcontent-%COMP%]{float:left;margin:0 3rem 0 1rem;padding-top:.5rem}.tabbed-view-panel-title[_ngcontent-%COMP%]{float:left;margin:0 2rem 0 0;padding-top:9px}.tabbed-view-close-btn[_ngcontent-%COMP%]{background-color:transparent;border:none;color:#d8d9da;float:right;margin:0;padding:10px 15px 9px}.tabbed-view-close-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:120%}.tabbed-view-close-btn[_ngcontent-%COMP%]:hover{color:#fff}.tabbed-view-body[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;padding:2rem 1rem 1rem}.tabbed-view-body--small[_ngcontent-%COMP%]{min-height:0;padding-bottom:0}.section-heading[_ngcontent-%COMP%]{font-size:1.1rem;margin-bottom:.6rem}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ChartEditorComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'widget-editor',
                        templateUrl: './editor.html',
                        styleUrls: ['./editor.scss']
                    }]
            }], function () { return []; }, null);
    })();

    var PixelHelper = /** @class */ (function () {
        function PixelHelper() {
        }
        PixelHelper.alignPixel = function (chart, pixel, width) {
            var devicePixelRatio = chart.currentDevicePixelRatio;
            var halfWidth = width / 2;
            return Math.round((pixel - halfWidth) * devicePixelRatio) / devicePixelRatio + halfWidth;
        };
        ;
        return PixelHelper;
    }());

    var TrackballDrawerPlugin = /** @class */ (function () {
        function TrackballDrawerPlugin() {
        }
        Object.defineProperty(TrackballDrawerPlugin.prototype, "id", {
            get: function () {
                return TrackballDrawerPlugin.ID;
            },
            enumerable: false,
            configurable: true
        });
        TrackballDrawerPlugin.prototype.afterDatasetsDraw = function (chart, easing) {
            //console.log( "trackball plugin" )
            return;
            var context = chart.chart.ctx;
            var scaleX = chart.scales['x-axis-0'];
            //const scaleYA = chart.scales[ "A" ];
            var scaleYA = chart.scales["y-axis-0"];
            var pos = this.getMousePos(chart.canvas, chart.trackball);
            console.log(pos);
            var shouldIgnore = (!chart.trackball) ||
                (0 == chart.data.datasets.length) ||
                (pos.x < scaleX.left || pos.x > scaleX.right);
            if (shouldIgnore) {
                return;
            }
            var lw = 0.8;
            var x = PixelHelper.alignPixel(chart, pos.x, lw);
            var y1 = PixelHelper.alignPixel(chart, scaleYA.top, lw);
            var y2 = PixelHelper.alignPixel(chart, scaleYA.bottom, lw);
            context.beginPath();
            context.strokeStyle = "#880015";
            context.lineWidth = lw;
            context.moveTo(x, y1);
            context.lineTo(x, y2);
            context.stroke();
        };
        TrackballDrawerPlugin.prototype.getMousePos = function (canvas, evt) {
            if (!evt) {
                return;
            }
            var rect = canvas.getBoundingClientRect();
            return {
                x: evt.clientX - rect.left,
                y: evt.clientY - rect.top
            };
        };
        return TrackballDrawerPlugin;
    }());
    TrackballDrawerPlugin.ID = "trackball";

    var PANEL_TOKEN = "panel";

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    function __createBinding(o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    }
    function __exportStar(m, exports) {
        for (var p in m)
            if (p !== "default" && !exports.hasOwnProperty(p))
                exports[p] = m[p];
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (Object.hasOwnProperty.call(mod, k))
                    result[k] = mod[k];
        result.default = mod;
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var ColorHelper = /** @class */ (function () {
        function ColorHelper() {
        }
        ColorHelper.getColor = function (ds) {
            var color = this.palette[ds.index % this.palette.length];
            return this.hexToRgb(color);
        };
        ColorHelper.getColorAsArgbFunc = function (ds, opacity) {
            if (opacity === void 0) { opacity = 1; }
            var color = this.getColor(ds);
            return "rgba(" + color.r + "," + color.g + "," + color.b + ", " + opacity + ")";
        };
        ColorHelper.hexToRgb = function (hex) {
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            } : null;
        };
        ColorHelper.parse = function (input) {
            var arr = [];
            if (input.substr(0, 1) == "#") {
                var collen = (input.length - 1) / 3;
                var fact = [17, 1, 0.062272][collen - 1];
                arr = [
                    Math.round(parseInt(input.substr(1, collen), 16) * fact),
                    Math.round(parseInt(input.substr(1 + collen, collen), 16) * fact),
                    Math.round(parseInt(input.substr(1 + 2 * collen, collen), 16) * fact)
                ];
            }
            else {
                arr = input.split("(")[1].split(")")[0].split(",").map(Math.round);
            }
            return {
                r: arr[0],
                g: arr[1],
                b: arr[2]
            };
        };
        ColorHelper.rgbToHex = function (e) {
            var c = ColorHelper.parse(e);
            var r = c.r.toString(16).padStart(2, "0");
            var g = c.g.toString(16).padStart(2, "0");
            var b = c.b.toString(16).padStart(2, "0");
            return "#" + r + g + b;
        };
        return ColorHelper;
    }());
    ColorHelper.palette = [
        "7eb26d",
        "cca300",
        "6ed0e0",
        "EF843C",
        "E24D42",
        "1F78C1",
        "BA43A9",
        "705DA0",
        "508642",
        "CCA300",
        "447EBC",
        "C15C17",
        "890F02",
        "0A437C",
        "6D1F62",
        "584477",
        "B7DBAB",
        "F4D598",
        "70DBED",
        "F9BA8F",
        "F29191",
        "82B5D8",
        "E5A8E2",
        "AEA2E0",
        "629E51",
        "E5AC0E",
        "64B0C8",
        "E0752D",
        "BF1B00",
        "0A50A1",
        "962D82",
        "614D93",
        "9AC48A",
        "F2C96D",
        "65C5DB",
        "F9934E",
        "5195CE",
        "D683CE",
        "806EB7",
        "3F6833",
        "967302",
        "2F575E",
        "99440A",
        "58140C",
        "052B51",
        "511749",
        "3F2B5B",
        "E0F9D7",
        "FCEACA",
        "CFFAFF",
        "F9E2D2",
        "FCE2DE",
        "BADFF4",
        "F9D9F9",
        "DEDAF7",
        "EA6460"
    ];

    var DisplayManager = /** @class */ (function () {
        function DisplayManager(panel) {
            this.panel = panel;
        }
        Object.defineProperty(DisplayManager.prototype, "display", {
            get: function () {
                return this.panel.widget.display;
            },
            enumerable: false,
            configurable: true
        });
        DisplayManager.prototype.setup = function (ds) {
            //this.setupSecondaryYAxis();					
            this.setupLines(ds);
            this.setupPoints(ds);
            this.setupNullValue(ds);
            //this.chart.options.scales.yAxes[ 0 ].stacked = this.chart.widget.display.stack;
        };
        DisplayManager.prototype.setupLines = function (ds) {
            var showLines = this.getShowLines(ds);
            var lineWidth = this.getLineWidth(ds);
            var fill = this.getFill(ds);
            var opacity = (fill / 10);
            ds.fill = ( /*showLines &&*/fill > 0);
            ds.backgroundColor = this.getLineColor(ds, opacity);
            opacity = (showLines && lineWidth) ? 1 : 0;
            ds.borderColor = this.getLineColor(ds, opacity);
            ds.borderWidth = lineWidth;
            ds.steppedLine = this.getStaircase(ds);
            if (this.getDashes(ds)) {
                var len = this.getDashLength(ds);
                var space = this.getDashSpace(ds);
                ds.borderDash = [len, space];
            }
            else {
                ds.borderDash = undefined;
            }
            ds.order = this.getZIndex(ds);
            ds.legend = this.getLegend(ds);
            // ds.yAxisID = ( 1 == this.getYAxis( ds ) ) ? 'A': 'B';
        };
        DisplayManager.prototype.setupPoints = function (ds) {
            var showPoints = this.getShowPoints(ds);
            var opacity = showPoints ? 1 : 0;
            var color = this.getLineColor(ds, opacity);
            ds.pointBorderColor = "" + color;
            ds.pointBackgroundColor = "" + color;
            ds.pointRadius = showPoints ? this.getPointRadius(ds) : 0;
        };
        DisplayManager.prototype.setupNullValue = function (ds) {
            switch (parseInt(this.display.nullValue)) {
                // case CartesianChart.NullValue.Connected:
                // 	this.chart.options.spanGaps = true;
                // 	ds.data.forEach( p => p.y = p.isNull ? null : p.y );
                // 	break;
                // case CartesianChart.NullValue.Null:
                // 	this.chart.options.spanGaps = false;
                // 	ds.data.forEach( p => p.y = p.isNull ? null : p.y );
                // 	break;
                // case CartesianChart.NullValue.NullAsZero:
                // 	this.chart.options.spanGaps = false;
                // 	ds.data.forEach( p => p.y = p.isNull ? 0 : p.y );
                // 	break;
            }
        };
        DisplayManager.prototype.setupOverrides = function () {
            // const needSecondaryYAxis = AxesManager.needSecondaryYAxis( this.chart.widget );
            // const actualSecondaryYAxisUsers = this
            // 	.datasets
            // 	.filter( x => x.yAxisID == 'B' )
            // 	.length
            // const yAxesCount = this.chart.options.scales.yAxes.length;
            // if( 2 == yAxesCount && !needSecondaryYAxis ){
            // 	this.chart.options.scales.yAxes.splice( 1, 1 );
            // } else if( /*1 == yAxesCount && needSecondaryYAxis*/ actualSecondaryYAxisUsers != needSecondaryYAxis ){
            // 	this.chart.destroy();
            // 	this.chart.needRebuild.emit();
            // 	this.chart = undefined;
            // 	return;
            // }
            // this.datasets.forEach(x => this.setup(x));
        };
        DisplayManager.prototype.getShowLines = function (ds) {
            var o = this.getOverride(ds);
            return (o && undefined != o.lines) ? o.lines : this.display.showLines;
        };
        DisplayManager.prototype.getLineWidth = function (ds) {
            var o = this.getOverride(ds);
            return (o && undefined != o.lineWidth) ? o.lineWidth : this.display.lineWidth;
        };
        DisplayManager.prototype.getLineColor = function (ds, opacity) {
            var o = this.getOverride(ds);
            var defaultColor = ColorHelper.getColorAsArgbFunc(ds, opacity);
            var useOverride = (o && undefined != o.color);
            var overrideColor;
            if (useOverride) {
                var color = ColorHelper.parse(o.color);
                overrideColor = "rgba(" + color.r + "," + color.g + "," + color.b + "," + opacity + ")";
            }
            return (useOverride) ? overrideColor : defaultColor;
        };
        DisplayManager.prototype.getFill = function (ds) {
            var o = this.getOverride(ds);
            return (o && undefined != o.lineFill) ? o.lineFill : this.display.fill;
        };
        DisplayManager.prototype.getStaircase = function (ds) {
            var o = this.getOverride(ds);
            return (o && undefined != o.staircase) ? o.staircase : this.display.staircase;
        };
        DisplayManager.prototype.getDashes = function (ds) {
            var o = this.getOverride(ds);
            return (o && undefined != o.dashes) ? o.dashes : false;
        };
        DisplayManager.prototype.getDashLength = function (ds) {
            var o = this.getOverride(ds);
            return (o && undefined != o.dashLength) ? o.dashLength : 1;
        };
        DisplayManager.prototype.getDashSpace = function (ds) {
            var o = this.getOverride(ds);
            return (o && undefined != o.dashSpace) ? o.dashSpace : 1;
        };
        DisplayManager.prototype.getShowPoints = function (ds) {
            var o = this.getOverride(ds);
            return (o && undefined != o.points) ? o.points : this.display.showPoints;
        };
        DisplayManager.prototype.getPointRadius = function (ds) {
            var o = this.getOverride(ds);
            return (o && undefined != o.pointRadius) ? o.pointRadius : this.display.pointRadius;
        };
        DisplayManager.prototype.getLegend = function (ds) {
            var o = this.getOverride(ds);
            return (o && undefined != o.legend) ? o.legend : true;
        };
        DisplayManager.prototype.getZIndex = function (ds) {
            var o = this.getOverride(ds);
            return (o && undefined != o.zIndex) ? o.zIndex : 0;
        };
        DisplayManager.prototype.getYAxis = function (ds) {
            var o = this.getOverride(ds);
            return (o && undefined != o.yAxis) ? o.yAxis : 1;
        };
        DisplayManager.prototype.getOverride = function (ds) {
            return this
                .display
                .overrides
                .find(function (x) { return x.alias && new RegExp(x.alias).test(ds.label); });
        };
        return DisplayManager;
    }());
    DisplayManager.ɵfac = function DisplayManager_Factory(t) { return new (t || DisplayManager)(i0.ɵɵinject(PANEL_TOKEN)); };
    DisplayManager.ɵprov = i0.ɵɵdefineInjectable({ token: DisplayManager, factory: DisplayManager.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DisplayManager, [{
                type: i0.Injectable
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [PANEL_TOKEN]
                        }] }];
        }, null);
    })();

    var DataConverter = /** @class */ (function () {
        function DataConverter(dispay) {
            this.dispay = dispay;
        }
        DataConverter.prototype.toDataSets = function (data) {
            var _this = this;
            if (!data || 0 === data.length) {
                return [];
            }
            var dataSets = [];
            var totalIndex = 0;
            data.forEach(function (serie) {
                var columns = serie.columns.slice(1);
                var arr = __spread(columns.map(function (el, index) { return _this.toDataSet(serie, index + 1, totalIndex++); })).filter(function (x) { return x; });
                dataSets = __spread(dataSets, arr);
                dataSets.forEach(function (x) { return _this.dispay.setup(x); });
            });
            //this.chart.widget.error = undefined;
            return dataSets;
        };
        DataConverter.prototype.toDataSet = function (serie, index, totalIndex) {
            var values = serie
                .values
                .map(function (x) {
                var isNull = (null == x[index]);
                return {
                    x: i1$1.Moment.valueOf(x[0]),
                    y: (isNull) ? x[index] : x[index],
                    isNull: isNull
                };
            });
            var filteredValues = values
                .map(function (p) { return p.y; })
                .filter(function (p) { return null != p; })
                .map(function (p) { return parseFloat(p); });
            if (0 == filteredValues.length) {
                return;
            }
            var avg = (filteredValues.reduce(function (a, b) { return a + b; }) / filteredValues.length);
            var allNulls = filteredValues.every(function (x) { return x == null; });
            var allZeros = filteredValues.every(function (x) { return x == 0; });
            var ds = {
                label: this.generateDataSetName(serie, index),
                data: values,
                lineTension: 0,
                min: Math.min.apply(Math, __spread(filteredValues)),
                max: Math.max.apply(Math, __spread(filteredValues)),
                avg: avg,
                current: filteredValues.slice(-1)[0],
                allNulls: allNulls,
                allZeros: allZeros,
                index: totalIndex,
                pointRadius: 0,
                borderColor: "#ff0000"
                //widget: this.chart.widget,
            };
            //ds.borderColor = new ColorHelper().getColorAsArgbFunc( ds, 1 );
            //console.log( ds.borderColor );
            //this.display.setup(ds);
            return ds;
        };
        DataConverter.prototype.generateDataSetName = function (serie, index) {
            var root = serie.name + "." + serie.columns[index];
            var tags = '';
            var keys = Object.keys(serie.tags);
            var keyIndex = 0;
            for (var key in serie.tags) {
                tags += "" + (keyIndex > 0 ? ', ' : '') + key + ": " + serie.tags[key];
                keyIndex++;
            }
            // serie.tags.forEach( ( t, index ) => tags = `${tags}${index > 0 ? ',': ''} tag` )
            if (tags) {
                root = root + " {" + tags + "}";
            }
            return root;
        };
        return DataConverter;
    }());
    DataConverter.ɵfac = function DataConverter_Factory(t) { return new (t || DataConverter)(i0.ɵɵinject(DisplayManager)); };
    DataConverter.ɵprov = i0.ɵɵdefineInjectable({ token: DataConverter, factory: DataConverter.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DataConverter, [{
                type: i0.Injectable
            }], function () { return [{ type: DisplayManager }]; }, null);
    })();

    var DataProvider = /** @class */ (function () {
        function DataProvider(pluginStore, dsService, converter, time, pluginLoader, injector, panel) {
            var _this = this;
            this.pluginStore = pluginStore;
            this.dsService = dsService;
            this.converter = converter;
            this.time = time;
            this.pluginLoader = pluginLoader;
            this.injector = injector;
            this.panel = panel;
            this.data$ = new i0.EventEmitter();
            this.timeSubs = this
                .time
                .range$
                .pipe(operators.tap(function (_) { return _this.request = ''; }), operators.mergeMap(function (_) { return _this.pluginStore.getDataSource("influx"); }), operators.mergeMap(function (p) { return _this.pluginLoader.loadDataSourceQueryCompiler(p, _this.injector); }), operators.mergeMap(function (c) { return c.compile(_this.metrics, time.range); }))
                .subscribe(function (x) { return _this.pull(x); });
        }
        Object.defineProperty(DataProvider.prototype, "metrics", {
            get: function () {
                var _a, _b;
                return (_b = (_a = this.panel) === null || _a === void 0 ? void 0 : _a.widget) === null || _b === void 0 ? void 0 : _b.metrics;
            },
            enumerable: false,
            configurable: true
        });
        DataProvider.prototype.destroy = function () {
            var _a;
            (_a = this.timeSubs) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        };
        DataProvider.prototype.pull = function (request) {
            var _this = this;
            if (this.request === request) {
                return;
            }
            this.request = request;
            console.log("pull: " + request);
            if (!request) {
                this.onData([]);
            }
            else {
                this.panel.loading = true;
                this
                    .dsService
                    .proxy(6, request)
                    .pipe(operators.finalize(function () { return _this.panel.loading = false; }))
                    .subscribe(function (x) { return _this.onData(x); }, function (e) { return _this.onError(e.error); });
            }
        };
        DataProvider.prototype.onData = function (x) {
            this.data$.emit({
                datasets: this.converter.toDataSets(x)
            });
        };
        DataProvider.prototype.onError = function (err) {
            // 	this.chart.data.datasets = []
            //  this.chart.update();
            //  this.chart.widget.error = err.details;
        };
        return DataProvider;
    }());
    DataProvider.ɵfac = function DataProvider_Factory(t) { return new (t || DataProvider)(i0.ɵɵinject(i1$1.PluginStore), i0.ɵɵinject(i1$1.DataSourceService), i0.ɵɵinject(DataConverter), i0.ɵɵinject(i1$1.TimeRangeStore), i0.ɵɵinject(i1$1.PluginLoader), i0.ɵɵinject(i0.Injector), i0.ɵɵinject(PANEL_TOKEN)); };
    DataProvider.ɵprov = i0.ɵɵdefineInjectable({ token: DataProvider, factory: DataProvider.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DataProvider, [{
                type: i0.Injectable
            }], function () {
            return [{ type: i1$1.PluginStore }, { type: i1$1.DataSourceService }, { type: DataConverter }, { type: i1$1.TimeRangeStore }, { type: i1$1.PluginLoader }, { type: i0.Injector }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [PANEL_TOKEN]
                        }] }];
        }, null);
    })();

    var OptionsProvider = /** @class */ (function () {
        function OptionsProvider() {
        }
        OptionsProvider.getOptions = function () {
            Chart.defaults.global.defaultFontColor = '#e3e3e3';
            Chart.defaults.global.defaultFontFamily = 'Roboto';
            Chart.defaults.global.defaultFontSize = 11;
            var axisYa = {
                id: 'A',
                gridLines: {
                    color: 'rgba( 255,255,255, 0.1)',
                    zeroLineWidth: 3,
                },
            };
            var axisYb = {
                id: 'B',
                position: 'right'
            };
            return {
                maintainAspectRatio: false,
                animation: false,
                legend: {
                    display: false
                },
                spanGaps: true,
                scales: {
                    xAxes: [{
                            type: 'time',
                            gridLines: {
                                color: 'rgba( 255,255,255, 0.1)',
                            },
                            ticks: {
                                autoSkip: true,
                                autoSkipPadding: 50,
                                maxRotation: 0,
                                minRotation: 0,
                            },
                            time: {
                                displayFormats: {
                                    second: 'HH:mm:ss',
                                    minute: 'HH:mm',
                                    hour: 'HH:mm',
                                    day: 'M/D HH:mm',
                                    week: 'M/D',
                                    month: 'M/D',
                                    year: 'YYYY-M',
                                },
                            },
                        }],
                    yAxes: /*!AxesManager.needSecondaryYAxis(widget)*/ true ? [axisYa] : [axisYa, axisYb]
                },
            };
        };
        return OptionsProvider;
    }());

    var ChartComponent = /** @class */ (function () {
        function ChartComponent(dataProvider) {
            var _this = this;
            this.dataProvider = dataProvider;
            this.plugins = [new TrackballDrawerPlugin()];
            this
                .dataProvider
                .data$
                .subscribe(function (d) { return _this.data = d; });
            this.options = OptionsProvider.getOptions();
        }
        ChartComponent.prototype.ngOnDestroy = function () {
            this.dataProvider.destroy();
        };
        return ChartComponent;
    }());
    ChartComponent.ɵfac = function ChartComponent_Factory(t) { return new (t || ChartComponent)(i0.ɵɵdirectiveInject(DataProvider)); };
    ChartComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ChartComponent, selectors: [["widget"]], features: [i0.ɵɵProvidersFeature([
                DataProvider,
                DataConverter,
                DisplayManager,
            ])], decls: 1, vars: 3, consts: [["type", "line", "height", "100%", 3, "data", "options", "plugins"]], template: function ChartComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "p-chart", 0);
            }
            if (rf & 2) {
                i0.ɵɵproperty("data", ctx.data)("options", ctx.options)("plugins", ctx.plugins);
            }
        }, directives: [i2.UIChart], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ChartComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'widget',
                        providers: [
                            DataProvider,
                            DataConverter,
                            DisplayManager,
                        ],
                        template: "\n    <p-chart \n      type=\"line\"\n      [data]=\"data\"\n      [options]=\"options\"\n      [plugins]=\"plugins\"\n      height=\"100%\">\n    </p-chart>\n  "
                    }]
            }], function () { return [{ type: DataProvider }]; }, null);
    })();

    var ChartWidgetModule = /** @class */ (function () {
        function ChartWidgetModule() {
        }
        return ChartWidgetModule;
    }());
    ChartWidgetModule.ɵmod = i0.ɵɵdefineNgModule({ type: ChartWidgetModule });
    ChartWidgetModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ChartWidgetModule_Factory(t) { return new (t || ChartWidgetModule)(); }, imports: [[
                common.CommonModule,
                forms.FormsModule,
                forms.ReactiveFormsModule,
                i2.ChartModule,
                i1$1.EdCommonModule,
                i1.EdUilibModule,
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ChartWidgetModule, { declarations: [ChartComponent,
                ChartEditorComponent], imports: [common.CommonModule,
                forms.FormsModule,
                forms.ReactiveFormsModule,
                i2.ChartModule,
                i1$1.EdCommonModule,
                i1.EdUilibModule], exports: [ChartComponent,
                ChartEditorComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ChartWidgetModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            ChartComponent,
                            ChartEditorComponent
                        ],
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            i2.ChartModule,
                            i1$1.EdCommonModule,
                            i1.EdUilibModule,
                        ],
                        exports: [
                            ChartComponent,
                            ChartEditorComponent
                        ]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of chart
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ChartComponent = ChartComponent;
    exports.ChartEditorComponent = ChartEditorComponent;
    exports.ChartWidgetModule = ChartWidgetModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=chart.umd.js.map
