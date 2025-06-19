import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-ocorrencia-form',
  imports: [SharedModule, NgbDropdownModule],
  standalone: true,
  templateUrl: './ocorrencia-form.html',
  styleUrl: './ocorrencia-form.scss'
})
export default class OcorrenciaForm {


  //https://parallelum.com.br/fipe/api/v1/carros/marcas apis para obter as marcas de carro

  //https://parallelum.com.br/fipe/api/v1/carros/marcas/{codigoMarca}/modelos apis para obter todos os modelos de carro
}
