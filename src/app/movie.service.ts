import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Movie } from './model/movie';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

class PagingResult {
  results: Movie[];
}

@Injectable()
export class MovieService {

  movieBaseUrl = 'https://api.themoviedb.org/3/movie/';
  movieListUrl = 'popular';
  movieApiKey = '?api_key=3d35fa81bf87b6faffa97c873af9f6f0';

  constructor(private http: HttpClient) { }

  public getMovieDetails(movieId: number): Observable<Movie> {
    return this.http.get<Movie>(this.movieBaseUrl + movieId + this.movieApiKey);
  }

  getMovies(): Observable<Movie[]> {
    return this.http.get<PagingResult>(this.movieBaseUrl + this.movieListUrl + this.movieApiKey)
    .map(result => result.results)

    // return this.getMovieDetails(24428).map(movie => [movie, movie, movie])
  }
}
