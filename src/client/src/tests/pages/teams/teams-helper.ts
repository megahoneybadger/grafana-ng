import { CommonModule } from "@angular/common";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed, tick } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule, By } from "@angular/platform-browser";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { AuthService, NavigationProvider, Preferences, Team, TeamService, TeamStore, Theme, Timezone } from "common";
import { MessageService } from "primeng/api";
import { of } from "rxjs";
import { AddTeamComponent } from "src/app/pages/teams/add/add-team";
import { TeamSettingsComponent } from "src/app/pages/teams/edit/settings/team-settings";
import { TeamsNameFilterPipe } from "src/app/pages/teams/pipes/teams.p";
import { TeamsComponent } from "src/app/pages/teams/teams";
import { EdUilibModule, Notes } from "uilib";
import { ActivatedRouteStub } from "../utils/activated-route-stub";
import { GridHelper } from "../utils/grid-validator";
import { RouterLinkDirectiveStub } from "../utils/router-link-stub";
import { RouterTestingModule } from '@angular/router/testing';

export class TeamsTestHelper{

  static configureTestingModule( teamService: any ){
    TestBed.configureTestingModule({
      declarations: TeamsTestHelper.declarations,
      imports:  TeamsTestHelper.imports,
      schemas: [NO_ERRORS_SCHEMA],
      providers: [ 
        ...TeamsTestHelper.providers, 
        { 
          provide: TeamService,
          useValue: teamService
        }
      ]});
  }

  static get providers(){

    const teamStoreSpy = jasmine.createSpyObj('TeamStore',
      [ 'add', 'reset', 'getTeam$']);

    teamStoreSpy.getTeam$.and.returnValue( of( this.teams[ 0 ] ) );

    const routeStub = new ActivatedRouteStub( { id: 1 } );

    return [ 
      NavigationProvider,
      AuthService,
      HttpClient,
      HttpHandler,
      MessageService,
      Notes,

      { 
        provide: TeamStore,
        useValue: teamStoreSpy
      },

      {
        provide: Router,
        useValue: jasmine.createSpyObj('Router', ['navigateByUrl', 'navigate' ])
      },

      { 
        provide: ActivatedRoute,
        useValue: routeStub
      },
     ];
  }

  static get declarations(){
    return [ 
      TeamsComponent,
      AddTeamComponent,
      TeamSettingsComponent,
      TeamsNameFilterPipe,
      //RouterLinkDirective
      RouterLinkDirectiveStub,
    ]
  }

  static get imports(){
    return [
      CommonModule,
      EdUilibModule,
      FormsModule,
      ReactiveFormsModule,
    ];
  }

  static get teams() : Team[]{
    return [
      { id: 1, name: 'team denis', avatarUrl: "url1", email: 'team-denis@gmail.com', membersCount: 6 },
      { id: 2, name: 'team lena', avatarUrl: "url2", email: 'team-lena@gmail.com', membersCount: 8 },
      { id: 3, name: 'team tony', avatarUrl: "url3", email: 'team-tony@gmail.com', membersCount: 0 },
      { id: 4, name: 'team nata', avatarUrl: "url3", email: 'team-nata@gmail.com', membersCount: 0 }
    ];
  }

  static get preferences() : Preferences{
    return {
      homeDashboardId: 0,
      theme: Theme.Dark,
      timeZone: Timezone.default
    }
  }

  static filterTeams( filter: string ){
    return this
      .teams
      .filter( x => x.name.includes( filter ) )
  }

  static validateGrid( fixture: ComponentFixture<TeamsComponent>, teams: Team[] ){

    const elGrid = fixture
      .debugElement
      .query(By.css('ed-grid'));

    expect( elGrid ).toBeTruthy()

    GridHelper.validateHeaders( elGrid, '', 'Name', 'Email', 'Members ', '' );

    tick(); 
    fixture.detectChanges();

    const rows = elGrid.queryAll( By.css( 'tbody tr' ) );

    expect( rows.length ).toBe( teams.length );

    for( let i = 0; i < teams.length; ++i ){
      const team = teams[ i ];
      
      GridHelper.validateColumn( rows[ i ], 1, team.name );
      GridHelper.validateColumn( rows[ i ], 2, team.email );
      GridHelper.validateColumn( rows[ i ], 3, team.membersCount.toString() );

      GridHelper.validateClosedDeleteBlock(  elGrid, i );
    }
  }
}
