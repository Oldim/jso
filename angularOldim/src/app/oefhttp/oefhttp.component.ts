import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'oefhttp',
  templateUrl: './oefhttp.component.html',
  styleUrls: ['./oefhttp.component.css']
})
export class OefhttpComponent implements OnInit {
  customers: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://jsonplaceholder.typicode.com/users').subscribe(
      data => {
        this.customers = data as any[];
        console.log(data);
      },
      error => {
        console.log("Er is iets fout gelopen tijdens het opvragen van de gegevens.");
        console.log(error.message);
      });
  }

}