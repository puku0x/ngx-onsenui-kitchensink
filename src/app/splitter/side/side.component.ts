import { Component, OnInit } from '@angular/core';
import * as ons from 'onsenui';

import { AppService } from '../../core/services/app.service';

@Component({
  selector: 'ons-page[app-side]',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class SideComponent implements OnInit {

  md = ons.platform.isAndroid();

  links = [
    {
      title: 'Docs',
      icon: 'ion-document-text',
      url: 'https://onsen.io/v2/docs/guide/angular2/'
    },
    {
      title: 'Github',
      icon: 'ion-social-github',
      url: 'https://github.com/OnsenUI/OnsenUI'
    },
    {
      title: 'Code',
      icon: 'ion-code',
      url: 'https://github.com/OnsenUI/ngx-onsenui-kitchensink'
    },
    {
      title: 'Forum',
      icon: 'ion-chatboxes',
      url: 'https://community.onsen.io/'
    },
    {
      title: 'Twitter',
      icon: 'ion-social-twitter',
      url: 'https://twitter.com/Onsen_UI'
    }
  ];

  access = [
    {
      title: 'Home',
      icon: 'ion-home, material:md-home'
    },
    {
      title: 'Forms',
      icon: 'ion-edit, material:md-edit'
    },
    {
      title: 'Animations',
      icon: 'ion-film-marker, material: md-movie-alt'
    }
  ];

  constructor(private appService: AppService) { }

  loadView(index) {
    this.appService.setTabIndex(index + 1);
    this.appService.toggleMenu();
  }

  loadLink(url: string) {
    window.open(url, '_blank');
  }

  ngOnInit() {
  }

}
