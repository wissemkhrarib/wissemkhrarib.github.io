import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Chapter } from '../models/level';

@Injectable({
  providedIn: 'root'
})
export class ChaptersService {

  constructor(private httpClient: HttpClient) { }

  getChapterWithLessons(levelId: string, subjectId: string, chapterId: string): Observable<Chapter>{
    return this.httpClient.get<Chapter>(`${env.BASE_URL}/levels/${levelId}/subjects/${subjectId}/chapters/${chapterId}/lessons`);
  }
}
