import { ChangeDetectorRef, Component } from '@angular/core';
import { TabEmitProps } from './components/tab-hard-rendering/tabs/tabs.model';

export const TOPPING = [
  {
    id: 1,
    name: 'Cheese',
    value: 'Cheese 1',
    options: [
      {id: '123d', name: 'Extra Cheese', price: 0},
      {id: 'asd1', name: 'Double Cheese', price: 4},
      {id: 'qwds12', name: 'Triple Cheese', price: 8}],
    category: [1, 2]
  },
  {
    id: 2,
    name: 'Crust',
    value: 'Cheese 2',
    options: [
      {id: 'SDQ', name: 'Thin Crust', price: 2},
      {id: 'EQssssW', name: 'Handtossed', price: 0},
      {id: 'DFSDFSF3', name: 'New York Crust', price: 99}],
    category: [1]
  },
  {
    id: 3,
    name: 'Meat',
    value: 'Cheese 3',
    options: [
      {id: 'wdasdasd', name: 'Extra Meat', price: 0},
      {id: '2asdda', name: 'Double Meat', price: 5}],
    category: [2]
  },
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'components';
  tabHeader = [
    'Pull Request',
    'Issues',
    'Marketplace',
    'Explore'
  ];

  showT4 = true;

  constructor(private readonly cdr: ChangeDetectorRef) {
  }

  currentTabHeaderIndex = 1;
  currentTabHeaderIndex2 = 1;


  onTabChanged({name, index}: TabEmitProps) {
    this.currentTabHeaderIndex = index;
    this.cdr.detectChanges();
  }
}
