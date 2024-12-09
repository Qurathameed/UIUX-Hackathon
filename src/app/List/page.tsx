"use client"
import React from "react";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
const products = [
    {
        id: 1,
        name: "The Dandy chair",
        price: "$100",
        image: "/a1.png",

    },
    {
        id: 2,
        name: "Rustic Vase Set",
        price: "$960",
        image: "/a2.png",

    },
    {
        id: 3,
        name: "The Silky Vase",
        price: "$700",
        image: "/a3.png",

    },
   
    {
        id: 5,
        name: "The Golden Lamp",
        price: "$15",
        image: "/a5.png",

    },
    {
        id: 6,
        name: "Rustic Vase Set",
        price: "$250",
        image: "/a6.png",

    },
    {
        id: 7,
        name: "The Silky Vase",
        price: "$250",
        image: "/a7.png",

    },
    {
        id: 8,
        name: "The Lucy Lamp",
        price: "$50",
        image: "/a8.png",

    },
    {
        id: 9,
        name: "The Dandy chair",
        price: "$450",
        image: "/a9.png",

    },
    {
        id: 10,
        name: "Rustic Vase Set",
        price: "$450",
        image: "/a2.png",
    },

];

function List() {
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);

    const handleScrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -300,
                behavior: "smooth",
            });
        }
    };

    const handleScrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 300,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="relative w-full mt-10 mb-5 mr-4 ml-4">
            <div className="bg-white border  border-gray-100 mr-5 ml-1 h-48 text-start flex justify-between items-center px-1 py-1 text-xl lg:text-xs">
                <div className="w-20 p-1 flex-1 flex mt-2  justify-center text-[#2A254B]  mb-3 font-serif  tex-left sm:text-left lg:text-center md:text-center text-2xl sm:text-1xl md:text-1xl lg:text-2xl">
                    <p className="mt-4 mb-2">A brand built on the love of craftmanship,
                        quality and outstanding customer services</p>

                </div>
                <div className="flex items-center gap-5 ">

                </div>
            </div>







            <div className="bg-white mr-2 ml-2 w-[98%]  text-white flex justify-between h-16 items-center px-1 py-1 text-xl lg:text-xs">

                <div className="flex items-center gap-5 ml-10 ">
                    <select
                        className="bg-white text-gray-900 border w-20 h-8  rounded text-xs mr-2"
                        aria-label="Cetegory"
                    >
                        <option>
                            Category
                        </option>
                        <option>Sles</option>
                        <option>Accessories</option>
                        <option>Homeware</option>
                        <option>Light fittings</option>
                        <option>Sofas</option>
                        <option>Furniture</option>

                    </select>

                   
                    <select
                        className="bg-white text-gray-900 border w-20 h-8  rounded text-xs mr-2"
                        aria-label="Cetegory"
                    >
                        <option>
                            Price
                        </option>
                        <option>10k to 20k</option>
                        <option>20k to 50k </option>
                        <option>50k to 10k</option>
                        <option>10k to 01M</option>
                        <option>01M to 20M</option>


                    </select>

                </div>
            </div>

 <div className="relative mr-8 ml-2 border border-gray-950">

                <button
                    onClick={handleScrollLeft}
                    className="absolute left-0  text-black top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow hover:bg-gray-200"
                >
                    <MdKeyboardArrowLeft size={15} />
                </button>
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-scroll  scrollbar-hide space-x-6"
                >
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="relative mr-4 mt-4 w-[200px] h-[290px] gap-6 bg-white shadow-md rounded-lg overflow-hidden flex-shrink-0"
                        >


                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-[180px] object-contain bg-gray-100"
                            />
                            <div className="absolute mt-2 mr-1 top-2 right-2 flex flex-col space-y-2 opacity-0 hover:opacity-100 transition-opacity">
                                <button className="bg-white p-2 rounded-full shadow hover:bg-gray-200">
                                    <AiOutlineHeart size={20} className="text-red-600" />
                                </button>
                                <button className="bg-white p-2 rounded-full shadow hover:bg-gray-200">
                                    <AiOutlineEye size={20} className="text-gray-800" />
                                </button>
                            </div>


                            <div className="p-4">
                                <h3 className="text-sm font-bold text-gray-800">
                                    {product.name}
                                </h3>


                                <div className="flex items-center space-x-2 mt-2">
                                    <span className="text-slate-800 font-bold text-lg">
                                        {product.price}
                                    </span>

                                </div>

                                <div className="flex items-center mt-0.2">

                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                <button
                    onClick={handleScrollRight}
                    className="absolute right-0 top-1/2 text-black transform -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow hover:bg-gray-200"
                >
                    <MdKeyboardArrowRight size={15} />
                </button>
            </div>
            <div className="flex justify-center w-[90%]  items-center ">
                <Link href="/List">
                    <button className="bg-[#F9F9F9] hover:bg-gray-400 items-center text-gray-700 px-6 py-2 mt-10 mb-10 rounded">
                        View Collection
                    </button>
                </Link>
            </div >
         </div>
    );
};

export default List;