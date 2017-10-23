import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'ons-page[app-carousel]',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  carouselIndex = 0;
  items = [
    { name: 'gray',   color: 'gray' },
    { name: 'blue',   color: '#085078' },
    { name: 'dark',   color: '#373B44' },
    { name: 'orange', color: '#D38312' }
  ];

  /**
   * Carousel
   */
  @ViewChild('carousel') carousel;

  /**
   * Constructor
   */
  constructor() { }

  /**
   * Callback for postchange
   * @param event
   */
  onPostchange(event) {
    this.carouselIndex = event.activeIndex;
  }

  /**
   * Change carousel
   * @param index
   */
  setActiveIndex(index) {
    this.carouselIndex = index;
    this.carousel.nativeElement.setActiveIndex(index);
  }

}
