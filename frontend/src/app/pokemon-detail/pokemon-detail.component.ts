import {Component, HostListener, OnInit} from '@angular/core';
import {Pokemon} from '../shared/pokemon';
import {pokemonData} from '../data/data';
import {KeyCodes} from '../shared/key-codes';
import {ActivatedRoute, Router} from '@angular/router';
import {UrisUtils} from '../shared/utils/uris-utils';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  pokemon: Pokemon;

  index: number;

  constructor(private route: ActivatedRoute,
              private router: Router) {
    this.route.params.subscribe(params => this.handleParams(+params['id']));
  }

  ngOnInit() {
  }

  private handleParams(id: number) {
    this.index = pokemonData.findIndex(pokemon => pokemon.id === id);
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
    let previousIndex = this.index - 1;
    if (previousIndex < 0) { previousIndex = pokemonData.length - 1; }
    this.router.navigate(UrisUtils.getDetailLink(pokemonData[previousIndex].id));
  }

  private next() {
    let nextIndex = this.index + 1;
    if (nextIndex > pokemonData.length - 1) {
      nextIndex = 0;
    }
    this.router.navigate(UrisUtils.getDetailLink(pokemonData[nextIndex].id));
  }

  back() {
    this.router.navigate(UrisUtils.getListLink());
  }
}
