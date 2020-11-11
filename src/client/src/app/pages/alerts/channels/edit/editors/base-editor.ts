
import { Directive } from '@angular/core';
import { FormGroup, ValidatorFn } from '@angular/forms';
import { ChannelEditFormService } from '../channel-form.s';

@Directive()
export class BaseChannelEditorComponent  {
  parentForm:  FormGroup;
  model: any;

  constructor( protected channelFormService: ChannelEditFormService ){
  }

  ngOnInit(){
    this
      .channelFormService
      .form$
      .subscribe( x =>{
        this.parentForm = x;

        this.channelFormService.addControls( this.model );

        this.addValidators();
      });
  }

  isControlInvalid( name ):boolean{
    const ctrl = this.get( name );
    return ctrl && !ctrl.valid && ctrl.touched
  }

  get( ctrl: string ){
    return this.parentForm.get( ctrl );
  }

  addValidators(){

  }

  addValidator( name: string, v: ValidatorFn | ValidatorFn[] | null ){
    this.parentForm.controls[ name ].setValidators( v )
  }
}




