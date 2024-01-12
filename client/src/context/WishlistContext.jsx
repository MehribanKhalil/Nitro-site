import { createContext, useState } from "react";
import UseLocalStorage from "../hooks/UseLocalStorage";
import toast, { Toaster } from 'react-hot-toast';


export const WislistContext=createContext()

export const WislistProvider=({children})=>{

    const [fawItems, setFawItems] = UseLocalStorage("wishlist")

    const addToWishlist =(product)=>{
        const index=fawItems.findIndex(x=> x._id === product._id)
        if (index=== -1) {
            setFawItems([...fawItems,{...product}])
            toast.success('Added to Wishlist');
        } else {
            toast.error('Already exist');

        }
    }

    const deleteFromWislist =(id)=>{
        setFawItems(fawItems.filter(x=>x._id !== id))
        toast.success('Deleted from Wishlist');

    }


    return(
        <WislistContext.Provider value={{addToWishlist,fawItems,deleteFromWislist}}>
            {children}
        </WislistContext.Provider>
    )

}