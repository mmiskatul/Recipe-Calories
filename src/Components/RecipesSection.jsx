import React, { useEffect, useState } from 'react';
import Recipes from './Recipes';
import Bookmark from './Bookmark';

const RecipesSection = () => {
    const [recipies, setRecipes] = useState([]);
    const [bookmarks, setBookmarks] = useState([]);
    useEffect(() => {
        fetch('recipie.json').then(res => res.json()).then(data => setRecipes(data));
    }, [])
    const handdleBookmark = (recipe) => {
        const newBookmark = [...bookmarks, recipe];
        setBookmarks(newBookmark);
    }
    const removingBookmark = (recipe) => {
        const updatedBookmarks = bookmarks.filter(b => b.recipe_id !== recipe.recipe_id);
        setBookmarks(updatedBookmarks);
    }

    return (
        <section className='px-20 py-5 mt-20  items-center'>
            <div className='flex flex-col  items-center justify-center'>
                <h1 className='text-[#150B2B] font-semibold text-5xl'>Our Recipes</h1>
                <p className='font-normal text-sm text-[#150B2B]/60 '>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
                {/* Card option */}
                <div className='w-full flex px-10 justify-between  mt-20 gap-10'>
                    {/* card */}
                    <div className='w-[60%]'>
                        <div className='grid grid-cols-2 gap-8'>
                            {
                                recipies.map((recipe, idx) => <Recipes key={idx} handdleBookmark={handdleBookmark} recipe={recipe} />)
                            }
                        </div>
                    </div>
                    {/* bookmark */}
                    <div className='w-[40%] '>
                        <div className='w-full justify-center'>

                            <Bookmark bookmarks={bookmarks} removingBookmark={removingBookmark} />
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default RecipesSection;