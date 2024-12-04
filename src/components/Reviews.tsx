import 'swiper/css'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import avatar1 from '/assets/avatar/avatar1.png'
import avatar2 from '/assets/avatar/avatar12.png'
import avatar3 from '/assets/avatar/avatar3.png'

const reviewData = [
    {
        id: 1,
        name: 'John Doe',
        job: 'Project Manager',
        review: "Parit makes parking so easy and stress-free. I can't imagine going back to the old way of searching for spots!",
        avatar: avatar1,
    },
    {
        id: 2,
        name: 'Jessica Lee',
        job: 'Project Designer',
        review: 'A game-changer for anyone who drives often. The real-time updates are incredibly reliable.',
        avatar: avatar2,
    },
    {
        id: 3,
        name: 'Bruce Lee',
        job: 'Business Man',
        review: 'Parits intuitive design and secure parking options make it my go-to app for all parking needs.',
        avatar: avatar3,
    },
    {
        id: 4,
        name: 'John Elia',
        job: 'Content Creator',
        review: 'I save so much time and effort with Parit. Highly recommended for busy city drivers!',
        avatar: avatar1,
    },
    {
        id: 5,
        name: 'Neon D.',
        job: 'Content Creator',
        review: 'I save so much time and effort with Parit. Highly recommended for busy city drivers!',
        avatar: avatar2,
    },
]
const Reviews: React.FC = () => {
    return (
        <section
            className='mt-24 px-mainPadding max-sm:px-mobilePadding'
            id='reviews'
        >
            <h1 className='text-3xl font-semibold text-primary text-center'>
                Reviews
            </h1>
            <p className='text-center text-textColor/70 font-medium leading-snug mt-2'>
                What our customers are saying about{' '}
                <span className='text-primary font-medium'>Parit</span>
            </p>
            {/* cards */}
            <div className='mt-16'>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        '1050': {
                            spaceBetween: 50,
                            slidesPerView: 3,
                        },
                        '720': {
                            spaceBetween: 30,
                            slidesPerView: 2,
                        },
                    }}
                >
                    {reviewData.map((elem) => {
                        const { avatar, id, job, name, review } = elem
                        return (
                            <SwiperSlide key={id}>
                                <div className='w-full sm:h-[290px] rounded-3xl py-8 px-5  shadow-primary-shadow mb-3 border-2 border-secondary/20'>
                                    <div className='grid place-items-center size-20 rounded-full bg-primary overflow-hidden p-2'>
                                        <img
                                            src={avatar}
                                            alt='avatar'
                                            className='w-full h-full object-cover'
                                        />
                                    </div>
                                    <h1 className='text-textColor text-lg mt-3 font-semibold'>
                                        {name}
                                    </h1>
                                    <p className='text-textColor/70 font-medium text-[0.9rem]'>
                                        {job}
                                    </p>
                                    <p className='mt-4 text-textColor'>
                                        <q>{review}</q>
                                    </p>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    )
}

export default Reviews
