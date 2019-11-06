import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroesService, Heroe } from "../../services/heroes.service";

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  heroes:Heroe[];

  constructor(private _route:ActivatedRoute, private _heroesService:HeroesService) {
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.heroes = this._heroesService.buscarHeroes(params.palabra);
    });
  }

}
