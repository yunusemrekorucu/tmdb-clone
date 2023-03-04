import React from "react";
import { RightArrow, SortRightArrow } from "@/assets/Icons/Icon";

const Movie = () => {
  return (
    <section className="pt-[64px] bg-white">
      <div className="container py-8">
        <h1 className="text-2xl font-medium">Popular Movies</h1>
        {/* Filters */}
        <div className="grid grid-cols-5 gap-5 pt-3">
          <div className="">
            <div className="flex items-center justify-between border border-lightGray h-12 w-full rounded-md shadow-md shadow-[#dedede] px-4 mb-3 font-medium">
              <h1>Sort</h1>
              <SortRightArrow color={"#000"} size={18} />
            </div>
            <div className="flex items-center justify-between border border-lightGray h-12 w-full rounded-md shadow-md shadow-[#dedede] px-4 mb-3 font-medium">
              Filters
            </div>
            <div className="flex items-center justify-between border border-lightGray h-12 w-full rounded-md shadow-md shadow-[#dedede] px-4 mb-3 font-medium">
              Where To Watch
            </div>
          </div>
          {/* Movies */}
          <div className="col-span-4 border">movies</div>
        </div>
      </div>
    </section>
  );
};

export default Movie;
