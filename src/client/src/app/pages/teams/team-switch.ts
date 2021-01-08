import { Component, EventEmitter, Injectable, Output } from '@angular/core';
import { Team, TeamService } from 'common';
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-banner',
  template: '<h1 (click)="onHeaderClick( $event )">{{title}}</h1>',
  styles: ['h1 { color: green; font-size: 350%}']
})
export class BannerComponent {
  title = 'Test Tour of Heroes';
  teams: Team[];

  @Output() selected = new EventEmitter<Team>() 

  constructor( public service: TeamService ){
    //console.log( service );
    
  }

  ngOnInit(){
    this
      .service
      .getTeams()
      .subscribe( x => this.teams = x );
  }

  onHeaderClick(){
    this.selected.emit( this.teams[ 0 ] );
  }
}
