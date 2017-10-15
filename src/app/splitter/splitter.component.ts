import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
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
  md = ons.platform.isAndroid();
  menu$: Observable<boolean>;
  subscrption: Subscription;
  side = SideComponent;
  content = TabbarComponent;
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
    this.subscrption = this.appService.menu$.subscribe(menu => {
      this.splitter.nativeElement.side.toggle();
    });
  }

  /**
   * Finalize
   */
  ngOnDestroy() {
    this.subscrption.unsubscribe();
  }

}
