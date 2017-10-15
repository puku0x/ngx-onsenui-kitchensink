import { Component, OnInit } from '@angular/core';
import { Params } from 'ngx-onsenui';

@Component({
  selector: 'ons-page[app-transition]',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.scss']
})
export class TransitionComponent implements OnInit {
  title: string;

  constructor(private params: Params) { }

  ngOnInit() {
    this.title = this.params.data;
  }

}
