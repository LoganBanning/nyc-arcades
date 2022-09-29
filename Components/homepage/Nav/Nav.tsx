import React from 'react';
import { HiMenu } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import './Nav.css';

const TopNav= () => {

  return (
    <div className='nav-container'>
      <div className='nav-items'>
        <div className='menu-icon'><HiMenu /></div>
        <h1 className='nyc-arcades-text'>NYC ARCADES</h1>
        <div className='search-icon'> <BiSearch /></div>
      </div>
    </div>
  )

}

export default TopNav;