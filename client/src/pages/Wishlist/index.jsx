import React, { useContext } from 'react'
import { WislistContext } from '../../context/WishlistContext'

const WislistPage = () => {
    const { fawItems, deleteFromWislist } = useContext(WislistContext)
    console.log(fawItems);
    return (
        <div className='page'>
            <h2 className='title py-10'>Wishlist</h2>

            <div className=' grid grid-cols-4 py-16 gap-10 wrapper' >
                {
                    fawItems.length===0 ? <p className=' text-main-color text-xl'>Wishlist is currently empty :/</p> 
                    :
                    fawItems.map(item => (


                        <div
                            class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 py-4">
                           <div className=' text-6xl text-main-color flex justify-center'>
                        <i className={item.image}></i>
                        </div>
                            <div class="p-6">
                                <h5
                                    class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                    {item.title}
                                </h5>
                                <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </p>
                                <button
                                    type="button"
                                    onClick={() => deleteFromWislist(item._id)}
                                    class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs  uppercase leading-normal  text-main-color  font-semibold shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    >
                                    delete
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default WislistPage