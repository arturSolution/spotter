import { Component, inject } from '@angular/core';
import { VeiculoItem } from './veiculo-item/veiculo-item';
import { CommonModule } from '@angular/common';
import { VeiculoService } from '../services/veiculo.service';
import { VeiculoModel } from './veiculo-form/veiculo-form';

@Component({
  selector: 'app-veiculos',
  imports: [CommonModule, VeiculoItem],
  standalone: true,
  templateUrl: './veiculos.html',
  styleUrls: ['./veiculos.scss']
})
export default class Veiculos {
  veiculoService = inject(VeiculoService);
  veiculos: VeiculoModel[] = [];

  constructor() {
    this.veiculoService.get().subscribe((list) => {
      this.veiculos = list.results;
      console.log(list); 
    });
  }
}
