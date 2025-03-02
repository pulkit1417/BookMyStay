import Image from 'next/image';
import React from 'react'

type props = {
    image: string;
    title: string;
    about: string;
}

const WhyChooseCard = ({image, title, about}:props) => {
  return (
    <div>
        <Image src={image} width={70} height={70} alt="image" className='mx-auto'/>
        <h1 className='mt-6 text-center text-gray-900 font-medium text-lg '>{title}</h1>
        <p className='mt-2 text-center text-xs font-medium text-gray-700 '>{about}</p>
    </div>
  )
}

export default WhyChooseCard