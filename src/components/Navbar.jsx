import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaShoppingBag } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { useEffect } from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';




const navItems = [
  { name: 'Furniture', path: '/' },
  { name: 'Shop', path: '/shop' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const NavItems = ({toggleMenu}) => {
  return (
    <ul className='flex flex-col md:flex-row items-center md:space-x-8 gap-8'>
      {
        navItems.map((item, index) => (
          <li key={index} onClick={toggleMenu}>
            <NavLink to={item.path}
             className={({ isActive }) =>
              isActive
              ? "text-primary font-bold" 
              : "hover:text-primary"
            }
            >{item.name}</NavLink>
          </li>
        ))
      }
    </ul>
  )
}

const Navbar = () => {
  const { cartCount } = useContext(CartContext);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  }

  // Handle scroll to add background to navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition duration-300 ease-in-out ${isScrolled ? 'bg-white shadow-md text-black' : 'bg-transparent text-white'}`}>
      <nav className='section_container flex justify-between items-center'>
        {/* logo */}
        <Link to="/" className='text-3xl font-black font-poppins'>Panto</Link>

        {/* hamburger menu */}
        <div onClick={toggleMenu} className='md:hidden text-2xl cursor-pointer hover:text-primary'>
          {
            isMenuOpen ? null : <FaBars />
          }
        </div>

        {/* desktop menu items */}
        <div className='hidden md:flex'>
          <NavItems />
        </div>

        {/* mobile menu items */}
        <div className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-80 flex flex-col items-center justify-center space-y-8 text-white transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full' }`}>
          <div className='absolute top-8 right-8 text-xl cursor-pointer' onClick={toggleMenu}>
            <FaTimes />
          </div>
          <NavItems toggleMenu={toggleMenu} />
        </div>

        {/* cart icon */}
        <div className='hidden md:block cursor-pointer relative'>
          <FaShoppingBag className='text-2xl' />
          <sup className='absolute top-0 -right-2 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center'>
            {cartCount}
          </sup>
        </div>
      </nav>
    </header>
  )
}

export default Navbar