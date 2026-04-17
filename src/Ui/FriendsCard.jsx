import React from 'react';
import { Link } from 'react-router';

const FriendsCard = ({ friend }) => {

    const { id } = friend;

    return (

        <Link to={`/friend/${id}`} className='bg-base-200 p-6 flex flex-col items-center space-y-2 rounded-3xl shadow-md border border-gray-200 cursor-pointer transition-all duration-500 hover:scale-105 '>
            <img className='w-20 h-20 rounded-full ring ring-offset-2 ring-gray-200' src={friend.picture} alt={friend.name} />
            <h3>{friend.name}</h3>
            <p>{friend.days_since_contact}days ago</p>
            <div className='flex gap-3 mt-1.5'>
                {
                    friend.tags.map((tag, index) => <div key={index} className='badge bg-green-100 font-semibold p-2 text-[#244D3F]'>{tag}</div>)
                }
            </div>
            <div className={`badge p-2 font-semibold mt-1.5 ${friend.status === "on-track" ? "bg-[#244D3F] text-white" : friend.status === "almost due" ? "bg-amber-500 text-white" : "bg-red-600 text-white"}`}>
                {friend.status}
            </div>
        </Link>
    );
};

export default FriendsCard;