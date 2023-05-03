import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-snorlax',
  templateUrl: './snorlax.component.html',
  styleUrls: ['./snorlax.component.css']
})
export class SnorlaxComponent {
  constructor(public http: HttpClient){
    
    http.get('https://api.pokemontcg.io/v2/cards/swsh1-142').subscribe(this.ball)
  }
  ball(data: any) {
    console.log(data); 
  }
}
