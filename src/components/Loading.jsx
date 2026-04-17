import React from 'react';

const Loading = () => {
    return (
        <div className='w-11/12 mx-auto flex justify-center items-center py-16'>
            <span className="loading loading-dots loading-xs"></span>
            <span className="loading loading-dots loading-sm"></span>
            <span className="loading loading-dots loading-md"></span>
            <span className="loading loading-dots loading-lg"></span>
            <span className="loading loading-dots loading-xl"></span>
        </div>
    );
};

export default Loading;