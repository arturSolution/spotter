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
      let ocorrenciaVO = {
        placa: this.ocorrencia.placa,
        motivo: this.ocorrencia.motivo,
        file: this.ocorrencia.foto
      };

      console.log(JSON.stringify(ocorrenciaVO));
      this.ocorrenciaService.insert(this.ocorrencia).subscribe((_) => alert('Ocorrência cadastrada com sucesso.'));
      this.novo();
    } else {
      let mensagem = 'Deve existir 1 foto na ocorrência';
      alert(mensagem);
      throw new Error(mensagem);
    }

    // console.log(JSON.stringify(this.fotos));
  }

  adicionarFoto(event: any) {
    // for (let i = 0; i < event.target.files.length; i++) {
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

          const foto: Foto = {
            nome: this.imgResultAfterCompress
          };
          this.ocorrencia.foto = foto.nome;
          //this.fotos.push(foto);

          console.warn('Size in bytes is now:', this.imageCompress.byteCount(result));
        });
      };

      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
    } else {
      alert('Foto está acima do limite de 5MB permitida.');
    }
    // }
  }

  excluirFoto() {
    this.ocorrencia.foto = '';
    // this.fotos = this.fotos.filter((item) => item.nome !== dataItem.nome);
  }
}
