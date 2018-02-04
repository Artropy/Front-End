import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetCommentsComponent } from './asset-comments.component';

describe('AssetCommentsComponent', () => {
  let component: AssetCommentsComponent;
  let fixture: ComponentFixture<AssetCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
