import React from 'react'
import { FaCheck } from "react-icons/fa6";
const AboutSection = () => {
  return (
    <section className=' py-16 wrapper'>
        <h2 className=' title py-8'>About Us</h2>

        <div className=' flex justify-between flex-col lg:flex-row gap-12 xl:gap-32 px-10  xl:px-0 py-8'>
            <div className=' max-w-[600px]'>
            <img src="https://preview.colorlib.com/theme/nitro/images/hero_1.jpg" alt="" />

            </div>
            <div className=' space-y-7'>
            <h3 className=' text-2xl'>For the next great business</h3>
            <p className=' text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo tempora cumque eligendi in nostrum labore omnis quaerat.</p>

            <ul className=' space-y-3 '>
                <li className=' flex items-center gap-2'> <FaCheck className=' text-green-700' /> Officia quaerat eaque neque</li>
                <li className=' flex items-center gap-2'> <FaCheck className=' text-green-700' /> Possimus aut consequuntur incidunt</li>
                <li className=' flex items-center gap-2'> <FaCheck className=' text-green-700' /> Lorem ipsum dolor sit amet</li>
                <li className=' flex items-center gap-2'> <FaCheck className=' text-green-700' /> Consectetur adipisicing elit</li>
            </ul>
        </div>
        </div>

       

    </section>
  )
}

export default AboutSection