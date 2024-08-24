import React from 'react'

const RecipeDetails = () => {
    return (
        <div className='flex flex-col items-center lg:flex-row lg:items-start my-5 mx-14 gap-20'>
            <div>
                <img src="/arrabiata.jpg" alt="" className='w-96 fit-object rounded-xl' />
                <div className='mt-5'>
                    <h1 className='font-semibold text-2xl '>Spicy Arrabiata Penne </h1>
                    <div className='my-2 text-gray-600'>
                        <h4>Category: Vegetarian</h4>
                        <h4>Area: Italy</h4>
                    </div>

                    <section className='flex border-xl w-96 bg-lime-400 rounded-lg text-sm justify-evenly mt-5 p-1'>
                        <div className='flex flex-col items-center'>
                            <p className='font-semibold'>Calories</p>
                            <p>452kcal</p>
                        </div>

                        <div className='flex flex-col items-center'>
                            <p className='font-semibold'>Protein</p>
                            <p>25g</p>
                        </div>

                        <div className='flex flex-col items-center'>
                            <p className='font-semibold'>Fat</p>
                            <p>31g</p>
                        </div>

                        <div className='flex flex-col items-center'>
                            <p className='font-semibold'>Carbs</p>
                            <p>8g</p>
                        </div>
                    </section>

                    <div className='flex mt-5 gap-5'>
                        <div className='flex flex-col justify-center items-center gap-2'>
                            <img src="/time.png" alt="" className='size-9' />
                            <div className='flex flex-col text-gray-600 text-xs justify-center items-center'>
                                <p>Total prep time</p>
                                <p>45 min</p>
                            </div>
                        </div>

                        <div className='flex flex-col justify-center items-center gap-2'>
                            <img src="/servings.png" alt="" className='size-9' />
                            <div className='flex flex-col text-gray-600 text-xs justify-center items-center'>
                                <p>Servings</p>
                                <p>2</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='leading-relaxed'>
                <h1 className='font-semibold text-2xl'>Overview</h1>
                <p className=' my-5'>Spicy Arrabiata Penne is a flavorful pasta dish that features penne pasta coated in a spicy tomato sauce. The word "Arrabiata" comes from the Italian word for "angry" or "enraged," referring to the heat from the chili peppers in the sauce. This dish is celebrated for its simplicity and robust flavor profile, making it a favorite among fans of spicy Italian cuisine.</p>

                <h1 className='font-semibold text-2xl mt-10'>Ingredients</h1>
                <ul className='marker:text-lime-400 marker:text-2xl my-5 list-disc pl-5'>
                    <li>Penne Pasta</li>
                    <li>Tomatoes</li>
                    <li>Garlic</li>
                    <li>Chili Peppers</li>
                    <li>Olive Oil</li>
                    <li>Parsley</li>
                    <li>Salt and Pepper</li>
                    <li>Optional Additions</li>
                </ul>

                <h1 className='font-semibold text-2xl mt-10'>Instructions</h1>
                <ol className=' my-5 space-y-5'>
                    <li>
                        <div className='flex gap-2 items-center'>
                            <span className="bg-lime-400 mr-2.5 flex h-8 w-full max-w-8 items-center justify-center rounded-full text-base text-white">
                                1
                            </span>
                            <span className='font-semibold text-lg'>Cook the Pasta</span>
                        </div>               
                        Boil penne pasta in salted water until al dente. Drain and set aside.
                    </li>

                    <li>
                        <div className='flex gap-2 items-center'>
                            <span className="bg-lime-400 mr-2.5 flex h-8 w-full max-w-8 items-center justify-center rounded-full text-base text-white">
                                2
                            </span>
                            <span className='font-semibold text-lg'>Prepare the Sauce</span>
                        </div>               
                        Sauté minced garlic in olive oil until fragrant. Add chili flakes or chopped fresh chilies, and cook briefly.
                    </li>

                    <li>
                        <div className='flex gap-2 items-center'>
                            <span className="bg-lime-400 mr-2.5 flex h-8 w-full max-w-8 items-center justify-center rounded-full text-base text-white">
                                3
                            </span>
                            <span className='font-semibold text-lg'>Add Tomatoes</span>
                        </div>               
                        Incorporate canned tomatoes or tomato sauce, simmering until the sauce thickens. Season with salt and pepper.
                    </li>

                    <li>
                        <div className='flex gap-2 items-center'>
                            <span className="bg-lime-400 mr-2.5 flex h-8 w-full max-w-8 items-center justify-center rounded-full text-base text-white">
                                4
                            </span>
                            <span className='font-semibold text-lg'>Combine</span>
                        </div>               
                        Toss the cooked penne pasta with the spicy tomato sauce, ensuring it is well coated.
                    </li>

                    <li>
                        <div className='flex gap-2 items-center'>
                            <span className="bg-lime-400 mr-2.5 flex h-8 w-full max-w-8 items-center justify-center rounded-full text-base text-white">
                                5
                            </span>
                            <span className='font-semibold text-lg'>Garnish and Serve</span>
                        </div>               
                        Finish with fresh parsley for a burst of color and freshness. Optionally, add a sprinkle of Parmesan cheese.
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default RecipeDetails;
