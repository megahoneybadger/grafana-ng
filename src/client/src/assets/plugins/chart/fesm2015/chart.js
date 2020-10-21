import { ɵɵdefineComponent, ɵɵelement, ɵɵproperty, ɵsetClassMetadata, Component, ɵɵinject, ɵɵdefineInjectable, Injectable, Inject, EventEmitter, Injector, ɵɵdirectiveInject, ɵɵProvidersFeature, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { TabStripEditorComponent, EdUilibModule } from 'uilib';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Moment, PluginStore, DataSourceService, TimeRangeStore, PluginLoader, EdCommonModule } from 'common';
import { UIChart, ChartModule } from 'primeng';
import { tap, mergeMap, finalize } from 'rxjs/operators';

class ChartEditorComponent {
    constructor() {
        this.tabs = [
            { text: 'General' },
            { text: 'Metrics', active: true },
            { text: 'Axes' }
        ];
    }
}
ChartEditorComponent.ɵfac = function ChartEditorComponent_Factory(t) { return new (t || ChartEditorComponent)(); };
ChartEditorComponent.ɵcmp = ɵɵdefineComponent({ type: ChartEditorComponent, selectors: [["widget-editor"]], decls: 1, vars: 1, consts: [[3, "megatabs"]], template: function ChartEditorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "ed-tabstrip-editor", 0);
    } if (rf & 2) {
        ɵɵproperty("megatabs", ctx.tabs);
    } }, directives: [TabStripEditorComponent], styles: [".hide-text[_ngcontent-%COMP%]{background-color:transparent;border:0;color:transparent;font:0/0 a;text-shadow:none}.input-block-level[_ngcontent-%COMP%]{box-sizing:border-box;display:block;min-height:18px;width:100%}.animate-height[_ngcontent-%COMP%]{max-height:0;overflow:hidden}.animate-height--open[_ngcontent-%COMP%]{max-height:1000px;overflow:auto;transition:max-height .25s ease-in-out}.gf-tabs[_ngcontent-%COMP%]{float:left;position:relative;top:1px}.gf-tabs[_ngcontent-%COMP%]:after{clear:both;content:\"\";display:table}.gf-tabs-item[_ngcontent-%COMP%]{float:left;list-style:none}.gf-tabs-link[_ngcontent-%COMP%]{border:1px solid transparent;border-radius:3px 3px 0 0;border-top:0 solid transparent;color:#d8d9da;display:block;margin-right:.5rem;padding:10px 15px 9px;position:relative}.gf-tabs-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:5px}.gf-tabs-link[_ngcontent-%COMP%]   .gicon[_ngcontent-%COMP%]{position:relative;top:-2px}.gf-tabs-link[_ngcontent-%COMP%]:focus, .gf-tabs-link[_ngcontent-%COMP%]:hover{color:#fff}.gf-tabs-link.active[_ngcontent-%COMP%], .gf-tabs-link.active[_ngcontent-%COMP%]:focus, .gf-tabs-link.active[_ngcontent-%COMP%]:hover{background:#161719;border-color:#eb7b18 #333 transparent;color:#e3e3e3;overflow:hidden}.gf-tabs-link.active[_ngcontent-%COMP%]:before, .gf-tabs-link.active[_ngcontent-%COMP%]:focus:before, .gf-tabs-link.active[_ngcontent-%COMP%]:hover:before{background-image:linear-gradient(90deg,#ffd500 0,#f40 99%,#f40);content:\" \";display:block;height:2px;left:0;position:absolute;right:0;top:0}.gf-tabs-link.active--panel[_ngcontent-%COMP%]{background:#212124!important}.tabbed-view[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}.tabbed-view.tabbed-view--new[_ngcontent-%COMP%]{height:100%;padding:25px 0 0}.tabbed-view-header[_ngcontent-%COMP%]{border-bottom:1px solid #333;box-shadow:inset 0 -4px 14px #1f1f20}.tabbed-view-header[_ngcontent-%COMP%]:after{clear:both;content:\"\";display:table}.tabbed-view-title[_ngcontent-%COMP%]{float:left;margin:0 3rem 0 1rem;padding-top:.5rem}.tabbed-view-panel-title[_ngcontent-%COMP%]{float:left;margin:0 2rem 0 0;padding-top:9px}.tabbed-view-close-btn[_ngcontent-%COMP%]{background-color:transparent;border:none;color:#d8d9da;float:right;margin:0;padding:10px 15px 9px}.tabbed-view-close-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:120%}.tabbed-view-close-btn[_ngcontent-%COMP%]:hover{color:#fff}.tabbed-view-body[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;padding:2rem 1rem 1rem}.tabbed-view-body--small[_ngcontent-%COMP%]{min-height:0;padding-bottom:0}.section-heading[_ngcontent-%COMP%]{font-size:1.1rem;margin-bottom:.6rem}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ChartEditorComponent, [{
        type: Component,
        args: [{
                selector: 'widget-editor',
                templateUrl: './editor.html',
                styleUrls: ['./editor.scss']
            }]
    }], function () { return []; }, null); })();

