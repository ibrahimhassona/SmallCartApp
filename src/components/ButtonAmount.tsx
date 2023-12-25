"use client";

import { ButtonAmountProps } from "@/type"

const ButtonAmount = ({content,func}:ButtonAmountProps) => {
  return (
    <button onClick={func}  className="font-[500] text-[25px] bg-[#1e3050] text-white w-[30px] h-[25px] rounded-sm flex items-center justify-center transition-all ease-in-out hover:bg-[#33548d]">
        {content}
    </button>
  )
}

export default ButtonAmount