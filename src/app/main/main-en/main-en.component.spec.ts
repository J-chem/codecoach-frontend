import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainEnComponent } from './main-en.component';

describe('MainEnComponent', () => {
  let component: MainEnComponent;
  let fixture: ComponentFixture<MainEnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainEnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
