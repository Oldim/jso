import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vbforuitbr',
  templateUrl: './vbforuitbr.component.html',
  styleUrls: ['./vbforuitbr.component.css']
})
export class VbforuitbrComponent implements OnInit {
  piraten = ["Jan", "Piet", "Joris", "Korneel"];
  name:string
  constructor() { 
    this.name="";
  }

  ngOnInit() {
  }
  addPirate(){
    this.piraten.push(this.name);
    this.name="";
  }

}
