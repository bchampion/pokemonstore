import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {PokemonDetailComponent} from './pokemon-detail/pokemon-detail.component';
import {PokemonCardComponent} from './pokemon-card/pokemon-card.component';
import {PokemonListComponent} from './pokemon-list/pokemon-list.component';
import {Route, RouterModule} from '@angular/router';
import {URIS} from "./shared/uris";

export const routes: Route[] = [
  { path: '', redirectTo: URIS.POKEMON_LIST, pathMatch: 'full'},
  { path: URIS.POKEMON_LIST, component: PokemonListComponent },
  { path: URIS.POKEMON_DETAIL, component: PokemonDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PokemonDetailComponent,
    PokemonCardComponent,
    PokemonListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
