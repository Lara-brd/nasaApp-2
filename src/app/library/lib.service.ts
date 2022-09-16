import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Library } from './interfaces/search.interface';

@Injectable({
  providedIn: 'root'
})
export class LibService {

  constructor( private http:HttpClient) {  }

  urlApi:string = 'https://images-api.nasa.gov';

  // https://images-api.nasa.gov/search?q=venus

  getInfoLib(termino:string):Observable<Library>{
    return this.http.get<Library>(`${this.urlApi}/search?q=${termino}`)
  }

}
