import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { MovieGenreEnum } from 'src/app/models/enums/movie_genres_enums';
import { SharedService } from 'src/app/modules/shared/services/shared/shared.service';

@Component({
  selector: 'mfx-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  movieGenres: Array<string>
 

  constructor(
    private sharedService: SharedService,
    private eRef: ElementRef
    ) { 
    this.movieGenres = Object.keys(MovieGenreEnum).map(genre => genre);
    this.movieGenres = this.movieGenres.sort();
  }

  ngOnInit(): void {
  }

  filterGenre(genre: string) {
    this.sharedService.genre.next(genre);
  }

  @HostListener('document:click',['$event'])
  close(event?: any) {
    const elementId = new ElementRef(event.target).nativeElement.id
    console.log(elementId)
    if(elementId !== 'menu' && elementId !== 'genre-item')
    this.sharedService.showMenu.next(false);
  }
  
}
