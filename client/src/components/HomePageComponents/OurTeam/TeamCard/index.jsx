import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const ProductCard = () => {
  return (
    <div className=' my-4'>
        <div className=' relative  overflow-hidden  group cursor-pointer '>
            <img src="https://preview.colorlib.com/theme/nitro/images/person_7.jpg" alt="" />
            <div className=' bg-main-color flex flex-col absolute -left-16 top-0 group-hover:left-0  transition-all duration-500 h-full   px-3 py-6 gap-5 text-white'>
                <button><FaFacebookF /></button>
                <button><FaXTwitter /></button>
                <button><FaLinkedinIn  /></button>
                <button><FaInstagram /></button>
            </div>
        </div>
        <div className='p-3 space-y-1'>
            <h4 className=' text-lg'>Kaiara Spencer</h4>
            <p className=' text-sm text uppercase text-gray-400' >PRODUCT MANAGER</p>
        </div>
    </div>
  )
}

export default ProductCard