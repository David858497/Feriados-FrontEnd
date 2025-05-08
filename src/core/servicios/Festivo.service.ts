import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Festivo } from '../../shared/entidades/Festivo';

@Injectable({
  providedIn: 'root'
})
export class FestivoService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.urlService}Listar/`;
  }
  public ObtenerTodos(): Observable<Festivo[]> {
    return this.http.get<Festivo[]>(`${this.url}ObtenerTodos`);
  }

  public Buscar(Dia: number, Mes: number): Observable<Festivo[]> {
    return this.http.get<Festivo[]>(`${this.url}Buscar/${Dia}/${Mes}`);
  }
}
