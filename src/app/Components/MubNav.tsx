"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';

const MubNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = () => {
        setIsOpen(false);
    };

    return (
        <div className="lg:hidden bg-sky-950  shadow-md relative">

            <div className="flex justify-between  items-center px-4 py-3">

                <FiMenu
                    className="w-6 h-6 text-whitecursor-pointer"
                    onClick={toggleMenu}
                />
            </div>


            <div
                className={`fixed top-0 right-0 h-full w-40  bg-transparent shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300 ease-in-out`}
            >

                <div className="flex justify-end p-4">
                    <IoClose
                        className="w-6 h-6 text-green-500  cursor-pointer"
                        onClick={toggleMenu}
                    />
                </div>

                <nav className="flex flex-col ml-8 items-start p-4 space-y-4">
                    <Link href="./" passHref>
                        <p
                            className="text-gray-800 hover:text-gray-200 text-1xl"
                            onClick={handleOptionClick}
                        >
                            Home
                        </p>
                    </Link>
                    <Link href="/List" passHref>
                        <p
                            className="text-gray-800 hover:text-gray-200 text-1xl"
                            onClick={handleOptionClick}
                        >
                            Products
                        </p>
                    </Link>
                    <Link href="/Ceramics" passHref>
                        <p
                            className="text-gray-800 hover:text-gray-200 text-1xl"
                            onClick={handleOptionClick}
                        >
                            Ceramics
                        </p>
                    </Link>
                    <Link href="/Detail1" passHref>
                        <p
                            className="text-gray-800 hover:text-gray-200 text-1xl"
                            onClick={handleOptionClick}
                        >
                            Chairs
                        </p>
                    </Link>
                    <Link href="/D2" passHref>
                        <p
                            className="text-gray-800 hover:text-gray-200 text-1xl"
                            onClick={handleOptionClick}
                        >
                            Plant Pots
                        </p>
                    </Link>
                    <Link href="/Cart" passHref>
                        <p
                            className="text-gray-800 hover:text-gray-200 text-1xl"
                            onClick={handleOptionClick}
                        >
                            Cart
                        </p>
                    </Link>
                    <Link href="/Email" passHref>
                        <p
                            className="text-gray-800 hover:text-gray-200 text-1xl"
                            onClick={handleOptionClick}
                        >
                            Sign Up
                        </p>
                    </Link>
                    <Link href="/LogIn" passHref>
                        <p
                            className="text-gray-800 hover:text-gray-200 text-1xl"
                            onClick={handleOptionClick}
                        >
                            Log In
                        </p>
                    </Link>
                    <Link href="/Contact" passHref>
                        <p
                            className="text-gray-800 hover:text-gray-200 text-1xl"
                            onClick={handleOptionClick}
                        >
                            Contact Us
                        </p>
                    </Link>


                </nav>
            </div>
        </div>
    );
};

export default MubNav