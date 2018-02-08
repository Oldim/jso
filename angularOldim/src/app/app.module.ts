import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { Vb00Component } from './vb00/vb00.component';
import { Oef00Component } from './oef00/oef00.component';
import { OefNotitieComponent } from './oef-notitie/oef-notitie.component';
import { VbforuitbrComponent } from './vbforuitbr/vbforuitbr.component';
import { OefbroodjesComponent } from './oefbroodjes/oefbroodjes.component';


@NgModule({
  declarations: [
    AppComponent,
    Vb00Component,
    Oef00Component,
    OefNotitieComponent,
    VbforuitbrComponent,
    OefbroodjesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [OefbroodjesComponent]
})
export class AppModule { }
