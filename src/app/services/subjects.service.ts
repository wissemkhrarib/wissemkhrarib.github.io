import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Subject } from '../models/level';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor(private httpClient: HttpClient) { }

   getSubjectWithChapters(levelId: string, subjectId: string): Observable<Subject>{
    return this.httpClient.get<Subject>(`${env.BASE_URL}/levels/${levelId}/subjects/${subjectId}/chapters`);
  }
}
