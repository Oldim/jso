import { Component, OnInit } from '@angular/core';
import { Hero, heroes } from './../heroes-detail/mock-heroes';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = heroes;
  id: number;
  bl: boolean;
  naam: string;
  temp: string;
  ToonBeschik: boolean= false;
  constructor() { }

  ngOnInit() { 
   }
   ToonNaam(hero: Hero): void{
   this.heroes[0] = hero;
  }


}
