import { fakeAsync, flush, tick } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { TeamsPage } from './teams.page'
import { TeamsTestHelper } from './teams-helper';
import { GridHelper } from '../utils/grid-validator';
import { delay } from 'rxjs/operators';
import { ErrorMessages } from 'uilib';

describe( 'TeamsComponent', ()=> {

  describe('successful data loading', () => {

    let page: TeamsPage;
    
    beforeEach(() => {
      const teamServiceSpy = jasmine.createSpyObj('TeamService', ['getTeams']);
      teamServiceSpy.getTeams.and.returnValue( of( [...TeamsTestHelper.teams] ) );
  
      page = new TeamsPage( teamServiceSpy );
    });
  
    it('should create a component', () => {
      expect( page.component ).toBeTruthy();
    });
  
    it('should load teams', () => {
      page.fixture.detectChanges();
  
      expect( page.teamService.getTeams ).toHaveBeenCalledTimes( 1 );
      expect( page.component.teams ).toEqual( TeamsTestHelper.teams );
    });
  
    it('should render DOM', fakeAsync( () => {
      page.fixture.detectChanges();
  
      const teams = TeamsTestHelper.teams;
  
      expect( page.component.teams ).toEqual( teams );
      
      TeamsTestHelper.validateGrid( page.fixture, teams );
  
      expect( page.addButton ).toBeTruthy();
      expect( page.filterBox ).toBeTruthy();
      expect( page.addButtonLink.linkParams ).toBe( 'new' );
    }));
  
    it('should navigate to add team', () => {
      expect( page.teamService.getTeams ).toHaveBeenCalledTimes( 0 );
  
      page.fixture.detectChanges();
  
      expect( page.teamService.getTeams ).toHaveBeenCalledTimes( 1 );
  
      expect( page.addButton ).toBeTruthy();
      expect( page.filterBox ).toBeTruthy();
  
      expect( page.addButtonLink.navigatedTo ).toBeNull('should not have navigated to add team yet');
  
      page.clickAddButton();
     
      expect( page.addButtonLink.navigatedTo ).toBe('new');
    });
  
    it('should filter teams', fakeAsync(() => {
      page.fixture.detectChanges();
  
      expect( page.teamService.getTeams ).toHaveBeenCalledTimes( 1 );
  
      const teams = TeamsTestHelper.teams;
  
      // before filter change
      TeamsTestHelper.validateGrid( page.fixture, teams );
  
      const filterWord = "lena";
      page.changeFilter( filterWord );
  
      // after filter change
      expect(page.component.filter).toBe(filterWord);
  
      TeamsTestHelper.validateGrid( page.fixture,
        TeamsTestHelper.filterTeams( filterWord ) );
  
      page.changeFilter( '' );
      TeamsTestHelper.validateGrid( page.fixture, teams );
  
      page.changeFilter( 'error' );
      TeamsTestHelper.validateGrid( page.fixture, [] );
  
      page.changeFilter( '' );
      TeamsTestHelper.validateGrid( page.fixture, teams );
    }));
  });
  
  describe('successful data loading with delay', () => {
  
    let page: TeamsPage;
    
    beforeEach(() => {
      const teamServiceSpy = jasmine.createSpyObj('TeamService', ['getTeams']);
      teamServiceSpy.getTeams.and.returnValue( of( [...TeamsTestHelper.teams] ).pipe( delay( 1000 ) ) );
  
      page = new TeamsPage( teamServiceSpy );
    });
  
    it('should load teams and display progress indicator',  fakeAsync( () => {
      page.fixture.detectChanges();
  
      expect( page.teamService.getTeams ).toHaveBeenCalledTimes( 1 );
  
      expect( page.loadOrErrorProgress ).toBeFalsy();
  
      tick( 600 );
      page.fixture.detectChanges();
      expect( page.loadOrErrorProgress ).toBeTruthy();
  
      tick( 400 );
      expect( page.component.teams ).toEqual( TeamsTestHelper.teams );
      
      page.fixture.detectChanges();
  
      expect( page.loadOrErrorProgress ).toBeFalsy();
  
      flush();
    }));
  });
  
  describe('failure data loading', () => {
  
    let page: TeamsPage;
    
    beforeEach(() => {
      const teamServiceSpy = jasmine.createSpyObj('TeamService', ['getTeams']);
      teamServiceSpy.getTeams.and.returnValue( throwError({ status: 500 }) );
  
      page = new TeamsPage( teamServiceSpy );
    });
  
    it('should create a component', () => {
      expect( page.component ).toBeTruthy();
    });
  
    it('should not load teams', () => {
      page.fixture.detectChanges();
  
      expect( page.teamService.getTeams ).toHaveBeenCalledTimes( 1 );
      expect( page.component.teams ).toBeUndefined();
    });
  
    it('should not render DOM', () => {
      page.fixture.detectChanges();
  
      const teams = TeamsTestHelper.teams;
  
      expect( page.component.teams ).not.toEqual( teams );
  
      expect( page.grid ).toBeFalsy();
      expect( page.addButton ).toBeFalsy();
      expect( page.filterBox ).toBeFalsy();
    });
  });
  
  describe('no data', () => {
  
    let page: TeamsPage;
    
    beforeEach(() => {
      const teamServiceSpy = jasmine.createSpyObj('TeamService', ['getTeams']);
      teamServiceSpy.getTeams.and.returnValue( of( [] ) );
  
      page = new TeamsPage( teamServiceSpy );
    });
  
    it('should load teams', () => {
      page.fixture.detectChanges();
  
      expect( page.teamService.getTeams ).toHaveBeenCalledTimes( 1 );
      expect( page.component.teams.length ).toBe( 0 );
  
      expect( page.emptyList ).toBeTruthy();
    });
  });
  
  describe('successful delete', () => {
  
    let page: TeamsPage;
    
    beforeEach(() => {
      const teamServiceSpy = jasmine.createSpyObj('TeamService', [ 'getTeams', 'deleteTeam']);
      teamServiceSpy.getTeams.and.returnValue( of( TeamsTestHelper.teams ) );
      teamServiceSpy.deleteTeam.and.returnValue( of( { message: "Team deleted" } ) );
  
      page = new TeamsPage( teamServiceSpy );
    });
  
  
    it('should delete team via component', fakeAsync( () => {
      page.fixture.detectChanges();
  
      let teams = TeamsTestHelper.teams;
  
      TeamsTestHelper.validateGrid( page.fixture, teams );
  
      const index = 0;
      page.component.onRemoveTeam( teams[ index ] );
      teams.splice( index, 1 );
      
      expect( page.component.teams ).toEqual( teams );
      TeamsTestHelper.validateGrid( page.fixture, teams );
      page.validateNoteSuccess( 'Team deleted' );
    }));
  
    it('should try to delete team via DOM with cancellation', fakeAsync( () => {
      page.fixture.detectChanges();
  
      const index = 0;
      const grid = page.grid;
      let teams = TeamsTestHelper.teams;
      
      TeamsTestHelper.validateGrid( page.fixture, teams );
  
      page.clickDeleteBlock( index );
  
      GridHelper.validateOpenDeleteBlock( grid, index );
  
      page.clickCancelDelete( index );
  
      GridHelper.validateClosedDeleteBlock( grid, index );
    }));
  
    it('should delete team via DOM with confirmation', fakeAsync( () => {
      page.fixture.detectChanges();
  
      const index = 0;
      const grid = page.grid;
      let teams = TeamsTestHelper.teams;
      
      TeamsTestHelper.validateGrid( page.fixture, teams );
  
      page.clickDeleteBlock( index );
  
      GridHelper.validateOpenDeleteBlock( grid, index );
  
      page.clickConfirmDelete( index );
  
      expect( page.teamService.deleteTeam ).toHaveBeenCalledTimes( 1 );
      teams.splice( index, 1 );
      expect( page.component.teams ).toEqual( teams );
      TeamsTestHelper.validateGrid( page.fixture, teams );
      page.validateNoteSuccess( 'Team deleted' );
    }));
  
    it('should delete all teams via DOM with confirmation (show invitation in the end)', fakeAsync( () => {
      page.fixture.detectChanges();
  
      const grid = page.grid;
      let teams = TeamsTestHelper.teams;
      const total = teams.length;
  
      while( teams.length != 0 ) {
        const index = 0;
        TeamsTestHelper.validateGrid( page.fixture, teams );
  
        page.clickDeleteBlock( index );
    
        GridHelper.validateOpenDeleteBlock( grid, index );
    
        page.clickConfirmDelete( index );
    
        teams.splice( index, 1 );
        expect( page.component.teams ).toEqual( teams );
  
        if( teams.length > 0 ){
          TeamsTestHelper.validateGrid( page.fixture, teams );
          page.validateNoteSuccess( 'Team deleted' );
        } else {
          expect( page.emptyList ).toBeTruthy();
        }
      }
  
      expect( page.teamService.deleteTeam ).toHaveBeenCalledTimes( total );
      expect(page.component.teams.length).toBe(0);
    }));
  });

  describe('failure delete', () => {
  
    let page: TeamsPage;
    
    beforeEach(() => {
      const teamServiceSpy = jasmine.createSpyObj('TeamService', [ 'getTeams', 'deleteTeam']);
      teamServiceSpy.getTeams.and.returnValue( of( TeamsTestHelper.teams ) );
      teamServiceSpy.deleteTeam.and.returnValue( throwError({ status: 500 }) );
  
      page = new TeamsPage( teamServiceSpy );
    });
  
    it('should not delete team via component', fakeAsync( () => {
      page.fixture.detectChanges();
  
      let teams = TeamsTestHelper.teams;
  
      TeamsTestHelper.validateGrid( page.fixture, teams );
  
      const index = 0;
      page.component.onRemoveTeam( teams[ index ] );
      //teams.splice( index, 1 );
      
      expect( page.component.teams ).toEqual( teams );
      TeamsTestHelper.validateGrid( page.fixture, teams );
      page.validateNoteError( ErrorMessages.BAD_DELETE_TEAM )
    }));

    it('should not delete team via DOM with confirmation', fakeAsync( () => {
      page.fixture.detectChanges();
  
      const index = 0;
      const grid = page.grid;
      let teams = TeamsTestHelper.teams;

      TeamsTestHelper.validateGrid( page.fixture, teams );
  
      page.clickDeleteBlock( index );
  
      GridHelper.validateOpenDeleteBlock( grid, index );
  
      page.clickConfirmDelete( index );
  
      expect( page.teamService.deleteTeam ).toHaveBeenCalledTimes( 1 );

      //teams.splice( index, 1 );
      expect( page.component.teams.length ).toEqual( teams.length );
      GridHelper.validateOpenDeleteBlock( grid, index );
      page.validateNoteError( ErrorMessages.BAD_DELETE_TEAM )
    }));
  });
} )






