import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.css']
})
export class GenericComponent {
  //@ts-ignore
  guy: Data = {};
  link: string = "";

  searchText!: string;
  cardData: any;
  cardList!: any[];

  constructor(private route: ActivatedRoute, public http: HttpClient) {
    this.getId("");
    this.http.get("https://api.pokemontcg.io/v2/cards/").subscribe(ball => {
    // Aggiorna il tuo oggetto "guy" o esegui altre operazioni in base alla risposta
  })
    setInterval(() => {
      this.http.get(this.link).subscribe(ball => {
        //@ts-ignoreS
        this.guy = ball;
      })
    }, 1000)
  }

  getId = (a: string) => {
    if (a != "") {
      this.link = "https://api.pokemontcg.io/v2/cards/" + a;
    } else {
      this.route.paramMap.subscribe(this.getRouterParam);
    }
 }

 getRouterParam = (params: ParamMap) =>
  {    
    let uri_param = params.get('id'); //Ottengo l'id dalla ParamMap
   
    switch (uri_param) {
      case "charmander":
        this.link = "https://api.pokemontcg.io/v2/cards/ecard1-98" // -- charmander
        break;
      case "diglett":
        this.link = "https://api.pokemontcg.io/v2/cards/sm5-78" // -- DIGLETT
        break;
      case "energia":
        this.link = "https://api.pokemontcg.io/v2/cards/sm4-122" // -- energia
        break;
      case "snorlax":
        this.link = "https://api.pokemontcg.io/v2/cards/swsh1-142" // -- snorlax
        break;
    }
  }

  searchCard() {
    if (this.searchText && this.searchText.length >= 1) {
      this.http.get(`https://api.pokemontcg.io/v2/cards?q=name:${this.searchText}*`)
        .subscribe((response: any) => {
          this.cardList = response.data;
        });
    } else {
      this.cardList = [];
    }
  }
}


