import React from "react";

function HeadlineCard() {
  return (
    <>
      <div className="max-w-[1640] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
        {/*card*/}
        <div className="relative rounded-full">
          {/*overlay*/}
          <div className="absolute h-full w-full text-white bg-black/50 rounded-xl">
            <p className=" font-bold text-3xl px-2 pt-3 ">Delious Taste</p>
            <p className="px-2">24/hours Service</p>
            <button className="bg-white text-black mx-2 p-2 absolute bottom-4 rounded-lg">
              Order Now
            </button>
          </div>
          <img
            className="max-h-[160px] md:max-h-[200px] w-full rounded-xl object-cover"
            src={`${process.env.PUBLIC_URL}/images/card-photo-1.avif`}
            alt="/"
          />
        </div>

        {/*card*/}
        <div className="relative rounded-full">
          {/*overlay*/}
          <div className="absolute h-full w-full text-white bg-black/50 rounded-xl">
            <p className=" font-bold text-3xl px-2 pt-3 ">New Resturant</p>
            <p className="px-2">Branches all over country</p>
            <button className="bg-white text-black mx-2 p-2 absolute bottom-4 rounded-lg">
              Order Now
            </button>
          </div>
          <img
            className="max-h-[160px] md:max-h-[200px] w-full rounded-xl object-cover"
            src={`${process.env.PUBLIC_URL}/images/card-photo-2.avif`}
            alt="/"
          />
        </div>

        {/*card*/}
        <div className="relative rounded-full">
          {/*overlay*/}
          <div className="absolute h-full w-full text-white bg-black/50 rounded-xl">
            <p className=" font-bold text-3xl px-2 pt-3 ">All Veriay Available</p>
            <p className="px-2">Fast Delivery</p>
            <button className="bg-white text-black mx-2 p-2 absolute bottom-4 rounded-lg">
              Order Now
            </button>
          </div>
          <img
            className="max-h-[160px] md:max-h-[200px] w-full rounded-xl object-cover"
            src={`${process.env.PUBLIC_URL}/images/card-photo-3.avif`}
            alt="/"
          />
        </div>
      </div>
    </>
  );
}

export default HeadlineCard;
