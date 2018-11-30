import { Injectable } from '@angular/core';
import { MovieInterface } from './interface/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class LatestVideoService {

  fetchMovies(): Promise<Array<MovieInterface>> {
    const movies = [
      {
        title: "Wielki błękit (1988)",
        year: 1988,
        description: "Jacques i jego przyjaciel z dzieciństwa Enzo rywalizują o mistrzostwo w nurkowaniu bez butli. Obaj chcą pobić kolejny rekord.",
        duration: 132,
        rate: 7
      },
      {
        title: "Lucy",
        year: 2014,
        description: "Podczas przemytu narkotyków w swoim organizmie Lucy przypadkowo zyskuje nadprzyrodzone zdolności",
        duration: 90,
        rate: 6
      }
    ];

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(movies);
      }, 500);
    });
  }
}
