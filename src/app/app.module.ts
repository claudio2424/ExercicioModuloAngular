import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JavaexercicioComponent } from './javaexercicio/javaexercicio.component';
import { Javaexercico2Component } from './javaexercico2/javaexercico2.component';
import { Javaecercicio3Component } from './javaecercicio3/javaecercicio3.component';
import { Javaexercicio4Component } from './javaexercicio4/javaexercicio4.component';

@NgModule({
  declarations: [
    AppComponent,
    JavaexercicioComponent,
    Javaexercico2Component,
    Javaecercicio3Component,
    Javaexercicio4Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
