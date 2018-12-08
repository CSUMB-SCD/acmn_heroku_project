import { Phone } from "./phone";

export class CartItem {
    phone: Phone;
    buying: number;

    public constructor(phone: Phone, buying: number){
        this.phone = phone;
        this.buying = buying;
    }
  }
  