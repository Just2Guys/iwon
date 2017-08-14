import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'about-us-page',
  templateUrl: 'templates/about.html',
  styleUrls: [
    'css/about-us.css'
  ]
})

export class AboutUsComponent {
  constructor(private http:Http) {
    this.http.get('https://api.csgofast.com/price/all')
    .map((res:Response) => res.json())
    .subscribe(response => console.log(response));
  }
}
