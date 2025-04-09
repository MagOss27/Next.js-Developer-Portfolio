import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'

const CustomerLink = ({ href, title, className = "" }) => {
    const router = useRouter()
    console.log(router)
    return (
        <Link href={href} >
            {title}className={`${className} relative group`}

            <span className='h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300'>&nbsp;</span>
        </Link>
    )
}

const NavBar = () => {
    return (
        <header
            className='w-full px-32 py-8 font-medium flex items-center justify-between'
        >
            <nav>
                <CustomerLink href="/" title="Home" className='mr-4' />
                <CustomerLink href="/about" title="About" className='mx-4' />
                <CustomerLink href="/projects" title="Projects" className='mx-4' />
                <CustomerLink href="/articles" title="Articles" className='ml-4' />
            </nav>

            <nav>
                <Link href="/" target={"_blank"}>T</Link>
                <Link href="/" target={"_blank"}>T</Link>
                <Link href="/" target={"_blank"}>T</Link>
                <Link href="/" target={"_blank"}>T</Link>
                <Link href="/" target={"_blank"}>T</Link>
                <Link href="/" target={"_blank"}>T</Link>
                <Link href="/" target={"_blank"}>T</Link>
            </nav>
            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>
        </header>
    )
}

export default NavBar
