import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginalsPageComponent } from './originals-page.component';

describe('OriginalsPageComponent', () => {
  let component: OriginalsPageComponent;
  let fixture: ComponentFixture<OriginalsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OriginalsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OriginalsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
