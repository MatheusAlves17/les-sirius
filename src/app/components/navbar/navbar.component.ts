import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';



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
    private fb: FormBuilder,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit():void{
    let storage: string | null = localStorage.getItem('login')

    let userStorage = storage ? JSON.parse(storage) : null

    this.user = userStorage ? userStorage.user : null

    this.user ? this.isAuthenticate = true : this.isAuthenticate = false

    if(this.user){
      this.avatarDefault = this.user.name[0]

    }
  }

  openSingUp() {
    const dialogRef = this.dialog.open(SignUpComponent, {
      minWidth: '400px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  logout(){
    localStorage.removeItem('login')
    this.location.replaceState('/', '');
    this.router.navigate(['/'])
  }

}
