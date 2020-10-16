(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('common'), require('primeng/button'), require('uilib')) :
  typeof define === 'function' && define.amd ? define('chart', ['exports', '@angular/common', '@angular/core', '@angular/forms', 'common', 'primeng/button', 'uilib'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.chart = {}, global.ng.common, global.ng.core, global.ng.forms, global.common, global.primengButton, global.uilib));
}(this, (function (exports, common, i0, forms, i1, i3, i2) { 'use strict';

  var ChartComponent = /** @class */ (function () {
      function ChartComponent(store) {
          this.store = store;
      }
      return ChartComponent;
  }());
  ChartComponent.ɵfac = function ChartComponent_Factory(t) { return new (t || ChartComponent)(i0.ɵɵdirectiveInject(i1.DashboardStore)); };
  ChartComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ChartComponent, selectors: [["widget"]], decls: 5, vars: 0, consts: [["type", "button", "pButton", ""]], template: function ChartComponent_Template(rf, ctx) {
          if (rf & 1) {
              i0.ɵɵelementStart(0, "p");
              i0.ɵɵtext(1, " chart works! ");
              i0.ɵɵelement(2, "ed-progress");
              i0.ɵɵelementStart(3, "button", 0);
              i0.ɵɵtext(4, "fuck");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
          }
      }, directives: [i2.ProgressComponent, i3.ButtonDirective], encapsulation: 2 });
  /*@__PURE__*/ (function () {
      i0.ɵsetClassMetadata(ChartComponent, [{
              type: i0.Component,
              args: [{
                      selector: 'widget',
                      template: "\n    <p>\n      chart works!\n      <ed-progress></ed-progress>\n      <button type=\"button\" pButton >fuck</button>\n    </p>\n  "
                  }]
          }], function () { return [{ type: i1.DashboardStore }]; }, null);
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
              i1.EdCommonModule,
              i2.EdUilibModule,
              i3.ButtonModule
          ]] });
  (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ChartWidgetModule, { declarations: [ChartComponent], imports: [common.CommonModule,
              forms.FormsModule,
              forms.ReactiveFormsModule,
              i1.EdCommonModule,
              i2.EdUilibModule,
              i3.ButtonModule], exports: [ChartComponent] });
  })();
  /*@__PURE__*/ (function () {
      i0.ɵsetClassMetadata(ChartWidgetModule, [{
              type: i0.NgModule,
              args: [{
                      declarations: [
                          ChartComponent
                      ],
                      imports: [
                          common.CommonModule,
                          forms.FormsModule,
                          forms.ReactiveFormsModule,
                          i1.EdCommonModule,
                          i2.EdUilibModule,
                          i3.ButtonModule
                      ],
                      exports: [
                          ChartComponent
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
  exports.ChartWidgetModule = ChartWidgetModule;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=chart.umd.js.map
