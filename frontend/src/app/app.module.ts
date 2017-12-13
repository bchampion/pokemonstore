import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {PokemonDetailComponent} from "./pokemon-detail/pokemon-detail.component";

@NgModule({
  declarations: [
    AppComponent,
    PokemonDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
