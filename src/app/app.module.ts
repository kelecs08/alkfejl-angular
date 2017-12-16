import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiModule } from './modules/ui/ui.module';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material';

import { AppComponent } from './app.component';
import { FilmsComponent } from './components/films/films.component';
import { FilmDetailsComponent } from './components/film-details/film-details.component';
import { FilmService } from './services/film.service';
import { PerformanceService } from './services/performance.service';
import { PerformanceComponent } from './components/performance/performance.component';
import { SeatService } from './services/seat.service';
import { AppRouterModule } from './modules/app-router/app-router.module';
import { AddformComponent } from './components/addform/addform.component';
import { RoomService } from './services/room.service';
import { LoginComponent } from './components/login/login.component';
import { DeleteComponent } from './components/delete/delete.component';
import { BookSeatComponent } from './components/book-seat/book-seat.component';


@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    FilmDetailsComponent,
    PerformanceComponent,
    AddformComponent,
    LoginComponent,
    DeleteComponent,
    BookSeatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouterModule,
    UiModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [FilmService, PerformanceService, SeatService, RoomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
