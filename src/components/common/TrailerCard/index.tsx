import Image from "next/image";
import React from "react";
import TrailerBanner from "../../../../public/images/trailer-banner.jpeg";
import PlayIcon from "../../../../public/images/play-icon.svg";

const TrailerCard = () => {
  return (
    <div>
      <div className="group relative flex items-center justify-center w-[315px] h-[176px] hover:scale-[1.04] ease-in-out duration-200 transition-all cursor-pointer">
        <Image
          className="rounded-lg pointer-events-none"
          src={TrailerBanner}
          alt=""
        />
        <div className="absolute text-white group-hover:scale-[1.3] ease-in-out duration-200 transition-all">
          <Image src={PlayIcon} width={60} height={60} alt=""/>
        </div>
      </div>
      <div className="flex flex-col items-center text-white mt-2">
        <h1 className="font-semibold">Big Bet</h1>
        <h2 className="font-light">Season 2 Official Trailer [Subtitled]</h2>
      </div>
    </div>
  );
};

export default TrailerCard;
