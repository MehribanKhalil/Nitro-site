import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ServiceCard from '../../CommonComponents/ServiceCard'

const ServicesSection = () => {
    const [services, setServices] = useState([])
    const getProduct = async () => {
        const res = await axios.get("http://localhost:8000/api/product/")
        setServices(res.data)
    }

    useEffect(() => {
        getProduct()
    }, [])


    return (
        <div className=' bg-gray-100 py-16 px-20'>
            <div>
                <h2 className=' title'>Our Services</h2>
            </div>
           <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  wrapper py-10 gap-10'>
           {
                services && services.map((item)=>(
                    <ServiceCard
                        {...item}
                        product={item}
                    />
                ))
            }
           </div>
        </div>
    )
}

export default ServicesSection