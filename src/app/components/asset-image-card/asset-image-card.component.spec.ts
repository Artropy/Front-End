import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetImageCardComponent } from './asset-image-card.component';

describe('AssetImageCardComponent', () => {
  let component: AssetImageCardComponent;
  let fixture: ComponentFixture<AssetImageCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetImageCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetImageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
