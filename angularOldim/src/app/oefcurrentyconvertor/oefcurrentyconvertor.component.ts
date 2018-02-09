import { Component, OnInit } from '@angular/core';
import { CurrencyService03 } from './oefcurrentyconvertor_extra';
import { Rate } from './model';

@Component({
  selector: 'oefcurrentyconvertor',
  templateUrl: './oefcurrentyconvertor.component.html',
  styleUrls: ['./oefcurrentyconvertor.component.css']
})
export class OefcurrentyconvertorComponent implements OnInit {
  exchange: Rate[];

  constructor(private rateService: CurrencyService03) { }

  ngOnInit() {

    this.rateService.getRate().subscribe(
      data => {
        this.exchange = data as any[];
      });
  }
}