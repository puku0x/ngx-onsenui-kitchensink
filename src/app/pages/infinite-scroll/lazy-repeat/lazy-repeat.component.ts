import { Component, OnInit } from '@angular/core';
import { onsPlatform } from 'ngx-onsenui';

@Component({
  selector: 'ons-page[app-lazy-repeat]',
  templateUrl: './lazy-repeat.component.html',
  styleUrls: ['./lazy-repeat.component.scss']
})
export class LazyRepeatComponent implements OnInit {
  list = [];

  /**
   * Android
   */
  md = onsPlatform.isAndroid();

  /**
   * Constructor
   */
  constructor() { }

  /**
   * Initialize
   */
  ngOnInit() {
    for (let i = 0; i < 3000; i++) {
      this.list.push(i);
    }
  }

}
