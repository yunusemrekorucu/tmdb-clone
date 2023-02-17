import React from "react";
import More from "../../../../public/images/card-more.svg";
import Image from "next/image";
import { RatingCircle } from "./partials/RatingCircle";
import MovieBanner from "../../../../public/images/movie-banner.jpeg";
import { useRouter } from "next/router";

const MovieCard = () => {
  const router = useRouter();
  return (
    <div className="min-w-[150px] min-h-[291px]">
      <div className="relative ">
        <span onClick={() => router.push("/movie/id")}>
          <Image
            className="-z-10 rounded-lg pointer-events-none"
            src={MovieBanner}
            alt=""
          />
        </span>
        <Image
          className="w-6 h-6 opacity-60 top-2 right-2 absolute"
          width={30}
          height={30}
          src={More}
          alt=""
        />
        <RatingCircle />
      </div>
      <div className="pl-2">
        <div className="mt-4 w-4/5 text-tiny font-semibold leading-[18px]">
          Ant-Man and the Wasp: Quantumania
        </div>
        <div className="text-sm font-light text-[#00000099]">Feb 10, 2023</div>
      </div>
    </div>
  );
};

export default MovieCard;
