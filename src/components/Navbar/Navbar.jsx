import React from 'react'
import NavbarLeft from './NavbarLeft'
import NavbarRight from './NavbarRight'

function Navbar() {
  return (
    <div className='flex justify-between px-[90px] py-[30px]'>
      <NavbarLeft />
      <NavbarRight />
    </div>
  )
}

export default Navbar
