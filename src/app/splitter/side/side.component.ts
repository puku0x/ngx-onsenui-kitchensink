import { Component } from '@angular/core';
import { onsPlatform } from 'ngx-onsenui';

import { AppService } from '../../services/app.service';

@Component({
  selector: 'ons-page[app-side]',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class SideComponent {

  /**
   * Android
   */
  md = onsPlatform.isAndroid();

  /**
   * Links
   */
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

  /**
   * Tab links
   */
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

  /**
   * Constructor
   * @param appService
   */
  constructor(private appService: AppService) { }

  /**
   * Jump to tab
   * @param index
   */
  loadView(index) {
    this.appService.setTabIndex(index + 1);
    this.appService.toggleMenu();
  }

  /**
   * Jump to link
   * @param url
   */
  loadLink(url: string) {
    window.open(url, '_blank');
  }
}
