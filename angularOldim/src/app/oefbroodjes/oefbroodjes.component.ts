import { Component, OnInit } from '@angular/core';
import { Broodje, broodjes } from './classBroodjes';
import { Bestelling, BestelLijn } from './classBroodjes';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'oefbroodjes',
  templateUrl: './oefbroodjes.component.html',
  styleUrls: ['./oefbroodjes.component.css']
})


export class OefbroodjesComponent implements OnInit {
  broodjes: Broodje[] = broodjes;
  aantal: number =1;
  // type: string= broodjes.naam ;
  // gekozenType: BestelLijn[] = new Array<BestelLijn>();
    // gekozenType.push( new BestelLijn(this.aantal,this.type));

    gekozenType: Broodje = this.broodjes[0];
    bestelling: Bestelling = new Bestelling();
  
    addBroodje(): void {
      this.bestelling.voegLijnToe(new BestelLijn(this.gekozenType, this.aantal));
      this.aantal = 1;
    }
  
    totaalprijs(): number {
      return this.bestelling.totaalprijs();
    }




  constructor() { }

  ngOnInit() {
  }
  
}


