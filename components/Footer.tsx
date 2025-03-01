"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="max-w-6xl mx-auto px-2 py-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <Image
                                src="/assets/paranor_white.png"
                                alt="Logo"
                                width={200}
                                height={200}
                                className="h-24 w-auto"
                            />
                        </Link>
                    </div>
                    <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row">
                        <div className="flex flex-col space-y-2">
                            <h3 className="text-lg font-semibold">Company</h3>
                            <Link href="/about" className="text-sm hover:text-gray-400">About</Link>
                            <Link href="/member" className="text-sm hover:text-gray-400">Member</Link>
                            <Link href="/alumni" className="text-sm hover:text-gray-400">Alumni</Link>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h3 className="text-lg font-semibold">Resources</h3>
                            <Link href="/publication" className="text-sm hover:text-gray-400">Publications</Link>
                            {/* <Link href="/contact" className="text-sm hover:text-gray-400">Contact</Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;