import {Component, OnInit, OnDestroy} from '@angular/core';
import { Movie } from '../Interfaces/movie.interface';
import { MoviesService } from '../services/movie.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Result } from '../Interfaces/result.inteface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit, OnDestroy {
  public movies : Movie[];
  public yearNow = (new Date()).getFullYear();
  public suscribeMovie: Subscription;
  public notFound = 'Not Result Found';
  public msg: string;

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

  public ngOnInit(): void {}
  
  public getData(): void {
    this.msg = '';
    if (this.form.valid ) {
      this.suscribeMovie = this.movieService.getMovies(this.form.value.year).subscribe( (value:Result) => {
        if ( value.data && value.data.length > 0) {
          this.movies = value.data;
        } else {
          this.msg = this.notFound;
        }
      }, error => {
        this.msg = this.notFound;
        console.log(error);
      });
    }
    
  }

  public ngOnDestroy(): void{
    if ( this.suscribeMovie){
      this.suscribeMovie.unsubscribe();
    }
  }

}


