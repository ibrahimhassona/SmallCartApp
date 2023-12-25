"use client";

import { useDispatch, useSelector } from "react-redux";
import data from "../../data.json";
import Item from "./Item";
import { AppDispatch, RootState } from "@/redux/store";
import { addItem } from "@/redux/features/manageCart";
const Menu = () => {
  const dispatch = useDispatch<AppDispatch>();
  const items = useSelector((state: RootState) => state.cart.items);

  return (
    <>
      <h1 className="font-bold text-center my-5 text-2xl  text-gray-700">
        Menu List
      </h1>
      <div className="flex flex-wrap gap-5 py-5 justify-center items-center">
        {data.map((product) => (
          <Item
            proData={product}
            addItemToCart={() => {
              dispatch(addItem({ proData: product, quantity: 1 }));
            }}
            key={product.id}
          />
        ))}
      </div>
    </>
  );
};

export default Menu;
