import React, { useEffect, useState } from 'react';
import Recipes from './Recipes';

const RecipesSection = () => {
    const [recipies,setRecipes]=useState([]);
    useEffect(()=>{
        fetch('recipie.json').then(res=>res.json()).then(data=>setRecipes(data));
    },[])
    const handdleBookmark=(recipe)=>{
        console.log(recipe);
    }
    return (
        <section className='px-20 py-5 mt-20  items-center'>
            <div className='flex flex-col  items-center justify-center'>
                <h1 className='text-[#150B2B] font-semibold text-5xl'>Our Recipes</h1>
                <p className='font-normal text-sm text-[#150B2B]/60 '>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
                {/* Card option */}
                <div className='w-full flex px-10 items-center mt-20'>
                    {/* card */}
                    <div className='w-4/6'>
                        <div className='grid grid-cols-2 gap-8'>
                            {
                            recipies.map(recipe=><Recipes handdleBookmark={handdleBookmark} recipe={recipe} />)
                        }
                        </div>
                    </div>
                    {/* bookmark */}
                    <div className='2/6'>
                    bookmark
                    </div>

                </div>

            </div>

        </section>  
    );
};

export default RecipesSection;