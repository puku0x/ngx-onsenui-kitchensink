import { Component, ElementRef, NgZone, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators';
import * as ons from 'onsenui';

import { AppService } from '../core/services/app.service';
import { CameraComponent } from '../pages/camera/camera.component';
import { HomeComponent } from '../pages/home/home.component';
import { FormsComponent } from '../pages/forms/forms.component';
import { AnimationsComponent } from '../pages/animations/animations.component';

// Just a linear interpolation formula
const lerp = (x0, x1, t) => parseInt(`${(1 - t) * x0 + t * x1}`, 10);

// RGB colors
const red = [244, 67, 54];
const blue = [30, 136, 229];
const purple = [103, 58, 183];

@Component({
  selector: 'ons-page[app-tabbar]',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.scss']
})
export class TabbarComponent implements OnInit, OnDestroy {
  onDestroy = new Subject();

  /**
   * Android
   */
  md = ons.platform.isAndroid();

  swipeTheme: string;
  shutUp = !this.md;
  showingTip = false;
  colors = red;
  animationOptions = {};
  topPosition = 0;
  tabs = [
    {
      label: 'Camera',
      icon: 'md-camera',
      page: CameraComponent,
      theme: red,
      style: 'max-width: 50px; top: -5px;',
      top: -105
    },
    {
      label: 'Home',
      icon: this.md ? null : 'ion-home',
      page: HomeComponent,
      theme: red,
      top: null
    },
    {
      label: 'Forms',
      icon: this.md ? null : 'ion-edit',
      page: FormsComponent,
      theme: blue,
      top: null
    },
    {
      label: 'Anim',
      icon: this.md ? null : 'ion-film-marker',
      page: AnimationsComponent,
      theme: purple,
      top: null
    }
  ];
  title = this.md ? 'Onsen UI' : this.tabs[1].label;

  /**
   * Tabbat
   */
  @ViewChild('tabbar') tabbar;

  /**
   * Constructor
   */
  constructor(
    private element: ElementRef,
    private zone: NgZone,
    private appService: AppService,
  ) { }

  /**
   * Toggle menu
   */
  toggleMenu() {
    this.appService.toggleMenu();
  }

  /**
   * Callback for prechange
   * @param event
   */
  onPrechange(event) {
    this.zone.run(() => {
      const index = event.activeIndex;
      this.title = this.md ? 'Onsen UI' : this.tabs[index].label;
    });
  }

  /**
   * Callback for swipe
   * @param index
   * @param options
   */
  onSwipe(index, options) {
    const a = Math.floor(index), b = Math.ceil(index), ratio = index % 1;
    this.colors = this.colors.map((c, i) => lerp(this.tabs[a].theme[i], this.tabs[b].theme[i], ratio));
    this.zone.run(() => {
      this.swipeTheme = this.md ? `rgb(${this.colors.join(',')})` : '';
      this.topPosition = lerp(this.tabs[a].top || 0, this.tabs[b].top || 0, ratio);
      this.element.nativeElement.style = this.md ? `top: ${this.topPosition}px` : '';
    });
  }

  showTip(e, message) {
    if (!this.shutUp && !(e && e.swipe) && !this.showingTip) {
      this.showingTip = true;
      ons.notification.toast({
        message,
        buttonLabel: 'Shut up!',
        timeout: 2000
      }).then(i => {
        this.shutUp = i === 0;
        this.showingTip = false;
      });
    }
  }

  /**
   * Initialize
   */
  ngOnInit() {
    this.appService.tabIndex$
      .pipe(takeUntil(this.onDestroy))
      .subscribe(index => {
        this.tabbar.nativeElement.setActiveTab(index);
      });

    // Android
    if (this.md) {
      this.tabbar.nativeElement.onSwipe = function(index, options) {
        this.onSwipe(index, options);
      }.bind(this);
    }
  }

  /**
   * Finalize
   */
  ngOnDestroy() {
    this.onDestroy.next();
  }

}
