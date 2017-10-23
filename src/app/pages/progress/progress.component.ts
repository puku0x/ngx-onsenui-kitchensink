import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ons-page[app-progress]',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
  progress = 0;
  intervalID: any;

  /**
   * Constructor
   */
  constructor() { }

  /**
   * Initialize
   */
  ngOnInit() {
    this.intervalID = setInterval(() => {
      if (this.progress === 100) {
        clearInterval(this.intervalID);
        return;
      }
      this.progress++;
    }, 40);
  }

}
