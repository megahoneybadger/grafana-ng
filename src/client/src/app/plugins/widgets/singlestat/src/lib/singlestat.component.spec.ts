import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglestatComponent } from './singlestat.component';

describe('SinglestatComponent', () => {
  let component: SinglestatComponent;
  let fixture: ComponentFixture<SinglestatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglestatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglestatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
