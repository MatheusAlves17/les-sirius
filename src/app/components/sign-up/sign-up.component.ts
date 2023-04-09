import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  signUpForm!: FormGroup;
  signInForm!: FormGroup;
  onSignInForm: boolean = true;

  constructor(
    private fb: FormBuilder,
    private auth: AuthenticationService
  ){

  }
  ngOnInit():void{
    this.signUpForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      cpf: new FormControl('', [Validators.minLength(11), Validators.maxLength(11), Validators.required]),
      emailSignUp: new FormControl('', [Validators.email, Validators.required]),
      passwordSignUp: new FormControl('', [Validators.minLength(8), Validators.required]),
      telphone: new FormControl('', [Validators.required, Validators.maxLength(11)]),
    });

    this.signInForm =  new FormGroup({
      emailSignIn: new FormControl('', [Validators.email, Validators.required]),
      passwordSignIn: new FormControl('', [Validators.minLength(8), Validators.required]),
    })
  }

  showForm(){
    if(this.onSignInForm){
      this.onSignInForm = false
    }
    else{
      this.onSignInForm = true
    }
  }

  onSignUp(){
    let { value } = this.signUpForm;
    console.log(`dadossss: ${this.signUpForm}`);

    console.log();

    this.auth.signUp(this.signUpForm.value).subscribe(result => {
      console.log(`Chegou: ${result}`);
    })
  }


  onSignIn(){
    let { value, validator } = this.signInForm;
    console.log(`dados: ${this.signInForm}`);

  }

  // - Validações

  // --- SingIn
  get name(){
    return this.signUpForm.get('name')!;
  }
  get cpf(){
    return this.signUpForm.get('cpf')!;
  }
  get telphone(){
    return this.signUpForm.get('telphone')!;
  }
  get emailSignUp(){
    return this.signUpForm.get('emailSignUp')!;
  }
  get passwordSignUp(){
    return this.signUpForm.get('passwordSignUp')!;
  }


  get emailSignIn(){
    return this.signInForm.get('emailSignIn')!;
  }
  get passwordSignIn(){
    return this.signInForm.get('passwordSignIn')!;
  }

}
