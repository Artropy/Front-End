import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenresPageComponent } from './genres-page.component';

describe('GenresPageComponent', () => {
  let component: GenresPageComponent;
  let fixture: ComponentFixture<GenresPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenresPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenresPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
