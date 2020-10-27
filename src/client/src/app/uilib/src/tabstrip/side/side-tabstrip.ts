import { Component, ViewEncapsulation, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { TabStripComponent } from '../tabstrip';

@Component({
  selector: 'ed-side-tabstrip',
  templateUrl: './side-tabstrip.html',
  styleUrls: [ 'side-tabstrip.scss' ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SideTabStripComponent),  
      multi: true
    }
  ],
  encapsulation: ViewEncapsulation.None
})
export class SideTabStripComponent extends TabStripComponent {
  constructor(){
    super();
  }
}

