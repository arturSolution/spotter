import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  http = inject(HttpClient);
  headers = new HttpHeaders({
    'X-Parse-Application-Id': '',
    'X-Parse-REST-API-Key': '',
    'Content-Type': 'application/json'
  });

  rota = '/funcionarios/';

  constructor() {}

  public insert(vo: any): Observable<any> {
    return this.http.post(`${environment.apiBackEnd}${this.rota}`, vo, { headers: this.headers });
  }

  public get(): Observable<any> {
    return this.http.get(`${environment.apiBackEnd}${this.rota}`);
  }
}
