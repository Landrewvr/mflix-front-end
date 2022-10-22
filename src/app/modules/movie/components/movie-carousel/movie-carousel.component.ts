import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap/carousel/carousel';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { SharedService } from 'src/app/modules/shared/services/shared/shared.service';
import { MovieService } from '../../services/movie/movie.service';
@Component({
  selector: 'mfx-movie-carousel',
  templateUrl: './movie-carousel.component.html',
  styleUrls: ['./movie-carousel.component.scss']
})
export class MovieCarouselComponent implements OnInit, OnDestroy {

  moviesGroups!: Array<Movie[]>;
  genreSub!: Subscription;

  @ViewChild('carousel', { static: true })  carousel!: NgbCarousel

  constructor(
    private movieService: MovieService,
    private sharedService: SharedService) { }

  ngOnInit(): void {
    this.getMovies();
    this.genreSub = this.sharedService.genre.subscribe(genre => {
      this.getMoviesByGenre(genre);
    })
  }

  getMovies() {
    this.movieService.getAllMovies().subscribe(res => {
      if(res) {
        this.pagesNumber(res.data, res.count);
      }
      else
        throw 'No data found';
    });
  }

  getMoviesByGenre(genre: string) {
    this.movieService.getMoviesByGenre(genre).subscribe(res => {
      if(res) {
        this.pagesNumber(res.data, res.count);
      }
      else
        throw 'No data found';
    });
  }

  pagesNumber(movies: Movie[],count: number) {
    const pagesNumber = Math.ceil(count/6);
    const result=[];
    for(let i = 0 ; i < pagesNumber; i++) {
      const moviesCopy = [...movies];
      result.push(moviesCopy.splice(i * 6,6));
    }

    this.moviesGroups = result;
    if(this.carousel)
    this.carousel.pause();
    
  }

  ngOnDestroy(): void {
    this.genreSub.unsubscribe();
  }
}
