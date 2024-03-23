import React, { useState } from 'react';
import './header.css';
import '../../assets/logo.png';
import { AiOutlineHome, AiOutlineUser, AiOutlineSend, AiOutlineClose, AiOutlineAppstore } from 'react-icons/ai';
import { BsCardList } from 'react-icons/bs';
import { CiDiscount1 } from 'react-icons/ci';

export const Header = () => {
  // Mobile menu toggle
  const [Toggle, showMenu] = useState(false);

  return (
    <header className='header'>
        <nav className='nav custom-container'>
            <a href='index.html' className='nav__logo'>
                <img src={require('../../assets/logo.png')} alt='logo' title='logo' width="120" height="60" />
            </a>
            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
              <ul className='nav__list grid'>
                <li className='nav__item'>
                  <a className='nav__link active-link' href='#home'>
                    <AiOutlineHome className='nav__icon'/>
                    Home
                  </a>
                </li>
                <li className='nav__item'>
                  <a className='nav__link' href='#offers'>
                    <CiDiscount1 className='nav__icon'/>
                    Services
                  </a>
                </li>
                <li className='nav__item'>
                  <a className='nav__link' href='#about'>
                    <AiOutlineUser className='nav__icon'/>
                    Shop
                  </a>
                </li>
                <li className='nav__item'>
                  <a className='nav__link' href='#services'>
                    <BsCardList className='nav__icon'/>
                    About
                  </a>
                </li>
                <li className='nav__item'>
                  <a className='nav__link' href='#contact'>
                    <AiOutlineSend className='nav__icon'/>
                    Contact Us
                  </a>
                </li>
              </ul>
              <AiOutlineClose className='nav__close'onClick={() => showMenu(!Toggle)} />
            </div>
            <div className='nav__toggle' onClick={() => showMenu(!Toggle)}>
              <AiOutlineAppstore className='nav__icon'/>
            </div>
        </nav>
    </header>
  )
}

export default Header;