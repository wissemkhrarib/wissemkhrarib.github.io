import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Chapter, Lesson } from 'src/app/models/level';
import { ChaptersService } from 'src/app/services/chapters.service';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.scss']
})
export class LessonsListComponent implements OnInit {

  chapter!: Chapter;
  currentLesson!: Lesson;
  video!: string;
  levelId!: string;
  subjectId!: string;
  chapterId!: string;
  currentLessonIndex!: number;
  routeSub!: Subscription;
  constructor(private activatedRoute: ActivatedRoute,private router: Router, private chapterService: ChaptersService) { }

  async ngOnInit(): Promise<void> {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.levelId = params['levelId'];
      this.subjectId = params['subjectId'];
      this.chapterId = params['chapterId'];
      this.currentLessonIndex = params['num'];
    });
    setTimeout(() => {
      this.chapterService.getChapterWithLessons(this.levelId, this.subjectId, this.chapterId).subscribe((chapter: Chapter) => {
        this.chapter = chapter;
        if(!this.currentLessonIndex){
          this.currentLessonIndex = 0;
        }
        this.currentLesson = this.chapter.lessons[this.currentLessonIndex];
        this.video = this.currentLesson.video;
      })
    }, 2000)

  }


  changeCurrentLesson(index: number): void {
    this.currentLesson = this.chapter.lessons[index];
    this.router.navigate(['levels', this.levelId, 'subjects', this.subjectId, 'chapters', this.chapterId, 'lessons', index])  }
}
