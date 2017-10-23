import { Component, ViewChild, OnInit } from '@angular/core';
import * as ons from 'onsenui';

@Component({
  selector: 'ons-page[app-infinite-scroll]',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.scss']
})
export class InfiniteScrollComponent implements OnInit {
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
