import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

function Footer() {
    return (
        <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base">
            <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>

                <div className="flex items-center lg:py-2">
                    Built with <span className="text-primary dark:text-primaryDark text-2xl px-1">&#9825;</span>
                    by&nbsp;
                    <Link
                        href="https://devdreaming.com"
                        className="underline underline-offset-2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Magnus Admin &amp; Dev
                    </Link>
                </div>

                <Link
                    href="https://devdreaming.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2"
                >
                    Let&apos;s Connect &amp; Innovate
                </Link>
            </Layout>
        </footer>
    )
}

export default Footer
