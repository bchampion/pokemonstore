import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from '../shared/pokemon';
import {UrisUtils} from "../shared/utils/uris-utils";

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  @Input()
  pokemon: Pokemon;

  link: any[];

  constructor() { }

  ngOnInit() {
    this.link = UrisUtils.getDetailLink(this.pokemon.id);
  }

}
