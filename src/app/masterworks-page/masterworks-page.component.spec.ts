import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterworksPageComponent } from './masterworks-page.component';

describe('MasterworksPageComponent', () => {
  let component: MasterworksPageComponent;
  let fixture: ComponentFixture<MasterworksPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterworksPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterworksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
