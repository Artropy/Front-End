import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsersPageComponent } from './sponsers-page.component';

describe('SponsersPageComponent', () => {
  let component: SponsersPageComponent;
  let fixture: ComponentFixture<SponsersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
