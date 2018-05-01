import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedFollowingPageComponent } from './feed-following-page.component';

describe('FeedFollowingPageComponent', () => {
  let component: FeedFollowingPageComponent;
  let fixture: ComponentFixture<FeedFollowingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedFollowingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedFollowingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
