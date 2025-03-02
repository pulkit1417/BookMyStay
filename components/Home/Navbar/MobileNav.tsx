import { navLinks } from '@/constants/constant'
import React from 'react'
import Link from 'next/link'
import { CgClose } from 'react-icons/cg'

type Props = {
  showNav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ closeNav, showNav }: Props) => {
  // Apply translation only when needed
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
  
  return (
    <div className={`fixed ${navOpen} inset-0 transition-all duration-500 z-[1002] bg-black bg-opacity-50 w-full h-screen`}>
      <div className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] bg-rose-900 space-y-6 z-[1050]`}>
        {navLinks.map((link) => {
          return (
            <Link
              key={link.id}
              href={link.url}
              className='text-white w-fit text-[16px] xs:text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[30px] ml-6 xs:ml-8 sm:ml-12 border-b-[1.5px] border-white'
              onClick={closeNav}
            >
              {link.label}
            </Link>
          )
        })}
        
        {/* Book Now button - properly responsive */}
        <Link
          href="/booking"
          className='text-white bg-rose-700 hover:bg-rose-800 transition-colors duration-300 rounded-md px-4 py-2 w-fit mx-6 xs:mx-8 sm:mx-12 text-center text-[16px] xs:text-[18px] sm:text-[20px] font-medium'
          onClick={closeNav}
        >
          Book Now
        </Link>
        
        <CgClose
          onClick={closeNav}
          className='absolute top-[0.7rem] right-[1.4rem] w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 cursor-pointer'
        />
      </div>
    </div>
  )
}

export default MobileNav