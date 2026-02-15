import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-thankyou',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './thankyou.component.html'
})

export class ThankyouComponent {

}
