import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Level } from '../models/level';

@Injectable({
  providedIn: 'root'
})
export class LevelsService {

  constructor(private httpClient: HttpClient) { }

   getLevels(): Observable<Level[]>{
    return  this.httpClient.get<Level[]>(`${env.BASE_URL}/levels`);
  }

   getLevelWithSubjects(id: string): Observable<Level>{
    return this.httpClient.get<Level>(`${env.BASE_URL}/levels/${id}/subjects`);
  }
}
