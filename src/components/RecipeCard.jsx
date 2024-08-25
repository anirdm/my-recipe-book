import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = ({ recipe }) => {
    return (
        <Link
            to={`/${recipe.id}`}
        >
            <div className='flex flex-col bg-white p-3 w-72 rounded-xl hover:scale-105 ease-out duration-300'>
                <img src={recipe.image} alt="" className='rounded-xl' />
                <section className='mt-3 '>
                    <h3 className='font-semibold text-xl'>{recipe.title}</h3>
                    <div className='my-2 text-gray-600 text-sm'>
                        <h4>Category: {recipe.category}</h4>
                        <h4>Area: {recipe.area}</h4>
                    </div>

                    <section className='flex bg-lime-400 rounded-lg text-xs justify-evenly mt-3 p-1'>
                        <div className='flex flex-col items-center'>
                            <p className='font-semibold'>Calories</p>
                            <p>{recipe.nutritionalInfo.calories}</p>
                        </div>

                        <div className='flex flex-col items-center'>
                            <p className='font-semibold'>Protein</p>
                            <p>{recipe.nutritionalInfo.protein}</p>
                        </div>

                        <div className='flex flex-col items-center'>
                            <p className='font-semibold'>Fat</p>
                            <p>{recipe.nutritionalInfo.fat}</p>
                        </div>

                        <div className='flex flex-col items-center'>
                            <p className='font-semibold'>Carbs</p>
                            <p>{recipe.nutritionalInfo.carbs}</p>
                        </div>
                    </section>
                </section>
            </div>
        </Link>

    )
}

export default RecipeCard
