export interface Checkout {
    id: String;
    username: Username;
    items: Map<String, Item>;
  }
  

  interface Quantity{
    quantity: string;
  }
  interface Id{
    id: string;
  }
  interface Username{
    username: String;
  }
  interface Item{
    product: String;
    quantity: Number;
  }
