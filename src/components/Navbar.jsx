import React from 'react'

const Navbar = () => {
  let Links = [
    {name : "Home", link: "/" },
    {name : "About Us", link: "/" },
    {name : "Events", link: "/" },
    {name : "Contact", link: "/" },

  ]
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center text-gray-800'>
          <span>
              <img src="https://thumbs.dreamstime.com/b/tiny-icon-little-211423135.jpg" width={40} alt="" />
          </span>
          CIIE
        </div>
        <ul className='md:flex md:items-center'>
            {
              Links.map( (link) => (
                <li key={Links.name} classNamemd:ml-8 text-xl>
                  <a href={Links.link} className='text-gray-800 hover:text-gray-400 duration-500  '>{Links.name}</a>
                </li>
              ))
            }
        </ul>
      </div>
    </div>
  )
}

export default Navbar