import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoSearchOutline } from "react-icons/io5";
import SearchCard from './SearchCard';
import data from '../mocks/data.json'

const Header = () => {
    const [searchedValue, setSearchedValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isFocused, setIsFocused] = useState(false);

    const onChangeSearchBar = (e) => {
        const results = data.recipes.filter((recipe) => {
            return (recipe.title.toLowerCase().includes(e.target.value.toLowerCase()))
        })

        setSearchResults(results);
        setSearchedValue(e.target.value);
    }

    return (
        <header className='flex flex-row items-center justify-start'>
            <Link
                to='/'
                className='flex-shrink-0'
            >
                <img src="/logo.svg" alt="" className='size-20 flex-1' />
            </Link>

            <div className="w-full h-full flex-1 flex justify-center relative">
                <div className='flex w-full bg-white p-2 max-w-lg gap-3 border rounded-xl h-fit items-center focus-within:outline focus-within:outline-2'>
                    <IoSearchOutline className='text-gray-900' />
                    <input
                        type="text"
                        placeholder='Search'
                        className='bg-transparent w-full focus:outline-none'
                        value={searchedValue}
                        onChange={onChangeSearchBar}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                    />
                </div>

                {isFocused && searchedValue && searchResults.length !== 0 && (                
                    <div className='absolute top-full bottom-0 mt-1 px-3 bg-white h-fit w-full max-w-lg rounded-xl'>
                        <ul>
                            {searchResults.slice(0, 4).map(recipe => (
                                <SearchCard recipe={recipe} setSearchedValue={setSearchedValue}/>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header
