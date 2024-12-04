import screenshot1 from '/assets/screenshot/screenshot_1.png'
import screenshot2 from '/assets/screenshot/screenshot_2.png'
import screenshot3 from '/assets/screenshot/screenshot_3.png'
import screenshot4 from '/assets/screenshot/screenshot_4.png'
import screenshot5 from '/assets/screenshot/screenshot_5.png'
const Screenshots = () => {
    return (
        <>
            <section
                className='mt-24 px-mainPadding max-sm:px-mobilePadding'
                id='screenshot'
            >
                <h1 className='text-3xl font-semibold text-primary text-center'>
                    Screenshots
                </h1>
                <p className='text-center text-textColor/70 font-medium leading-snug mt-3'>
                    Explore the features of{' '}
                    <span className='text-primary font-medium'>Parit</span>{' '}
                    through these screenshots,
                    <br />
                    showcasing its intuitive interface and seamless
                    functionality.
                </p>
                <div className='mt-16 w-full flex justify-center gap-0 items-center'>
                    {/* main image */}
                    <img
                        src={screenshot2}
                        alt='screenshot'
                        className='w-[140px] translate-x-4 max-md:w-[20%]'
                    />
                    <img
                        src={screenshot3}
                        alt='screenshot'
                        className='w-[160px] translate-x-3 z-10 max-md:w-[25%]'
                    />
                    {/* main center image */}
                    <img
                        src={screenshot5}
                        alt='screenshot'
                        className='w-[190px] z-30 max-md:w-[30%]'
                    />
                    <img
                        src={screenshot4}
                        alt='screenshot'
                        className='w-[160px] -translate-x-3 z-10 max-md:w-[25%]'
                    />
                    <img
                        src={screenshot1}
                        alt='screenshot'
                        className='w-[140px] -translate-x-4 max-md:w-[20%]'
                    />
                </div>
            </section>
        </>
    )
}

export default Screenshots
