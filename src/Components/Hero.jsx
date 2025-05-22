import React from 'react';
import heroImage from '../assets/Pasted image.png'
const Hero = () => {
    return (
       <div className='px-20 '>
         <section
            className='h-screen bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-48 py-32 rounded-3xl space-y-6'
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            <h1 className='text-4xl md:text-5xl font-semibold max-w-2xl'>
                Discover an exceptional cooking class tailored for you!
            </h1>
            <p className='font-normal text-white text-lg'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
            <div className='flex  gap-20 mt-10'>
                <button className='text-xl font-semibold text-black bg-[#0BE58A] px-6 py-3 rounded-full'>Explore Now</button>
                <button className='text-xl font-semibold text-white  border px-6 py-3 rounded-full'>Our Feedback</button>
            </div>
        </section>
       </div>
    );
};

export default Hero;
