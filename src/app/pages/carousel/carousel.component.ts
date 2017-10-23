import { Component, ViewChild, OnInit } from '@angular/core';
import * as ons from 'onsenui';

@Component({
  selector: 'ons-page[app-carousel]',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
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
