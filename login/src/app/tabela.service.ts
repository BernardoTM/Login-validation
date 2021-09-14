import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TabelaService {

  private readonly API = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get(this.API);
  }

  create(usuario){
    return this.http.post('http://localhost:3000/addUser/', usuario);

  }
}
