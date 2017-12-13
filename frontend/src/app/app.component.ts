import { Component } from '@angular/core';
import {Pokemon} from './shared/pokemon';
import {pokemonData} from './data/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  pokemon: Pokemon = pokemonData[0];
}
