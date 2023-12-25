"use client"
import { RootState } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state:RootState)=> state.cart.items)
  return (
    <nav className="flex justify-between py-5 items-center padding-container bg-white shadow-lg">
        <Link href='/'>
          <Image src="/Pizza.png" width={100} height={50} alt="Pizza" />
        </Link>
        <ul className="flex gap-4 items-center max-md:gap-6">
          <Link href="/cart">
            <div className="relative">
              <Image
                src="/cart-shopping-solid.svg"
                height={30}
                width={30}
                alt="Cart Icon"
              />
              <span className="cart-num_notf top-[-7px] right-[-5px] overflow-hidden">{items.length}</span>
            </div>
          </Link>
          <Link href="/"className="text-gray-700 font-[600] ">Menu</Link>
        </ul>
    </nav>
  );
};

export default Navbar;
