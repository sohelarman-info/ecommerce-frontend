import React from 'react'
import { FaSearch } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";


function HomeMenuBar() {
  return (
    <div className='menubar'>
        <div className='prjt-name'>
            <h2>Tronix</h2>
        </div>
        <div className='all-menu'>
            <ul className='menu-list'>
                <a href='/'><li className='list-type'>Home</li></a>
                <a href='/pages/about'><li className='list-type'>About</li></a>
                <a href='/pages/product'><li className='list-type'>Product</li></a>
                <a href='/'><li className='list-type'>Blog</li></a>
                <a href='/'><li className='list-type'>Contact</li></a>
            </ul>
        </div>
        <div className='search-bar'>
            <div className='search-box'>
                <input type='text' placeholder='Search your item..'/>
                <div className='search-icon'>
                    <FaSearch/>
                </div>
            </div>
        </div>
        <div className='shopping-element'>
            <div className='shopping-icon'> 
                <MdOutlineShoppingBag/>
                <div className='number'>99</div>
            </div>
            <div className='shopping-icon'>
                <MdMailOutline/>
            </div>
        </div>
    </div>
  )
}

export default HomeMenuBar
