import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-evaluation',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './evaluation.html',
  styleUrls: ['./evaluation.css']
})
export class Evaluation {

  nombre: string = '';
  nota1: number = 0;
  nota2: number = 0;
  comentarios: string = '';

  constructor() {}

  dado(): boolean{
    const number = Math.floor(Math.random() * 6) + 1;
    return number % 2 === 0; 
  }

}
