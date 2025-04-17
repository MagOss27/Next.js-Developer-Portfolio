import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import {
    TwitterIcon,
    DribbbleIcon,
    GithubIcon,
    LinkedInIcon,
    PinterestIcon,
    SunIcon,
    MoonIcon
} from './Icons'
import { motion } from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher'

const CustomerLink = ({ href, title, className = "" }) => {
    const router = useRouter();

    return (
        <Link href={href}>
            <span className={`${className} relative group`}>
                {title}
                <span className={`h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? "w-full" : "w-0"} dark:bg-light`}>&nbsp;</span>
            </span>
        </Link>
    )
}

const CostomMobileLink = ({ href, title, className = "", toggle }) => {
    const router = useRouter();

    const handleClick = () => {
        toggle();
        router.push(href);
    };

    return (
        <button onClick={handleClick} className={`text-light dark:text-dark my-2 ${className}`}>
            <span className="relative group">
                {title}
                <span className={`h-[1px] inline-block w-0 bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? "w-full" : "w-0"} dark:bg-dark`}>&nbsp;</span>
            </span>
        </button>
    );
};

const NavBar = () => {
    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative'>

            {/* Botão hamburguer com X corrigido */}
            <button className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
                <span className={`bg-dark dark:bg-light  block h-0.5 w-6 rounded-sm transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} />
                <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm my-0.5 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`} />
            </button>

            <div className='w-full flex justify-between  items-center lg:hidden'>
                <nav>
                    <CustomerLink href="/" title="Home" className='mr-4' />
                    <CustomerLink href="/about" title="About" className='mx-4' />
                    <CustomerLink href="/projects" title="Projects" className='mx-4' />
                    <CustomerLink href="/articles" title="Articles" className='ml-4' />
                </nav>

                <nav className='flex items-center justify-center flex-wrap'>
                    <motion.a href="https://twitter.com" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3">
                        <TwitterIcon />
                    </motion.a >
                    <motion.a href="https://github.com" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3">
                        <GithubIcon />
                    </motion.a >
                    <motion.a href="https://www.linkedin.com" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3">
                        <LinkedInIcon />
                    </motion.a >
                    <motion.a href="https://www.pinterest.com" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3">
                        <PinterestIcon />
                    </motion.a >
                    <motion.a href="https://dribbble.com" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 ml-3">
                        <DribbbleIcon />
                    </motion.a >

                    <button
                        onClick={() => setMode(mode === "light" ? "dark" : "light")}
                        className={`ml-3 items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
                    >
                        {
                            mode === "dark"
                                ? <SunIcon className={"fill-dark"} />
                                : <MoonIcon className={"fill-dark"} />
                        }
                    </button>
                </nav>
            </div>

            {
                isOpen ?

                    <motion.div
                        initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
                        animate={{ scale: 1, opacity: 1 }}
                        className=' min-w-[70vw] flex flex-col z-30 justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            bg-dark/90 dark:bg-light/75 rounded-lg backdrop:blur-sm-md py-32
            '>
                        <nav className='flex items-center flex-col justify-center'>
                            <CostomMobileLink href="/" title="Home" className='' toggle={handleClick} />
                            <CostomMobileLink href="/about" title="About" className='' toggle={handleClick} />
                            <CostomMobileLink href="/projects" title="Projects" className='' toggle={handleClick} />
                            <CostomMobileLink href="/articles" title="Articles" className='' toggle={handleClick} />
                        </nav>

                        <nav className='flex items-center justify-center flex-wrap mt-2'>
                            <motion.a href="https://twitter.com" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mr-3 sm:mx-1">
                                <TwitterIcon />
                            </motion.a >
                            <motion.a href="https://github.com" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3 sm:mx-1">
                                <GithubIcon />
                            </motion.a >
                            <motion.a href="https://www.linkedin.com" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3 sm:mx-1">
                                <LinkedInIcon />
                            </motion.a >
                            <motion.a href="https://www.pinterest.com" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3 sm:mx-1">
                                <PinterestIcon />
                            </motion.a >
                            <motion.a href="https://dribbble.com" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 ml-3 sm:mx-1">
                                <DribbbleIcon />
                            </motion.a >

                            <button
                                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                                className={`ml-3 items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
                            >
                                {
                                    mode === "dark"
                                        ? <SunIcon className={"fill-dark"} />
                                        : <MoonIcon className={"fill-dark"} />
                                }
                            </button>
                        </nav>
                    </motion.div>
                    : null
            }

            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>
        </header>
    )
}

export default NavBar;
