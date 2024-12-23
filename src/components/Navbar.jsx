/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        {/* Logo */}
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white flex text-[18px] font-bold cursor-pointer'>
            Kajal &nbsp; <span className='sm:block hidden'>Kumari</span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>

            ))}
          </ul>
  
          {/* Mobile Menu Toggle */}
          <div className='sm:hidden flex items-center'>
            <button
              className='text-gray-400'
              onClick={() => setToggleMenu(!toggleMenu)}
              aria-label='Toggle menu'
            >
              <img src={toggleMenu ? close : menu} alt='menu toggle' className='w-6 h-6' />
            </button>
          </div>
        </div>
  
        {/* Mobile Menu */}
        {toggleMenu && (
          <div className='sm:hidden absolute top-16 left-0 w-full  bg-gradient-to from-primary to-white   p-5 z-10'>
            <ul className='flex flex-col items-center gap-4'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? 'text-white' : 'text-gray-300'
                  } text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setActive(link.title);
                    setToggleMenu(false);
                  }}
                >
                                  <Link to={`#${link.id}`}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
