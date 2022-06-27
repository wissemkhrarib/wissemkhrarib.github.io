import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { Subscription } from 'rxjs';
import { Chapter, Lesson, LessonsPageData, Level, Subject } from 'src/app/models/level';
import { LessonsService } from 'src/app/services/lessons.service';
import { LevelsService } from 'src/app/services/levels.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  options: AnimationOptions = {
    path: '/assets/animations/lottie-animation.json',
  };

  subjects!: Subject[];
  chapter_ondes!: Chapter;
  chapter_dosage!: Chapter;
  levelSub!: Subscription;
  LessonsPageData!: LessonsPageData;
  constructor(private router: Router, private levelsService: LevelsService, private lessonsService: LessonsService) {

  }
  ngOnDestroy(): void {
    if (this.levelSub) {
      this.levelSub.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.levelSub = this.levelsService.getLevelWithSubjects('1').subscribe((level: Level) => {
      this.subjects = level.subjects
    });
    this.lessonsService.getLessons('https://wisslearn-courses-service.herokuapp.com/api/lessons/').subscribe((pageData: LessonsPageData)=>{
      this.LessonsPageData = pageData;
      console.log(pageData);
    })

  };

  fetchNext(url: string){
    this.lessonsService.getLessons(url).subscribe((pageData: LessonsPageData)=>{
      this.LessonsPageData = pageData;
      console.log(pageData);
    })
  }
  fetchPrevious(url: string){
    this.lessonsService.getLessons(url).subscribe((pageData: LessonsPageData)=>{
      this.LessonsPageData = pageData;
      console.log(pageData);
    })
  }

  



}
