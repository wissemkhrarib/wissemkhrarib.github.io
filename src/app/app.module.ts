import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { HeaderComponent } from './components/header/header.component';
import { LevelsListComponent } from './components/levels/levels-list/levels-list.component';
import { LevelItemComponent } from './components/levels/level-item/level-item.component';
import { LessonsListComponent } from './components/lessons/lessons-list/lessons-list.component';
import { SubjectsListComponent } from './components/subjects/subjects-list/subjects-list.component';
import { SubjectItemComponent } from './components/subjects/subject-item/subject-item.component';
import { ChaptersListComponent } from './components/chapters/chapters-list/chapters-list.component';
import { ChapterItemComponent } from './components/chapters/chapter-item/chapter-item.component';
import { LessonVideoContainerComponent } from './components/lessons/lesson-video-container/lesson-video-container.component';
import { HomeComponent } from './components/home/home.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { LoadingAnimationComponent } from './components/loading-animation/loading-animation.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';

// Note we need a separate function as it's required
// by the AOT compiler.
export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LevelsListComponent,
    LevelItemComponent,
    LessonsListComponent,
    SubjectsListComponent,
    SubjectItemComponent,
    ChaptersListComponent,
    ChapterItemComponent,
    LessonVideoContainerComponent,
    HomeComponent,
    LoadingAnimationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,    
    LottieModule.forRoot({ player: playerFactory }), PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
