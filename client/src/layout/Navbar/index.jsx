import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './index.scss'
import { GoHeart } from "react-icons/go";
import { FaBars } from "react-icons/fa";
import Hamburger from 'hamburger-react'
import { WislistContext } from '../../context/WishlistContext';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)
  const locaction=useLocation()
  const [offset, setOffset] = useState(0);

  const {fawItems}=useContext(WislistContext)
  useEffect(() => {
      const onScroll = () => setOffset(window.scrollY);
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);
  // console.log(offset); 

  return (
    <nav className={`${locaction.pathname==='/'  ? "fixed  border-b  border-gray-400" : '!text-black bg-white py-3 '} navbar   duration-300 flex items-center justify-between px-7 md:px-32 xl:px-32 ${offset < 200 ? "py-5 text-white" : 'bg-white py-3 text-black'}  w-full top-0 left-0 z-20`}>
      <div>
        <NavLink  className='nav-item active text-3xl' to={'/'}>Nitro <span className=' text-main-color'>.</span></NavLink>

      </div>  

      <div className=' hidden items-center justify-center gap-12 lg:flex'> 
        <NavLink  className='nav-item active  text-lg' to={'/'}>Home</NavLink>
        <NavLink  className='nav-item active  text-lg' to={''}>Portfolio</NavLink>
        <NavLink  className='nav-item active  text-lg' to={''}>Services</NavLink>
        <NavLink  className='nav-item active  text-lg' to={''}>Contact</NavLink>
        <NavLink  className='nav-item active  text-lg' to={'/admin'}>Admin</NavLink>
        <NavLink className='nav-item active  text-lg' to={'/add'}>Add</NavLink>
        <NavLink   className='nav-item active  text-lg  relative' to={'/wislist'}>
          <span className=' absolute -top-1 -right-2 text-[13px] bg-main-color  rounded-full w-4 h-4 text-white flex justify-center items-center'>{fawItems.length}</span>
          <GoHeart size={24} />
        </NavLink>
      </div>
      <div className=' block lg:hidden'>
        <button>
        <Hamburger toggled={isOpen} toggle={setOpen} />

        </button>
      </div>

    </nav>
  )
}

export default Navbar