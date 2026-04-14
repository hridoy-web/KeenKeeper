
const SummaryCard = () => {
    return (
        <>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center text-center px-4'>

                <div className='bg-base-200 p-5 space-y-1 shadow-lg rounded-xl cursor-pointer transition-all duration-500 hover:scale-105 border border-gray-200 '>
                    <h2 className='font-bold text-3xl'>10</h2>
                    <p className='text-gray-500 font-medium'>Total Friends</p>
                </div>
                <div className='bg-base-200 p-5 space-y-1 shadow-lg cursor-pointer transition-all duration-500 hover:scale-105 border border-gray-200 rounded-xl '>
                    <h2 className='font-bold text-3xl'>5</h2>
                    <p className='text-gray-500 font-medium'>On Track</p>
                </div>
                <div className='bg-base-200 p-5 space-y-1 shadow-lg cursor-pointer transition-all duration-500 hover:scale-105 border border-gray-200 rounded-xl '>
                    <h2 className='font-bold text-3xl'>6</h2>
                    <p className='text-gray-500 font-medium leading-tight'>Need Attention</p>
                </div>
                <div className='bg-base-200 p-3 md:p-5 space-y-1 shadow-lg cursor-pointer transition-all duration-500 hover:scale-105 border border-gray-200 rounded-xl '>
                    <h2 className='font-bold text-3xl'>12</h2>
                    <p className='text-gray-500 font-medium leading-tight'>Interactions This Month</p>
                </div>

            </div>
            <div className='divider my-8'></div>
        </>
    );
};

export default SummaryCard;