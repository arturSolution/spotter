import { Component, OnInit, inject } from '@angular/core';
import { VeiculoItem } from './veiculo-item/veiculo-item';
import { CommonModule } from '@angular/common';
import { VeiculoService } from '../services/veiculo.service';

@Component({
  selector: 'app-veiculos',
  imports: [CommonModule, VeiculoItem],
  standalone: true,
  templateUrl: './veiculos.html',
  styleUrls: ['./veiculos.scss']
})
export default class Veiculos implements OnInit {
  veiculoService = inject(VeiculoService);
  veiculos: any[] = [];
  loading = false;
  error: string | null = null;

  ngOnInit() {
    console.log('Componente Veiculos inicializado');
    this.carregarVeiculos();
  }

  carregarVeiculos() {
    console.log('Iniciando carregamento de veículos...');
    this.loading = true;
    this.error = null;

    this.veiculoService.get().subscribe({
      next: (data) => {
        console.log('Veículos carregados com sucesso:', data);
        this.veiculos = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erro ao carregar veículos:', err);
        this.error = 'Erro ao carregar veículos: ' + (err.message || err.error?.message || 'Erro desconhecido');
        this.loading = false;
      }
    });
  }

  adicionarVeiculo() {
    // Implementar navegação para formulário de adicionar
    console.log('Adicionar veículo');
  }

  editarVeiculo(veiculo: any) {
    // Implementar navegação para formulário de editar
    console.log('Editar veículo:', veiculo);
  }

  excluirVeiculo(veiculo: any) {
    if (confirm('Tem certeza que deseja excluir este veículo?')) {
      // Implementar método delete no serviço se necessário
      console.log('Excluir veículo:', veiculo);
      // this.veiculoService.delete(veiculo.id).subscribe({...});
    }
  }
}