class PixelHelper {
    static alignPixel(chart, pixel, width) {
        var devicePixelRatio = chart.currentDevicePixelRatio;
        var halfWidth = width / 2;
        return Math.round((pixel - halfWidth) * devicePixelRatio) / devicePixelRatio + halfWidth;
    }
    ;
}

class TrackballDrawerPlugin {
    get id() {
        return TrackballDrawerPlugin.ID;
    }
    afterDatasetsDraw(chart, easing) {
        //console.log( "trackball plugin" )
        return;
        const context = chart.chart.ctx;
        const scaleX = chart.scales['x-axis-0'];
        //const scaleYA = chart.scales[ "A" ];
        const scaleYA = chart.scales["y-axis-0"];
        var pos = this.getMousePos(chart.canvas, chart.trackball);
        console.log(pos);
        const shouldIgnore = (!chart.trackball) ||
            (0 == chart.data.datasets.length) ||
            (pos.x < scaleX.left || pos.x > scaleX.right);
        if (shouldIgnore) {
            return;
        }
        const lw = 0.8;
        const x = PixelHelper.alignPixel(chart, pos.x, lw);
        const y1 = PixelHelper.alignPixel(chart, scaleYA.top, lw);
        const y2 = PixelHelper.alignPixel(chart, scaleYA.bottom, lw);
        context.beginPath();
        context.strokeStyle = "#880015";
        context.lineWidth = lw;
        context.moveTo(x, y1);
        context.lineTo(x, y2);
        context.stroke();
    }
    getMousePos(canvas, evt) {
        if (!evt) {
            return;
        }
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }
}
TrackballDrawerPlugin.ID = "trackball";

const PANEL_TOKEN = "panel";

class ColorHelper {
    static getColor(ds) {
        const color = this.palette[ds.index % this.palette.length];
        return this.hexToRgb(color);
    }
    static getColorAsArgbFunc(ds, opacity = 1) {
        const color = this.getColor(ds);
        return `rgba(${color.r},${color.g},${color.b}, ${opacity})`;
    }
    static hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
    static parse(input) {
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
    }
    static rgbToHex(e) {
        const c = ColorHelper.parse(e);
        const r = c.r.toString(16).padStart(2, "0");
        const g = c.g.toString(16).padStart(2, "0");
        const b = c.b.toString(16).padStart(2, "0");
        return `#${r}${g}${b}`;
    }
}
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

