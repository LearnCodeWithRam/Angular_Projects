import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableappComponent } from './tableapp.component';

describe('TableappComponent', () => {
  let component: TableappComponent;
  let fixture: ComponentFixture<TableappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
