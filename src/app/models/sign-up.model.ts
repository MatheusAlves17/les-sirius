export class SignUp {
  name!:  string | null | undefined;
  CPF!: string | null | undefined;
  phone!: string | null | undefined;
  email!: string | null | undefined;
  password!: string | null | undefined;
}
export class SignIn {
  email!:  string | null | undefined;
  password!:  string | null | undefined;
  remeberMe?: boolean = true;
}
