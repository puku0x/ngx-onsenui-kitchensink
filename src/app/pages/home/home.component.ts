import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ons-page[app-home]',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pages = [
    {
      // component: PullHook,
      label: 'Pull Hook',
      desc: 'Simple "pull to refresh" functionality to update data.'
    },
    {
      // component: Dialogs,
      label: 'Dialogs',
      desc: 'Components and utility methods to display many types of dialogs.'
    },
    {
      // component: Buttons,
      label: 'Buttons',
      desc: 'Different styles for buttons, floating action buttons and speed dials.'
    },
    {
      // component: Carousel,
      label: 'Carousel',
      desc: 'Customizable carousel that can be optionally fullscreen.'
    },
    {
      // component: InfiniteScroll,
      label: 'Infinite Scroll',
      desc: 'Two types of infinite lists: "Load More" and "Lazy Repeat".'
    },
    {
      // component: Progress,
      label: 'Progress',
      desc: 'Linear progress, circular progress and spinners.'
    }
  ];

  constructor() { }

  push() {

  }

  ngOnInit() {
  }

}
