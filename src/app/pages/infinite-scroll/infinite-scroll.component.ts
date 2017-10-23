import { Component, ViewChild, OnInit } from '@angular/core';
import * as ons from 'onsenui';

import { LoadMoreComponent } from './load-more/load-more.component';
import { LazyRepeatComponent } from './lazy-repeat/lazy-repeat.component';

@Component({
  selector: 'ons-page[app-infinite-scroll]',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.scss']
})
export class InfiniteScrollComponent implements OnInit {
  tab1 = LoadMoreComponent;
  tab2 = LazyRepeatComponent;

  /**
   * Android
   */
  md = ons.platform.isAndroid();

  /**
   * Constructor
   */
  constructor() { }

  /**
   * Initialize
   */
  ngOnInit() {
  }

}
