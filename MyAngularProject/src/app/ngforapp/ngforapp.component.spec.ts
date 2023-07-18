import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforappComponent } from './ngforapp.component';

describe('NgforappComponent', () => {
  let component: NgforappComponent;
  let fixture: ComponentFixture<NgforappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgforappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgforappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
