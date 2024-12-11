"use client"
import Link from "next/link";
import React from "react";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";


const products = [

    {

        id: 1,
        name: "The Dandy chair",
        price: "$100",
        img: "/a1.png",
        oldPrice: "$160",
    },
    {
        id: 2,
        name: "Rustic Vase Set",
        price: "$960",
        img: "/a2.png",
        oldPrice: "$420",
    },
    {
        id: 3,
        name: "The Silky Vase",
        price: "$700",
        img: "/a3.png",
        oldPrice: "$120",

    },
    {
        id: 4,
        name: "The Lucy Lamp",
        price: "$250",
        img: "/a4.png",
        oldPrice: "$120",

    },


];

function Ceramics() {
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);



    return (
        <div className="relative w-full flex justify-center items-center flex-col bg-white ml-5 mt-10 mb-20 ">
            <h2 className="text-[#2A254B] text-3xl mb-10 font-serif ">New ceramics</h2>

            <div className="relative bg-white ">


                <div

                    className="p-4 justify-center items-center grid grid-cols-1 sm:grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-5 "
                >

                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="relative justify-center items-center w-[250px] h-[360px]  bg-white shadow-md rounded-lg overflow-hidden flex-shrink-0"
                        >

                            <img
                                src={product.img}
                                alt={product.name}
                                className="w-full h-[250px] object-contain bg-white"
                            />

                            <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 hover:opacity-100 transition-opacity">
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
                                    <span className="text-gray-500 font-bold text-lg">
                                        {product.price}
                                    </span>
                                    <span className="text-gray-400 line-through text-sm">
                                        {product.oldPrice}
                                    </span>
                                </div>


                            </div>
                        </div>
                    ))}
                </div>


            </div>
            <Link href="/List">
                <button className="bg-[#F9F9F9] hover:bg-gray-400 text-gray-700 px-6 py-2 mt-10 mb-10 rounded">
                    View Collection
                </button>
            </Link>
        </div>
    );
};

export default Ceramics;