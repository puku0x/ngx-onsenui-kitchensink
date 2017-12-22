import { Component, ElementRef, OnInit } from '@angular/core';
import { onsPlatform } from 'ngx-onsenui';

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
  md = onsPlatform.isAndroid();

  /**
   * Constructor
   */
  constructor(private element: ElementRef) { }

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

}
