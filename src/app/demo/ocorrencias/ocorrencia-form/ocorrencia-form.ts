import { Component, inject } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { DOC_ORIENTATION, NgxImageCompressService } from 'ngx-image-compress';
import { SharedModule } from 'src/app/theme/shared/shared.module';

export interface Foto {
  id?: number;
  nome: string;
  spotId?: number;
  referencia?: boolean;
  sincronizacaoS3?: boolean;
  size?: number;
}

export interface Ocorrencia {
  id?: number;
  placa: string;
  marca?: string;
  modelo?: string;
  cor?: string;
  tipoVeiculo: number;
  foto?: Foto;
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
  imgResultBeforeCompress = '';
  imgResultAfterCompress = '';
  fotos: Foto[] = [];
  ocorrencia: Ocorrencia = {
    id: 0,
    placa: '',
    tipoVeiculo: -1
  };

  //https://parallelum.com.br/fipe/api/v1/carros/marcas apis para obter as marcas de carro

  //https://parallelum.com.br/fipe/api/v1/carros/marcas/{codigoMarca}/modelos apis para obter todos os modelos de carro

  addOcorrencia() {
    // alert('Adicionando ocorrencia');
    console.log(JSON.stringify(this.ocorrencia));
    console.log(JSON.stringify(this.fotos));
  }

  adicionarFoto(event: any) {
    //this.msgErro='';
    for (let i = 0; i < event.target.files.length; i++) {
      const file = event.target.files[i];
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
            this.fotos.push(foto);

            console.warn('Size in bytes is now:', this.imageCompress.byteCount(result));
          });
        };

        reader.onerror = function (error) {
          console.log('Error: ', error);
        };
      } else {
        alert('Foto está acima do limite de 5MB permitida.');
      }
    }
  }

  excluirFoto(dataItem: any) {
    this.fotos = this.fotos.filter((item) => item.nome !== dataItem.nome);
  }
}
