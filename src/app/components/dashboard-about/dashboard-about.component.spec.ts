import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAboutComponent } from './dashboard-about.component';

describe('DashboardAboutComponent', () => {
  let component: DashboardAboutComponent;
  let fixture: ComponentFixture<DashboardAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
