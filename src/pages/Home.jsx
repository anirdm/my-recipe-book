import React, { useState } from 'react'
import RecipeCard from '../components/RecipeCard';
import { BsFilterRight } from "react-icons/bs";
import getRecipesByCategories from '../hooks/getRecipesByCategories';

const Home = ({ data }) => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [results, setResults] = useState(data.recipes);
    const [categoriesCheckboxes, setCategoriesCheckboxes] = useState({
        Vegetarian: false,
        'Main Course': false,
        Chicken: false
    })

    const onFilterClick = (categoriesCheckboxes) => {
        const selectedCategories = Object.fromEntries(Object.entries(categoriesCheckboxes).filter(([k, v]) => v === true));
        
        if (Object.keys(selectedCategories).length == 0) {
            setResults(data.recipes);
        } else {
            const recipes = getRecipesByCategories(Object.keys(selectedCategories));
            setResults(recipes);
        }
        
        setIsFilterOpen(false);
    }

    return (
        <div className='flex flex-col'>
            <div className='flex self-end items-end justify-end relative'>
                <button className='mt-5 mb-5 mr-8'>
                    <BsFilterRight
                        size={35}
                        className='cursor-pointer'
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                    />
                </button>

                {isFilterOpen && (
                    <div className='absolute z-1 top-full mt-1 px-3 flex flex-col p-5 bg-white h-fit w-80 max-w-lg rounded-xl'>
                        <h1 className='font-semibold text-xl self-center'>Filter</h1>
                        <h3 className='mt-3 text-stone-400'>Categories</h3>
                        <ul className='mt-2 space-y-3'>
                            <li className='flex justify-between'>
                                <label htmlFor="vegetarian-checkbox">Vegetarian</label>
                                <input 
                                    id='vegetarian-checkbox'       
                                    name='vegetarian'
                                    type='checkbox'
                                    checked={categoriesCheckboxes.Vegetarian} 
                                    onChange={(e) => setCategoriesCheckboxes({...categoriesCheckboxes, Vegetarian: e.target.checked})}
                                    className='w-4 h-4 accent-lime-600'
                                />
                            </li>
                            
                            <li className='flex justify-between'>
                                <label htmlFor="main-course-checkbox" >Main course</label>
                                <input 
                                    id='main-course-checkbox'                                 
                                    name='mainCourse'
                                    type='checkbox' 
                                    checked={categoriesCheckboxes['Main Course']} 
                                    onChange={(e) => setCategoriesCheckboxes({...categoriesCheckboxes, 'Main Course': e.target.checked})}
                                    className='w-4 h-4 accent-lime-600'
                                />
                            </li>

                            <li className='flex justify-between'>
                                <label htmlFor="chicken-checkbox">Chicken</label>
                                <input 
                                    id='chicken-checkbox'           
                                    name='chicken'
                                    type='checkbox' 
                                    checked={categoriesCheckboxes.Chicken} 
                                    onChange={(e) => setCategoriesCheckboxes({...categoriesCheckboxes, Chicken: e.target.checked})}
                                    className='w-4 h-4 accent-lime-600'
                                />
                            </li>
                        </ul>
                        <button 
                            className='py-2 px-5 mt-3 rounded-lg w-fit bg-black text-white self-center hover:scale-105'
                            onClick={() => onFilterClick(categoriesCheckboxes)}
                        >
                            Filter
                        </button>
                    </div>
                )}
            </div>

            <div className='grid content-center justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-10 gap-10'>
                {results && results.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}

export default Home;
