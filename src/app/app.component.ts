import { Component, OnInit } from '@angular/core';
import { onsPlatform, onsNotification } from 'ngx-onsenui';

import { SplitterComponent } from './splitter/splitter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  root = SplitterComponent;
  shutUp = onsPlatform.isAndroid();

  ngOnInit() {
    const html = document.documentElement;
    if (onsPlatform.isIPhoneX()) {
      html.setAttribute('onsflag-iphonex-portrait', '');
      html.setAttribute('onsflag-iphonex-landscape', '');
    }
  }

  /**
   * Callback for postpush
   * @param event
   */
  onPostpush(event) {
    if (!this.shutUp) {
      onsNotification.toast({
        message: 'Try swipe-to-pop from left side!',
        buttonLabel: 'Shut up!',
        timeout: 2000
      }).then(i => this.shutUp = i === 0);
    }
  }
}
