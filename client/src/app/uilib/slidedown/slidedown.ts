import { Component, Output, EventEmitter,  } from '@angular/core';
import { FadeInOutAnimation } from '../animations';

@Component({
  selector: 'ed-slidedown',
  templateUrl: './slidedown.html',
  styleUrls: [ './slidedown.scss' ],
  animations:[FadeInOutAnimation]
})
export class SlideDownComponent {
  @Output() close = new EventEmitter();
}

