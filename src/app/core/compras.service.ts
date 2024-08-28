import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  constructor(private http: HttpClient) { }
  cadastrarCompra(request: any): Observable<HttpResponse<any>> {
    return this.http.post<any>('/api/compra/cadastrar', request, { observe: 'response' });
  }
}
