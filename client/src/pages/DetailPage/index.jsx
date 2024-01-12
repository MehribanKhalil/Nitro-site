import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../components/CommonComponents/Loader'

const DetailPage = () => {
    const [singleProduct, setSingleProduct] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const { id } = useParams()
    const getSingle = async () => {
        const res = await axios.get(`http://localhost:8000/api/product/${id}`)
        setSingleProduct(res.data)
        setIsLoading(false)
    }

    useEffect(() => {
        getSingle()
    }, [])
    return (
        <div className='page flex  items-center justify-center' >
            {
                isLoading ? <Loader/>
                :
                singleProduct &&


                <div
                    class="block max-w-[23rem] rounded-lg p-10  bg-gray-200 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div class="relative overflow-hidden bg-cover bg-no-repeat">
                        <div className=' text-6xl text-main-color flex justify-center'>
                        <i className={singleProduct.image}></i>
                        </div>
                    </div>
                    <div class="p-6">
                        <h1>{singleProduct.title}</h1>
                        <p class="text-base text-neutral-600 dark:text-neutral-200">
                            {singleProduct.info}
                        </p>
                    </div>
                </div>

            }
        </div>
    )
}

export default DetailPage