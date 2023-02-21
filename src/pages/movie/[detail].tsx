import Image from "next/image";
import React from "react";
import Banner from "@/assets/images/detail-banner.jpeg";
import MovieBanner from "@/assets/images/movie-banner.jpeg";
import { Bookmark, Hearth, List, Play, Star } from "@/assets/Icons/Icon";
import { ActorCard } from "@/components";

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
            <div className="ml-10 w-full">
              <div>
                <h1 className="text-4xl">
                  Ant-Man and the Wasp: Quantumania (2023)
                </h1>
                <h6 className="font-light flex items-center">
                  <span className="border px-1 border-[#ffffff99] rounded-sm text-lightGray mr-2 text-sm">
                    PG-13
                  </span>{" "}
                  02/24/2023 (TR) Science Fiction, Adventure, Comedy 2h 5m
                </h6>
              </div>
              <div className="my-6">
                <div className="flex items-center">
                  <div className="center relative w-[64px] h-[64px] bg-[#032541] rounded-full">
                    <div className="absolute w-[90%] h-[90%] border-[3px] border-primary rounded-full" />
                    66%
                  </div>
                  <h4 className="w-[60px] font-semibold ml-3 leading-5">
                    User Score
                  </h4>
                  {/* Action Buttons */}
                  <div className="flex items-center gap-x-5">
                    <div className="center w-12 h-12 rounded-full bg-[#032541]">
                      <List color="#fff" size={18} />
                    </div>
                    <div className="center w-12 h-12 rounded-full bg-[#032541]">
                      <Hearth color="#fff" size={18} />
                    </div>
                    <div className="center w-12 h-12 rounded-full bg-[#032541]">
                      <Bookmark color="#fff" size={18} />
                    </div>
                    <div className="center w-12 h-12 rounded-full bg-[#032541]">
                      <Star color="#fff" size={18} />
                    </div>
                    <div className="flex items-center font-medium">
                      <Play color="#fff" size={21} />
                      <span className="ml-2 text-sm">Play Trailer</span>
                    </div>
                  </div>
                </div>
                {/* Movie Subject */}
                <div className="mt-5">
                  <h6 className="text-sm">
                    Witness the beginning of a new dynasty.
                  </h6>
                  <div>
                    <h2 className="font-medium text-lg my-2">Overview</h2>
                    <p className="text-sm font-light">
                      Super-Hero partners Scott Lang and Hope van Dyne, along
                      with with Hope's parents Janet van Dyne and Hank Pym, and
                      Scott's daughter Cassie Lang, find themselves exploring
                      the Quantum Realm, interacting with strange new creatures
                      and embarking on an adventure that will push them beyond
                      the limits of what they thought possible.
                    </p>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-y-4">
                    {new Array(6).fill(
                      <div>
                        <h2 className="font-semibold text-sm">Stan Lee</h2>
                        <h6 className="font-light text-sm">Characters</h6>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="container">
        <div className="grid grid-cols-5">
          {/* Players */}
          <div className="col-span-4">
            <div>
              <h2>Top Billed Cast</h2>
              <div className="w-full">
                <ActorCard />
              </div>
            </div>
          </div>
          {/* Rigth Bar */}
          <div className="border"></div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
