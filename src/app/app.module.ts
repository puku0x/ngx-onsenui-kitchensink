import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OnsenModule } from 'ngx-onsenui';

import { AppComponent } from './app.component';
import { SplitterComponent } from './splitter/splitter.component';
import { HomeComponent } from './pages/home/home.component';
import { SideComponent } from './splitter/side/side.component';
import { TabbarComponent } from './tabbar/tabbar.component';
import { FormsComponent } from './pages/forms/forms.component';
import { AnimationsComponent } from './pages/animations/animations.component';
import { CameraComponent } from './pages/camera/camera.component';
import { TransitionComponent } from './pages/transition/transition.component';
import { PullhookComponent } from './pages/pullhook/pullhook.component';
import { DialogsComponent } from './pages/dialogs/dialogs.component';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { CarouselComponent } from './pages/carousel/carousel.component';
import { InfiniteScrollComponent } from './pages/infinite-scroll/infinite-scroll.component';
import { LoadMoreComponent } from './pages/infinite-scroll/load-more/load-more.component';
import { LazyRepeatComponent } from './pages/infinite-scroll/lazy-repeat/lazy-repeat.component';
import { ProgressComponent } from './pages/progress/progress.component';

/**
 * Pages
 */
const pages = [
  SplitterComponent,
  SideComponent,
  TabbarComponent,
  CameraComponent,
  HomeComponent,
  FormsComponent,
  AnimationsComponent,
  TransitionComponent,
  PullhookComponent,
  DialogsComponent,
  ButtonsComponent,
  CarouselComponent,
  InfiniteScrollComponent,
  LoadMoreComponent,
  LazyRepeatComponent,
  ProgressComponent
];

@NgModule({
  declarations: [
    AppComponent,
    ...pages,
  ],
  entryComponents: [...pages],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    OnsenModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
