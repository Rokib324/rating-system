import React from 'react'
import Bg from './components/Bg'
import Ratings from './components/Ratings'

const App = () => {
  return (
    <div className='font-kanit'>
      <Bg />
      <div className='flexitems-center justify-center h-screen'>
      <Ratings />
      </div>
    </div>
  )
}

export default App