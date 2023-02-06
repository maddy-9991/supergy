import React from 'react';
import Image from 'next/image'
import Divider from '@mui/material/Divider';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const AwesomeLink = ({
  imageUrl,
  url,
  title,
  category,
  description,
  id,
}) => {
  const myLoader = ({ src, width, quality }) => {
    return `https://wallbox.com/media_usa/cms/home/${src}?w=${width}&q=${quality || 75}`
  }
  return (
    <div key={id} className="shadow border-2 border-gray-300 w-1/4 h-auto pr-5 rounded-lg mr-10 bg-white">
      <div className="w-full flex justify-center p-1">
        <Image
          loader={myLoader}
          src={'PulsarPlus_Black.png'}
          alt="Picture of the author"
          width={86}
          height={116}
        />
      </div>
      <div className="w-full flex justify-between p-2">
        <span className="text-lg font-bold not-italic">{title}</span>
        <span className="text-lg font-normal not-italic">{description}</span>
      </div>
      <div className="w-full p-">
        <Divider />
      </div>
      <div className="flex p-2">
        <span className="absolute">
          <ArrowForwardIosIcon fontSize="small" sx={{ color: '#A4A6B3' }}/>
        </span>
        <span className="text-lg font-normal not-italic ml-5">Details</span>
      </div>
    </div>
  );
};
