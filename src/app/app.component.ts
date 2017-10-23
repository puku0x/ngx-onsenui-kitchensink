import { Component } from '@angular/core';
import * as ons from 'onsenui';

import { SplitterComponent } from './splitter/splitter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  root = SplitterComponent;
  shutUp = ons.platform.isAndroid();

  onPostpush(event) {
    !this.shutUp && ons.notification.toast({
      message: 'Try swipe-to-pop from left side!',
      buttonLabel: 'Shut up!',
      timeout: 2000
    }).then(i => this.shutUp = i === 0);
  }
}
