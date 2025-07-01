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
  public insert(vo: any): Observable<any> {
    return this.http.post(`${environment.apiBackEnd}/`, vo, { headers: this.headers });
  }

  public get(): Observable<any> {
    return this.http.get(`${environment.apiBackEnd}`);
  }

  public getById(id: number): Observable<any> {
    return this.http.get(`${environment.apiBackEnd}/${id}`);
  }
}
