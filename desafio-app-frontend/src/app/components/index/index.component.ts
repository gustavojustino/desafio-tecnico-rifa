import { Component } from '@angular/core';
import { MenuComponent } from "../layouts/menu/menu.component";
import { FooterComponent } from '../layouts/footer/footer.component';
import { BuyRaffleComponent } from '../raffle/buy-raffle/buy-raffle.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [MenuComponent, FooterComponent, BuyRaffleComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

}
