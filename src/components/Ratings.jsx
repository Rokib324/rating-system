import React from 'react'
import Stars from './Stars'

const Ratings = () => {
  return (
    <div className='flex items-center justify-center min-h-screen'>
        <div className='bg-[#f5ffbe] rounded-xl shadow-xl text-center p-6 sm:p-10 md:p-14 lg:p-18'>
        <h2 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-600 mb-6 sm:mb-8'>Ratings</h2> 
        <div className='flex justify-center mb-4 gap-1 sm:gap-2'> <Stars /> </div>
        </div>
    </div>
  )
}

export default Ratings