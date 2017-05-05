import { RanksComponent } from './ranks/ranks.component';
import { GamesComponent } from './games/games.component';
import { TypesComponent } from './types/types.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'', pathMatch:'full', redirectTo:'/index'},
  { path: 'index', component: HomeComponent},
  { path: 'types', component: TypesComponent},
  { path: 'games', component: GamesComponent},
  { path: 'ranks', component: RanksComponent},
  { path: '**', redirectTo:'/index'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
