import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Movie } from 'src/app/models/movie';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';

@Component({
  selector: 'mfx-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movie!: Movie;

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  loadDetails(movie: Movie) {
    const modalRef = this.modalService.open(MovieDetailsComponent, { size: 'xl' });
    (<MovieDetailsComponent>modalRef.componentInstance).movie = movie;
  }

}
