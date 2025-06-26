import { Component, inject } from '@angular/core';
import { OcorrenciaService } from '../services/ocorrencia.service';
import { OcorrenciaModel } from './ocorrencia-form/ocorrencia-form';
import { OcorrenciaItem } from './ocorrencia-item/ocorrencia-item';

@Component({
  selector: 'app-ocorrencias',
  imports: [OcorrenciaItem],
  standalone: true,
  templateUrl: './ocorrencias.html',
  styleUrl: './ocorrencias.scss'
})
export default class Ocorrencias {
  ocorrenciaService = inject(OcorrenciaService);
  ocorrencias: OcorrenciaModel[] = [];

  /**
   * Realizar implementação da visualização dos cards
   * com os dados da ocorrenciacom dados da API
   */
  constructor() {
    this.ocorrenciaService.get().subscribe((ocorrenciasList) => {
      this.ocorrencias = ocorrenciasList;
      console.log(ocorrenciasList); //TODO
    });
  }
}
