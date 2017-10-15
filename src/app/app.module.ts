import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OnsenModule } from 'ngx-onsenui';

import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { SplitterComponent } from './splitter/splitter.component';
import { HomeComponent } from './pages/home/home.component';
import { SideComponent } from './splitter/side/side.component';
import { TabbarComponent } from './tabbar/tabbar.component';
import { FormsComponent } from './pages/forms/forms.component';
import { AnimationsComponent } from './pages/animations/animations.component';
import { CameraComponent } from './pages/camera/camera.component';
import { TransitionComponent } from './pages/transition/transition.component';

const pages = [
  SplitterComponent,
  SideComponent,
  TabbarComponent,
  CameraComponent,
  HomeComponent,
  FormsComponent,
  AnimationsComponent,
  TransitionComponent,
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
    OnsenModule,
    CoreModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }