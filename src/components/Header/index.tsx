import React from "react";
import type { NextPage } from "next";
import Logo from "../../../public/images/header-logo.svg";
import Image from "next/image";
import { HeaderItems } from "../../utils/header-menu";
import { Notification, Plus, Search } from "../../assets/Icons/Icon";

const Header: NextPage = () => {
  return (
    <div className="bg-secondary h-16">
      <div className="container text-white flex items-center justify-between h-full px-10">
        <div className="flex items-center">
          <Image src={Logo} width={154} height={20} alt="" />
          <div>
            <ul className="flex items-center ml-4">
              {HeaderItems.map((item) => (
                <li className="px-3 pr-4 text-sm font-medium" key={item.id}>
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <ul className="flex items-center gap-x-7">
            <li className="w-[22px] h-[22px] cursor-pointer">
              <Plus color={"#000"} />
            </li>
            <li className="hover:bg-white transition-all hover:text-black text-sm px-1 py-[2px] rounded-sm border border-white cursor-pointer">
              EN
            </li>
            <li className="relative w-[22px] h-[22px] cursor-pointer">
              <Notification color={"#fff"} />
              <div className="center absolute bg-red-600 w-[15px] h-[15px] rounded-full -top-1 -right-2 text-[9px]">
                1
              </div>
            </li>
            <li className="h-8 w-8 rounded-full bg-cyan-400 flex items-center justify-center text-sm cursor-pointer">
              Y
            </li>
            <li className="w-7 h-7">
              <Search color="#01B4E4" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
