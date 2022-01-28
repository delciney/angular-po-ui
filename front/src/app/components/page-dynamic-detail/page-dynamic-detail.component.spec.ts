import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDynamicDetailComponent } from './page-dynamic-detail.component';

describe('PageDynamicDetailComponent', () => {
  let component: PageDynamicDetailComponent;
  let fixture: ComponentFixture<PageDynamicDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDynamicDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDynamicDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
