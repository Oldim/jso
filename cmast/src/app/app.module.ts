import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { MuntenService } from './serviceCmast/service03';


import { AppComponent } from './app.component';
import { ExchangeRate } from './serviceCmast/service.component';


@NgModule({
  declarations: [
    AppComponent,
    ExchangeRate
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MuntenService],
  bootstrap: [ExchangeRate]
})
export class AppModule { }
