import { Component } from '@angular/core';

export interface Veiculo {
  id?: number;
  placa?: string;
  modelo?: string;
  cor?: string;
  tipo_veiculo: string;
  marca: string;
  matricula: string;
}

@Component({
  selector: 'app-veiculo-form',
  imports: [],
  templateUrl: './veiculo-form.html',
  styleUrl: './veiculo-form.scss'
})
export default class VeiculoForm {}
