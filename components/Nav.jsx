'use client'

import Image from 'next/image'
import Link from 'next/link'
import{signOut,getProviders, signIn} from 'next-auth/react'
import { useEffect, useState } from 'react'


const Nav = () => {
    const isUserLoggedIn = true;
    const [providers,setProviders] = useState (null);
    const [toggleDropdown, setToggleDropdown] = useState(false)

    useEffect(()=>{
        const setProviders = async () => {
            const response = await getProviders();

            setProviders(response);
        }
            setProviders();
    },[])

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

    {/* implementaion of the desk top view */}
    <div className="sm:flex hidden">
        {isUserLoggedIn ? 
        (
            <div className='flex gap-3 md:gap-5'>

                <Link 
                href='/create-prompt'
                className='black_btn'>
                    Create Post
                </Link>

                <button type='button' onClick={signOut}
                className='outline_btn'
                > 
                Sign Out

                </button>

                <Link href='/profile'>
                    <Image
                    src='/assets/images/logo.svg'
                    alt='profile image'
                    width={37}
                    height={37}
                    className='rounded-full'
                    />
                </Link>
            </div>

        ):
        (
            <>
              {
               providers && Object.values(providers).map((provider)=>(
                <button
                type='button'
                key={provider.name}
                onClick={() => signIn(provider.id)}
                className='black_button'
                >
                    Sign In
                </button>
               )) 
              } 
            </>
        )
    }
    </div>
    {/* view for the mobile devices */}

    <div className="sm:hidden flex relative">

        {
            isUserLoggedIn ? (
                <div className="flex">
                    <Image
                    src='/assets/images/logo.svg'
                    alt='profile image'
                    width={37}
                    height={37}
                    className='rounded-full'
                    onClick={()=>setToggleDropdown((prev) => !prev)}
                    />
                     {toggleDropdown && (
                        <div className='dropdown'>
                            <Link
                            href='/profile'
                            className='dropdown_link'
                            onClick={() => setToggleDropdown(false)}
                            >
                                My Profile
                            </Link>
                            <Link
                            href='/create-prompt'
                            className='dropdown_link'
                            onClick={() => setToggleDropdown(false)}
                            >
                                Create prompt
                                
                            </Link>
                            <button
                            type='button'
                            onClick={()=>{
                                setToggleDropdown(false);
                                signOut()
                            }}
                            className='mt-5 w-full black_btn'
                            >
                               Sign Out 
                            </button>

                        </div>
                     )} 
                </div>
            ):
            (
                <>
                  {
                   providers && Object.values(providers).map((provider)=>(
                    <button
                    type='button'
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className='black_button'
                    >
                        Sign In
                    </button>
                   )) 
                  } 
                </>
            )
        }

    </div>
   </nav>
)}

export default Nav
