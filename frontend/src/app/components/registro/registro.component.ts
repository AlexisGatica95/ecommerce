import { Component, OnInit } from '@angular/core';

import {FormGroup,FormControl,Validators} from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';
//cada formgroup es un formulario
//cada fomrcontrol es un input

import Swal from 'sweetalert2';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  form : FormGroup;
  
  constructor(private usuariosService : UsuariosService) { }

  ngOnInit() {
    this.form = new FormGroup({
      'nombre' : new FormControl('', [Validators.required, Validators.minLength(5)]),
      //el valor por defecto y los validators

      'mail': new FormControl('', [Validators.required, Validators.email]),
    })
  }

  async registrar() {
    console.log(this.form.value);
    console.log(this.form.get('nombre').status);
    //console.log(this.form.get('nombre'));
    console.log(this.form.get('nombre').touched);

    let post_ok : any  = await this.usuariosService.postUsuario(this.form.value);
    //me da los datos del form especifico que llamo
    if (post_ok.status == "ok" ) {
      Swal.fire({
        position: 'top-end',
        type: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    }
                
  }

}
