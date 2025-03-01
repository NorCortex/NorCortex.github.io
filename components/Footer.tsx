"use client";
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="max-w-6xl mx-auto px-4 py-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
                    {/* Logo Section */}
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
                    
                    {/* Navigation Links */}
                    <div className="flex flex-col md:flex-row md:space-x-8 gap-6 md:gap-0">
                        <div className="flex flex-col space-y-2">
                            <h3 className="text-lg font-semibold">Research</h3>
                            <Link href="/" className="text-sm hover:text-gray-400">Projects</Link>
                            <Link href="/" className="text-sm hover:text-gray-400">Publications</Link>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h3 className="text-lg font-semibold">Team</h3>
                            <Link href="/member" className="text-sm hover:text-gray-400">Members</Link>
                            <Link href="/alumni" className="text-sm hover:text-gray-400">Alumni</Link>
                        </div>
                    </div>
                    
                    {/* Address and Socials */}
                    <div className="flex flex-col space-y-2">
                        <p className="text-sm">Faculty of Information and Communication Technology</p>
                        <p className="text-sm">Mahidol University</p>
                        <p className="text-sm">999 Phuttamonthon 4 Road, Salaya</p>
                        <p className="text-sm">Nakhon Pathom, 73170, Thailand</p>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} Paranormal Lab. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
