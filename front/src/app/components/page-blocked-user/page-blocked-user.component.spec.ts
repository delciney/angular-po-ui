import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBlockedUserComponent } from './page-blocked-user.component';

describe('PageBlockedUserComponent', () => {
  let component: PageBlockedUserComponent;
  let fixture: ComponentFixture<PageBlockedUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageBlockedUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBlockedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
