import { AppPage } from './app.po';
import {pokemonData} from '../src/app/data/data';
import {TitleCasePipe} from '@angular/common';
import {browser, protractor} from 'protractor';

describe('pokemonstore-ui App', () => {
  let page: AppPage;
  const randomIndex = Math.floor(Math.random() * pokemonData.length);
  const randomPokemon = pokemonData[randomIndex];

  beforeEach(() => {
    page = new AppPage();
  });

  it('should route \'/\' redirect to the route ' + AppPage.getListLink(), () => {
    page.navigateTo('/');
    expect(browser.getCurrentUrl()).toBe(browser.baseUrl + AppPage.getListLink());
    AppPage.saveScreenShot();
  });

  it('should display pokemonList', () => {
    expect(page.getPokemonListTag()).toBeTruthy('PokemonList isn\'t displayed');
    AppPage.saveScreenShot();
  });

  it('should display ' + pokemonData.length + ' pokemons in the list', () => {
    expect(page.getPokemonCardNumber()).toBe(pokemonData.length);
    AppPage.saveScreenShot();
  });

  it('should route to the detail after clicking on a random pokemon detail', () => {
    page.clickOnPokemonCard(randomIndex);
    expect(browser.getCurrentUrl()).toBe(browser.baseUrl + AppPage.getDetailLink(randomPokemon.id));

    const pokemonDetail = page.getPokemonDetailTag();
    expect(pokemonDetail).toBeTruthy('Detail is not displayed');
    if (pokemonDetail) {
      expect(page.getPokemonDetailTitle(pokemonDetail))
        .toBe(new TitleCasePipe().transform(randomPokemon.name) + ' #' + randomPokemon.id);
    }
    AppPage.saveScreenShot();
  });

  it('should route to next pokemon after right arrow keypress', () => {
    browser.actions().sendKeys(protractor.Key.ARROW_RIGHT).perform();
    const pokemon = pokemonData[AppPage.iterateIndex(randomIndex)];
    expect(browser.getCurrentUrl()).toBe(browser.baseUrl + AppPage.getDetailLink(pokemon.id));
    AppPage.saveScreenShot();
  });

  it('should route back to previous pokemon after left arrow keypress', () => {
    browser.actions().sendKeys(protractor.Key.ARROW_LEFT).perform();
    expect(browser.getCurrentUrl()).toBe(browser.baseUrl + AppPage.getDetailLink(randomPokemon.id));
    AppPage.saveScreenShot();
  });

  it('should route back to pokemon list after clicking on Back button', () => {
    page.clickOnBackButton();
    expect(browser.getCurrentUrl()).toBe(browser.baseUrl + AppPage.getListLink());
    AppPage.saveScreenShot();
  });

});


