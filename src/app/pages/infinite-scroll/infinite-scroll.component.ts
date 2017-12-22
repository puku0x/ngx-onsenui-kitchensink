import { Component, ViewChild } from '@angular/core';
import { onsPlatform } from 'ngx-onsenui';

import { LoadMoreComponent } from './load-more/load-more.component';
import { LazyRepeatComponent } from './lazy-repeat/lazy-repeat.component';

@Component({
  selector: 'ons-page[app-infinite-scroll]',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.scss']
})
export class InfiniteScrollComponent {
  tab1 = LoadMoreComponent;
  tab2 = LazyRepeatComponent;

  /**
   * Android
   */
  md = onsPlatform.isAndroid();

  /**
   * Constructor
   */
  constructor() { }

}
