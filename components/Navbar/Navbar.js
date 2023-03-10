import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div>
            <div className="bg-[#273240] p-[29px 29px 70px]">
                <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div className="relative flex items-center justify-between">
                        <Link
                            href="/"
                            aria-label="Company"
                            title="Company"
                            className="inline-flex items-center"
                        >
                            <Image src='/Vector.png' width={49} height={55}></Image>
                            <span className="ml-2 text-[28px] font-[600] text-[#FF8B42] tracking-wide h-[42px] w-[186px] left-[119px] top-[31px]">
                                Doctor Guide
                            </span>
                        </Link>
                        <ul className="flex items-center  hidden space-x-8 lg:flex">
                            <li className="flex text-white gap-[5px] items-center">
                                <Link
                                    href="/"
                                    aria-label="Our product"
                                    title="Our product"
                                    className="font-[400] text-[16px]  text-[#FFFFFF] uppercase"
                                >
                                    Home

                                </Link>
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </li>
                            <li className="flex text-white gap-[5px] items-center">
                                <Link
                                    href="/"
                                    aria-label="Our product"
                                    title="Our product"
                                    className="font-[400] text-[16px]  text-[#FFFFFF] uppercase"
                                >
                                    Features

                                </Link>
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </li>
                            <li className="flex text-white gap-[5px] items-center">
                                <Link
                                    href="/"
                                    aria-label="Our product"
                                    title="Our product"
                                    className="font-[400] text-[16px]  text-[#FFFFFF] uppercase"
                                >
                                    Department

                                </Link>
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </li>
                            <li className="flex text-white gap-[5px] items-center">
                                <Link
                                    href="/"
                                    aria-label="Our product"
                                    title="Our product"
                                    className="font-[400] text-[16px]  text-[#FFFFFF] uppercase"
                                >
                                    Event

                                </Link>
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </li>
                            <li className="flex text-white gap-[5px] items-center">
                                <Link
                                    href="/"
                                    aria-label="Our product"
                                    title="Our product"
                                    className="font-[400] text-[16px]  text-[#FFFFFF] uppercase"
                                >
                                    Contact us

                                </Link>
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </li>
                        </ul>
                        <ul className="flex items-center gap-[19px] hidden space-x-8 lg:flex">
                            <li>
                                <Link
                                    href="#"
                                    className="inline-flex items-center justify-center gap-[10px] rounded-[6px] w-full h-12 px-6   font-medium tracking-wide text-white transition duration-200  shadow-md bg-[#FF8B42] hover:bg-[#FF8B42] focus:shadow-outline focus:outline-none uppercase"

                                >
                                    login
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="inline-flex items-center justify-center gap-[10px] rounded-[6px] w-full h-12 px-6   font-medium tracking-wide text-white transition duration-200  shadow-md bg-[#FF8B42] hover:bg-[#FF8B42] focus:shadow-outline focus:outline-none uppercase"

                                >
                                    Sign up
                                </Link>
                            </li>
                        </ul>
                        {/* <div className="lg:hidden">
                            <button
                                aria-label="Open Menu"
                                title="Open Menu"
                                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                                onClick={() => setIsMenuOpen(true)}
                            >
                                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                    />
                                </svg>
                            </button>
                            {isMenuOpen && (
                                <div className="absolute bg-[#273240] top-0 left-0 w-full">
                                    <div className="p-5 bg-[#273240] border rounded shadow-sm">
                                        <div className="flex items-center justify-between mb-4">
                                            <div>
                                                <Link
                                                    href="/"
                                                    aria-label="Company"
                                                    title="Company"
                                                    className="inline-flex items-center"
                                                >
                                                    <Image src='/Vector.png' width={49} height={55}></Image>
                                                    <span className="ml-2 text-[28px] font-[600] text-[#FF8B42] tracking-wide h-[42px] w-[186px] left-[119px] top-[31px]">
                                                        Doctor Guide
                                                    </span>
                                                </Link>
                                            </div>
                                            <div>
                                                <button
                                                    aria-label="Close Menu"
                                                    title="Close Menu"
                                                    className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                        <path
                                                            fill="currentColor"
                                                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <nav className="bg-[#273240]">
                                            <ul className="space-y-4 bg-[#273240]">
                                                <li className="flex text-white gap-[5px] items-center">
                                                    <Link
                                                        href="/"
                                                        aria-label="Our product"
                                                        title="Our product"
                                                        className="font-[400] text-[16px]  text-[#FFFFFF] uppercase"
                                                    >
                                                        Home

                                                    </Link>
                                                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                                </li>
                                                <li className="flex text-white gap-[5px] items-center">
                                                    <Link
                                                        href="/"
                                                        aria-label="Our product"
                                                        title="Our product"
                                                        className="font-[400] text-[16px]  text-[#FFFFFF] uppercase"
                                                    >
                                                        Features

                                                    </Link>
                                                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                                </li>
                                                <li className="flex text-white gap-[5px] items-center">
                                                    <Link
                                                        href="/"
                                                        aria-label="Our product"
                                                        title="Our product"
                                                        className="font-[400] text-[16px]  text-[#FFFFFF] uppercase"
                                                    >
                                                        Department

                                                    </Link>
                                                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                                </li>
                                                <li className="flex text-white gap-[5px] items-center">
                                                    <Link
                                                        href="/"
                                                        aria-label="Our product"
                                                        title="Our product"
                                                        className="font-[400] text-[16px]  text-[#FFFFFF] uppercase"
                                                    >
                                                        Event

                                                    </Link>
                                                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                                </li>
                                                <li className="flex text-white gap-[5px] items-center">
                                                    <Link
                                                        href="/"
                                                        aria-label="Our product"
                                                        title="Our product"
                                                        className="font-[400] text-[16px]  text-[#FFFFFF] uppercase"
                                                    >
                                                        Contact us

                                                    </Link>
                                                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            )}
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;