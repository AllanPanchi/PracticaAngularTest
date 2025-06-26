import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Evaluation } from './evaluation/evaluation';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Evaluation],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Practica';
}
