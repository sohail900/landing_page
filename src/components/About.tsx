import React, { useState } from 'react'
import about1 from '/assets/about/about_1.png'

// about us
const AboutUs: React.FC = () => {
    const [showMore, setShowMore] = useState(false)
    return (
        <section
            className='mt-24 px-mainPadding max-sm:px-mobilePadding'
            id='about'
        >
            <h1 className='text-3xl font-semibold text-primary text-center'>
                About Us
            </h1>
            <div className='w-full mt-16 flex justify-between items-center gap-12 max-md:flex-col'>
                <div className='flex lg:flex-1 gap-6 items-center  justify-center'>
                    <img
                        src={about1}
                        alt='about'
                        className='w-[30%] sm:w-[160px] max-lg:hidden max-md:block'
                    />
                    <img
                        src={about1}
                        alt='about2'
                        className='w-[30%] sm:w-[160px]'
                    />
                </div>
                <div className='flex-1'>
                    <h1 className=' text-3xl font-semibold leading-relaxed'>
                        <span className='text-primary'>Revolutionizing</span>{' '}
                        Parking Solutions for <br /> A Hassle-Free{' '}
                        <span className='text-primary'>Experience</span>
                    </h1>
                    <p className='text-textColor/60 font-medium text-[1.1rem] mt-3 leading-snug'>
                        Parit is a smart parking application designed to
                        streamline your parking experience. Whether you're
                        searching for available spots or looking to park
                        securely, Parit provides an intuitive and reliable
                        solution. Save time, reduce stress, and enjoy
                        unparalleled convenience in finding and managing parking
                        spaces. With Parit, parking is no longer a
                        challenge—it's a seamless part of your journey.
                    </p>
                    {showMore && (
                        <p className='text-textColor/60 font-medium text-[1.1rem] mt-2 leading-snug'>
                            With Parit, parking is no longer a challenge—it’s a
                            seamless part of your journey. Equipped with
                            real-time updates, Parit ensures that you always
                            know where to find the nearest available spot. Say
                            goodbye to endless searching and hello to efficient
                            parking at your fingertips.
                        </p>
                    )}
                    <button
                        className='mt-6 py-2 px-6 rounded-xl bg-textColor text-white transition-opacity duration-200 ease-linear hover:opacity-80 active:scale-95'
                        onClick={() => setShowMore((pre) => !pre)}
                    >
                        {showMore ? 'Read Less' : 'Read More'}
                    </button>
                </div>
            </div>
            {/* cards */}
        </section>
    )
}

export default AboutUs
