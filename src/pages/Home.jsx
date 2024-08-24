import React from 'react'
import RecipeCard from '../components/RecipeCard';


const Home = ({data}) => {
    return (
        <div>
            <div className='grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-5 gap-10'>
                { data && data.recipes.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe}/>
                ))}
            </div>
        </div>
    )
}

export default Home;
