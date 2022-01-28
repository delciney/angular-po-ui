import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDynamicTableComponent } from './page-dynamic-table.component';

describe('PageDynamicTableComponent', () => {
  let component: PageDynamicTableComponent;
  let fixture: ComponentFixture<PageDynamicTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDynamicTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDynamicTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
