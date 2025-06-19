import { Component, inject } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { Importacao } from '../services/importacao';

@Component({
  selector: 'app-importacao-veiculos',
  standalone: true,
  imports: [SharedModule],  
  templateUrl: './importacao-veiculos.html',
  styleUrls: ['./importacao-veiculos.scss']
})
export default class ImportacaoVeiculos {

  importacaoService =inject(Importacao)
  
  importarDadosVeiculo(){
    console.log('importação de veiculo ocorrido');
  }


  exportarDadosVeiculo(){
    console.log('importação de veiculo ocorrido');
  }


}
