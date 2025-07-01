import { Component, inject } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { VeiculoService } from '../../services/veiculo.service';

export interface VeiculoModel {
  id?: number;
  placa?: string;
  modelo?: string;
  cor?: string;
  tipo: string;
  marca: string;
  matricula: string;
}

@Component({
  selector: 'app-veiculo-form',
  imports: [SharedModule, NgbDropdownModule],
  templateUrl: './veiculo-form.html',
  styleUrl: './veiculo-form.scss'
})
export default class VeiculoForm {
  veiculoService = inject(VeiculoService);
  veiculo: VeiculoModel = {
    id: -1,
    placa: '',
    marca: '',
    modelo: '',
    matricula: '',
    tipo: '',
    cor: ''
  };

  salvar() {
    console.log(`Veículo adicionado: ${JSON.stringify(this.veiculo)}`);
  }
}
