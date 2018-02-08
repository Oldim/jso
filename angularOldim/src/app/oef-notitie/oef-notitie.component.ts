import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'oef-notitie',
  templateUrl: './oef-notitie.component.html',
  styleUrls: ['./oef-notitie.component.css']
})
export class OefNotitieComponent implements OnInit {
  message: string;
  maxKarak:number;
  constructor() {
    this.message = "";
    this.maxKarak=100;
  }

  ngOnInit() {

  }
  maxKarakteers(){
    return  this.maxKarak;
  }

  wisContent() {
    if (this.message != '') {
      this.message = "";
    }
  }
  toonBericht():void {
    alert("test Bericht ");
  }
  aantalKarakteer() {
    return 100 - this.message.length;
  }

  tekstIsLeeg() {
    return this.message == '';
  }

}
