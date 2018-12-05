import { PhoneService } from './../phone.service';
import { Component, OnInit } from '@angular/core';
import { Phone } from '../phone';
import { PhoneList } from '../PhoneList';
@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.scss']
})
export class PhonesComponent implements OnInit {

  phones$: PhoneList;
  requestInProgress = true;

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private phoneService: PhoneService) { }

  ngOnInit() {
    this.getPhones();
  }

  getPhones(): void {
    this.phoneService.getPhones().subscribe(
      // tslint:disable-next-line:no-shadowed-variable
      Phone => this.phones$ = Phone
    )
  }
}
