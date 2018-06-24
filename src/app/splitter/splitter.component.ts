import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { onsPlatform } from 'ngx-onsenui';

import { AppService } from '../services/app.service';
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
  md = onsPlatform.isAndroid();

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
