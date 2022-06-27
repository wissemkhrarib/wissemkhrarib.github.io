import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { LessonsPageData } from '../models/level';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {

  constructor(private httpClient: HttpClient) { }

  getLessons(url: string): Observable<LessonsPageData>{
    return this.httpClient.get<LessonsPageData>(url);
  }
}
