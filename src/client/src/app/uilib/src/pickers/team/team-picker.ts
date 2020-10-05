import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseNgModelComponent } from '../../base/ng-model-cmp';
import { Team } from 'common';

@Component({
  selector: 'ed-team-picker',
  templateUrl: './team-picker.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TeamPickerComponent),  // replace name as appropriate
      multi: true
    }]
  
  })
export class TeamPickerComponent extends BaseNgModelComponent {
  data: SelectItem[];

  @Input() set teams( t: Team[] ){
    this.value = undefined;
    this.data = t?.map(x => { return { label: <any>x, value: x } })
  }

  @Output() selected = new EventEmitter<Team>()
}

