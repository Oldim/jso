import { Component, OnInit } from '@angular/core';
import { Broodje, broodjes } from './classBroodjes';

@Component({
  selector: 'oefbroodjes',
  templateUrl: './oefbroodjes.component.html',
  styleUrls: ['./oefbroodjes.component.css']
})


export class OefbroodjesComponent implements OnInit {
  broodjes: Broodje[] = broodjes;

  constructor() { }

  ngOnInit() {
  }
}


