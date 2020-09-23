import { Component, Input, forwardRef, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { BaseNgModelComponent } from '../../base/ng-model-cmp';

@Component({
  selector: 'ed-filterbox',
  templateUrl: './filterbox.html',
  host: {'class': 'gf-form gf-form--grow'},
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FilterBoxComponent),  
      multi: true
    }
  ],
})
export class FilterBoxComponent extends BaseNgModelComponent {
  @Input() placeholder: string = '';
  @Input() debounceTime: number = 500;

  @ViewChild('textbox') textBox: ElementRef;

  @Output() debounceKeyUp = new EventEmitter<string>();

  ngAfterViewInit() {
    fromEvent(this.textBox.nativeElement, 'keyup')
      .pipe(
        map((event: any) => event.target.value),
        debounceTime(this.debounceTime),
        distinctUntilChanged()
      )
      .subscribe( q => this.debounceKeyUp.emit( q ));
  }
}
