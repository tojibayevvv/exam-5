import React from 'react'
import watchXS from '../../assets/watchad.svg'
import watchLG from '../../assets/watchadBig.svg'

const Watchad = () => {
  return (
    <div className='flex justify-center mt-7'>
        <img className='md:hidden' src={watchXS} alt="" />
        <img className='xs:hidden md:block' src={watchLG} alt="" />
    </div>
  )
}

export default Watchad