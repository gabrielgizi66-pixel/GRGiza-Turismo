import { Component, Input } from '@angular/core';
import { Vagaturismo } from '../../models/turismo';

@Component({
  imports: [],
  selector: 'app-cad-turismo',
  styleUrl: './cad-turismo.css',
  templateUrl: './cad-turismo.html',
})
export class CardTurismo {
  @Input({required: true}) vagaturismo!: Vagaturismo;

  detalhesVisiveis: boolean = false;
  favorito: boolean = false;
  inscricaoEnviada: boolean = false;

  alterardetalhes(): void { this.detalhesVisiveis = !this.detalhesVisiveis; }

  alterarfavorito(): void { this.favorito = !this.favorito; }

  inscrever(): void {
    if (this.vagaturismo.disponivel) {
      this.inscricaoEnviada = !this.inscricaoEnviada;
    }
  }
}
