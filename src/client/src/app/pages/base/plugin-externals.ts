import * as core from '@angular/core';
import * as common from '@angular/common';
import * as forms from '@angular/forms';
import * as platform from '@angular/platform-browser';


import * as router from '@angular/router';
import * as rxjs from 'rxjs';
import * as rxjsOperators from 'rxjs/operators';
import * as tslib from 'tslib';
import * as uilib from 'uilib';
import * as edcommon from 'common';
import * as primeng from 'primeng';
import * as primengChart from 'primeng/chart';
import * as primengTable from 'primeng/table';
import * as primengApi from 'primeng/api';

import * as lodash from 'lodash';
import * as temp from 'moment';
import * as colors from 'tinycolor2';
import * as scrollbar from 'ngx-perfect-scrollbar';
import * as ace from 'ng2-ace-editor';
import * as markdown from 'ngx-markdown';
import * as SVG from '@svgdotjs/svg.js'
import * as split from 'split-grid'
import * as gaugeJS from 'gaugeJS'
import * as resizer from 'resize-observer-polyfill';


const moment = temp["default"];

export const PLUGIN_EXTERNALS_MAP = {
  //'ng.core': core,
  //'ng.common': common,
  "@angular/core": core,
  "@angular/common": common,
  "@angular/forms": forms,
  "@angular/platform-browser": platform,
  //'ng.forms': forms,
  'ng.router': router,
  "@angular/router": router,
  
  uilib,
  'common': edcommon,
  rxjs,
  "rxjs/operators":rxjsOperators,
  "ng2-ace-editor": ace,
  tslib,
  lodash,
  moment,
  primeng,
  "primeng/chart": primengChart,
  "primeng/table" : primengTable,
  "primeng/api" : primengApi,
  
  'ngx-perfect-scrollbar': scrollbar,
  "tinycolor2":colors,
  "ngx-markdown":markdown,
  "@svgdotjs/svg.js": SVG,
  "split-grid": split,
  "gaugeJS": gaugeJS,
  "resize-observer-polyfill": resizer
};
