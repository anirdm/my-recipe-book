import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='flex flex-row items-center gap-10'>
        <Link
            to='/'
        >
            <img src="/logo.svg" alt="" className='size-24 flex-1'/>
        </Link>
        
    </header>
  )
}

export default Header
