import { Injectable } from '@angular/core';
import { DashboardStore } from '../dashboard/dashboard.store';
import { switchMap } from 'rxjs/operators';
import { TimeRangeStore } from '../time/time.store';
import { AlertService } from '../alert/alert.s';
import { AnnotationQueryType, AnnotationRule, Dashboard, Panel } from '../dashboard/dashboard.m';
import { AnnotationService } from './annotation.s';
import { BehaviorSubject, forkJoin, Observable, of } from 'rxjs';
import { Annotation } from './annotation.m';

@Injectable()
export class AnnotationStore{

  dashboard: Dashboard;

  private annotationsUpdate: BehaviorSubject<number> = new BehaviorSubject(undefined);
  readonly annotationsUpdate$: Observable<number> = this.annotationsUpdate.asObservable();

  private alertStateUpdate: BehaviorSubject<number> = new BehaviorSubject(undefined);
  readonly alertStateUpdate$: Observable<number> = this.alertStateUpdate.asObservable();
 
  constructor( 
    private time: TimeRangeStore,
    private dahsboardStore: DashboardStore,
    private alertService: AlertService,
    private annotService: AnnotationService ){

      time
        .range$
        .pipe( 
          switchMap( x => dahsboardStore.dashboard$ ))
        .subscribe( x => {
          this.dashboard = x;
          this.update();
        } );
  }

  update(){
    this.updatePanelsAlertState( this.dashboard );
    this.updatePanelsAnnotations( this.dashboard );
  }

  private updatePanelsAlertState( d: Dashboard ){
    const alertRuleCount = d
      ?.data
      .panels
      .filter( x => x.widget?.alert )
      .length;

    if( !alertRuleCount ){
      return;
    }

    this
      .alertService
      .getStatesForDashboard( d.id )
      .subscribe( x => x.forEach( e => {
        const panel = d
          .data
          .panels
          .find( p => p.id == e.panelId );

        if( panel ){
          panel.alertState = e.state;
        }
      }));
  }

  private updatePanelsAnnotations( d: Dashboard ){
    if( !d ){
      return;
    }

   d.annotationRules = d.annotationRules?? [ AnnotationRule.buildIn ];

   const requests = [];

   d
    .data
    .panels
    .forEach( p => p.annotations = []);
   
   d
    .annotationRules
    .map( rule => this.getAnnotationRequest( d, rule ))
    .filter( x => x )
    .forEach( x => requests.push( x ) )

    forkJoin( requests )
      .subscribe( x => x.forEach( ( r: Annotation[], i: number ) => this.distributeAnnotations( r, i, d )  )  )
  }

  private getAnnotationRequest( d: Dashboard, rule: AnnotationRule ) : Observable<Annotation[]>{
    const range = this.time.range;
    
    const empty = of([]);

    if( !rule.enable ){
      return empty;
    }

    let q = `from=${range.from.valueOf()}&to=${range.to.valueOf()}`;

    if( rule.queryType == AnnotationQueryType.Dashboard ){
      if( !d.id ){
        return empty;
      }
      
      q = `${q}&dashboardId=${d.id}`;
    } else {
      if( !rule.tags || 0 == rule.tags.length ){
        return empty;
      }

      rule
        .tags
        .forEach( t => q = `${q}&tags=${t}` )

      if( rule.limit > 0 ){
        q = `${q}&limit=${rule.limit}`
      }

      if( rule.matchAny ){
        q = `${q}&matchAny=true`
      }
    }

    return this
      .annotService
      .find( q );
  }

  private distributeAnnotations( annots: Annotation[], index: number, d: Dashboard ){
    const rule = d.annotationRules[ index ];

    d.data.panels.forEach( p => {
      annots.forEach( a => {
        let shouldAdd = 
          ( rule.buildIn && p.id == a.panelId ) ||
          ( !rule.buildIn );

        p.annotations = p.annotations ?? [];

        const first = p
          .annotations
          .find( x => x.time == a.time && x.timeEnd == a.timeEnd );
        
        if( shouldAdd && !first ){
          const copy = {...a};
          copy.ruleIndex = index;
          p.annotations.push( copy );
        }
      });

      this.annotationsUpdate.next( p.id );
    });
  }
}
