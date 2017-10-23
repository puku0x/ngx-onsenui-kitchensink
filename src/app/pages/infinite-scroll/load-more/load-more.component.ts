import { Component, ElementRef, OnInit } from '@angular/core';
import * as ons from 'onsenui';

@Component({
  selector: 'ons-page[app-load-more]',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.scss']
})
export class LoadMoreComponent implements OnInit {
  list = [];

  /**
   * Android
   */
  md = ons.platform.isAndroid();

  /**
   * Constructor
   */
  constructor(private element: ElementRef) { }


  /**
   * Callback for infinite scroll
   * @param done
   */
  loadMore(done) {
    setTimeout(() => {
      for (let i = 0; i < 10; i++) {
        this.list.push(this.list.length + i);
      }
      done();
    }, 600);
  }

  /**
   * Initialize
   */
  ngOnInit() {
    for (let i = 0; i < 30; i++) {
      this.list.push(i);
    }

    // Infinite scroll
    this.element.nativeElement.onInfiniteScroll = (done) => {
      this.loadMore(done);
    };
  }
}
