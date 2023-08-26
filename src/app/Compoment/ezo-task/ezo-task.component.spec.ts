import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EzoTaskComponent } from './ezo-task.component';

describe('EzoTaskComponent', () => {
  let component: EzoTaskComponent;
  let fixture: ComponentFixture<EzoTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EzoTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EzoTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
