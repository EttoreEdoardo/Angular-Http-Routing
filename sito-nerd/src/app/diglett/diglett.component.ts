import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-diglett',
  templateUrl: './diglett.component.html',
  styleUrls: ['./diglett.component.css']
})
export class DiglettComponent {
  constructor(public http: HttpClient){
    this.http.get('https://api.pokemontcg.io/v2/cards/ex14-50').subscribe(this.ball)
  }
  ball(data: any) {
    console.log(data); 
  }
}
