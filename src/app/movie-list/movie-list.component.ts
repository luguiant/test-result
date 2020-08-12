import {Component, OnInit} from '@angular/core';
import { Movie } from '../Interfaces/movie.interface';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  public movies : Movie[];

  constructor(){

  }

  public ngOnInit() {
  }

}


