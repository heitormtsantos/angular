import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesaparecidosService {
  private apiUrl = 'https://abitus-api.pjc.mt.gov.br/v1/pessoas/aberto/filtro';

  constructor(private http: HttpClient) { }

  getPessoasDesaparecidas(params: any): Observable<any> {
    return this.http.get(`${this.apiUrl}`, { params });
  }
}
