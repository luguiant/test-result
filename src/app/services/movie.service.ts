import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Movie } from '../Interfaces/movie.interface';

@Injectable()
export class MoviesService {

  public constructor(private http: HttpClient){}

  public getMovies(year: number): Observable<HttpResponse<Movie[] | HttpErrorResponse >> {
    return this.http.get<HttpResponse<Movie[] | HttpErrorResponse >>(`https://jsonmock.hackerrank.com/api/movies?Year=${year}`);
  } 
}
