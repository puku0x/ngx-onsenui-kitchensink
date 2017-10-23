import { Component, ViewChild, OnInit } from '@angular/core';
import * as ons from 'onsenui';

@Component({
  selector: 'ons-page[app-progress]',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
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
