import React, { useState } from "react";
import {data} from '../Data/data.js'

function Food() {
  const [foods, setFoods] = useState(data);
  console.log('foods',data)

  //filter type

  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //filter price

  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.Price === price;
      })
    );
  };

  return (
    <>
      <div className="max-w-[1640px] mx-auto px-4 my-12">
        <h1 className="font-extrabold text-4xl md:text-6xl p-3 text-orange-500 text-center">
          Top Rated Menu Items
        </h1>
        {/*filter row */}
        <div className="flex flex-col lg:flex-row justify-between ">
          {/*filter type*/}
          <div>
            <h1 className=" font-bold">Filter Type</h1>
            <div className="flex  flex-wrap">
              <button
                className="p-2 m-1 bg-white text-orange-500 border-orange-500 border-2 hover:bg-orange-500 hover:text-white "
                onClick={() => setFoods(data)}
              >
                All
              </button>
              <button
                className="p-2 m-1 bg-white text-orange-500 border-orange-500 border-2 hover:bg-orange-500 hover:text-white "
                onClick={() => filterType("Biryani")}
              >
                Biryani
              </button>
              <button
                className="p-2 m-1 bg-white text-orange-500 border-orange-500 border-2 hover:bg-orange-500 hover:text-white "
                onClick={() => filterType("Pulao")}
              >
                Pulao
              </button>
              <button
                className="p-2 m-1 bg-white text-orange-500 border-orange-500 border-2 hover:bg-orange-500 hover:text-white "
                onClick={() => filterType("Sweet Rice")}
              >
                Sweet Rice
              </button>
              <button
                className="p-2 m-1 bg-white text-orange-500 border-orange-500 border-2 hover:bg-orange-500 hover:text-white "
                onClick={() => filterType("Fried Rice")}
              >
                Fried Rice
              </button>
            </div>
          </div>
          {/*filter price*/}
          <div>
            <h1 className="font-bold">Filter Price</h1>
            <div className="flex flex-wrap">
              <button
                className="border-2 border-orange-500 bg-white text-orange-500 p-2 m-1 hover:bg-orange-500 hover:text-white"
                onClick={() => filterPrice("10$")}
              >
                10$
              </button>
              <button
                className="border-2 border-orange-500 bg-white text-orange-500 p-2 m-1 hover:bg-orange-500 hover:text-white"
                onClick={() => filterPrice("20$")}
              >
                20$
              </button>
              <button
                className="border-2 border-orange-500 bg-white text-orange-500 p-2 m-1 hover:bg-orange-500 hover:text-white"
                onClick={() => filterPrice("30$")}
              >
                30$
              </button>
              <button
                className="border-2 border-orange-500 bg-white text-orange-500 p-2 m-1 hover:bg-orange-500 hover:text-white"
                onClick={() => filterPrice("40$")}
              >
                40$
              </button>
            </div>
          </div>
        </div>
        {/*display food*/}
        <div className="grid grid-cols-2 lg:grid-cols-4 pt-4 gap-6">
          {foods.map((data) => (
            <div
              key={data.id}
              className="border shadow-lg rounded-lg hover:scale-105 duration-300"
            >
              <img
                src={data.image}
                alt={data.name}
                className="rounded-lg w-full h-[200px] object-cover "
              />
         <div className="flex justify-between px-2 py-4">
         <p className='font-bold p-2'>{data.name}
         </p>
         <p className="bg-orange-500 text-white p-2 rounded-full">{data.Price}</p>
         </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Food;
