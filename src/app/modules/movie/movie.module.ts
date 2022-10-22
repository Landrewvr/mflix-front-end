import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MoviesComponent } from './components/movies/movies.component';
import { HeaderComponent } from './components/header/header.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { MovieCarouselComponent } from './components/movie-carousel/movie-carousel.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { NgbCarouselModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { MovieCardComponent } from './components/movie-card/movie-card.component';


@NgModule({
  declarations: [
    MoviesComponent,
    HeaderComponent,
    SideMenuComponent,
    MovieCarouselComponent,
    MovieDetailsComponent,
    MovieCardComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    NgbCarouselModule,
    NgbModalModule,
    SharedModule
  ]
})
export class MovieModule { }
