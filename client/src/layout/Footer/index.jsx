import React from 'react'
import { Link } from 'react-router-dom'
import { GoHeart } from "react-icons/go";
import './index.scss'
const Footer = () => {
  return (
    <footer className='footer py-10'>
        <p className=' gap-1 flex flex-col sm:flex-row items-center justify-center'>
            Copyright ©2024 All rights reserved | This template is made with <GoHeart size={20} className=' text-red-700' />  by <Link className=' hover:text-white transition duration-300'>Colorlib</Link></p>
    </footer>
  )
}

export default Footer