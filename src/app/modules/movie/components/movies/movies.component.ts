import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { SharedService } from 'src/app/modules/shared/services/shared/shared.service';

@Component({
  selector: 'mfx-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {

  showMenu: boolean = false;
  menuSub!: Subscription;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.menuSub = this.sharedService.showMenu.subscribe(value => this.showMenu = value);
  }

  ngOnDestroy(): void {
    this.menuSub.unsubscribe()
  }



}
