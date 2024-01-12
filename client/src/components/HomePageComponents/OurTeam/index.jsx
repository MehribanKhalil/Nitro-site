import React from 'react'
import ProductCard from './TeamCard'

const OurTeam = () => {
    return (
        <section className=' py-10 wrapper px-5 md:px-12'>

            <div className=' space-y-3'>
                <h2 className='title'>Our Team</h2>
                <p className=' text-xl font-light text-center max-w-[700px]  mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima neque tempora reiciendis.</p>
            </div>

            <div className=' content place-items-center grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-9 py-16'>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>

        </section>
    )
}

export default OurTeam