import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RaffleListComponent } from "../raffle/raffle-list/raffle-list.component";

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, RaffleListComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  isVisible = false;

  openModal() {
    this.isVisible = true;
  }

  closeModal() {
    this.isVisible = false;
  }
}
