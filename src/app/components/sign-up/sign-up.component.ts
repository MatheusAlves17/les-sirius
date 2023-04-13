import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SignIn, SignUp } from 'src/app/models/sign-up.model';
import { AuthenticationService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  // signUpForm!: FormGroup;
  // signInForm!: FormGroup;
  onSignInForm: boolean = true;

  signInForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  })

  signInData: SignIn = {
    email: '',
    password: '',
  }

  signUpForm = this.fb.group({
    name: ['', Validators.required],
    CPF: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  })

  signUpData: SignUp = {
    name: '',
    CPF: '',
    phone: '',
    email: '',
    password: '',
  }

  constructor(
    private fb: FormBuilder,
    private auth: AuthenticationService,
    private router: Router,

  ){

  }
  ngOnInit():void{
    // this.signUpForm = new FormGroup({
    //   name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    //   cpf: new FormControl('', [Validators.minLength(11), Validators.maxLength(11), Validators.required]),
    //   emailSignUp: new FormControl('', [Validators.email, Validators.required]),
    //   passwordSignUp: new FormControl('', [Validators.minLength(8), Validators.required]),
    //   telphone: new FormControl('', [Validators.required, Validators.maxLength(11)]),
    // });

    // this.signInForm =  new FormGroup({
    //   emailSignIn: new FormControl('', [Validators.email, Validators.required]),
    //   passwordSignIn: new FormControl('', [Validators.minLength(8), Validators.required]),
    // })
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
    let { value, valid } = this.signUpForm;

    if( valid ){
      this.signUpData.name = value.name;
      this.signUpData.CPF = value.CPF;
      this.signUpData.phone = value.phone;
      this.signUpData.email = value.email;
      this.signUpData.password = value.password;
    }

    this.auth.signUp(this.signUpData).subscribe(result => {
      console.log(`Chegou: ${result}`);
      this.router.navigate(['/profile/123'])
    })
  }


  async onSignIn(){

    const { valid, value } = this.signInForm;

    if( valid ) {

      this.signInData.email = value.email;
      this.signInData.password = value.password;

      await this.auth.signIn(this.signInData).subscribe((data: any) => {
        localStorage.setItem('login', JSON.stringify(data))
        console.log(`login: ${data}`);
        this.router.navigate(['/profile/123'])

      })
    }

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
