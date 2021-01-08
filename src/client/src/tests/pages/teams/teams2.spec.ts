import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { TeamService, Team } from 'common';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BannerComponent } from "src/app/pages/teams/team-switch";
import { of } from 'rxjs';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

// describe('TeamsComponent', () => {

//   let component: BannerComponent;
//   let fixture: ComponentFixture<BannerComponent>;
//   let h1: HTMLElement;
//   let h1De: DebugElement;
//   let teamServiceSpy: any;

//   const teams = [
//     { id: 1, name: 'team #1', avatarUrl: "url1", email: 'team1@gmail.com', memberCount: 6 },
//     { id: 2, name: 'team #2', avatarUrl: "url2", email: 'team2@gmail.com', memberCount: 8 }
//   ];

//   beforeEach(() => {
//     teamServiceSpy =
//       jasmine.createSpyObj('TeamService', ['getTeams']);
    
//     teamServiceSpy.getTeams.and.returnValue( of( teams ) );

//     TestBed.configureTestingModule({
//       declarations: [ BannerComponent ],
//       providers: [ {provide: TeamService, useValue: teamServiceSpy } ]
//     });
    
//     fixture = TestBed.createComponent(BannerComponent);
//     component = fixture.componentInstance; // BannerComponent test instance
//     h1 = fixture.nativeElement.querySelector('h1');
//     h1De = fixture.debugElement.query(By.css('h1'));
//   });

//   // describe('LightswitchComp', () => {

//   //   it('should still see original title after comp.title change', () => {
//   //     fixture.detectChanges();
//   //     expect(component.teams).toEqual(teams);

//   //     let chosen: Team;
//   //     component.selected.subscribe( x => chosen = x );
      
//   //     expect(teamServiceSpy.getTeams).toHaveBeenCalledTimes(1);

//   //     const target = teams[ 0 ];
//   //     h1.click();

//   //     expect(chosen).toEqual( target );
      
//   //   });


//   // });
 
// });





