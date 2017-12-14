import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PokemonCardComponent} from './pokemon-card.component';
import {Component, ViewChild} from '@angular/core';
import {pokemonData} from '../../shared/data/data';
import {RouterTestingModule} from "@angular/router/testing";

describe('PokemonCardComponent', () => {
  let testHostComponent: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let component: PokemonCardComponent;
  let element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestHostComponent,
        PokemonCardComponent
      ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = fixture.componentInstance;
    component = testHostComponent.pokemonCard;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display pokemon name and id', () => {
    expect(element.querySelector('.card--media__content').innerText)
      .toBe(component.pokemon.name + ' #' + component.pokemon.id);
  });

  it('should display pokemon image', () => {
    const imageElement = element.querySelector('.sprite');
    expect(imageElement.classList)
      .toContain('sprite-' + component.pokemon.id);
  });

  it('should display random pokemon from input', () => {
    const pokemon = pokemonData[Math.floor(Math.random() * pokemonData.length)];
    testHostComponent.pokemon = pokemon;
    fixture.detectChanges();
    expect(component.pokemon).toBe(pokemon);
    expect(element.querySelector('.card--media__content').innerText)
      .toBe(pokemon.name + ' #' + pokemon.id);
    const imageElement = element.querySelector('.sprite');
    expect(imageElement.classList)
      .toContain('sprite-' + pokemon.id);
  });

});

@Component({
  template: `<app-pokemon-card [pokemon]="pokemon"></app-pokemon-card>`
})
class TestHostComponent {

  pokemon = pokemonData[0];

  @ViewChild(PokemonCardComponent)
  pokemonCard: PokemonCardComponent;

}
