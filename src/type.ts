export interface ButtonAmountProps {
  content: string;
  func?: () => void;
 
}
export interface proData {
  name: string;
  ingredients: string;
  price: number;
  id: number;
}

export interface ItemProps {
  proData: proData;
  addItemToCart: () => void;
}

export interface CartItem {
  proData: proData;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}

export type CartProductProps = {
  item: CartItem;
  func: () => void;
};