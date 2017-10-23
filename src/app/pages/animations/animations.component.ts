import { Component } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';

import { TransitionComponent } from '../transition/transition.component';

@Component({
  selector: 'ons-page[app-animations]',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss']
})
export class AnimationsComponent {
  /**
   * Animation options
   */
  animations = ['none', 'default', 'slide-ios', 'slide-md', 'lift-ios', 'lift-md', 'fade-ios', 'fade-md'];

  /**
   * Constructor
   * @param navi
   */
  constructor(private navi: OnsNavigator) { }

  /**
   * Go to next page
   * @param animation
   */
  transition(animation) {
    this.navi.nativeElement.pushPage(TransitionComponent, { animation, data: animation });
  }

}
