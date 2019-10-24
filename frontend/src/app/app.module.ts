import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoComponent } from './components/producto/producto.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductosComponent,
    ProductoComponent,
    RegistroComponent,
    LoginComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
     
    FormsModule,
    ReactiveFormsModule
    //enlaso una funcion que tengo en mi input con una propiedad que tengo en mi ts 
    //REACTIVEFORMSMODULES se puden trabajar los formularios de dos formas una de ellas es un formulario reactivo
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
