import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa'


const Stars = () => {
  return (
    <div>
    <div className='flex justify-center items-center gap-2'>
        <FaStar className='w-10 h-10 text-yellow-500' />
        <FaStar className='w-10 h-10 text-yellow-500' />
        <FaStar className='w-10 h-10 text-yellow-500' />
        <FaStar className='w-10 h-10 text-yellow-500' />
        <FaStar className='w-10 h-10 text-yellow-500' />
    </div>
    <p>5 out of 5</p>
    </div>
  )
}

export default Stars