import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContasResponse } from '../shared/model/response/contas.response.mode';

@Injectable({
  providedIn: 'root'
})
export class ContasService {

  constructor(private http:HttpClient) { }

  getAllContas():Observable<HttpResponse<ContasResponse[]>>{
    return this.http.get<any>(`/api/contas/all`, {observe:'response'});
  }

  getAllCustoFixo():Observable<HttpResponse<ContasResponse[]>>{
    return this.http.get<any>(`/api/contas/custo/fixo`, {observe:'response'});
  }

}
