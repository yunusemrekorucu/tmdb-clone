import Image from "next/image";
import React from "react";
import Banner from "@/assets/images/detail-banner.jpeg";
import MovieBanner from "@/assets/images/movie-banner.jpeg";

const MovieDetail = () => {
  return (
    <div className="border-3 pt-[64px]">
      <div className="relative h-[510px]">
        <div className="absolute w-[20%] h-full bg-[#1d1d5e] -z-10"></div>
        <Image
          className="absolute right-0 w-[80%] h-full -z-20"
          src={Banner}
          alt=""
        />
        <div className="absolute w-full h-full bg-gradient-to-r from-[#1f1f5e] via-[#20205fd6] to-[#20205fd6] -z-10"></div>
        <div className="flex items-center h-full container z-10 text-white">
          <div className="flex w-full">
            <div className="min-w-[300px] h-[450px] rounded-lg overflow-hidden">
              <Image className="w-full h-full" src={MovieBanner} alt="" />
            </div>
            <div className="border border-white ml-10 w-full">
              <div>
                <h1>Ant-Man and the Wasp: Quantumania (2023)</h1>
                <h6>PG-13 02/24/2023 (TR) Science Fiction, Adventure, Comedy 2h 5m</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details */}
      <div>asşdlkfjasşdl</div>
    </div>
  );
};

export default MovieDetail;
