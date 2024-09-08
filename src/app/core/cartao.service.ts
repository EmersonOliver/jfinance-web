import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartaoModel } from '../shared/model/request/cartao.model';
import { CartaoResponse } from '../shared/model/response/cartao.response.model';

@Injectable({
  providedIn: 'root'
})
export class CartaoService {
  inativarCartao(id: string):Observable<HttpResponse<any>> {
    return this.http.get<any>(`/api/cartao/inativar/${id}`, {observe:'response'});
  }

  atualizarCartao(id:string, request:any) :Observable<HttpResponse<any>>{
    return this.http.put<any>(`/api/cartao/atualizar/${id}`, request, {observe:'response'});
  }

  constructor(private http:HttpClient) { }

  loadCartaoById(id:string):Observable<HttpResponse<CartaoResponse>>{
    return this.http.get<any>(`/api/cartao/detalhar/${id}`, {observe:'response'});
  }

  listarTodos():Observable<HttpResponse<CartaoResponse[]>>{
    return this.http.get<any>('/api/cartao/listAll', {observe:'response'});
  }
  cadastrarCartao(request:any) :Observable<HttpResponse<any>>{
    return this.http.post<any>('/api/cartao/cadastrar',request);
  }
}
