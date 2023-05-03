import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-energia',
  templateUrl: './energia.component.html',
  styleUrls: ['./energia.component.css']
})
export class EnergiaComponent {
  constructor(public http: HttpClient){
    this.http.get('https://api.pokemontcg.io/v2/cards/sm4-122').subscribe(this.ball)
  }
  ball(data: any) {
    console.log(data); 
  }
}
