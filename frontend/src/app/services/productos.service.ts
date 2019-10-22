import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

@Injectable({
  providedIn: 'root'
})

export class ProductosService extends BaseService {

  //en el base nos queda instanciado el endpoint

 async getProductos() {
    // /productos
    try {
      this.setEndPoint('productos/1');
      return this.get();
    
    } catch (error) {
    
    }
  }

  getProducto(id) {

   try { // /productos/1
    this.setEndPoint('productos/1/'+id);
    return this.get();

     
   } catch (error) {
     throw error;
   }
  }

}
 