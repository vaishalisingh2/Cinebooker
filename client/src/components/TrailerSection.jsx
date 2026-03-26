import React, { useState } from 'react'
import { dummyTrailers } from '../assets/assets';
import BlurCircle from './BlurCircle';

const TrailerSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);

  const getYouTubeId = (url) => {
    return url.split('v=')[1];
  }

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden'>
      <p className='text-gray-300 font-medium text-lg max-w-[960px] mx-auto'>
        Trailers
      </p>

      <div className='relative mt-6'>
        <BlurCircle top='-100px' right='-100px' />
        
        <iframe
          src={`https://www.youtube.com/embed/${getYouTubeId(currentTrailer.videoUrl)}`}
          className='mx-auto max-w-full rounded-xl'
          width='960'
          height='540'
          allowFullScreen
          allow='accelerometer; autoplay; clipboard-write; 
          encrypted-media; gyroscope; picture-in-picture'
        />
      </div>
      
      <div className='flex gap-3 mt-6 max-w-[960px] mx-auto overflow-x-auto pb-2'>
        {dummyTrailers.map((trailer, index) => (
          <img
            key={index}
            src={trailer.image}
            onClick={() => setCurrentTrailer(trailer)}
            className={`w-40 h-24 object-cover rounded-lg cursor-pointer 
            flex-shrink-0 transition duration-300
            ${currentTrailer.videoUrl === trailer.videoUrl
              ? 'border-2 border-primary opacity-100'
              : 'opacity-50 hover:opacity-100'
            }`}
          />
        ))}
      </div>

    </div>
  );
}

export default TrailerSection;