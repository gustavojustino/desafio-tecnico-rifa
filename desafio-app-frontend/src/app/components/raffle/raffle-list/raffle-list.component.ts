import { Component, inject } from '@angular/core';
import { Raffle } from '../../../models/raffle';
import { RaffleService } from '../../../services/raffle.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-raffle-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './raffle-list.component.html',
  styleUrl: './raffle-list.component.css'
})
export class RaffleListComponent {
  list: Raffle[] = [];
  raffleService = inject(RaffleService);

  constructor() {
    this.listAll();
  }

  listAll(){
    this.raffleService.getAllRaffles().subscribe({
      next: list => { // retornar a resposta
        this.list = list;
      },

      error: err => { // retornar qualquer erro do backend (badrequest, exception)
        console.error(err);
        alert(err);
      }
    })
  }
}
