import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http/";
import { Observable } from "rxjs";
import { Incidencia } from "../interfaces/incidencia";


@Injectable({
  providedIn: 'root'
})
export class IncidenciaService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getIncidencias(): Observable<Incidencia[]>{
    return this.http.get<Incidencia[]>(`${this.BASE_URL}/incidencia`);
  }

  getIncidencia(id: string): Observable<Incidencia>{
    return this.http.get<Incidencia>(`${this.BASE_URL}/incidencia/${id}`)
  }

  createIncidencia(incidencia: Incidencia): Observable<Incidencia>{
    return this.http.post<Incidencia>(`${this.BASE_URL}/incidencia/create`,incidencia)
  }

  deleteIncidencia(id: string): Observable<Incidencia> {
    return this.http.delete<Incidencia>(`${this.BASE_URL}/incidencia/delete?incidenciaID=${id}`)
  }

}
