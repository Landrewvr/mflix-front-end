import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  showMenu = new Subject<boolean>();
  genre = new Subject<string>();

  constructor() { }
}
