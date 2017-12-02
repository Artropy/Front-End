import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Http404PageComponent } from './http404-page.component';

describe('Http404PageComponent', () => {
  let component: Http404PageComponent;
  let fixture: ComponentFixture<Http404PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Http404PageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Http404PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
