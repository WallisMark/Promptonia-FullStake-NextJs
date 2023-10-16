'use client'
import Image from 'next/image'
import Link from 'next/link'


const Nav = () => {
    const isUserLoggedIn = true;
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
    <div className="sm:flex hidden">
        {isUserLoggedIn ? 
        (
            <div className='flex gap-3 md:gap-5'>
                <Link 
                href='/create-prompt'
                className='black_btn'>
                    Create Post
                </Link>
            </div>

        ):
        (
            <>
                
            </>
        )
    }
    </div>
   </nav>
)}

export default Nav
