import { Component, inject } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { ImportacaoService } from '../services/importacao.service';

@Component({
  selector: 'app-importacao-veiculos',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './importacao-veiculos.html',
  styleUrls: ['./importacao-veiculos.scss']
})
export default class ImportacaoVeiculos {
  importacaoService = inject(ImportacaoService);

  importarDadosVeiculo() {
    console.log('importação de veiculo ocorrido');
  }

  exportarDadosVeiculo() {
    console.log('importação de veiculo ocorrido');
  }
}
