import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { ProductoComponent } from 'src/app/components/producto/producto.component';
import { RegistroComponent } from 'src/app/components/registro/registro.component';
import { LoginComponent } from 'src/app/components/login/login.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'producto/:id', component : ProductoComponent},
  
  {path: 'registro',component : RegistroComponent},
  {path: 'login', component: LoginComponent},

  {path: '**',redirectTo:'home'}//esto no va al final sino me manda al home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }