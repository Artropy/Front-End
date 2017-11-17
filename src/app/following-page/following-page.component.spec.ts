import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowingPageComponent } from './following-page.component';

describe('FollowingPageComponent', () => {
  let component: FollowingPageComponent;
  let fixture: ComponentFixture<FollowingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
