import { Component } from '@angular/core';
import * as ons from 'onsenui';

@Component({
  selector: 'ons-page[app-buttons]',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {
  shareItems = [
    { name: 'Twitter', icon: 'md-twitter' },
    { name: 'Facebook', icon: 'md-facebook' },
    { name: 'Google+', icon: 'md-google-plus' },
  ];

  /**
   * Constructor
   */
  constructor() { }

  /**
   * Confirm dialog
   */
  confirm(name: string) {
    ons.notification.confirm(`Share on ${name}?`);
  }

}
