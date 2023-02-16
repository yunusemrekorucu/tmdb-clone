import React from "react";

interface ICategoryBar {
  light?: Boolean;
  title: String;
  path: any;
}

const CategoryBar = (props: ICategoryBar) => {
  const { title, path, light = false } = props;
  return (
    <section className="container px-10">
      <div
        className={
          light
            ? "flex items-center text-white"
            : "flex items-center text-black"
        }
      >
        <h1 className="text-2xl font-medium">{title}</h1>
        <div
          className={
            light
              ? "flex items-center border border-[#1ed5a9] ml-6 rounded-2xl h-[30px] overflow-hidden"
              : "flex items-center border border-black ml-6 rounded-2xl h-[30px] overflow-hidden"
          }
        >
          {path.map((item: any) => (
            <div
              key={item.id}
              className="flex items-center h-full px-5 cursor-pointer rounded-2xl"
            >
              {item.title}
            </div>
          ))}
          <div className=""></div>
        </div>
      </div>
    </section>
  );
};

export default CategoryBar;
