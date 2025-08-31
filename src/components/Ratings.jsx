import React, { useState } from 'react'
import Stars from './Stars'

const Ratings = () => {
    const [rating, setRating] = useState(0)

    const handleRating = (starIndex, isLeftHalf) => {
        const newRating = isLeftHalf ? starIndex + 0.5 : starIndex + 1
        setRating(newRating)
    }
  return (
    <div className='flex items-center justify-center min-h-screen'>
        <div className='bg-[#f5ffbe] rounded-xl shadow-xl text-center p-6 sm:p-10 md:p-14 lg:p-18'>
        <h2 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-600 mb-6 sm:mb-8'>Ratings</h2> 
        <div className='flex justify-center mb-4 gap-1 sm:gap-2'>
             {Array.from({ length: 5 },(_, index) => (
                <Stars key={index} index={index} rating={rating} onRatingChange={handleRating} />
             ))}
             </div>
             <p className='text-gray-600'>{rating} out of 5</p>
        </div>
    </div>
  )
}

export default Ratings