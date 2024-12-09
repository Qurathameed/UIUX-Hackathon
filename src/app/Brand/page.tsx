"use client"
import { BiSolidPurchaseTag } from "react-icons/bi"
import { CiCircleCheck, CiDeliveryTruck } from "react-icons/ci"
import { LuSprout } from "react-icons/lu"

function Brand() {
    return (

        <div className="p-10 bg-white flex flex-col">
            <h2 className="text-[#2A254B]  text-3xl mb-10 font-serif  mt-10 text-center">What makes our brand different</h2>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">

                <div className="flex flex-col  justify-center border p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
                    <CiDeliveryTruck className="h-8 w-8 text-red-500 mb-2" />
                    <p className="text-sm text-black font-semibold">Next day as standard</p>
                    <p className="mt-4 text-black">Order before 3pm and get your order
                        the next day as standard</p>
                </div>
                <div className="flex flex-col justify-center border p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
                    <CiCircleCheck className="h-8 w-8 text-blue-500 mb-2" />
                    <p className="text-sm text-black font-semibold">Made by true artisans</p>
                    <p className="mt-4 text-black">Handmade crafted goods made with
                        real passion and craftmanship</p>
                </div>
                <div className="flex flex-col justify-center border p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
                    <BiSolidPurchaseTag className="h-8 w-8 text-green-500 mb-2" />
                    <p className="text-sm text-black font-semibold">Unbeatable prices</p>
                    <p className="mt-4 text-black">For our materials and quality you won’t find better prices anywhere</p>
                </div>
                <div className=" border p-4 rounded-lg shadow hover:shadow-lg flex flex-col  justify-center transition-shadow">
                    <LuSprout className="h-8 w-8 text-yellow-500 mb-2" />
                    <p className="text-sm text-black font-semibold">Recycled packaging</p>
                    <p className="mt-4 text-black">We use 100% recycled packaging to ensure our footprint is manageable</p>
                </div>

            </div>
        </div>
    );


};
export default Brand;