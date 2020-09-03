import { Component, Input } from '@angular/core';
import { ObservableEx } from './load-wrapper';
import { FadeInOutAnimation } from '../animations';

@Component({
  selector: 'load-or-error',
  animations: [FadeInOutAnimation],
  template: `
	<div *ngIf="loadingWrapper?.errorLoading$ | async">
		<ed-error-popup message="{{ errorMessage }}"></ed-error-popup> 
	</div>
	<ed-progress message="{{loadingMessage}}" *ngIf="loadingWrapper?.loading" ></ed-progress>`
})
export class LoadOrErrorComponent {
  /**
   * The template that should get created when we are in a loading or error state.
   * Use it in the else condition of *ngIf.
   */
  //@ViewChild('template') template: TemplateRef<NgIfContext>|null = null;
  /**
   * The loading wrapper that should be used to show the loading/error state
   */
  @Input() loadingWrapper: ObservableEx<any>|null = null;
  /**
   * A configurable error message for error cases.
   */
  @Input() errorMessage = 'An error occured!';
  /**
   * A configurable loading message.
   */
  @Input() loadingMessage = 'loading...';
}
