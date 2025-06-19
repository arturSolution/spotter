import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Importacao {

  http =inject(HttpClient) 
  

  public importarDados(dadosVeiculo: any): Observable<any> {
    
    return this.http.post('', dadosVeiculo);
  }

  public processarDados(dadosVeiculo: any): Observable<any> {
    
    return this.http.post('', dadosVeiculo);
  }
}
