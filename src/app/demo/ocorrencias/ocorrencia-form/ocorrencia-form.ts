import { Component, inject } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { DOC_ORIENTATION, NgxImageCompressService } from 'ngx-image-compress';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { OcorrenciaService } from '../../services/ocorrencia.service';

export interface Foto {
  id?: number;
  nome: string;
  spotId?: number;
  referencia?: boolean;
  sincronizacaoS3?: boolean;
  size?: number;
}

export interface OcorrenciaModel {
  id?: number;
  data: Date;
  placa: string;
  motivo: string;
  foto: string;
}
@Component({
  selector: 'app-ocorrencia-form',
  imports: [SharedModule, NgbDropdownModule],
  standalone: true,
  templateUrl: './ocorrencia-form.html',
  styleUrl: './ocorrencia-form.scss'
})
export default class OcorrenciaForm {
  imageCompress = inject(NgxImageCompressService);
  ocorrenciaService = inject(OcorrenciaService);
  imgResultBeforeCompress = '';
  imgResultAfterCompress = '';
  ocrLoading = false; // Estado de loading do OCR
  ocorrencia: OcorrenciaModel = {
    id: 0,
    data: new Date(),
    placa: '',
    motivo: '',
    foto: ''
  };
  constructor() {
    this.novo();
  }

  novo() {
    this.ocorrencia = {
      id: 0,
      data: new Date(),
      placa: '',
      motivo: '',
      foto: ''
    };
  }

  salvar() {
    if (this.ocorrencia.foto) {
      // Cria FormData para envio multipart/form-data
      const formData = new FormData();

      // Converte a foto base64 para Blob
      const base64String = this.ocorrencia.foto.includes(',') ? this.ocorrencia.foto.split(',')[1] : this.ocorrencia.foto;

      const byteCharacters = atob(base64String);
      const byteNumbers = new Array(byteCharacters.length);

      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: 'image/jpeg' });

      // Adiciona os campos no FormData
      formData.append('file', blob, 'ocorrencia.jpg');
      formData.append('placa', this.ocorrencia.placa);
      formData.append('motivo', this.ocorrencia.motivo);

      console.log('Enviando ocorrência:', {
        placa: this.ocorrencia.placa,
        motivo: this.ocorrencia.motivo,
        foto: 'blob anexado'
      });

      this.ocorrenciaService.insert(formData).subscribe({
        next: (response) => {
          console.log('Ocorrência salva com sucesso:', response);
          alert('Ocorrência cadastrada com sucesso.');
          this.novo();
        },
        error: (error) => {
          console.error('Erro ao salvar ocorrência:', error);
          alert('Erro ao cadastrar ocorrência. Tente novamente.');
        }
      });
    } else {
      let mensagem = 'Deve existir 1 foto na ocorrência';
      alert(mensagem);
      throw new Error(mensagem);
    }
  }

  adicionarFoto(event: any) {
    const file = event.target.files[0];
    console.clear();
    console.log(file);

    if (file.size < 5000000) {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        console.log(reader);
        const fotoBase64 = reader.result + '';

        this.imageCompress.compressFile(fotoBase64, DOC_ORIENTATION.Default, 50, 50).then((result) => {
          this.imgResultAfterCompress = result;
          console.log(result);

          const foto: Foto = {
            nome: this.imgResultAfterCompress
          };
          this.ocorrencia.foto = foto.nome;

          // Chama o OCR automaticamente após carregar a foto
          this.processarOCR(file);
        });
      };

      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
    } else {
      alert('Foto está acima do limite de 5MB permitida.');
    }
  }

  processarOCR(file: File) {
    console.log('Processando OCR...');

    // Ativa o loading
    this.ocrLoading = true;

    // Cria FormData para envio multipart/form-data
    const formData = new FormData();
    formData.append('file', file);

    this.ocorrenciaService.enviarOCR(formData).subscribe({
      next: (response) => {
        console.log('Resposta do OCR:', response);

        // Extrai a placa detectada da resposta e coloca no campo placa
        if (response && response.placa_detectada) {
          // Limpa a placa: remove espaços, caracteres especiais, mantém apenas letras e números
          const placaLimpa = response.placa_detectada
            .replace(/[^a-zA-Z0-9]/g, '') // Remove tudo que não for letra ou número
            .toUpperCase(); // Converte para maiúsculo

          this.ocorrencia.placa = placaLimpa;
          console.log('Placa original:', response.placa_detectada);
          console.log('Placa limpa:', placaLimpa);
        }

        // Desativa o loading
        this.ocrLoading = false;
      },
      error: (error) => {
        console.error('Erro ao processar OCR:', error);

        // Desativa o loading mesmo em caso de erro
        this.ocrLoading = false;

        // Não exibe erro para o usuário, apenas loga no console
        // O usuário pode inserir a placa manualmente se o OCR falhar
      }
    });
  }

  excluirFoto() {
    this.ocorrencia.foto = '';
  }
}
