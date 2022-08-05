import React from 'react'
import './navbar.scss'
import {AiFillHome} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import {MdOutlineAddBox} from 'react-icons/md'
import {FaRegCompass} from 'react-icons/fa'
import {AiOutlineHeart} from 'react-icons/ai'
import {AiOutlineSearch} from 'react-icons/ai'

import { Link } from "react-router-dom";

export const Navbar = () => {
  
  return (
    <nav id='nav'>
        <div className="container">
            <div className="navbar" id='navbar'>
                <div className="logo"> <Link to={'instagram-clone/'}> Instagram </Link> </div>

                    <form class="search__bar">
                        <AiOutlineSearch className='icon'/>
                        <input type="search" className='search' placeholder="Пошук" />
                    </form>


                <ul className="menu" id='menu'>
                    <li className="menu__item"><Link to={'instagram-clone/'} className="menu__item-link" data-scroll><AiFillHome /></Link></li>
                    <li className="menu__item"><Link to={'instagram-clone/direct'} className="menu__item-link" data-scroll><RiMessengerLine /></Link></li>
                    <li className="menu__item"><Link to={'instagram-clone/post'} className="menu__item-link" data-scroll><MdOutlineAddBox /></Link></li>
                    <li className="menu__item"><Link to={'instagram-clone/explore'} className="menu__item-link" data-scroll><FaRegCompass /></Link></li>
                    <li className="menu__item"><button className="menu__item-link" data-scroll><AiOutlineHeart /></button></li>
                    <li className="menu__item"><Link to={'instagram-clone/profile'} className="menu__item-link" data-scroll>O</Link></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
