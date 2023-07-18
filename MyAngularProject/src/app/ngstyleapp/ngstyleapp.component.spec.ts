import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgstyleappComponent } from './ngstyleapp.component';

describe('NgstyleappComponent', () => {
  let component: NgstyleappComponent;
  let fixture: ComponentFixture<NgstyleappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgstyleappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgstyleappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
