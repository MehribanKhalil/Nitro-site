import React from 'react'
import './index.scss'
import Button from '../../CommonComponents/Button'
const HeroSection = () => {
  return (
    <section className='hero-section  text-white'>
        <div className="content space-y-6 ">
            <h1 className=' font-bold'>WELCOME</h1>
            <p className=' text-2xl font-thin  max-w-[700px] pb-4' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio soluta eius error.</p>
            <Button>Get In Touch</Button>
        </div>
    </section>
  )
}

export default HeroSection