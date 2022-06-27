import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonVideoContainerComponent } from './lesson-video-container.component';

describe('LessonVideoContainerComponent', () => {
  let component: LessonVideoContainerComponent;
  let fixture: ComponentFixture<LessonVideoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonVideoContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonVideoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
