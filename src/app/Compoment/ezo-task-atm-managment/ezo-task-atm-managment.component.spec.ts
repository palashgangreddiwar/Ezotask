import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EzoTaskATMManagmentComponent } from './ezo-task-atm-managment.component';

describe('EzoTaskATMManagmentComponent', () => {
  let component: EzoTaskATMManagmentComponent;
  let fixture: ComponentFixture<EzoTaskATMManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EzoTaskATMManagmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EzoTaskATMManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
