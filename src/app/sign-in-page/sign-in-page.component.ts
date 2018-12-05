import { Component, OnInit, Input } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';
import { MessageService } from '../message.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent implements OnInit {

  user = new User();
  submitted = false;
  constructor(public userService: UserService, public messageService: MessageService, private router: Router, private cookieService: CookieService) {
   }

  ngOnInit() {
    this.user.username="";
    this.user.password="";
  }
  authUser(){
    this.submitted = true;
    this.userService.authUser(this.user.username).subscribe(
      result => {},
      error => {
        this.messageService.add("Username or Password incorrect")
      },
      () => {
        this.cookieService.set("user", this.user.username)
        this.messageService.clear()
        this.router.navigate(["/phones"])
      }
    );
  }  
}
