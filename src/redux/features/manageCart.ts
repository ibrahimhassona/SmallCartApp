import { CartItem, CartState, proData } from "@/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";



const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      const isItemExist = state.items.findIndex(
        (item) => item.proData.id == newItem.proData.id
      );

      if (isItemExist !== -1) {
        // if this item was added before => increase the quantity for it
        state.items[isItemExist].quantity++;
        // alert
        alert(
          `Now your cart have ${state.items[isItemExist].quantity} Of ${state.items[isItemExist].proData.name}`
        );
      } else {
        //  if this is frist time add it to items Array
        state.items.push({ proData: newItem.proData, quantity: 1 });
      }
    },
    increaseItem: (state, action: PayloadAction<{proData:proData}>) => {
      const newItem = action.payload;
      const isItemExist = state.items.findIndex(
        (item) => item.proData.id == newItem.proData.id
      );
      if (isItemExist !== -1) {
        state.items[isItemExist].quantity++;
      }
    },
    decreaseItem: (state, action: PayloadAction<{proData:proData}>) => {
        const newItem = action.payload;
        const isItemExist = state.items.findIndex(
          (item) => item.proData.id == newItem.proData.id
        );
        if (isItemExist !== -1) {
          state.items[isItemExist].quantity--;
        }
    },
    removeFromCart: (state , action : PayloadAction<CartItem>)=>{
      const removeItem = state.items.findIndex((item)=>item.proData.id === action.payload.proData.id)
      if(removeItem != -1){
        state.items.splice(removeItem,1)
      }
    }
  },
});

export const { addItem, increaseItem, decreaseItem,removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
