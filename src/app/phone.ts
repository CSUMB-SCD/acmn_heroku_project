export interface Phone {
  name: Name;
  price: Price;
  description: Description;
  picture: Image;
  qty: Quantity;
  id: Id;
}

interface Name{
  name: string;
}
interface Description{
  description: string;
}
interface Price{
  price: number;
}
interface Image{
  lowRes: string;
  highRes: string;
}
interface Quantity{
  quantity: string;
}
interface Id{
  id: string;
}