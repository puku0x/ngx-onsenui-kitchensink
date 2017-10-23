import { Component, ViewChild, OnInit } from '@angular/core';
import * as ons from 'onsenui';

@Component({
  selector: 'ons-page[app-dialogs]',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.scss']
})
export class DialogsComponent implements OnInit {
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
