import { ColorHelper } from "./color-helper";
import { EventEmitter, Injectable } from '@angular/core';
import { Moment } from 'common';
import * as i0 from "@angular/core";
import * as i1 from "./data-provider";
export class SeriesManager {
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
SeriesManager.ɵfac = function SeriesManager_Factory(t) { return new (t || SeriesManager)(i0.ɵɵinject(i1.DataProvider)); };
SeriesManager.ɵprov = i0.ɵɵdefineInjectable({ token: SeriesManager, factory: SeriesManager.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SeriesManager, [{
        type: Injectable
    }], function () { return [{ type: i1.DataProvider }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VyaWVzLW1hbmFnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcHAvcGx1Z2lucy93aWRnZXRzL2NoYXJ0L3NyYy9zZXJ2aWNlcy9zZXJpZXMtbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHekQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFFBQVEsQ0FBQzs7O0FBR2hDLE1BQU0sT0FBTyxhQUFhO0lBT3pCLFlBQW9CLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBRjlDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBR25DLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSTthQUN2QixZQUFZO2FBQ1osS0FBSzthQUNMLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUVqQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUk7YUFDbkIsWUFBWTthQUNaLE1BQU07YUFDTixTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDaEMsQ0FBQztJQUVPLE9BQU8sQ0FBQyxJQUFJO1FBQ25CLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUUsRUFBRSxDQUFFLENBQUM7WUFDMUIsZ0NBQWdDO1NBQ2hDO2FBQU07WUFDTixJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDbEIsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO1lBRW5CLElBQUksQ0FBQyxPQUFP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LFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2xvckhlbHBlciB9IGZyb20gXCIuL2NvbG9yLWhlbHBlclwiO1xyXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGF0YVByb3ZpZGVyIH0gZnJvbSAnLi9kYXRhLXByb3ZpZGVyJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE1vbWVudCB9IGZyb20gJ2NvbW1vbic7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTZXJpZXNNYW5hZ2VyIHtcclxuXHJcblx0cHJpdmF0ZSBkYXRhUmVhZHlTdWJzOiBTdWJzY3JpcHRpb247XHJcblx0cHJpdmF0ZSBlcnJvclN1YnM6IFN1YnNjcmlwdGlvbjtcclxuXHJcblx0ZGF0YVNldHMkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YVByb3ZpZGVyOiBEYXRhUHJvdmlkZXIpIHtcclxuXHRcdHRoaXMuZGF0YVJlYWR5U3VicyA9IHRoaXNcclxuXHRcdFx0LmRhdGFQcm92aWRlclxyXG5cdFx0XHQuZGF0YSRcclxuXHRcdFx0LnN1YnNjcmliZSh4ID0+IHRoaXMucmVidWlsZCh4KSlcclxuXHJcblx0XHR0aGlzLmVycm9yU3VicyA9IHRoaXNcclxuXHRcdFx0LmRhdGFQcm92aWRlclxyXG5cdFx0XHQuZXJyb3IkXHJcblx0XHRcdC5zdWJzY3JpYmUoeCA9PiB0aGlzLmVycm9yKHgpKVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSByZWJ1aWxkKGRhdGEpIHtcclxuXHRcdGlmICghZGF0YSB8fCAwID09PSBkYXRhLmxlbmd0aCkge1xyXG5cdFx0XHR0aGlzLmRhdGFTZXRzJC5lbWl0KCBbXSApO1xyXG5cdFx0XHQvL3RoaXMuY2hhcnQuZGF0YS5kYXRhc2V0cyA9IFtdO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bGV0IGRhdGFTZXRzID0gW107XHJcblx0XHRcdGxldCB0b3RhbEluZGV4ID0gMDtcclxuXHJcblx0XHRcdGRhdGEuZm9yRWFjaChzZXJpZSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgY29sdW1ucyA9IHNlcmllLmNvbHVtbnMuc2xpY2UoMSk7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGFyciA9IFsuLi5jb2x1bW5zLm1hcCgoZWwsIGluZGV4KSA9PlxyXG5cdFx0XHRcdFx0dGhpcy5nZXREYXRhU2V0KHNlcmllLCBpbmRleCArIDEsIHRvdGFsSW5kZXgrKykpXVxyXG5cdFx0XHRcdFx0LmZpbHRlcih4ID0+IHgpO1xyXG5cclxuXHRcdFx0XHRkYXRhU2V0cyA9IFsuLi5kYXRhU2V0cywgLi4uYXJyXTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQvL3RoaXMuY2hhcnQuZGF0YS5kYXRhc2V0cyA9IGRhdGFTZXRzO1xyXG5cdFx0XHR0aGlzLmRhdGFTZXRzJC5lbWl0KCBkYXRhU2V0cyApO1xyXG5cdFx0fVxyXG5cdFx0Ly90aGlzLmNoYXJ0LndpZGdldC5lcnJvciA9IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZXJyb3IoZXJyKSB7XHJcblx0XHQvLyBcdHRoaXMuY2hhcnQuZGF0YS5kYXRhc2V0cyA9IFtdXHJcblx0XHQvLyAgdGhpcy5jaGFydC51cGRhdGUoKTtcclxuXHRcdC8vICB0aGlzLmNoYXJ0LndpZGdldC5lcnJvciA9IGVyci5kZXRhaWxzO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBnZXREYXRhU2V0KHNlcmllLCBpbmRleCwgdG90YWxJbmRleCkge1xyXG5cdFx0Y29uc3QgdmFsdWVzID0gc2VyaWVcclxuXHRcdFx0LnZhbHVlc1xyXG5cdFx0XHQubWFwKHggPT4ge1xyXG5cdFx0XHRcdGNvbnN0IGlzTnVsbCA9IChudWxsID09IHhbaW5kZXhdKTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdHg6IE1vbWVudC52YWx1ZU9mKCB4WzBdICksLy8gbW9tZW50KCkudmFsdWVPZigpLFxyXG5cdFx0XHRcdFx0eTogKGlzTnVsbCkgPyB4W2luZGV4XSA6IHhbaW5kZXhdLFxyXG5cdFx0XHRcdFx0aXNOdWxsOiBpc051bGxcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblxyXG5cdFx0Y29uc3QgZmlsdGVyZWRWYWx1ZXMgPSB2YWx1ZXNcclxuXHRcdFx0Lm1hcChwID0+IHAueSlcclxuXHRcdFx0LmZpbHRlcihwID0+IG51bGwgIT0gcClcclxuXHRcdFx0Lm1hcChwID0+IHBhcnNlRmxvYXQocCkpO1xyXG5cclxuXHRcdGlmICgwID09IGZpbHRlcmVkVmFsdWVzLmxlbmd0aCkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgYXZnID0gKGZpbHRlcmVkVmFsdWVzLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpIC8gZmlsdGVyZWRWYWx1ZXMubGVuZ3RoKVxyXG5cclxuXHRcdGNvbnN0IGFsbE51bGxzID0gZmlsdGVyZWRWYWx1ZXMuZXZlcnkoeCA9PiB4ID09IG51bGwpO1xyXG5cdFx0Y29uc3QgYWxsWmVyb3MgPSBmaWx0ZXJlZFZhbHVlcy5ldmVyeSh4ID0+IHggPT0gMCk7XHJcblxyXG5cdFx0Y29uc3QgZHMgPSB7XHJcblx0XHRcdGxhYmVsOiB0aGlzLmdlbmVyYXRlRGF0YVNldE5hbWUoc2VyaWUsIGluZGV4KSxcclxuXHRcdFx0ZGF0YTogdmFsdWVzLFxyXG5cdFx0XHRsaW5lVGVuc2lvbjogMCxcclxuXHRcdFx0bWluOiBNYXRoLm1pbiguLi5maWx0ZXJlZFZhbHVlcyksXHJcblx0XHRcdG1heDogTWF0aC5tYXgoLi4uZmlsdGVyZWRWYWx1ZXMpLFxyXG5cdFx0XHRhdmc6IGF2ZyxcclxuXHRcdFx0Y3VycmVudDogZmlsdGVyZWRWYWx1ZXMuc2xpY2UoLTEpWzBdLFxyXG5cdFx0XHRhbGxOdWxsczogYWxsTnVsbHMsXHJcblx0XHRcdGFsbFplcm9zOiBhbGxaZXJvcyxcclxuXHRcdFx0aW5kZXg6IHRvdGFsSW5kZXgsXHJcblx0XHRcdHBvaW50UmFkaXVzOjAsXHJcblx0XHRcdGJvcmRlckNvbG9yOiBudWxsXHJcblx0XHRcdC8vd2lkZ2V0OiB0aGlzLmNoYXJ0LndpZGdldCxcclxuXHRcdH1cclxuXHJcblx0XHRkcy5ib3JkZXJDb2xvciA9IG5ldyBDb2xvckhlbHBlcigpLmdldENvbG9yQXNBcmdiRnVuYyggZHMsIDEgKTtcclxuXHRcdC8vY29uc29sZS5sb2coIGRzLmJvcmRlckNvbG9yICk7XHJcblxyXG5cdFx0Ly90aGlzLmRpc3BsYXkuc2V0dXAoZHMpO1xyXG5cclxuXHRcdHJldHVybiBkcztcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZ2VuZXJhdGVEYXRhU2V0TmFtZSggc2VyaWUsIGluZGV4ICl7XHJcblx0XHRsZXQgcm9vdCA9IGAke3NlcmllLm5hbWV9LiR7c2VyaWUuY29sdW1uc1sgaW5kZXggXX1gO1xyXG5cclxuXHRcdGxldCB0YWdzID0gJyc7XHJcblx0XHR2YXIga2V5cyA9IE9iamVjdC5rZXlzKHNlcmllLnRhZ3MpO1xyXG5cdFx0dmFyIGtleUluZGV4ID0gMDtcclxuXHJcblx0XHRmb3IodmFyIGtleSBpbiBzZXJpZS50YWdzKXtcclxuXHRcdFx0dGFncyArPSBgJHtrZXlJbmRleCA+IDAgPyAnLCAnOiAnJ30ke2tleX06ICR7c2VyaWUudGFnc1sga2V5IF19YCA7XHJcblx0XHRcdGtleUluZGV4KytcclxuXHRcdH1cclxuXHJcblx0XHQvLyBzZXJpZS50YWdzLmZvckVhY2goICggdCwgaW5kZXggKSA9PiB0YWdzID0gYCR7dGFnc30ke2luZGV4ID4gMCA/ICcsJzogJyd9IHRhZ2AgKVxyXG5cclxuXHRcdGlmKCB0YWdzICl7XHJcblx0XHRcdHJvb3QgPSBgJHtyb290fSB7JHt0YWdzfX1gO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vY29uc29sZS5sb2coIHRhcmdldCApO1xyXG5cclxuXHRcdHJldHVybiByb290O1xyXG5cdH1cclxuXHJcblxyXG59Il19