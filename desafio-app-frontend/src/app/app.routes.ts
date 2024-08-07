import { Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { RaffleListComponent } from './components/raffle/raffle-list/raffle-list.component';
import { BuyRaffleComponent } from './components/raffle/buy-raffle/buy-raffle.component';
import { DrawRaffleComponent } from './components/raffle/draw-raffle/draw-raffle.component';
import { RaffleComponent } from './components/raffle/raffle.component';

export const routes: Routes = [
  {path: "", redirectTo:"/index", pathMatch: 'full'},
  {path: "index", component: IndexComponent},

  {path: "raffle", component: RaffleComponent,
    children:[
    {path: "list", component: RaffleListComponent},
    {path: "buy", component: BuyRaffleComponent},
    {path: "draw", component: DrawRaffleComponent}
  ]}
];
