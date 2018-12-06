export interface Checkout {
    product: Id;
    quantity: Quantity;
 
  }
  

  interface Quantity{
    quantity: string;
  }
  interface Id{
    id: string;
  }