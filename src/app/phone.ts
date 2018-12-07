export interface Phone {
  name: String;
  price: Number;
  description: String;
  picture: Image;
  qty: Number;
  id: String;
}
interface Image{
  lowRes: string;
  highRes: string;
}
