import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'mfx-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movie: Movie = new Movie();

  constructor(
    private modalRef: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

  close() {
    this.modalRef.close()
  }

}
