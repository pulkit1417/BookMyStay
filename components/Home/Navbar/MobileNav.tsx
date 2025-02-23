import { navLinks } from '@/constants/constant'
import React from 'react'
import Link from 'next/link'
import { CgClose } from 'react-icons/cg'

const MobileNav = () => {
  return (
      <div className='fixed inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-91 w-full h-screen'>
        <div className='text-white fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-rose-900 space-y-6 z-[1050]'>
          { navLinks.map((link) => {
              return (
                  <Link key={link.id} href={link.url} className='text-white w-fit text-[20px] ml-12 border-b-[1.5px] border-white sm:text-[30px]'>
                      {link.label}
                  </Link>
              )
          })}
          <CgClose className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 cursor-pointer'/>
        </div>
      </div>
  )
}

export default MobileNav