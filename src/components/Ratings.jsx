import React, { useState } from 'react'

const Ratings = () => {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  const handleClick = (value) => {
    setRating(value)
  }

  const handleMouseEnter = (value) => {
    setHover(value)
  }

  const handleMouseLeave = () => {
    setHover(0)
  }

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='text-center border-2 border-gray-300 rounded-lg p-8 shadow-lg bg-white'>
        <h1 className='text-4xl font-bold mb-8'>Rate Your Experience</h1>
        
        <div className='flex items-center justify-center space-x-2 mb-6'>
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => handleClick(star)}
              onMouseEnter={() => handleMouseEnter(star)}
              onMouseLeave={handleMouseLeave}
              className={`text-4xl transition-all duration-200 ${
                star <= (hover || rating)
                  ? 'text-yellow-400 scale-110'
                  : 'text-gray-300 hover:text-yellow-200'
              }`}
            >
              ★
            </button>
          ))}
        </div>

        <div className='text-lg text-gray-600 mb-4'>
          {rating === 0 && 'Click to rate'}
          {rating === 1 && 'Poor'}
          {rating === 2 && 'Fair'}
          {rating === 3 && 'Good'}
          {rating === 4 && 'Very Good'}
          {rating === 5 && 'Excellent!'}
        </div>

        {rating > 0 && (
          <div className='text-sm text-gray-500'>
            You rated: {rating} star{rating > 1 ? 's' : ''}
          </div>
        )}

        {rating > 0 && (
          <button
            onClick={() => setRating(0)}
            className='mt-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors duration-200'
          >
            Reset Rating
          </button>
        )}
      </div>
    </div>
  )
}

export default Ratings