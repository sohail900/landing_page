import { FaApple, FaGooglePlay } from 'react-icons/fa'
import phone1 from '/assets/hero/phone1.png'
import phone2 from '/assets/hero/phone2.png'
const Hero = () => {
    return (
        <section
            className='w-full md:h-screen flex justify-between items-center mt-6 px-mainPadding overflow-x-hidden max-md:flex-col max-sm:px-mobilePadding max-md:mt-24
        '
        >
            {/* left side */}
            <div className='flex flex-col gap-5 '>
                <div className='flex items-center gap-4 w-[60%] bg-lightColor rounded-full h-[60px] p-2 px-3 max-sm:hidden'>
                    <button className='rounded-full h-full px-7 bg-primary text-white cursor-default'>
                        Available
                    </button>
                    <span className='text-textColor text-lg'>
                        Apps is available now
                    </span>
                </div>
                <h1 className='text-5xl font-semibold text-textColor/90 leading-snug mt-3 max-sm:text-4xl'>
                    Your Gateway to Endless <br /> Apps and More
                </h1>
                <p className='leading-relaxed w-[80%] text-textColor text-[1rem]'>
                    Discover and download all types of apps with ParkIt, your
                    ultimate app hub. From productivity to entertainment, find
                    and access everything you need in one convenient platform!
                </p>
                <div className='mt-4 flex  gap-4 flex-wrap'>
                    <button className='py-3 flex px-4 items-center rounded-xl bg-textColor gap-3 text-white'>
                        <FaGooglePlay size={25} />
                        <span>Google Play</span>
                    </button>
                    <button className='py-3 flex px-4 items-center rounded-xl border border-textColor  gap-2 '>
                        <FaApple size={27} />
                        <span>App Store</span>
                    </button>
                </div>
            </div>
            {/* right side */}
            <div className='flex items-center justify-center gap-2 w-[55%] max-md:mt-6'>
                <img src={phone1} width={210} alt='phone' />
                <img
                    src={phone2}
                    width={210}
                    alt='phone'
                    className='max-lg:hidden max-md:block'
                />
            </div>
        </section>
    )
}

export default Hero
