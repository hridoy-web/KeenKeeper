
import { BsPlusLg } from 'react-icons/bs';

const HeroBanner = () => {
    return (
        <div className='flex flex-col items-center justify-center text-center my-12 px-5 space-y-5 overflow-hidden'>

            <h1 className='max-w-xs text-3xl md:text-4xl lg:text-5xl md:max-w-full font-bold'>Friends to keep close in your life</h1>

            <p className='max-w-lg mx-auto leading-relaxed text-gray-600'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>

            <button className='btn bg-[#244D3F] text-white hover:scale-105 cursor-pointer duration-500 transition-all '><BsPlusLg size={15} />Add a Friend</button>

        </div>
    );
};

export default HeroBanner;