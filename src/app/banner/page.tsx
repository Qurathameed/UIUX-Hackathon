"use client"
import { BiSolidPurchaseTag } from "react-icons/bi";
import { CiCircleCheck, CiDeliveryTruck } from "react-icons/ci";
import { LuSprout } from "react-icons/lu";
import Link from "next/link";
function Banner() {
    return (
        <div className="flex flex-col justify-center items-center ">
            <section className=" bg-white flex  sm:flex-col md:flex-row lg:flex-row p-6">
                <div className="w-full   md:w-3/4 flex justify-center  flex-col md:flex-row items-center bg-slate-900 mt-8">
                    <div className="w-full  md:w-1/2 text-left md:text-left sm:text-left lg:text-left ml-6 flex-row bg-slate-900">



                        <h1 className="text-1xl font-bold text-white mt-5 ">The furniture brand for the future, with timeless designs</h1>
                        <Link href="/List">
                            <button className="mt-8 w-40 h-10 bg-slate-800  text-white border border-blue-950 rounded hover:text-pink-300">
                                View Collection
                            </button>
                        </Link>
                        <p className="mb-16 text-sm sm:text-0.1xl mt-20 text-white ">
                            the French luxury retail brand
                            with nice fonts, tasteful colors and a beautiful way to display things digitally
                            using modern web technologies.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img src="/Banner.jpeg" alt="iPhone 14" className="w-full" />
                    </div>
                </div>

            </section>


            <div className="p-10 bg-white flex flex-col">
                <h2 className="text-[#2A254B]  font-serif mb-10 text-3xl mt-10 text-center">What makes our brand different</h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                    {/* items */}
                    <div className="flex flex-col  justify-center border p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
                        <CiDeliveryTruck className="h-8 w-8 text-red-500 mb-2" />
                        <p className="text-sm font-semibold">Next day as standard</p>
                        <p className="mt-4">Order before 3pm and get your order
                            the next day as standard</p>
                    </div>
                    <div className="flex flex-col justify-center border p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
                        <CiCircleCheck className="h-8 w-8 text-blue-500 mb-2" />
                        <p className="text-sm font-semibold">Made by true artisans</p>
                        <p className="mt-4">Handmade crafted goods made with
                            real passion and craftmanship</p>
                    </div>
                    <div className="flex flex-col justify-center border p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
                        <BiSolidPurchaseTag className="h-8 w-8 text-green-500 mb-2" />
                        <p className="text-sm font-semibold">Unbeatable prices</p>
                        <p className="mt-4">For our materials and quality you won’t find better prices anywhere</p>
                    </div>
                    <div className=" border p-4 rounded-lg shadow hover:shadow-lg flex flex-col  justify-center transition-shadow">
                        <LuSprout className="h-8 w-8 text-yellow-500 mb-2" />
                        <p className="text-sm font-semibold">Recycled packaging</p>
                        <p className="mt-4">We use 100% recycled packaging to ensure our footprint is manageable</p>
                    </div>




                </div>
            </div>
        </div>
    );
};

export default Banner;