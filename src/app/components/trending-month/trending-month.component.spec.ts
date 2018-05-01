import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingMonthComponent } from './trending-month.component';

describe('TrendingMonthComponent', () => {
  let component: TrendingMonthComponent;
  let fixture: ComponentFixture<TrendingMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendingMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
