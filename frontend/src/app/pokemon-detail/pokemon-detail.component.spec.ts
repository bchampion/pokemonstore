import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {PokemonDetailComponent} from './pokemon-detail.component';
import {pokemonData} from "../data/data";
import {TitleCasePipe} from "@angular/common";

describe('PokemonDetailComponent', () => {
  let component: PokemonDetailComponent;
  let fixture: ComponentFixture<PokemonDetailComponent>;
  let element;
  let pokemon = pokemonData[0];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonDetailComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    element = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it( 'should display first pokemon properly', () => {
    expect(element.querySelector('.sprite.sprite-' + pokemon.id))
      .toBeTruthy();

    expect(element.querySelector('h1').innerText)
      .toBe(new TitleCasePipe().transform(pokemon.name) + ' #' + pokemon.id);

    expect(element.querySelector('.height-and-weight').innerText)
      .toBe(`Height: ${pokemon.height / 10} m Weight: ${pokemon.weight / 10} kg`);

    expect(element.querySelector('.description').innerText)
      .toBe(pokemon.description);

    const typeElements = element.querySelectorAll('.type');
    typeElements.forEach((typeElement, index) => {
      expect(typeElement.classList).toContain(pokemon.types[index]);
      expect(typeElement.innerText).toBe(pokemon.types[index]);
    });
  });
  it( 'should display random pokemon image with class .sprite.sprite-ID', () => {
    pokemon = changePokemon(component, fixture);
    expect(element.querySelector('.sprite.sprite-' + pokemon.id))
      .toBeTruthy();
  });
  it( 'should display random pokemon name in titlecase followed by #id', () => {
    pokemon = changePokemon(component, fixture);
    expect(element.querySelector('h1').innerText)
      .toBe(new TitleCasePipe().transform(pokemon.name) + ' #' + pokemon.id);
  });
  it( 'should display random pokemon height anw weight', () => {
    pokemon = changePokemon(component, fixture);
    expect(element.querySelector('.height-and-weight').innerText)
      .toBe(`Height: ${pokemon.height / 10} m Weight: ${pokemon.weight / 10} kg`);
  });
  it( 'should display random pokemon description', () => {
    pokemon = changePokemon(component, fixture);
    expect(element.querySelector('.description').innerText)
      .toBe(pokemon.description);
  });
  it( 'should display and style random pokemon types', () => {
    pokemon = changePokemon(component, fixture);
    const typeElements = element.querySelectorAll('.type');
    typeElements.forEach((typeElement, index) => {
      expect(typeElement.classList).toContain(pokemon.types[index]);
      expect(typeElement.innerText).toBe(pokemon.types[index]);
    });
  });
});

function changePokemon(component, fixture) {
  const index = Math.floor(Math.random() * pokemonData.length);
  component.index = index;
  component.pokemon = pokemonData[index];
  fixture.detectChanges();
  return pokemonData[index];
}
