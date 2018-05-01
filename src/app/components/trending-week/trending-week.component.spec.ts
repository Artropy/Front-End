import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingWeekComponent } from './trending-week.component';

describe('TrendingWeekComponent', () => {
  let component: TrendingWeekComponent;
  let fixture: ComponentFixture<TrendingWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendingWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
