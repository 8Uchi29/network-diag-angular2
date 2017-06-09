import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NetworkDiagComponent } from './network-diag/network-diag.component';

@NgModule({
  declarations: [
    AppComponent,
    NetworkDiagComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