class DisplayManager {
    constructor(panel) {
        this.panel = panel;
    }
    get display() {
        return this.panel.widget.display;
    }
    setup(ds) {
        //this.setupSecondaryYAxis();					
        this.setupLines(ds);
        this.setupPoints(ds);
        this.setupNullValue(ds);
        //this.chart.options.scales.yAxes[ 0 ].stacked = this.chart.widget.display.stack;
    }
    setupLines(ds) {
        const showLines = this.getShowLines(ds);
        const lineWidth = this.getLineWidth(ds);
        const fill = this.getFill(ds);
        let opacity = (fill / 10);
        ds.fill = ( /*showLines &&*/fill > 0);
        ds.backgroundColor = this.getLineColor(ds, opacity);
        opacity = (showLines && lineWidth) ? 1 : 0;
        ds.borderColor = this.getLineColor(ds, opacity);
        ds.borderWidth = lineWidth;
        ds.steppedLine = this.getStaircase(ds);
        if (this.getDashes(ds)) {
            const len = this.getDashLength(ds);
            const space = this.getDashSpace(ds);
            ds.borderDash = [len, space];
        }
        else {
            ds.borderDash = undefined;
        }
        ds.order = this.getZIndex(ds);
        ds.legend = this.getLegend(ds);
        // ds.yAxisID = ( 1 == this.getYAxis( ds ) ) ? 'A': 'B';
    }
    setupPoints(ds) {
        const showPoints = this.getShowPoints(ds);
        const opacity = showPoints ? 1 : 0;
        const color = this.getLineColor(ds, opacity);
        ds.pointBorderColor = `${color}`;
        ds.pointBackgroundColor = `${color}`;
        ds.pointRadius = showPoints ? this.getPointRadius(ds) : 0;
    }
    setupNullValue(ds) {
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
    }
    setupOverrides() {
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
    }
    getShowLines(ds) {
        const o = this.getOverride(ds);
        return (o && undefined != o.lines) ? o.lines : this.display.showLines;
    }
    getLineWidth(ds) {
        const o = this.getOverride(ds);
        return (o && undefined != o.lineWidth) ? o.lineWidth : this.display.lineWidth;
    }
    getLineColor(ds, opacity) {
        const o = this.getOverride(ds);
        const defaultColor = ColorHelper.getColorAsArgbFunc(ds, opacity);
        const useOverride = (o && undefined != o.color);
        let overrideColor;
        if (useOverride) {
            var color = ColorHelper.parse(o.color);
            overrideColor = `rgba(${color.r},${color.g},${color.b},${opacity})`;
        }
        return (useOverride) ? overrideColor : defaultColor;
    }
    getFill(ds) {
        const o = this.getOverride(ds);
        return (o && undefined != o.lineFill) ? o.lineFill : this.display.fill;
    }
    getStaircase(ds) {
        const o = this.getOverride(ds);
        return (o && undefined != o.staircase) ? o.staircase : this.display.staircase;
    }
    getDashes(ds) {
        const o = this.getOverride(ds);
        return (o && undefined != o.dashes) ? o.dashes : false;
    }
    getDashLength(ds) {
        const o = this.getOverride(ds);
        return (o && undefined != o.dashLength) ? o.dashLength : 1;
    }
    getDashSpace(ds) {
        const o = this.getOverride(ds);
        return (o && undefined != o.dashSpace) ? o.dashSpace : 1;
    }
    getShowPoints(ds) {
        const o = this.getOverride(ds);
        return (o && undefined != o.points) ? o.points : this.display.showPoints;
    }
    getPointRadius(ds) {
        const o = this.getOverride(ds);
        return (o && undefined != o.pointRadius) ? o.pointRadius : this.display.pointRadius;
    }
    getLegend(ds) {
        const o = this.getOverride(ds);
        return (o && undefined != o.legend) ? o.legend : true;
    }
    getZIndex(ds) {
        const o = this.getOverride(ds);
        return (o && undefined != o.zIndex) ? o.zIndex : 0;
    }
    getYAxis(ds) {
        const o = this.getOverride(ds);
        return (o && undefined != o.yAxis) ? o.yAxis : 1;
    }
    getOverride(ds) {
        return this
            .display
            .overrides
            .find(x => x.alias && new RegExp(x.alias).test(ds.label));
    }
}
DisplayManager.ɵfac = function DisplayManager_Factory(t) { return new (t || DisplayManager)(ɵɵinject(PANEL_TOKEN)); };
DisplayManager.ɵprov = ɵɵdefineInjectable({ token: DisplayManager, factory: DisplayManager.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DisplayManager, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, null); })();

