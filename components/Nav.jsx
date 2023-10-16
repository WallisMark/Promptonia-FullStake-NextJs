import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
   <nav className="flex-between w-full mb-16 pt-3">
    <Link
    href="/"
    className='flex gap-2 flex-center'
    >
    <Image
    src="/assets/images/logo.svg"
    alt='this is Promptopia Logo'
    width={40}
    height={40}
    className="object-contain"
    />
    <p className='logo_text'>Promptopia</p>
    </Link>
 
   </nav>
)}

export default Nav
