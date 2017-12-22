import { Component, ViewChild, OnInit } from '@angular/core';
import { onsPlatform } from 'ngx-onsenui';

@Component({
  selector: 'ons-page[app-pullhook]',
  templateUrl: './pullhook.component.html',
  styleUrls: ['./pullhook.component.scss']
})
export class PullhookComponent implements OnInit {
  state = 'initial';
  ratio = 0;
  spin = true;
  kittens = [];

  /**
   * Android
   */
  md = onsPlatform.isAndroid();

  /**
   * Pullhook
   */
  @ViewChild('pullhook') pullhook;

  /**
   * Constructor
   */
  constructor() { }

  /**
   * Callback for pull
   * @param ratio
   */
  onPull(ratio) {
    this.ratio = ratio;
  }

  /**
   * Callback for changestate
   * @param
   */
  onChangestate($event) {
    this.state = $event.state;
  }

  /**
   * Callback for action
   * @param
   */
  onAction($event) {
    setTimeout(() => {
      this.kittens = [...this.kittens, this.getRandomKitten()];
      $event.done();
    }, 1500);
  }

  /**
   * Get random name
   */
  getRandomName() {
    const names = ['Oscar', 'Max', 'Tiger', 'Sam', 'Misty', 'Simba', 'Coco', 'Chloe', 'Lucy', 'Missy'];
    return names[Math.floor(Math.random() * names.length)];
  }

  /**
   * Get random url
   */
  getRandomUrl() {
    const width = 40 + Math.floor(20 * Math.random());
    const height = 40 + Math.floor(20 * Math.random());
    return `https://placekitten.com/g/${width}/${height}`;
  }

  /**
   * Get random kitten
   */
  getRandomKitten() {
    return {
      name: this.getRandomName(),
      url: this.getRandomUrl()
    };
  }

  /**
   * Get random data
   */
  getRandomData() {
    const data = [];
    for (let i = 0; i < 8; i++) {
      data.push(this.getRandomKitten());
    }
    return data;
  }

  /**
   * Initialize
   */
  ngOnInit() {
    this.kittens = this.getRandomData();

    if (this.md) {
      this.pullhook.nativeElement.onPull = (ratio, options) => {
        if (ratio > 1.0) {
          ratio = 1.0;
        }
        this.onPull(ratio);
      };
    }
  }

}
