import { Component, ViewChild, OnInit } from '@angular/core';
import * as ons from 'onsenui';

@Component({
  selector: 'ons-page[app-pullhook]',
  templateUrl: './pullhook.component.html',
  styleUrls: ['./pullhook.component.scss']
})
export class PullhookComponent implements OnInit {

  md = ons.platform.isAndroid();
  state = 'initial';
  ratio = 0;
  spin = true;
  kittens = [];
  @ViewChild('pullhook') pullhook;

  constructor() { }

  onPull(ratio) {
    this.ratio = ratio;
  }

  onChangestate($event) {
    this.state = $event.state;
  }

  onAction($event) {
    setTimeout(() => {
      this.kittens = [...this.kittens, this.getRandomKitten()];
      $event.done();
    }, 1500);
  }

  getRandomName() {
    const names = ['Oscar', 'Max', 'Tiger', 'Sam', 'Misty', 'Simba', 'Coco', 'Chloe', 'Lucy', 'Missy'];
    return names[Math.floor(Math.random() * names.length)];
  }

  getRandomUrl() {
    const width = 40 + Math.floor(20 * Math.random());
    const height = 40 + Math.floor(20 * Math.random());
    return `https://placekitten.com/g/${width}/${height}`;
  }

  getRandomKitten() {
    return {
      name: this.getRandomName(),
      url: this.getRandomUrl()
    };
  }

  getRandomData() {
    const data = [];
    for (let i = 0; i < 8; i++) {
      data.push(this.getRandomKitten());
    }
    return data;
  }

  ngOnInit() {
    this.kittens = this.getRandomData();

    if (this.md) {
      this.pullhook.nativeElement.onPull = function(ratio, options) {
        if (ratio > 1.0) {
          ratio = 1.0;
        }
        this.onPull(ratio, options);
      }.bind(this);
    }
  }

}
