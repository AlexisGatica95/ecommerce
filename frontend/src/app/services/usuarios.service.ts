import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService extends BaseService {

  async postUsuario(obj) {
    try {
      this.setEndPoint('registro');
      return this.post(obj)
    } catch {
      throw error;
    }
  }

//cuando pongo el extens borro el controler

async loginUsuario(obj) {
  try {
    this.setEndPoint('auth/login');
    return this.post(obj);
    
  } catch (error) {
    
  }
}
}
