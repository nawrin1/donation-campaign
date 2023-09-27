import { NavLink } from "react-router-dom";
import './Header.css'
// import { useState } from "react";


const Header = () => {
    
    
    return (
        <div className="flex relative top-[52px] flex-col md:flex-row lg:flex-row justify-between mx-4 max-w-[1100px] lg:mx-auto place-items-center">
            <div>
                <img src="/src/assets/Resources/Logo.png" alt="" />

            </div>
            <nav className="flex gap-12 mt-4 font-Inter text-[18px] font-[700]">
                <NavLink to='/' >Home</NavLink>
                <NavLink to='/donation'>Donation</NavLink>
                <NavLink to='/statistics'>Statistics</NavLink>

            </nav>

        </div>
    );
};

export default Header;