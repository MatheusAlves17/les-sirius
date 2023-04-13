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

    let data: string | null = localStorage.getItem('login')
    console.log(`DATA: ${data}`);

    let login = data ? JSON.parse(data) : null;
    console.log(`LOGIN: ${login}`);


    this.personalInformation = new FormGroup({
      id: new FormControl(login.user.id),
      name: new FormControl(login.user.name),
      cpf: new FormControl(login.user.CPF),
      email: new FormControl(login.user.email),
      telphone: new FormControl(login.user.telphone),

    })
  }

  onUpdate(){
    console.log(`dados: ${this.personalInformation}`);

  }

}
