import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { CiSearch } from 'react-icons/ci';

const NavBar = () => {
    return (
        <nav className='flex justify-between px-20 py-5 bg-gray-100 items-center'> 
            {/* navTitle */}
            <div>
            <h1 className='font-normal text-[#150B2B] text-3xl px-6 py-3 rounded-xl hover:bg-gray-200 hover:cursor-pointer'>Recipe Calories</h1>
            </div>
            {/* NavLi */}
            <div>
            <ul className='flex gap-10'>
                <li className='text-xl text-[#150B2B]/70 hover:text-[#150B2B]' ><a href="">Home</a></li>
                <li className='text-xl text-[#150B2B]/70 hover:text-[#150B2B]'><a href="">Recipes</a></li>
                <li className='text-xl text-[#150B2B]/70 hover:text-[#150B2B]'><a href="">About</a></li>
                <li className='text-xl text-[#150B2B]/70 hover:text-[#150B2B]'><a href="">Search</a></li>
            </ul>
            </div>
            {/* rest of the part  */}
            <div className='flex items-center gap-3 group'>
                <input className='bg-gray-200 rounded-full px-6 py-2' type="text" placeholder={` Search`} />
                {/* icon */}
                <CgProfile  className='size-12 font-light bg-[#0BE58A] p-2 rounded-full group-hover:cursor-pointer'/>
            </div>
        </nav>
    );
};

export default NavBar;