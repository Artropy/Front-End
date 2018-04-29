import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowedPageComponent } from './followed-page.component';

describe('FollowedPageComponent', () => {
  let component: FollowedPageComponent;
  let fixture: ComponentFixture<FollowedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
