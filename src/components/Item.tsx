"use client";

import Image from "next/image";
import React, { useState } from "react";
import ButtonAmount from "./ButtonAmount";
import { ItemProps, proData } from "@/type";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { decreaseItem, increaseItem } from "@/redux/features/manageCart";

const Item: React.FC<ItemProps> = ({ proData, addItemToCart }) => {
  const [value, setValue] = useState(1);
  const dispatch = useDispatch<AppDispatch>();
  const arrayOfItems = useSelector((state: RootState) => state.cart.items);
  const addAmount = () => {
    dispatch(increaseItem({ proData }));
    const isExist = arrayOfItems.findIndex(
      (item) => item.proData.id == proData.id
    );
    isExist >= 0
      ? setValue(arrayOfItems[isExist].quantity + 1)
      : alert("Click on the cart button in first");
  };
  const lessAmount = () => {
    dispatch(decreaseItem({ proData }));
    const isExist = arrayOfItems.findIndex(
      (item) => item.proData.id == proData.id
    );
    isExist >= 0
      ? setValue(arrayOfItems[isExist].quantity - 1)
      : alert("Click on the cart button in first");
  };

  return (
    <div className="text-gray-700 p-2 rounded-lg shadow-lg flex flex-col gap-3 justify-center">
      <Image
        src={`/pizza-${proData.id}.png`}
        width={200}
        height={100}
        alt={proData.name}
        className="bg-gray-200 p-3 transition-all ease-linear rounded-sm hover:bg-white hover:cursor-pointer"
      />
      <div className="font-[500] flex gap-2">
        <h2>{proData.name}</h2>
        <p>
          {proData.price}
          <b> $</b>
        </p>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <ButtonAmount content="+" func={addAmount} />
          <input
            type="text"
            className="w-[40px] border border-[#1e3050] rounded-sm text-lg font-[500] h-[25px] text-center"
            value={value}
            readOnly
          />
          <ButtonAmount content="-" func={lessAmount} />
        </div>
        <Image
          src="/cart-plus-solid.svg"
          width={30}
          height={30}
          alt="Add to cart"
          className=" right-0 bottom-[-23px] cursor-pointer"
          onClick={addItemToCart}
        />
      </div>
    </div>
  );
};

export default Item;
