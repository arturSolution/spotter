import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OcorrenciaModel } from '../ocorrencias/ocorrencia-form/ocorrencia-form';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OcorrenciaService {
  http = inject(HttpClient);

  constructor() {}

  headers = new HttpHeaders({
    'X-Parse-Application-Id': '',
    'X-Parse-REST-API-Key': '',
    'Content-Type': 'application/json'
  });

  public enviarOCR(formData: FormData): Observable<any> {
    // Para multipart/form-data, não devemos definir Content-Type
    // O navegador define automaticamente com boundary
    const headersMultipart = new HttpHeaders({
      'X-Parse-Application-Id': '',
      'X-Parse-REST-API-Key': ''
    });

    return this.http.post(`${environment.apiBackEnd}/ocorrencias/ocr/easyocr`, formData, { headers: headersMultipart });
  }

  public insert(formData: FormData): Observable<any> {
    // Para multipart/form-data, não devemos definir Content-Type
    const headersMultipart = new HttpHeaders({
      'X-Parse-Application-Id': '',
      'X-Parse-REST-API-Key': ''
    });

    return this.http.post(`${environment.apiBackEnd}/ocorrencias/`, formData, { headers: headersMultipart });
  }

  public get(): Observable<any> {
    return this.http.get(`${environment.apiBackEnd}/ocorrencias/`, { headers: this.headers });
  }

  public listarOcorrencias(): Observable<any> {
    return this.http.get(`${environment.apiBackEnd}/ocorrencias/`, { headers: this.headers });
  }

  public getById(id: string): Observable<any> {
    return this.http.get(`${environment.apiBackEnd}/ocorrencias/${id}`, { headers: this.headers });
  }

  public update(id: string, formData: FormData): Observable<any> {
    const headersMultipart = new HttpHeaders({
      'X-Parse-Application-Id': '',
      'X-Parse-REST-API-Key': ''
    });

    return this.http.put(`${environment.apiBackEnd}/ocorrencias/${id}`, formData, { headers: headersMultipart });
  }

  public delete(id: string): Observable<any> {
    return this.http.delete(`${environment.apiBackEnd}/ocorrencias/${id}`, { headers: this.headers });
  }
}
