import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FuncionarioModel } from '../funcionario-form/funcionario-form';

@Component({
  selector: 'app-funcionario-item',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './funcionario-item.html',
  styleUrl: './funcionario-item.scss'
})
export class FuncionarioItem {
  @Input('funcionario') funcionario!: FuncionarioModel;

  detalhar(funcionario: FuncionarioModel) {
    alert('Funcionário');
  }
}
