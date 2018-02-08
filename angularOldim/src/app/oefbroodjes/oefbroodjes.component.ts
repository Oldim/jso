import { Component, OnInit } from '@angular/core';
import { Broodje, broodjes } from './classBroodjes';
import { BestelLijn } from './classBroodjes';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'oefbroodjes',
  templateUrl: './oefbroodjes.component.html',
  styleUrls: ['./oefbroodjes.component.css']
})


export class OefbroodjesComponent implements OnInit {
  broodjes: Broodje[] = broodjes;
  aantal: number;
  type: string= broodjes.naam ;
  gekozenType: BestelLijn[] = new Array<BestelLijn>();
    // gekozenType.push( new BestelLijn(this.aantal,this.type));

  constructor() { }

  ngOnInit() {
  }

  gegOphalen(){
  let  gekozenType: BestelLijn[] = new Array<BestelLijn>();
    
  }
  
}


