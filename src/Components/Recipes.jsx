import { AiOutlineFire } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";
import { IoTimeOutline } from "react-icons/io5";

const Recipes = ({ recipe ,handdleBookmark}) => {
    const {
        recipe_name,
        short_description,
        recipe_image,
        ingredients,
        preparing_time,
        calories
    } = recipe;

    return (
        <div>
            <div className="space-y-8 border p-6  rounded-2xl">
                <img className="h-52 w-96 rounded-2xl  " src={recipe_image} alt="" />
                <h4 className="text-xl font-semibold ">{recipe_name}</h4>
                <p className="text-gray-500  font-normal text-sm fira-sans">{short_description}</p>
                <hr  className="text-gray-300"/>
                <h5 className="font-medium text-lg text-[#282828]">Ingredients : {ingredients.length}</h5>
                <ul className="space-y-1">
                    {
                        ingredients.map((ingredient,idx)=> <li key={idx} className="font-normal text-[#878787] flex gap-5 items-center fira-sans"><GoDotFill className="text-gray-500 size-3"/>  {ingredient} </li>)
                    }
                </ul>
                <hr  className="text-gray-300"/>
                <div className=" md:flex lg:flex gap-5">
                    <p  className="flex gap-5 text-[#282828]/80 font-normal text-base fira-sans"><IoTimeOutline  className="text-lg "/><span>  {preparing_time} minutes</span></p>
                    <p  className="flex gap-5 text-[#282828]/80 font-normal text-base fira-sans"><AiOutlineFire  className="text-lg"/> <span>  {calories} calories</span></p>
                </div>
                <button onClick={()=>handdleBookmark(recipe)}  className="bg-[#0BE58A] text-[#150B2B] px-6 py-3 rounded-3xl hover:scale-105  active:scale-95 transition-transform duration-150">Want to Cook</button>
            </div>
                
        </div>
    );
};

export default Recipes;