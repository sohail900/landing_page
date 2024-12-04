import logo from '/assets/logo.png'
import { FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { LuFacebook } from 'react-icons/lu'
import { SlSocialYoutube } from 'react-icons/sl'

// footer
const Footer = () => {
    return (
        <footer className='mt-24 px-mainPadding bg-primary text-white'>
            <hr className='outline-none border-none w-full h-[2px]   mb-20' />
            <div className='flex  items-center'>
                <hr className='outline-none border-none flex-1 h-[2px] bg-white/30 max-sm:hidden' />
                <nav className='flex-1 flex flex-wrap justify-center gap-x-6 gap-y-3'>
                    <a href='http://x.com' className='text-[1.5rem]'>
                        <FaXTwitter />
                    </a>
                    <a href='http://facebook.com' className='text-[1.5rem]'>
                        <LuFacebook />
                    </a>
                    <a href='http://instagram.com' className='text-[1.5rem]'>
                        <FaInstagram />
                    </a>
                    <a href='http://youtube.com' className='text-[1.5rem]'>
                        <SlSocialYoutube />
                    </a>
                    <a href='http://linkedin.com' className='text-[1.5rem]'>
                        <FaLinkedinIn />
                    </a>
                </nav>
                <hr className='outline-none border-none flex-1 h-[2px]  bg-white/30 max-sm:hidden' />
            </div>
            <div className='w-full flex flex-col justify-center items-center mt-8'>
                <img
                    src={logo}
                    alt='logo'
                    className='w-[120px] bg-white py-2 px-2 rounded-2xl'
                />
                <p className='text-[1rem] font-medium mt-2  text-center'>
                    Empowering your digital journey with innovative solutions.
                </p>
            </div>
            <nav className='flex justify-center items-center gap-x-12 gap-y-6 mt-6 flex-wrap'>
                <a href='#' className='underline'>
                    Home
                </a>
                <a href='#about' className='underline'>
                    About
                </a>
                <a href='#feature' className='underline'>
                    Feature
                </a>
                <a href='#screenshot' className='underline'>
                    Screenshots
                </a>
                <a href='#reviews' className='underline'>
                    Reviews
                </a>
            </nav>

            <p className='text-center mt-6 pb-1 opacity-90 text-[0.9rem]'>
                &copy; {new Date().getFullYear()} Parkit. All rights reserved.
            </p>
        </footer>
    )
}

export default Footer
