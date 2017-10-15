import { Component } from '@angular/core';

import { SplitterComponent } from './splitter/splitter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  root = SplitterComponent;
}
