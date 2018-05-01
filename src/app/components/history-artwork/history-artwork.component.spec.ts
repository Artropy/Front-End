import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryArtworkComponent } from './history-artwork.component';

describe('HistoryArtworkComponent', () => {
  let component: HistoryArtworkComponent;
  let fixture: ComponentFixture<HistoryArtworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryArtworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryArtworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
