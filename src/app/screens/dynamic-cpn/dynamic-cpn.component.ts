import { Component, ComponentFactory, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicCpnDirective } from './dynamic-cpn.directive';

@Component({
  selector: 'dynamic-cpn',
  templateUrl: './dynamic-cpn.component.html',
  styleUrls: ['./dynamic-cpn.component.scss']
})
export class DynamicCpnComponent implements OnInit {
  @ViewChild(DynamicCpnDirective, {static: true, read: ViewContainerRef}) vcRef!: ViewContainerRef;
  x = -1;

  constructor() { }

  ngOnInit(): void {
    console.log(this.vcRef);
    this.showCpnOne();
  }

  clear() {
    this.vcRef.clear();
  }

  async showCpnOne() {
    if(this.x !== 1) {
      this.clear();
      const {ComponentOneComponent} = await import('./component-one/component-one.component');
      const createInstance = this.vcRef.createComponent(ComponentOneComponent);
      createInstance.instance.x = Math.random();
    }
    this.x = 1;
  }

  async showCpnTwo() {
    if (this.x !== 2) {
      this.clear();
      const {ComponentTwoComponent} = await import('./component-two/component-two.component');
      this.vcRef.createComponent(ComponentTwoComponent);
    }
    this.x = 2;
  }

}
