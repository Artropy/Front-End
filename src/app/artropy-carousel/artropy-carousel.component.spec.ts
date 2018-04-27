import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtropyCarouselComponent } from './artropy-carousel.component';

describe('ArtropyCarouselComponent', () => {
  let component: ArtropyCarouselComponent;
  let fixture: ComponentFixture<ArtropyCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtropyCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtropyCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
