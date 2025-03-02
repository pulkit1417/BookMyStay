import SearchBox from '@/components/Helper/SearchBox';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
    return (
        <div className='relative w-full h-[120vh] sm:h-[100vh] z-0'>
            {/* Video background with overlay */}
            <div className='absolute top-0 left-0 w-full h-full bg-gray-800 opacity-70'></div>
            <video src="/images/hero1.mp4" autoPlay muted loop preload="metadata" className='w-full h-full object-cover' />

            {/* Content container */}
            <div className='absolute z-[100] w-full h-full top-0 left-0 flex items-center justify-center'>
                <div className='flex flex-col items-center w-full max-w-7xl px-4'>
                    {/* Hero text */}
                    <div data-aos="fade-up" data-aos-once="true">
                        <h1 className='text-[25px] mb-4 text-center md:text-[35px] lg:text-[45px] tracking-[0.7rem] text-white font-bold uppercase'>
                            Lets Enjoy the Nature
                        </h1>

                        <p className='text-white text-center md:text-base text-lg font-normal [word-spacing:5px] mb-4'>
                            Get the best prices on 2,000,000+ properties worldwide
                        </p>
                    </div>

                    {/* SearchBox component centered */}
                    <div className='w-full flex justify-center'>
                        <SearchBox />
                    </div>

                    {/* Search button centered */}
                    <div className='flex justify-center w-full'>
                        <Link
                            href="#"
                            className='rounded px-14 md:px-28 py-2.5 overflow-hidden group bg-rose-600 relative hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all ease-out duration-300
                            -mt-4'
                        >
                            <span className='absolute right-0 w-8 h-24 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease'></span>
                            <span className='relative font-bold'>Search</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;