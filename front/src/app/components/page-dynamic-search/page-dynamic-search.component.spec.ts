import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDynamicSearchComponent } from './page-dynamic-search.component';

describe('PageDynamicSearchComponent', () => {
  let component: PageDynamicSearchComponent;
  let fixture: ComponentFixture<PageDynamicSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDynamicSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDynamicSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
