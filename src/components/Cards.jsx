import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const Cards = () => {
  const photos = [
    {
      url: 'https://via.placeholder.com/800x400/FFC107/000000?text=Photo+1',
    },
    {
      url: 'https://via.placeholder.com/800x400/2196F3/000000?text=Photo+2',
    },
    {
      url: 'https://via.placeholder.com/800x400/4CAF50/000000?text=Photo+3',
    },
    {
      url: 'https://via.placeholder.com/800x400/F44336/000000?text=Photo+4',
    },
    {
      url: 'https://via.placeholder.com/800x400/9C27B0/000000?text=Photo+5',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextPhoto();
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const prevPhoto = () => {
    const isFirstPhoto = currentIndex === 0;
    const newIndex = isFirstPhoto ? photos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextPhoto = () => {
    const isLastPhoto = currentIndex === photos.length - 1;
    const newIndex = isLastPhoto ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToPhoto = (photoIndex) => {
    setCurrentIndex(photoIndex);
  };

  return (
    <div className='relative'>
      <div
        className='flex justify-center items-center h-80'
        style={{ backgroundImage: `url(${photos[currentIndex].url})`, backgroundSize: 'cover' }}
      >
        <div className='absolute inset-0 bg-gradient-to-t from-black opacity-40'></div>
        <div className='absolute bottom-0 left-0 w-full p-4'>
          <h2 className='text-xl font-bold text-white'>{`Photo ${currentIndex + 1}`}</h2>
        </div>
      </div>
      <div className='absolute top-1/2 -mt-4 flex items-center'>
        <button className='text-4xl text-gray-300 hover:text-white' onClick={prevPhoto}>
          <BsChevronCompactLeft />
        </button>
        <div className='mx-4 flex items-center space-x-2'>
          {photos.map((photo, index) => (
            <button
              key={index}
              className={`text-2xl text-gray-300 hover:text-white ${
                index === currentIndex ? 'text-white' : ''
              }`}
              onClick={() => goToPhoto(index)}
            >
              &#8226;
            </button>
          ))}
        </div>
        <button className='text-4xl text-gray-300 hover:text-white' onClick={nextPhoto}>
          <BsChevronCompactRight />
        </button>
      </div>
    </div>
  );
};

export default Cards;
