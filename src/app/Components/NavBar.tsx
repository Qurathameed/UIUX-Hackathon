import React from 'react';

import Link from 'next/link';
import { FiShoppingCart, FiPhone, FiSearch } from 'react-icons/fi';

const Navbar = () => {
 return (
   <nav className="flex flex-col">
   <div className='bg-white w-full h-18 flex justify-between items-center px-3 py-2 shadow-md border border-gray-200 '>
    <Link href="#">
    <FiSearch className="w-6 h-6 text-gray-700"/>
    </Link>
   
     <h1 className="text-xl font-bold  items-center">Avion</h1>
     
     <div className="flex items-center space-x-4">
     
       <div className='flex gap-2 mr-30'>
          
      <Link href="/Cart"> <FiShoppingCart className="w-6 h-6 text-gray-700" /></Link>
      <Link href="/Contact"> <FiPhone className="w-6 h-6 text-gray-700" /></Link>
      
       </div>
     </div>
     </div>
        
        <div className="hidden lg:flex w-full h-18  justify-center space-x-10 items-center px-3 py-2 shadow-md border border-gray-300 bg-white">
        <Link href="./"><p className="hover:text-blue-500">Home</p></Link>
        <Link href="/List"> <p className="hover:text-blue-500"></p>Products</Link>
       <Link href="/Ceramics"><p className="hover:text-blue-500">Ceramics</p></Link>
    <Link href="/Detail1"> <p className="hover:text-blue-500">Chairs</p></Link>
    <Link href="/D2"><p className="hover:text-blue-500">Plant pots</p></Link>
    <Link href="/Cart"> <p className="hover:text-blue-500">Shoping </p></Link>
    <Link href="/Contact"> <p className="hover:text-blue-500">Contact Us</p></Link>
    <Link href="/Email"> <p className="hover:text-blue-500"></p>Sign Up</Link>
       <Link href="/LogIn"> <p className="hover:text-blue-500">Log In</p></Link>
     
     </div>
   
   </nav>
 );
};

export default Navbar;