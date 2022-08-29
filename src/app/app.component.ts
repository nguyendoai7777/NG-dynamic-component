import { ChangeDetectorRef, Component } from '@angular/core';
import { TabEmitProps } from './components/tab-hard-rendering/tabs/tabs.model';

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


