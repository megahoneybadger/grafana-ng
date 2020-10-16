import * as core from '@angular/core';
import * as common from '@angular/common';
import * as forms from '@angular/forms';

import * as router from '@angular/router';
import * as rxjs from 'rxjs';
import * as tslib from 'tslib';
import * as uilib from 'uilib';
import * as edcommon from 'common';
import {ButtonModule} from 'primeng/button';

export const PLUGIN_EXTERNALS_MAP = {
  //'ng.core': core,
  //'ng.common': common,
  "@angular/core": core,
  "@angular/common": common,
  "@angular/forms": forms,
  //'ng.forms': forms,
  'ng.router': router,
  
  uilib,
  'common': edcommon,
  rxjs,
  tslib
};
