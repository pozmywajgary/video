import { Component, OnInit } from '@angular/core';
import { LatestVideoService } from '../latest-video.service';
import { MovieInterface } from '../interface/movie.interface';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-page-video',
  templateUrl: './page-video.component.html',
  styleUrls: ['./page-video.component.css'],
  providers: [
    LatestVideoService
  ]
})
export class PageVideoComponent implements OnInit {

  movie = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    public latestVideoService: LatestVideoService
  ) {}

  ngOnInit() {

    this.activatedRoute.params.subscribe((params: Params) => {

      const movieId = params['id'];

      this.latestVideoService.fetchMovieById(movieId)
        .then((movie: MovieInterface) => {
          this.movie = movie;
        });
    });
  }
}
