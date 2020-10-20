import { CommonModule } from '@angular/common';
import { EventEmitter, ɵɵinject, Injector, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, Inject, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵProvidersFeature, ɵɵelement, ɵɵproperty, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PluginStore, DataSourceService, TimeRangeStore, PluginLoader, Moment, EdCommonModule } from 'common';
import { UIChart, ChartModule } from 'primeng';
import { EdUilibModule } from 'uilib';
import { tap, mergeMap, finalize } from 'rxjs/operators';
import * as moment_ from 'moment';

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

const moment = moment_;
class DataProvider {
    constructor(pluginStore, dsService, time, pluginLoader, injector, panel) {
        this.pluginStore = pluginStore;
        this.dsService = dsService;
        this.time = time;
        this.pluginLoader = pluginLoader;
        this.injector = injector;
        this.panel = panel;
        this.data$ = new EventEmitter();
        this.error$ = new EventEmitter();
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
            this.data$.emit([]);
        }
        else {
            this.panel.loading = true;
            this
                .dsService
                .proxy(6, request)
                .pipe(finalize(() => this.panel.loading = false))
                .subscribe(x => this.data$.emit(x), e => this.error$.emit(e.error));
        }
    }
}
DataProvider.ɵfac = function DataProvider_Factory(t) { return new (t || DataProvider)(ɵɵinject(PluginStore), ɵɵinject(DataSourceService), ɵɵinject(TimeRangeStore), ɵɵinject(PluginLoader), ɵɵinject(Injector), ɵɵinject('panel')); };
DataProvider.ɵprov = ɵɵdefineInjectable({ token: DataProvider, factory: DataProvider.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DataProvider, [{
        type: Injectable
    }], function () { return [{ type: PluginStore }, { type: DataSourceService }, { type: TimeRangeStore }, { type: PluginLoader }, { type: Injector }, { type: undefined, decorators: [{
                type: Inject,
                args: ['panel']
            }] }]; }, null); })();

class ColorHelper {
    constructor() {
        this.palette = new Array();
        this.palette = [
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
    }
    getColor(ds) {
        const color = this.palette[ds.index % this.palette.length];
        return this.hexToRgb(color);
    }
    getColorAsArgbFunc(ds, opacity = 1) {
        const color = this.getColor(ds);
        return `rgba(${color.r},${color.g},${color.b}, ${opacity})`;
    }
    hexToRgb(hex) {
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

class SeriesManager {
    constructor(dataProvider) {
        this.dataProvider = dataProvider;
        this.dataSets$ = new EventEmitter();
        this.dataReadySubs = this
            .dataProvider
            .data$
            .subscribe(x => this.rebuild(x));
        this.errorSubs = this
            .dataProvider
            .error$
            .subscribe(x => this.error(x));
    }
    rebuild(data) {
        if (!data || 0 === data.length) {
            this.dataSets$.emit([]);
            //this.chart.data.datasets = [];
        }
        else {
            let dataSets = [];
            let totalIndex = 0;
            data.forEach(serie => {
                const columns = serie.columns.slice(1);
                const arr = [...columns.map((el, index) => this.getDataSet(serie, index + 1, totalIndex++))]
                    .filter(x => x);
                dataSets = [...dataSets, ...arr];
            });
            //this.chart.data.datasets = dataSets;
            this.dataSets$.emit(dataSets);
        }
        //this.chart.widget.error = undefined;
    }
    error(err) {
        // 	this.chart.data.datasets = []
        //  this.chart.update();
        //  this.chart.widget.error = err.details;
    }
    getDataSet(serie, index, totalIndex) {
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
            borderColor: null
            //widget: this.chart.widget,
        };
        ds.borderColor = new ColorHelper().getColorAsArgbFunc(ds, 1);
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
        //console.log( target );
        return root;
    }
}
SeriesManager.ɵfac = function SeriesManager_Factory(t) { return new (t || SeriesManager)(ɵɵinject(DataProvider)); };
SeriesManager.ɵprov = ɵɵdefineInjectable({ token: SeriesManager, factory: SeriesManager.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SeriesManager, [{
        type: Injectable
    }], function () { return [{ type: DataProvider }]; }, null); })();

class ChartComponent {
    constructor(dataProvider, seriesManager) {
        this.dataProvider = dataProvider;
        this.seriesManager = seriesManager;
        this.plugins = [new TrackballDrawerPlugin()];
        seriesManager
            .dataSets$
            .subscribe(x => this.data = { datasets: x });
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
        this.options = {
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
    ngOnDestroy() {
        this.dataProvider.destroy();
    }
}
ChartComponent.ɵfac = function ChartComponent_Factory(t) { return new (t || ChartComponent)(ɵɵdirectiveInject(DataProvider), ɵɵdirectiveInject(SeriesManager)); };
ChartComponent.ɵcmp = ɵɵdefineComponent({ type: ChartComponent, selectors: [["widget"]], features: [ɵɵProvidersFeature([
            DataProvider,
            SeriesManager,
            PluginLoader
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
                    SeriesManager,
                    PluginLoader
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
    }], function () { return [{ type: DataProvider }, { type: SeriesManager }]; }, null); })();

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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ChartWidgetModule, { declarations: [ChartComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ChartModule,
        EdCommonModule,
        EdUilibModule], exports: [ChartComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(ChartWidgetModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    ChartComponent
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
                    ChartComponent
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of chart
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ChartComponent, ChartWidgetModule };
//# sourceMappingURL=chart.js.map
