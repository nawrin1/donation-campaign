import { NavLink } from "react-router-dom";
import './Header.css'


const Header = () => {
    return (
        <div className="flex flex-col md:flex-row lg:flex-row justify-between mx-4 max-w-[1100px] lg:mx-auto mt-8">
            <div>
                <img src="/src/assets/Resources/Logo.png" alt="" />

            </div>
            <nav className="flex gap-12 mt-4 text-[18px] font-[700]">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/donation'>Donation</NavLink>
                <NavLink to='/statistics'>Statistics</NavLink>

            </nav>

        </div>
    );
};

export default Header;