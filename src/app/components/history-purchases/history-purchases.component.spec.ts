import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryPurchasesComponent } from './history-purchases.component';

describe('HistoryPurchasesComponent', () => {
  let component: HistoryPurchasesComponent;
  let fixture: ComponentFixture<HistoryPurchasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryPurchasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryPurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
