import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParcelasService {

  constructor(private http:HttpClient) { }

  atualizarParcelas(idParcela:number, situacao:string):Observable<HttpResponse<any>>{
    return this.http.put<any>(`/api/parcelas/atualizar/situacao/${idParcela}`, situacao);
  }
}
