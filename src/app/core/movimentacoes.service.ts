import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovimentacoesResponse } from '../shared/model/response/movimentacoes.response.model';

@Injectable({
  providedIn: 'root'
})
export class MovimentacoesService {

  constructor(private http:HttpClient) { }

  gerarMovimentacao(request:any):Observable<HttpResponse<any>> {
    return this.http.post<any>(`/api/movimentacoes/gerar/movimentacao/${request.idCarteira}`, request, {observe:'response'})
  }

  carregarMovimentacoesbyCarteira(id:number):Observable<HttpResponse<MovimentacoesResponse[]>> {
    return this.http.get<any>(`/api/movimentacoes/carteira/${id}`, {observe:'response'});
  }
  carregarMovimentacoesByCarteiraAndData(id:number, periodo:Array<Date>):Observable<HttpResponse<MovimentacoesResponse[]>>{
    let params = new HttpParams();
    periodo.forEach(data=>{
      params = params.append("periodo", data.toISOString().split('T')[0]);
    });
    return this.http.get<any>(`/api/movimentacoes/carteira/data/${id}`, {observe:'response', params:params});
  }
}
