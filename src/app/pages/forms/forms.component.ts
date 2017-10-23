import { Component } from '@angular/core';

@Component({
  selector: 'ons-page[app-forms]',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  name = '';
  switchOn =  true;
  items = [
    { text: 'Angular', value: 'Angular' },
    { text: 'React', value: 'React' },
    { text: 'Vue', value: 'Vue' },
  ];
  selectedItem = 'Angular';
  vegetables = ['Apples', 'Bananas', 'Oranges'];
  selectedVegetable = 'Bananas';
  colors =  ['Red', 'Green', 'Blue'];
  checkedColors = ['Green', 'Blue'];
  volume = 25;

  /**
   * Constructor
   */
  constructor() { }

}
