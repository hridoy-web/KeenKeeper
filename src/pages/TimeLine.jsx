
import React, { useContext } from 'react';
import { TimelineContext } from '../context/TimelineContext';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import { PiPhoneCallFill } from 'react-icons/pi';
import { MdVideoCameraFront } from 'react-icons/md';
import { TbHistoryOff } from 'react-icons/tb';
import Home from './Home';
import { Link } from 'react-router';
import { ToastContainer } from 'react-toastify';

const TimeLine = () => {

    const { history } = useContext(TimelineContext)

    // console.log(history, "History");


    //     const getIcon = { type } => {
    //     if (type === "Call" re )
    // }


    return (
        <div className='w-11/12 md:max-w-5xl mx-auto my-8 bg-base-200 p-8 rounded-2xl shadow-sm'>
             
            <h2 className='text-2xl md:text-3xl font-bold mb-4'>TimeLine</h2>
            {
                history.length === 0 ? (

                    <div className='flex flex-col items-center justify-center text-center p-12 bg-gray-100 border border-gray-200 rounded-3xl'>
                        <div className='flex gap-2 items-center mb-3'>
                            <span><TbHistoryOff md:size={25} /></span>
                            <p className='text-gray-600 font-semibold text-xl md:text-2xl'>No History Added</p>
                        </div>
                        <Link to={"/"}  className='btn bg-green-700 text-white hover:scale-95 transition-all duration-500'>Go to home page</Link>
                    </div>

                ) : (
                    history.map(item => (
                       
                            <div className=' bg-gray-100 p-5 rounded-2xl  border-2 border-gray-200 space-y-4 mb-4 hover:scale-105 transition-all duration-700'>

                            <div className='flex items-center gap-4 transition-all duration-200 hover:text-green-600 cursor-pointer  '>

                                {/* icon conditional rendering */}
                                {
                                    item.type === "Call" ? (<PiPhoneCallFill size={30} />) : item.type === "Meet" ? (<MdVideoCameraFront size={30} />) : (<FaEnvelopeOpenText size={25} />)
                                }

                                <div>
                                    <p className='font-medium text-lg'>{item.title}</p>
                                    <p className='text-lg text-gray-600'>{item.date}</p>
                                </div>
                            </div>

                        </div>
                        
                    ))
                )
            }

        </div>
    );
};

export default TimeLine;