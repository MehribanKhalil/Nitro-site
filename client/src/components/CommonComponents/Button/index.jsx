import React from 'react'

const Button = ({children}) => {
  return (
    <button className=' bg-main-color rounded-full px-6  py-3' >
        {children}
    </button >
  )
}

export default Button