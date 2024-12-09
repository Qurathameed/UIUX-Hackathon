"use client"

import Header from "./Header";
import MubNav from "./MubNav";
import Navbar from "./NavBar";


const MainNav = () => {
    return (
        <div className="h-full w-ull">
            <Header />
            <Navbar />
            <MubNav />
        </div>
    );
};

export default MainNav;