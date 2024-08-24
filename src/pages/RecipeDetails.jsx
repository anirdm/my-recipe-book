import React from 'react'
import { useParams } from 'react-router-dom';
import OrderedListItem from '../components/OrderedListItem';
import getRecipeById from '../hooks/getRecipeById';

const RecipeDetails = () => {
    let { recipeId } = useParams();
    let recipe = getRecipeById(recipeId);
    
    return (
        <div className='flex flex-col items-center lg:flex-row lg:items-start my-5 mx-14 gap-20'>
            <div>
                <img src={recipe.image} alt="" className='w-96 fit-object rounded-xl' />
                <div className='mt-5'>
                    <h1 className='font-semibold text-2xl '>{recipe.title} </h1>
                    <div className='my-2 text-gray-600'>
                        <h4>Category: {recipe.category}</h4>
                        <h4>Area: {recipe.area}</h4>
                    </div>

                    <section className='flex border-xl w-96 bg-lime-400 rounded-lg text-sm justify-evenly mt-5 p-1'>
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

                    <div className='flex mt-5 gap-5'>
                        <div className='flex flex-col justify-center items-center gap-2'>
                            <img src="/time.png" alt="" className='size-9' />
                            <div className='flex flex-col text-gray-600 text-xs justify-center items-center'>
                                <p>Total prep time</p>
                                <p>{recipe.prepTime}</p>
                            </div>
                        </div>

                        <div className='flex flex-col justify-center items-center gap-2'>
                            <img src="/servings.png" alt="" className='size-9' />
                            <div className='flex flex-col text-gray-600 text-xs justify-center items-center'>
                                <p>Servings</p>
                                <p>{recipe.servings}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='leading-relaxed'>
                <h1 className='font-semibold text-2xl'>Overview</h1>
                <p className=' my-5'>{recipe.overview}</p>

                <h1 className='font-semibold text-2xl mt-10'>Ingredients</h1>
                <ul className='marker:text-lime-400 marker:text-2xl my-5 list-disc pl-5'>
                    { recipe.ingredients.map(ingredient => (
                        <li key={recipe.ingredients.indexOf(ingredient)}>{ingredient}</li>
                    ))}
                </ul>

                <h1 className='font-semibold text-2xl mt-10'>Instructions</h1>
                <ol className=' my-5 space-y-5'>
                    { recipe.instructions.map(instruction => (
                        <OrderedListItem 
                            key={recipe.instructions.indexOf(instruction)} 
                            count={recipe.instructions.indexOf(instruction)}
                            text = {instruction}
                        />
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default RecipeDetails;
