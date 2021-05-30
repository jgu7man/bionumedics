import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { InicioComponent } from './gdev-site/pages/inicio/inicio.component';


const routes: Routes = [
  {
    path: 'tienda',
    loadChildren: () =>
      import( './gdev-store/public/gdev-store-public.module' )
        .then( m => m.GdevStorePublicModule )
  },
  {
    path: 'panel',
    loadChildren: () =>
      import( './gdev-panel/gdev-panel.module' )
        .then( m => m.GdevPanelModule )
  },
  {
    path: '',
    loadChildren: () => import('./gdev-site/gdev-site.module')
      .then(m => m.GdevSiteModule)
  },
];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'disabled',
  onSameUrlNavigation: 'reload',
  initialNavigation: 'enabled'
};


@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
