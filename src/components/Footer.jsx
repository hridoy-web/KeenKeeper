import React from 'react';
import { FaFacebook, FaInstagramSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';


const Footer = () => {
    return (
        <div className='w-11/12 mx-auto bg-[#244D3F] text-white items-center text-center h-110 md:h-96 p-6 md:p-12 space-y-4 md:space-y-6'>

            <h2 className='text-3xl md:text-5xl font-bold  '>KeenKeeper</h2>
            <p className='text-gray-300 text-wrap'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>

            <p className='font-medium text-gray-300'>Social Links</p>

            <div className='flex gap-5 justify-center' >
                <FaFacebook className='hover:text-blue-600 transition-all duration-300 hover:scale-110 cursor-pointer ' size={30} />
                <FaInstagramSquare className='hover:text-fuchsia-600 transition-all duration-300 hover:scale-110 cursor-pointer' size={30} />
                <FaSquareXTwitter className='hover:text-black transition-all duration-300 hover:scale-110 cursor-pointer' size={30} />
            </div>

            <div className='divider'></div>


            <div className='flex flex-col md:flex-row md:justify-between'>
                <p className='text-gray-400 mb-3'>© 2026 KeenKeeper. All rights reserved.</p>

                <div className='flex flex-col md:flex-row gap-1 md:gap-8'>
                    <p className='text-gray-400 transition-all duration-300 hover:text-green-600 cursor-pointer hover:scale-105 '>Privacy Policy</p>
                    <p className='text-gray-400 transition-all duration-300 hover:text-green-600 cursor-pointer hover:scale-105'>Terms of Service</p>
                    <p className='text-gray-400 transition-all duration-300 hover:text-green-600 cursor-pointer hover:scale-105'>Cookies</p>
                </div>
            </div>

        </div>
    );
};

export default Footer;