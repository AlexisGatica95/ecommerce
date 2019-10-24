import {environment} from './../../environments/environment';

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BaseService {
  url_server = environment.url_server; 
  endpoint = ""; //va despues de la barra
  constructor(private http : HttpClient) { }

  setEndPoint(endpoint) {
    //defino el endpoin para hacer la peticion al rest
    this.endpoint = endpoint;
  }

  async get() {
    //este metodo devuelve una respuesta que envia al sevidor en formato Json
    try {
      return this.http.get(this.url_server + this.endpoint).toPromise();
    } catch (error) {
      throw error;
    }
  }

  async post(obj) {
    try {
      return this.http.post(this.url_server + this.endpoint + "/" + environment.id_cliente, obj).toPromise();

      
    } catch (error) {
      throw error
    }
  }
  
}
