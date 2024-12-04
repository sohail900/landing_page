import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { LuParkingCircle } from 'react-icons/lu'
import { MdOutlinePayments } from 'react-icons/md'
import { CgSmartphoneChip } from 'react-icons/cg'

const featureData = [
    {
        id: 1,
        title: 'Live Availability',
        desc: 'Get real-time updates on available parking spaces nearby, helping you find a spot quickly.',
        Icon: FaLocationDot,
    },
    {
        id: 2,
        title: 'Reserve Spot',
        desc: 'Reserve your parking spot ahead of time and guarantee a space when you arrive.',
        Icon: LuParkingCircle,
    },
    {
        id: 3,
        title: 'Easy Payment',
        desc: 'Pay seamlessly through the app with integrated payment options for stress-free parking.',
        Icon: MdOutlinePayments,
    },
    {
        id: 4,
        title: 'Smart Suggestions',
        desc: 'Receive personalized parking recommendations based on your usual locations and preferences.',
        Icon: CgSmartphoneChip,
    },
]
const Features = () => {
    return (
        <section
            className='mt-24 px-mainPadding max-sm:px-mobilePadding'
            id='features'
        >
            <h1 className='text-3xl font-semibold text-primary text-center'>
                App Features
            </h1>

            {/* cards */}
            <div className='grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1  gap-x-4 gap-y-12 mt-24 mb-8 flex-wrap'>
                {featureData.map((elem) => {
                    const { desc, id, title, Icon } = elem
                    return (
                        <div
                            key={id}
                            className='w-full h-auto px-5 py-8 rounded-2xl shadow-primary-shadow text-textColor  text-center relative transition-all duration-500 ease-in-out hover:-translate-y-6 cursor-default'
                        >
                            <div className='size-14 absolute left-1/2 -translate-x-1/2 -top-8 rounded-xl grid place-items-center bg-primary text-white '>
                                <Icon size={33} />
                            </div>
                            <h1 className='text-2xl mb-2 mt-3 font-medium text-textColor/90'>
                                {title}
                            </h1>
                            <p className='text-textColor/80 text-[1rem]'>
                                {desc}
                            </p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Features
