import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MovieListComponent} from './movie-list/movie-list.component';
import {RouterModule} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MoviesService} from '../app/services/movie.service';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterTestingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: MovieListComponent}
    ])
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
