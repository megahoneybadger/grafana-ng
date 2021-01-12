import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { TeamsComponent } from "src/app/pages/teams/teams";
import { Notes } from "uilib";
import { GridHelper } from "../../utils/grid-validator";
import { RouterLinkDirectiveStub } from "../../utils/router-link-stub";
import { TeamsTestHelper } from "../teams-helper";

export class TeamsComponentPage {

  fixture: ComponentFixture<TeamsComponent>;
  component: TeamsComponent;

  get addButton(){
    const actionBar = this
      .fixture
      .debugElement
      .query( By.css('.page-action-bar'));

    return actionBar?.query( By.directive( RouterLinkDirectiveStub ) );
  }

  get addButtonLink() {
    return this.addButton.injector.get(RouterLinkDirectiveStub);
  }

  get filterBox() {
    return this
      .fixture
      .debugElement
      .query(By.css('ed-filterbox input'));;
  }

  get grid(){
    return this
      .fixture
      .debugElement
      .query(By.css(`ed-grid`))
  }

  get emptyList(){
    return this
      .fixture
      .debugElement
      .query(By.css(`ed-empty-list`))
  }

  get loadOrError(){
    return this
      .fixture
      .debugElement
      .query(By.css(`load-or-error`))
  }

  get loadOrErrorProgress(){
    return this
      .loadOrError
      .query(By.css(`ed-progress i.fa-spinner`))
  }

  getGridDeleteButton( index: number ){
    return this
      .fixture
      .debugElement
      .query(By.css(`ed-grid tbody tr:nth-child(${index + 1}) ed-grid-delete-column`))
      
  }

  constructor( public teamService : any ) {
    TeamsTestHelper.configureTestingModule( teamService );

    this.fixture = TestBed.createComponent(TeamsComponent);
    this.component = this.fixture.componentInstance; 

    const n = TestBed.inject( Notes );
  }

  clickAddButton(){
    this.addButton.triggerEventHandler( 'click', null );
    this.fixture.detectChanges();
  }

  changeFilter( filter: string ){
    this.filterBox.nativeElement.value = filter;
    this.filterBox.nativeElement.dispatchEvent(new Event('input'));
    this.fixture.detectChanges();
  }

  clickDeleteBlock( index: number ){
    GridHelper.openDeleteBlock( this.grid, index );
    this.fixture.detectChanges();
  }

  clickCancelDelete( index: number ){
    GridHelper.cancelDelete( this.grid, index );
    this.fixture.detectChanges();
  }

  clickConfirmDelete( index: number ){
    GridHelper.confirmDelete( this.grid, index );
    this.fixture.detectChanges();
  }
}