import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { TipoFestivo } from '../../shared/entidades/TipoFestivo';

@Injectable({
  providedIn: 'root'
})
export class TipoFestivoService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.urlService}Tipo/`;
  }

  public ObtenerTodos(): Observable<TipoFestivo[]> {
    return this.http.get<TipoFestivo[]>(`${this.url}ObtenerTodos`);
  }

  public Buscar(Dia: number, Mes: number): Observable<TipoFestivo[]> {
    return this.http.get<TipoFestivo[]>(`${this.url}Buscar/${Dia}/${Mes}`);
  }
}