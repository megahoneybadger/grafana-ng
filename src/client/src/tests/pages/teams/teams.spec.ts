import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { TeamService, Team, TeamStore, NavigationProvider, AuthService } from 'common';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BannerComponent } from "src/app/pages/teams/team-switch";
import { of } from 'rxjs';

import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TeamsComponent } from 'src/app/pages/teams/teams';
import { TeamsNameFilterPipe } from 'src/app/pages/teams/pipes/teams.p';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EdUilibModule, LoadOrErrorComponent, PageComponent, PageFooterComponent, PageHeaderComponent } from 'uilib';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRouteStub } from '../utils/activated-route-stub';
import { TeamsModule } from 'src/app/pages/teams/teams.mod';
import { execute } from '@angular-devkit/build-ng-packagr';

describe('TeamsComponent', () => {

  let component: TeamsComponent;
  let fixture: ComponentFixture<TeamsComponent>;
  // let h1: HTMLElement;
  // let h1De: DebugElement;
  let teamServiceSpy: any;
  let teamStoreSpy: any;
  let activatedRouteStub: ActivatedRouteStub;

  const teams = [
    { id: 1, name: 'team #1', avatarUrl: "url1", email: 'team1@gmail.com', memberCount: 6 },
    { id: 2, name: 'team #2', avatarUrl: "url2", email: 'team2@gmail.com', memberCount: 8 }
  ];

  beforeEach(() => {
    teamServiceSpy = jasmine.createSpyObj('TeamService', ['getTeams', 'deleteTeam']);
    teamStoreSpy = jasmine.createSpyObj('TeamStore', ['reset']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
    activatedRouteStub = new ActivatedRouteStub();
 
    teamServiceSpy.getTeams.and.returnValue( of( teams ) );
    teamServiceSpy.deleteTeam.and.returnValue( of( { message: 'ok'} ) );

    TestBed.configureTestingModule({
      declarations: [ TeamsComponent, TeamsNameFilterPipe ],
      imports:[  CommonModule, EdUilibModule, FormsModule  ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [ NavigationProvider, AuthService, HttpClient, HttpHandler,
        {provide: TeamService, useValue: teamServiceSpy },
        {provide: TeamStore, useValue: teamStoreSpy},
        {provide: Router, useValue: routerSpy},
        {provide: ActivatedRoute, useValue: activatedRouteStub},
      ]});
    
    fixture = TestBed.createComponent(TeamsComponent);
    component = fixture.componentInstance; 
    // h1 = fixture.nativeElement.querySelector('h1');
    // h1De = fixture.debugElement.query(By.css('h1'));
  });

  it('should create a component', () => {
    expect( component ).toBeTruthy();
  });

  it('should load teams', () => {
    fixture.detectChanges();

    expect( teamServiceSpy.getTeams ).toHaveBeenCalledTimes( 1 );
    expect( component.teams ).toEqual( teams );
  });

  it('should load teams', () => {
    fixture.detectChanges();

    expect( component.teams ).toEqual( teams );
  });

  it('should delete team', () => {
    fixture.detectChanges();

    component.onRemoveTeam( teams[ 0 ] );

    expect( teamServiceSpy.deleteTeam ).toHaveBeenCalledTimes( 1 );

    expect( component.teams.length ).toBe( 1 );
  });
 
});





