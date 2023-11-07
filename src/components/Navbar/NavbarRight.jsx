import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";

function NavbarRight() {
  return (
    <div className="flex items-center gap-6">
      <div className="relative">
        <input
          placeholder="Search"
          className="text-center py-2 px-10 w-[250px] bg-gray-400 outline-none rounded-full text-white text-[14px] placeholder:text-white placeholder:text-[14px]"
        ></input>
        <AiOutlineSearch size={24} className="absolute text-white right-2 top-[6px]" />
      </div>

      <div className="relative">
        <FaShoppingBag size={30} />
        <div className="absolute bg-red-500 w-[17px] h-[17px] flex justify-center items-center rounded-full text-white text-[12px] top-0 -right-2">
          0
        </div>
      </div>
    </div>
  );
}

export default NavbarRight;
