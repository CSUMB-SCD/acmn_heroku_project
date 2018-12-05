import { PhoneService } from './../phone.service';
import { Component, OnInit } from '@angular/core';
import { PhoneList } from '../PhoneList';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.scss']
})
export class PhonesComponent implements OnInit {

  phones$: PhoneList;
  requestInProgress = true;

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private phoneService: PhoneService, private userService: UserService, private router: Router, private cookieService: CookieService) { }

  ngOnInit() {
    if(!this.cookieService.get("user")){
      this.router.navigate(["/signin"])
    }
    this.getPhones();
  }

  getPhones(): void {
    this.phoneService.getPhones().subscribe(
      // tslint:disable-next-line:no-shadowed-variable
      Phone => this.phones$ = Phone
    )
  }
  addToCart(id: Number): void {
    console.log(id);
  }
}
