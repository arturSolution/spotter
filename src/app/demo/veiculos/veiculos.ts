import { Component } from '@angular/core';
import { VeiculoItem } from './veiculo-item/veiculo-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-veiculos',
  imports: [CommonModule, VeiculoItem],
  standalone: true,
  templateUrl: './veiculos.html',
  styleUrls: ['./veiculos.scss']
})
export default class Veiculos {}
