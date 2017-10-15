import { Component, OnInit } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';

import { TransitionComponent } from '../transition/transition.component';

@Component({
  selector: 'ons-page[app-animations]',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss']
})
export class AnimationsComponent implements OnInit {
  animations = ['none', 'default', 'slide-ios', 'slide-md', 'lift-ios', 'lift-md', 'fade-ios', 'fade-md'];

  constructor(private navi: OnsNavigator) { }

  transition(animation) {

    this.navi.nativeElement.pushPage(TransitionComponent, { animation, data: animation });
  }

  ngOnInit() {
  }

}
