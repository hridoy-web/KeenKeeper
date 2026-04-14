import React from 'react';

const FriendsCard = ({ friend }) => {

    return (
        <div className='bg-base-200 p-6 flex flex-col items-center space-y-2 rounded-3xl shadow-md border border-gray-200 cursor-pointer transition-all duration-500 hover:scale-105 '>
            <img className='w-20 h-20 rounded-full' src={friend.picture} alt={friend.name} />
            <h3>{friend.name}</h3>
            <p>{friend.days_since_contact}days ago</p>
            <div className='flex gap-3 mt-1.5'>
                {
                    friend.tags.map(tag => <div className='badge bg-green-100 font-semibold p-2 text-[#244D3F]'>{tag}</div>)
                }
            </div>
            <div className={`badge p-2 font-semibold mt-1.5 ${friend.status === "on-track" ? "bg-[#244D3F] text-white" : friend.status === "almost due" ? "bg-amber-500 text-white" : "bg-red-600 text-white"}`}>
                {friend.status}
            </div>
        </div>
    );
};

export default FriendsCard;