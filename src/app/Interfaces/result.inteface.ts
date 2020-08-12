import { Movie } from './movie.interface';

export interface Result {
    data: Movie[],
    page: Number,
    per_page: Number,
    total: Number,
    total_pages: Number    
}
  
