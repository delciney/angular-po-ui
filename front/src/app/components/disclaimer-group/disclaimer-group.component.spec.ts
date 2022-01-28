import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisclaimerGroupComponent } from './disclaimer-group.component';

describe('DisclaimerGroupComponent', () => {
  let component: DisclaimerGroupComponent;
  let fixture: ComponentFixture<DisclaimerGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisclaimerGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisclaimerGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
