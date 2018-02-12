import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { Vb00Component } from './vb00/vb00.component';
import { Oef00Component } from './oef00/oef00.component';
import { OefNotitieComponent } from './oef-notitie/oef-notitie.component';
import { VbforuitbrComponent } from './vbforuitbr/vbforuitbr.component';
import { OefbroodjesComponent } from './oefbroodjes/oefbroodjes.component';
import { OefHogerComponent } from './oef-hoger/oef-hoger.component';
import { HttpClientModule } from '@angular/common/http';
import { OefhttpComponent } from './oefhttp/oefhttp.component';
import { OefcurrentyconvertorComponent } from './oefcurrentyconvertor/oefcurrentyconvertor.component';
import { CurrencyService03 } from './oefcurrentyconvertor/oefcurrentyconvertor_extra';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroesDetailComponent } from './heroes-detail/heroes-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    Vb00Component,
    Oef00Component,
    OefNotitieComponent,
    VbforuitbrComponent,
    OefbroodjesComponent,
    OefHogerComponent,
    OefhttpComponent,
    OefcurrentyconvertorComponent,
    HeroesComponent,
    HeroesDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [CurrencyService03],
  bootstrap: [HeroesComponent]
})
export class AppModule { 




}
