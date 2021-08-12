import { EventEmitter, forwardRef, Output } from '@angular/core';
import { Component, Input } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ControlContainer, ControlValueAccessor,
   FormControl } from '@angular/forms';




export class BaseDashboardPropertyValidator implements ControlValueAccessor  {

  readonly ERR_BAD_REQUEST = "invalidBadRequest"

  @Input() control: FormControl;
  validating: boolean;
  
  onChange = (name) => {};
  onTouched = () => {};

  touched = false;
  disabled = false;
 
  writeValue(n: any) {
    
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  validate( control: AbstractControl) {
     
  }
 
}
