import {Component, OnInit} from '@angular/core';
import {Pokemon} from '../../shared/pokemon';
import {pokemonData} from '../../shared/data/data';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons: Pokemon[] = pokemonData;

  set searchTerm(term) {
    this.pokemons = pokemonData.filter(pokemon => !term || pokemon.name.toLowerCase().indexOf(term.toLowerCase()) >= 0);
  }

  constructor() { }

  ngOnInit() {
  }

}
