import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";

@Injectable()
export class ChannelEditFormService {
  private form: BehaviorSubject<FormGroup>;
  form$: Observable<FormGroup>;
  baseProperties : string []

  constructor(private fb: FormBuilder ) {
    let fg = new FormGroup({
      'name': new FormControl( null, Validators.required ),
			'type': new FormControl( null, Validators.required),
			'sendOnAllAlerts': new FormControl(false),
			'includeImage': new FormControl(false),
			'disableResolveMessage': new FormControl(true),
			'sendReminder': new FormControl(false),
    });

    this.baseProperties = Object.keys( fg.controls );

    this.form = new BehaviorSubject( fg );
    this.form$ = this.form.asObservable();
  }

  addControls(model: any) {
    if (!model){
      return;
    }

    let form = this.form.getValue();
    //form.reset({}); // TODO

    let fg = this.fb.group(model);

    let oldControls = this
      .form
      .getValue()
      .controls;

    Object
      .keys(oldControls)
      .filter( x => !this.baseProperties.includes( x ) )
      .forEach( x => this
        .form
        .getValue()
        .removeControl( x ) );

    Object
      .keys(model)
      .forEach(x => {
        this
          .form
          .getValue()
          .addControl( x, fg.controls[ x ] )
      });
  }
}




