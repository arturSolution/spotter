import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionarioService } from '../services/funcionario.service';

@Component({
  selector: 'app-funcionarios',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './funcionarios.html',
  styleUrl: './funcionarios.scss'
})
export default class Funcionarios implements OnInit {
  funcionarioService = inject(FuncionarioService);
  funcionarios: any[] = [];
  loading = false;
  error: string | null = null;

  ngOnInit() {
    console.log('Componente Funcionarios inicializado');
    console.log('Environment apiBackEnd:', (window as any)['env']?.apiBackEnd || 'http://localhost:8000');
    this.carregarFuncionarios();
  }

  carregarFuncionarios() {
    console.log('Iniciando carregamento de funcionários...');
    this.loading = true;
    this.error = null;

    this.funcionarioService.listarFuncionarios().subscribe({
      next: (data) => {
        console.log('Funcionários carregados com sucesso:', data);
        this.funcionarios = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erro ao carregar funcionários:', err);
        this.error = 'Erro ao carregar funcionários: ' + (err.message || err.error?.message || 'Erro desconhecido');
        this.loading = false;
      }
    });
  }

  adicionarFuncionario() {
    // Implementar navegação para formulário de adicionar
    console.log('Adicionar funcionário');
  }

  editarFuncionario(funcionario: any) {
    // Implementar navegação para formulário de editar
    console.log('Editar funcionário:', funcionario);
  }

  excluirFuncionario(funcionario: any) {
    if (confirm('Tem certeza que deseja excluir este funcionário?')) {
      this.funcionarioService.delete(funcionario.id).subscribe({
        next: () => {
          this.carregarFuncionarios(); // Recarrega a lista
          console.log('Funcionário excluído com sucesso');
        },
        error: (err) => {
          console.error('Erro ao excluir funcionário:', err);
          alert('Erro ao excluir funcionário');
        }
      });
    }
  }
}
