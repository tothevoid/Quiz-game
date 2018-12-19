import {
    animation, trigger, animateChild, group,
    transition, animate, style, query
  } from '@angular/animations';
  
  const slideRightToLeft = [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ]),
    query(':enter', [
      style({ left: '150%'})
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('300ms ease-out', style({ left: '-100%'}))
      ]),
      query(':enter', [
        animate('300ms ease-out', style({ left: '0%'}))
      ])
    ]),
    query(':enter', animateChild()),
  ]

  const slideLeftToRight = [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: '0%',
        width: '100%'
      })
    ]),
    query(':enter', [
      style({ left: '-150%'})
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('300ms ease-out', style({ left: '100%'}))
      ]),
      query(':enter', [
        animate('300ms ease-out', style({ left: '0%'}))
      ])
    ]),
    query(':enter', animateChild()),
  ]

  export const slideInAnimation =
  trigger('routeAnimations', [
    transition('MenuPage => *', slideRightToLeft),
    transition('CategoriesPage => MenuPage', slideLeftToRight),
    transition('CategoriesPage => QuestionsPage', slideRightToLeft),    
    transition('QuestionsPage => ResultPage', slideRightToLeft),
    transition('LeaderboardsPage => MenuPage', slideLeftToRight),
    transition('ResultPage => MenuPage', slideLeftToRight),
    transition('ResultPage => QuestionsPage', slideLeftToRight),
    transition('ResultPage => LeaderboardsPage', slideRightToLeft),
  ]
);