import {animate, group, query, style, transition} from '@angular/animations';

const TRANSFORM_IN = 'scale3d(1, 1, 1)';
const TRANSFORM_OUT = 'scale3d(0.3, 0.3, 0.3)';
const OPACITY_IN = '1';
const OPACITY_OUT = '0';
const ANIMATOIN_TIME = 150;

export class ModalAnimation {

  public static fadeInOut: any[] = [
    transition(':enter', [
      // The two first queries are needed for IE & Edge
      query('app-modal .pok-modal__inner', [
        style({transform: TRANSFORM_OUT, opacity: OPACITY_OUT}),
      ]),
      query('app-modal .pok-modal-background', [
        style({opacity: OPACITY_OUT}),
      ]),
      group([
        query('app-modal .pok-modal__inner', [
          style({transform: TRANSFORM_OUT, opacity: OPACITY_OUT}),
          animate(ANIMATOIN_TIME, style({transform: TRANSFORM_IN, opacity: OPACITY_IN}))
        ]),
        query('app-modal .pok-modal-background', [
          style({opacity: OPACITY_OUT}),
          animate(ANIMATOIN_TIME, style({opacity: OPACITY_IN}))
        ])
      ])
    ]),
    transition(':leave', [
      group([
        query('app-modal .pok-modal__inner', [
          style({transform: TRANSFORM_IN}),
          animate(ANIMATOIN_TIME, style({transform: TRANSFORM_OUT, opacity: OPACITY_OUT}))
        ]),
        query('app-modal .pok-modal-background', [
          style({opacity: OPACITY_IN}),
          animate(ANIMATOIN_TIME, style({opacity: OPACITY_OUT}))
        ])
      ])
    ])
  ];

}
