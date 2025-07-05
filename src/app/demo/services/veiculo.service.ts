import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {
  http = inject(HttpClient);
  headers = new HttpHeaders({
    'X-Parse-Application-Id': '',
    'X-Parse-REST-API-Key': '',
    'Content-Type': 'application/json'
  });

  rota = '/veiculos/';

  constructor() {}

  public insert(vo: any): Observable<any> {
    return this.http.post(`${environment.apiBackEnd}${this.rota}`, vo, { headers: this.headers });
  }

  public get(): Observable<any> {
    return this.http.get(`${environment.apiBackEnd}${this.rota}`, { headers: this.headers });
  }

  public listarVeiculos(): Observable<any> {
    return this.http.get(`${environment.apiBackEnd}${this.rota}`, { headers: this.headers });
  }

  public getById(id: string): Observable<any> {
    return this.http.get(`${environment.apiBackEnd}${this.rota}${id}`, { headers: this.headers });
  }

  public update(id: string, vo: any): Observable<any> {
    return this.http.put(`${environment.apiBackEnd}${this.rota}${id}`, vo, { headers: this.headers });
  }

  public delete(id: string): Observable<any> {
    return this.http.delete(`${environment.apiBackEnd}${this.rota}${id}`, { headers: this.headers });
  }
}
