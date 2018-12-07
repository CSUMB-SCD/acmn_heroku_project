import { Phone } from "./phone";

export class CartItem {
    phone: Phone;
    buying: Number;

    public constructor(phone: Phone, buying: Number){
        this.phone = phone;
        this.buying = buying;
    }
  }
  