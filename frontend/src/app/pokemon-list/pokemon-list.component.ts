import {Component, OnInit} from '@angular/core';
import {Pokemon} from '../shared/pokemon';
import {pokemonData} from '../data/data';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons: Pokemon[] = pokemonData;

  searchTerm: string;

  constructor() { }

  ngOnInit() {
  }

}
