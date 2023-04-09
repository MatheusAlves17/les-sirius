import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  signUpForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthenticationService
  ){

  }
  ngOnInit():void{
    this.signUpForm = this.fb.group({
      name: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      telphone: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
    });
  }

  onSignUp(){
    let { value } = this.signUpForm;
    console.log(`dados: ${this.signUpForm}`);

    console.log();

    this.auth.signUp(this.signUpForm.value).subscribe(result => {
      console.log(`Chegou: ${result}`);
    })
  }

}
