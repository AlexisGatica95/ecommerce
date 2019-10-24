import { Component, OnInit } from '@angular/core';

 
import { FormControl,Validators,FormGroup } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


//dentro del constructor coloco los servicios
form: FormGroup;  
constructor(private usuariosServices : UsuariosService) { }

  ngOnInit() {
    this.form = new FormGroup({
      'mail': new FormControl('',[Validators.required]),
      'password' : new FormControl('',[Validators.required])
    })
  }

  async login() {
    let usr_ok = await this.usuariosServices.loginUsuario
    (this.form.value);
    if(usr_ok.status == 'ok') {
    }else {

    }
  }

}
