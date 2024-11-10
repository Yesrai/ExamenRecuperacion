import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from '../models/curso';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private apiUrl='http://localhost:8080/api/curso';
  constructor(private http:HttpClient) { }

  getCursos():Observable<Curso[]>{
    return this.http.get<Curso[]>(this.apiUrl);
  }
}
