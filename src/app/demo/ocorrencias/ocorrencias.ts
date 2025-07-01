import { Component, inject } from '@angular/core';
import { OcorrenciaService } from '../services/ocorrencia.service';
import { OcorrenciaModel } from './ocorrencia-form/ocorrencia-form';
import { OcorrenciaItem } from './ocorrencia-item/ocorrencia-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ocorrencias',
  standalone: true,
  imports: [CommonModule, OcorrenciaItem],
  templateUrl: './ocorrencias.html',
  styleUrls: ['./ocorrencias.scss'] // ✅ corrigido aqui
})
export default class Ocorrencias {
  ocorrenciaService = inject(OcorrenciaService);
  ocorrencias: OcorrenciaModel[] = []; // opcional: tipar corretamente

  constructor() {
    this.ocorrenciaService.get().subscribe((ocorrenciasList) => {
      this.ocorrencias = ocorrenciasList.results;
      console.log(ocorrenciasList); // TODO
    });
  }
}
