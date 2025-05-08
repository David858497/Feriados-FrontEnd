import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { FestivoDTO } from '../../shared/entidades/FestivoDTO';

@Injectable({
  providedIn: 'root'
})
export class FestivoDTOService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.urlService}Verificar/`;
  }

  public ObtenerTodos(): Observable<FestivoDTO[]> {
    return this.http.get<FestivoDTO[]>(`${this.url}ObtenerTodos`);
  }

  public Buscar(Dia: number, Mes: number): Observable<FestivoDTO[]> {
    return this.http.get<FestivoDTO[]>(`${this.url}Buscar/${Dia}/${Mes}`);
  }
}