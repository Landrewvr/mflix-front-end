import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SharedService } from 'src/app/modules/shared/services/shared/shared.service';

@Component({
  selector: 'mfx-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = 'mflix';
  author: string = 'Luis Veras';
  hiddenMenu: boolean = false;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
  }

  showMenu() {
    this.sharedService.showMenu.next(!this.hiddenMenu);
  }

}
