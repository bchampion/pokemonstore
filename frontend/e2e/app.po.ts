import {browser, by, element, ElementFinder} from 'protractor';
import {promise} from 'selenium-webdriver';
import Promise = promise.Promise;
import 'rxjs/add/operator/map';
import {URIS} from '../src/app/shared/uris';
import {pokemonData} from "../src/app/data/data";

export class AppPage {

  static fileNumber = 1;

  static getListLink(): string {
    return '/' + URIS.POKEMON_LIST;
  }

  static getDetailLink(id: number): string {
    return '/' + URIS.POKEMON_DETAIL.replace(':id', String(id));
  }

  static iterateIndex(index: number): number {
    if (index < pokemonData.length - 1) {
      return index + 1;
    } else {
      return 0;
    }
  }

  private static writeScreenShot(data) {
    if (!fs.existsSync('dist')) {
      fs.mkdirSync('dist');
    }
    if (!fs.existsSync('dist/screenshots')) {
      fs.mkdirSync('dist/screenshots');
    }
    const stream = fs.createWriteStream('dist/screenshots/' + AppPage.fileNumber++ + '.png');
    stream.write(new Buffer(data, 'base64'));
    stream.end();
  }

  static saveScreenShot() {
    browser.takeScreenshot().then(png => AppPage.writeScreenShot(png));
  }

  navigateTo(route: string) {
    return browser.get(route);
  }

  getPokemonListTag() {
    return element(by.css('app-pokemon-list'));
  }

  getPokemonCardNumber(): Promise<number> {
    return element.all(by.css('app-pokemon-card')).count();
  }

  clickOnPokemonCard(index: number) {
    element.all(by.css('app-pokemon-card'))
      .get(index)
      .element(by.css('a'))
      .click();
  }

  getPokemonDetailTag() {
    return element(by.css('app-pokemon-detail'));
  }

  getPokemonDetailTitle(pokemonDetail: ElementFinder) {
    return pokemonDetail.element(by.css('h1')).getText();
  }

  clickOnBackButton() {
    element(by.css('button.return-button')).click();
  }
}

var fs = require('fs');
