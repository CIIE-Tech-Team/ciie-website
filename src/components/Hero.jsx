import React from 'react'

const Hero = () => {
  return (
    <div className='w-screen h-screen flex flex-col md:flex-row'>
      <div className='w-full h-full m-10 md:m-20 flex-wrap  '>
         <h1 className='md:text-5xl text-2xl flex align-text-top justify-center'>CIIE - Center for Innovation, Incubation and Entrepreneurship</h1>
         <p className='italic md:mt-[10%] md:text-4xl text-xl'>SRM University, Delhi-NCR, Sonepat</p>
      </div>
      <div className='md:m-20'>
         <img src="src\assets\ciiewhite.jpg" alt="ciie" />
      </div>
    </div>
  )
}

export default Hero