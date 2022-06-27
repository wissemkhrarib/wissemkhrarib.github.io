import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChaptersListComponent } from './components/chapters/chapters-list/chapters-list.component';
import { HomeComponent } from './components/home/home.component';
import { LessonsListComponent } from './components/lessons/lessons-list/lessons-list.component';
import { LevelsListComponent } from './components/levels/levels-list/levels-list.component';
import { SubjectsListComponent } from './components/subjects/subjects-list/subjects-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'levels/:levelId/subjects/:subjectId/chapters', component: ChaptersListComponent},
  {path: 'levels/:levelId/subjects/:subjectId/chapters/:chapterId/lessons', component: LessonsListComponent},
  {path: 'levels/:levelId/subjects/:subjectId/chapters/:chapterId/lessons/:num', component: LessonsListComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
