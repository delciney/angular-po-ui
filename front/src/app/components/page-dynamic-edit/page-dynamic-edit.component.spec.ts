import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDynamicEditComponent } from './page-dynamic-edit.component';

describe('PageDynamicEditComponent', () => {
  let component: PageDynamicEditComponent;
  let fixture: ComponentFixture<PageDynamicEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDynamicEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDynamicEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
