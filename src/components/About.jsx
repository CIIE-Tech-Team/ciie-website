import React from 'react'
import ciie from '../assets/ciie-removebg-preview.png'


const About = () => {
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-2 w-11/12 md:w-4/5 mx-auto gap-4'>
  <div className='flex justify-center items-center'>
    <div className='w-full md:w-4/5 text-center'>
      <img src={ciie} alt="" className='inline' />
    </div>
  </div>
  <div className='flex justify-center items-center'>
    <div className='col-span-1 flex flex-col justify-center'>
    <h1 className='text-blue-800 font-bold my-2 md:text-5xl text-2xl text-center' style={{ color: '#0047AB' }}>Centre for Innovation, Incubation and Entrepreneurship</h1>
    </div>
  </div>
</div>
<div className="border-b-2 border-orange-500 my-4 mx-auto w-16 md:w-32"></div>
    


<div className="mx-auto px-4 md:w-4/5 lg:w-3/5">
 
  <p className="text-lg text-justify leading-7">
  The Centre for Innovation, Incubation and Entrepreneurship (CIIE) is a student organization at SRM University that is dedicated to fostering and nurturing innovative ideas among students. Our mission is to provide a platform for students to explore their entrepreneurial interests, learn from industry experts, and build innovative solutions to real-world problems. We aim to inspire and empower the next generation of entrepreneurs and leaders by promoting creativity, innovation, and collaboration. Join us to unleash your potential and make a positive impact on the world!
  <br/>
  <br/>
  
  </p>
</div>

</>
  
  
  )
}

export default About