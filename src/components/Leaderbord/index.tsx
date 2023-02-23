import React from "react";

const Leaderbord = () => {
  return (
    <div className="bg-white">
      <section className="container px-10 pb-2 z-10">
        <div className="flex items-center">
          <h1 className="text-2xl">Leaderbord</h1>
          <div className="flex flex-col ml-4">
            <div className="text-sm flex items-center">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#fff] to-[#1ed5a9]" />
              <h2 className="ml-2">All Time Edits</h2>
            </div>
            <div className="text-sm flex items-center">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#fdc170] to-[#d93b63]" />
              <h2 className="ml-2">All Time Edits</h2>
            </div>
          </div>
        </div>
        {/* USERS */}
        <div>
          <div className="grid grid-cols-2 mt-4 gap-4 mb-10">
            {new Array(10).fill(
              <div className="flex">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-red-400 text-white">
                  U
                </div>
                <div className="flex-1 flex-col w-full ml-3">
                  <h1 className="font-semibold">User Name</h1>
                  <div className="flex items-center">
                    <div className="w-[30%] h-2 bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9] rounded-md" />
                    <span className="text-xs font-semibold ml-2">22,032</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-[80%] h-2 bg-gradient-to-r from-[#fdc170] to-[#d93b63] rounded-md" />
                    <span className="text-xs font-semibold ml-2">22,032</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leaderbord;
