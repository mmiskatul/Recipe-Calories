import React, { useState } from 'react';

const Bookmark = ({ bookmarks, removingBookmark }) => {
    const [cooking, setCooking] = useState([]);
    const [cookingTime,setCookingTime]=useState(0);
    const [calorie,setCalorie]=useState(0);
    const handleCooking = (bookm) => {
        const newcooking = [...cooking, bookm];
        setCooking(newcooking);
        const newCookingTime=cookingTime+bookm.preparing_time;
        setCookingTime(newCookingTime);
        const newCalorie=calorie+bookm.calories;
        setCalorie(newCalorie);
    }

    return (
        <div className='flex flex-col items-center justify-center border  px-5 bg-gray-50 rounded-xl pb-20'>
            <h1 className='text-center font-semibold text-2xl mb-5 mt-3'>Want to cook: {bookmarks.length}</h1>
            <div className='border-b w-3/4  text-center text-gray-300 mb-5'></div>
            <div>

                <table className="table-auto w-full   text-left " >
                    <thead className=" ">
                        <tr>
                            <th className="px-4 py-2 "></th>
                            <th className="px-4 py-2 ">Name</th>
                            <th className="px-4 py-2 ">Time</th>
                            <th className="px-4 py-2 ">Calories</th>
                            <th className="px-4 py-2 "></th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookmarks.map((bookm, idx) => (
                            <tr key={idx} className="hover:bg-gray-50">
                                <td className="px-4 py-2 ">{idx + 1}</td>
                                <td className="px-4 py-2 ">{bookm.recipe_name}</td>
                                <td className="px-4 py-2 ">{bookm.preparing_time} minutes</td>
                                <td className="px-4 py-2 ">{bookm.calories}</td>
                                <td className="px-4 py-2 ">
                                    <button onClick={() => {
                                        handleCooking(bookm);
                                        removingBookmark(bookm);
                                    }} className='px-4 py-2 cursor-pointer hover:bg-green-500 rounded-2xl bg-[#0BE58A] hover:scale-105 active:scale-95 transition-transform duration-150 '>Preparing</button>
                                </td>
                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>
            {/*  */}
            <h1 className='text-center text-2xl font-semibold my-5'>Currently cooking: {cooking.length}</h1>
            <div className='border-b w-3/4  text-center text-gray-300 mb-5'></div>
            <div>
                <table>
                    <thead className=" ">
                        <tr>
                            <th className="px-4 py-2 "></th>
                            <th className="px-4 py-2 ">Name</th>
                            <th className="px-4 py-2 ">Time </th>
                            <th className="px-4 py-2 ">Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cooking.map((bookm, idx) => (
                            <tr key={idx} className="hover:bg-gray-50">
                                <td className="px-4 py-2 ">{idx + 1}</td>
                                <td className="px-4 py-2 ">{bookm.recipe_name}</td>
                                <td className="px-4 py-2 ">{bookm.preparing_time} minutes</td>
                                <td className="px-4 py-2 ">{bookm.calories}</td>
                            </tr>
                            
                            
                        ))}
                         <tr>
                                <td className="px-4 py-2 "></td>
                                <td className="px-4 py-2 "></td>
                                <td className="px-4 py-2 ">Total Time = {cookingTime} minutes</td>
                                <td className="px-4 py-2 ">Total Calories = {calorie} </td>
                                </tr>
                       

                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default Bookmark;