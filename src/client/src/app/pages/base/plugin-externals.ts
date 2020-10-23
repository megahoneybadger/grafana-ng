import * as core from '@angular/core';
import * as common from '@angular/common';
import * as forms from '@angular/forms';

import * as router from '@angular/router';
import * as rxjs from 'rxjs';
import * as rxjsOperators from 'rxjs/operators';
import * as tslib from 'tslib';
import * as uilib from 'uilib';
import * as edcommon from 'common';
import * as primeng from 'primeng';
import * as lodash from 'lodash';
import * as temp from 'moment';
import * as util from 'util';
import * as scrollbar from 'ngx-perfect-scrollbar';
const moment = temp["default"];

export const PLUGIN_EXTERNALS_MAP = {
  //'ng.core': core,
  //'ng.common': common,
  "@angular/core": core,
  "@angular/common": common,
  "@angular/forms": forms,
  //'ng.forms': forms,
  'ng.router': router,
  "@angular/router": router,
  
  uilib,
  'common': edcommon,
  rxjs,
  "rxjs/operators":rxjsOperators,
  
  tslib,
  lodash,
  moment,
  primeng,
  'ngx-perfect-scrollbar': scrollbar
};
