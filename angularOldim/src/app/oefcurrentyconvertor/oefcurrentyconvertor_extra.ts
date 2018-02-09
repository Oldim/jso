// stap 3
// getScholen geeft Observable terug

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// Observable => wijzigingen aan observable worden gemeld aan subscribers
import { Rate } from './model';

// Injectable => client moet object niet zelf maken
@Injectable()
export class CurrencyService03 {
     getRate():Observable<Rate[]> {
        return this.http.get<Rate[]>("https://api.fixer.io/latest");
        
     }
 
     constructor(private http: HttpClient) {
     }
}