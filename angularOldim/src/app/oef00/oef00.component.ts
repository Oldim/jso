import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'oef00',
  templateUrl: './oef00.component.html',
  styleUrls: ['./oef00.component.css']
})
export class Oef00Component implements OnInit {
  aantal: number;
  prijs: number;
  constructor() { 
    this.aantal = 100;
    this.prijs = 1.2;
  }

  ngOnInit() {
  }

  BerekenTotaal(): number{
    return this.aantal*this.prijs;
  }


}
