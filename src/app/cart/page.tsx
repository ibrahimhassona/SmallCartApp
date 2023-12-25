"use client";

import { removeFromCart } from "@/redux/features/manageCart";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { CartProduct } from "..";

const cart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const items = useSelector((state: RootState) => state.cart.items);
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    const value: number = items[i].proData.price * items[i].quantity;
    total += value;
  }
  return (
    <div>
      <h1 className="font-bold text-center my-5 text-2xl  text-gray-700">
        Cart List
      </h1>
      <h2 className=" text-center my-5 text-xl  text-gray-700">
        Total : {total} <b> $</b>
      </h2>
      <div className="flex flex-wrap justify-center items-center">
        {items.map((item) => (
          <CartProduct
            key={item.proData.id}
            item={item}
            func={() => {
              dispatch(removeFromCart(item));
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default cart;
