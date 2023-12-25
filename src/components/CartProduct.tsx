"use client";

import Image from "next/image";
import ButtonAmount from "./ButtonAmount";
import { decreaseItem, increaseItem } from "@/redux/features/manageCart";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { CartProductProps } from "@/type";



function CartProduct({ item, func }: CartProductProps) {
    const items = useSelector((state:RootState)=> state.cart.items)
    const dispatch = useDispatch<AppDispatch>()
    const handleDecreaseItemsCountFromCart = ()=>{
        dispatch(decreaseItem(item))
    }
    const handleIncreaseItemsCountFromCart = ()=>{
        dispatch(increaseItem(item))
    }
  return (
    <div
      className="text-gray-700 p-2 rounded-lg shadow-lg flex flex-col gap-3 "
      key={item.proData.id}
    >
      <Image
        src={`/pizza-${item.proData.id}.png`}
        width={200}
        height={100}
        alt={item.proData.name}
        className="bg-gray-200 p-3 transition-all ease-linear rounded-sm hover:bg-white hover:cursor-pointer"
      />
      <div className="font-[500] flex gap-2">
        <h2>{item.proData.name}</h2>
        <p>
          {item.proData.price}
          <b> $</b>
        </p>
      </div>

      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <ButtonAmount content="+" func={handleIncreaseItemsCountFromCart}/>
          <input
            type="text"
            className="w-[40px] border border-[#1e3050] rounded-sm text-lg font-[500] h-[25px] text-center"
            value={item.quantity}
            readOnly
          />
          <ButtonAmount content="-" func={handleDecreaseItemsCountFromCart}/>
        </div>
        <Image
          src="/delete.svg"
          width={25}
          height={25}
          alt="Add to cart"
          className=" right-0 bottom-[-23px] cursor-pointer"
          onClick={func}
        />
      </div>
    </div>
  );
}

export default CartProduct;
