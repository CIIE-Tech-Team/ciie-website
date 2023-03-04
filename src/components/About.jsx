import React from 'react'
import ciie from '../assets/ciiewhite.jpg'


const About = () => {
  return (
    <div className='max-w-[1200px] p-2 mx-auto h-screen md:grid grid-cols-2'>
      <div className=' col-span-1 md:w-[80%] text-center'>
         <img src={ciie}  alt="" className='inline'/>
      </div>
      <div className='col-span-1 flex flex-col justify-center'>
         <h1 className='text-violet-600 font-bold my-2 md:text-5xl text-2xl'>Learn, Grow and Build Together.</h1>
         <p className='my-2 mt-3 md:text-2xl text-xl text-justify'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus tempora architecto, veniam sed modi illo delectus maxime eius quibusdam soluta enim, nemo quos facilis assumenda itaque natus ab ut ad.
         </p>
      </div>
      <div className='mb-[50rem] pb-[50rem]'></div>
    </div>
  )
}

export default About