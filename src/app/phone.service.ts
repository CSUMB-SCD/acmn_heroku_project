import { Injectable } from '@angular/core';
import { Phone } from './phone';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PhoneList } from './PhoneList';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private http: HttpClient) { }

  getPhones(): Observable<PhoneList>{
    return this.http.get<PhoneList>('https://freedomphones-db-microservice.herokuapp.com/allPhones');
  }

   getPhone(id) : Observable<Phone>{
    return this.http.get<Phone>('https://freedomphones-zuul-svc.herokuapp.com/phone-service/findById/' + id);
  }
}
