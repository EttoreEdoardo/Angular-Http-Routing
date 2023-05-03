import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-charmander',
  templateUrl: './charmander.component.html',
  styleUrls: ['./charmander.component.css']
})
export class CharmanderComponent {
  constructor(public http: HttpClient){
    this.http.get('https://api.pokemontcg.io/v2/cards/sm5-78').subscribe(this.ball)
    console.log("balls");
    
  }
  ball(data: any) {
    console.log(data); 
  }
}
