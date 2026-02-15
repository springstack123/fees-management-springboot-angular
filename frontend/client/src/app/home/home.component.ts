import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../hero/hero.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent, FooterComponent],  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {}
