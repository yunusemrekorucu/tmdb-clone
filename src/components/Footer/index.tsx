import Image from "next/image";
import React from "react";
import Logo from "../../../public/images/logo2.svg";
import {
  theBasics,
  getInvoled,
  community,
  legal,
} from "../../utils/footer-items";

const Footer = () => {
  return (
    <footer className="h-[326px] bg-secondary text-white">
      <div className="container grid grid-cols-5 gap-x-2 md:px-64 py-10 h-full">
        <div className="flex flex-col items-center">
          <Image src={Logo} width={130} height={93} alt="" />
          <div className="mt-12 flex items-center justify-center bg-white rounded-md w-[135px] h-[42px] text-primary text-lg font-semibold px-2">
            Hi ynsemrq!
          </div>
        </div>
        <div className="flex flex-col items-center py-10">
          <div>
            <h1 className="font-semibold text-lg">THE BASICS</h1>
            <ul className="text-base font-light">
              {theBasics.map((item) => (
                <li key={item.id}>{item.title}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center py-10">
          <div>
            <h1 className="font-semibold text-lg">GET INVOLVED</h1>
            <ul className="text-base font-light">
              {getInvoled.map((item) => (
                <li key={item.id}>{item.title}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center py-10">
          <div>
            <h1 className="font-semibold text-lg">COMMUNITY</h1>
            <ul className="text-base font-light">
              {community.map((item) => (
                <li key={item.id}>{item.title}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center py-10">
          <div>
            <h1 className="font-semibold text-lg">LEGAL</h1>
            <ul className="text-base font-light">
              {legal.map((item) => (
                <li key={item.id}>{item.title}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
