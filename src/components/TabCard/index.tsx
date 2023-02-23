import React, { ReactNode, useEffect, useState } from "react";
import clsx from "clsx";

interface ITabCard {
  title: string;
  tabItems?: Array<any>;
  children: ReactNode;
}

const TabCard = (props: ITabCard) => {
  const { title = "Title", tabItems, children } = props;
  const [items, setItems] = useState(tabItems) as any;

  useEffect(() => {
    console.log("değişti", items);
  }, [items]);

  const handleTabItem = (item: any) => {};

  return (
    <div>
      <div className="flex items-center">
        <h1 className="text-xl font-semibold">{title}</h1>
        <div className="flex items-center ml-10">
          {tabItems.map((item: any) => (
            <div
              onClick={() => handleTabItem(item)}
              className={clsx(
                "font-medium text-md mr-5 border-black cursor-pointer",
                { "border-b-4": item.isActive == true },
                { "border-b-4 border-[#fff]": item.isActive == false }
              )}
              key={item.id}
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
      {children}
    </div>
  );
};
export default TabCard;
