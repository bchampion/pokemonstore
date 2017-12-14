import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {PokemonDetailComponent} from './pokemon/pokemon-detail/pokemon-detail.component';
import {PokemonCardComponent} from './pokemon/pokemon-card/pokemon-card.component';
import {PokemonListComponent} from './pokemon/pokemon-list/pokemon-list.component';
import {Route, RouterModule} from '@angular/router';
import {URIS} from "./shared/uris";
import {InputComponent} from './shared/components/input/input.component';
import {InputDirective} from './shared/components/input/input.directive';
import {FormsModule} from "@angular/forms";
import {ModalComponent} from './shared/components/modal/modal.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

export const routes: Route[] = [
  { path: '', redirectTo: URIS.POKEMON_LIST, pathMatch: 'full'},
  { path: URIS.POKEMON_LIST, component: PokemonListComponent, children: [
    { path: URIS.POKEMON_DETAIL, component: PokemonDetailComponent }
  ]},
];

@NgModule({
  declarations: [
    AppComponent,
    PokemonDetailComponent,
    PokemonCardComponent,
    PokemonListComponent,
    InputComponent,
    InputDirective,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
