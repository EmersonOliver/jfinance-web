import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartaoResponse } from '../shared/model/response/cartao.response.model';
import { FaturaResponse } from '../shared/model/response/fatura.response.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }

  loadAllCards():Observable<HttpResponse<CartaoResponse[]>> {
    return this.http.get<any>('/api/dashboard/loadCards',{observe:'response'});
  }
  carregarFaturaByData(dates:Array<Date>):Observable<HttpResponse<FaturaResponse[]>> {
    let params = new HttpParams();
      const dataInicio = dates[0].toISOString();
      const dataFim = dates[1].toISOString();
      params = params.append('dataInicio', dataInicio).append('dataFim', dataFim); 
    return this.http.get<any>('/api/dashboard/loadFaturasByData',{observe:'response',params:params});
  }
}
