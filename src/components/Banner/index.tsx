import Image from "next/image";
import React from "react";
import Banner1 from "../../../public/images/banner.jpeg";

const Banner = () => {
  return (
    <div className="bg-white">
      <div className="container relative test  z-10">
        {/* <div className="bg-black z-10 w-full h-full absolute"></div> */}
        <div className="relative border-red-500 h-[360px] w-full">
          <div className="relative h-full">
            <div className="flex flex-col h-full justify-center p-10">
              <div className="flex flex-col leading-[46px]">
                <h1 className="text-white text-[48px] font-semibold">
                  Welcome.
                </h1>
                <h4 className="text-white text-3xl font-medium">
                  Millions of movies, TV shows and people to discover. Explore
                  now.
                </h4>
              </div>
              <div className="flex bg-white rounded-3xl h-11 overflow-hidden mt-14">
                <input
                  className="w-full h-full pl-6 pr-4 outline-none"
                  type="text"
                  placeholder="Search for a movie, tv show, person......"
                  name=""
                  id=""
                />
                <button className="bg-gradient-to-r from-[#1ed5a9] to-[#64b4e4] rounded-3xl px-6 text-white font-semibold text-sm">
                  Search
                </button>
              </div>
            </div>

            <Image
              className="h-[360px] object-cover absolute top-0 -z-10"
              src={Banner1}
              width={1320}
              height={160}
              alt="banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
