import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterTwoComponent } from './components/filter-two/filter-two.component';

const routes: Routes = [
 /* {
    path: '**',
    redirectTo: 'dynamic',
    pathMatch: 'full'
  },*/
  {
    path: 'ft2',
    component: FilterTwoComponent
  },
  {
    path: 'dynamic',
    loadChildren: () => import('./screens/dynamic-cpn/dynamic-cpn.module').then((m) => m.DynamicCpnModule)
  },
  {
    path: 'circle',
    loadComponent: () => import('./screens/canvas/circle/circle.component').then((c) => c.CircleComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