class DataConverter {
    constructor(dispay) {
        this.dispay = dispay;
    }
    toDataSets(data) {
        if (!data || 0 === data.length) {
            return [];
        }
        let dataSets = [];
        let totalIndex = 0;
        data.forEach(serie => {
            const columns = serie.columns.slice(1);
            const arr = [...columns.map((el, index) => this.toDataSet(serie, index + 1, totalIndex++))]
                .filter(x => x);
            dataSets = [...dataSets, ...arr];
            dataSets.forEach(x => this.dispay.setup(x));
        });
        //this.chart.widget.error = undefined;
        return dataSets;
    }
    toDataSet(serie, index, totalIndex) {
        const values = serie
            .values
            .map(x => {
            const isNull = (null == x[index]);
            return {
                x: Moment.valueOf(x[0]),
                y: (isNull) ? x[index] : x[index],
                isNull: isNull
            };
        });
        const filteredValues = values
            .map(p => p.y)
            .filter(p => null != p)
            .map(p => parseFloat(p));
        if (0 == filteredValues.length) {
            return;
        }
        const avg = (filteredValues.reduce((a, b) => a + b) / filteredValues.length);
        const allNulls = filteredValues.every(x => x == null);
        const allZeros = filteredValues.every(x => x == 0);
        const ds = {
            label: this.generateDataSetName(serie, index),
            data: values,
            lineTension: 0,
            min: Math.min(...filteredValues),
            max: Math.max(...filteredValues),
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
    }
    generateDataSetName(serie, index) {
        let root = `${serie.name}.${serie.columns[index]}`;
        let tags = '';
        var keys = Object.keys(serie.tags);
        var keyIndex = 0;
        for (var key in serie.tags) {
            tags += `${keyIndex > 0 ? ', ' : ''}${key}: ${serie.tags[key]}`;
            keyIndex++;
        }
        // serie.tags.forEach( ( t, index ) => tags = `${tags}${index > 0 ? ',': ''} tag` )
        if (tags) {
            root = `${root} {${tags}}`;
        }
        return root;
    }
}
DataConverter.ɵfac = function DataConverter_Factory(t) { return new (t || DataConverter)(ɵɵinject(DisplayManager)); };
DataConverter.ɵprov = ɵɵdefineInjectable({ token: DataConverter, factory: DataConverter.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DataConverter, [{
        type: Injectable
    }], function () { return [{ type: DisplayManager }]; }, null); })();

class DataProvider {
    constructor(pluginStore, dsService, converter, time, pluginLoader, injector, panel) {
        this.pluginStore = pluginStore;
        this.dsService = dsService;
        this.converter = converter;
        this.time = time;
        this.pluginLoader = pluginLoader;
        this.injector = injector;
        this.panel = panel;
        this.data$ = new EventEmitter();
        this.timeSubs = this
            .time
            .range$
            .pipe(tap(_ => this.request = ''), mergeMap(_ => this.pluginStore.getDataSource("influx")), mergeMap((p) => this.pluginLoader.loadDataSourceQueryCompiler(p, this.injector)), mergeMap((c) => c.compile(this.metrics, time.range)))
            .subscribe((x) => this.pull(x));
    }
    get metrics() {
        var _a, _b;
        return (_b = (_a = this.panel) === null || _a === void 0 ? void 0 : _a.widget) === null || _b === void 0 ? void 0 : _b.metrics;
    }
    destroy() {
        var _a;
        (_a = this.timeSubs) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
    pull(request) {
        if (this.request === request) {
            return;
        }
        this.request = request;
        console.log(`pull: ${request}`);
        if (!request) {
            this.onData([]);
        }
        else {
            this.panel.loading = true;
            this
                .dsService
                .proxy(6, request)
                .pipe(finalize(() => this.panel.loading = false))
                .subscribe(x => this.onData(x), e => this.onError(e.error));
        }
    }
    onData(x) {
        this.data$.emit({
            datasets: this.converter.toDataSets(x)
        });
    }
    onError(err) {
        // 	this.chart.data.datasets = []
        //  this.chart.update();
        //  this.chart.widget.error = err.details;
    }
}
DataProvider.ɵfac = function DataProvider_Factory(t) { return new (t || DataProvider)(ɵɵinject(PluginStore), ɵɵinject(DataSourceService), ɵɵinject(DataConverter), ɵɵinject(TimeRangeStore), ɵɵinject(PluginLoader), ɵɵinject(Injector), ɵɵinject(PANEL_TOKEN)); };
DataProvider.ɵprov = ɵɵdefineInjectable({ token: DataProvider, factory: DataProvider.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DataProvider, [{
        type: Injectable
    }], function () { return [{ type: PluginStore }, { type: DataSourceService }, { type: DataConverter }, { type: TimeRangeStore }, { type: PluginLoader }, { type: Injector }, { type: undefined, decorators: [{
                type: Inject,
                args: [PANEL_TOKEN]
            }] }]; }, null); })();

