import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardStudiosComponent } from './dashboard-studios.component';

describe('DashboardStudiosComponent', () => {
  let component: DashboardStudiosComponent;
  let fixture: ComponentFixture<DashboardStudiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardStudiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardStudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
