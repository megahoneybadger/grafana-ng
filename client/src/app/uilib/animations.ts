import { trigger, style, transition, animate} from '@angular/animations';

export const FadeInOutAnimation =	 [
  trigger('fadeInOut', [
    transition(':enter', [
      style({opacity:0}),
      animate('200ms ease-in', style({opacity: 1}))
    ]),
    transition(':leave', [
      animate('200ms ease-in', style({opacity: 0}))
    ])
  ])
]

export const SlideInOutAnimation =	 [
  trigger('slideInOut', [
    transition(':enter', [
      style({transform: 'translateY(-100%)'}),
      animate('200ms ease-in', style({transform: 'translateY(0%)'}))
    ]),
    transition(':leave', [
      animate('200ms ease-in', style({transform: 'translateY(-100%)'}))
    ])
  ])
]