import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { isNullOrUndefined } from "util";


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }
  headers : HttpHeaders = new HttpHeaders({
    "Content-Tpe": "aplication/json"
  });

  registerUser(name: string, password:string){
    const url_api = ''
  }


}
