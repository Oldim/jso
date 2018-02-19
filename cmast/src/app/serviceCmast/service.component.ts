import { Component, OnInit } from '@angular/core';
import { MuntenService } from './service03';

@Component({
  selector: 'service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ExchangeRate implements OnInit {

  private dropLijst: any [];
  aantalBase: number=0;
  aantalResult : number;
  baseMunt: string;
  resultMunt : string;
  baseLink: string = 'https://api.fixer.io/latest'
  constructor(private muntenService: MuntenService) {
    
   }

   convert(){
    this.muntenService.getMunten(this.baseLink+'?base='+this.baseMunt).subscribe(
        data => {
        this.aantalResult = data["rates"][this.resultMunt] * this.aantalBase;
    });
  }

  ngOnInit() {
    this.muntenService.getMunten(this.baseLink).subscribe(
      data => {
        this.dropLijst = ['EUR'];
        for (let rate in data["rates"]){     //enkele de index   
          this.dropLijst.push(rate);
          this.dropLijst.sort();
          this.baseMunt="EUR";
          this.resultMunt="EUR";
          console.log(rate);
        };
      });
  }

}