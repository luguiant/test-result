import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Result } from '../Interfaces/result.inteface';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {

  public constructor(private http: HttpClient){}

  public getMovies(year: number): Observable<Result | HttpErrorResponse > {
    return this.http.get<Result | HttpErrorResponse >(`https://jsonmock.hackerrank.com/api/movies?Year=${year}`);
  } 
}
