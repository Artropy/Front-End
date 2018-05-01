import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUploadsComponent } from './dashboard-uploads.component';

describe('DashboardUploadsComponent', () => {
  let component: DashboardUploadsComponent;
  let fixture: ComponentFixture<DashboardUploadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardUploadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardUploadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
