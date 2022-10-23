import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieResponse } from 'src/app/models/movie-response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  baseApiRoute: string = environment.API_URL;
  
  constructor(private http: HttpClient) { 
  }

  getAllMovies(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(this.baseApiRoute);
  }

  getMoviesByGenre(genre: string): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(this.baseApiRoute + genre);
  }

}
