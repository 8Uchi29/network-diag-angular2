import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {APP_BASE_HREF} from '@angular/common';
import { NetworkDiagramComponent } from './network-diagram/network-diagram.component';

const appRoutes: Routes = [
  {path: '', component: AppComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    NetworkDiagramComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ AppComponent],
  bootstrap: [ AppComponent]
})
export class AppModule { }
