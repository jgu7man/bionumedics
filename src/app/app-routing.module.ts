import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'tienda' },
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
