import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TypesComponent } from './types/types.component';
import { GamesComponent } from './games/games.component';
import { RanksComponent } from './ranks/ranks.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TypesComponent,
    GamesComponent,
    RanksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
