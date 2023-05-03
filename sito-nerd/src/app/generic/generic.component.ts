import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.css']
})
export class GenericComponent {
  constructor(private route: ActivatedRoute, public http: HttpClient) {
    //Gestisce i cambi di route con l'observable paramMap
    this.route.paramMap.subscribe(this.getRouterParam);
    console.log("balòòs");
    
  }

  //Ogni volta che viene invocata la route tracks/:id, l'observable paramMap richiama questo metodo
  getRouterParam = (params: ParamMap) =>
  {
    let uri_param = params.get('id'); //Ottengo l'id dalla ParamMap
    //this.service.getTrack()
    //if (uri_param == 'fruits') this.Vect = ;
    //if (uri_param == 'animals') this.Vect = ;
  }
}
interface card {
  name: string
}