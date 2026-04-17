import React, { useContext } from 'react';
import { BsChatRightTextFill } from 'react-icons/bs';
import { FaEnvelopeOpenText, FaFileArchive, FaFileVideo } from 'react-icons/fa';
import { FaClockRotateLeft } from 'react-icons/fa6';
import { MdDeleteSweep, MdVideoCameraFront } from 'react-icons/md';
import { PiPhoneCallFill } from 'react-icons/pi';
import { VscCopilotSnooze } from 'react-icons/vsc';
import { Link, useLoaderData, useParams } from 'react-router';
import { TimelineContext } from '../context/TimelineContext';
import { toast, ToastContainer } from 'react-toastify';
import { TbHistoryOff } from 'react-icons/tb';

const FriendDetails = () => {

    const { id } = useParams()
    // console.log(id, 'params');

    const friendsData = useLoaderData()
    // console.log(friendsData, "friendsData");

    const expectedFriend = friendsData.find(friend => friend.id == id)

    // console.log(expectedFriend);

    const { addTimelineFunction, history } = useContext(TimelineContext)
    //    console.log(addTimelineFunction, "timelineContext");

    const handleTimelineData = (type) => {
        addTimelineFunction(type, expectedFriend.name)


        if (type === "Call") {
            toast.success(`Call With ${expectedFriend.name}`)
        } else if (type === "Meet") {
            toast.success(`Video Call With ${expectedFriend.name}`)
        } else {
            toast.success(`Text With ${expectedFriend.name}`)
        }
    }

const recentInteractions = history
    .filter(item => item.title.includes(expectedFriend.name)) 

    return (
        <div className='w-11/12 mx-auto my-10 md:my-16 flex flex-col md:flex-row gap-8'>

            {/* left side box */}

            <div className='bg-base-200 p-5 flex flex-col items-center  space-y-1 max-w-96 md:max-w-80 mx-auto rounded-2xl border-2 border-gray-200 cursor-pointer transition-all duration-500 hover:scale-105'>

                <img className='w-20 h-20 rounded-full ring ring-offset-2 ring-gray-200' src={expectedFriend.picture} alt={expectedFriend.name} />
                <h2>{expectedFriend.name}</h2>

                <div className='flex gap-3 mt-1.5'>
                    {
                        expectedFriend.tags.map((tag, index) => <div key={index} className='badge bg-green-100 font-semibold p-2 text-[#244D3F]'>{tag}</div>)
                    }
                </div>

                <div className={`badge p-2 font-semibold my-2.5 ${expectedFriend.status === "on-track" ? "bg-[#244D3F] text-white" : expectedFriend.status === "almost due" ? "bg-amber-500 text-white" : "bg-red-600 text-white"}`}>
                    {expectedFriend.status}
                </div>

                <p className='text-gray-600 my-2 '>{expectedFriend.bio}</p>

                <div className='flex flex-col items-center space-y-1'>
                    <p className='font-semibold'>Email:</p>
                    <p className='font-semibold
                    text-gray-600'>{expectedFriend.email}</p>
                </div>

                <div className='mt-3 space-y-2'>
                    <button className='btn w-full text-blue-600 transition-all duration-500 hover:scale-90 hover:bg-blue-600 hover:text-white'><VscCopilotSnooze size={15} />Snooze 2 weeks</button>
                    <button className='btn w-full text-green-600 transition-all duration-500 hover:scale-90 hover:bg-green-600 hover:text-white'><FaFileArchive size={15} />Archive</button>
                    <button className='btn w-full text-red-600 transition-all duration-500 hover:scale-90 hover:bg-red-600 hover:text-white'><MdDeleteSweep size={20} />Delete</button>
                </div>
            </div>

            {/* right side box */}
            <div className='md:w-full '>

                {/* 1st Card */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto '>

                    <div className='bg-base-200 p-5 space-y-1  rounded-xl cursor-pointer  border-2 border-gray-200 flex flex-col items-center transition-all duration-500 md:hover:scale-105 '>

                        <h2 className='font-bold text-3xl'>{expectedFriend.days_since_contact}</h2>
                        <p className='text-gray-500 font-medium'>Days Since Contact</p>
                    </div>

                    <div className='bg-base-200 p-5 space-y-1  rounded-xl cursor-pointer  border-2 border-gray-200 flex flex-col items-center transition-all duration-500 md:hover:scale-105 '>
                        <h2 className='font-bold text-3xl'>{expectedFriend.goal}</h2>
                        <p className='text-gray-500 font-medium'>Goal (Days)</p>
                    </div>

                    <div className='bg-base-200 p-5 space-y-1 rounded-xl cursor-pointer  border-2 border-gray-200 flex flex-col items-center transition-all duration-500 md:hover:scale-105 '>
                        <h2 className='font-bold text-3xl leading-tight'>{expectedFriend.next_due_date}</h2>
                        <p className='text-gray-500 font-medium'>Next Due</p>
                    </div>

                </div>


                {/* 2nd relationship card --- */}
                <div className='bg-base-200 p-5 mt-8 rounded-lg border-2 border-gray-200 cursor-pointer  '>
                    <div className='space-y-3 flex justify-between items-center '>
                        <p className='font-semibold text-xl'>Relationship Goal</p>
                        <button className='btn'>Edit</button>
                    </div>
                    <p className='text-gray-700 font-medium'>Connect every <span className='font-bold'>{expectedFriend.goal} days</span></p>
                </div>

                {/* No: 3 Quick check in card */}
                <div className='bg-base-200 p-5 md:p-5 mt-8 border-2 border-gray-200 rounded-lg '>
                    <p className='text-left text-2xl '>Quick Check-In</p>

                    <div className='grid grid-cols-3 gap-4 mt-5'>

                        <button onClick={() => handleTimelineData('Call')} className='p-2 cursor-pointer transition-all duration-300 hover:text-blue-600 hover:scale-95 border border-gray-200 rounded-lg bg-gray-100 flex 
                         flex-col items-center gap-2'><PiPhoneCallFill size={30} />Call</button>

                        <button onClick={() => handleTimelineData('Meet')} className='p-2 border border-gray-200 rounded-lg bg-gray-100 flex
                         flex-col items-center gap-2 cursor-pointer transition-all duration-300 hover:text-green-600 hover:scale-95'><MdVideoCameraFront size={30} />Video</button>

                        <button onClick={() => handleTimelineData('Text')} className='p-2 border border-gray-200 rounded-lg bg-gray-100 flex
                         flex-col items-center gap-2 cursor-pointer transition-all duration-300 hover:text-pink-600 hover:scale-95 '><FaEnvelopeOpenText size={25} />Text</button>
                    </div>
                </div>

                {/*  No: 04 -- interactions Card */}
                <div className='bg-base-200 p-5 mt-8 rounded-lg  border-2 border-gray-200 space-y-4'>

                    <div className='flex flex-col sm:flex-row gap-3 sm:justify-between items-center'>

                        <h3 className='text-2xl font-medium'>Recent Interactions</h3>
                        <Link to={'/timeLine'} className='btn mb-3 md:mb-0'><FaClockRotateLeft size={12} />Full History</Link>
                    </div>

{
                recentInteractions.length === 0 ? (

                    <div className='flex flex-col items-center justify-center text-center p-12 bg-gray-100 border border-gray-200 rounded-3xl'>
                        <div className='flex gap-2 items-center mb-3'>
                            <span><TbHistoryOff md:size={25} /></span>
                            <p className='text-gray-600 font-semibold text-xl md:text-2xl'>No History Added</p>
                        </div>
                    </div>

                ) : (
                    recentInteractions.map(item => (
                       
                            <div key={item.id} className=' bg-gray-100 p-5 rounded-2xl  border-2 border-gray-200 space-y-4 mb-4 '>

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
            </div>
            <ToastContainer />
        </div>
    );
};

export default FriendDetails;