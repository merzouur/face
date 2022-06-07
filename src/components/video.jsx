import React from 'react'
import plus from '../assets/plus.jpg';



const video = () => {
  return (
    

<div className='w-full grid grid-cols-2 sm:grid-cols-12 gap-1 text-center py-11'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={plus} alt='icon html' />
            <p className='my-4'>Plus</p>
          </div>

    </div>
  )
}

export default video