import React from 'react'
import { FaCalendarWeek, FaMap } from 'react-icons/fa'
import { FaUserGroup } from 'react-icons/fa6'

const SearchBox = () => {
    return (
        <div className='bg-white rounded-lg p-8 w-[95%] sm:w-[80%] mx-auto mt-4 sm:mt-12'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
                <div className='flex items-center space-x-6'>
                    <span className='text-blue-600'>
                        <FaMap size={24} />
                    </span>
                    <div>
                        <p className='text-lg font-medium mb-[0.2rem]'>Location</p>
                        <input
                            type="text"
                            placeholder="where are you going?"
                            className='outline-none border-none placeholder:text-gray-800'
                        />
                    </div>
                </div>
                <div className='flex items-center space-x-6'>
                    <FaCalendarWeek className='w-6 h-6 text-blue-600' />
                    <div>
                        <p className='text-lg font-medium mb-[0.2rem]'>Start Date</p>
                        <input
                            type="date"
                            className='outline-none border-none'
                        />
                    </div>
                </div>
                <div className='flex items-center space-x-6'>
                    <FaCalendarWeek className='w-6 h-6 text-blue-600' />
                    <div>
                        <p className='text-lg font-medium mb-[0.2rem]'>End Date</p>
                        <input
                            type="date"
                            className='outline-none border-none'
                        />
                    </div>
                </div>
                <div className='flex items-center space-x-6'>
                    <FaUserGroup className='w-6 h-6 text-blue-600' />
                    <div>
                        <p className='text-lg font-medium mb-[0.2rem]'>Guest</p>
                        <p className='text-base font-normal'>1 Guest 1 Room</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBox