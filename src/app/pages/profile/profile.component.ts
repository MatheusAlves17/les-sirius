import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackSuccessComponent } from 'src/app/components/snack-success/snack-success.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  personalInformation!: FormGroup;
  durationInSeconds = 1000;


  constructor(
    private location: Location,
    private _snackBar: MatSnackBar
  ){}
  ngOnInit():void{

    let data: string | null = localStorage.getItem('login')
    console.log(`DATA: ${data}`);

    let login = data ? JSON.parse(data) : null;
    console.log(`LOGIN: ${login}`);

    this.location.replaceState(`/profile/${login.user.id}`, '');

    this.personalInformation = new FormGroup({
      id: new FormControl(login.user.id),
      name: new FormControl(login.user.name),
      cpf: new FormControl(login.user.CPF),
      email: new FormControl(login.user.email),
      phone: new FormControl(login.user.phone),

    })
  }

  onUpdate(){
    console.log(`dados: ${this.personalInformation}`);
    console.log('chamou');

    this._snackBar.openFromComponent(SnackSuccessComponent, {
      duration: this.durationInSeconds * 1000,
    });

  }

}
