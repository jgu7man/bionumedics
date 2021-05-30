import { ComunesModule } from './../prodlist-readr-module/shared/comunes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GdevSiteRoutingModule } from './gdev-site-routing.module';
import { GdevSiteComponent } from './gdev-site.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HeroComponent } from './pages/inicio/hero/hero.component';
import { SiteTopbarComponent } from './topbar/topbar.component';
import { SiteFooterComponent } from './site-footer/site-footer.component';
import { FirebaseModule } from '../firebase.module';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    GdevSiteComponent,
    InicioComponent,
    HeroComponent,
    SiteTopbarComponent,
    SiteFooterComponent
  ],
  imports: [
    CommonModule,
    GdevSiteRoutingModule,
    MaterialModule,
    FirebaseModule,
  ]
})
export class GdevSiteModule { }
