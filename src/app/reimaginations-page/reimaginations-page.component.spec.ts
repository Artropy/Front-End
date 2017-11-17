import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimaginationsPageComponent } from './reimaginations-page.component';

describe('ReimaginationsPageComponent', () => {
  let component: ReimaginationsPageComponent;
  let fixture: ComponentFixture<ReimaginationsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReimaginationsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReimaginationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
