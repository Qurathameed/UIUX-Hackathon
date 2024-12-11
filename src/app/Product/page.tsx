"use client";
import { 
  DevicePhoneMobileIcon, 
  ComputerDesktopIcon, 
  DeviceTabletIcon, 
  CameraIcon, 
  MegaphoneIcon
} from "@heroicons/react/24/outline";


export default function Categories() {
  return (
    <div className="p-10 bg-white flex flex-col">
    
      <h3 className="text-2xl ml-3 text-[#2A254B]  font-serif font-bold mb-6">Browse By Category</h3>
 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
       
        <div className="flex flex-col items-center justify-center border p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
          <DevicePhoneMobileIcon className= "h-8 w-8 text-red-500 mb-2"/>
          <p className="text-black text-sm font-semibold">Phones</p>
        </div>
 <div className="flex flex-col items-center justify-center border p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
          <ComputerDesktopIcon className="h-8 w-8 text-blue-500 mb-2" />
          <p className="text-sm text-black font-semibold">Computers</p>
        </div>
 <div className="flex flex-col items-center justify-center border p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
          <DeviceTabletIcon className="h-8 w-8 text-green-500 mb-2" />
          <p className="text-sm text-black font-semibold">SmartWatch</p>
        </div>
<div className=" border p-4 rounded-lg shadow hover:shadow-lg flex flex-col items-center justify-center transition-shadow">
          <CameraIcon className="h-8 w-8 text-yellow-500 mb-2" />
          <p className="text-sm text-black font-semibold">Camera</p>
        </div>
 <div className=" border p-4 rounded-lg flex flex-col items-center justify-center shadow hover:shadow-lg transition-shadow">
          <MegaphoneIcon className="h-8 w-8 text-purple-500 mb-2" />
          <p className="text-sm text black font-semibold">HeadPhones</p>
        </div>
        <div className=" border p-4 rounded-lg flex flex-col items-center justify-center shadow hover:shadow-lg transition-shadow">
          <DevicePhoneMobileIcon className="h-8 w-8 text-pink-500 mb-2" />
          <p className="text-sm text-black font-semibold">Smart phone</p>
        </div>
      </div>
    </div>
  );
}