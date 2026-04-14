

import React from 'react';
import HeroBanner from '../components/HeroBanner';
import SummaryCard from '../components/SummaryCard';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <HeroBanner/>
            <SummaryCard/>
        </div>
    );
};

export default Home;