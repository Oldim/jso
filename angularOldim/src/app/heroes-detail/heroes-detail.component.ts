import { Component, OnInit } from '@angular/core';
import { Hero, heroes } from './mock-heroes';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'heroes-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.css']
})
export class HeroesDetailComponent implements OnInit {
  //heroes: Hero[] = heroes;
  hero: Hero = heroes[0];
  txtNaam: string = heroes[0].naam;
  txtBeschik: boolean = heroes[0].bl;
  id: number;
  bl: boolean;
  naam: string;
  constructor() { }

  ngOnInit() {
 
  }

}
