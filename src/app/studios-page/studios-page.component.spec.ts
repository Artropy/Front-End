import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiosPageComponent } from './studios-page.component';

describe('StudiosPageComponent', () => {
  let component: StudiosPageComponent;
  let fixture: ComponentFixture<StudiosPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudiosPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudiosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
