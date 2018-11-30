import { Injectable } from '@angular/core';
import { MovieInterface } from './interface/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class LatestVideoService {

  fetchMovies(): Promise<Array<MovieInterface>> {
    return window.fetch('/assets/db.json')
      .then(response => response.json());
  }

  async fetchMovieById(movieId) {
    const response = await window.fetch('/assets/db.json');
    const movies = await response.json();
    return movies.find((movie) => {
      return movie.id === movieId;
    });

  }
}
