import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { SlEnvolopeLetter } from "react-icons/sl";
import FormCompnent from './FormComponent';
const ContactSection = () => {
    return (
        <div className='bg-gray-100 pb-16'>
            <div>
                <h2 className='title'> Contact Us </h2>
            </div>

            <div className=' flex flex-col  justify-center md:flex-row gap-12 md:gap-32 wrapper py-16'>
                <div className=' flex flex-col items-center gap-2'>
                    <CiLocationOn className=' text-main-color' size={25} />
                    <p className=' text-center text-gray-400 max-w-[300px]'>203 Fake St. Mountain View, San Francisco, California, USA</p>
                </div>

                <div  className=' flex flex-col items-center  gap-2'>
                    <FaPhone className=' text-main-color' size={23} />
                    <p className='text-center text-gray-400'><Link>+1 232 3235 324</Link></p>
                </div>

                <div  className=' flex flex-col items-center  gap-2'>
                    <SlEnvolopeLetter className=' text-main-color' size={23}  />
                    <p className='text-center text-gray-400'><Link>youremail@domain.com</Link></p>
                </div>
            </div>

            <div className=' px-12'>
            <FormCompnent/>
            </div>
        </div>
    )
}

export default ContactSection