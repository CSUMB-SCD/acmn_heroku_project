export interface Phone {
  name: String;
  price: number;
  description: String;
  picture: Image;
  qty: number;
  id: String;
}
interface Image{
  lowRes: string;
  highRes: string;
}
