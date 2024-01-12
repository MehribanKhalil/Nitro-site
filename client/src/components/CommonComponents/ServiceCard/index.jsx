import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { WislistContext } from '../../../context/WishlistContext'

const ServiceCard = ({ image, title, info, _id, product }) => {
  const { addToWishlist } = useContext(WislistContext)
  return (
    <div className='card space-y-4 my-4 '>
      <div className='text-5xl text-main-color'>
        <i className={image}></i>
      </div>
      <div className='space-y-2'>
        <h3 className='text-lg'>{title}</h3>
        <p className=' text-gray-400'>{info}</p>
        <div className=' flex flex-col gap-3 items-start'>
          <Link className=' text-main-color' to={_id}>Learn More</Link>
          <button onClick={() => addToWishlist(product)} className=' border px-5 py-1'> add faws</button>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard