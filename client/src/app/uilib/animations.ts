import { trigger, style, transition, animate, group} from '@angular/animations';


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
      style({height: '0', opacity: 0}),

      group([
          animate(300, style({maxHeight: '*'})),
          animate('400ms ease-in-out', style({'opacity': '1'}))
      ])
      // style({transform: 'translateY(-100%)'}),
      // animate('200ms ease-in', style({transform: 'translateY(0%)'}))
    ]),
    transition(':leave', [
      //animate('200ms ease-in', style({transform: 'translateY(-100%)'}))
      style({height: '*', opacity: 1}),

      group([
          animate(1300, style({height: 0})),
          animate('1200ms ease-in-out', style({'opacity': '0'}))
      ])
    ])
  ])
]

