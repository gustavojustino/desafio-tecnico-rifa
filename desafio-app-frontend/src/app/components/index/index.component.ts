import { Component } from '@angular/core';
import { MenuComponent } from "../layouts/menu/menu.component";

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

}
