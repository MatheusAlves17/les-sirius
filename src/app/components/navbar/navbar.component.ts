import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  signUpForm: FormGroup | undefined;
  isAuthenticate: boolean = false;
  user!: any;
  avatarDefault: string = '';

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder
  ) {}

  ngOnInit():void{
    let storage: string | null = localStorage.getItem('login')

    this.user = storage ? JSON.parse(storage) : null
    this.user = this.user.user

    this.user ? this.isAuthenticate = true : this.isAuthenticate = false

    this.avatarDefault = this.user.name[0]
  }

  openSingUp() {
    const dialogRef = this.dialog.open(SignUpComponent, {
      minWidth: '400px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
