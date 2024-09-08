import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { CarteiraResponse, SaldoCarteiraResponse } from '../shared/model/response/carteira.response.model';

@Injectable({
  providedIn: 'root'
})
export class CarteiraService {

  constructor(private http: HttpClient) { }

  loadSaldoCarteira():Observable<HttpResponse<SaldoCarteiraResponse>> {
    return this.http.get<any>('/api/carteira/saldo',{observe:'response'});
  }
  loadlAllCarteiras():Observable<HttpResponse<CarteiraResponse[]>> {
    return this.http.get<any>('/api/carteira/listAll', {observe:'response'});
  }

  salvar(request:any):Observable<HttpResponse<any>> {
    return this.http.post<any>('/api/carteira/cadastrar', request, {observe:'response'});
  }
  atualizar(id:number, request:any):Observable<HttpResponse<any>>{
    return this.http.put<any>(`/api/carteira/atualizar/${id}`, request, {observe:'response'})
  }
}
