import {Component, OnInit} from '@angular/core';
import { Movie } from '../Interfaces/movie.interface';
import { MoviesService } from '../services/movie.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Result } from '../Interfaces/result.inteface';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  public movies : Movie[];
  public yearNow = (new Date()).getFullYear();

  public form = new FormGroup({
    year: new FormControl('', [
      Validators.required, 
      Validators.max(+this.yearNow),
      Validators.pattern(/^-?(0|[1-9]\d*)?$/)])
  });

  constructor(
    private readonly movieService: MoviesService
  ){

  }

  public ngOnInit(): void {
  }
  
  public getData(): void {
    this.movieService.getMovies(2015).subscribe( (value:Result) => {
      if ( value.data && value.data.length > 0) {
        this.movies = value.data;
      }
    }, error => {
      
    });
  }

}


