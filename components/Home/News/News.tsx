import React from 'react'
import NewsCard from './NewsCard'
import SectionHeading from '@/components/Helper/SectionHeading'

const News = () => {
    return (
        <div className='pt-16 pb-16'>
            <SectionHeading heading="Exciting Travel News for You" about="Stay updated with the latest travel news and trends." />
            <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg-grid-cols-3 xl:grid-cols-4 gap-10 items-center mt-20'>
                    <NewsCard
                        image="/images/n1.jpg"
                        title="Top 10 place to visit in Australia"
                        date="March 15, 2024"
                    />
                    <NewsCard
                        image="/images/n2.jpg"
                        title="Top 10 place to visit in USA"
                        date="March 20, 2024"
                    />
                    <NewsCard
                        image="/images/n3.jpg"
                        title="Top 10 place to visit in Pakistan"
                        date="April 1, 2024"
                    />
                    <NewsCard
                        image="/images/n4.jpg"
                        title="Top 10 place to visit in India"
                        date="April 10, 2024"
                    />
            </div>
        </div>
    )
}

export default News