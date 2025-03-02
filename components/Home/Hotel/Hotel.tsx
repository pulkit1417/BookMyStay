import SectionHeading from '@/components/Helper/SectionHeading'
import { hotelsData } from '@/data/Data'
import React from 'react'
import HotelCard from './HotelCard'

const Hotel = () => {
  return (
    <div className='pt-20 pb-20'>
        <SectionHeading heading="Recommended Hotels" about="Find the perfect place to stay during your trip."/>
        <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center mt-16 '>
            {hotelsData.map((hotel, i) => {
                return(
                    <div key={hotel.id} data-aos="fade-right"
                    data-aos-anchor-placement="top-center"
                    data-aos-delay={`${i * 100}`}>
                        <HotelCard hotel={hotel}/>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Hotel