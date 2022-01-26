import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestSessionFormComponent } from './request-session-form.component';

describe('RequestSessionFormComponent', () => {
  let component: RequestSessionFormComponent;
  let fixture: ComponentFixture<RequestSessionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestSessionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestSessionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
