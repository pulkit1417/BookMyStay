import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import WhyChooseCard from './WhyChooseCard'

const WhyChoose = () => {
  return (
    <div className='pt-16 pb-24'>
        <SectionHeading heading="Why Choose Us" about="Discover the reasons why our customers prefer us over others."/>
        <div className='grid w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center mt-20'>
                <WhyChooseCard image="/images/c1.svg" title="Best Price Guarantee" about="Get the best deals on your bookings with our price guarantee."/>
                <WhyChooseCard image="/images/c2.svg" title="Easy & Quick Booking" about="Book your stay with ease and speed using our user-friendly platform."/>
                <WhyChooseCard image="/images/c3.svg" title="Customer Care 24/7" about="Our customer support team is available 24/7 to assist you with any queries."/>
        </div>
    </div>
  )
}

export default WhyChoose