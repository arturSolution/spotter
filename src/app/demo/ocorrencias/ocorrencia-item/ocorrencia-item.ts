import { Component, Input } from '@angular/core';
import { OcorrenciaModel } from '../ocorrencia-form/ocorrencia-form';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ocorrencia-item',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './ocorrencia-item.html',
  styleUrl: './ocorrencia-item.scss'
})
export class OcorrenciaItem {
  @Input('ocorrencia') ocorrencia!: OcorrenciaModel;

  detalhar(ocorrencia: OcorrenciaModel) {
    alert('Ocorrencia');
  }
}
