import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageJobSchedulerComponent } from './page-job-scheduler.component';

describe('PageJobSchedulerComponent', () => {
  let component: PageJobSchedulerComponent;
  let fixture: ComponentFixture<PageJobSchedulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageJobSchedulerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageJobSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
