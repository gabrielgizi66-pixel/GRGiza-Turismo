import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-rodape',
  styleUrl: './rodape.css',
  templateUrl: './rodape.html',
})
export class Rodape {
  anoatual: number = new Date().getFullYear();
}
