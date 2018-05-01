import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryCommentsComponent } from './history-comments.component';

describe('HistoryCommentsComponent', () => {
  let component: HistoryCommentsComponent;
  let fixture: ComponentFixture<HistoryCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
