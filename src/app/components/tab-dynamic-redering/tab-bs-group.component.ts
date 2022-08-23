import { Component } from '@angular/core';
import { TabGroupComponent } from './tab-group.component';

@Component({
  selector: 'tab-bs-group',
  template: `
    <ul class="nav nav-tabs">
      <li
        *ngFor="let tab of tabPanelList; index as i"
        class="nav-item"

      ><a     [class.active]="activeIndex === i"
              class="nav-link"
              (click)="activeIndexChange.emit(i)" >{{tab.title}}</a>
        <button (click)="removeTab(tab);">X</button>
      </li>
    </ul>

    <div class="tab-body" *ngIf="tabPanelList.length; else noTab">

      <ng-template *ngTemplateOutlet="tabPanelList[activeIndex].panelBody"></ng-template>

    </div>
    <ng-template #noTab>No tabs more.</ng-template>
  `,
  styles: [``],
  providers: [
    {
      provide: TabGroupComponent,
      useExisting: TabBsGroupComponent
    }
  ]
}) export class TabBsGroupComponent extends TabGroupComponent {}
