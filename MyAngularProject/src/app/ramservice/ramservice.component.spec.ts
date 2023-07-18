import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamserviceComponent } from './ramservice.component';

describe('RamserviceComponent', () => {
  let component: RamserviceComponent;
  let fixture: ComponentFixture<RamserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RamserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RamserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
