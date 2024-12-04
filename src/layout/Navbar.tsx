import React, { useEffect, useRef, useState } from 'react'
import logo from '/assets/logo.png'
import { CiMenuFries } from 'react-icons/ci'
const Navbar: React.FC = () => {
    const [toggleNavbar, setToggleNavbar] = useState(false)
    const navItemRef = useRef<HTMLDivElement>(null)
    function handleOutsideClick(e: Event) {
        if (
            navItemRef.current &&
            !navItemRef.current.contains(e.target as Node)
        ) {
            setToggleNavbar(false)
        }
    }
    useEffect(() => {
        if (toggleNavbar) {
            document.addEventListener('click', handleOutsideClick)
        } else {
            document.removeEventListener('click', handleOutsideClick)
        }
        return () => document.removeEventListener('click', handleOutsideClick)
    }, [toggleNavbar])

    return (
        <>
            <div
                className='w-full flex justify-between px-mainPadding max-sm:px-mobilePadding  py-6 fixed top-0 backdrop-blur-md z-50 items-center'
                ref={navItemRef}
            >
                <img src={logo} alt='logo' width={90} />
                <CiMenuFries
                    size={24}
                    className='lg:hidden '
                    onClick={() => setToggleNavbar(true)}
                />
                <ul
                    className={`flex gap-8 max-lg:flex-col max-lg:absolute transition-all duration-200 ease-linear ${
                        toggleNavbar ? 'max-lg:right-0' : 'max-lg:-right-full'
                    } max-lg:top-0 max-lg:bg-white z-50 max-lg:px-5 max-lg:items-center max-lg:py-7 max-lg:rounded-xl`}
                >
                    <li>
                        <a href='#' className='text-textColor text-[1rem]'>
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href='#features'
                            className='text-textColor text-[1rem]'
                        >
                            Feature
                        </a>
                    </li>
                    <li>
                        <a href='#about' className='text-textColor text-[1rem]'>
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href='#screenshot'
                            className='text-textColor text-[1rem]'
                        >
                            Screenshots
                        </a>
                    </li>
                    <li>
                        <a
                            href='#reviews'
                            className='text-textColor text-[1rem]'
                        >
                            Reviews
                        </a>
                    </li>
                    <li className='lg:ml-8'>
                        <a
                            href='#'
                            className='py-3 px-8 rounded-xl bg-primary transition-all ease-linear text-white hover:opacity-75'
                        >
                            Get App
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar
