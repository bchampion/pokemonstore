import {Component, HostListener, OnInit} from '@angular/core';
import {Pokemon} from '../shared/pokemon';
import {pokemonData} from '../data/data';
import {KeyCodes} from '../shared/key-codes';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  pokemon: Pokemon;

  index = 0;

  constructor() { }

  ngOnInit() {
   this.retrievePokemon();
  }

  retrievePokemon() {
    this.pokemon = pokemonData[this.index];
  }

  @HostListener('window:keyup', ['$event.keyCode'])
  keyEvent(keyCode) {
    if (keyCode === KeyCodes.RIGHT_ARROW) {
      this.next();
    }
    if (keyCode === KeyCodes.LEFT_ARROW) {
      this.previous();
    }
  }

  private previous() {
    if (this.index > 0) {
      this.index--;
    }
    this.retrievePokemon();
  }

  private next() {
    if (this.index < pokemonData.length - 1) {
      this.index++;
    }
    this.retrievePokemon();
  }
}
