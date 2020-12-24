import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { GdevPanelModule } from './gdev-panel/gdev-panel.module';
import { GdevToolsModule } from './gdev-tools/gdev-tools.module';
import { GdevStorePanelModule } from './gdev-store/panel/gdev-store-panel.module';
import { GdevStorePublicModule } from './gdev-store/public/gdev-store-public.module';
import { FirebaseModule } from './firebase.module';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './gdev-tools/material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    FirebaseModule,
    CommonModule,
    MaterialModule,
    GdevStorePublicModule,
    GdevStorePanelModule,
    GdevToolsModule,
    GdevPanelModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
