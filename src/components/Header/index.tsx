import clsx from "clsx";
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Logo from "../../../public/images/header-logo.svg";
import { Notification, Plus, Search } from "../../assets/Icons/Icon";
import { HeaderItems } from "../../utils/header-menu";
import { Modal } from "../common/Modal";

const Header: NextPage = () => {
  const [isOpen, setIsOpen] = useState(0);
  const [langModal, setLangModal] = useState(false);
  const router = useRouter();

  const handleDropdown = (item: any) => {
    setIsOpen(item.id);
    if (isOpen == item.id) {
      setIsOpen(0);
    }
  };
  return (
    <>
      <Modal open={langModal} setOpen={setLangModal}>
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h3>TR</h3>
            <input className="h-4 w-4" type="checkbox" name="" id="" />
          </div>
          <div className="flex justify-between items-center">
            <h3>EN</h3>
            <input className="h-4 w-4" type="checkbox" checked={true} id="" />
          </div>
        </div>
      </Modal>
      <div className="bg-secondary h-16 fixed w-full z-40">
        <div className="container text-white flex items-center justify-between h-full px-10">
          <div className="flex items-center">
            <span className="cursor-pointer" onClick={() => router.push("/")}>
              <Image src={Logo} width={154} height={20} alt="" />
            </span>
            <div>
              <ul className="flex items-center ml-4">
                {HeaderItems.map((item) => (
                  <li
                    onClick={() => handleDropdown(item)}
                    className="relative group px-3 pr-4 text-sm font-medium cursor-pointer"
                    key={item.id}
                  >
                    {item.title}
                    <div
                      className={clsx(
                        "absolute opacity-0 w-[160px] rounded bg-white mt-2 text-black py-2",
                        { "opacity-100": item.id == isOpen },
                        { "pointer-events-none": item.id !== isOpen }
                      )}
                    >
                      {item.items.map((menuItems: any) => (
                        <div
                          onClick={() => router.push(menuItems.path)}
                          key={menuItems.id}
                          className="py-[3px] px-6 hover:bg-[#f8f9fa]"
                        >
                          {menuItems.title}
                        </div>
                      ))}
                    </div>
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
              <li
                onClick={() => setLangModal(true)}
                className="hover:bg-white transition-all hover:text-black text-sm px-1 py-[2px] rounded-sm border border-white cursor-pointer"
              >
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
    </>
  );
};

export default Header;
