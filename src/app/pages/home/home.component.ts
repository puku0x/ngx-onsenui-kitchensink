import { Component } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';

import { PullhookComponent } from '../pullhook/pullhook.component';
import { DialogsComponent } from '../dialogs/dialogs.component';
import { ButtonsComponent } from '../buttons/buttons.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { InfiniteScrollComponent } from '../infinite-scroll/infinite-scroll.component';
import { ProgressComponent } from '../progress/progress.component';

@Component({
  selector: 'ons-page[app-home]',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  /**
   * Pages
   */
  pages = [
    {
      component: PullhookComponent,
      label: 'Pull Hook',
      desc: 'Simple "pull to refresh" functionality to update data.'
    },
    {
      component: DialogsComponent,
      label: 'Dialogs',
      desc: 'Components and utility methods to display many types of dialogs.'
    },
    {
      component: ButtonsComponent,
      label: 'Buttons',
      desc: 'Different styles for buttons, floating action buttons and speed dials.'
    },
    {
      component: CarouselComponent,
      label: 'Carousel',
      desc: 'Customizable carousel that can be optionally fullscreen.'
    },
    {
      component: InfiniteScrollComponent,
      label: 'Infinite Scroll',
      desc: 'Two types of infinite lists: "Load More" and "Lazy Repeat".'
    },
    {
      component: ProgressComponent,
      label: 'Progress',
      desc: 'Linear progress, circular progress and spinners.'
    }
  ];

  /**
   * Constructor
   * @param navi
   */
  constructor(private navi: OnsNavigator) { }

  /**
   * Go to page
   * @param page
   */
  push(page) {
    this.navi.nativeElement.pushPage(page.component);
  }

}
