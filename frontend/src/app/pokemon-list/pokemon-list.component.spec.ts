import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {PokemonListComponent} from './pokemon-list.component';
import {PokemonCardComponent} from '../pokemon-card/pokemon-card.component';
import {pokemonData} from '../data/data';
import {Pokemon} from '../shared/pokemon';
import {RouterTestingModule} from '@angular/router/testing';

describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;
  let element;
  const firstPokemon: Pokemon = pokemonData[0];
  const randomIndex: number = Math.floor(Math.random() * pokemonData.length);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PokemonListComponent,
        PokemonCardComponent
      ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('first card should display first pokemon', () => {
    const firstCard = element.querySelector('.card--media');
    expect(firstCard)
      .toBeTruthy('No card is displayed');
    if (firstCard) {
      const firstCardImage = firstCard.querySelector('.sprite');
      expect(firstCardImage.classList)
        .toContain('sprite-' + firstPokemon.id, 'Wrong image is displayed');
      expect(firstCard.querySelector('div').innerText)
        .toBe(`${firstPokemon.name} #${firstPokemon.id}`, 'Name and id are not displayed well');
    }
  });

  it('should display as much card as pokemon in the list', () => {
    const allCards = element.querySelectorAll('.card--media');
    expect(allCards).toBeTruthy();
    if (allCards) {
      expect(allCards.length).toBe(pokemonData.length);
    }
  });

  it('random card should display pokemon with same position', () => {
    const allCards = element.querySelectorAll('.card--media');
    const randomCard = allCards ? allCards[randomIndex] : null;
    const randomPokemon = pokemonData[randomIndex];
    expect(randomCard).toBeTruthy(`card #${randomIndex} is not displayed`);
    if (randomCard) {
      const randomCardImage = randomCard.querySelector('.sprite');
      expect(randomCardImage.classList)
        .toContain('sprite-' + randomPokemon.id, 'Wrong image is displayed');
      expect(randomCard.querySelector('div').innerText)
        .toBe(`${randomPokemon.name} #${randomPokemon.id}`, 'Name and id are not displayed well');

    }
  });

});
