import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent],  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {}
