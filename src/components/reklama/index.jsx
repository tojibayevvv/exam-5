import React from 'react'
import rek1 from "../../assets/ad1.svg"
import rek2 from "../../assets/ad2.svg"
import rek3 from "../../assets/rek3.svg"
import rek4 from "../../assets/rek4.svg"

const Reklama = () => {
  return (
    <div className='xs:block md:flex md:justify-between mt-5'>
        <img className='md:hidden mb-3' src={rek1} alt="" />
        <img className='xs:hidden md:block md:w-[430px] lg:w-[550px]' src={rek3} alt="" />
        <img className='xs:hidden md:block md:w-[250px] lg:w-[320px]' src={rek4} alt="" />
        <img className="md:hidden" src={rek2} alt="" />
    </div>
  )
}

export default Reklama