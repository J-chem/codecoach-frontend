import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyBecomeACoachComponent } from './apply-become-a-coach.component';

describe('ApplyBecomeACoachComponent', () => {
  let component: ApplyBecomeACoachComponent;
  let fixture: ComponentFixture<ApplyBecomeACoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyBecomeACoachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyBecomeACoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
