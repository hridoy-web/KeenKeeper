
import { ImStatsDots } from 'react-icons/im';
import { RiHomeGearFill } from 'react-icons/ri';
import { TbClockCog } from 'react-icons/tb';
import { NavLink } from 'react-router';


const Navbar = () => {

    const navbarLinks = (
    <>
      
        <NavLink to={'/'} className={({ isActive }) => `btn btn-dash btn-success text-black hover:text-white transition-all duration-300 ${isActive ? "text-white bg-[#244D3F]" : ""}`}><RiHomeGearFill size={15} />Home</NavLink>
      
        <NavLink to={'/timeLine'} className={({ isActive }) => `btn btn-dash btn-success text-black  hover:text-white transition-all duration-300 ${isActive ? "text-white bg-[#244D3F]" : ""}`}><TbClockCog size={15} />Timeline</NavLink>
      
        <NavLink to={'/stats'} className={({ isActive }) => `btn btn-dash btn-success text-black hover:text-white transition-all duration-300 ${isActive ? "text-white bg-[#244D3F]" : ""}`}><ImStatsDots size={15} />Stats</NavLink>

    </>
  )
  
    return (
        <div className='bg-base-200 shadow-sm'>

            <div className="navbar w-11/12 mx-auto flex justify-between ">
                <div className="">
                    <a className="text-2xl text-[#244D3F] font-bold"><span className='text-[#1F2937] '>Keen</span>Keeper</a>
                </div>

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="md:hidden ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-all duration-300 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="1"
                        className="menu menu-sm dropdown-content bg-base-200 rounded-box z-50 mt-8 w-40 p-2 shadow gap-3">
                        {navbarLinks}
                    </ul>
                </div>

                <div className="hidden md:flex gap-3 items-center ">
                   {navbarLinks}
                </div>
            </div>

        </div>
    );
};

export default Navbar;