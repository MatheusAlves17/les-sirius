import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  personalInformation!: FormGroup;

  constructor(){}
  ngOnInit():void{
    this.personalInformation = new FormGroup({
      id: new FormControl('1230'),
      name: new FormControl('Eduardo'),
      cpf: new FormControl('123.456.789-89'),
      email: new FormControl('edu.aparecido@email.com'),
      telphone: new FormControl('(11) 94002-8922'),

    })
  }

  onUpdate(){
    console.log(`dados: ${this.personalInformation}`);

  }

}
