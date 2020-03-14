import { FormConnexionComponent } from './form-connexion/form-connexion.component';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { NgModule, Component } from '@angular/core';




const routes: Routes = [
  {path:'login',component: ConnexionComponent}

] 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
