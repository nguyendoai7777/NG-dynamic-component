import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TabPanelComponent } from './tab.panel.component';

@Component({
  selector: 'tab-group',
  template: `
    <div class="tab-header">
      <div
        *ngFor="let tab of tabPanelList; index as i"
        class="header-item"
        [class.tab-active]="activeIndex === i"
        (click)="activeIndexChange.emit(i)"
      >{{tab.title}}
        <button (click)="removeTab(tab)">X</button>
      </div>
    </div>

    <div class="tab-body" *ngIf="tabPanelList.length; else noTab">

      <ng-template *ngTemplateOutlet="tabPanelList[activeIndex].panelBody"></ng-template>

    </div>
    <ng-template #noTab>No tabs more.</ng-template>
  `,
  styles: [`
    .tab-header {
      display: flex;
    }
    .tab-active {
      color: deepskyblue;
    }
  `]
})
export class TabGroupComponent implements OnInit {
  tabPanelList: TabPanelComponent[] = [];
  @Input() activeIndex = 0;
  @Output() activeIndexChange = new EventEmitter<number>();

  addTab(tab: TabPanelComponent) {
    this.tabPanelList.push(tab);
  }

  removeTab(tab: TabPanelComponent) {
    let found = -1;
    this.tabPanelList = this.tabPanelList.filter((tp, i) => {
      if (tp === tab) {
        found = i;
        return false;
      }
      return true;
    });
    if (found === this.activeIndex) {
      this.activeIndexChange.emit(found === this.tabPanelList.length ? found - 1 : found);
    }
  }

  ngOnInit() {
  }
}
