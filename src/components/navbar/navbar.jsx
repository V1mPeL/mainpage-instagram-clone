import React from 'react'
import './navbar.scss'
import {AiFillHome} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import {MdOutlineAddBox} from 'react-icons/md'
import {FaRegCompass} from 'react-icons/fa'
import {AiOutlineHeart} from 'react-icons/ai'
import {AiOutlineSearch} from 'react-icons/ai'

import { Link } from "react-router-dom";

export const Navbar = ({profile__img}) => {
  
  return (
    <nav id='nav'>
        <div className="container">
            <div className="navbar" id='navbar'>
                <div className="logo"> <a href="/"> Instagram </a> </div>

                <form class="search__bar">
                    <AiOutlineSearch className='icon'/>
                    <input type="search" className='search' placeholder="Пошук" />
                </form>


                <ul className="menu" id='menu'>
                    <li className="menu__item"><a href="/" className="menu__item-link" data-scroll><AiFillHome /></a></li>
                    <li className="menu__item direct"><a a href="/" className="menu__item-link " data-scroll><RiMessengerLine /></a></li>
                    <li className="menu__item lins">< a href="/" className="menu__item-link" data-scroll><AiOutlineSearch /></a></li>
                    <li className="menu__item"><a a href="/" className="menu__item-link" data-scroll><MdOutlineAddBox /></a></li>
                    <li className="menu__item compass"><a a href="/" className="menu__item-link" data-scroll><FaRegCompass /></a></li>
                    <li className="menu__item"><button className="menu__item-link" data-scroll><AiOutlineHeart /></button></li>
                    <li className="menu__item"><a a href="/" className="menu__item-link" data-scroll><img src={profile__img}></img></a></li>
                </ul>

                <ul>
                    <li className="menu__item directMobile"><a a href="/" className="menu__item-link " data-scroll><RiMessengerLine /></a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
