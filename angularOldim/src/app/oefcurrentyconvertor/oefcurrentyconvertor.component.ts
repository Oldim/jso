import { Component, OnInit } from '@angular/core';
import { CurrencyService03 } from './oefcurrentyconvertor_extra';
import { Rate } from './model';

@Component({
  selector: 'oefcurrentyconvertor',
  templateUrl: './oefcurrentyconvertor.component.html',
  styleUrls: ['./oefcurrentyconvertor.component.css']
})
export class OefcurrentyconvertorComponent implements OnInit {
  gekozenRate: string;
  gekozenRateTo: string;
  txtValue1: number;
  txtValue2: number;
  exchange: Rate[] = this.exchange;
  myUrl:string = 'https://api.fixer.io/latest';
  rate:string;
  constructor(public rateService: CurrencyService03) { }

  ngOnInit() {

    this.rateService.getRate(this.myUrl).subscribe(
      data => {
         console.log(data["rates"]);
        this.exchange=[];
        for(let rate in data["rates"]){
          this.exchange.push(new Rate(rate, data["rates"][rate]));
        }
      });




  }

  convertValue(): void {

    this.rateService.getRate(this.myUrl+'?base=EUR').subscribe(
      data => {
         this.txtValue2=this.txtValue1*data["rates"][this.gekozenRateTo]; 
        
      });
    let totaal: number = 0;
    this.txtValue1
    // for (let i = 0; i < this.exchange.length; i++) {
    //     totaal += this.exchange[i].wisselkoers * 1;
    // }
    // this.gekozenRate
    // return totaal=this.txtValue1*this.gekozenRate[];
    // console.log(this.exchange);
}

}