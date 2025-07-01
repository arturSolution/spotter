import { Component, inject } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { FuncionarioService } from '../../services/funcionario.service';

export interface FuncionarioModel {
  matricula: string;
  nome: string;
  cpf: string;
  telefone: string;
}

@Component({
  selector: 'app-funcionario-form',
  imports: [SharedModule, NgbDropdownModule],
  templateUrl: './funcionario-form.html',
  styleUrl: './funcionario-form.scss'
})
export default class FuncionarioForm {
  funcionarioService = inject(FuncionarioService);
  funcionario: FuncionarioModel = {
    matricula: '',
    nome: '',
    cpf: '',
    telefone: ''
  };

  salvar() {
    let funcionarioVO = {
      matricula: this.funcionario.matricula,
      nome: this.funcionario.nome,
      cpf: this.funcionario.cpf,
      telefone: this.funcionario.telefone
    };

    this.funcionarioService.insert(funcionarioVO).subscribe((_) => alert('Funcionário cadastrado com sucesso.'));

    console.log(`Funcionário adicionado: ${JSON.stringify(this.funcionario)}`);
  }
}
