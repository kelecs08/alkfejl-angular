import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FilmsComponent } from './components/films/films.component';
import { FilmDetailsComponent } from './components/film-details/film-details.component';
import { FilmService } from './services/film.service';


@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    FilmDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
