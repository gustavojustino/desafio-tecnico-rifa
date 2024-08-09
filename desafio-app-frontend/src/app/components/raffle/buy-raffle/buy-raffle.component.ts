import { Component, inject, Input } from '@angular/core';
import { RaffleService } from '../../../services/raffle.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../../modal/modal.component';

@Component({
  selector: 'app-buy-raffle',
  standalone: true,
  imports: [CommonModule, FormsModule, ModalComponent],
  templateUrl: './buy-raffle.component.html',
  styleUrl: './buy-raffle.component.css'
})
export class BuyRaffleComponent {
  quantity: number = 0;
  pricePerRaffle: number = 0.25;
  total: number = 0;
  user!: string;

  raffleService = inject(RaffleService);

  increaseQuantity() {
    this.quantity++;
    this.calculateTotal();
  }

  decreaseQuantity() {
    if (this.quantity > 0) {
      this.quantity--;
      this.calculateTotal();
    }
  }

  setQuantity(amount: number) {
    this.quantity = this.quantity + amount;
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.quantity * this.pricePerRaffle;
  }

  buyRaffle() {
    if (this.quantity > 0) {
      this.raffleService.buyRaffle(this.user).subscribe({
        next: response => {
          alert('Compra realizada com sucesso!');
        },
        error: err => {
          console.error(err);
          alert('Erro ao realizar a compra');
        }
      });
    } else {
      alert('Selecione uma quantidade válida!');
    }
  }
}
