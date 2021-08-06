
import { Component, EventEmitter, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { BaseDasboardComponent, DashboardService,
  DashboardStore, TimeRangeStore } from 'common';

@Component({
  selector: 'dashboard-sharer',
  templateUrl: './share.html'
})
export class DashboardSharerComponent extends BaseDasboardComponent  {

  @Output() close = new EventEmitter();
  @Output() overwrite = new EventEmitter();
  index: number = 2;

  form: FormGroup;
  saving: boolean;

  get message(): string{
    return this.form.get( 'message' ).value;
  }

  get saveTime(): boolean{
    return this.form.get( 'saveTime' ).value;
  }


  constructor( 
    store: DashboardStore,
    private dbService: DashboardService,
    private time: TimeRangeStore ){
      super( store );

  }

  onClose(){
    this.close.emit();
  }
}
