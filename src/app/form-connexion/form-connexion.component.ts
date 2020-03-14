import { AuthentificationService } from './../authentification.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-connexion',
  templateUrl: './form-connexion.component.html',
  styleUrls: ['./form-connexion.component.scss']
})
export class FormConnexionComponent implements OnInit {

formConnexion: FormGroup;
  constructor(private aut:AuthentificationService) { }  

  ngOnInit(){
    this.formConnexion=new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }
  onConnexion(){
    console.log(this.formConnexion.value);
     let user={
       username:this.formConnexion.value.username,
       password:this.formConnexion.value.password,
     };
    this.aut.getConnexion(user).subscribe(
      data=>{
        console.log(data);
      }
    )
  }
}
