import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch,AiOutlineClose, AiFillTag, } from "react-icons/ai";
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends,FaWallet} from 'react-icons/fa'
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs';
import {MdFavorite, MdHelp} from 'react-icons/md'
function NavSection() {
  const [nav, setNav] = useState(false);
  return (
    <>
      <div className="max-w-[1640px] mx-auto p-4 justify-between flex ">
        {/*left side*/}
        <div className="flex items-center justify-between">
          <div onClick={() => setNav(!nav)} className="cursor-pointer">
            <AiOutlineMenu size={30} />
          </div>
          <p className="text-5xl ">
            Best <span className="font-bold">Eats</span>
          </p>
          <div className=" hidden lg:flex ml-2 rounded-full bg-[#E5E7EB] cursor-pointer p-1">
            <div className="bg-black p-2 text-white rounded-full">Delivery</div>
            <div className=" p-2 items-center flex justify-center">Pickup</div>
          </div>
        </div>
        {/*Serach Input*/}
        <div className="w-[200px] rounded-full flex p-2 bg-[#E5E7EB] md:w-[400px] lg:w-[500] items-center justify-center">
          <AiOutlineSearch size={25} />
          <input
            className="bg-transparent w-full focus:outline-none"
            type="text"
            placeholder="Search Food"
          />
        </div>
        {/*right side*/}
        <div className="hidden md:flex rounded-full cursor-pointer text-white bg-black px-4 justify-center items-center">
        <BsFillCartFill size={20} className='mr-2' /> Cart
        </div>
{/*Mobile menu*/}
{/*overlay*/}
{nav ? <div className="fixed bg-black/80 top-0 left-0 w-full h-full z-10"></div>:''}

<div className={nav?'fixed top-0 left-0 w-[300px] z-10 bg-white h-screen duration-300':'fixed top-0 left-[-100%] w-[300px] z-10 h-screen duration-300'}>
     <div className="flex justify-between ml-3">
      <div className="text-3xl">Best Eats</div>
      {/* <div onClick={()=>setNav(!nav)} className="cursor-pointer"> */}
      <AiOutlineClose
            onClick={()=> setNav(!nav)}
          size={30}
          className='absolute right-4 top-4 cursor-pointer'
        />
      {/* </div> */}

     </div>
     <nav>
      <ul className="flex flex-col p-4">
        <li className="text-xl py-2 flex "><TbTruckDelivery size={25} className='mr-4' />
        Orders
        </li>
        <li className="text-xl py-2 flex"><MdFavorite size={25} className='mr-4' />
          Favorites
        </li>
        <li className='text-xl py-4 flex'><FaWallet size={25} className='mr-4' /> Wallet</li>
                <li className='text-xl py-4 flex'><MdHelp size={25} className='mr-4' /> Help</li>
                <li className='text-xl py-4 flex'><AiFillTag size={25} className='mr-4' /> Promotions</li>
                <li className='text-xl py-4 flex'><BsFillSaveFill size={25} className='mr-4' /> Best Ones</li>
                <li className='text-xl py-4 flex'><FaUserFriends size={25} className='mr-4' /> Invite Friends</li>
      </ul>
     </nav>
  
</div>

      </div>
    </>
  );
}

export default NavSection;
