import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMonetizationComponent } from './dashboard-monetization.component';

describe('DashboardMonetizationComponent', () => {
  let component: DashboardMonetizationComponent;
  let fixture: ComponentFixture<DashboardMonetizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardMonetizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardMonetizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
