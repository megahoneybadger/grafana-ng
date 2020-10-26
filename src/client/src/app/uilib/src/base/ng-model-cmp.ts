export class BaseNgModelComponent {

  protected _value: any = '';
  
  protected onChange: any = () => { };
  protected onTouched: any = () => { };

  get value(): any {
    return this._value;
  };
 
  set value(v: any) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);
    }
  }

  onBlur() {
    this.onTouched();
  }

  writeValue(value: any) {
    //console.log( v );
    if (value !== this._value) {
      this._value = value;
    }
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  change(value: any) {
    this.onChange(this._value);
    this.onTouched();
  }
}
