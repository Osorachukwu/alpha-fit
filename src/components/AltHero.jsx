import React from 'react'

export default function AltHero({ heroTitle, subTitle }) {
    return (
        <div className='relative bg-gradient-to-r from-gray-950 via-gray-700 to-gray-950 h-[50vh] px-4 sm:px-6 lg:px-8 z-10'>
            {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}

            <div className="relative top-2/4 sm:pt-8">
                {/* <p className="font-medium text-blue-500">{}</p> */}
                <h2 className='text-3xl md:text-4xl font-bold text-gray-300'>
                    {heroTitle}
                </h2>
                <p className="sm:mt-3 text-gray-500">{subTitle}</p>
            </div>
        </div>
    )
}
