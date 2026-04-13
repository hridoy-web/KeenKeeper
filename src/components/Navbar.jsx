
import { ImStatsDots } from 'react-icons/im';
import { RiHomeGearFill } from 'react-icons/ri';
import { TbClockCog } from 'react-icons/tb';
import { NavLink } from 'react-router';


const Navbar = () => {

    const navbarLinks = (
    <>
      <li>
        <NavLink to={'/'} className={({ isActive }) => `${isActive ? "text-white bg-green-500" : ""}`}>Home</NavLink>
      </li>
      <li>
        <NavLink to={'/timeLine'} className={({ isActive }) => `${isActive ? "text-white bg-green-500" : ""}`}>Listed Books</NavLink>
      </li>
      <li>
        <NavLink to={'/stats'} className={({ isActive }) => `${isActive ? "text-white bg-green-500" : ""}`}>Page to</NavLink>
      </li>
    </>
  )
  
    return (
        <div className='bg-base-200 shadow-sm'>

            <div className="navbar w-11/12 mx-auto flex justify-between ">
                <div className="">
                    <a className="text-2xl text-[#005822] font-bold"><span className='text-[#1F2937] '>Keen</span>Keeper</a>
                </div>

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="md:hidden ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-all duration-300 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="1"
                        className="menu menu-sm dropdown-content bg-base-200 rounded-box z-50 mt-8 w-40 p-2 shadow ">
                        <li><a><RiHomeGearFill/> Home</a></li>
                        <li><a><TbClockCog /> Timeline</a></li>
                        <li><a><ImStatsDots /> Stats</a></li>
                    </ul>
                </div>

                <div className="hidden md:flex gap-2 items-center ">
                    <button className="btn"><RiHomeGearFill size={15} />Home</button>
                    <button className="btn"><TbClockCog size={15} />Timeline</button>
                    <button className="btn"><ImStatsDots size={15} />Stats</button>
                </div>
            </div>

        </div>
    );
};

export default Navbar;