import React from "react";
import { categories } from "../Data/data.js";

function Category() {
  return (
    <>
      <div className="max-w-[1640px] mx-auto px-4 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 p-4 gap-6">
          {categories.map((item) => (
            <div
              key={item.id}
              className=" flex justify-between p-4 items-center rounded-lg cursor-pointer hover:bg-orange-500  bg-[#E5E7EB] "
              
            >
              <div className="font-bold sm:text-xl">{item.name}</div>
              <img className="w-20" src={item.image} alt={item.name} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Category;
