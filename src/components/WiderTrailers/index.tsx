import Image from "next/image";
import React from "react";
import TrailerBG from "../../../public/images/trailer-bg.jpeg";
import CategoryBar from "../common/CategoryBar";
import TrailerCard from "../common/TrailerCard";

const WiderTrailers = () => {
  const trendPaths = [
    {
      id: 1,
      title: "Streaming",
      isActive: true,
    },
    {
      id: 2,
      title: "On TV",
      isActive: false,
    },
    {
      id: 3,
      title: "For Rent",
      isActive: false,
    },
    {
      id: 4,
      title: "In Theaters",
      isActive: false,
    },
  ];

  return (
    <div className="bg-white">
      <section className="relative container h-[378px] z-10">
        <div className="h-full">
          <Image
            className="absolute object-cover h-[378px] -z-20"
            src={TrailerBG}
            width={1510}
            height={578}
            alt=""
          />
          <div className="absolute bg-[#032541bf] -z-10 w-full h-full" />
          <div className="pt-[30px] h-full overflow-x-auto">
            <CategoryBar light title="Latest Trailers" path={trendPaths} />
            <div className="flex items-center gap-x-5 mx-10 h-[250px] mt-2">
              <TrailerCard />
              <TrailerCard />
              <TrailerCard />
              <TrailerCard />
              <TrailerCard />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WiderTrailers;
