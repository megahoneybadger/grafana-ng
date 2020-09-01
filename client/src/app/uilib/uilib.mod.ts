import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { IconComponent } from './icon/icon';
import { RemoveHostDirective } from './remove-host/remove-host.dir'


@NgModule({
  declarations: [
    IconComponent,
    RemoveHostDirective
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,

    FontAwesomeModule,
  ],
  exports:[
    IconComponent,
    RemoveHostDirective
  ]

  
})
export class UilibModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }
}
