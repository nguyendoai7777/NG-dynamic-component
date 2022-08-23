import { Component, ContentChild, Input, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TabGroupComponent } from './tab-group.component';
import { TabContentDirective } from '../../directives/tab-content.directive';

@Component({
  selector: 'tab-panel',
  template: `
  <ng-template>
    <ng-content></ng-content>
  </ng-template>`,
  styles: [``],
})
export class TabPanelComponent implements OnInit, OnDestroy {
  @Input() title!: string;
  @ViewChild(TemplateRef, {static: true}) implicitBody: TemplateRef<unknown> | undefined;
  @ContentChild(TabContentDirective, {static: true, read: TemplateRef}) explicitBody: TemplateRef<unknown> | undefined;

  constructor(private readonly tabGroup: TabGroupComponent) {
  }

  get panelBody(): TemplateRef<unknown> {
    return this.explicitBody! || this.implicitBody;
  }

  ngOnInit() {
    this.tabGroup.addTab(this);
  }

  ngOnDestroy() {
    this.tabGroup.removeTab(this);
  }
}
