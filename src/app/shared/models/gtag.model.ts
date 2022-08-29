interface CardChild {
  item_id: number;
  modifier: string;
  names: string;
  order: number;
  price: number;
}

interface CartPayloadOption {
  item_id: number;
  modifier: string;
  names: string;
  order: number;
  price: number;
}


export interface CartParent {
  name: string;
  price: number;
  product_id: number;
  qty: number;
  size: number;
  type: string;
  cart_options?: CartPayloadOption[];
  children?: CartParent[];
}

const data: CartParent = {
  qty: 1,
  name: 'CartParent',
  type: 'normal',
  size: 1,
  price: 200,
  product_id: 23131,
  children: [

  ]
}
