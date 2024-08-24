import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = () => {
    return (
        <Link
            to='/:recipeId'
        >
            <div className='flex flex-col bg-white p-3 w-72 rounded-xl hover:scale-105 ease-out duration-300'>
                <img src="/pasta.jpg" alt="" className='rounded-xl' />
                <section className='mt-3 '>
                    <h3 className='font-semibold text-xl'>Spicy Arrabiata Penne</h3>
                    <div className='my-2 text-gray-600 text-sm'>
                        <h4>Category: Vegetarian</h4>
                        <h4>Area: Italy</h4>
                    </div>

                    <section className='flex border-xl bg-lime-400 rounded-lg text-xs justify-evenly mt-3 p-1'>
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
                </section>
            </div>
        </Link>

    )
}

export default RecipeCard
