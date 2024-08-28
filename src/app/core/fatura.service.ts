import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FaturaResponse } from '../shared/model/response/fatura.response.model';

@Injectable({
  providedIn: 'root'
})
export class FaturaService {

  constructor(private http:HttpClient) { }

  loadFaturaByIdCartao(id:string) :Observable<HttpResponse<FaturaResponse[]>>{
    return this.http.get<any>(`/api/fatura/cartao/${id}`, {observe:'response'});
  }

}
