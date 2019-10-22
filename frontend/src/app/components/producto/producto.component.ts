import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  id_producto : any;
  producto : any [] = [];

  //defino un ambito privado , solo los elementos dentro de la clase producto pueden acceder a la clase productoService
  //las instancias de clase se crean dentro del constructor
  
  constructor(private productosService : ProductosService, private activatedRoute : ActivatedRoute , private router : Router) { }
  
  //router lo redirijo a una ruta especifica
  //activateroute detecto en que ruta esta prado el usuario

  async ngOnInit() {

    //observables= snapshot: me mantiene al tanto de los cambios
    //me da toda la info de la ruta que se solicito
    this.id_producto = this.activatedRoute.snapshot.params.id;
  

    //digo de que servicio lo importo y luego llamo a la funcion
    let respuesta_serve = await this.productosService.getProducto(this.id_producto);
    console.log(respuesta_serve);
  }

}
