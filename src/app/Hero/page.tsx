"use client"
import Link from "next/link";
const Hero = () => {
    return (
        <div className="flex items-center justify-between mt-10  bg-white text-[#2A254B]  mr-5 ml-5 rounded-lg w-[90%] max-w-6xl mx-auto  overflow-hidden">

            <div className="w-3/4 p-2">
                <h1 className="text-[#2A254B]  font-serif text-xl mt-10 md:text-3xl font-semibold mb-4">
                    The furniture brand for the future, with timeless designs
                </h1>

                <Link href="/List">
                    <button className="bg-slate-700 mt-10 hover:bg-gray-700 text-white px-6 py-2 rounded">
                        View Collection
                    </button>
                </Link>
                <p className="text-1xl sm:text-sm md:text-sm lg:text-1xl  mt-20 mb-2">
                    A new era in eco-friendly furniture with Avelon, the French luxury
                    retail brand. Stylish fonts, tasteful colors, and modern web
                    technologies for a beautiful display.
                </p>

            </div>


            <div className="hidden md:block  w-1/2 ">
                <img
                    src="/a9.png"
                    alt="Furniture Chair"
                    className="h-[400px] w-full object-cover mt-5"
                />
            </div>
        </div>







    );
};

export default Hero;