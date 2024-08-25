import React from 'react'
import { Link } from 'react-router-dom'

const SearchCard = ({ recipe, setSearchedValue }) => {
    return (
        <Link
            to={`/${recipe.id}`}
            onClick={() => setSearchedValue('')}
            className='flex items-center gap-3 my-3'
        >
            <img src={recipe.image} alt="" className='w-16 rounded-xl' />
            <div>
                <h1 className='font-semibold'>{recipe.title}</h1>
                <div className='my-2 text-gray-600 text-xs'>
                    <h4>Category: {recipe.category}</h4>
                    <h4>Area: {recipe.area}</h4>
                </div>
            </div>
        </Link>
    )
}

export default SearchCard
