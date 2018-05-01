import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryDonationsComponent } from './history-donations.component';

describe('HistoryDonationsComponent', () => {
  let component: HistoryDonationsComponent;
  let fixture: ComponentFixture<HistoryDonationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryDonationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryDonationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
