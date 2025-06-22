import { Component, inject } from '@angular/core';
import { OcorrenciaService } from '../services/ocorrencia.service';

@Component({
  selector: 'app-ocorrencias',
  imports: [],
  standalone: true,
  templateUrl: './ocorrencias.html',
  styleUrl: './ocorrencias.scss'
})
export default class Ocorrencias {
  ocorrenciaService = inject(OcorrenciaService);

  /**
   * Realizar implementação da visualização dos cards
   * com os dados da ocorrenciacom dados da API
   */
  constructor() {
    this.ocorrenciaService.get().subscribe((objetos) => {
      console.log(objetos); //TODO
    });
  }
}
