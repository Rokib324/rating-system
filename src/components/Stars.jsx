import React from 'react'

const Stars = ({rating, setRating, index}) => {
    const handleRating = () => {
        setRating(index + 1)
    }
    
    return (
        <div>
            <i className={`bx ${rating >= index + 1 ? 'bxs-star' : 'bx-star'} text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-yellow-500`} onClick={handleRating}></i>
        </div>
    )
}

export default Stars