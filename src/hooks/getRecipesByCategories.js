import React from 'react'
import data from '../mocks/data.json'

const getRecipesByCategories = (categories) => {
    const recipe = data.recipes.filter(recipe => categories.includes(recipe.category));
    return recipe; 
}

export default getRecipesByCategories;