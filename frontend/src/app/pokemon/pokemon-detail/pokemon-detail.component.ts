import {Component, OnInit} from '@angular/core';
import {Pokemon} from '../../shared/pokemon';
import {pokemonData} from '../../shared/data/data';
import {ActivatedRoute, Router} from '@angular/router';
import {UrisUtils} from '../../shared/utils/uris-utils';
import {trigger} from "@angular/animations";
import {ModalAnimation} from "../../shared/components/modal/modal-animation";

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css'],
  host: {'[@modal]': ''},
  animations: [
    trigger('modal', ModalAnimation.fadeInOut)
  ]
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

  previous() {
    let previousIndex = this.index - 1;
    if (previousIndex < 0) { previousIndex = pokemonData.length - 1; }
    this.router.navigate(UrisUtils.getDetailLink(pokemonData[previousIndex].id), {relativeTo: this.route.parent});
  }

  next() {
    console.log(this.index);
    let nextIndex = this.index + 1;
    if (nextIndex > pokemonData.length - 1) {
      nextIndex = 0;
    }
    this.router.navigate(UrisUtils.getDetailLink(pokemonData[nextIndex].id), {relativeTo: this.route.parent});
  }

  close() {
    this.router.navigate(UrisUtils.getListLink());
  }
}
