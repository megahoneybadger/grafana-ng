import { AlertState } from '../alert/alert.m';
import { Rect } from '../dashboard/dashboard.m';
import { DateTime } from '../time/time.m';
import * as moment_ from 'moment';
const moment = moment_;

export class Annotation{
  id: number;
  dashboardId: number;
  panelId: number;
  userId: number;
  userName: string;
  time: number;
  timeEnd: number;
  text: string;
  tags: string[]
  alert?: AlertAnnotation;

  ruleIndex?: number;
  rect: any;
  
  overRoot?: boolean;
  overPopup?: boolean;

  static create( start, end ): Annotation{
    const ann = new Annotation();

    ann.time = moment( start ).valueOf();
    ann.timeEnd = ( end != start ) ? moment( end ).valueOf() : 0;
    
    return ann;
  }
}

export interface AlertAnnotation{
  id: number;
  prevState: AlertState,
  currentState: AlertState,
  data: any;
}

export interface AnnotationCreateRequest extends AnnotationUpdateRequest{
  dashboardId: number;
  panelId: number;
}

export interface AnnotationUpdateRequest{
  time: number;
  timeEnd?: number;
  text: string;
  tags: string[]
  alertId?: number;
}