import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GdevSiteComponent } from './gdev-site.component';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  {
    path: '', component: GdevSiteComponent, children: [
      { path: '', component: InicioComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GdevSiteRoutingModule { }
