import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterTwoComponent } from './components/filter-two/filter-two.component';

const routes: Routes = [
  {
    path: 'ft2',
    component: FilterTwoComponent
  },
  {
    path: 'dynamic',
    loadChildren: () => import('./screens/dynamic-cpn/dynamic-cpn.module').then((m) => m.DynamicCpnModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
