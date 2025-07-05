import { Component, OnInit, inject } from '@angular/core';
import { OcorrenciaService } from '../services/ocorrencia.service';
import { OcorrenciaModel } from './ocorrencia-form/ocorrencia-form';
import { OcorrenciaItem } from './ocorrencia-item/ocorrencia-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ocorrencias',
  standalone: true,
  imports: [CommonModule, OcorrenciaItem],
  templateUrl: './ocorrencias.html',
  styleUrls: ['./ocorrencias.scss']
})
export default class Ocorrencias implements OnInit {
  ocorrenciaService = inject(OcorrenciaService);
  ocorrencias: any[] = [];
  loading = false;
  error: string | null = null;

  ngOnInit() {
    console.log('Componente Ocorrências inicializado');
    this.carregarOcorrencias();
  }

  carregarOcorrencias() {
    console.log('Iniciando carregamento de ocorrências...');
    this.loading = true;
    this.error = null;

    this.ocorrenciaService.get().subscribe({
      next: (data) => {
        console.log('Ocorrências carregadas com sucesso:', data);
        // Se a resposta tem results, usa results, senão usa data diretamente
        this.ocorrencias = data.results || data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erro ao carregar ocorrências:', err);
        this.error = 'Erro ao carregar ocorrências: ' + (err.message || err.error?.message || 'Erro desconhecido');
        this.loading = false;
      }
    });
  }

  formatarData(dataString: string): string {
    if (!dataString) return '-';

    try {
      // Converte a string ISO para Date
      const data = new Date(dataString);

      // Verifica se a data é válida
      if (isNaN(data.getTime())) return dataString;

      // Formata a data como dd/MM/yyyy HH:mm
      const dia = data.getDate().toString().padStart(2, '0');
      const mes = (data.getMonth() + 1).toString().padStart(2, '0');
      const ano = data.getFullYear();
      const hora = data.getHours().toString().padStart(2, '0');
      const minuto = data.getMinutes().toString().padStart(2, '0');

      return `${dia}/${mes}/${ano} ${hora}:${minuto}`;
    } catch (error) {
      console.error('Erro ao formatar data:', error);
      return dataString; // Retorna a string original se houver erro
    }
  }

  adicionarOcorrencia() {
    // Implementar navegação para formulário de adicionar
    console.log('Adicionar ocorrência');
  }

  editarOcorrencia(ocorrencia: any) {
    // Implementar navegação para formulário de editar
    console.log('Editar ocorrência:', ocorrencia);
  }

  excluirOcorrencia(ocorrencia: any) {
    if (confirm('Tem certeza que deseja excluir esta ocorrência?')) {
      // Implementar método delete no serviço se necessário
      console.log('Excluir ocorrência:', ocorrencia);
      // this.ocorrenciaService.delete(ocorrencia.id).subscribe({...});
    }
  }
}
