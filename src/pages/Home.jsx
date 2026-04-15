
import React from 'react';
import HeroBanner from '../components/HeroBanner';
import SummaryCard from '../components/SummaryCard';
import FriendsCard from '../Ui/FriendsCard';
import { useLoaderData } from 'react-router';

const Home = () => {

    const friendsData = useLoaderData()

    // console.log(friendsData, 'friendsData')

    return (
        <div className='w-11/12 mx-auto'>
            <HeroBanner />
            <SummaryCard />
            <div className='px-5'>
                <h2 className='text-2xl font-bold '>Your Friends</h2>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5 mb-14'>
                {
                    friendsData.map(friend => <FriendsCard key={friend.id} friend={friend} ></FriendsCard>)
                }
            </div>
        </div>
    );
};

export default Home;