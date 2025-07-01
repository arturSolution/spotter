import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OcorrenciaModel } from '../ocorrencias/ocorrencia-form/ocorrencia-form';

@Injectable({
  providedIn: 'root'
})
export class OcorrenciaService {
  http = inject(HttpClient);

  constructor() {}

  headers = new HttpHeaders({
    'X-Parse-Application-Id': 'UlpF8UA72zRNnOEIdIq5Vzs1uN7pDwywziD9MhkX',
    'X-Parse-REST-API-Key': 'AkaF48AsT7JxiaNFPpazg0H3vY5WUL8oknxIO5f1',
    'Content-Type': 'application/json'
  });
  public insert(vo: OcorrenciaModel): Observable<any> {
    return this.http.post('http://localhost:5000/', vo, { headers: this.headers });
  }

  public get(): Observable<any> {
    return this.http.get('http://localhost:5000');
  }
}
