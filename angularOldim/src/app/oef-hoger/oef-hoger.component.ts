import { Component, OnInit } from '@angular/core';
import { HogerLager } from './oef-hoger_appFile';

@Component({
  selector: 'oef-hoger',
  templateUrl: './oef-hoger.component.html',
  styleUrls: ['./oef-hoger.component.css']
})
// @ViewChild('txtNumber'){myInputVariable: any;}


export class OefHogerComponent implements OnInit {
  hogerlager: HogerLager = new HogerLager();
  txtNumber: number = 0;
  tip: string = "";

  constructor() { }

  ngOnInit() {
  }
  wisContent() {
    this.hogerlager.reset();
    this.tip ="";
    this.txtNumber= 0;
  }
  doeGok(){
    this.tip = this.hogerlager.controleGetal(this.txtNumber);
  }
  

}
