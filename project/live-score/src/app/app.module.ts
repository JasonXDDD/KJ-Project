import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TypesComponent } from './types/types.component';
import { GamesComponent } from './games/games.component';
import { RanksComponent } from './ranks/ranks.component';
import { EventComponent } from './home/event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TypesComponent,
    GamesComponent,
    RanksComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers:[DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