class OptionsProvider {
    static getOptions() {
        Chart.defaults.global.defaultFontColor = '#e3e3e3';
        Chart.defaults.global.defaultFontFamily = 'Roboto';
        Chart.defaults.global.defaultFontSize = 11;
        const axisYa = {
            id: 'A',
            gridLines: {
                color: 'rgba( 255,255,255, 0.1)',
                zeroLineWidth: 3,
            },
        };
        const axisYb = {
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
    }
}

class ChartComponent {
    constructor(dataProvider) {
        this.dataProvider = dataProvider;
        this.plugins = [new TrackballDrawerPlugin()];
        this
            .dataProvider
            .data$
            .subscribe(d => this.data = d);
        this.options = OptionsProvider.getOptions();
    }
    ngOnDestroy() {
        this.dataProvider.destroy();
    }
}
ChartComponent.ɵfac = function ChartComponent_Factory(t) { return new (t || ChartComponent)(ɵɵdirectiveInject(DataProvider)); };
ChartComponent.ɵcmp = ɵɵdefineComponent({ type: ChartComponent, selectors: [["widget"]], features: [ɵɵProvidersFeature([
            DataProvider,
            DataConverter,
            DisplayManager,
        ])], decls: 1, vars: 3, consts: [["type", "line", "height", "100%", 3, "data", "options", "plugins"]], template: function ChartComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "p-chart", 0);
    } if (rf & 2) {
        ɵɵproperty("data", ctx.data)("options", ctx.options)("plugins", ctx.plugins);
    } }, directives: [UIChart], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ChartComponent, [{
        type: Component,
        args: [{
                selector: 'widget',
                providers: [
                    DataProvider,
                    DataConverter,
                    DisplayManager,
                ],
                template: `
    <p-chart 
      type="line"
      [data]="data"
      [options]="options"
      [plugins]="plugins"
      height="100%">
    </p-chart>
  `
            }]
    }], function () { return [{ type: DataProvider }]; }, null); })();

class ChartWidgetModule {
}
ChartWidgetModule.ɵmod = ɵɵdefineNgModule({ type: ChartWidgetModule });
ChartWidgetModule.ɵinj = ɵɵdefineInjector({ factory: function ChartWidgetModule_Factory(t) { return new (t || ChartWidgetModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            ChartModule,
            EdCommonModule,
            EdUilibModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ChartWidgetModule, { declarations: [ChartComponent,
        ChartEditorComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ChartModule,
        EdCommonModule,
        EdUilibModule], exports: [ChartComponent,
        ChartEditorComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(ChartWidgetModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    ChartComponent,
                    ChartEditorComponent
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    ChartModule,
                    EdCommonModule,
                    EdUilibModule,
                ],
                exports: [
                    ChartComponent,
                    ChartEditorComponent
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of chart
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ChartComponent, ChartEditorComponent, ChartWidgetModule };
//# sourceMappingURL=chart.js.map
