import { ComponentFixture, TestBed, tick } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { AddTeamComponent } from "src/app/pages/teams/add/add-team";
import { TeamsTestHelper } from "../teams-helper";
import { BaseTestingPage } from "../../utils/base-page";

export class AddTeamPage extends BaseTestingPage{

  fixture: ComponentFixture<AddTeamComponent>;
  component: AddTeamComponent;
  

  get nameTextBox() {
    return this
      .fixture
      .debugElement
      .query(By.css('ed-textbox[formcontrolname="name"] input'));
  }

  get nameValidatorLabel() {
    return this
      .fixture
      .debugElement
      .query(By.css('ed-textbox[formcontrolname="name"] .ed-form__invalid-input'));
  }

  get emailTextBox() {
    return this
      .fixture
      .debugElement
      .query(By.css('ed-textbox[formcontrolname="email"] input'));
  }

  get emailValidatorLabel() {
    return this
      .fixture
      .debugElement
      .query(By.css('ed-textbox[formcontrolname="email"] .ed-form__invalid-input'));
  }

  get submitButton() {
    return this
      .fixture
      .debugElement
      .query(By.css('button[type="submit"]'));
  }

  get submitProgress(){
    return this
      .fixture
      .debugElement
      .query(By.css(`ed-progress`))
  }

  constructor( public teamService : any ) {
    super();

    TeamsTestHelper.configureTestingModule( teamService );

    this.fixture = TestBed.createComponent(AddTeamComponent);
    this.component = this.fixture.componentInstance; 

    super.injectNotes();
   }

  changeName( name: string ){
    this.nameTextBox.nativeElement.value = name;
    this.nameTextBox.nativeElement.dispatchEvent(new Event('input'));
    this.fixture.detectChanges();
    // 'check team name taken' validator takes 200ms to start
    tick(300);
    this.fixture.detectChanges();
  }

  changeEmail( email: string ){
    this.emailTextBox.nativeElement.value = email;
    this.emailTextBox.nativeElement.dispatchEvent(new Event('input'));
    this.fixture.detectChanges();
  }
}