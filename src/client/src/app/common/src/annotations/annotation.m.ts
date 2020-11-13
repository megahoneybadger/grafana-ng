import { AlertState } from '../alert/alert.m';
import { Rect } from '../dashboard/dashboard.m';
import { DateTime } from '../time/time.m';


export interface Annotation{
  id: number;
  dashboardId: number;
  panelId: number;
  userId: number;
  userName: string;
  time: DateTime;
  timeEnd: DateTime;
  text: string;
  tags: string[]
  alert?: AlertAnnotation;

  ruleIndex?: number;
  rect: any;
}

export interface AlertAnnotation{
  id: number;
  prevState: AlertState,
  currentState: AlertState,
  data: any;
}