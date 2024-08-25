import React from 'react'
import RecipeCard from '../components/RecipeCard';


const Home = ({ data }) => {
    return (
        <div className='grid content-center justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-16 mb-10 gap-10'>
            {data && data.recipes.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
            {data && data.recipes.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
        </div>
    )
}

export default Home;
