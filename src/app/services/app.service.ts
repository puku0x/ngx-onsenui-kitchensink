import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  menu = new Subject<boolean>();
  tabIndex = new Subject<number>();

  constructor() { }

  get menu$() {
    return this.menu.asObservable();
  }

  toggleMenu(isOpen?: boolean) {
    this.menu.next(isOpen);
  }

  get tabIndex$() {
    return this.tabIndex.asObservable();
  }

  setTabIndex(index: number) {
    this.tabIndex.next(index);
  }

}
