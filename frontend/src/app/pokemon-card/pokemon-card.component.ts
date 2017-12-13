import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../shared/pokemon';
import {pokemonData} from '../data/data';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  pokemon: Pokemon = pokemonData[0];

  constructor() { }

  ngOnInit() {
  }

}