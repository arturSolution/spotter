import { Component } from '@angular/core';

export interface Funcionario {
  matricula: string;
  nome: string;
  cpf: string;
  telefone: string;
}

@Component({
  selector: 'app-funcionario-form',
  imports: [],
  templateUrl: './funcionario-form.html',
  styleUrl: './funcionario-form.scss'
})
export default class FuncionarioForm {}
