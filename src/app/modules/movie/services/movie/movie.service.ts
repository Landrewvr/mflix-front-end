import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Respond } from 'src/app/models/respond';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  baseApiRoute: string = environment.API_URL;
  
  constructor(private http: HttpClient) { 
    this.baseApiRoute += '/';
  }

  getAllMovies(): Observable<Respond> {
    return this.http.get<Respond>(this.baseApiRoute);
  }

  getMoviesByGenre(genre: string): Observable<Respond> {
    return this.http.get<Respond>(this.baseApiRoute + genre);
  }

}
