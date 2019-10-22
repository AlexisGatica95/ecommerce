import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productos : any [] = [];
  constructor(private productosServices : ProductosService, private router : Router) {console.log ('hola') }

  //el constructos no admite acincronismo
  //el en constructor instanciamos y en el init cargamos los servicios
  async ngOnInit() {
    console.log('init componente homr');
    try {
     console.log('entro al try o ke');
      //cuando cargue quiero que me carge los productos como peticion a nuesto bakend
      let respuesta_server : any = await this.productosServices.getProductos(); //ejecuto todo ese get de base service ,dento de data recivo el return de   esa funcion
      if(respuesta_server.status === 'ok'){
        this.productos = respuesta_server.data;//el primero es la respuesta del servidor, entero
        //el segundo data es el array de productos
        console.log(this.productos);
      } 
    } catch (error) {
      console.log(error)
    }
    

    }
   
    navigate(id : number) {
      //cambia la url
      this.router.navigate(['producto',id])
      
    }
  }


 