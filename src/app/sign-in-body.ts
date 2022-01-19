export class SignInBody {
  clientId: string;
  username: string;
  password: string;
  grandType: string;


  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
    this.clientId = "CodeCoach-Dwaynians";
    this.grandType = "password";
  }


}
