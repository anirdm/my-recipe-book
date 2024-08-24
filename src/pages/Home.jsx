import React from 'react'
import RecipeCard from '../components/RecipeCard';

const Home = () => {
    return (
        <div>
            <div className='grid place-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-10 gap-10'>
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
            </div>
        </div>
    )
}

export default Home;
