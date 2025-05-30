import React from 'react'
import './nav.css'
const Nav = () => {
  return (
    <div className='nav'>
        <div className='nav-left'>
            <div className='logo'>
                <p>Add to<span> Cart</span></p>
            </div>
        </div>
        <div className='nav-mid'>
            <input type="search" placeholder='Search' />
            <button type='submit'>search</button>
        </div>
        <div className='nav-right'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Cart</li>
                <li>contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Nav