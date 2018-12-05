import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public cookieService: CookieService, private router : Router) { }

  ngOnInit() {
  }
  logout(){
    this.cookieService.delete("user");
    this.router.navigate(["/SignIn"])
  }
}
