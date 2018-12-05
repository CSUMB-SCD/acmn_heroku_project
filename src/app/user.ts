export class User {
  username: string;
  password: string;
  funds: number;

  public User(username: string, password: string){
    this.username = username;
    this.password = password;
  }
}
