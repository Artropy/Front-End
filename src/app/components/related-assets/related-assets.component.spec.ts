import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedAssetsComponent } from './related-assets.component';

describe('RelatedAssetsComponent', () => {
  let component: RelatedAssetsComponent;
  let fixture: ComponentFixture<RelatedAssetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedAssetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
