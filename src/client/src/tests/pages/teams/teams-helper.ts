import { CommonModule } from "@angular/common";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed, tick } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService, NavigationProvider, Team, TeamService, TeamStore } from "common";
import { MessageService } from "primeng/api";
import { TeamsNameFilterPipe } from "src/app/pages/teams/pipes/teams.p";
import { TeamsComponent } from "src/app/pages/teams/teams";
import { EdUilibModule, Notes } from "uilib";
import { ActivatedRouteStub } from "../utils/activated-route-stub";
import { GridHelper } from "../utils/grid-validator";
import { RouterLinkDirectiveStub } from "../utils/router-link-stub";

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

    return [ 
      NavigationProvider,
      AuthService,
      HttpClient,
      HttpHandler,
      MessageService,
      Notes,

      { 
        provide: TeamStore,
        useValue: jasmine.createSpyObj('TeamStore', ['reset'])
      },

      {
        provide: Router,
        useValue: jasmine.createSpyObj('Router', ['navigateByUrl'])
      },

      { 
        provide: ActivatedRoute,
        useValue: ActivatedRouteStub
      },
     ];
  }

  static get declarations(){
    return [ 
      TeamsComponent,
      TeamsNameFilterPipe,
      RouterLinkDirectiveStub
    ]
  }

  static get imports(){
    return [
      CommonModule,
      EdUilibModule,
      FormsModule
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