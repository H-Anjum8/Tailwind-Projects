import React from 'react'

function Hero() {
  return (
    <>
    <div className='max-w-[1640] mx-auto  p-4'>
      <div className='relative max-h-[500px]'>
         {/* Overlay */}
       <div className='absolute max-h-[500px] text-gray-200 bg-black/40 w-full h-full flex flex-col justify-center'>
       <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> The Best <span className='text-orange-500'>Rice</span></h1>
       <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'><span className='text-orange-500' >Food</span> Delivered</h1>
       </div>
       <img className='w-full max-h-[500px] object-cover' src={`${process.env.PUBLIC_URL}/images/Cover-mage.avif`} alt='/' />
      </div>
    </div>
   
    </>
  )
}

export default Hero