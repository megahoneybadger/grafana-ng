import { fakeAsync, flush, tick } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ErrorMessages } from 'uilib';

import { TeamsTestHelper } from '../teams-helper';
import { AddTeamPage } from './add-team.page';

describe( 'AddTeamComponent', ()=> {

  describe('successful team creation', () => {

    let page: AddTeamPage;
    
    beforeEach(() => {
      const teamServiceSpy = jasmine.createSpyObj('TeamService', [ 'getTeams', 'createTeam']);
      teamServiceSpy.createTeam.and.returnValue( of( { message: "Team created", teamId: 100 } ) );
      teamServiceSpy.getTeams.and.returnValue( of( [...TeamsTestHelper.teams] ) );
  
      page = new AddTeamPage( teamServiceSpy );
    });
  
    it('should create a component', () => {
      expect( page.component ).toBeTruthy();
    });

    it('should create DOM elements', () => {
      page.fixture.detectChanges();

      expect( page.nameTextBox ).toBeTruthy();
      expect( page.emailTextBox ).toBeTruthy();
      expect( page.submitButton ).toBeTruthy();
      expect( page.submitButton.nativeElement.disabled ).toBe( true );
    });

    it('should enable create button after entering correct data', fakeAsync( () => {
      page.fixture.detectChanges();

      expect( page.submitButton.nativeElement.disabled ).toBe( true );

      expect(page.component.form.valid).toBeFalsy();

      page.changeName( "marvel team" );
      page.changeEmail( "marvel@gmail.com" );

      expect( page.teamService.getTeams ).toHaveBeenCalled();
      expect( page.component.form.valid ).toBeTruthy();

      page.fixture.detectChanges();

      expect(page.submitButton.nativeElement.disabled).toBeFalsy();
    }));

    it('should create team', fakeAsync( () => {
      page.fixture.detectChanges();

      expect( page.submitButton.nativeElement.disabled ).toBe( true );

      expect(page.component.form.valid).toBeFalsy();

      const name = "marvel team";
      const email = "marvel@gmail.com";

      page.changeName( name );
      page.changeEmail( email );

      page.submitButton.nativeElement.click();

      expect( page.teamService.createTeam ).toHaveBeenCalledWith( { name: name, email: email } );
      expect( page.component.router.navigate ).toHaveBeenCalledWith( ["/org/teams/edit/100"] );
      page.validateNoteSuccess( "Team created" )

      flush();
    }));
  });

  describe('successful team creation with delay', () => {

    let page: AddTeamPage;
    
    beforeEach(() => {
      const teamServiceSpy = jasmine.createSpyObj('TeamService', [ 'getTeams', 'createTeam']);
      teamServiceSpy.createTeam.and.returnValue(
        of( { message: "Team created", teamId: 100 } ).pipe( delay( 1000 ) ) );
      teamServiceSpy.getTeams.and.returnValue( of( [...TeamsTestHelper.teams] ) );
  
      page = new AddTeamPage( teamServiceSpy );
    });
 
    it('should create team and show progress indicator while waiting', fakeAsync( () => {
      page.fixture.detectChanges();

      const name = "marvel team";
      const email = "marvel@gmail.com";

      page.changeName( name );
      page.changeEmail( email );
      page.submitButton.nativeElement.click();

      expect( page.submitProgress ).toBeFalsy();
      expect( page.teamService.createTeam ).toHaveBeenCalledWith( { name: name, email: email } );
      expect( page.component.router.navigate ).not.toHaveBeenCalled();

      tick( 800 );
      page.fixture.detectChanges();
      
      expect( page.submitProgress ).toBeTruthy();

      tick( 400 );
      page.fixture.detectChanges();

      expect( page.submitProgress ).toBeFalsy();
      expect( page.component.router.navigate ).toHaveBeenCalledWith( ["/org/teams/edit/100"] );
      page.validateNoteSuccess( "Team created" )

      flush();
    }));
  });

  describe('failure team creation', () => {

    let page: AddTeamPage;
    
    beforeEach(() => {
      const teamServiceSpy = jasmine.createSpyObj('TeamService', [ 'getTeams', 'createTeam']);
      teamServiceSpy.getTeams.and.returnValue( of( [...TeamsTestHelper.teams] ) );
      teamServiceSpy.createTeam.and.returnValue( throwError({ status: 500 }) );
  
      page = new AddTeamPage( teamServiceSpy );
    });
  
   
    it('should not create team', fakeAsync( () => {
      page.fixture.detectChanges();

      expect( page.submitButton.nativeElement.disabled ).toBe( true );

      expect(page.component.form.valid).toBeFalsy();

      page.changeName( "marvel team" );
      page.changeEmail( "marvel@gmail.com" );

      page.submitButton.nativeElement.click();

      expect( page.teamService.createTeam ).toHaveBeenCalledTimes( 1 );
      expect( page.component.router.navigate ).not.toHaveBeenCalled();

      flush();

      page.validateNoteError( ErrorMessages.BAD_CREATE_TEAM )
      
      
    }));
  });

  describe('validation', () => {

    let page: AddTeamPage;
    
    beforeEach(() => {
      const teamServiceSpy = jasmine.createSpyObj('TeamService', [ 'getTeams', 'createTeam']);
      teamServiceSpy.createTeam.and.returnValue( of( { message: "Team created", teamId: 100 } ) );
      teamServiceSpy.getTeams.and.returnValue( of( [...TeamsTestHelper.teams] ) );
  
      page = new AddTeamPage( teamServiceSpy );
    });
 
    it('should show name required validation error', fakeAsync(() => {
      page.fixture.detectChanges();

      expect( page.component.name.hasError('required') ).toBeTruthy();
      expect( page.component.name.valid ).toBeFalsy();
      expect( page.nameValidatorLabel ).toBeFalsy();

      page.changeName( "mega team" );

      expect( page.component.name.hasError('required') ).toBeFalsy();
      expect( page.component.name.valid ).toBeTruthy();
      expect( page.nameValidatorLabel ).toBeFalsy();

      page.changeName( "" );

      expect( page.component.name.hasError('required') ).toBeTruthy();
      expect( page.component.name.valid ).toBeFalsy();
      expect( page.nameValidatorLabel ).toBeTruthy;
      expect( page.nameValidatorLabel.nativeElement.textContent.trim() )
        .toContain( "please enter team name" );

      page.changeName( "mega team #2" );

      expect( page.component.name.hasError('required') ).toBeFalsy();
      expect( page.component.name.valid ).toBeTruthy();
      expect( page.nameValidatorLabel ).toBeFalsy();
    }));

    it('should show name taken validation error', fakeAsync(() => {
      page.fixture.detectChanges();

      page.changeName( "team denis" );

      expect( page.component.name.hasError('invalidTeamNameTaken') ).toBeTruthy();
      expect( page.component.name.valid ).toBeFalsy();
      expect( page.nameValidatorLabel ).toBeTruthy();
      expect( page.nameValidatorLabel.nativeElement.textContent.trim() )
        .toContain( "team name is already in use" );
    }));

    it('should show email structure validation error', fakeAsync(() => {
      page.fixture.detectChanges();

      expect( page.component.email.hasError('email') ).toBeFalsy();
      expect( page.component.email.valid ).toBeTruthy();
      expect( page.emailValidatorLabel ).toBeFalsy();

      page.changeEmail( 'wrong-email' );

      expect( page.component.email.hasError('email') ).toBeTruthy();
      expect( page.component.email.valid ).toBeFalsy();
      expect( page.emailValidatorLabel ).toBeTruthy();
      expect( page.emailValidatorLabel.nativeElement.textContent.trim() )
        .toContain( "email must be a valid email address" );
      
      page.changeEmail( 'correct-email@gmail.com' );

      expect( page.component.email.hasError('email') ).toBeFalsy();
      expect( page.component.email.valid ).toBeTruthy();
      expect( page.emailValidatorLabel ).toBeFalsy();
    }));

    it('should disable submit when name required validation error', fakeAsync(() => {
      page.fixture.detectChanges();

      expect( page.component.name.hasError('required') ).toBeTruthy();
      expect( page.submitButton.nativeElement.disabled ).toBeTruthy();

      page.changeName( "mega team " );

      expect( page.submitButton.nativeElement.disabled ).toBeFalsy();

      page.changeName( "" );

      expect( page.submitButton.nativeElement.disabled ).toBeTruthy();
    }));

    it('should disable submit when email structure validation error', fakeAsync(() => {
      page.fixture.detectChanges();

      expect( page.submitButton.nativeElement.disabled ).toBeTruthy();

      page.changeName( "mega-team" );
      page.changeEmail( "mega-team" );

      expect( page.submitButton.nativeElement.disabled ).toBeTruthy();

      page.changeEmail( "mega-team@gmail.com" );

      expect( page.submitButton.nativeElement.disabled ).toBeFalsy();

      page.changeEmail( "wrong-email" );

      expect( page.submitButton.nativeElement.disabled ).toBeTruthy();
    }));

    it('should disable submit when only email valid', fakeAsync(() => {
      page.fixture.detectChanges();

      expect( page.submitButton.nativeElement.disabled ).toBeTruthy();

      //page.changeName( "mega-team" );
      page.changeEmail( "mega-team" );

      expect( page.submitButton.nativeElement.disabled ).toBeTruthy();

      page.changeEmail( "mega-team@gmail.com" );

      expect( page.submitButton.nativeElement.disabled ).toBeTruthy();

      page.changeEmail( "wrong-email" );

      expect( page.submitButton.nativeElement.disabled ).toBeTruthy();
    }));

  });
} )








