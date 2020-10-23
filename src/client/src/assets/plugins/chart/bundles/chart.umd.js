(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@angular/common'), require('uilib'), require('@angular/forms'), require('common'), require('ngx-perfect-scrollbar'), require('primeng'), require('rxjs/operators'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('chart', ['exports', '@angular/core', '@angular/router', '@angular/common', 'uilib', '@angular/forms', 'common', 'ngx-perfect-scrollbar', 'primeng', 'rxjs/operators', 'rxjs'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.chart = {}, global.ng.core, global.ng.router, global.ng.common, global.uilib, global.ng.forms, global.common, global.i3$1, global.i2$2, global.rxjs.operators, global.rxjs));
}(this, (function (exports, i0, i1, i2$1, i3, i2, i1$1, i3$1, i2$2, operators, rxjs) { 'use strict';

    var GeneralEditorComponent = /** @class */ (function () {
        function GeneralEditorComponent() {
        }
        GeneralEditorComponent.prototype.ngOnInit = function () {
            console.log('create GeneralEditorComponent');
        };
        GeneralEditorComponent.prototype.ngOnDestroy = function () {
            console.log('detroy GeneralEditorComponent');
        };
        return GeneralEditorComponent;
    }());
    GeneralEditorComponent.ɵfac = function GeneralEditorComponent_Factory(t) { return new (t || GeneralEditorComponent)(); };
    GeneralEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GeneralEditorComponent, selectors: [["editor-general"]], decls: 1, vars: 0, template: function GeneralEditorComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtext(0, "general will be here");
            }
        }, encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(GeneralEditorComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'editor-general',
                        templateUrl: './general.html'
                    }]
            }], null, null);
    })();

    var PANEL_TOKEN = "panel";

    var MetricsEditorComponent = /** @class */ (function () {
        function MetricsEditorComponent(panel) {
            this.panel = panel;
        }
        MetricsEditorComponent.prototype.ngOnInit = function () {
            console.log('create MetricsComponent');
            console.log(this.panel);
        };
        MetricsEditorComponent.prototype.ngOnDestroy = function () {
            console.log('detroy MetricsComponent');
        };
        return MetricsEditorComponent;
    }());
    MetricsEditorComponent.ɵfac = function MetricsEditorComponent_Factory(t) { return new (t || MetricsEditorComponent)(i0.ɵɵdirectiveInject(PANEL_TOKEN)); };
    MetricsEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MetricsEditorComponent, selectors: [["editor-metrics"]], decls: 1, vars: 0, template: function MetricsEditorComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtext(0, "metrics will be here");
            }
        }, encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MetricsEditorComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'editor-metrics',
                        templateUrl: './metrics.html'
                    }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [PANEL_TOKEN]
                        }] }];
        }, null);
    })();

    var AxesEditorComponent = /** @class */ (function () {
        function AxesEditorComponent() {
        }
        AxesEditorComponent.prototype.ngOnInit = function () {
            console.log('create AxesEditorComponent');
        };
        AxesEditorComponent.prototype.ngOnDestroy = function () {
            console.log('detroy AxesEditorComponent');
        };
        return AxesEditorComponent;
    }());
    AxesEditorComponent.ɵfac = function AxesEditorComponent_Factory(t) { return new (t || AxesEditorComponent)(); };
    AxesEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AxesEditorComponent, selectors: [["editor-axes"]], decls: 1, vars: 0, template: function AxesEditorComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtext(0, "axes will be here");
            }
        }, encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AxesEditorComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'editor-axes',
                        templateUrl: './axes.html'
                    }]
            }], null, null);
    })();

    var LegendEditorComponent = /** @class */ (function () {
        function LegendEditorComponent(panel) {
            this.panel = panel;
        }
        Object.defineProperty(LegendEditorComponent.prototype, "legend", {
            get: function () {
                var _a, _b;
                return (_b = (_a = this.panel) === null || _a === void 0 ? void 0 : _a.widget) === null || _b === void 0 ? void 0 : _b.legend;
            },
            enumerable: false,
            configurable: true
        });
        return LegendEditorComponent;
    }());
    LegendEditorComponent.ɵfac = function LegendEditorComponent_Factory(t) { return new (t || LegendEditorComponent)(i0.ɵɵdirectiveInject(PANEL_TOKEN)); };
    LegendEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LegendEditorComponent, selectors: [["editor-legend"]], decls: 22, vars: 10, consts: [[1, "section", "gf-form-group"], [1, "section-heading"], ["labelWidth", "7", "label", "Show", 3, "ngModel", "ngModelChange"], ["labelWidth", "7", "label", "As Table", 3, "ngModel", "ngModelChange"], ["labelWidth", "7", "label", "To the right", 3, "ngModel", "ngModelChange"], [1, "gf-form-inline"], ["labelWidth", "4", "label", "Min", 3, "ngModel", "ngModelChange"], ["labelWidth", "6", "label", "Min", 3, "ngModel", "ngModelChange"], ["labelWidth", "4", "label", "Avg", 3, "ngModel", "ngModelChange"], ["labelWidth", "6", "label", "Current", 3, "ngModel", "ngModelChange"], ["labelWidth", "4", "label", "Total", 3, "ngModel", "ngModelChange"], ["labelWidth", "10", "label", "With only nulls", 3, "ngModel", "ngModelChange"], ["labelWidth", "10", "label", "With only zeros", 3, "ngModel", "ngModelChange"]], template: function LegendEditorComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "h5", 1);
                i0.ɵɵtext(2, "Options");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "ed-checkbox", 2);
                i0.ɵɵlistener("ngModelChange", function LegendEditorComponent_Template_ed_checkbox_ngModelChange_3_listener($event) { return ctx.legend.show = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "ed-checkbox", 3);
                i0.ɵɵlistener("ngModelChange", function LegendEditorComponent_Template_ed_checkbox_ngModelChange_4_listener($event) { return ctx.legend.table = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "ed-checkbox", 4);
                i0.ɵɵlistener("ngModelChange", function LegendEditorComponent_Template_ed_checkbox_ngModelChange_5_listener($event) { return ctx.legend.right = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "div", 0);
                i0.ɵɵelementStart(7, "h5", 1);
                i0.ɵɵtext(8, "Values");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "div", 5);
                i0.ɵɵelementStart(10, "ed-checkbox", 6);
                i0.ɵɵlistener("ngModelChange", function LegendEditorComponent_Template_ed_checkbox_ngModelChange_10_listener($event) { return ctx.legend.min = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(11, "ed-checkbox", 7);
                i0.ɵɵlistener("ngModelChange", function LegendEditorComponent_Template_ed_checkbox_ngModelChange_11_listener($event) { return ctx.legend.max = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(12, "div", 5);
                i0.ɵɵelementStart(13, "ed-checkbox", 8);
                i0.ɵɵlistener("ngModelChange", function LegendEditorComponent_Template_ed_checkbox_ngModelChange_13_listener($event) { return ctx.legend.avg = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(14, "ed-checkbox", 9);
                i0.ɵɵlistener("ngModelChange", function LegendEditorComponent_Template_ed_checkbox_ngModelChange_14_listener($event) { return ctx.legend.current = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(15, "div", 5);
                i0.ɵɵelementStart(16, "ed-checkbox", 10);
                i0.ɵɵlistener("ngModelChange", function LegendEditorComponent_Template_ed_checkbox_ngModelChange_16_listener($event) { return ctx.legend.total = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(17, "div", 0);
                i0.ɵɵelementStart(18, "h5", 1);
                i0.ɵɵtext(19, "Hide series");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(20, "ed-checkbox", 11);
                i0.ɵɵlistener("ngModelChange", function LegendEditorComponent_Template_ed_checkbox_ngModelChange_20_listener($event) { return ctx.legend.hideOnlyNulls = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(21, "ed-checkbox", 12);
                i0.ɵɵlistener("ngModelChange", function LegendEditorComponent_Template_ed_checkbox_ngModelChange_21_listener($event) { return ctx.legend.hideOnlyZeroes = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngModel", ctx.legend.show);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngModel", ctx.legend.table);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngModel", ctx.legend.right);
                i0.ɵɵadvance(5);
                i0.ɵɵproperty("ngModel", ctx.legend.min);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngModel", ctx.legend.max);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngModel", ctx.legend.avg);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngModel", ctx.legend.current);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngModel", ctx.legend.total);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("ngModel", ctx.legend.hideOnlyNulls);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngModel", ctx.legend.hideOnlyZeroes);
            }
        }, directives: [i3.CheckBoxComponent, i2.NgControlStatus, i2.NgModel], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(LegendEditorComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'editor-legend',
                        templateUrl: './legend.html'
                    }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [PANEL_TOKEN]
                        }] }];
        }, null);
    })();

    function ChartEditorComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "editor-general");
        }
    }
    function ChartEditorComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "editor-metrics");
        }
    }
    function ChartEditorComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "editor-axes");
        }
    }
    function ChartEditorComponent_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "editor-legend");
        }
    }
    function ChartEditorComponent_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtext(0, " display will be here ");
        }
    }
    function ChartEditorComponent_ng_template_12_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtext(0, " alert will be here ");
        }
    }
    function ChartEditorComponent_ng_template_14_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtext(0, " time range will be here ");
        }
    }
    var ChartEditorComponent = /** @class */ (function () {
        function ChartEditorComponent(router, activatedRoute, location) {
            var _this = this;
            this.router = router;
            this.activatedRoute = activatedRoute;
            this.location = location;
            this.index = 0;
            this
                .activatedRoute
                .queryParamMap
                .subscribe(function (params) {
                var p = params.get('tab');
                if (Number.isInteger(+p)) {
                    _this.index = +p;
                }
            });
        }
        ChartEditorComponent.prototype.onTabSelected = function (index) {
            var url = this
                .router
                .createUrlTree([], {
                relativeTo: this.activatedRoute,
                queryParams: { tab: index },
                queryParamsHandling: 'merge',
            })
                .toString();
            this.location.go(url);
        };
        return ChartEditorComponent;
    }());
    ChartEditorComponent.ɵfac = function ChartEditorComponent_Factory(t) { return new (t || ChartEditorComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2$1.Location)); };
    ChartEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ChartEditorComponent, selectors: [["widget-editor"]], decls: 15, vars: 1, consts: [["header", "Graph", 3, "ngModel", "ngModelChange", "selected"], ["header", "General"], ["edTabContent", ""], ["header", "Metrics"], ["header", "Axes"], ["header", "Legend"], ["header", "Display"], ["header", "Alert"], ["header", "Time range"]], template: function ChartEditorComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "ed-tabstrip", 0);
                i0.ɵɵlistener("ngModelChange", function ChartEditorComponent_Template_ed_tabstrip_ngModelChange_0_listener($event) { return ctx.index = $event; })("selected", function ChartEditorComponent_Template_ed_tabstrip_selected_0_listener($event) { return ctx.onTabSelected($event); });
                i0.ɵɵelementStart(1, "ed-tab", 1);
                i0.ɵɵtemplate(2, ChartEditorComponent_ng_template_2_Template, 1, 0, "ng-template", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "ed-tab", 3);
                i0.ɵɵtemplate(4, ChartEditorComponent_ng_template_4_Template, 1, 0, "ng-template", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "ed-tab", 4);
                i0.ɵɵtemplate(6, ChartEditorComponent_ng_template_6_Template, 1, 0, "ng-template", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "ed-tab", 5);
                i0.ɵɵtemplate(8, ChartEditorComponent_ng_template_8_Template, 1, 0, "ng-template", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "ed-tab", 6);
                i0.ɵɵtemplate(10, ChartEditorComponent_ng_template_10_Template, 1, 0, "ng-template", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(11, "ed-tab", 7);
                i0.ɵɵtemplate(12, ChartEditorComponent_ng_template_12_Template, 1, 0, "ng-template", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(13, "ed-tab", 8);
                i0.ɵɵtemplate(14, ChartEditorComponent_ng_template_14_Template, 1, 0, "ng-template", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngModel", ctx.index);
            }
        }, directives: [i3.TabStripComponent, i2.NgControlStatus, i2.NgModel, i3.TabComponent, i3.TabContentTemplate, GeneralEditorComponent, MetricsEditorComponent, AxesEditorComponent, LegendEditorComponent], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ChartEditorComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'widget-editor',
                        templateUrl: './editor.html'
                    }]
            }], function () { return [{ type: i1.Router }, { type: i1.ActivatedRoute }, { type: i2$1.Location }]; }, null);
    })();

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
        function DataProvider(pluginActivator, dsService, converter, time, panel) {
            var _this = this;
            this.pluginActivator = pluginActivator;
            this.dsService = dsService;
            this.converter = converter;
            this.time = time;
            this.panel = panel;
            this.data$ = new i0.EventEmitter();
            this.timeSubs = this
                .time
                .range$
                .pipe(operators.tap(function (_) { return _this.request = ''; }), operators.mergeMap(function (_) { return _this.pluginActivator.createDataSourceMetricsBuilder(panel); }), operators.mergeMap(function (mb) { return mb.build(_this.metrics, time.range); }))
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
    DataProvider.ɵfac = function DataProvider_Factory(t) { return new (t || DataProvider)(i0.ɵɵinject(i1$1.PluginActivator), i0.ɵɵinject(i1$1.DataSourceService), i0.ɵɵinject(DataConverter), i0.ɵɵinject(i1$1.TimeRangeStore), i0.ɵɵinject(PANEL_TOKEN)); };
    DataProvider.ɵprov = i0.ɵɵdefineInjectable({ token: DataProvider, factory: DataProvider.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DataProvider, [{
                type: i0.Injectable
            }], function () {
            return [{ type: i1$1.PluginActivator }, { type: i1$1.DataSourceService }, { type: DataConverter }, { type: i1$1.TimeRangeStore }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [PANEL_TOKEN]
                        }] }];
        }, null);
    })();

    var AxisUnitType;
    (function (AxisUnitType) {
        AxisUnitType[AxisUnitType["None"] = 0] = "None";
        AxisUnitType[AxisUnitType["Common_Short"] = 1] = "Common_Short";
        AxisUnitType[AxisUnitType["Common_Percent"] = 2] = "Common_Percent";
        AxisUnitType[AxisUnitType["Common_Percent01"] = 3] = "Common_Percent01";
        AxisUnitType[AxisUnitType["Common_Humidity"] = 4] = "Common_Humidity";
        AxisUnitType[AxisUnitType["Common_Decibel"] = 5] = "Common_Decibel";
        AxisUnitType[AxisUnitType["Common_Hex0x"] = 6] = "Common_Hex0x";
        AxisUnitType[AxisUnitType["Common_Hex"] = 7] = "Common_Hex";
        AxisUnitType[AxisUnitType["Common_SciNotation"] = 8] = "Common_SciNotation";
        AxisUnitType[AxisUnitType["Common_LocaleString"] = 9] = "Common_LocaleString";
        AxisUnitType[AxisUnitType["Length_Millimetre"] = 10] = "Length_Millimetre";
        AxisUnitType[AxisUnitType["Length_Meter"] = 11] = "Length_Meter";
        AxisUnitType[AxisUnitType["Length_Feet"] = 12] = "Length_Feet";
        AxisUnitType[AxisUnitType["Length_Kilometer"] = 13] = "Length_Kilometer";
        AxisUnitType[AxisUnitType["Length_Mile"] = 14] = "Length_Mile";
        AxisUnitType[AxisUnitType["Area_SquareMeters"] = 15] = "Area_SquareMeters";
        AxisUnitType[AxisUnitType["Area_SquareFeet"] = 16] = "Area_SquareFeet";
        AxisUnitType[AxisUnitType["Area_SquareMiles"] = 17] = "Area_SquareMiles";
        AxisUnitType[AxisUnitType["Mass_Milligram"] = 18] = "Mass_Milligram";
        AxisUnitType[AxisUnitType["Mass_Gram"] = 19] = "Mass_Gram";
        AxisUnitType[AxisUnitType["Mass_Kilogram"] = 20] = "Mass_Kilogram";
        AxisUnitType[AxisUnitType["Mass_MetricTon"] = 21] = "Mass_MetricTon";
    })(AxisUnitType || (AxisUnitType = {}));
    var AxisUnit = /** @class */ (function () {
        function AxisUnit(type, label, unit, command) {
            this.type = type;
            this.label = label;
            this.unit = unit;
            this.command = command;
        }
        return AxisUnit;
    }());
    var AxisUnitHelper = /** @class */ (function () {
        function AxisUnitHelper() {
        }
        AxisUnitHelper.getData = function (unit) {
            switch (+unit) {
                case AxisUnitType.Common_Short:
                    return new AxisUnit(AxisUnitType.Common_Short, "short", "");
                case AxisUnitType.Common_Percent:
                    return new AxisUnit(AxisUnitType.Common_Percent, "percent (0-100)", "%");
                case AxisUnitType.Common_Percent01:
                    return new AxisUnit(AxisUnitType.Common_Percent01, "percent (0.0-1.0)", "%");
                case AxisUnitType.Common_Humidity:
                    return new AxisUnit(AxisUnitType.Common_Humidity, "humidity (%H)", "%H");
                case AxisUnitType.Common_Decibel:
                    return new AxisUnit(AxisUnitType.Common_Decibel, "decibel", "dB");
                case AxisUnitType.Common_Hex0x:
                    return new AxisUnit(AxisUnitType.Common_Hex0x, "hexadecimal (0x)", "");
                case AxisUnitType.Common_Hex:
                    return new AxisUnit(AxisUnitType.Common_Hex, "hexadecimal", "");
                case AxisUnitType.Common_SciNotation:
                    return new AxisUnit(AxisUnitType.Common_SciNotation, "scientific notation", "");
                case AxisUnitType.Common_LocaleString:
                    return new AxisUnit(AxisUnitType.Common_LocaleString, "locale string", "");
                case AxisUnitType.Length_Millimetre:
                    return new AxisUnit(AxisUnitType.Length_Millimetre, "millimetre (mm)", "mm");
                case AxisUnitType.Length_Meter:
                    return new AxisUnit(AxisUnitType.Length_Meter, "meter (m)", "m");
                case AxisUnitType.Length_Feet:
                    return new AxisUnit(AxisUnitType.Length_Feet, "feet (ft)", "ft");
                case AxisUnitType.Length_Kilometer:
                    return new AxisUnit(AxisUnitType.Length_Kilometer, "kilometer (km)", "km");
                case AxisUnitType.Length_Mile:
                    return new AxisUnit(AxisUnitType.Length_Mile, "mile (mi)", "mi");
                case AxisUnitType.Area_SquareMeters:
                    return new AxisUnit(AxisUnitType.Area_SquareMeters, "Square Meters (m²)", "m²");
                case AxisUnitType.Area_SquareFeet:
                    return new AxisUnit(AxisUnitType.Area_SquareFeet, "Square Feet (ft²)", "ft²");
                case AxisUnitType.Area_SquareMiles:
                    return new AxisUnit(AxisUnitType.Area_SquareMiles, "Square Miles (mi²)", "mi²");
                case AxisUnitType.Mass_Milligram:
                    return new AxisUnit(AxisUnitType.Mass_Milligram, "milligram (mg)", "mg");
                case AxisUnitType.Mass_Gram:
                    return new AxisUnit(AxisUnitType.Mass_Gram, "gram (g)", "g");
                case AxisUnitType.Mass_Kilogram:
                    return new AxisUnit(AxisUnitType.Mass_Kilogram, "kilogram (kg)", "kg");
                case AxisUnitType.Mass_MetricTon:
                    return new AxisUnit(AxisUnitType.Mass_MetricTon, "metric ton (t)", "t");
            }
            return new AxisUnit(AxisUnitType.None, "none", "");
        };
        AxisUnitHelper.getFormattedValue = function (label, unit, decimals) {
            var value = label.toFixed(decimals);
            var unitData = AxisUnitHelper.getData(unit);
            switch (unitData.type) {
                case AxisUnitType.Common_Hex:
                    return label.toString(16);
                case AxisUnitType.Common_Hex0x:
                    return "0x" + label.toString(16);
                case AxisUnitType.Common_Percent01:
                    return (100 * label).toFixed(decimals) + " %";
                case AxisUnitType.Common_SciNotation:
                    return label.toExponential(decimals);
                case AxisUnitType.Common_LocaleString:
                    return label.toLocaleString();
                case AxisUnitType.Common_Short:
                    return AxisUnitHelper.getShortFormattedValue(label, unit, decimals);
                case AxisUnitType.None:
                    return value;
                default:
                    return value + " " + unitData.unit;
            }
        };
        AxisUnitHelper.getShortFormattedValue = function (label, unit, decimals) {
            // if( label < 1000 ){
            // 	return label;
            // }
            var dev = 1;
            var u = '';
            if (label >= 1000 && label < 1000000) {
                u = 'K';
                dev = 1000;
            }
            else if (label >= 1000000 && label < 1000000000) {
                u = 'Mil';
                dev = 1000000;
            }
            else if (label >= 1000000000 && label < 1000000000000) {
                u = 'Bil';
                dev = 1000000000;
            }
            else if (label >= 1000000000000 && label < 1000000000000000) {
                u = 'Tri';
                dev = 1000000000000;
            }
            else if (label >= 1000000000000000 && label < 1000000000000000000) {
                u = 'Qdr';
                dev = 1000000000000000;
            }
            return (label / dev).toFixed(decimals) + " " + u;
        };
        return AxisUnitHelper;
    }());

    var TooltipBuilder = /** @class */ (function () {
        function TooltipBuilder() {
        }
        TooltipBuilder.build = function (comp) {
            Chart.Tooltip.positioners.custom = function (elements, eventPosition) {
                /** @type {Chart.Tooltip} */
                var tooltip = this;
                return {
                    x: eventPosition.x,
                    y: eventPosition.y
                };
            };
            return {
                mode: 'index',
                position: "custom",
                axis: 'x',
                intersect: false,
                caretSize: 0,
                xPadding: 10,
                bodySpacing: 5,
                titleAlign: 'right',
                enabled: false,
                custom: function (model) { return TooltipBuilder.createCustomElement(model, comp); }
            };
        };
        TooltipBuilder.createCustomElement = function (tooltipModel, comp) {
            var tooltipEl = TooltipBuilder.getRootElement();
            // Hide if no tooltip
            if (tooltipModel.opacity === 0 /*|| chart.showAnnotView*/) {
                tooltipEl.style.opacity = '0';
                return;
            }
            tooltipEl.classList.remove('above', 'below', 'no-transform');
            if (tooltipModel.yAlign) {
                tooltipEl.classList.add(tooltipModel.yAlign);
            }
            else {
                tooltipEl.classList.add('no-transform');
            }
            if (tooltipModel.body) {
                TooltipBuilder.createBody(tooltipModel, comp, tooltipEl);
            }
            TooltipBuilder.setPosition(tooltipModel, comp, tooltipEl);
        };
        TooltipBuilder.setPosition = function (tooltipModel, comp, tooltipEl) {
            var chart = comp.control.chart;
            var position = chart
                .canvas
                .getBoundingClientRect();
            var elWidth = document
                .getElementsByClassName(TooltipBuilder.TOOLTIP_SELECTOR)[0]
                .getBoundingClientRect()
                .width;
            var negMargin = (tooltipModel.caretX + elWidth > position.width) ?
                elWidth + 2 * tooltipModel.xPadding : 0;
            tooltipEl.style.opacity = '1';
            tooltipEl.style.position = 'absolute';
            tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX - negMargin + 'px';
            tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
            tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
            tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
            tooltipEl.style.pointerEvents = 'none';
        };
        TooltipBuilder.createBody = function (tooltipModel, comp, tooltipEl) {
            var chart = comp.control.chart;
            var titleLines = tooltipModel.title || [];
            var innerHtml = '';
            titleLines.forEach(function (title) {
                var date = Date.parse(title);
                var time = i1$1.Moment.format(date);
                innerHtml += "<div style=\"" + TooltipBuilder.classGraphTime + "\">" + time + "</div>";
            });
            var parsedBodyLines = TooltipBuilder.sort(tooltipModel, chart);
            parsedBodyLines.forEach(function (body, i) {
                var seriesName = body.seriesName, value = body.value, colorFunc = body.colorFunc;
                var seriesNameEl = "\n\t\t\t\t<div style=\"" + TooltipBuilder.classSeriesName + "\">\n\t\t\t\t\t<i class=\"fa fa-minus\" style=\"color:" + colorFunc + ";\"></i> " + seriesName + ":\n\t\t\t\t</div>";
                var w = comp.store.panel.widget;
                var ds = chart
                    .data
                    .datasets
                    .find(function (x) { return x.label == seriesName; });
                var axis = (ds.yAxisID == 'A') ? w.axes.leftY : w.axes.rightY;
                var decimals = w.legend.decimals ? w.legend.decimals : 1;
                var resValue = AxisUnitHelper.getFormattedValue(value, axis.unit, decimals);
                var valueEl = "<div style=\"" + TooltipBuilder.classSeriesValue + "\">" + resValue + "</div>";
                var item = "\n\t\t\t\t<div style=\"display: table-row\">\n\t\t\t\t\t" + seriesNameEl + "\n\t\t\t\t\t" + valueEl + "\n\t\t\t\t</div>";
                innerHtml += item;
            });
            var tableRoot = tooltipEl.querySelector("." + TooltipBuilder.TOOLTIP_SELECTOR);
            tableRoot.innerHTML = innerHtml;
        };
        TooltipBuilder.sort = function (tooltipModel, chart) {
            function getBody(bodyItem) {
                return bodyItem.lines;
            }
            var bodyLines = tooltipModel.body.map(getBody);
            // const sortOrder = +chart
            // 	.widget
            // 	.display
            // 	.tooltipSortOrder;
            var parsedBodyLines = [];
            bodyLines.forEach(function (body, i) {
                var colors = tooltipModel.labelColors[i];
                var color = ColorHelper.parse(colors.backgroundColor);
                var colorFunc = "rgba(" + color.r + "," + color.g + "," + color.b + ",1)";
                var index = body[0].lastIndexOf(':');
                var seriesName = body[0].substring(0, index);
                var value = parseFloat(tooltipModel.dataPoints[i].value);
                parsedBodyLines.push({ seriesName: seriesName, value: value, colorFunc: colorFunc });
            });
            // switch( sortOrder ){
            // 	// case CartesianChart.TooltipSortOrder.Increasing:
            // 	// 	parsedBodyLines.sort( (a, b) => a.value - b.value);
            // 	// 	break;
            // 	// case CartesianChart.TooltipSortOrder.Decreasing:
            // 	// 	parsedBodyLines.sort( (a, b) => b.value - a.value);
            // 	// 	break;
            // }
            return parsedBodyLines;
        };
        TooltipBuilder.getRootElement = function () {
            var tooltipEl = document.getElementById(TooltipBuilder.ID);
            // Create element on first render
            if (!tooltipEl) {
                tooltipEl = document.createElement('div');
                tooltipEl.id = TooltipBuilder.ID;
                tooltipEl.innerHTML = "<div style=\"" + TooltipBuilder.classGraphTooltip + ";\t" + TooltipBuilder.classGraphanaTooltip + "\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass='" + TooltipBuilder.TOOLTIP_SELECTOR + "'></div>";
                document.body.appendChild(tooltipEl);
            }
            return tooltipEl;
        };
        Object.defineProperty(TooltipBuilder, "classGraphTooltip", {
            get: function () {
                return "\n\t\t\twhite-space: nowrap;\n\t\t\tfont-size: 12px;\n\t\t\tbackground-color: #141414;\n\t\t\tcolor: #d8d9da;";
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TooltipBuilder, "classGraphanaTooltip", {
            get: function () {
                return "\n\t\t\tposition: absolute;\n\t\t\tpadding: 10px;\n\t\t\tfont-weight: 200;\n\t\t\tborder-radius: 5px;\n\t\t\tz-index: 9999;\n\t\t\tmax-width: 800px;\n\t\t\tmax-height: 600px;\n\t\t\toverflow: hidden;\n\t\t\tline-height: 14px;";
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TooltipBuilder, "classGraphTime", {
            get: function () {
                return "\n\t\t\ttext-align: center;\n\t\t\tposition: relative;\n\t\t\ttop: -3px;\n\t\t\tpadding: .2rem;\n\t\t\tfont-weight: 700;\n\t\t\tcolor: #d8d9da;";
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TooltipBuilder, "classSeriesName", {
            get: function () {
                return "\n\t\t\tdisplay: table-cell;\n\t\t\tpadding: .15rem;\n\t\t\tmax-width: 650px;\n\t\t\ttext-overflow: ellipsis;\n\t\t\toverflow: hidden;\n\t\t\tfont-weight: 400;";
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TooltipBuilder, "classSeriesValue", {
            get: function () {
                return "\n\t\t\tdisplay: table-cell;\n\t\t\tfont-weight: 700;\n\t\t\tpadding-left: 15px;\n\t\t\ttext-align: right;";
            },
            enumerable: false,
            configurable: true
        });
        return TooltipBuilder;
    }());
    TooltipBuilder.ID = "chartjs-tooltip";
    TooltipBuilder.TOOLTIP_SELECTOR = "ed-tooltip";

    var OptionsProvider = /** @class */ (function () {
        function OptionsProvider() {
        }
        OptionsProvider.getOptions = function (comp) {
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
                tooltips: TooltipBuilder.build(comp),
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

    var ChartStore = /** @class */ (function () {
        function ChartStore(dataProvider, display, panel) {
            var _this = this;
            this.dataProvider = dataProvider;
            this.display = display;
            this.panel = panel;
            this.widget = new rxjs.BehaviorSubject(null);
            this.widget$ = this.widget.asObservable();
            this.data = new rxjs.BehaviorSubject(null);
            this.data$ = this.data.asObservable();
            this.control_ = new rxjs.BehaviorSubject(null);
            this.control$ = this.control_.asObservable();
            dataProvider
                .data$
                .subscribe(function (x) { var _a; return _this.data.next((_a = x === null || x === void 0 ? void 0 : x.datasets) !== null && _a !== void 0 ? _a : []); });
            this.widget.next(panel.widget);
        }
        Object.defineProperty(ChartStore.prototype, "control", {
            get: function () {
                return this.control_.value;
            },
            set: function (ctrl) {
                this.control_.next(ctrl);
            },
            enumerable: false,
            configurable: true
        });
        ChartStore.prototype.destroy = function () {
            this.dataProvider.destroy();
        };
        return ChartStore;
    }());
    ChartStore.ɵfac = function ChartStore_Factory(t) { return new (t || ChartStore)(i0.ɵɵinject(DataProvider), i0.ɵɵinject(DisplayManager), i0.ɵɵinject(i1$1.PANEL_TOKEN)); };
    ChartStore.ɵprov = i0.ɵɵdefineInjectable({ token: ChartStore, factory: ChartStore.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ChartStore, [{
                type: i0.Injectable
            }], function () {
            return [{ type: DataProvider }, { type: DisplayManager }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1$1.PANEL_TOKEN]
                        }] }];
        }, null);
    })();

    var BaseChartComponent = /** @class */ (function () {
        function BaseChartComponent(store) {
            var _this = this;
            this.store = store;
            this.dataSubs = store
                .data$
                .subscribe(function (x) { return _this.data = {
                datasets: x
            }; });
            this.widgetSubs = store
                .widget$
                .subscribe(function (x) {
                _this.widget = x;
                if (x) {
                    _this.onWidgetReady();
                }
            });
            this.ctrlSubs = store
                .control$
                .subscribe(function (x) {
                _this.control = x;
                if (x) {
                    _this.onControlReady();
                }
            });
        }
        Object.defineProperty(BaseChartComponent.prototype, "datasets", {
            get: function () {
                var _a;
                return (_a = this.data) === null || _a === void 0 ? void 0 : _a.datasets;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BaseChartComponent.prototype, "display", {
            get: function () {
                return this.store.display;
            },
            enumerable: false,
            configurable: true
        });
        BaseChartComponent.prototype.onWidgetReady = function () {
        };
        BaseChartComponent.prototype.onControlReady = function () {
        };
        BaseChartComponent.prototype.ngOnDestroy = function () {
            var _a, _b, _c;
            (_a = this.dataSubs) === null || _a === void 0 ? void 0 : _a.unsubscribe();
            (_b = this.widgetSubs) === null || _b === void 0 ? void 0 : _b.unsubscribe();
            (_c = this.ctrlSubs) === null || _c === void 0 ? void 0 : _c.unsubscribe();
        };
        return BaseChartComponent;
    }());
    BaseChartComponent.ɵfac = function BaseChartComponent_Factory(t) { return new (t || BaseChartComponent)(i0.ɵɵdirectiveInject(ChartStore)); };
    BaseChartComponent.ɵdir = i0.ɵɵdefineDirective({ type: BaseChartComponent });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(BaseChartComponent, [{
                type: i0.Directive
            }], function () { return [{ type: ChartStore }]; }, null);
    })();

    function ChartLegendComponent_div_1_div_3_div_1_div_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 17);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ds_r5 = i0.ɵɵnextContext().$implicit;
            var ctx_r6 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r6.min(ds_r5));
        }
    }
    function ChartLegendComponent_div_1_div_3_div_1_div_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 18);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ds_r5 = i0.ɵɵnextContext().$implicit;
            var ctx_r7 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r7.max(ds_r5));
        }
    }
    function ChartLegendComponent_div_1_div_3_div_1_div_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 19);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ds_r5 = i0.ɵɵnextContext().$implicit;
            var ctx_r8 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r8.avg(ds_r5));
        }
    }
    function ChartLegendComponent_div_1_div_3_div_1_div_8_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 20);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ds_r5 = i0.ɵɵnextContext().$implicit;
            var ctx_r9 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r9.current(ds_r5));
        }
    }
    var _c0 = function (a0) { return { "hidden": a0 }; };
    function ChartLegendComponent_div_1_div_3_div_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r15_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 9);
            i0.ɵɵlistener("click", function ChartLegendComponent_div_1_div_3_div_1_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r15_1); var ds_r5 = ctx.$implicit; var ctx_r14 = i0.ɵɵnextContext(3); return ctx_r14.onSeriesClicked(ds_r5, $event); });
            i0.ɵɵelementStart(1, "div", 10);
            i0.ɵɵelement(2, "i", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "a", 12);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, ChartLegendComponent_div_1_div_3_div_1_div_5_Template, 2, 1, "div", 13);
            i0.ɵɵtemplate(6, ChartLegendComponent_div_1_div_3_div_1_div_6_Template, 2, 1, "div", 14);
            i0.ɵɵtemplate(7, ChartLegendComponent_div_1_div_3_div_1_div_7_Template, 2, 1, "div", 15);
            i0.ɵɵtemplate(8, ChartLegendComponent_div_1_div_3_div_1_div_8_Template, 2, 1, "div", 16);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ds_r5 = ctx.$implicit;
            var ctx_r4 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(9, _c0, ds_r5.hidden));
            i0.ɵɵadvance(1);
            i0.ɵɵstyleProp("color", ctx_r4.color(ds_r5));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("title", ds_r5.label);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ds_r5.label);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r4.legend.min);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r4.legend.max);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r4.legend.avg);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r4.legend.current);
        }
    }
    function ChartLegendComponent_div_1_div_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 7);
            i0.ɵɵtemplate(1, ChartLegendComponent_div_1_div_3_div_1_Template, 9, 11, "div", 8);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("@fadeInOut", undefined);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r3.datasets);
        }
    }
    function ChartLegendComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 3);
            i0.ɵɵelementStart(1, "perfect-scrollbar");
            i0.ɵɵelementStart(2, "div", 4);
            i0.ɵɵtemplate(3, ChartLegendComponent_div_1_div_3_Template, 2, 2, "div", 5);
            i0.ɵɵelement(4, "div", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngStyle", ctx_r0.widthStyle);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx_r0.datasets == null ? null : ctx_r0.datasets.length);
        }
    }
    function ChartLegendComponent_ng_template_2_div_2_thead_5_th_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "th", 29);
            i0.ɵɵtext(1, "min");
            i0.ɵɵelementEnd();
        }
    }
    function ChartLegendComponent_ng_template_2_div_2_thead_5_th_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "th", 29);
            i0.ɵɵtext(1, "max");
            i0.ɵɵelementEnd();
        }
    }
    function ChartLegendComponent_ng_template_2_div_2_thead_5_th_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "th", 29);
            i0.ɵɵtext(1, "avg");
            i0.ɵɵelementEnd();
        }
    }
    function ChartLegendComponent_ng_template_2_div_2_thead_5_th_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "th", 29);
            i0.ɵɵtext(1, "current");
            i0.ɵɵelementEnd();
        }
    }
    function ChartLegendComponent_ng_template_2_div_2_thead_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "thead");
            i0.ɵɵelementStart(1, "tr");
            i0.ɵɵelement(2, "th", 27);
            i0.ɵɵtemplate(3, ChartLegendComponent_ng_template_2_div_2_thead_5_th_3_Template, 2, 0, "th", 28);
            i0.ɵɵtemplate(4, ChartLegendComponent_ng_template_2_div_2_thead_5_th_4_Template, 2, 0, "th", 28);
            i0.ɵɵtemplate(5, ChartLegendComponent_ng_template_2_div_2_thead_5_th_5_Template, 2, 0, "th", 28);
            i0.ɵɵtemplate(6, ChartLegendComponent_ng_template_2_div_2_thead_5_th_6_Template, 2, 0, "th", 28);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r17 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx_r17.legend.min);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r17.legend.max);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r17.legend.avg);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r17.legend.current);
        }
    }
    function ChartLegendComponent_ng_template_2_div_2_tr_7_td_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "td", 33);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ds_r23 = i0.ɵɵnextContext().$implicit;
            var ctx_r24 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r24.min(ds_r23));
        }
    }
    function ChartLegendComponent_ng_template_2_div_2_tr_7_td_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "td", 33);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ds_r23 = i0.ɵɵnextContext().$implicit;
            var ctx_r25 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r25.max(ds_r23));
        }
    }
    function ChartLegendComponent_ng_template_2_div_2_tr_7_td_8_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "td", 33);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ds_r23 = i0.ɵɵnextContext().$implicit;
            var ctx_r26 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r26.avg(ds_r23));
        }
    }
    function ChartLegendComponent_ng_template_2_div_2_tr_7_td_9_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "td", 33);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ds_r23 = i0.ɵɵnextContext().$implicit;
            var ctx_r27 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r27.current(ds_r23));
        }
    }
    function ChartLegendComponent_ng_template_2_div_2_tr_7_Template(rf, ctx) {
        if (rf & 1) {
            var _r33_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "tr", 30);
            i0.ɵɵelementStart(1, "td", 31);
            i0.ɵɵlistener("click", function ChartLegendComponent_ng_template_2_div_2_tr_7_Template_td_click_1_listener($event) { i0.ɵɵrestoreView(_r33_1); var ds_r23 = ctx.$implicit; var ctx_r32 = i0.ɵɵnextContext(3); return ctx_r32.onSeriesClicked(ds_r23, $event); });
            i0.ɵɵelementStart(2, "div", 10);
            i0.ɵɵelement(3, "i", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 12);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(6, ChartLegendComponent_ng_template_2_div_2_tr_7_td_6_Template, 2, 1, "td", 32);
            i0.ɵɵtemplate(7, ChartLegendComponent_ng_template_2_div_2_tr_7_td_7_Template, 2, 1, "td", 32);
            i0.ɵɵtemplate(8, ChartLegendComponent_ng_template_2_div_2_tr_7_td_8_Template, 2, 1, "td", 32);
            i0.ɵɵtemplate(9, ChartLegendComponent_ng_template_2_div_2_tr_7_td_9_Template, 2, 1, "td", 32);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ds_r23 = ctx.$implicit;
            var ctx_r18 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(9, _c0, ds_r23.hidden));
            i0.ɵɵadvance(2);
            i0.ɵɵstyleProp("color", ctx_r18.color(ds_r23));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("title", ds_r23.label);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ds_r23.label);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r18.legend.min);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r18.legend.max);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r18.legend.avg);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r18.legend.current);
        }
    }
    function ChartLegendComponent_ng_template_2_div_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 4);
            i0.ɵɵelementStart(1, "div", 23);
            i0.ɵɵelementStart(2, "table", 24);
            i0.ɵɵelementStart(3, "colgroup");
            i0.ɵɵelement(4, "col", 24);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, ChartLegendComponent_ng_template_2_div_2_thead_5_Template, 7, 4, "thead", 25);
            i0.ɵɵelementStart(6, "tbody");
            i0.ɵɵtemplate(7, ChartLegendComponent_ng_template_2_div_2_tr_7_Template, 10, 11, "tr", 26);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelement(8, "div", 6);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r16 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("@fadeInOut", undefined);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx_r16.datasets && ctx_r16.datasets.length > 0);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx_r16.datasets);
        }
    }
    function ChartLegendComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 21);
            i0.ɵɵelementStart(1, "perfect-scrollbar");
            i0.ɵɵtemplate(2, ChartLegendComponent_ng_template_2_div_2_Template, 9, 3, "div", 22);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngStyle", ctx_r2.widthStyle);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx_r2.datasets == null ? null : ctx_r2.datasets.length);
        }
    }
    var ChartLegendComponent = /** @class */ (function (_super) {
        __extends(ChartLegendComponent, _super);
        function ChartLegendComponent(store) {
            return _super.call(this, store) || this;
        }
        Object.defineProperty(ChartLegendComponent.prototype, "legend", {
            get: function () {
                return this.widget.legend;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ChartLegendComponent.prototype, "widthStyle", {
            get: function () {
                return {};
                // return { 
                // 	'width': this.widget.width && this.widget.right ? this.widget.width + 'px' : '100%'
                // }
            },
            enumerable: false,
            configurable: true
        });
        ChartLegendComponent.prototype.axis = function (ds) {
            var x = this.widget.axes;
            //return ( ds.yAxisID == 'A' ) ?x.leftY :x.rightY
            return x.leftY;
        };
        ChartLegendComponent.prototype.decimals = function (ds) {
            return this.legend.decimals ? this.legend.decimals : 1;
        };
        ChartLegendComponent.prototype.unit = function (ds) {
            return this.axis(ds).unit;
        };
        ChartLegendComponent.prototype.color = function (ds) {
            return this
                .display
                .getLineColor(ds, 1);
        };
        ChartLegendComponent.prototype.min = function (ds) {
            return AxisUnitHelper.getFormattedValue(ds.min, this.unit(ds), this.decimals(ds));
        };
        ChartLegendComponent.prototype.max = function (ds) {
            return AxisUnitHelper.getFormattedValue(ds.max, this.unit(ds), this.decimals(ds));
        };
        ChartLegendComponent.prototype.avg = function (ds) {
            return AxisUnitHelper.getFormattedValue(ds.avg, this.unit(ds), this.decimals(ds));
        };
        ChartLegendComponent.prototype.current = function (ds) {
            return AxisUnitHelper.getFormattedValue(ds.current, this.unit(ds), this.decimals(ds));
        };
        ChartLegendComponent.prototype.onSeriesClicked = function (ds, e) {
            var _this = this;
            if (e.ctrlKey) {
                var selected = (false == ds.selected);
                this.toggleSeries(ds, selected);
            }
            else {
                var selected_1 = ((undefined === ds.selected) || false == ds.selected) ?
                    true : undefined;
                this.toggleSeries(ds, selected_1);
                this
                    .datasets
                    .filter(function (x) { return x != ds; })
                    .forEach(function (x) { return _this.toggleSeries(x, true == selected_1 ? false : undefined); });
            }
            this.control.refresh();
        };
        ChartLegendComponent.prototype.toggleSeries = function (ds, selected) {
            ds.selected = selected;
            if (undefined === selected) {
                delete ds.hidden;
                delete ds.selected;
            }
            else {
                ds.hidden = !selected;
            }
        };
        return ChartLegendComponent;
    }(BaseChartComponent));
    ChartLegendComponent.ɵfac = function ChartLegendComponent_Factory(t) { return new (t || ChartLegendComponent)(i0.ɵɵdirectiveInject(ChartStore)); };
    ChartLegendComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ChartLegendComponent, selectors: [["chart-legend"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 2, consts: [[1, "legend__top-wrapper"], ["class", "legend__bottom", 3, "ngStyle", 4, "ngIf", "ngIfElse"], ["legendAsTable", ""], [1, "legend__bottom", 3, "ngStyle"], [1, "legend__scroller-cont"], ["class", "legend__series-wrapper", 4, "ngIf"], [1, "legend__scroller-padding"], [1, "legend__series-wrapper"], ["class", "legend__series", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "legend__series", 3, "ngClass", "click"], [1, "legend__icon"], [1, "fa", "fa-minus", "pointer"], [1, "legend__alias", "pointer", 3, "title"], ["class", "legend__value min", 4, "ngIf"], ["class", "legend__value max", 4, "ngIf"], ["class", "legend__value avg", 4, "ngIf"], ["class", "legend__value current", 4, "ngIf"], [1, "legend__value", "min"], [1, "legend__value", "max"], [1, "legend__value", "avg"], [1, "legend__value", "current"], [1, "legend__bottom-table", 3, "ngStyle"], ["class", "legend__scroller-cont", 4, "ngIf"], [1, "legend__series-wrapper", "legend__full-width"], [1, "legend__full-width"], [4, "ngIf"], ["class", "legend__series", 3, "ngClass", 4, "ngFor", "ngForOf"], [2, "text-align", "left"], ["class", "pointer", 4, "ngIf"], [1, "pointer"], [1, "legend__series", 3, "ngClass"], [3, "click"], ["class", "legend__value", 4, "ngIf"], [1, "legend__value"]], template: function ChartLegendComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵtemplate(1, ChartLegendComponent_div_1_Template, 5, 2, "div", 1);
                i0.ɵɵtemplate(2, ChartLegendComponent_ng_template_2_Template, 3, 2, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r1 = i0.ɵɵreference(3);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", !ctx.legend.table)("ngIfElse", _r1);
            }
        }, directives: [i2$1.NgIf, i2$1.NgStyle, i3$1.PerfectScrollbarComponent, i2$1.NgForOf, i2$1.NgClass], styles: [".hide-text[_ngcontent-%COMP%]{background-color:transparent;border:0;color:transparent;font:0/0 a;text-shadow:none}.input-block-level[_ngcontent-%COMP%]{box-sizing:border-box;display:block;min-height:18px;width:100%}.animate-height[_ngcontent-%COMP%]{max-height:0;overflow:hidden}.animate-height--open[_ngcontent-%COMP%]{max-height:1000px;overflow:auto;transition:max-height .25s ease-in-out}.legend__top-wrapper[_ngcontent-%COMP%]{display:flex;flex-grow:1;max-height:100%;min-height:0;overflow:hidden;position:relative;width:100%}.legend__bottom[_ngcontent-%COMP%]{min-width:0;padding-bottom:5px}.legend__scroller-cont[_ngcontent-%COMP%]{display:flex;flex-direction:row}.legend__scroller-padding[_ngcontent-%COMP%]{min-width:10px}.legend__series-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;min-width:0}.legend__series[_ngcontent-%COMP%]{min-width:0;padding-left:10px;white-space:nowrap}.legend__series--right-y[_ngcontent-%COMP%]{float:right}.legend__series.hidden[_ngcontent-%COMP%]   .legend__alias[_ngcontent-%COMP%], .legend__series.hidden[_ngcontent-%COMP%]   .legend__value[_ngcontent-%COMP%]{color:#969696}.legend__alias[_ngcontent-%COMP%], .legend__icon[_ngcontent-%COMP%], .legend__value[_ngcontent-%COMP%]{cursor:pointer;display:inline;font-size:85%;text-align:left;white-space:nowrap}.legend__alias.current[_ngcontent-%COMP%]:before, .legend__icon.current[_ngcontent-%COMP%]:before, .legend__value.current[_ngcontent-%COMP%]:before{content:\"Current: \"}.legend__alias.max[_ngcontent-%COMP%]:before, .legend__icon.max[_ngcontent-%COMP%]:before, .legend__value.max[_ngcontent-%COMP%]:before{content:\"Max: \"}.legend__alias.min[_ngcontent-%COMP%]:before, .legend__icon.min[_ngcontent-%COMP%]:before, .legend__value.min[_ngcontent-%COMP%]:before{content:\"Min: \"}.legend__alias.total[_ngcontent-%COMP%]:before, .legend__icon.total[_ngcontent-%COMP%]:before, .legend__value.total[_ngcontent-%COMP%]:before{content:\"Total: \"}.legend__alias.avg[_ngcontent-%COMP%]:before, .legend__icon.avg[_ngcontent-%COMP%]:before, .legend__value.avg[_ngcontent-%COMP%]:before{content:\"Avg: \"}.legend__icon[_ngcontent-%COMP%]{padding-right:4px;position:relative;top:1px}.legend__icon[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{font-size:135%;position:relative;top:1px}.legend__value[_ngcontent-%COMP%]{padding-left:6px}.legend__bottom-table[_ngcontent-%COMP%]{padding-bottom:1px;padding-left:5px;padding-right:5px;width:100%}.legend__bottom-table[_ngcontent-%COMP%]   .legend__series[_ngcontent-%COMP%]{display:table-row;float:none;padding-left:0}.legend__bottom-table[_ngcontent-%COMP%]   .legend__series--right-y[_ngcontent-%COMP%]{float:none}.legend__bottom-table[_ngcontent-%COMP%]   .legend__series--right-y[_ngcontent-%COMP%]   .legend__alias[_ngcontent-%COMP%]:after{color:#8e8e8e;content:\"(right-y)\";padding:0 5px}.legend__bottom-table[_ngcontent-%COMP%]   .legend__alias[_ngcontent-%COMP%], .legend__bottom-table[_ngcontent-%COMP%]   .legend__icon[_ngcontent-%COMP%], .legend__bottom-table[_ngcontent-%COMP%]   .legend__value[_ngcontent-%COMP%], .legend__bottom-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{display:table-cell;float:none;padding:2px 10px;text-align:right;white-space:nowrap}.legend__bottom-table[_ngcontent-%COMP%]   .legend__icon[_ngcontent-%COMP%]{padding:0;top:0;width:5px}.legend__bottom-table[_ngcontent-%COMP%]   .legend__icon[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{top:3px}.legend__bottom-table[_ngcontent-%COMP%]   .legend__value[_ngcontent-%COMP%]{padding-left:15px}.legend__bottom-table[_ngcontent-%COMP%]   .legend__alias[_ngcontent-%COMP%]{max-width:650px;overflow:hidden;padding-left:7px;text-align:left;text-overflow:ellipsis;width:95%}.legend__bottom-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{color:#33b5e5;font-size:85%;font-weight:700;padding:0 10px 1px 0;text-align:right;white-space:nowrap}.legend__bottom-table[_ngcontent-%COMP%]   .legend__series[_ngcontent-%COMP%]:nth-child(odd){background:#262628}.legend__full-width[_ngcontent-%COMP%]{width:100%}"], data: { animation: [i3.FadeInOutAnimation] } });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ChartLegendComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'chart-legend',
                        templateUrl: './legend.html',
                        styleUrls: ['./legend.scss'],
                        animations: [i3.FadeInOutAnimation],
                    }]
            }], function () { return [{ type: ChartStore }]; }, null);
    })();

    function ChartComponent_chart_legend_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "chart-legend", 7);
        }
    }
    function ChartComponent_chart_legend_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "chart-legend", 8);
        }
    }
    var ChartComponent = /** @class */ (function (_super) {
        __extends(ChartComponent, _super);
        function ChartComponent(store) {
            var _this = _super.call(this, store) || this;
            _this.plugins = [new TrackballDrawerPlugin()];
            _this.options = OptionsProvider.getOptions(_this);
            return _this;
        }
        Object.defineProperty(ChartComponent.prototype, "legend", {
            get: function () {
                var _a;
                return (_a = this.widget) === null || _a === void 0 ? void 0 : _a.legend;
            },
            enumerable: false,
            configurable: true
        });
        ChartComponent.prototype.ngAfterViewInit = function () {
            this.store.control = this.ctrlChart;
        };
        ChartComponent.prototype.ngOnDestroy = function () {
            this.store.destroy();
        };
        return ChartComponent;
    }(BaseChartComponent));
    ChartComponent.ɵfac = function ChartComponent_Factory(t) { return new (t || ChartComponent)(i0.ɵɵdirectiveInject(ChartStore)); };
    ChartComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ChartComponent, selectors: [["widget"]], viewQuery: function ChartComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(i2$2.UIChart, true);
            }
            if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.ctrlChart = _t.first);
            }
        }, features: [i0.ɵɵProvidersFeature([
                DataProvider,
                DataConverter,
                DisplayManager,
                ChartStore
            ]), i0.ɵɵInheritDefinitionFeature], decls: 7, vars: 5, consts: [[1, "chart__wrapper"], [1, "chart__right-legend-cont"], [1, "chart__canvas-cont"], ["type", "line", "height", "100%", 3, "data", "options", "plugins"], ["chart", ""], ["class", "chart__legend-right", 4, "ngIf"], ["class", "chart__legend-bottom", 4, "ngIf"], [1, "chart__legend-right"], [1, "chart__legend-bottom"]], template: function ChartComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵelementStart(2, "div", 2);
                i0.ɵɵelement(3, "p-chart", 3, 4);
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(5, ChartComponent_chart_legend_5_Template, 1, 0, "chart-legend", 5);
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(6, ChartComponent_chart_legend_6_Template, 1, 0, "chart-legend", 6);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("data", ctx.data)("options", ctx.options)("plugins", ctx.plugins);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", ctx.legend.show && (ctx.legend == null ? null : ctx.legend.right));
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.legend.show && !(ctx.legend == null ? null : ctx.legend.right));
            }
        }, directives: [i2$2.UIChart, i2$1.NgIf, ChartLegendComponent], styles: [".hide-text[_ngcontent-%COMP%]{background-color:transparent;border:0;color:transparent;font:0/0 a;text-shadow:none}.input-block-level[_ngcontent-%COMP%]{box-sizing:border-box;display:block;min-height:18px;width:100%}.animate-height[_ngcontent-%COMP%]{max-height:0;overflow:hidden}.animate-height--open[_ngcontent-%COMP%]{max-height:1000px;overflow:auto;transition:max-height .25s ease-in-out}.chart__wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;min-height:0;position:relative}.chart__right-legend-cont[_ngcontent-%COMP%]{cursor:crosshair;display:flex;flex:1;min-height:0;min-width:0}.chart__canvas-cont[_ngcontent-%COMP%]{flex:1;min-height:0;min-width:0;padding-left:5px}.chart__legend-bottom[_ngcontent-%COMP%]{flex:0 1 auto;flex-wrap:wrap;max-height:35%;overflow:hidden;padding-top:6px;position:relative}.chart__legend-right[_ngcontent-%COMP%]{flex:0 1 10px}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ChartComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'widget',
                        templateUrl: './chart.html',
                        styleUrls: ['./chart.scss'],
                        providers: [
                            DataProvider,
                            DataConverter,
                            DisplayManager,
                            ChartStore
                        ]
                    }]
            }], function () { return [{ type: ChartStore }]; }, { ctrlChart: [{
                    type: i0.ViewChild,
                    args: [i2$2.UIChart]
                }] });
    })();

    var ChartWidgetModule = /** @class */ (function () {
        function ChartWidgetModule() {
        }
        return ChartWidgetModule;
    }());
    ChartWidgetModule.ɵmod = i0.ɵɵdefineNgModule({ type: ChartWidgetModule });
    ChartWidgetModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ChartWidgetModule_Factory(t) { return new (t || ChartWidgetModule)(); }, imports: [[
                i2$1.CommonModule,
                i2.FormsModule,
                i2.ReactiveFormsModule,
                i2$2.ChartModule,
                i1$1.EdCommonModule,
                i3.EdUilibModule,
                i3$1.PerfectScrollbarModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ChartWidgetModule, { declarations: [ChartComponent,
                ChartEditorComponent,
                ChartLegendComponent,
                GeneralEditorComponent,
                MetricsEditorComponent,
                AxesEditorComponent,
                LegendEditorComponent], imports: [i2$1.CommonModule,
                i2.FormsModule,
                i2.ReactiveFormsModule,
                i2$2.ChartModule,
                i1$1.EdCommonModule,
                i3.EdUilibModule,
                i3$1.PerfectScrollbarModule], exports: [ChartComponent,
                ChartEditorComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ChartWidgetModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            ChartComponent,
                            ChartEditorComponent,
                            ChartLegendComponent,
                            GeneralEditorComponent,
                            MetricsEditorComponent,
                            AxesEditorComponent,
                            LegendEditorComponent,
                        ],
                        imports: [
                            i2$1.CommonModule,
                            i2.FormsModule,
                            i2.ReactiveFormsModule,
                            i2$2.ChartModule,
                            i1$1.EdCommonModule,
                            i3.EdUilibModule,
                            i3$1.PerfectScrollbarModule
                        ],
                        exports: [
                            ChartComponent,
                            ChartEditorComponent
                        ],
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
