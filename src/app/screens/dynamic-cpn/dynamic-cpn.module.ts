import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicCpnComponent } from './dynamic-cpn.component';
import { RouterModule } from '@angular/router';
import { DynamicCpnDirective } from './dynamic-cpn.directive';



@NgModule({
  declarations: [
    DynamicCpnComponent,
    DynamicCpnDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DynamicCpnComponent
      }
    ])
  ]
})
export class DynamicCpnModule { }
