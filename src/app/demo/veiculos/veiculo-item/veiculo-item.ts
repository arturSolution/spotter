import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { VeiculoModel } from '../veiculo-form/veiculo-form';

@Component({
  selector: 'app-veiculo-item',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './veiculo-item.html',
  styleUrl: './veiculo-item.scss'
})
export class VeiculoItem {
  @Input('veiculo') veiculo!: VeiculoModel;
  detalhar(veiculo: VeiculoModel) {}
}
