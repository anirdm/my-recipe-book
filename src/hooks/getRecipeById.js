import React from 'react'
import data from '../mocks/data.json'

const getRecipeById = (recipeId) => {
    const recipe = data.recipes.find(recipe => recipe.id === recipeId);
    return recipe;  
}

export default getRecipeById;
