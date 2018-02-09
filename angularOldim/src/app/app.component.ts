import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  customers: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://www.w3schools.com/angular/customers.php').subscribe(
      data => {
        this.customers = data["records"];
      },
      error => {
        console.log("Er is iets fout gelopen tijdens het opvragen van de gegevens.");
        console.log(error.message);
      });
  }

}
