import {Component, OnInit} from '@angular/core';
import { Movie } from '../Interfaces/movie.interface';
import { MoviesService } from '../services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  providers: [MoviesService]
})
export class MovieListComponent implements OnInit {
  public movies : Movie[];

  constructor(
    private readonly movieService: MoviesService
  ){

  }

  public ngOnInit() {
    this.movieService.getMovies(2015).subscribe(value => {
      console.log(value);
    }, error => {
      console.log(error);
    });
  }

}


