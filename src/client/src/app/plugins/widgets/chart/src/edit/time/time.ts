import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Panel, PANEL_TOKEN, TimeRangeParser } from 'common';
import { BaseChartEditorComponent } from '../../base/chart-base-editor';

@Component({
  selector: 'editor-time',
  templateUrl: './time.html'
})
export class TimeEditorComponent extends BaseChartEditorComponent  {

  form: FormGroup;
 
  constructor(@Inject( PANEL_TOKEN ) panel: Panel){
    super( panel );
  }

  ngOnInit(){

		this.form = new FormGroup({
			'from': new FormControl( this.time.from ?? '', this.validateTime.bind( this )),
      'shift': new FormControl(this.time.shift ?? '',  this.validateTime.bind( this )),
      'hide': new FormControl(this.time.hide)
    });

    this
      .form
      .valueChanges
      .subscribe( v => {
        if( this.form.valid ){
          let pull = false;

          if(this.time.from !== v.from ){
            this.time.from = v.from;
            pull = true;
          }

          if( this.time.shift !== v.shift ) {
            this.time.shift = v.shift;
            pull = true;
          }

          if( this.time.hide !== v.hide ) {
            this.time.hide = v.hide;
          }

          if( pull ){
            this.pull();
          }
        }
      });
  }

  validateTime(c: FormControl) {
    if( !c.value ){
      return null;
    }

    const v = `now - ${c.value}`

    return ( TimeRangeParser.isValid( v ) ) ?  null : { invalidTime: true }
  }
}
