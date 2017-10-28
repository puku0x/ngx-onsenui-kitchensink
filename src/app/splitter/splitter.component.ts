import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { takeUntil } from 'rxjs/operators';
import * as ons from 'onsenui';

import { AppService } from '../core/services/app.service';
import { SideComponent } from './side/side.component';
import { TabbarComponent } from '../tabbar/tabbar.component';

@Component({
  selector: 'ons-page[app-splitter]',
  templateUrl: './splitter.component.html',
  styleUrls: ['./splitter.component.scss']
})
export class SplitterComponent implements OnInit, OnDestroy {
  onDestroy = new Subject();
  menu$: Observable<boolean>;
  side = SideComponent;
  content = TabbarComponent;

  /**
   * Android
   */
  md = ons.platform.isAndroid();

  /**
   * Splitter
   */
  @ViewChild('splitter') splitter;

  /**
   * Constructor
   * @param appService
   */
  constructor(private appService: AppService) { }

  /**
   * Initialize
   */
  ngOnInit() {
    this.appService.menu$
      .pipe(takeUntil(this.onDestroy))
      .subscribe(menu => {
        this.splitter.nativeElement.side.toggle();
      });
  }

  /**
   * Finalize
   */
  ngOnDestroy() {
    this.onDestroy.next();
  }

}
