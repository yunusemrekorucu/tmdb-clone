import React from "react";

export const RatingCircle = () => {
  return (
    <div className="flex items-center justify-center border absolute -bottom-4 left-3 rounded-full w-[34px] h-[34px] bg-[#081c22]">
      <div className="w-full h-full border-2 border-red-500 border-primary absolute rounded-full"></div>
      <span className="text-white text-sm">76 </span>

    </div>
  );
};
